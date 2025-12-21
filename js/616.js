
  // Menu Toggle
  function toggleMenu() {
    const overlay = document.getElementById('menu-overlay');
    const menu = document.getElementById('slide-menu');
    overlay.classList.toggle('active');
    menu.classList.toggle('active');
  }

  // --- SIGIL FORGE ENGINE (SIMPLIFIED) ---
 // ==== AUDIO VISUALIZER ====
const canvas = document.getElementById('sigil-canvas');
const ctx = canvas.getContext('2d');
const audio = document.getElementById('viz-audio');
let audioContext, analyser, source, dataArray;

// Initialize audio context on first interaction
function initAudio() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination);
        
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        
        // Start visualization
        visualize();
        
        // Update status
        document.getElementById('witch-status').textContent = "Audio Active";
        document.getElementById('witch-status').style.color = "#ff0000";
    }
}

// Visualization function
function visualize() {
    if (!analyser) return;
    
    const width = canvas.width;
    const height = canvas.height;
    
    requestAnimationFrame(visualize);
    
    analyser.getByteFrequencyData(dataArray);
    
    // Clear with fade effect
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, width, height);
    
    const barWidth = (width / dataArray.length) * 2.5;
    let barHeight;
    let x = 0;
    
    // Draw frequency bars
    for(let i = 0; i < dataArray.length; i++) {
        barHeight = dataArray[i] / 2;
        
        // Red gradient based on frequency
        const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
        gradient.addColorStop(0, '#ff0000');
        gradient.addColorStop(0.7, '#ff4444');
        gradient.addColorStop(1, '#ff8888');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, height - barHeight, barWidth, barHeight);
        
        x += barWidth + 1;
    }
    
    // Draw center waveform
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.beginPath();
    
    const sliceWidth = width * 1.0 / dataArray.length;
    x = 0;
    
    for(let i = 0; i < dataArray.length; i++) {
        const v = dataArray[i] / 128.0;
        const y = v * height / 2;
        
        if(i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
        
        x += sliceWidth;
    }
    
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    
    // Draw pulsing circle in center
    const centerSize = 10 + (dataArray[10] / 10);
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, centerSize, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 0, 0, ${0.3 + dataArray[5] / 400})`;
    ctx.fill();
}

// Event listeners
audio.addEventListener('play', function() {
    initAudio();
    document.getElementById('witch-status').textContent = "Playing...";
    document.getElementById('witch-status').classList.add('animate-pulse');
});

audio.addEventListener('pause', function() {
    document.getElementById('witch-status').textContent = "Paused";
    document.getElementById('witch-status').classList.remove('animate-pulse');
});

audio.addEventListener('ended', function() {
    document.getElementById('witch-status').textContent = "Audio Ended";
    document.getElementById('witch-status').classList.remove('animate-pulse');
});

// Click canvas to play/pause
canvas.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Initialize with a static visualization when page loads
function initStaticViz() {
    const width = canvas.width;
    const height = canvas.height;
    
    // Draw initial static pattern
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, width, height);
    
    // Draw cool static pattern
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 1;
    
    for(let i = 0; i < 50; i++) {
        ctx.beginPath();
        ctx.moveTo(Math.random() * width, Math.random() * height);
        ctx.lineTo(Math.random() * width, Math.random() * height);
        ctx.stroke();
    }
    
    // Add text
    ctx.fillStyle = '#666';
    ctx.font = '10px "VT323"';
    ctx.textAlign = 'center';
    ctx.fillText('CLICK TO PLAY AUDIO', width / 2, height / 2);
}

// Initialize on page load
window.onload = initStaticViz;
  // --- AUDIO CORE ---
  let audioCtx, humOsc, isPowered = false;
  function togglePower() {
    if(!audioCtx) {
        audioCtx = new AudioContext();
        humOsc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        humOsc.type = 'sawtooth'; humOsc.frequency.value = 55;
        gain.gain.value = 0.02;
        humOsc.connect(gain); gain.connect(audioCtx.destination);
        humOsc.start();
    }
    isPowered = !isPowered;
    document.getElementById('power-toggle').innerText = isPowered ? "POWER: ON" : "POWER: OFF";
    document.getElementById('power-toggle').classList.toggle('power-on');
    audioCtx.resume();
    if(!isPowered) audioCtx.suspend();
  }

  // --- LOGS ---
const logFragments = [
  "SIGILLUM authenticated",
  "Cube navigation loaded",
  "SIGNUM protocol active",
  "Link geometry stable",
  "2026 impression verified",
  "Current reader healed of stress",
  "Typography matrices aligned",
  "DIMINUTIVE suffix applied",
  "Inkrealm info online",
  "Download paths verified",
  "Intent compression: 87%",
  "Your mind is clear and focused",
  "Navigation runes encoded",
  "Featured apps indexed",
  "Medieval markers found",
  "Cube faces rendered",
  "Etymology trace complete",
  "Anxiety dissolves into code",
  "Small sign detected",
  "APK verification complete",
  "PDF bindings secure",
  "Creative flow restored",
  "AUTHENTICARE timestamp",
  "Wax seal emulator online",
  "You are exactly where you need to be",
  "Chaos magic subroutine",
  "Typecast link active",
  "Symbol charge: nominal",
  "Grimoire index updated",
  "Rest is productive work",
  "Old French parser engaged",
  "Displaywriter mounted",
  "Token verification loop",
  "Breath deepens, tension releases",
  "Ceremonial binding active",
  "Citadelle routes mapped",
  "Latin parse buffer full",
  "Your path forward is illuminated"
];
  
  function updateLogs() {
    const content = document.getElementById('log-content');
    const p = document.createElement('p');
    p.textContent = "> " + logFragments[Math.floor(Math.random() * logFragments.length)];
    p.style.marginBottom = '5px';
    content.appendChild(p);
    document.getElementById('log-stream').scrollTop = document.getElementById('log-stream').scrollHeight;
    if (content.children.length > 20) content.removeChild(content.children[0]);
  }
  
  setInterval(updateLogs, 3000);

  // --- CHAT ---
 // ==== ENHANCED ASCII ART GENERATOR ====
// ==== ASCII ART GENERATOR (FIXED WITH THEME COLORS) ====
const asciiArt = {
    'INK': [
        "██████████████████████████████████████████████████",
        "██                                              ██",
        "██                ██  ████  ██                 ██",
        "██              ███████████████               ██",
        "██            ███████████████████             ██",
        "██          ██████  ███████  ██████           ██",
        "██        ██████      ███      ██████         ██",
        "██      ███████████████████████████████       ██",
        "██    ███████████████████████████████████     ██",
        "██████████████████████████████████████████████████"
    ],
    
    '1991': [
        "▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄",
        "█ 1 9 9 1 1 9 9 1 1 9 9 1 1 9 9 1 1 9 9 1 1 9 9 1 █",
        "█                                                █",
        "█   ███   ███   ███   ███   ███   ███   ███   █  █",
        "█   ███   ███   ███   ███   ███   ███   ███   █  █",
        "█                                                █",
        "█ 1 9 9 1 1 9 9 1 1 9 9 1 1 9 9 1 1 9 9 1 1 9 9 1 █",
        "▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀"
    ],
    
    'LOVE': [
        "   ******       ******   ",
        " **********   ********** ",
        "************ ************",
        "*************************",
        " *********************** ",
        "  *********************  ",
        "   *******************   ",
        "    *****************    ",
        "     ***************     ",
        "      *************      ",
        "       ***********       ",
        "        *********        ",
        "         *******         ",
        "          *****          ",
        "           ***           ",
        "            *            "
    ],
    
    'GIRLS': [
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░",
        "░░░░░▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄░░░░░░",
        "░░░▄██████████████████████████████████████▄░░░░",
        "░░██████████████████████████████████████████░░░",
        "░░███▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀███░░░",
        "░░░▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀░░░░",
        "░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░"
    ],
    
    'CYBER': [
        "010010000110100101100111011010000111010001100101",
        "011000110110100001101110011011110110110001100111",
        "011110010010000001100100011010010110011101101001",
        "011101000110000101101100001000000111001101101000",
        "011000010110010001101111011101110111001100101110",
        "001000000100100100100000011000010110110100100000",
        "011101000110100001100101001000000110011101101111",
        "011001000010000001101111011001100010000001110100",
        "011010000110010100100000011101110110010101100010",
        "001011100010111000100000010110010110111101110101"
    ],
    
    'GHOST': [
        "                 .-.           ",
        "                (o o)          ",
        "                | O |          ",
        "                |   |          ",
        "                '~~~'          ",
        "            GHOST IN THE MACHINE",
        "        ........................",
        "        ::::::::::::::::::::::::",
        "        ........................"
    ],
    
    'SKULL': [
        "    .-''''''-.",
        "  .'          '.",
        " /   O      O   \\",
        ":           `    :",
        "|                |",  
        ":    .------.    :",
        " \\  '        '  /",
        "  '.          .'",
        "    '-......-'"
    ],
    
    'HEART': [
        "   ******       ******",
        " **********   **********",
        "************ ************",
        "*************************",
        " ***********************",
        "  *********************",
        "   *******************",
        "    *****************",
        "     ***************",
        "      *************",
        "       ***********",
        "        *********",
        "         *******",
        "          *****",
        "           ***",
        "            *"
    ],
    
    'STAR': [
        "       +",
        "       *",
        "      ***",
        "     *****",
        "    *******",
        "   *********",
        "    *******",
        "     *****",
        "      ***",
        "       *"
    ],
    
    'MOON': [
        "      .--.",
        "   .-'    '-.",
        "  /          \\",
        " |            |",
        " |            |",
        "  \\          /",
        "   '-.____.-'",
        "       ''"
    ]
};

// THEME COLORS: Red (#ff0000), White (#ffffff), Grey (#666666)
function colorizeASCII(lines) {
    return lines.map((line, index) => {
        // Border lines: Red
        if (index === 0 || index === lines.length - 1) {
            return `<span style="color:#ff0000">${line}</span>`;
        }
        // Middle line: White
        else if (index === Math.floor(lines.length / 2)) {
            return `<span style="color:#ffffff">${line}</span>`;
        }
        // Other lines: Grey
        else {
            return `<span style="color:#666666">${line}</span>`;
        }
    }).join('\n');
}

function generateCustomASCII(text, style) {
    const chars = {
        'block': ['█', '▓', '▒', '░', ' '],
        'simple': ['#', '*', '+', '.', ' '],
        'matrix': ['ア', 'イ', 'ウ', 'エ', 'オ'],
        'witch': ['☾', '✧', '☽', '☆', '✵'],
        'binary': ['0', '1'],
        'shade': ['▓', '▒', '░', '·', ' '],
        'lines': ['─', '│', '┌', '┐', '└', '┘', '├', '┤', '┬', '┴', '┼'],
        'emoji': ['🟥', '🟧', '🟨', '🟩', '🟦', '🟪', '⬛', '⬜'],
        'greek': ['α', 'β', 'γ', 'δ', 'ε', 'ζ', 'η', 'θ', 'ι', 'κ'],
        'runes': ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ']
    };
    
    const charSet = chars[style] || chars.block;
    const result = [];
    const textUpper = text.toUpperCase();
    
    // Create banner frame
    const border = charSet[0].repeat(40);
    result.push(border);
    result.push(charSet[0] + ' '.repeat(38) + charSet[0]);
    
    // Center the text
    const padding = Math.floor((38 - textUpper.length * 2) / 2);
    const centeredText = charSet[0] + ' '.repeat(padding) + 
                        textUpper.split('').join(' ') + 
                        ' '.repeat(38 - padding - textUpper.length * 2) + charSet[0];
    result.push(centeredText);
    result.push(charSet[0] + ' '.repeat(38) + charSet[0]);
    
    // Create pattern
    for (let i = 0; i < 6; i++) {
        let line = charSet[0];
        for (let j = 0; j < 38; j++) {
            if (textUpper.length > 0) {
                const charIndex = j % textUpper.length;
                const asciiCode = textUpper.charCodeAt(charIndex);
                const useChar = (asciiCode * (i+1) * (j+1)) % 3 === 0;
                
                if (useChar) {
                    const charIdx = (asciiCode * j) % charSet.length;
                    line += charSet[charIdx];
                } else {
                    line += ' ';
                }
            } else {
                line += ' ';
            }
        }
        line += charSet[0];
        result.push(line);
    }
    
    result.push(charSet[0] + ' '.repeat(38) + charSet[0]);
    result.push(border);
    
    return result;
}

function generateASCII() {
    const input = document.getElementById('ascii-input').value.trim().toUpperCase();
    const style = document.getElementById('ascii-style').value;
    const container = document.getElementById('ascii-container');
    
    if (!input) {
        container.innerHTML = "<span style='color:#ff0000'>ERROR: Please enter text first!</span>";
        return;
    }
    
    let asciiLines;
    
    if (asciiArt[input]) {
        // Use preset
        asciiLines = asciiArt[input];
    } else {
        // Generate custom
        asciiLines = generateCustomASCII(input, style);
    }
    
    // Add colored header
    const timestamp = new Date().toLocaleTimeString();
    const header = 
        `<span style="color:#ff0000">╔══════════════════════════════════════╗</span>\n` +
        `<span style="color:#ffffff">║ ASCII: ${input.padEnd(10)} ${timestamp} ║</span>\n` +
        `<span style="color:#ff0000">╚══════════════════════════════════════╝</span>\n\n`;
    
    // Apply theme colors to ASCII
    const coloredAscii = colorizeASCII(asciiLines);
    
    container.innerHTML = header + coloredAscii;
    container.scrollTop = 0;
    
    // Add glitch effect for fun
    container.classList.add('ascii-glitch');
    setTimeout(() => container.classList.remove('ascii-glitch'), 300);
}

// --- EXPORT FUNCTIONS ---
function clearChat() {
    // Now clears ASCII art and resets
    const container = document.getElementById('ascii-container');
    container.textContent = 
        "╔══════════════════════════════════════════╗\n" +
        "║ ASCII ART GEN v1.2                       ║\n" +
        "║ Type text and select style above         ║\n" +
        "╚══════════════════════════════════════════╝\n\n" +
        "Ready for input...";
    
    document.getElementById('ascii-input').value = '';
}

// Choose ONE of these export functions (remove the other):
function exportASCII() {
    const asciiContent = document.getElementById('ascii-container').textContent;
    const textBlob = new Blob([asciiContent], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = `ascii-art-${Date.now()}.txt`;
    textLink.click();
}

// If you want to keep exportAll (but remove MP3 download since you're monetizing)
function exportAll() {
    // Export ASCII only (removed MP3 download for monetization)
    exportASCII();
    
    // If you want to add something else instead of MP3, add it here
    // For example: export a screenshot, additional data, etc.
}

// Remove or comment out the duplicate exportChat function
/*
function exportChat() {
    // Export ASCII art as text file
    const asciiContent = document.getElementById('ascii-container').textContent;
    const textBlob = new Blob([asciiContent], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = `ascii-art-${Date.now()}.txt`;
    textLink.click();
}
*/
    
    // Export MP3
    setTimeout(() => {
        const audio = document.getElementById('viz-audio');
        if (audio && audio.src) {
            const audioLink = document.createElement('a');
            audioLink.href = audio.src;
            audioLink.download = 'imthroughwithloveTWOSKINNYGIRLS.mp3';
            audioLink.click();
        }
    }, 200);
}
	
  function exportDraft() {
    const content = document.getElementById('editor').innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inkrealm-dossier.txt';
    a.click();
  }

  // --- INIT ---
  window.onload = () => {
    forgeSigil();
  };


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

		// Simple splash screen removal
setTimeout(function() {
    var splash = document.getElementById('splashScreen');
    if (splash) {
        splash.style.opacity = '0';
        setTimeout(function() {
            splash.style.display = 'none';
        }, 500);
    }
}, 3000); // 3 seconds
// First Menu (original)
const mainHeader = document.getElementById('main_header');
const menuToggle = document.getElementById('menu_toggle');

if (menuToggle && mainHeader) {
    menuToggle.addEventListener('click', function() {
        const isExpanded = mainHeader.classList.contains('expanded');
        mainHeader.classList.toggle('expanded');
        this.setAttribute('aria-expanded', !isExpanded);
    });
}

// ===== FOOTER MESSAGE ROTATOR =====
(function() {
  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooterRotator);
  } else {
    initFooterRotator();
  }

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

    let messageIndex = 0;
    let rotationInterval;

    function rotateMessages() {
      const systemEl = document.getElementById('system-message');
      const statusEl = document.getElementById('status-message');
      
      if (!systemEl || !statusEl) return;
      
      systemEl.textContent = systemMessages[messageIndex % systemMessages.length];
      statusEl.textContent = statusMessages[messageIndex % statusMessages.length];
      
      // Optional fade effect
      systemEl.style.transition = 'opacity 0.3s';
      statusEl.style.transition = 'opacity 0.3s';
      systemEl.style.opacity = '0.5';
      statusEl.style.opacity = '0.5';
      
      setTimeout(() => {
        systemEl.style.opacity = '1';
        statusEl.style.opacity = '1';
      }, 100);
      
      messageIndex++;
    }

    function startRotation() {
      // Clear any existing interval
      if (rotationInterval) clearInterval(rotationInterval);
      
      // Initial rotation
      rotateMessages();
      
      // Set up continuous rotation every 5 seconds
      rotationInterval = setInterval(rotateMessages, 5000);
    }

    function stopRotation() {
      if (rotationInterval) {
        clearInterval(rotationInterval);
        rotationInterval = null;
      }
    }

    // Public API (optional - if you want to control it from elsewhere)
    window.footerRotator = {
      start: startRotation,
      stop: stopRotation,
      rotate: rotateMessages
    };

    // Start automatically
    startRotation();
  }
})();
