import * as webllm from "https://esm.run/@mlc-ai/web-llm";

class InkRealmTerminal {
    constructor() {
        const select = document.getElementById("model-select");
        this.modelId = select ? select.value : "Qwen2.5-1.5B-Instruct-q4f16_1-MLC";
        this.engine = null;          // WebLLM engine
        this.tjsGenerator = null;    // transformers.js pipeline
        this.backend = "webllm";     // "webllm" | "tjs"
        this.isGenerating = false;
        this.isOnline = false;
        this.systemPrompt = "You are a sophisticated AI interface in a literary terminal environment. Tone: Professional terminal aesthetic, warm, intelligent, terse.";
        this.init();
    }

    init() {
        this.runSplash();
        this.setupEvents();
        this.checkHardware();
    }

    // === helpers ===
    isTjsModel(id) {
        return typeof id === "string" && id.startsWith("tjs:");
    }

    getTjsModelId(id) {
        return this.isTjsModel(id) ? id.slice(4) : null;
    }

    // === DIAGNOSTIC LOG FUNCTIONS ===
    addLog(msg, type = 'info') {
        const consoleLog = document.getElementById('console-log');
        if (!consoleLog) return;
        const entry = document.createElement('div');
        entry.className = `log-${type}`;
        entry.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        consoleLog.appendChild(entry);
        consoleLog.scrollTop = consoleLog.scrollHeight;
        console.log(`[Diagnostic - ${type.toUpperCase()}] ${msg}`);
    }

    async checkHardware() {
        const hardwareTag = document.getElementById('hardware-tag');
        if (!hardwareTag) return;
        this.addLog("INK REALM node online. Checking secure resources.", "info");

        if (navigator.gpu) {
            try {
                const adapter = await navigator.gpu.requestAdapter();
                if (adapter) {
                    hardwareTag.textContent = "WebGPU Acceleration: ACTIVE";
                    this.addLog("System hardware supports WebGPU rendering.", "info");
                } else {
                    hardwareTag.textContent = "WebGPU: UNAVAILABLE";
                    this.addLog("WebGPU adapter failed. Operating under CPU fallback.", "warn");
                }
            } catch (e) {
                hardwareTag.textContent = "WebGPU: BLOCKED";
                this.addLog("System blocked early WebGPU adapter request.", "warn");
            }
        } else {
            hardwareTag.textContent = "WebGPU: UNSUPPORTED";
            this.addLog("WebGPU is unsupported on this browser engine.", "error");
        }
    }

    // === 1. MANUAL CONNECTION LOGIC ===
    async connectEngine() {
        const btn = document.getElementById("connect-btn");
        const statusDot = document.getElementById("status-dot");
        const statusText = document.getElementById("status-text");

        if (this.isOnline) return;

        if (btn) {
            btn.disabled = true;
            btn.textContent = "ESTABLISHING...";
        }
        if (statusText) statusText.textContent = "DOWNLOADING...";
        if (statusDot) statusDot.style.background = "#e8e2da";

        try {
            this.addSystemMessage(`⟁ INITIATING HANDSHAKE: ${this.modelId}`);
            this.addLog(`Handshake initiated with model: ${this.modelId}`, "info");

            // ---------- transformers.js path ----------
            if (this.isTjsModel(this.modelId)) {
                this.backend = "tjs";

                // Ensure the CDN module has finished loading
                if (!window.INK_TJS) {
                    throw new Error("transformers.js not ready yet. Refresh and try again.");
                }

                const progressCallback = (progress) => {
                    // transformers.js progress format is different
                    const p = progress?.progress != null
                        ? Math.round(progress.progress * 100)
                        : (progress?.status === "done" ? 100 : 0);
                    if (p < 100) {
                        if (statusText) statusText.textContent = `SYNCING: ${p}%`;
                        if (btn) btn.textContent = `${p}%`;
                    }
                    this.addLog(`tjs Loading: ${p}% - ${progress?.status || progress?.file || ""}`, "info");
                };

                this.tjsGenerator = await window.INK_TJS.createGenerator(progressCallback);
                this.engine = null; // clear any previous WebLLM engine

            // ---------- WebLLM path (unchanged) ----------
            } else {
                this.backend = "webllm";
                this.tjsGenerator = null;

                const progressCallback = (report) => {
                    const p = Math.round(report.progress * 100);
                    if (p < 100) {
                        if (statusText) statusText.textContent = `SYNCING: ${p}%`;
                        if (btn) btn.textContent = `${p}%`;
                    }
                    this.addLog(`Loading: ${p}% - ${report.text}`, "info");
                };

                if (this.engine) {
                    await this.engine.reload(this.modelId, { initProgressCallback: progressCallback });
                } else {
                    this.engine = await webllm.CreateMLCEngine(this.modelId, {
                        initProgressCallback: progressCallback
                    });
                }
                this.engine.currentModelId = this.modelId;
            }

            this.isOnline = true;

            this.addSystemMessage("⟁ LINK ESTABLISHED. READY FOR INPUT.");
            this.addLog(`Engine loaded successfully. Backend: ${this.backend} | Model: ${this.modelId}`, "info");
            if (statusText) statusText.textContent = "ONLINE";
            if (statusDot) statusDot.style.background = "#db1a31";
            if (btn) {
                btn.textContent = "LINK ACTIVE";
                btn.style.borderColor = "#db1a31";
                btn.style.color = "#db1a31";
                btn.disabled = false;
            }

        } catch (err) {
            console.error(err);
            if (statusText) statusText.textContent = "FAILURE";
            if (statusDot) statusDot.style.background = "#ff0033";
            if (btn) {
                btn.textContent = "RETRY";
                btn.disabled = false;
                btn.style.borderColor = "";
                btn.style.color = "";
            }
            this.addSystemMessage(`FATAL: ${err.message}`);
            this.addLog(`Handshake failed: ${err.message}`, "error");
        }
    }

    // === 2. GENERATION LOGIC ===
    async generate() {
        if (this.isGenerating) return;

        if (!this.isOnline) {
            this.addSystemMessage("⚠ ERROR: SYSTEM OFFLINE. PLEASE CLICK [INITIALIZE LINK].");
            this.addLog("Generation blocked: engine offline", "warn");
            return;
        }

        const input = document.getElementById("text-input");
        const sendBtn = document.getElementById("send-button");
        const prompt = input ? input.value.trim() : "";

        if (!prompt) return;

        this.isGenerating = true;
        if (sendBtn) {
            sendBtn.disabled = true;
            sendBtn.textContent = "...";
        }

        this.addMessage("user", prompt);
        this.addLog(`Starting generation sequence for query: "${prompt.slice(0, 30)}..."`, "info");
        input.value = "";

        const loadingId = this.addLoading();

        try {
            // ---------- transformers.js generation ----------
            if (this.backend === "tjs" && this.tjsGenerator) {
                this.removeLoading(loadingId);

                const msgEl = this.addMessage("ai", "");
                const contentEl = msgEl.querySelector(".message-content");
                if (contentEl) contentEl.classList.add("typing");

                const messages = [
                    { role: "system", content: this.systemPrompt },
                    { role: "user", content: prompt }
                ];

                // Stream via TextStreamer if available, otherwise collect full output
                let fullText = "";
                const streamer = window.INK_TJS?.TextStreamer
                    ? new window.INK_TJS.TextStreamer(this.tjsGenerator.tokenizer, {
                        skip_prompt: true,
                        skip_special_tokens: true,
                        callback_function: (token) => {
                            fullText += token;
                            if (contentEl) contentEl.innerHTML = fullText.replace(/\n/g, "<br>");
                            const container = document.getElementById("chat-messages");
                            if (container) container.scrollTop = container.scrollHeight;
                        }
                    })
                    : null;

                const output = await this.tjsGenerator(messages, {
                    max_new_tokens: 512,
                    do_sample: true,
                    temperature: 0.7,
                    streamer: streamer || undefined
                });

                // Fallback if streamer didn't fire (some builds)
                if (!fullText && output?.[0]?.generated_text) {
                    const last = output[0].generated_text;
                    fullText = Array.isArray(last)
                        ? (last.at(-1)?.content || "")
                        : (typeof last === "string" ? last : "");
                    if (contentEl) contentEl.innerHTML = fullText.replace(/\n/g, "<br>");
                }

                if (contentEl) contentEl.classList.remove("typing");
                this.addLog("tjs response stream complete.", "info");

            // ---------- WebLLM generation (original) ----------
            } else {
                const messages = [
                    { role: "system", content: this.systemPrompt },
                    { role: "user", content: prompt }
                ];

                const chunks = await this.engine.chat.completions.create({
                    messages,
                    stream: true,
                    temperature: 0.7,
                });

                this.removeLoading(loadingId);

                const msgEl = this.addMessage("ai", "");
                const contentEl = msgEl.querySelector(".message-content");
                if (contentEl) contentEl.classList.add("typing");

                let fullText = "";
                for await (const chunk of chunks) {
                    const delta = chunk.choices[0]?.delta?.content || "";
                    fullText += delta;
                    if (contentEl) contentEl.innerHTML = fullText.replace(/\n/g, "<br>");

                    const container = document.getElementById("chat-messages");
                    if (container) container.scrollTop = container.scrollHeight;
                }
                if (contentEl) contentEl.classList.remove("typing");
                this.addLog("Response output stream complete.", "info");
            }

        } catch (err) {
            this.removeLoading(loadingId);
            this.addMessage("ai", `[runtime_error]: ${err.message}`);
            this.addLog(`Generation runtime error: ${err.message}`, "error");
        } finally {
            this.isGenerating = false;
            if (sendBtn) {
                sendBtn.disabled = false;
                sendBtn.textContent = "SEND";
            }
        }
    }

    // === 3. UI UTILITIES ===
    runSplash() {
        const splash = document.getElementById('glitch-splash');
        if (!splash) return;
        setTimeout(() => {
            splash.style.opacity = '0';
            splash.style.transition = 'opacity 1s ease';
            setTimeout(() => {
                splash.style.display = 'none';
            }, 1000);
        }, 2500);
    }

    setupEvents() {
        const safeListen = (id, event, fn) => {
            const el = document.getElementById(id);
            if (el) el.addEventListener(event, fn);
        };

        safeListen("connect-btn", "click", () => this.connectEngine());

        safeListen("model-select", "change", e => {
            this.modelId = e.target.value;
            this.isOnline = false;
            this.backend = this.isTjsModel(this.modelId) ? "tjs" : "webllm";

            // Clear previous engines so a clean load happens next time
            this.engine = null;
            this.tjsGenerator = null;

            const btn = document.getElementById("connect-btn");
            if (btn) {
                btn.disabled = false;
                btn.textContent = "INITIALIZE LINK";
                btn.style.color = "";
                btn.style.borderColor = "";
            }

            const statusDot = document.getElementById("status-dot");
            if (statusDot) statusDot.style.background = "#333";
            const statusTxt = document.getElementById("status-text");
            if (statusTxt) statusTxt.textContent = "OFFLINE";

            const name = e.target.options[e.target.selectedIndex].text;
            this.addSystemMessage(`TARGET REACQUIRED: ${name}`);
            this.addSystemMessage(`WAITING FOR INITIALIZATION...`);
            this.addLog(`Model target changed to ${name}. Waiting to establish link.`, "info");
        });

        safeListen("send-button", "click", () => this.generate());
        safeListen("text-input", "keydown", e => {
            if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                this.generate();
            }
        });

        const exportHandler = () => this.exportNotepad();
        safeListen("export-notepad", "click", exportHandler);

        const clearHandler = () => {
            if (confirm("Purge local buffer?")) {
                const pad = document.getElementById("notepad");
                if (pad) pad.value = "";
            }
        };
        safeListen("clear-notepad", "click", clearHandler);

        document.addEventListener("click", e => {
            const id = e.target?.dataset?.import;
            if (id) this.importToScratchpad(id);
        });
    }

    importToScratchpad(id) {
        const msg = document.getElementById(id);
        const pad = document.getElementById("notepad");
        if (!msg || !pad) return;
        pad.value += `\n\n---\n${msg.innerText.trim()}`;
        pad.scrollTop = pad.scrollHeight;
    }

    exportNotepad() {
        const pad = document.getElementById("notepad");
        const content = pad ? pad.value : "";
        if (!content.trim()) return alert("Buffer empty.");

        const blob = new Blob([content], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `inkrealm-log-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    addMessage(role, text) {
        const container = document.getElementById("chat-messages");
        if (!container) return { querySelector: () => null };

        const div = document.createElement("div");
        div.className = `message ${role}`;
        const meta = role === "user" ? "USER" : "TERMINAL";

        if (role === "ai" && !text) {
            const id = "msg-" + Math.random().toString(36).slice(2);
            div.innerHTML = `
                <div class="message-header">\( {meta} <span class="notepad-btn" data-import=" \){id}">→ PAD</span></div>
                <div class="message-content" id="${id}"></div>`;
        } else {
            div.innerHTML = `
                <div class="message-header">${meta}</div>
                <div class="message-content">${text.replace(/\n/g, "<br>")}</div>`;
        }

        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        return div;
    }

    addSystemMessage(text) {
        const container = document.getElementById("chat-messages");
        if (!container) return;
        const div = document.createElement("div");
        div.className = "message system";
        div.textContent = text;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
    }

    addLoading() {
        const container = document.getElementById("chat-messages");
        if (!container) return;
        const id = "loading-" + Math.random().toString(36).slice(2);
        const div = document.createElement("div");
        div.className = "message ai";
        div.id = id;
        div.innerHTML = `<div class="message-header">PROCESSING</div><div class="message-content loading-dots"></div>`;
        container.appendChild(div);
        container.scrollTop = container.scrollHeight;
        return id;
    }

    removeLoading(id) {
        const el = document.getElementById(id);
        if (el) el.remove();
    }
}

// Expose and start
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        window.app = new InkRealmTerminal();
    });
} else {
    window.app = new InkRealmTerminal();
}
