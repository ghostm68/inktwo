/* ================================================================
   INKREALM CORE — Non-module scripts extracted from index
   Load with: <script src="js/inkrealm-core.js" defer></script>
   ================================================================ */
// ================================================================
// 0. contact
// ================================================================
// ── SCRAMBLE LINK DECODER EFFECT ──
document.addEventListener('DOMContentLoaded', () => {
  const letters = "!<>-_\\/[]{}—=+*^?#________ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  document.querySelectorAll(".scramble-link").forEach(link => {
    link.addEventListener("mouseover", event => {
      let iteration = 0;
      clearInterval(event.target.interval);
      
      const target = event.target;
      const originalText = target.dataset.value || target.innerText;
      
      target.interval = setInterval(() => {
        target.innerText = originalText
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return originalText[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(target.interval);
        }
        iteration += 1 / 2;
      }, 30);
    });
  });
});
// ================================================================
// 1. LENIS SMOOTH SCROLL
// ================================================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 1,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Update Lenis on details toggle
document.querySelectorAll('details').forEach(detail => {
  detail.addEventListener('toggle', () => {
    lenis.resize();
  });
});

// ================================================================
// 2. MENU FUNCTIONS
// ================================================================
function toggleMenu() {
  const m = document.getElementById('menuOverlay');
  if (!m) return;
  const isOpen = m.style.display === 'flex';
  m.style.display = isOpen ? 'none' : 'flex';
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function closeMenu() {
  const overlay = document.getElementById('menuOverlay');
  if (overlay) {
    overlay.style.display = 'none';
    document.body.style.overflow = '';
  }
}

function toggleNous() {
  const p = document.getElementById('nous-panel');
  if (p) {
    p.style.display = (p.style.display === 'block') ? 'none' : 'block';
  }
}

function glitchEffect() {
  document.body.style.filter = 'invert(1)';
  setTimeout(() => { document.body.style.filter = 'invert(0)'; }, 50);
}

// ================================================================
// 3. AUDIO POWER TOGGLE
// ================================================================
let audioCtx, humOsc, isPowered = false;

function togglePower() {
  const powerBtn = document.getElementById('power-toggle');
  if (!powerBtn) return;

  if (!audioCtx) {
    try {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      humOsc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      humOsc.type = 'sawtooth';
      humOsc.frequency.value = 55;
      gain.gain.value = 0.02;
      humOsc.connect(gain);
      gain.connect(audioCtx.destination);
      humOsc.start();
      isPowered = true;
    } catch (e) {
      console.warn('Audio context failed:', e);
      return;
    }
  } else {
    if (isPowered) {
      audioCtx.suspend();
      isPowered = false;
    } else {
      audioCtx.resume();
      isPowered = true;
    }
  }

  powerBtn.innerText = isPowered ? "POWER: ON" : "POWER: OFF";
  powerBtn.classList.toggle('power-on', isPowered);
}

// ================================================================
// 4. EXPORT DRAFT
// ================================================================
function exportDraft(buttonElement) {
  const storyContainer = buttonElement.closest('.story-content');
  if (!storyContainer) return;
  const content = storyContainer.innerText;
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'inkrealm-dossier.txt';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// ================================================================
// 5. TTS FUNCTIONS
// ================================================================
let storySynth = window.speechSynthesis;
let storyUtterance = null;

function toggleStoryTTS(spanElement) {
  const btn = spanElement;
  const storyContainer = btn.closest('.story-content');
  const textContainer = storyContainer?.querySelector('.story-text');
  if (!textContainer) return;

  if (storySynth.speaking) {
    storySynth.cancel();
    btn.innerHTML = "▶ SPEAK";
    btn.style.borderColor = "#333";
    btn.style.color = "#888";
    return;
  }

  const textToRead = textContainer.innerText;
  storyUtterance = new SpeechSynthesisUtterance(textToRead);
  storyUtterance.pitch = 0.85;
  storyUtterance.rate = 0.9;
  storyUtterance.volume = 1.0;

  const voices = storySynth.getVoices();
  const preferredVoice = voices.find(v => v.name.includes("Google US English")) || voices[0];
  if (preferredVoice) storyUtterance.voice = preferredVoice;

  btn.innerHTML = "■ STOP";
  btn.style.borderColor = "var(--red)";
  btn.style.color = "var(--red)";

  storyUtterance.onend = function() {
    btn.innerHTML = "▶ SPEAK";
    btn.style.borderColor = "#333";
    btn.style.color = "#888";
  };

  storySynth.speak(storyUtterance);
}

let requiemSynth = window.speechSynthesis;
let requiemUtterance = null;

function toggleRequiemTTS(btn) {
  const textContainer = document.querySelector('#editor .story-text');
  if (!textContainer) {
    console.warn("Requiem text container not found.");
    return;
  }

  if (requiemSynth.speaking) {
    requiemSynth.cancel();
    btn.innerHTML = "▶ SPEAK";
    btn.style.borderColor = "#333";
    btn.style.color = "#888";
    return;
  }

  const textToRead = textContainer.innerText;
  requiemUtterance = new SpeechSynthesisUtterance(textToRead);
  requiemUtterance.pitch = 0.85;
  requiemUtterance.rate = 0.9;
  requiemUtterance.volume = 1.0;

  btn.innerHTML = "■ STOP";
  btn.style.borderColor = "var(--red)";
  btn.style.color = "var(--red)";

  requiemUtterance.onend = function() {
    btn.innerHTML = "▶ SPEAK";
    btn.style.borderColor = "#333";
    btn.style.color = "#888";
  };

  requiemSynth.speak(requiemUtterance);
}

// ================================================================
// 6. CUSTOM SELECTS
// ================================================================
function initCustomSelects() {
  const containers = document.querySelectorAll('.custom-select-container');
  
  containers.forEach(container => {
    const originalSelect = container.querySelector('select');
    if (!originalSelect) return;

    const selectedDiv = document.createElement('div');
    selectedDiv.className = 'select-selected';
    selectedDiv.innerHTML = originalSelect.options[originalSelect.selectedIndex].innerHTML;
    container.appendChild(selectedDiv);
    
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'select-items select-hide';
    
    Array.from(originalSelect.options).forEach((option, index) => {
      const optionDiv = document.createElement('div');
      optionDiv.innerHTML = option.innerHTML;
      
      optionDiv.addEventListener('click', function() {
        originalSelect.selectedIndex = index;
        selectedDiv.innerHTML = this.innerHTML;
        
        const siblings = this.parentNode.querySelectorAll('div');
        siblings.forEach(sib => sib.classList.remove('same-as-selected'));
        this.classList.add('same-as-selected');
        
        originalSelect.dispatchEvent(new Event('change'));
      });
      
      optionsDiv.appendChild(optionDiv);
    });
    
    container.appendChild(optionsDiv);
    
    selectedDiv.addEventListener('click', function(e) {
      e.stopPropagation();
      closeAllSelects(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
    });
  });
  
  document.addEventListener('click', closeAllSelects);
}

function closeAllSelects(exceptThis) {
  const items = document.querySelectorAll('.select-items');
  const selected = document.querySelectorAll('.select-selected');
  
  items.forEach((item, index) => {
    if (exceptThis !== selected[index]) {
      item.classList.add('select-hide');
      selected[index].classList.remove('select-arrow-active');
    }
  });
}

// ================================================================
// 7. ASCII ART GENERATOR
// ================================================================
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
    "011000010110010001101110011101100111001100101110",
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
  ]
};

function colorizeASCII(lines) {
  return lines.map((line, index) => {
    if (index === 0 || index === lines.length - 1) {
      return `<span style="color:#ff0000">${line}</span>`;
    } else if (index === Math.floor(lines.length / 2)) {
      return `<span style="color:#ffffff">${line}</span>`;
    } else {
      return `<span style="color:#666666">${line}</span>`;
    }
  }).join('\n');
}

function generateCustomASCII(text, style) {
  const chars = {
    'runes': ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚻ', 'ᚾ', 'ᛁ', 'ᛉ', 'ᛊ', 'ᛏ', 'ᛒ', 'ᛖ', 'ᛗ', 'ᛚ', 'ᛝ', 'ᛟ', 'ᛞ'],
    'block': ['█', '▓', '▒', '░', ' ', '▄', '▀', '■', '□', '▪', '▫'],
    'simple': ['#', '*', '+', '.', ' ', '=', '-', '~', ':', ';', ','],
    'matrix': ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ヲ', 'ン'],
    'witch': ['☾', '✧', '☽', '☆', '✵', '✶', '✷', '✸', '✹', '✺', '✦', '✧', '★', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '✽', '✾', '✿', '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊', '❋']
  };
  
  const charSet = chars[style] || chars.block;
  const result = [];
  const textUpper = text.toUpperCase();
  
  const border = charSet[0].repeat(40);
  result.push(border);
  result.push(charSet[0] + ' '.repeat(38) + charSet[0]);
  
  const padding = Math.floor((38 - textUpper.length * 2) / 2);
  const centeredText = charSet[0] + ' '.repeat(padding) + 
                      textUpper.split('').join(' ') + 
                      ' '.repeat(38 - padding - textUpper.length * 2) + charSet[0];
  result.push(centeredText);
  result.push(charSet[0] + ' '.repeat(38) + charSet[0]);
  
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
          const randIdx = Math.floor(Math.random() * charSet.length);
          line += charSet[randIdx];
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
  const input = document.getElementById('ascii-input');
  const styleSelect = document.getElementById('ascii-style');
  const container = document.getElementById('ascii-container');
  
  if (!input || !styleSelect || !container) return;
  
  const text = input.value.trim().toUpperCase() || 'INK';
  const style = styleSelect.value;
  
  let asciiLines;
  if (asciiArt[text]) {
    asciiLines = asciiArt[text];
  } else {
    asciiLines = generateCustomASCII(text, style);
  }
  
  const timestamp = new Date().toLocaleTimeString();
  const header = 
    `<span style="color:#ff0000">╔══════════════════════════════════════╗</span>\n` +
    `<span style="color:#ffffff">║ ASCII: ${text.padEnd(10)} ${timestamp} ║</span>\n` +
    `<span style="color:#ff0000">╚══════════════════════════════════════╝</span>\n\n`;
  
  const coloredAscii = colorizeASCII(asciiLines);
  container.innerHTML = header + coloredAscii;
  container.scrollTop = 0;
}

function clearChat() {
  const container = document.getElementById('ascii-container');
  const input = document.getElementById('ascii-input');
  if (container) {
    container.textContent = 
      "╔══════════════════════════════════════════╗\n" +
      "║ ASCII ART GENERATOR v1.2                ║\n" +
      "║ Type text and select style above        ║\n" +
      "╚══════════════════════════════════════════╝\n\n" +
      "Ready for input...";
  }
  if (input) input.value = '';
}

function exportASCII() {
  const container = document.getElementById('ascii-container');
  if (!container) return;
  
  const asciiContent = container.textContent;
  const textBlob = new Blob([asciiContent], { type: 'text/plain' });
  const textUrl = URL.createObjectURL(textBlob);
  const textLink = document.createElement('a');
  textLink.href = textUrl;
  textLink.download = `ascii-art-${Date.now()}.txt`;
  textLink.click();
  URL.revokeObjectURL(textUrl);
}

// ================================================================
// 8. DEEP-LINK ANCHOR UTILITY
// ================================================================
function handleAnchorOpen(hash) {
  if (!hash) return;
  const target = document.querySelector(hash);
  if (target) {
    const details = target.tagName === 'DETAILS' ? target : target.closest('details');
    if (details) {
      if (!details.open) {
        details.open = true;
      }
      setTimeout(() => {
        if (window.lenis) {
          window.lenis.resize();
          window.lenis.scrollTo(details, { offset: -100, duration: 1.4 });
        }
      }, 60);
    }
  }
}

// ================================================================
// 9. FOOTER MESSAGE ROTATOR
// ================================================================
(function() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooterRotator);
  } else {
    initFooterRotator();
  }

  function initFooterRotator() {
    const systemMessages = [
      "◈ VOID_STAR_V5 ◈ INKREALM_NEXUS ◈ ACTIVE ◈",
      "◈ LIVE_SYSTEM ◈ LOAD: 43% ◈ UPTIME: 316H ◈",
      "◈ HERMES_AI ◈ NEMOTRON-9B ◈ INFERENCE: LOCAL ◈",
      "◈ SIGNAL_FORGE ◈ AUDIO_BITRATE: 320KBPS ◈ CHORDS: LOCKED ◈",
      "◈ SECHENOV_LOG ◈ INDEX: 1698957816 ◈ SYNC: 100% ◈"
    ];

    const statusMessages = [
      "▲ REQUIEM_STORY: COMPILED ▲",
      "▲ ENCRYPTION: ACTIVE ▲",
      "▲ HOLLYWOODLAND_PROTOCOL: ENGAGED ▲",
      "▲ ART_BOUND: VISUALS SYNCHRONIZED ▲",
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
      if (rotationInterval) clearInterval(rotationInterval);
      rotateMessages();
      rotationInterval = setInterval(rotateMessages, 5000);
    }

    window.footerRotator = {
      start: startRotation,
      stop: function() { if (rotationInterval) { clearInterval(rotationInterval); rotationInterval = null; } },
      rotate: rotateMessages
    };

    startRotation();
  }
})();

// ================================================================
// 10. DOMContentLoaded INIT
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
  initCustomSelects();
  generateASCII();
  
  const input = document.getElementById('ascii-input');
  const styleSelect = document.getElementById('ascii-style');
  if (input) input.addEventListener('input', generateASCII);
  if (styleSelect) styleSelect.addEventListener('change', generateASCII);
  
  if (window.location.hash) {
    handleAnchorOpen(window.location.hash);
  }
});

// ================================================================
// 11. HASH CHANGE & CLICK LISTENERS
// ================================================================
window.addEventListener('hashchange', () => {
  handleAnchorOpen(window.location.hash);
});

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (link) {
    handleAnchorOpen(link.getAttribute('href'));
  }
});

// ================================================================
// 12. NEON POINTER TRAIL + TEXT SCRAMBLE + DRAGGABLE MARQUEE
// ================================================================
// ================================================================
// 12. NEON POINTER TRAIL + CIPHER DECRYPTION + MULTI-MARQUEE DRAG
// ================================================================
(function() {
  // 1. NEON POINTER TRAIL
  const canvas = document.getElementById('trailCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let W, H;
    const pts = [];
    const LIFE = 650;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;

    function resize() {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    if (!isCoarse) {
      document.addEventListener('pointermove', (e) => {
        pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      });
    }

    function drawTrail() {
      requestAnimationFrame(drawTrail);
      if (isCoarse) return;
      const now = performance.now();
      while (pts.length && now - pts[0].t > LIFE) pts.shift();
      ctx.clearRect(0, 0, W, H);
      if (pts.length < 2) return;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      for (let i = 1; i < pts.length; i++) {
        const a = 1 - (now - pts[i].t) / LIFE;
        ctx.strokeStyle = `rgba(255, 0, 0, ${Math.min(1, a * 1.4).toFixed(3)})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
        ctx.lineTo(pts[i].x, pts[i].y);
        ctx.stroke();
      }
    }
    drawTrail();
  }

  // 2. CIPHER DECRYPTION MATRIX (WORD WALL)
  const CIPHER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=<>{}[]/\\";
  
  document.querySelectorAll('.ink-wall-item').forEach((el) => {
    // Read data-term if provided, or clean up existing inner text
    const target = el.getAttribute('data-term') || el.textContent.replace('//', '').trim();
    let interval = null;

    function decrypt() {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        const currentScramble = target.split("").map((char, index) => {
          if (index < iteration) {
            return target[index];
          }
          return CIPHER_CHARS[Math.floor(Math.random() * CIPHER_CHARS.length)];
        }).join("");

        el.innerHTML = `<span style="color:#ff0000;">//</span> ${currentScramble}`;

        if (iteration >= target.length) {
          clearInterval(interval);
          interval = null;
        }
        iteration += 1 / 2; // Decryption resolution speed
      }, 25);
    }

    el.addEventListener('mouseenter', decrypt);
    el.addEventListener('touchstart', (e) => { decrypt(); }, { passive: true });
  });

  // 3. ALL DRAGGABLE MARQUEE TRACKS
  document.querySelectorAll('.ink-marquee-track').forEach((track) => {
    let isDragging = false;
    let startX = 0;
    let startDelay = 0;

    track.addEventListener('pointerdown', function(e) {
      isDragging = true;
      startX = e.clientX;
      startDelay = parseFloat(getComputedStyle(this).animationDelay) || 0;
      this.style.animationPlayState = 'paused';
      this.setPointerCapture(e.pointerId);
    });

    track.addEventListener('pointermove', function(e) {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const period = 26; // match CSS marquee duration
      this.style.animationDelay = (startDelay + (dx / (this.scrollWidth / 2)) * period).toFixed(2) + 's';
    });

    const stopDrag = function(e) {
      if (!isDragging) return;
      isDragging = false;
      track.style.animationPlayState = 'running';
      try { track.releasePointerCapture(e.pointerId); } catch(err) {}
    };

    track.addEventListener('pointerup', stopDrag);
    track.addEventListener('pointercancel', stopDrag);
  });
})();

// ================================================================
// 13. WORDSTAR NEWS ACCORDION + VAULT LIGHTBOX
// ================================================================
document.addEventListener('DOMContentLoaded', function() {
  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function(item) {
    const btn = item.querySelector('.faq-q');
    if (btn) {
      btn.addEventListener('click', function() {
        const isOpen = item.classList.toggle('open');
        btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        const span = btn.querySelector('span');
        if (span) span.textContent = isOpen ? '[-]' : '[+]';
        if (window.lenis) setTimeout(() => lenis.resize(), 420);
      });
    }
  });

  // Vault modal
  const modal = document.getElementById('imageModal');
  const modalImg = document.getElementById('modalImg');
  const modalVideo = document.getElementById('modalVideo');
  const modalKicker = document.getElementById('modalKicker');
  const modalTitle = document.getElementById('modalTitle');
  const modalDesc = document.getElementById('modalDesc');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (!modal) return;

  function openVaultModal(card) {
    const type = card.getAttribute('data-type') || 'image';
    const kicker = card.getAttribute('data-kicker') || '// VAULT INSPECTION';
    const desc = card.getAttribute('data-desc') || '';
    const videoSrc = card.getAttribute('data-video-src');
    const imgSrc = card.getAttribute('data-full-src');

    if (!videoSrc && !imgSrc) return;

    if (modalKicker) modalKicker.textContent = kicker;
    if (modalTitle) modalTitle.textContent = kicker;
    if (modalDesc) modalDesc.textContent = desc;

    if (type === 'video' && videoSrc) {
      if (modalImg) { modalImg.style.display = 'none'; modalImg.src = ''; }
      if (modalVideo) {
        modalVideo.style.display = 'block';
        modalVideo.src = videoSrc;
        modalVideo.play().catch(() => {});
      }
    } else if (imgSrc) {
      if (modalVideo) { modalVideo.style.display = 'none'; modalVideo.pause(); modalVideo.src = ''; }
      if (modalImg) { modalImg.style.display = 'block'; modalImg.src = imgSrc; }
    }

    modal.classList.add('open');
    if (window.lenis) lenis.stop();
  }

  function closeVaultModal() {
    modal.classList.remove('open');
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.src = '';
      modalVideo.style.display = 'none';
    }
    if (modalImg) {
      modalImg.src = '';
      modalImg.style.display = 'none';
    }
    if (window.lenis) lenis.start();
  }

  document.querySelectorAll('.signal-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      openVaultModal(card);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeVaultModal);
  modal.addEventListener('click', (e) => { if (e.target === modal) closeVaultModal(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeVaultModal();
  });
});
