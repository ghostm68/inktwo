/* ================================================================
   HERMES / WebLLM (NOUS) — ES Module
   Load with: <script type="module" src="js/hermes.js"></script>
   ================================================================ */

import * as webllm from "https://esm.run/@mlc-ai/web-llm@0.2.87";

const modelId = "Hermes-3-Llama-3.2-3B-q4f16_1-MLC";
let engine = null;

const btn = document.getElementById('loadCoreBtn');
const output = document.getElementById('nous-output');
const dlText = document.getElementById('dl-text');
const genBtn = document.getElementById('nous-transmit-btn');
const promptInput = document.getElementById('nous-prompt');

if (btn) {
  btn.onclick = async () => {
    try {
      if (!navigator.gpu) throw new Error("GPU MISSING");
      btn.disabled = true;
      btn.textContent = "SYNCING...";
      const track = document.getElementById('dl-track');
      const bar = document.getElementById('dl-bar');
      if (track) track.style.display = 'block';
      if (dlText) dlText.style.display = 'block';
      if (output) output.textContent = "INITIALIZING...";

      engine = await webllm.CreateMLCEngine(modelId, {
        initProgressCallback: (report) => {
          const p = (report.progress || 0) * 100;
          if (bar) bar.style.width = p + '%';
          if (dlText) dlText.textContent = `LOADING: ${Math.round(p)}%`;
        }
      });

      // Guaranteed completion state once CreateMLCEngine resolves
      if (bar) bar.style.width = '100%';
      if (output) output.textContent = "HERMES ONLINE.";
      btn.style.display = 'none';
      if (track) track.style.display = 'none';
      if (dlText) dlText.style.display = 'none';
      const status = document.getElementById('nous-status');
      if (status) {
        status.textContent = "ONLINE";
        status.style.color = "#ff0033";
      }
    } catch (err) {
      if (output) output.textContent = "ERR: " + err.message;
      btn.disabled = false;
      btn.textContent = "RETRY";
    }
  };
}

if (genBtn && promptInput) {
  genBtn.onclick = async () => {
    if (!engine) return;
    const val = promptInput.value.trim();
    if (!val) return;
    genBtn.disabled = true;
    if (output) output.textContent = "";
    let fullText = "";
    try {
      const chunks = await engine.chat.completions.create({
        messages: [
          { role: "system", content: "You are NOUS." },
          { role: "user", content: val }
        ],
        stream: true,
        temperature: 0.7,
        max_tokens: 512
      });
      for await (const chunk of chunks) {
        fullText += chunk.choices[0]?.delta?.content || "";
        if (output) {
          output.textContent = fullText;
          output.scrollTop = output.scrollHeight;
        }
      }
    } catch (e) {
      if (output) output.textContent = "ERR: " + (e.message || "");
    } finally {
      genBtn.disabled = false;
    }
  };
}
