document.addEventListener("DOMContentLoaded", function() {
    buildCustomDropdowns();
    initAppCore();
    setupTickers();
    initCreativityKnob();
    initTransmissionEngine();
    initNotepadVox();
    initNovaFm();
});

/* ======================================================
   SPLASH LOGIC
====================================================== */
window.enterSite = function() {
    const splash = document.getElementById("splash-screen");
    if (splash) {
        splash.classList.add("hidden");
    }
};
/* ======================================================
   LIVE DYNAMIC FEED TICKERS (WITH FAILOVER PATHWAYS)
====================================================== */
const corsProxies = [
    'https://api.allorigins.win/raw?url=',
    'https://corsproxy.io/?',
    'https://api.codetabs.com/v1/proxy?quest='
];

async function fetchWithFallbackProxy(targetUrl) {
    for (let proxy of corsProxies) {
        try {
            const requestUrl = `${proxy}${encodeURIComponent(targetUrl)}`;
            const response = await fetch(requestUrl);
            if (response.ok) return await response.text();
        } catch (e) {
            console.warn(`Proxy gateway ${proxy} offline, routing next...`);
        }
    }
    throw new Error("All proxy pathways exhausted.");
}

async function setupTickers() {
    const f24Ticker = document.getElementById('france24-ticker');
    const sdTicker = document.getElementById('sciencedaily-ticker');

    // France 24 Culture Live Feed
    try {
        if (f24Ticker) {
            f24Ticker.innerHTML = '<span style="color: #666;">Receiving transmission...</span>';
            const xmlText = await fetchWithFallbackProxy('https://www.france24.com/en/culture/rss');
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');
            
            if (items.length === 0) {
                f24Ticker.innerHTML = '<span style="color: #666;">No headlines received.</span>';
            } else {
                let tickerHTML = '';
                items.forEach(item => {
                    const title = item.querySelector('title')?.textContent || 'No title';
                    const link = item.querySelector('link')?.textContent || '#';
                    tickerHTML += `<a href="${link}" target="_blank" rel="noopener" title="${title}">${title}</a>`;
                });
                f24Ticker.innerHTML = tickerHTML;
            }
            
            f24Ticker.addEventListener('mouseenter', () => f24Ticker.classList.add('paused'));
            f24Ticker.addEventListener('mouseleave', () => f24Ticker.classList.remove('paused'));
        }
    } catch (error) {
        console.error('France 24 Ticker error:', error);
        if (f24Ticker) f24Ticker.innerHTML = `<span style="color: #ff0033;">[LIVE FEED TRANSITION FAILED]</span>`;
    }

    // ScienceDaily Society Live Feed
    try {
        if (sdTicker) {
            sdTicker.innerHTML = '<span style="color: #666; font-style: italic;">[ Accessing Research Stream... ]</span>';
            const xmlText = await fetchWithFallbackProxy('https://www.sciencedaily.com/rss/top/society.xml');
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');
            
            if (items.length === 0) {
                sdTicker.innerHTML = '<span style="color: #ff0033;">[ Research Feed Empty ]</span>';
            } else {
                let tickerHTML = '';
                items.forEach(item => {
                    const title = item.querySelector('title')?.textContent || 'Research Update';
                    const link = item.querySelector('link')?.textContent || '#';
                    const cleanTitle = title.replace(/^ScienceDaily:\s*/i, '');
                    tickerHTML += `<a href="${link}" target="_blank" rel="noopener" title="${cleanTitle}">${cleanTitle}</a>`;
                });
                sdTicker.innerHTML = tickerHTML;
            }
            
            sdTicker.addEventListener('mouseenter', () => sdTicker.classList.add('paused'));
            sdTicker.addEventListener('mouseleave', () => sdTicker.classList.remove('paused'));
        }
    } catch (error) {
        console.error('ScienceDaily Ticker error:', error);
        if (sdTicker) sdTicker.innerHTML = `<span style="color: #ff0033;">[ SCIENCE STREAM TIMED OUT ]</span>`;
    }
}

/* ======================================================
   APP FUNCTIONALITY & 6-CHANNEL PARALLEL LEXICON ENGINE
====================================================== */
let dictionaryData = [];
const waghdasUndoStack = [];
let directCutArmed = false;

function pushWaghdasUndo(pad) {
    if (!pad) return;
    if (waghdasUndoStack.length === 0 || waghdasUndoStack[waghdasUndoStack.length - 1] !== pad.value) {
        waghdasUndoStack.push(pad.value);
        if (waghdasUndoStack.length > 20) waghdasUndoStack.shift();
    }
}

function restoreWaghdasUndo(pad) {
    if (!pad || waghdasUndoStack.length === 0) return;
    pad.value = waghdasUndoStack.pop();
    pad.dispatchEvent(new Event("input", { bubbles: true }));
}

function initAppCore() {
    const apiKeyInput = document.getElementById("novaApiKey");
    const keyStatus = document.getElementById("keyStatus");
    const clearKeyBtn = document.getElementById("clearKeyBtn");
    const creativitySlider = document.getElementById("creativity");
    const creativityVal = document.getElementById("creativityValue");
    const generateButton = document.getElementById("generateButton");
    const promptInput = document.getElementById("prompt");
    const outputDiv = document.getElementById("output");
    const modelSelect = document.getElementById("modelSelect") || document.getElementById("novaModelSelect");
    const notepad = document.getElementById("notepad");

    // 1. Live BYOK key status
    if (apiKeyInput && keyStatus) {
        apiKeyInput.addEventListener("input", () => {
            const raw = apiKeyInput.value.trim();
            if (raw.length > 0) {
                keyStatus.textContent = `BYOK READY (••••••••${raw.slice(-4)})`;
                keyStatus.style.color = "#ff0033";
            } else {
                keyStatus.textContent = "NO KEY ENTERED";
                keyStatus.style.color = "#555";
            }
        });
    }

    // 2. Clear button handler
    if (clearKeyBtn && apiKeyInput) {
        clearKeyBtn.addEventListener("click", () => {
            apiKeyInput.value = "";
            if (keyStatus) {
                keyStatus.textContent = "NO KEY ENTERED";
                keyStatus.style.color = "#555";
            }
        });
    }
   // 3. Slider update
    if (creativitySlider && creativityVal) {
        creativitySlider.addEventListener("input", () => {
            creativityVal.textContent = creativitySlider.value;
        });
    }

    // 4. Generate call to Nova API
    if (generateButton) {
        generateButton.addEventListener("click", async () => {
            const key = apiKeyInput ? apiKeyInput.value
                .trim()
                .replace(/^NOVA_API_KEY\s*=\s*/i, '')
                .replace(/^Bearer\s+/i, '')
                .replace(/^["']|["']$/g, '')
                .trim() : "";

            const promptText = promptInput ? promptInput.value.trim() : "";
            const modelValue = modelSelect ? modelSelect.value : "nova-2-lite-v1";
            const temperature = creativitySlider ? parseFloat(creativitySlider.value) : 0.7;

            if (!key) {
                outputDiv.innerHTML = "<span class='error-detail'>ERROR: PLEASE ENTER YOUR NOVA API KEY.</span>";
                return;
            }
            if (!promptText) {
                outputDiv.innerHTML = "<span class='error-detail'>ERROR: INPUT FIELD IS EMPTY. PLEASE DEFINE A QUERY.</span>";
                return;
            }

            outputDiv.innerHTML = "<span class='generating'>TRANSMITTING VIA CHANNELS... CONNECTING TO AMAZON NOVA GATEWAY...</span>";

            const NOVA_URL = "https://api.nova.amazon.com/v1/chat/completions";
            const proxyUrl = "https://lively-limitless.inkrealm.workers.dev/?url=" + encodeURIComponent(NOVA_URL);

            try {
                const response = await fetch(proxyUrl, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${key}`
                    },
                    body: JSON.stringify({
                        model: modelValue,
                        messages: [
                            { role: "system", content: "You are a direct, helpful assistant. Provide clear, straight, and concise answers without filler." },
                            { role: "user", content: promptText }
                        ],
                        temperature: temperature,
                        max_tokens: 1024
                    })
                });

                if (!response.ok) {
                    const errorObj = await response.json().catch(() => ({}));
                    throw new Error(errorObj?.error?.message || `HTTP ${response.status}`);
                }

                const data = await response.json();
                const contentText = data?.choices?.[0]?.message?.content || "No data received.";
                outputDiv.textContent = contentText;

            } catch (err) {
                outputDiv.innerHTML = `<span class='error-detail'>TRANSMISSION INTERRUPTED: ${err.message}</span>`;
            }
        });
    
        // Copy / Import Controls
        document.getElementById("copyButton").addEventListener("click", () => {
            navigator.clipboard.writeText(outputDiv.textContent);
        });

        document.getElementById("importButton").addEventListener("click", () => {
            if (!notepad) return;
            pushWaghdasUndo(notepad);
            notepad.value += (notepad.value.trim() ? "\n\n" : "") + outputDiv.textContent;
            notepad.dispatchEvent(new Event("input", { bubbles: true }));
        });

        // Notepad Export Action
        document.getElementById("exportButton").addEventListener("click", () => {
            const text = notepad ? notepad.value : "";
            const blob = new Blob([text], {type: "text/plain"});
            const anchor = document.createElement("a");
            anchor.download = "minraud-workspace.txt";
            anchor.href = window.URL.createObjectURL(blob);
            anchor.click();
        });
    }

    // ================= EXPRESS MACHINE INTEGRATION (HARDENED + STOP-THE-WEDDING DIRECT MODE) =================
    const pullPad = document.getElementById("pullFromNotepadBtn");
    const pullAi = document.getElementById("pullFromAiBtn");
    const directToggle = document.getElementById("directBladeToggle");
    const buffer = document.getElementById("mixerSource");
    const outputStream = document.getElementById("mixerOutput");
    const uploadPad = document.getElementById("pushToNotepadBtn");
    const undoCutBtn = document.getElementById("undoCutBtn");
    const folioUndoBtn = document.getElementById("folioUndoBtn");

    if (directToggle) {
        directToggle.addEventListener("click", () => {
            directCutArmed = !directCutArmed;
            directToggle.textContent = directCutArmed ? "⚡ DIRECT: ON" : "⚡ DIRECT: OFF";
            directToggle.classList.toggle("armed", directCutArmed);
        });
    }

    if (undoCutBtn) undoCutBtn.addEventListener("click", () => restoreWaghdasUndo(notepad));
    if (folioUndoBtn) folioUndoBtn.addEventListener("click", () => restoreWaghdasUndo(notepad));

    // Pull from Notepad into Buffer (prefers highlighted selection if present)
    pullPad.addEventListener("click", () => {
        if (!notepad) return;
        const sel = notepad.value.substring(notepad.selectionStart, notepad.selectionEnd).trim();
        buffer.value = sel || notepad.value;
    });

    // Pull from AI Output into Buffer
    pullAi.addEventListener("click", () => {
        buffer.value = (typeof outputDiv !== "undefined" && outputDiv.textContent) 
            ? outputDiv.textContent 
            : document.getElementById("output").textContent;
    });

    // Upload to Notepad & trigger input event to guarantee storage sync
    uploadPad.addEventListener("click", () => {
        if (!notepad) return;
        const streamVal = outputStream.value.trim();
        if (!streamVal) return;
        pushWaghdasUndo(notepad);
        notepad.value += (notepad.value.trim() ? "\n\n" : "") + streamVal;
        notepad.dispatchEvent(new Event("input", { bubbles: true }));
    });

    function runCutAlgorithm(algo, rawInput) {
        let text = rawInput.replace(/---/g, " ").trim();
        let resultText = "";

        if (algo === "scramble") {
            let words = text.split(/\s+/).filter(Boolean);
            if (words.length <= 1) {
                resultText = text;
            } else {
                for (let i = words.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [words[i], words[j]] = [words[j], words[i]];
                }
                resultText = words.join(" ");
            }
        } else if (algo === "fold") {
            let lines = text.split("\n").map(l => l.trim()).filter(Boolean);
            if (lines.length <= 1) {
                let allWords = text.split(/\s+/).filter(Boolean);
                if (allWords.length <= 2) {
                    resultText = allWords.reverse().join(" ");
                } else {
                    lines = [];
                    const wordsPerLine = Math.max(2, Math.ceil(allWords.length / 4));
                    for (let i = 0; i < allWords.length; i += wordsPerLine) {
                        lines.push(allWords.slice(i, i + wordsPerLine).join(" "));
                    }
                }
            }
            if (!resultText && lines.length > 1) {
                let mid = Math.ceil(lines.length / 2);
                let pageA = lines.slice(0, mid);
                let pageB = lines.slice(mid);
                while (pageB.length < pageA.length) {
                    pageB.push(pageB[pageB.length - 1] || "");
                }
                let foldedLines = [];
                for (let i = 0; i < pageA.length; i++) {
                    let wordsA = pageA[i].split(/\s+/).filter(Boolean);
                    let wordsB = (pageB[i] || "").split(/\s+/).filter(Boolean);
                    let midA = Math.ceil(wordsA.length / 2);
                    let midB = Math.ceil(wordsB.length / 2);
                    let leftA = wordsA.slice(0, midA).join(" ").replace(/[,;:.!?]+$/, "");
                    let rightA = wordsA.slice(midA).join(" ");
                    let leftB = wordsB.slice(0, midB).join(" ").replace(/[,;:.!?]+$/, "");
                    let rightB = wordsB.slice(midB).join(" ");
                    let seam1 = [leftA, rightB].filter(Boolean).join(" ");
                    if (seam1) foldedLines.push(seam1);
                    let seam2 = [leftB, rightA].filter(Boolean).join(" ");
                    if (seam2) foldedLines.push(seam2);
                }
                resultText = foldedLines.join("\n");
            }
        } else if (algo === "chunks") {
            let words = text.split(/\s+/).filter(Boolean);
            if (words.length <= 3) {
                resultText = words.reverse().join(" ");
            } else {
                let chunks = [];
                const chunkSize = 3; 
                for (let i = 0; i < words.length; i += chunkSize) {
                    chunks.push(words.slice(i, i + chunkSize).join(" "));
                }
                for (let i = chunks.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [chunks[i], chunks[j]] = [chunks[j], chunks[i]];
                }
                resultText = chunks.join(" ");
            }
        } else if (algo === "reverse") {
            let words = text.split(/\s+/).filter(Boolean);
            resultText = words.reverse().join(" ");
        } else if (algo === "diagonal") {
            let lines = text.split("\n").map(l => l.trim()).filter(Boolean);
            if (lines.length <= 1) lines = [text];
            let mid = Math.floor(lines.length / 2);
            let first = lines.slice(0, mid);
            let second = lines.slice(mid).reverse();
            let folded = [];
            let max = Math.max(first.length, second.length);
            for (let i = 0; i < max; i++) {
                if (i < first.length) folded.push(first[i]);
                if (i < second.length) folded.push(second[i]);
            }
            let words = folded.join(" ").split(/\s+/).filter(Boolean);
            if (words.length < 4) {
                resultText = words.reverse().join(" ");
            } else {
                let walked = [];
                const step = 2;
                for (let start = 0; start < step; start++) {
                    for (let i = start; i < words.length; i += step) {
                        walked.push(words[i]);
                    }
                }
                let half = Math.floor(walked.length / 2);
                let front = walked.slice(0, half);
                let back  = walked.slice(half).reverse();
                resultText = front.concat(back).join(" ");
            }
        } else if (algo === "permutation") {
            let words = text.split(/\s+/).filter(Boolean).slice(0, 32);
            if (words.length < 3) {
                resultText = words.join(" ");
            } else {
                let outputLines = [];
                const clusterSize = 4;
                for (let i = 0; i < words.length; i += clusterSize) {
                    let chunk = words.slice(i, i + clusterSize);
                    if (chunk.length > 1) {
                        for (let r = 0; r < chunk.length; r++) {
                            let shifted = chunk.slice(r).concat(chunk.slice(0, r));
                            outputLines.push(shifted.join(" "));
                        }
                        outputLines.push("---");
                    } else {
                        outputLines.push(chunk[0]);
                    }
                }
                resultText = outputLines.join("\n");
            }
        }
        return resultText;
    }

    // Core Cut Controller
    document.querySelectorAll(".mixer-controls button").forEach(btn => {
        btn.addEventListener("click", () => {
            const algo = btn.getAttribute("data-algo");
            if (!algo) return;

            // Stop-the-Wedding Direct Mode: slice directly inside Waghdas (selection or full pad)
            if (directCutArmed && notepad && notepad.value.trim()) {
                pushWaghdasUndo(notepad);
                const start = notepad.selectionStart;
                const end = notepad.selectionEnd;
                if (start !== end) {
                    const selectedText = notepad.value.substring(start, end);
                    const mutated = runCutAlgorithm(algo, selectedText);
                    notepad.value = notepad.value.substring(0, start) + mutated + notepad.value.substring(end);
                    notepad.selectionStart = start;
                    notepad.selectionEnd = start + mutated.length;
                } else {
                    notepad.value = runCutAlgorithm(algo, notepad.value);
                }
                outputStream.value = notepad.value.substring(notepad.selectionStart, notepad.selectionEnd) || notepad.value;
                notepad.dispatchEvent(new Event("input", { bubbles: true }));
                return;
            }

            // Classic Buffer Mode
            let rawText = buffer.value.trim() ? buffer.value : outputStream.value;
            if (!rawText && notepad && notepad.value.trim()) {
                rawText = notepad.value;
                buffer.value = rawText;
            }
            if (!rawText) return;

            const resultText = runCutAlgorithm(algo, rawText);
            outputStream.value = resultText;
            buffer.value = resultText.replace(/\n?---\n?/g, "\n").trim();
        });
    });
  // 6-Channel Parallel Lexicon Pipeline
    const dictionaryUrls = [
        'https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/master/dictionary.json',
        'https://gist.githubusercontent.com/BideoWego/60fbd40d5d1f0f1beca11ba95221dd38/raw/58fb4cce910fbf5fa67a2f0f1f619c09d7b1b373/dictionary.json',
        'https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json',
        'https://raw.githubusercontent.com/hathibelagal/German-English-JSON-Dictionary/master/german_english.json', 
        'https://raw.githubusercontent.com/egorkaru/synonym_dictionary/master/dictionary.json', 
        'https://raw.githubusercontent.com/letiantian/mini-pinyin/master/pinyin.json' 
    ];

    const dictInput = document.getElementById("dictionary-search");
    const dictResult = document.getElementById("dictionary-result");
    const statusEl = document.getElementById("dictionary-status");

    async function loadAllDictionaries() {
        if (statusEl) statusEl.textContent = "SYNCING METRIC LEXICON...";
        try {
            const results = await Promise.allSettled(
                dictionaryUrls.map(url => axios.get(url).then(res => res.data))
            );

            dictionaryData = results.map(r => r.status === "fulfilled" ? r.value : null);

            const loaded = dictionaryData.filter(Boolean).length;
            if (statusEl) {
                statusEl.textContent = loaded === 6
                    ? "6 Source Lexicon + Live Thesaurus Online"
                    : `${loaded}/6 lexicons online (some sources failed)`;
            }
        } catch (err) {
            console.error("Dictionary load failure:", err);
            if (statusEl) statusEl.textContent = "OFFLINE - LEXICON DATABASES FAILED TO LOAD";
        }
    }
    
    loadAllDictionaries();

    // Synonym quickSearch exposed globally
    window.quickSearch = function(word) {
        if (dictInput) {
            dictInput.value = word;
            searchLocalDictionaries(word);
        }
    };

    // Double-click any word inside Waghdas to look up in Ghadis (Stop the Wedding style)
    if (notepad) {
        notepad.addEventListener("dblclick", () => {
            const selected = notepad.value.substring(notepad.selectionStart, notepad.selectionEnd).trim().replace(/^[^\w]+|[^\w]+$/g, "");
            if (selected && selected.length > 1 && !/\s/.test(selected)) {
                dictInput.value = selected;
                searchLocalDictionaries(selected);
            }
        });
    }

    async function searchLocalDictionaries(word) {
        const query = word.trim();
        const lowQuery = query.toLowerCase();
        if (!query || dictionaryData.length === 0) return;

        dictResult.innerHTML = '<div class="loading">Searching...</div>';

        let found = false;
        let html = `<div><span class="word-title">${query}</span></div><div style="margin-top:0.5rem;">`;

        // 1. WEBSTER (Sources 0, 1, 2)
        for (let i = 0; i < 3; i++) {
            const dict = dictionaryData[i];
            if (dict && dict[lowQuery]) {
                found = true;
                html += `<div style="margin-bottom:0.8rem; border-left: 2px solid #ff0033; padding-left:10px;">
                            <span style="color:#ff0033; font-size:0.7rem; font-weight:bold;">WEBSTER ${i+1}</span><br>
                            ${dict[lowQuery]}
                         </div>`;
            }
        }

        // 2. GERMAN (Source 3)
        const germanDict = dictionaryData[3];
        if (germanDict) {
            const matches = Object.entries(germanDict).filter(([ger, eng]) => 
                ger.toLowerCase() === lowQuery || eng.toLowerCase().includes(lowQuery)
            );
            if (matches.length > 0) {
                found = true;
                html += `<div style="margin-top:0.5rem;border-top:1px dashed #444;padding-top:0.5rem;">
                            <div style="color:#ff0033;font-size:0.75rem;font-weight:bold;">🇩🇪 GERMAN</div>`;
                matches.slice(0, 5).forEach(([ger, eng]) => {
                    html += `<div style="font-size:0.85rem;"><strong>${ger}</strong>: ${eng}</div>`;
                });
                html += `</div>`;
            }
        }

        // 3. RUSSIAN (Source 4)
        const russianData = dictionaryData[4];
        if (russianData && Array.isArray(russianData.wordlist)) {
            const hits = russianData.wordlist.filter(item => {
                if (!item.name) return false;
                const name = item.name.toLowerCase();
                const def  = (item.definition || "").toLowerCase();
                const syns = (item.synonyms || []).join(" ").toLowerCase();
                const sims = (item.similars || []).join(" ").toLowerCase();
                return name === lowQuery ||
                       name.includes(lowQuery) ||
                       def.includes(lowQuery) ||
                       syns.includes(lowQuery) ||
                       sims.includes(lowQuery);
            }).slice(0, 8);

            if (hits.length > 0) {
                found = true;
                html += `<div style="margin-top:0.5rem;border-top:1px dashed #444;padding-top:0.5rem;">
                            <div style="color:#ff0033;font-size:0.75rem;font-weight:bold;">🇷🇺 RUSSIAN SYNONYMS (Abramov)</div>`;

                hits.forEach(hit => {
                    html += `<div style="margin:0.4rem 0; font-size:0.85rem;">
                                <strong style="color:#ff6666;">${hit.name}</strong>`;
                    if (hit.definition) {
                        html += `<div style="color:#aaa; font-size:0.8rem; margin:2px 0;">${hit.definition}</div>`;
                    }
                    if (hit.synonyms && hit.synonyms.length) {
                        html += `<div>${hit.synonyms.map(s =>
                            `<span class="synonym-tag" onclick="quickSearch('${s}')">${s}</span>`
                        ).join('')}</div>`;
                    }
                    if (hit.antonyms && hit.antonyms.length) {
                        html += `<div style="margin-top:3px; color:#888; font-size:0.75rem;">Ant: ${hit.antonyms.join(", ")}</div>`;
                    }
                    html += `</div>`;
                });
                html += `</div>`;
            }
        }

        // 4. CHINESE (Source 5)
        const pinyinDict = dictionaryData[5];
        if (pinyinDict && pinyinDict[query]) {
            found = true;
            html += `<div style="margin-top:0.5rem;border-top:1px dashed #444;padding-top:0.5rem;">
                        <div style="color:#ff0033;font-size:0.75rem;font-weight:bold;">🇨🇳 CHINESE PINYIN</div>
                        <div style="font-size:1.2rem;">${query} → ${pinyinDict[query]}</div>
                     </div>`;
        }

        // 5. DATAMUSE (Syn/Ant/Rhyme online fallback)
        try {
            const [syns, ants, rhymes] = await Promise.all([
                axios.get(`https://api.datamuse.com/words?rel_syn=${lowQuery}&max=10&k=dm_oScUNlcwITwgp0MloYtxbDFyHUQusdLe`).catch(() => ({data:[]})),
                axios.get(`https://api.datamuse.com/words?rel_ant=${lowQuery}&max=8&k=dm_oScUNlcwITwgp0MloYtxbDFyHUQusdLe`).catch(() => ({data:[]})),
                axios.get(`https://api.datamuse.com/words?rel_rhy=${lowQuery}&max=10&k=dm_oScUNlcwITwgp0MloYtxbDFyHUQusdLe`).catch(() => ({data:[]}))
            ]);

            const addSection = (title, data) => {
                if (!data.length) return '';
                found = true;
                return `<div style="margin-top:0.5rem;border-top:1px dashed #444;padding-top:0.5rem;">
                            <div style="color:#777;font-size:0.75rem; margin-bottom: 4px;">${title}</div>
                            ${data.map(d => `<span class="synonym-tag" onclick="quickSearch('${d.word}')">${d.word}</span>`).join('')}
                        </div>`;
            };

            html += addSection('SYNONYMS', syns.data);
            html += addSection('ANTONYMS', ants.data);
            html += addSection('RHYMES', rhymes.data);
        } catch (e) {}

        html += `</div>`;
        dictResult.innerHTML = found ? html : `<div class="no-results">No associations found for "${query}"</div>`;
    }

    // Action binding
    document.getElementById("search-button").addEventListener("click", () => {
        searchLocalDictionaries(dictInput.value);
    });

    document.getElementById("dictionary-search").addEventListener("keydown", (e) => {
        if (e.key === "Enter") searchLocalDictionaries(dictInput.value);
    });

    document.getElementById("random-word").addEventListener("click", () => {
        const list = ["interzone", "virus", "matrix", "sovereign", "neuron", "silence", "machine", "cutup", "entropy", "junkie", "system"];
        dictInput.value = list[Math.floor(Math.random() * list.length)];
        searchLocalDictionaries(dictInput.value);
    });

    document.getElementById("clear-dict").addEventListener("click", () => {
        dictInput.value = "";
        dictResult.innerHTML = "<div class='no-results'>Lexicon Cleared.</div>";
    });
}

/* ======================================================
   TELEGRAPH ROTARY KNOB CONTROLLER
====================================================== */
function initCreativityKnob() {
    const knob = document.getElementById("creativityKnob");
    const cap = document.getElementById("knobCap");
    const valueDisplay = document.getElementById("creativityValue");
    const hiddenInput = document.getElementById("creativity");

    if (!knob || !cap || !hiddenInput) return;

    let currentValue = parseFloat(hiddenInput.value) || 0.7;
    const minVal = 0.1;
    const maxVal = 1.0;
    const minAngle = -135;
    const maxAngle = 135;

    function updateKnob(val) {
        val = Math.max(minVal, Math.min(maxVal, parseFloat(val.toFixed(2))));
        currentValue = val;
        hiddenInput.value = val.toFixed(1);
        valueDisplay.textContent = val.toFixed(1);

        const pct = (val - minVal) / (maxVal - minVal);
        const angle = minAngle + pct * (maxAngle - minAngle);
        cap.style.transform = `rotate(${angle}deg)`;

        hiddenInput.dispatchEvent(new Event("input"));
    }

    updateKnob(currentValue);

    let isDragging = false;
    let startY = 0;
    let startVal = 0.7;

    knob.addEventListener("pointerdown", (e) => {
        isDragging = true;
        startY = e.clientY;
        startVal = currentValue;
        knob.setPointerCapture(e.pointerId);
    });

    knob.addEventListener("pointermove", (e) => {
        if (!isDragging) return;
        const deltaY = startY - e.clientY;
        const deltaVal = (deltaY / 120) * (maxVal - minVal);
        updateKnob(startVal + deltaVal);
    });

    knob.addEventListener("pointerup", (e) => {
        if (!isDragging) return;
        isDragging = false;
        try { knob.releasePointerCapture(e.pointerId); } catch(err) {}
    });

    knob.addEventListener("wheel", (e) => {
        e.preventDefault();
        const step = e.deltaY < 0 ? 0.05 : -0.05;
        updateKnob(currentValue + step);
    }, { passive: false });
}

/* ======================================================
   URL TRANSMISSION ENGINE (DEFLATE-RAW HASH)
====================================================== */
function initTransmissionEngine() {
    const pad = document.getElementById("notepad");
    const captureBtn = document.getElementById("captureUrlBtn");
    const clearBtn = document.getElementById("clearButton");
    const readoutBox = document.getElementById("urlReadout");
    const readoutContainer = document.getElementById("urlReadoutContainer");
    const copyStatus = document.getElementById("urlCopyStatus");

    if (!pad) return;

    function sanitizeBuffer(text) {
        if (!text) return "";
        return text.split("// --- TRANSMISSION URL CAPTURED ---")[0].trim();
    }

    pad.addEventListener("input", () => {
        localStorage.setItem("MINRAUD_NOTEPAD_BUFFER", pad.value);
    });

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            pushWaghdasUndo(pad);
            pad.value = "";
            localStorage.removeItem("MINRAUD_NOTEPAD_BUFFER");
            pad.dispatchEvent(new Event("input", { bubbles: true }));
            if (readoutContainer) readoutContainer.style.display = "none";
            if (readoutBox) readoutBox.value = "";
        });
    }

    if (captureBtn && readoutBox && readoutContainer) {
        captureBtn.onclick = async () => {
            const cleanText = sanitizeBuffer(pad.value);
            if (!cleanText) {
                copyStatus.textContent = "BUFFER EMPTY: NO DATA";
                copyStatus.style.color = "#ff0033";
                readoutContainer.style.display = "block";
                readoutBox.value = "";
                return;
            }

            try {
                const stream = new Blob([new TextEncoder().encode(cleanText)])
                    .stream()
                    .pipeThrough(new CompressionStream("deflate-raw"));
                const buffer = await new Response(stream).arrayBuffer();
                const binary = String.fromCharCode(...new Uint8Array(buffer));
                const base64 = btoa(binary)
                    .replace(/\+/g, "-")
                    .replace(/\//g, "_")
                    .replace(/=+$/, "");

                const shareUrl = `${window.location.origin}${window.location.pathname}#${base64}`;

                readoutBox.value = shareUrl;
                readoutContainer.style.display = "block";

                await navigator.clipboard.writeText(shareUrl);

                copyStatus.textContent = "COPIED TO CLIPBOARD";
                copyStatus.style.color = "#00ff66";
                setTimeout(() => {
                    copyStatus.style.color = "#888";
                }, 2500);

            } catch (err) {
                console.error("Compression failed:", err);
                copyStatus.textContent = "COMPRESSION FAILED";
                copyStatus.style.color = "#ff0033";
            }
        };

        readoutBox.onclick = async () => {
            if (!readoutBox.value) return;
            readoutBox.select();
            try {
                await navigator.clipboard.writeText(readoutBox.value);
                copyStatus.textContent = "RE-COPIED TO CLIPBOARD";
                copyStatus.style.color = "#00ff66";
                setTimeout(() => {
                    copyStatus.style.color = "#888";
                }, 2000);
            } catch (e) {
                document.execCommand("copy");
            }
        };
    }

    async function hydrateOnLoad() {
        if (window.location.hash && window.location.hash.length > 1) {
            const hash = window.location.hash.slice(1);
            try {
                let base64 = hash.replace(/-/g, "+").replace(/_/g, "/");
                while (base64.length % 4) base64 += "=";
                const binary = atob(base64);
                const bytes = new Uint8Array([...binary].map(c => c.charCodeAt(0)));
                const stream = new Blob([bytes])
                    .stream()
                    .pipeThrough(new DecompressionStream("deflate-raw"));
                const decompressed = await new Response(stream).text();

                if (decompressed) {
                    pad.value = sanitizeBuffer(decompressed);
                    localStorage.setItem("MINRAUD_NOTEPAD_BUFFER", pad.value);
                    pad.dispatchEvent(new Event("input", { bubbles: true }));
                    if (readoutBox && readoutContainer) {
                        readoutBox.value = window.location.href;
                        readoutContainer.style.display = "block";
                        copyStatus.textContent = "LOADED FROM HASH";
                    }
                    return true;
                }
            } catch (err) {
                console.warn("Decompression fallback:", err);
            }
        }
        return false;
    }

    hydrateOnLoad().then(hydrated => {
        if (!hydrated) {
            const saved = localStorage.getItem("MINRAUD_NOTEPAD_BUFFER");
            if (saved) {
                pad.value = sanitizeBuffer(saved);
                localStorage.setItem("MINRAUD_NOTEPAD_BUFFER", pad.value);
                pad.dispatchEvent(new Event("input", { bubbles: true }));
            }
        }
    });
}

/* ======================================================
   NOTEPAD VOX + IMPORT + STATS
====================================================== */
function initNotepadVox() {
    const pad = document.getElementById("notepad");
    const micBtn = document.getElementById("micBtn");
    const micStatus = document.getElementById("notepadMicStatus");
    const importBtn = document.getElementById("importTxtBtn");
    const importFile = document.getElementById("importTxtFile");
    const statsEl = document.getElementById("notepadStats");
    if (!pad) return;

    function updateStats() {
        if (!statsEl) return;
        const text = pad.value;
        const chars = text.length;
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const lines = text ? text.split(/\n/).length : 0;
        statsEl.textContent = "LN " + lines + " · " + words + " W · " + chars + " C";
    }
    pad.addEventListener("input", updateStats);
    updateStats();

    // --- TXT IMPORT ---
    if (importBtn && importFile) {
        importBtn.addEventListener("click", () => importFile.click());
        importFile.addEventListener("change", () => {
            const file = importFile.files && importFile.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = () => {
                const text = String(reader.result || "");
                if (pad.value.trim() && !confirm("Replace notepad contents with imported file?")) {
                    importFile.value = "";
                    return;
                }
                pushWaghdasUndo(pad);
                pad.value = text;
                pad.dispatchEvent(new Event("input", { bubbles: true }));
                updateStats();
                importFile.value = "";
            };
            reader.onerror = () => {
                if (micStatus) micStatus.textContent = "IMPORT FAILED";
                importFile.value = "";
            };
            reader.readAsText(file);
        });
    }
// --- MIC DICTATION ---
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    let listening = false;

    function setMicUI(on, msg) {
        listening = on;
        if (micBtn) {
            micBtn.textContent = on ? "[MIC: ON]" : "[MIC: OFF]";
            micBtn.classList.toggle("mic-on", on);
        }
        if (micStatus) {
            micStatus.textContent = msg || (on ? "INTERCEPT // LISTENING" : "");
            micStatus.classList.toggle("live", !!on);
        }
    }

    function insertAtCursor(text) {
        pushWaghdasUndo(pad);
        const start = pad.selectionStart;
        const end = pad.selectionEnd;
        const before = pad.value.substring(0, start);
        const after = pad.value.substring(end);
        const spacer = before.length && !/\s$/.test(before) ? " " : "";
        pad.value = before + spacer + text + after;
        const caret = start + spacer.length + text.length;
        pad.focus();
        pad.selectionStart = pad.selectionEnd = caret;
        pad.dispatchEvent(new Event("input", { bubbles: true }));
        updateStats();
    }

    if (micBtn) {
        if (!SR) {
            micBtn.title = "Speech recognition not supported in this browser";
            micBtn.addEventListener("click", () => {
                setMicUI(false, "MIC UNAVAILABLE IN THIS BROWSER");
            });
        } else {
            recognition = new SR();
            recognition.continuous = true;
            recognition.interimResults = false;
            recognition.lang = document.documentElement.lang || "en-US";

            recognition.onresult = (event) => {
                let chunk = "";
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        chunk += event.results[i][0].transcript;
                    }
                }
                chunk = chunk.trim();
                if (chunk) insertAtCursor(chunk);
            };

            recognition.onerror = (event) => {
                const err = event.error || "error";
                if (err === "not-allowed" || err === "service-not-allowed") {
                    setMicUI(false, "MIC PERMISSION DENIED");
                } else if (err === "no-speech") {
                    if (micStatus) micStatus.textContent = "INTERCEPT // NO SPEECH";
                } else {
                    setMicUI(false, "MIC // " + String(err).toUpperCase());
                }
            };

            recognition.onend = () => {
                if (listening) {
                    try { recognition.start(); } catch (e) { setMicUI(false, "MIC STOPPED"); }
                } else {
                    setMicUI(false, "");
                }
            };

            micBtn.addEventListener("click", () => {
                if (listening) {
                    listening = false;
                    try { recognition.stop(); } catch (e) {}
                    setMicUI(false, "");
                    return;
                }
                try {
                    recognition.start();
                    setMicUI(true, "INTERCEPT // LISTENING");
                } catch (e) {
                    setMicUI(false, "MIC START FAILED");
                }
            });
        }
    }
}

/* ======================================================
   NOVA FM POP-OUT (CREDITED STREAM)
====================================================== */
function initNovaFm() {
    const toggle = document.getElementById("nova-fm-toggle");
    const panel = document.getElementById("nova-fm-panel");
    const audio = document.getElementById("novaAudio");
    const status = document.getElementById("nova-fm-status");
    if (!toggle || !panel || !audio) return;

    function setLive(on) {
        toggle.textContent = on ? "[ Naufana: ON ]" : "[ Naufana: OFF ]";
        toggle.classList.toggle("live", on);
        if (status) {
            status.textContent = on ? "LIVE" : "STANDBY";
            status.style.color = on ? "#ff0033" : "#444";
        }
    }

    toggle.addEventListener("click", () => {
        const open = panel.style.display === "block";
        if (open) {
            panel.style.display = "none";
            audio.pause();
            setLive(false);
        } else {
            panel.style.display = "block";
            setLive(false);
            if (status) {
                status.textContent = "READY";
                status.style.color = "#888";
            }
        }
    });

    audio.addEventListener("play", () => setLive(true));
    audio.addEventListener("pause", () => {
        if (panel.style.display === "block") {
            setLive(false);
            if (status) {
                status.textContent = "PAUSED";
                status.style.color = "#888";
            }
        }
    });
    audio.addEventListener("error", () => {
        if (status) {
            status.textContent = "STREAM ERROR";
            status.style.color = "#ff0033";
        }
        setLive(false);
    });
}

/* ======================================================
   QUANTUM VIDEO EMBED CONTROLLER
====================================================== */
let isQuantumPlaying = false;

window.handleQuantumClick = function(e) {
    e.stopPropagation();
    const box = document.getElementById("quantum-video");
    const iframe = document.getElementById("quantum-iframe");
    if (!box || !iframe) return;

    if (!box.classList.contains("expanded")) {
        box.classList.add("expanded");
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        isQuantumPlaying = true;
    } else {
        if (isQuantumPlaying) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            isQuantumPlaying = false;
        } else {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
            isQuantumPlaying = true;
        }
    }
};

window.contractQuantumVid = function(e) {
    e.stopPropagation();
    const box = document.getElementById("quantum-video");
    const iframe = document.getElementById("quantum-iframe");
    if (!box || !iframe) return;

    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    box.classList.remove("expanded");
    isQuantumPlaying = false;
};

/* ======================================================
   STANDALONE NOVA CUSTOM SELECT ENGINE (RED THEME)
====================================================== */
function buildCustomDropdowns() {
    const containers = document.querySelectorAll(".custom-select-container");

    containers.forEach(container => {
        const select = container.querySelector("select");
        if (!select) return;

        if (container.querySelector(".select-selected")) return;

        select.style.display = "none";

        const selectedBox = document.createElement("DIV");
        selectedBox.className = "select-selected";
        const initialOpt = select.options[select.selectedIndex] || select.options[0];
        selectedBox.innerHTML = initialOpt ? initialOpt.innerHTML : "Select Model";
        container.appendChild(selectedBox);

        const itemsBox = document.createElement("DIV");
        itemsBox.className = "select-items select-hide";

        Array.from(select.options).forEach((opt, index) => {
            const item = document.createElement("DIV");
            item.innerHTML = opt.innerHTML;

            if (opt.classList.contains("nova2-opt")) {
                item.classList.add("nova2-opt");
            }
            if (index === select.selectedIndex) {
                item.classList.add("same-as-selected");
            }

            item.addEventListener("click", function(e) {
                e.stopPropagation();

                select.selectedIndex = index;
                selectedBox.innerHTML = this.innerHTML;

                const siblings = itemsBox.querySelectorAll(".same-as-selected");
                siblings.forEach(el => el.classList.remove("same-as-selected"));
                this.classList.add("same-as-selected");

                itemsBox.classList.add("select-hide");
                selectedBox.classList.remove("select-arrow-active");

                select.dispatchEvent(new Event("change", { bubbles: true }));
            });

            itemsBox.appendChild(item);
        });

        container.appendChild(itemsBox);

        selectedBox.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllOtherDropdowns(selectedBox);
            itemsBox.classList.toggle("select-hide");
            selectedBox.classList.toggle("select-arrow-active");
        });
    });
}

function closeAllOtherDropdowns(activeHeader) {
    document.querySelectorAll(".select-selected").forEach(header => {
        if (header !== activeHeader) {
            header.classList.remove("select-arrow-active");
            const menu = header.nextElementSibling;
            if (menu && menu.classList.contains("select-items")) {
                menu.classList.add("select-hide");
            }
        }
    });
}

document.addEventListener("click", () => closeAllOtherDropdowns(null));
