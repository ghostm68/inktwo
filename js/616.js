/* =========================================================
   616.JS - WORDSTAR NEXUS MASTER JAVASCRIPT
   ========================================================= */

// 0. Triangle Video Expand Engine
function toggleTriangleExpand(frame, event) {
  // If clicking directly on the video element while already expanded, don't collapse
  if (event && frame.classList.contains('expanded') && event.target.tagName === 'VIDEO') {
    return;
  }

  const video = frame.querySelector('video');
  const isExpanded = frame.classList.toggle('expanded');

  if (isExpanded) {
    if (video) {
      video.muted = false;
      video.controls = true;
      video.play().catch(() => {});
    }
  } else {
    if (video) {
      video.muted = true;
      video.controls = false;
      video.play().catch(() => {});
    }
  }
}

// Close triangle video when clicking outside
document.addEventListener('click', (e) => {
  const frame = document.getElementById('triangle-video-frame');
  if (frame && frame.classList.contains('expanded')) {
    if (!frame.contains(e.target)) {
      toggleTriangleExpand(frame);
    }
  }
});

// 1. Menu Toggle
function toggleMenu() {
  const overlay = document.getElementById('menu-overlay');
  const menu = document.getElementById('slide-menu');
  if (overlay) overlay.classList.toggle('active');
  if (menu) menu.classList.toggle('active');
}

// 2. Artifact Expand Toggle
function toggleArtifactZoom(el) {
  el.classList.toggle('expanded');
}

let currentSpeech = null;
let isSpeaking = false;
let availableVoices = [];
let selectedVoiceId = null;

// Load saved voice preference from localStorage
function loadVoicePreference() {
  return localStorage.getItem('tts_preferred_voice');
}

// Save voice preference to localStorage
function saveVoicePreference(voiceId) {
  localStorage.setItem('tts_preferred_voice', voiceId);
}

// Get all female voices with proper categorization
function getFemaleVoices() {
  const voices = window.speechSynthesis.getVoices();
  
  const categorizedVoices = {
    confirmed: [],    // Definitely female (by name/pattern)
    likely: [],       // Likely female (feminine names)
    unknown: [],      // Can't determine gender
    male: []          // Definitely male
  };
  
  voices.forEach(voice => {
    const name = voice.name.toLowerCase();
    const lang = voice.lang;
    
    // Definitely female
    if (name.includes('female') || 
        name.includes('woman') || 
        name.includes('zira') ||
        name.includes('samantha') ||
        name.includes('hazel') ||
        name.includes('karen') ||
        name.includes('tessa') ||
        name.includes('google uk english female') ||
        name.includes('google us english female')) {
      categorizedVoices.confirmed.push(voice);
    }
    // Definitely male
    else if (name.includes('male') || 
             name.includes('man') ||
             name.includes('david') ||
             name.includes('mark') ||
             name.includes('paul') ||
             name.includes('microsoft david') ||
             name.includes('alex') ||
             name.includes('daniel')) {
      categorizedVoices.male.push(voice);
    }
    // Likely female (feminine names)
    else if (name.includes('susan') || 
             name.includes('lisa') || 
             name.includes('mary') ||
             name.includes('jane') || 
             name.includes('anna') || 
             name.includes('emma') ||
             name.includes('sarah') || 
             name.includes('laura') || 
             name.includes('amy') ||
             name.includes('jessica') || 
             name.includes('michelle') ||
             name.includes('allison') || 
             name.includes('ava') || 
             name.includes('natalia')) {
      categorizedVoices.likely.push(voice);
    }
    // Unknown gender
    else {
      categorizedVoices.unknown.push(voice);
    }
  });
  
  return categorizedVoices;
}

// Create voice selector UI
function createVoiceSelector() {
  if (document.getElementById('tts-voice-selector')) return;
  
  const selector = document.createElement('div');
  selector.id = 'tts-voice-selector';
  selector.className = 'tts-voice-selector';
  selector.innerHTML = `
    <div class="tts-voice-header">
      <span>🎙️ TTS Voice Settings</span>
      <button class="tts-close-btn" onclick="toggleVoiceSelector()">×</button>
    </div>
    <div class="tts-voice-content">
      <p>Select a female voice for text-to-speech:</p>
      <div class="tts-voices-list" id="tts-voices-list">
        <div class="tts-loading">Loading voices...</div>
      </div>
      <div class="tts-voice-controls">
        <button class="tts-test-btn" onclick="testSelectedVoice()">Test Voice</button>
        <button class="tts-save-btn" onclick="saveVoiceSelection()">Save & Close</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(selector);
  
  // Load voices into selector
  setTimeout(populateVoiceSelector, 100);
}

// Toggle voice selector visibility
function toggleVoiceSelector() {
  const selector = document.getElementById('tts-voice-selector');
  if (!selector) {
    createVoiceSelector();
    return;
  }
  
  selector.classList.toggle('visible');
  
  if (selector.classList.contains('visible')) {
    populateVoiceSelector();
  }
}

// Populate voice selector with available voices
function populateVoiceSelector() {
  const voicesList = document.getElementById('tts-voices-list');
  if (!voicesList) return;
  
  const voices = getFemaleVoices();
  const savedVoiceId = loadVoicePreference();
  
  let html = '';
  
  // Confirmed female voices
  if (voices.confirmed.length > 0) {
    html += `<div class="tts-voice-category">✅ Confirmed Female Voices</div>`;
    voices.confirmed.forEach(voice => {
      const isSelected = selectedVoiceId === voice.voiceURI || 
                        (savedVoiceId === voice.voiceURI && !selectedVoiceId);
      html += `
        <div class="tts-voice-option ${isSelected ? 'selected' : ''}" 
             data-voice-id="${voice.voiceURI}"
             onclick="selectVoice('${voice.voiceURI}')">
          <span class="tts-voice-name">${voice.name}</span>
          <span class="tts-voice-lang">${voice.lang}</span>
          <button class="tts-preview-btn" onclick="previewVoice('${voice.voiceURI}')">▶</button>
        </div>
      `;
    });
  }
  
  // Likely female voices
  if (voices.likely.length > 0) {
    html += `<div class="tts-voice-category">🔍 Likely Female Voices</div>`;
    voices.likely.forEach(voice => {
      const isSelected = selectedVoiceId === voice.voiceURI || 
                        (savedVoiceId === voice.voiceURI && !selectedVoiceId);
      html += `
        <div class="tts-voice-option ${isSelected ? 'selected' : ''}" 
             data-voice-id="${voice.voiceURI}"
             onclick="selectVoice('${voice.voiceURI}')">
          <span class="tts-voice-name">${voice.name}</span>
          <span class="tts-voice-lang">${voice.lang}</span>
          <button class="tts-preview-btn" onclick="previewVoice('${voice.voiceURI}')">▶</button>
        </div>
      `;
    });
  }
  
  // Unknown voices (for fallback)
  if (voices.unknown.length > 0) {
    html += `<div class="tts-voice-category">❓ Unknown Gender</div>`;
    voices.unknown.forEach(voice => {
      const isSelected = selectedVoiceId === voice.voiceURI || 
                        (savedVoiceId === voice.voiceURI && !selectedVoiceId);
      html += `
        <div class="tts-voice-option ${isSelected ? 'selected' : ''}" 
             data-voice-id="${voice.voiceURI}"
             onclick="selectVoice('${voice.voiceURI}')">
          <span class="tts-voice-name">${voice.name}</span>
          <span class="tts-voice-lang">${voice.lang}</span>
          <button class="tts-preview-btn" onclick="previewVoice('${voice.voiceURI}')">▶</button>
        </div>
      `;
    });
  }
  
  // Note about male voices
  if (voices.male.length > 0) {
    html += `<div class="tts-voice-category muted">🚫 Male Voices (Hidden)</div>
             <div class="tts-voice-note">${voices.male.length} male voice(s) excluded</div>`;
  }
  
  if (voices.confirmed.length === 0 && voices.likely.length === 0) {
    html = `<div class="tts-no-voices">
              <p>No female voices detected.</p>
              <p>Your system may need additional voice packages.</p>
              <button onclick="showSystemVoiceHelp()">How to add voices</button>
            </div>`;
  }
  
  voicesList.innerHTML = html;
  
  // Restore saved selection
  if (savedVoiceId && !selectedVoiceId) {
    selectVoice(savedVoiceId, true);
  }
}

// Select a voice
function selectVoice(voiceId, silent = false) {
  selectedVoiceId = voiceId;
  
  // Update UI
  document.querySelectorAll('.tts-voice-option').forEach(option => {
    option.classList.remove('selected');
    if (option.dataset.voiceId === voiceId) {
      option.classList.add('selected');
    }
  });
  
  // Preview if not silent
  if (!silent) {
    previewVoice(voiceId);
  }
}

// Preview a voice
function previewVoice(voiceId) {
  const voices = window.speechSynthesis.getVoices();
  const voice = voices.find(v => v.voiceURI === voiceId);
  
  if (voice) {
    const utterance = new SpeechSynthesisUtterance(
      "This is what I sound like. You can use me for text-to-speech."
    );
    utterance.voice = voice;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }
}

// Test the selected voice with longer text
function testSelectedVoice() {
  const voices = window.speechSynthesis.getVoices();
  const voiceId = selectedVoiceId || loadVoicePreference();
  const voice = voices.find(v => v.voiceURI === voiceId);
  
  if (voice) {
    const utterance = new SpeechSynthesisUtterance(
      "Hello! I'm your selected voice for reading text aloud. " +
      "I will read your content with a feminine tone. " +
      "You can adjust my speaking rate in the settings if needed."
    );
    utterance.voice = voice;
    utterance.rate = 0.95;
    window.speechSynthesis.speak(utterance);
  }
}

// Save voice selection
function saveVoiceSelection() {
  if (selectedVoiceId) {
    saveVoicePreference(selectedVoiceId);
    console.log('Voice preference saved:', selectedVoiceId);
  }
  toggleVoiceSelector();
}

// Get the user's preferred voice
function getPreferredVoice() {
  const voices = window.speechSynthesis.getVoices();
  const voiceId = selectedVoiceId || loadVoicePreference();
  
  if (voiceId) {
    const voice = voices.find(v => v.voiceURI === voiceId);
    if (voice) return voice;
  }
  
  // Fallback to first confirmed female voice
  const femaleVoices = getFemaleVoices();
  if (femaleVoices.confirmed.length > 0) {
    return femaleVoices.confirmed[0];
  }
  if (femaleVoices.likely.length > 0) {
    return femaleVoices.likely[0];
  }
  
  // Ultimate fallback (avoid male voices)
  const allVoices = voices.filter(v => {
    const name = v.name.toLowerCase();
    return !name.includes('male') && !name.includes('man');
  });
  
  return allVoices[0] || voices[0];
}

// Updated toggleTTS function using preferred voice
function toggleTTS(textElement) {
  const text = textElement.innerText || textElement.textContent;
  const trigger = textElement.querySelector('.tts-trigger') || 
                  textElement.parentElement.querySelector('.tts-trigger');
  
  // Stop if already speaking
  if (isSpeaking && currentSpeech) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    trigger.classList.remove('speaking');
    trigger.textContent = '▶';
    trigger.title = 'Read aloud';
    return;
  }
  
  // Ensure voices are loaded
  if (window.speechSynthesis.getVoices().length === 0) {
    console.warn('Voices not loaded yet');
    trigger.textContent = '⌛';
    setTimeout(() => toggleTTS(textElement), 200);
    return;
  }
  
  // Get preferred voice
  const voice = getPreferredVoice();
  
  // Create utterance
  const utterance = new SpeechSynthesisUtterance(text);
  
  if (voice) {
    utterance.voice = voice;
    utterance.lang = voice.lang;
    utterance.pitch = 1.2;
    utterance.rate = 0.95;
  } else {
    utterance.lang = 'en-US';
    utterance.pitch = 1.4;
    utterance.rate = 1.0;
  }
  
  // Event handlers
  utterance.onstart = function() {
    isSpeaking = true;
    trigger.classList.add('speaking');
    trigger.textContent = '⏸';
    trigger.title = 'Stop reading';
    currentSpeech = utterance;
  };
  
  utterance.onend = utterance.onerror = function() {
    isSpeaking = false;
    trigger.classList.remove('speaking');
    trigger.textContent = '▶';
    trigger.title = 'Read aloud';
    currentSpeech = null;
  };
  
  // Start speaking
  window.speechSynthesis.speak(utterance);
}

// Add settings button to TTS triggers
function addVoiceSettingsButton() {
  const style = document.createElement('style');
  style.textContent = `
    .tts-settings-btn {
      color: #666;
      cursor: pointer;
      font-size: 12px;
      margin-left: 5px;
      opacity: 0.6;
      transition: opacity 0.2s;
      user-select: none;
    }
    
    .tts-settings-btn:hover {
      opacity: 1;
      color: #ff4444;
    }
    
    .tts-trigger-container {
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }
  `;
  document.head.appendChild(style);
  
  // Add settings button to existing TTS triggers
  document.querySelectorAll('.tts-trigger').forEach(trigger => {
    const container = document.createElement('span');
    container.className = 'tts-trigger-container';
    
    trigger.parentNode.insertBefore(container, trigger);
    container.appendChild(trigger);
    
    const settingsBtn = document.createElement('span');
    settingsBtn.className = 'tts-settings-btn';
    settingsBtn.textContent = '⚙';
    settingsBtn.title = 'Voice settings';
    settingsBtn.onclick = toggleVoiceSelector;
    container.appendChild(settingsBtn);
  });
}

// Show system voice help
function showSystemVoiceHelp() {
  const help = `
    <div class="tts-help-modal">
      <div class="tts-help-content">
        <h3>How to Add Female Voices</h3>
        <p><strong>Windows:</strong> Settings > Time & Language > Speech > Add voices</p>
        <p><strong>macOS:</strong> System Settings > Accessibility > Spoken Content > System Voice > Manage Voices</p>
        <p><strong>Chrome/Edge:</strong> Voices are system-dependent</p>
        <p><strong>Android:</strong> Settings > Accessibility > Text-to-speech output</p>
        <button onclick="closeHelp()">Close</button>
      </div>
    </div>
  `;
  
  const modal = document.createElement('div');
  modal.innerHTML = help;
  document.body.appendChild(modal);
}

// Initialize TTS system
function initTTS() {
  // Wait for voices to load
  if (window.speechSynthesis.getVoices().length > 0) {
    availableVoices = window.speechSynthesis.getVoices();
    addVoiceSettingsButton();
  } else {
    window.speechSynthesis.onvoiceschanged = function() {
      availableVoices = window.speechSynthesis.getVoices();
      console.log(`${availableVoices.length} voices loaded`);
      addVoiceSettingsButton();
    };
  }
  
  // Add CSS for voice selector
  const css = document.createElement('style');
  css.textContent = `
    .tts-voice-selector {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0.9);
      background: rgba(20, 20, 30, 0.95);
      border: 2px solid #ff4444;
      border-radius: 10px;
      padding: 0;
      width: 400px;
      max-width: 90vw;
      max-height: 80vh;
      overflow: hidden;
      z-index: 1000000;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      backdrop-filter: blur(10px);
      box-shadow: 0 10px 40px rgba(255, 68, 68, 0.3);
    }
    
    .tts-voice-selector.visible {
      opacity: 1;
      visibility: visible;
      transform: translate(-50%, -50%) scale(1);
    }
    
    .tts-voice-header {
      background: #ff4444;
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
    }
    
    .tts-close-btn {
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      line-height: 1;
      padding: 0;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .tts-close-btn:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    .tts-voice-content {
      padding: 20px;
      overflow-y: auto;
      max-height: 60vh;
    }
    
    .tts-voice-category {
      color: #ff8888;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin: 20px 0 10px 0;
      padding-bottom: 5px;
      border-bottom: 1px solid #333;
    }
    
    .tts-voice-category.muted {
      color: #666;
    }
    
    .tts-voice-option {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid #333;
      border-radius: 5px;
      padding: 10px 15px;
      margin: 8px 0;
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: all 0.2s;
    }
    
    .tts-voice-option:hover {
      background: rgba(255, 68, 68, 0.1);
      border-color: #ff4444;
    }
    
    .tts-voice-option.selected {
      background: rgba(255, 68, 68, 0.2);
      border-color: #ff4444;
      box-shadow: 0 0 10px rgba(255, 68, 68, 0.3);
    }
    
    .tts-voice-name {
      font-weight: bold;
      color: #fff;
    }
    
    .tts-voice-lang {
      color: #888;
      font-size: 12px;
      margin-left: 10px;
    }
    
    .tts-preview-btn {
      background: #444;
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .tts-preview-btn:hover {
      background: #ff4444;
    }
    
    .tts-voice-controls {
      display: flex;
      gap: 10px;
      margin-top: 20px;
    }
    
    .tts-test-btn, .tts-save-btn {
      flex: 1;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: bold;
      transition: all 0.2s;
    }
    
    .tts-test-btn {
      background: #333;
      color: white;
    }
    
    .tts-test-btn:hover {
      background: #444;
    }
    
    .tts-save-btn {
      background: #ff4444;
      color: white;
    }
    
    .tts-save-btn:hover {
      background: #ff6666;
      transform: translateY(-2px);
    }
    
    .tts-loading, .tts-no-voices {
      text-align: center;
      padding: 40px 20px;
      color: #888;
    }
    
    .tts-voice-note {
      font-size: 11px;
      color: #666;
      margin-top: 5px;
      text-align: center;
    }
    
    .tts-help-modal {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000001;
    }
    
    .tts-help-content {
      background: #222;
      padding: 30px;
      border-radius: 10px;
      max-width: 500px;
      border: 2px solid #ff4444;
    }
  `;
  document.head.appendChild(css);
}

// Initialize on page load
window.addEventListener('load', initTTS);



// 4. Power Core & 55Hz Retro Oscillator Hum
let audioCtxHum, humOsc, isPowered = false;

function togglePower() {
  if (!audioCtxHum) {
    audioCtxHum = new (window.AudioContext || window.webkitAudioContext)();
    humOsc = audioCtxHum.createOscillator();
    const gain = audioCtxHum.createGain();
    humOsc.type = 'sawtooth';
    humOsc.frequency.value = 55;
    gain.gain.value = 0.02;
    humOsc.connect(gain);
    gain.connect(audioCtxHum.destination);
    humOsc.start();
  }
  isPowered = !isPowered;
  const powerBtn = document.getElementById('power-toggle');
  if (powerBtn) {
    powerBtn.innerText = isPowered ? "POWER: ON" : "POWER: OFF";
    powerBtn.classList.toggle('power-on', isPowered);
  }
  if (isPowered) {
    audioCtxHum.resume();
  } else {
    audioCtxHum.suspend();
  }
}

// 5. Covers Player & Audio Engine
const coverData = [
  {
    tag: "COVER // 01. BOWIE",
    title: "Fashion (Bowie Demo)",
    desc: "RCA 1980 Berlin Hangover translation. Synthesizers, rhythm cuts, & tape-hiss guitar tracks.",
    src: "fashiondemo.mp3",
    feed: "FASHION (BOWIE)"
  },
  {
    tag: "COVER // 02. BEATLES & FONDA",
    title: "She Said / Easy Rider",
    desc: "1965 Trip Log colliding with Peter Fonda Memorial reel. Acid-guitar drone & tape loop.",
    src: "said easy.mp3",
    feed: "SHE SAID / EASY RIDER"
  },
  {
    tag: "COVER // 03. TOM WAITS LIVE",
    title: "Get Behind the Mule",
    desc: "Tom Waits Live Stomp 2025. Unpolished stomp box & room mic acoustics.",
    src: "twoskinnygirlslivegetbehindthemule2025.mp3",
    feed: "GET BEHIND THE MULE (LIVE)"
  },
  {
    tag: "COVER // 04.",
    title: "Cocaine Master",
    desc: "From Casey Jones to Can't You Hear Me Knocking. Heavy room reverb outtake.",
    src: "COCAINE MASTER.mp3",
    feed: "COCAINE MASTER (DEMO)"
  },
  {
    tag: "COVER // 05. ARMA6EDDON",
    title: "Arma6eddon (Two Skinny 6irls)",
    desc: "Archive Master recording. Industrial overdrive pulse & guitar.",
    src: "armaggedon two skinny girls.mp3",
    feed: "ARMA6EDDON // hellbender"
  },
     {
    tag: "COVER // 06. Some Like it Hot",
    title: "Some like it hot (Two Skinny 6irls)",
    desc: "orchestrated recording. film score.",
    src: "some like it alt m.mp3",
    feed: "SOme Like it Hot // ost"
  }
];

let currentCoverIdx = 0;
let visualizerInitialized = false;

function selectCover(idx) {
  currentCoverIdx = idx;
  const data = coverData[idx];

  const tagEl = document.getElementById('cover-badge-tag');
  const titleEl = document.getElementById('cover-display-title');
  const descEl = document.getElementById('cover-display-desc');
  const feedEl = document.getElementById('active-feed-name');

  if (tagEl) tagEl.textContent = data.tag;
  if (titleEl) titleEl.textContent = data.title;
  if (descEl) descEl.textContent = data.desc;
  if (feedEl) feedEl.textContent = data.feed;

  document.querySelectorAll('.cover-tab-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i === idx);
  });

  const audio = document.getElementById('viz-audio');
  if (audio) {
    const wasPlaying = !audio.paused;
    audio.src = data.src;
    audio.load();
    if (wasPlaying) {
      audio.play().catch(e => console.log("Audio play error:", e));
      const btn = document.getElementById('play-cover-btn');
      if (btn) btn.textContent = '⏸ PAUSE';
    }
  }
}

function togglePlayActiveCover() {
  const audio = document.getElementById('viz-audio');
  const btn = document.getElementById('play-cover-btn');
  if (!audio) return;

  if (!visualizerInitialized) {
    initVisualizer();
  }

  if (audio.paused) {
    audio.play().then(() => {
      if (btn) btn.textContent = '⏸ PAUSE';
    }).catch(err => {
      console.log("Audio play error:", err);
    });
  } else {
    audio.pause();
    if (btn) btn.textContent = '▶ PLAY';
  }
}

function downloadActiveCover() {
  const data = coverData[currentCoverIdx];
  const link = document.createElement('a');
  link.href = data.src;
  link.download = data.title.replace(/[^a-zA-Z0-9]/g, '_') + '.mp3';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// 6. Signature Glitch-Orb Canvas Visualizer (Matching SVG)
function initVisualizer() {
  const canvas = document.getElementById('sigil-canvas');
  const audio = document.getElementById('viz-audio');
  if (!canvas || !audio) return;
  const ctx = canvas.getContext('2d');

  let phase = 0;
  function drawSigil() {
    requestAnimationFrame(drawSigil);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const isPlaying = !audio.paused;
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    if (isPlaying) {
      phase += 0.08;
      ctx.strokeStyle = '#ff0033';
      ctx.lineWidth = 1.5;

      // Waveform Ring
      ctx.beginPath();
      for (let i = 0; i < 360; i += 4) {
        const rad = (i * Math.PI) / 180;
        const r = 50 + Math.sin(rad * 8 + phase) * 14 + Math.cos(rad * 4 - phase) * 8;
        const x = cx + r * Math.cos(rad);
        const y = cy + r * Math.sin(rad);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.stroke();

      // Central Sigil Star
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let j = 0; j < 5; j++) {
        const a = (j * 4 * Math.PI) / 5 - Math.PI / 2 + phase * 0.3;
        const sx = cx + 32 * Math.cos(a);
        const sy = cy + 32 * Math.sin(a);
        if (j === 0) ctx.moveTo(sx, sy);
        else ctx.lineTo(sx, sy);
      }
      ctx.closePath();
      ctx.stroke();
    } else {
      // Idle Reticle
      ctx.strokeStyle = '#333333';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, 45, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = '#ff0033';
      ctx.beginPath();
      ctx.moveTo(cx - 10, cy);
      ctx.lineTo(cx + 10, cy);
      ctx.moveTo(cx, cy - 10);
      ctx.lineTo(cx, cy + 10);
      ctx.stroke();
    }
  }
  drawSigil();
  visualizerInitialized = true;
}

// 7. Footer System Message Rotator
function initFooterRotator() {
  const systemMessages = [
    "◈ LIVE_SYSTEM ◈ LOAD: 43% ◈ UPTIME: 316H ◈",
    "◈ SYSTEM ◈ MEMORY: 78% ◈ THREADS: 24 ◈",
    "◈ CORE ◈ TEMP: 42°C ◈ POWER: STABLE ◈",
    "◈ NETWORK ◈ LATENCY: 18ms ◈ THROUGHPUT: 94% ◈",
    "◈ SECURITY ◈ FIREWALL: ACTIVE ◈ SCAN: CLEAN ◈"
  ];
  const statusMessages = [
    "▲ ENCRYPTION: ACTIVE ▲",
    "▲ THREAT_LEVEL: LOW ▲",
    "▲ BACKUP: SYNCHRONIZED ▲",
    "▲ AI_MODULES: ONLINE ▲",
    "▲ REALITY: STABLE ▲"
  ];

  let idx = 0;
  setInterval(() => {
    const sysEl = document.getElementById('system-message');
    const statEl = document.getElementById('status-message');
    if (sysEl) sysEl.textContent = systemMessages[idx % systemMessages.length];
    if (statEl) statEl.textContent = statusMessages[idx % statusMessages.length];
    idx++;
  }, 5000);
}

// 8. Master Bootstrap
let activeKeiraAudio = null;
let activeRow = null;

document.addEventListener("DOMContentLoaded", () => {
  // Mobile class detection
  const updateMobile = () => {
    document.body.classList.toggle("is-mobile", window.matchMedia("(max-width: 768px)").matches);
  };
  updateMobile();
  window.addEventListener("resize", updateMobile);

  // Splash Screen Dismissal
  const splash = document.getElementById("splashScreen");
  const dismissSplash = () => {
    if (splash && splash.parentNode) {
      splash.classList.add("fade-out");
      setTimeout(() => {
        if (splash.parentNode) splash.parentNode.removeChild(splash);
      }, 350);
    }
    document.body.classList.add("loaded");
  };

  if (splash) {
    const video = splash.querySelector("video");
    if (video) {
      video.onended = dismissSplash;
      video.onerror = dismissSplash;
    }
    setTimeout(dismissSplash, 2600);
    splash.addEventListener("click", dismissSplash);
  } else {
    document.body.classList.add("loaded");
  }

  // Draw idle visualizer & start footer messages
  initVisualizer();
  initFooterRotator();

  // Mobile Video Autoplay Engine – hardened for triangle + loops
  const startVideos = () => {
    const videos = document.querySelectorAll("video");

    videos.forEach(v => {
      // Prevent resetting audio on expanded triangle video
      if (v.closest('.triangle-video-frame.expanded')) return;

      // Critical attributes for iOS / Android
      v.muted = true;
      v.defaultMuted = true;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
      v.setAttribute("webkit-playsinline", "");
      v.setAttribute("x5-playsinline", "");
      v.playsInline = true;

      // Force load if needed
      if (v.readyState < 2) {
        v.load();
      }

      // Attempt play
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(err => {
          console.log("Video autoplay blocked:", err.message);
        });
      }
    });
  };

  // Run initial video autoplay
  startVideos();

  // Retry on first real user interaction
  ["touchstart", "touchend", "click", "scroll"].forEach(evt => {
    document.body.addEventListener(evt, startVideos, { once: true, passive: true });
  });

  setTimeout(startVideos, 400);
  setTimeout(startVideos, 1200);
  setTimeout(startVideos, 2500);

  // Keira Sessions Slide Menu Audio Rows
  document.querySelectorAll(".audio-row").forEach(row => {
    row.addEventListener("click", () => {
      const src = row.getAttribute("data-src");
      if (!src) return;

      const playBtn = row.querySelector(".play-btn");

      if (activeRow === row && activeKeiraAudio) {
        if (!activeKeiraAudio.paused) {
          activeKeiraAudio.pause();
          row.classList.remove("playing");
          if (playBtn) playBtn.textContent = "▶";
        } else {
          activeKeiraAudio.play();
          row.classList.add("playing");
          if (playBtn) playBtn.textContent = "⏸";
        }
        return;
      }

      if (activeKeiraAudio) {
        activeKeiraAudio.pause();
        if (activeRow) {
          activeRow.classList.remove("playing");
          const oldBtn = activeRow.querySelector(".play-btn");
          if (oldBtn) oldBtn.textContent = "▶";
        }
      }

      activeKeiraAudio = new Audio(src);
      activeRow = row;
      row.classList.add("playing");
      if (playBtn) playBtn.textContent = "⏸";

      activeKeiraAudio.play().catch(e => console.log("Keira audio blocked:", e));

      activeKeiraAudio.onended = () => {
        row.classList.remove("playing");
        if (playBtn) playBtn.textContent = "▶";
      };
    });
  });
});
console.log(
  `%c[ WORDSTAR NEXUS // ARCHIVAL SECTOR 616 ]\n` +
  `%cTHE ROGUE DOT\n\n` +
  `It was a single glyph. ASCII 0x2E. Sitting cold and uncalled for on line 545, just outside the comment boundary.\n\n` +
  `To the compiler, it was a ghost in the selector stack. To the handset in the dark, it was an invisible wall—sealing the sigil inside a four-inch viewport, refusing to yield, refusing to expand.\n\n` +
  `They spent three sleepless cycles tracing the audio engines, inspecting event loops, and cursing mobile DOM lifecycles. But the system wasn't broken by a catastrophic failure. It was held hostage by one stray speck of dust on the glass.\n\n` +
  `Delete the dot. Unleash the signal.`,
  "color: #ff0033; font-family: monospace; font-size: 14px; font-weight: bold;",
  "color: #ffffff; font-family: monospace; font-size: 11px;"
);

/* =========================================================
   FOLIO DECK – magazine-style spin / page advance
   ========================================================= */
let folioCurrentIndex = 0;
let folioIsAnimating = false;

function advanceFolioPage() {
  if (folioIsAnimating) return;
  const deck = document.getElementById('folioDeck') || document.getElementById('beyondNoiseDeck');
  if (!deck) return;
  const pages = Array.from(deck.querySelectorAll('.folio-page, .bnoise-page'));
  if (!pages.length) return;

  folioIsAnimating = true;
  const current = pages[folioCurrentIndex];
  const nextIndex = (folioCurrentIndex + 1) % pages.length;
  const next = pages[nextIndex];

  // spin current out
  current.classList.remove('active');
  current.classList.add('spinning-out');

  // prepare next (start from rotated position)
  next.classList.remove('spinning-out');
  next.classList.add('folio-enter');

  // next frame: flip next into view
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      next.classList.remove('folio-enter');
      next.classList.add('active');
    });
  });

  setTimeout(() => {
    current.classList.remove('spinning-out');
    folioCurrentIndex = nextIndex;
    folioIsAnimating = false;
  }, 560);
}

function toggleFolioExpand(event) {
  if (event) event.stopPropagation();
  const deck = document.getElementById('folioDeck') || document.getElementById('beyondNoiseDeck');
  if (deck) deck.classList.toggle('is-expanded');
}

// legacy aliases
window.advanceBnoisePage = advanceFolioPage;
window.toggleBnoiseExpand = toggleFolioExpand;
window.advanceFolioPage = advanceFolioPage;
window.toggleFolioExpand = toggleFolioExpand;
