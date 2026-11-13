/* =========================================================
   MINRAUD // THE REALITY STUDIO ENGINE (js/minraud.js)
========================================================= */

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
    "https://api.allorigins.win/raw?url=",
    "https://corsproxy.io/?",
    "https://api.codetabs.com/v1/proxy?quest="
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
    const f24Ticker = document.getElementById("france24-ticker");
    const sdTicker = document.getElementById("sciencedaily-ticker");

    if (f24Ticker) {
        try {
            f24Ticker.innerHTML = '<span style="color: #666;">Receiving transmission...</span>';
            const xmlText = await fetchWithFallbackProxy("https://www.france24.com/en/culture/rss");
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");
            const items = xmlDoc.querySelectorAll("item");

            if (items.length === 0) {
                f24Ticker.innerHTML = '<span style="color: #666;">No headlines received.</span>';
            } else {
                let tickerHTML = "";
                items.forEach(item => {
                    const title = item.querySelector("title")?.textContent || "No title";
                    const link = item.querySelector("link")?.textContent || "#";
                    tickerHTML += `<a href="${link}" target="_blank" rel="noopener" title="${title}">${title}</a>`;
                });
                f24Ticker.innerHTML = tickerHTML;
            }

            f24Ticker.addEventListener("mouseenter", () => f24Ticker.classList.add("paused"));
            f24Ticker.addEventListener("mouseleave", () => f24Ticker.classList.remove("paused"));
        } catch (error) {
            console.error("France 24 Ticker error:", error);
            f24Ticker.innerHTML = '<span style="color: #ff0033;">[LIVE FEED TRANSITION FAILED]</span>';
        }
    }

    if (sdTicker) {
        try {
            sdTicker.innerHTML = '<span style="color: #666; font-style: italic;">[ Accessing Research Stream... ]</span>';
            const xmlText = await fetchWithFallbackProxy("https://www.sciencedaily.com/rss/top/society.xml");
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, "text/xml");
            const items = xmlDoc.querySelectorAll("item");

            if (items.length === 0) {
                sdTicker.innerHTML = '<span style="color: #ff0033;">[ Research Feed Empty ]</span>';
            } else {
                let tickerHTML = "";
                items.forEach(item => {
                    const title = item.querySelector("title")?.textContent || "Research Update";
                    const link = item.querySelector("link")?.textContent || "#";
                    const cleanTitle = title.replace(/^ScienceDaily:\s*/i, "");
                    tickerHTML += `<a href="${link}" target="_blank" rel="noopener" title="${cleanTitle}">${cleanTitle}</a>`;
                });
                sdTicker.innerHTML = tickerHTML;
            }

            sdTicker.addEventListener("mouseenter", () => sdTicker.classList.add("paused"));
            sdTicker.addEventListener("mouseleave", () => sdTicker.classList.remove("paused"));
        } catch (error) {
            console.error("ScienceDaily Ticker error:", error);
            sdTicker.innerHTML = '<span style="color: #ff0033;">[ SCIENCE STREAM TIMED OUT ]</span>';
        }
    }
}

/* ======================================================
   APP FUNCTIONALITY & 6-CHANNEL PARALLEL LEXICON ENGINE
====================================================== */
let dictionaryData = [];
let sundialAngle = 0;

function initAppCore() {
    const apiKeyInput = document.getElementById("novaApiKey");
    const keyStatus = document.getElementById("keyStatus");
    const clearKeyBtn = document.getElementById("clearKeyBtn");
    const creativitySlider = document.getElementById("creativity");
    const creativityVal = document.getElementById("creativityValue");
    const generateButton = document.getElementById("generateButton");
    const promptInput = document.getElementById("prompt");
    const outputDiv = document.getElementById("output");
    const modelSelect = document.getElementById("novaModelSelect") || document.getElementById("modelSelect");
    const notepad = document.getElementById("notepad");
    const copyBtn = document.getElementById("copyButton");
    const importBtn = document.getElementById("importButton");
    const exportBtn = document.getElementById("exportButton");

    // 1. Live BYOK key status
    if (apiKeyInput && keyStatus) {
        apiKeyInput.addEventListener("input", () => {
            const raw = apiKeyInput.value.trim();
            if (raw.length > 0) {
                keyStatus.textContent = `BYOK READY (••••••••${raw.slice(-4)})`;
                keyStatus.style.color = "#ff0033";
            } else {
                keyStatus.textContent = "No key entered";
                keyStatus.style.color = "#555";
            }
        });
    }

    // 2. Clear key button
    if (clearKeyBtn && apiKeyInput) {
        clearKeyBtn.addEventListener("click", () => {
            apiKeyInput.value = "";
            if (keyStatus) {
                keyStatus.textContent = "No key entered";
                keyStatus.style.color = "#555";
            }
        });
    }

    // 3. Creativity value display
    if (creativitySlider && creativityVal) {
        creativitySlider.addEventListener("input", () => {
            creativityVal.textContent = creativitySlider.value;
        });
    }

    // 4. Generate call to Amazon Nova API
    if (generateButton && outputDiv) {
        generateButton.addEventListener("click", async () => {
            const key = apiKeyInput ? apiKeyInput.value
                .trim()
                .replace(/^NOVA_API_KEY\s*=\s*/i, "")
                .replace(/^Bearer\s+/i, "")
                .replace(/^["']|["']$/g, "")
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
                outputDiv.textContent = data?.choices?.[0]?.message?.content || "No data received.";
            } catch (err) {
                outputDiv.innerHTML = `<span class='error-detail'>TRANSMISSION INTERRUPTED: ${err.message}</span>`;
            }
        });
    }

    // 5. Copy / Import / Export Controls
    if (copyBtn && outputDiv) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(outputDiv.textContent);
        });
    }

    if (importBtn && notepad && outputDiv) {
        importBtn.addEventListener("click", () => {
            notepad.value += (notepad.value.trim() ? "\n\n" : "") + outputDiv.textContent;
            notepad.dispatchEvent(new Event("input", { bubbles: true }));
        });
    }

    if (exportBtn && notepad) {
        exportBtn.addEventListener("click", () => {
            const blob = new Blob([notepad.value], { type: "text/plain" });
            const anchor = document.createElement("a");
            anchor.download = "minraud-workspace.txt";
            anchor.href = window.URL.createObjectURL(blob);
            anchor.click();
        });
    }

    // ================= MODULE I: TAMAGHISEXPRESSCUT ENGINE =================
    const pullPad = document.getElementById("pullFromNotepadBtn");
    const pullAi = document.getElementById("pullFromAiBtn");
    const buffer = document.getElementById("mixerSource");
    const outputStream = document.getElementById("mixerOutput");
    const uploadPad = document.getElementById("pushToNotepadBtn");
    const turretNeedle = document.getElementById("turretNeedle");
    const activeBladeReadout = document.getElementById("activeBladeReadout");

    if (pullPad && buffer && notepad) {
        pullPad.addEventListener("click", () => {
            const sel = notepad.value.substring(notepad.selectionStart, notepad.selectionEnd).trim();
            buffer.value = sel || notepad.value;
        });
    }

    if (pullAi && buffer && outputDiv) {
        pullAi.addEventListener("click", () => {
            buffer.value = outputDiv.textContent || "";
        });
    }

    if (uploadPad && outputStream && notepad) {
        uploadPad.addEventListener("click", () => {
            const streamVal = outputStream.value.trim();
            if (!streamVal) return;
            notepad.value += (notepad.value.trim() ? "\n\n" : "") + streamVal;
            notepad.dispatchEvent(new Event("input", { bubbles: true }));
        });
    }

    document.querySelectorAll(".mixer-controls button").forEach(btn => {
        btn.addEventListener("click", () => {
            const algo = btn.getAttribute("data-algo");
            const angle = btn.getAttribute("data-angle") || "0";
            if (!algo || !buffer || !outputStream) return;

            // Rotate SVG Turret Needle & highlight active blade
            document.querySelectorAll(".mixer-controls button").forEach(b => b.classList.remove("active-blade"));
            btn.classList.add("active-blade");
            if (turretNeedle) {
                turretNeedle.setAttribute("transform", `rotate(${angle} 110 100)`);
            }
            if (activeBladeReadout) {
                activeBladeReadout.textContent = `EXECUTED // ${btn.textContent.trim()}`;
            }

            // If buffer is empty, automatically pull from Waghdas so blade never strikes empty air
            let rawText = buffer.value.trim() ? buffer.value : outputStream.value;
            if (!rawText && notepad && notepad.value.trim()) {
                const sel = notepad.value.substring(notepad.selectionStart, notepad.selectionEnd).trim();
                rawText = sel || notepad.value;
                buffer.value = rawText;
            }
            if (!rawText) return;

            let text = rawText.replace(/---/g, " ").trim();
            let resultText = "";

            if (algo === "scramble") {
                let words = text.split(/\s+/).filter(Boolean);
                for (let i = words.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [words[i], words[j]] = [words[j], words[i]];
                }
                resultText = words.join(" ");
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
                    for (let i = 0; i < words.length; i += 3) {
                        chunks.push(words.slice(i, i + 3).join(" "));
                    }
                    for (let i = chunks.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [chunks[i], chunks[j]] = [chunks[j], chunks[i]];
                    }
                    resultText = chunks.join(" ");
                }
            } else if (algo === "reverse") {
                resultText = text.split(/\s+/).filter(Boolean).reverse().join(" ");
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
                    for (let start = 0; start < 2; start++) {
                        for (let i = start; i < words.length; i += 2) {
                            walked.push(words[i]);
                        }
                    }
                    let half = Math.floor(walked.length / 2);
                    resultText = walked.slice(0, half).concat(walked.slice(half).reverse()).join(" ");
                }
            } else if (algo === "permutation") {
                let words = text.split(/\s+/).filter(Boolean).slice(0, 32);
                if (words.length < 3) {
                    resultText = words.join(" ");
                } else {
                    let outputLines = [];
                    for (let i = 0; i < words.length; i += 4) {
                        let chunk = words.slice(i, i + 4);
                        if (chunk.length > 1) {
                            for (let r = 0; r < chunk.length; r++) {
                                outputLines.push(chunk.slice(r).concat(chunk.slice(0, r)).join(" "));
                            }
                            outputLines.push("---");
                        } else {
                            outputLines.push(chunk[0]);
                        }
                    }
                    resultText = outputLines.join("\n");
                }
            }

            outputStream.value = resultText;
            buffer.value = resultText.replace(/\n?---\n?/g, "\n").trim();
        });
    });

    // ================= MODULE III: GHADIS 6-CHANNEL LEXICON =================
    const dictionaryUrls = [
        "https://raw.githubusercontent.com/matthewreagan/WebstersEnglishDictionary/master/dictionary.json",
        "https://gist.githubusercontent.com/BideoWego/60fbd40d5d1f0f1beca11ba95221dd38/raw/58fb4cce910fbf5fa67a2f0f1f619c09d7b1b373/dictionary.json",
        "https://raw.githubusercontent.com/adambom/dictionary/master/dictionary.json",
        "https://raw.githubusercontent.com/hathibelagal/German-English-JSON-Dictionary/master/german_english.json",
        "https://raw.githubusercontent.com/egorkaru/synonym_dictionary/master/dictionary.json",
        "https://raw.githubusercontent.com/letiantian/mini-pinyin/master/pinyin.json"
    ];

    const dictInput = document.getElementById("dictionary-search");
    const dictResult = document.getElementById("dictionary-result");
    const statusEl = document.getElementById("dictionary-status");
    const searchBtn = document.getElementById("search-button");
    const randomBtn = document.getElementById("random-word");
    const clearDictBtn = document.getElementById("clear-dict");
    const lexiconSundial = document.getElementById("lexiconSundial");
    const sundialSpokes = document.getElementById("sundialSpokes");

    function spinSundial() {
        sundialAngle += 60 + Math.floor(Math.random() * 120);
        if (sundialSpokes) {
            sundialSpokes.style.transform = `rotate(${sundialAngle}deg)`;
        }
    }

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
                    : `${loaded}/6 lexicons online`;
            }
        } catch (err) {
            console.error("Dictionary load failure:", err);
            if (statusEl) statusEl.textContent = "OFFLINE - LEXICON DATABASES FAILED TO LOAD";
        }
    }

    loadAllDictionaries();

    window.quickSearch = function(word) {
        if (dictInput) {
            dictInput.value = word;
            spinSundial();
            searchLocalDictionaries(word);
        }
    };

    if (notepad) {
        notepad.addEventListener("dblclick", () => {
            const selected = notepad.value.substring(notepad.selectionStart, notepad.selectionEnd).trim().replace(/^[^\w]+|[^\w]+$/g, "");
            if (selected && selected.length > 1 && !/\s/.test(selected)) {
                if (dictInput) dictInput.value = selected;
                spinSundial();
                searchLocalDictionaries(selected);
            }
        });
    }

    async function searchLocalDictionaries(word) {
        if (!dictResult) return;
        const query = (word || "").trim();
        const lowQuery = query.toLowerCase();
        if (!query || dictionaryData.length === 0) return;

        spinSundial();
        dictResult.innerHTML = '<div class="loading">Searching...</div>';

        let found = false;
        let html = `<div><span class="word-title">${query}</span></div><div style="margin-top:0.5rem;">`;

        for (let i = 0; i < 3; i++) {
            const dict = dictionaryData[i];
            if (dict && dict[lowQuery]) {
                found = true;
                html += `<div style="margin-bottom:0.8rem; border-left: 2px solid #ff0033; padding-left:10px;">
                            <span style="color:#ff0033; font-size:0.7rem; font-weight:bold;">WEBSTER ${i + 1}</span><br>
                            ${dict[lowQuery]}
                         </div>`;
            }
        }

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

        const russianData = dictionaryData[4];
        if (russianData && Array.isArray(russianData.wordlist)) {
            const hits = russianData.wordlist.filter(item => {
                if (!item.name) return false;
                const name = item.name.toLowerCase();
                const def = (item.definition || "").toLowerCase();
                const syns = (item.synonyms || []).join(" ").toLowerCase();
                const sims = (item.similars || []).join(" ").toLowerCase();
                return name === lowQuery || name.includes(lowQuery) || def.includes(lowQuery) || syns.includes(lowQuery) || sims.includes(lowQuery);
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
                        html += `<div>${hit.synonyms.map(s => `<span class="synonym-tag" onclick="quickSearch('${s}')">${s}</span>`).join("")}</div>`;
                    }
                    if (hit.antonyms && hit.antonyms.length) {
                        html += `<div style="margin-top:3px; color:#888; font-size:0.75rem;">Ant: ${hit.antonyms.join(", ")}</div>`;
                    }
                    html += `</div>`;
                });
                html += `</div>`;
            }
        }

        const pinyinDict = dictionaryData[5];
        if (pinyinDict && pinyinDict[query]) {
            found = true;
            html += `<div style="margin-top:0.5rem;border-top:1px dashed #444;padding-top:0.5rem;">
                        <div style="color:#ff0033;font-size:0.75rem;font-weight:bold;">🇨🇳 CHINESE PINYIN</div>
                        <div style="font-size:1.2rem;">${query} → ${pinyinDict[query]}</div>
                     </div>`;
        }

        try {
            const [syns, ants, rhymes] = await Promise.all([
                axios.get(`https://api.datamuse.com/words?rel_syn=${lowQuery}&max=10`).catch(() => ({ data: [] })),
                axios.get(`https://api.datamuse.com/words?rel_ant=${lowQuery}&max=8`).catch(() => ({ data: [] })),
                axios.get(`https://api.datamuse.com/words?rel_rhy=${lowQuery}&max=10`).catch(() => ({ data: [] }))
            ]);

            const addSection = (title, data) => {
                if (!data.length) return "";
                found = true;
                return `<div style="margin-top:0.5rem;border-top:1px dashed #444;padding-top:0.5rem;">
                            <div style="color:#777;font-size:0.75rem; margin-bottom: 4px;">${title}</div>
                            ${data.map(d => `<span class="synonym-tag" onclick="quickSearch('${d.word}')">${d.word}</span>`).join("")}
                        </div>`;
            };

            html += addSection("SYNONYMS", syns.data);
            html += addSection("ANTONYMS", ants.data);
            html += addSection("RHYMES", rhymes.data);
        } catch (e) {}

        html += `</div>`;
        dictResult.innerHTML = found ? html : `<div class="no-results">No associations found for "${query}"</div>`;
    }

    function triggerRandomWord() {
        const list = ["interzone", "virus", "matrix", "sovereign", "neuron", "silence", "machine", "cutup", "entropy", "junkie", "system", "centipede", "astrolabe"];
        const pick = list[Math.floor(Math.random() * list.length)];
        if (dictInput) dictInput.value = pick;
        searchLocalDictionaries(pick);
    }

    if (searchBtn && dictInput) {
        searchBtn.addEventListener("click", () => searchLocalDictionaries(dictInput.value));
    }
    if (dictInput) {
        dictInput.addEventListener("keydown", e => {
            if (e.key === "Enter") searchLocalDictionaries(dictInput.value);
        });
    }
    if (randomBtn) {
        randomBtn.addEventListener("click", triggerRandomWord);
    }
    if (lexiconSundial) {
        lexiconSundial.addEventListener("click", triggerRandomWord);
    }
    if (clearDictBtn && dictInput && dictResult) {
        clearDictBtn.addEventListener("click", () => {
            dictInput.value = "";
            dictResult.innerHTML = "<div class='no-results'>Lexicon Cleared.</div>";
        });
    }
}

/* ======================================================
   TELEGRAPH ROTARY KNOB CONTROLLER (YASS-WADDAH)
====================================================== */
function initCreativityKnob() {
    const knob = document.getElementById("creativityKnob");
    const cap = document.getElementById("knobCap");
    const valueDisplay = document.getElementById("creativityValue");
    const hiddenInput = document.getElementById("creativity");

    if (!knob || !cap || !hiddenInput || !valueDisplay) return;

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

    knob.addEventListener("pointerdown", e => {
        isDragging = true;
        startY = e.clientY;
        startVal = currentValue;
        knob.setPointerCapture(e.pointerId);
    });

    knob.addEventListener("pointermove", e => {
        if (!isDragging) return;
        const deltaY = startY - e.clientY;
        const deltaVal = (deltaY / 120) * (maxVal - minVal);
        updateKnob(startVal + deltaVal);
    });

    knob.addEventListener("pointerup", e => {
        if (!isDragging) return;
        isDragging = false;
        try { knob.releasePointerCapture(e.pointerId); } catch (err) {}
    });

    knob.addEventListener("wheel", e => {
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
                if (copyStatus) {
                    copyStatus.textContent = "BUFFER EMPTY: NO DATA";
                    copyStatus.style.color = "#ff0033";
                }
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

                if (copyStatus) {
                    copyStatus.textContent = "COPIED TO CLIPBOARD";
                    copyStatus.style.color = "#00ff66";
                    setTimeout(() => { copyStatus.style.color = "#888"; }, 2500);
                }
            } catch (err) {
                console.error("Compression failed:", err);
                if (copyStatus) {
                    copyStatus.textContent = "COMPRESSION FAILED";
                    copyStatus.style.color = "#ff0033";
                }
            }
        };

        readoutBox.onclick = async () => {
            if (!readoutBox.value) return;
            readoutBox.select();
            try {
                await navigator.clipboard.writeText(readoutBox.value);
                if (copyStatus) {
                    copyStatus.textContent = "RE-COPIED TO CLIPBOARD";
                    copyStatus.style.color = "#00ff66";
                    setTimeout(() => { copyStatus.style.color = "#888"; }, 2000);
                }
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
                        if (copyStatus) copyStatus.textContent = "LOADED FROM HASH";
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
    const micBtnLabel = document.getElementById("micBtnLabel");
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

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition = null;
    let listening = false;

    function setMicUI(on, msg) {
        listening = on;
        if (micBtn) {
            if (micBtnLabel) {
                micBtnLabel.textContent = on ? "[MIC: ON]" : "[MIC: OFF]";
            } else {
                micBtn.textContent = on ? "[MIC: ON]" : "[MIC: OFF]";
            }
            micBtn.classList.toggle("mic-on", on);
        }
        if (micStatus) {
            micStatus.textContent = msg || (on ? "INTERCEPT // LISTENING" : "");
            micStatus.classList.toggle("live", !!on);
        }
    }

    function insertAtCursor(text) {
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

            recognition.onresult = event => {
                let chunk = "";
                for (let i = event.resultIndex; i < event.results.length; i++) {
                    if (event.results[i].isFinal) {
                        chunk += event.results[i][0].transcript;
                    }
                }
                chunk = chunk.trim();
                if (chunk) insertAtCursor(chunk);
            };

            recognition.onerror = event => {
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
   NOVA FM POP-OUT (REPAIRED LIVE ICECAST STREAM HANDLER)
====================================================== */
function initNovaFm() {
    const toggle = document.getElementById("nova-fm-toggle");
    const panel = document.getElementById("nova-fm-panel");
    const audio = document.getElementById("novaAudio");
    const status = document.getElementById("nova-fm-status");
    if (!toggle || !panel || !audio) return;

    const STREAM_URL = "https://nova-nouvo.ice.infomaniak.ch/nova-nouvo-256.aac";

    // Inject a dedicated hardware Play/Stop button above native controls for reliable mobile/desktop playback
    let playTrigger = document.getElementById("nova-fm-play-btn");
    if (!playTrigger) {
        playTrigger = document.createElement("button");
        playTrigger.type = "button";
        playTrigger.id = "nova-fm-play-btn";
        playTrigger.className = "nous-btn";
        playTrigger.style.marginBottom = "6px";
        playTrigger.style.borderColor = "#ff0033";
        playTrigger.style.color = "#ff0033";
        playTrigger.textContent = "▶ ENGAGE RADIO STREAM";
        audio.parentNode.insertBefore(playTrigger, audio);
    }

    function setLive(on, labelText) {
        toggle.textContent = on ? "[ Naufana: ON ]" : "[ Naufana: OFF ]";
        toggle.classList.toggle("live", on);
        if (playTrigger) {
            playTrigger.textContent = on ? "◼ CUT RADIO STREAM" : "▶ ENGAGE RADIO STREAM";
            playTrigger.style.background = on ? "#ff0033" : "#000";
            playTrigger.style.color = on ? "#000" : "#ff0033";
        }
        if (status) {
            status.textContent = labelText || (on ? "LIVE" : "STANDBY");
            status.style.color = on ? "#ff0033" : "#888";
        }
    }

    async function startStream() {
        try {
            setLive(false, "CONNECTING...");
            if (!audio.src || audio.src === window.location.href) {
                audio.src = STREAM_URL;
            }
            audio.load();
            await audio.play();
            setLive(true, "LIVE STREAM");
        } catch (err) {
            console.warn("Stream autoplay waiting for user gesture:", err);
            setLive(false, "CLICK ▶ BELOW");
        }
    }

    function stopStream() {
        audio.pause();
        // Reset live stream buffer so next play gets live edge
        audio.removeAttribute("src");
        audio.load();
        audio.src = STREAM_URL;
        setLive(false, "STANDBY");
    }

    playTrigger.addEventListener("click", () => {
        if (!audio.paused) {
            stopStream();
        } else {
            startStream();
        }
    });

    toggle.addEventListener("click", () => {
        const isOpen = panel.style.display === "block";
        if (isOpen) {
            panel.style.display = "none";
            stopStream();
        } else {
            panel.style.display = "block";
            startStream();
        }
    });

    audio.addEventListener("playing", () => setLive(true, "LIVE STREAM"));
    audio.addEventListener("pause", () => {
        if (panel.style.display === "block") {
            setLive(false, "PAUSED");
        }
    });
    audio.addEventListener("error", () => {
        if (status) {
            status.textContent = "STREAM READY";
            status.style.color = "#888";
        }
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
        iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
        isQuantumPlaying = true;
    } else {
        if (isQuantumPlaying) {
            iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
            isQuantumPlaying = false;
        } else {
            iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
            isQuantumPlaying = true;
        }
    }
};

window.contractQuantumVid = function(e) {
    e.stopPropagation();
    const box = document.getElementById("quantum-video");
    const iframe = document.getElementById("quantum-iframe");
    if (!box || !iframe) return;

    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
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
