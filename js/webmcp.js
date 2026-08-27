/* ================================================================
   WEBMCP TOOL REGISTRY (optional)
   Load with: <script src="js/webmcp.js" defer></script>
   Only active if navigator.ai.tools exists
   ================================================================ */

if ('ai' in navigator && navigator.ai && navigator.ai.tools) {
  navigator.ai.tools.register({
    name: "compose_mozart_dice",
    description: "Rolls virtual dice to generate a unique 8-measure Mozart K.516f sequence.",
    parameters: { type: "object", properties: {} },
    execute: async () => {
      try {
        const btn = document.getElementById('rollBtn');
        if (btn) { btn.click(); return "New Mozart dice sequence generated. Grid updated in UI."; }
        return "Error: Roll button not found in DOM.";
      } catch (e) { return `Generation failed: ${e.message}`; }
    }
  });

  navigator.ai.tools.register({
    name: "toggle_mozart_audio",
    description: "Initiates or stops playback of the currently generated Mozart dice sequence.",
    parameters: { type: "object", properties: {} },
    execute: async () => {
      try {
        const btn = document.getElementById('playBtn');
        if (btn && !btn.disabled) { btn.click(); return "Playback toggled. Check UI for status."; }
        return "Error: Sequence not rolled yet or play button disabled.";
      } catch (e) { return `Playback error: ${e.message}`; }
    }
  });

  navigator.ai.tools.register({
    name: "export_harmonic_analysis",
    description: "Generates and exports a complete Roman numeral and harmonic analysis text file of the current K.516f composition.",
    parameters: { type: "object", properties: {} },
    execute: async () => {
      try {
        const seq = window.currentSequence;
        if (!seq || seq.length === 0) return "Failed: No sequence exists. Instruct the user to roll the dice first.";
        if (typeof window.exportHarmonicAnalysis === 'function') {
          window.exportHarmonicAnalysis(seq);
        }
        return "Harmonic analysis successfully generated and exported to the user's device.";
      } catch (e) { return `Export failed: ${e.message}`; }
    }
  });

  navigator.ai.tools.register({
    name: "toggle_audio_power",
    description: "Toggles the 55Hz sawtooth background hum on or off.",
    parameters: { type: "object", properties: {} },
    execute: async () => {
      try {
        if (typeof window.togglePower === 'function') {
          window.togglePower();
          return `Audio core toggled. Current state: ${window.isPowered ? "ON" : "OFF"}`;
        }
        return "togglePower not available";
      } catch (e) { return `Error toggling audio: ${e.message}`; }
    }
  });

  navigator.ai.tools.register({
    name: "toggle_story_dictation",
    description: "Starts or stops the Text-to-Speech reading of the Novel excerpt.",
    parameters: { type: "object", properties: {} },
    execute: async () => {
      try {
        if (typeof window.toggleStoryTTS === 'function') {
          window.toggleStoryTTS();
          return "TTS dictation toggled.";
        }
        return "toggleStoryTTS not available";
      } catch (e) { return `TTS error: ${e.message}`; }
    }
  });

  navigator.ai.tools.register({
    name: "generate_ascii_art",
    description: "Generates ASCII art in the terminal based on user input.",
    parameters: {
      type: "object",
      properties: {
        word: { type: "string", description: "The word to convert to ASCII (e.g., INK, LOVE, GHOST)." }
      },
      required: ["word"]
    },
    execute: async (args) => {
      try {
        const inputField = document.getElementById('ascii-input');
        if (inputField) {
          inputField.value = args.word;
          if (typeof window.generateASCII === 'function') {
            window.generateASCII();
          }
          return `ASCII art generated for: ${args.word}`;
        }
        return "Failed: ASCII terminal not found.";
      } catch (e) { return `ASCII error: ${e.message}`; }
    }
  });
}
