/* =========================================================
   616.JS - WORDSTAR NEXUS MASTER JAVASCRIPT
   ========================================================= */

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

// 3. Simple Screenplay TTS Reader
function toggleTTS(element) {
  if (!('speechSynthesis' in window)) return;
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    return;
  }
  const text = element.innerText || element.textContent;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.95;
  utterance.pitch = 0.9;
  window.speechSynthesis.speak(utterance);
}

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
    title: "Fashion (Bowie Cover)",
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
    desc: "Tom Waits Live Crossroads Grit Stomp 2025. Unpolished stomp box & raw room mic acoustics.",
    src: "https://raw.githubusercontent.com/ghostm68/99/main/twoskinnygirlslivegetbehindthemule2025.mp3",
    feed: "GET BEHIND THE MULE (LIVE)"
  },
  {
    tag: "COVER // 04. DEAD / STONES",
    title: "Cocaine Master",
    desc: "From Casey Jones to Can't You Hear Me Knocking. Heavy room reverb outtake.",
    src: "COCAINE MASTER.mp3",
    feed: "COCAINE MASTER (DEMO)"
  }
];

let currentCoverIdx = 0;

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
    if (wasPlaying) {
      if (vizAudioCtx && vizAudioCtx.state === 'suspended') vizAudioCtx.resume();
      audio.play().catch(e => console.log(e));
      const btn = document.getElementById('play-cover-btn');
      if (btn) btn.textContent = '⏸ PAUSE';
    }
  }
}

function togglePlayActiveCover() {
  const audio = document.getElementById('viz-audio');
  const btn = document.getElementById('play-cover-btn');
  if (!audio) return;

  initAudioViz();
  if (vizAudioCtx && vizAudioCtx.state === 'suspended') {
    vizAudioCtx.resume();
  }

  if (audio.paused) {
    audio.play().then(() => {
      if (btn) btn.textContent = '⏸ PAUSE';
    }).catch(err => console.log("Cover playback error:", err));
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

// 6. Real-Time Audio Spectrum Visualizer
let vizAudioCtx, analyser, source, dataArray;

function initAudioViz() {
  const audio = document.getElementById('viz-audio');
  const canvas = document.getElementById('sigil-canvas');
  if (!audio || !canvas || vizAudioCtx) return;

  vizAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  analyser = vizAudioCtx.createAnalyser();
  source = vizAudioCtx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(vizAudioCtx.destination);

  analyser.fftSize = 256;
  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  drawLiveViz();
}

function drawLiveViz() {
  const canvas = document.getElementById('sigil-canvas');
  if (!canvas || !analyser) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  requestAnimationFrame(drawLiveViz);
  analyser.getByteFrequencyData(dataArray);

  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, width, height);

  // Red Spectrum Frequency Bars
  const barWidth = (width / dataArray.length) * 2.5;
  let barHeight;
  let x = 0;

  for (let i = 0; i < dataArray.length; i++) {
    barHeight = dataArray[i] / 2;
    const gradient = ctx.createLinearGradient(0, height - barHeight, 0, height);
    gradient.addColorStop(0, '#ff0000');
    gradient.addColorStop(0.7, '#ff4444');
    gradient.addColorStop(1, '#ff8888');

    ctx.fillStyle = gradient;
    ctx.fillRect(x, height - barHeight, barWidth, barHeight);
    x += barWidth + 1;
  }

  // Center Oscilloscope Waveform Line
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  const sliceWidth = (width * 1.0) / dataArray.length;
  let wx = 0;

  for (let i = 0; i < dataArray.length; i++) {
    const v = dataArray[i] / 128.0;
    const y = (v * height) / 2;
    if (i === 0) ctx.moveTo(wx, y);
    else ctx.lineTo(wx, y);
    wx += sliceWidth;
  }
  ctx.lineTo(width, height / 2);
  ctx.stroke();

  // Pulsing Beat Center Core
  const centerSize = 8 + dataArray[10] / 12;
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, centerSize, 0, Math.PI * 2);
  ctx.fillStyle = `rgba(255, 0, 51, ${0.3 + dataArray[5] / 350})`;
  ctx.fill();
}

function initStaticViz() {
  const canvas = document.getElementById('sigil-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, width, height);

  ctx.strokeStyle = '#330000';
  ctx.lineWidth = 1;
  for (let i = 0; i < 30; i++) {
    ctx.beginPath();
    ctx.moveTo(Math.random() * width, Math.random() * height);
    ctx.lineTo(Math.random() * width, Math.random() * height);
    ctx.stroke();
  }

  ctx.fillStyle = '#666';
  ctx.font = '10px "VT323", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('CLICK TO PLAY AUDIO', width / 2, height / 2);
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

// 8. Master Bootstrap (Runs Once on Page Load)
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
  initStaticViz();
  initFooterRotator();

  // Mobile Video Autoplay Engine
  const startVideos = () => {
    document.querySelectorAll("video").forEach(v => {
      v.muted = true;
      v.setAttribute("playsinline", "");
      v.setAttribute("webkit-playsinline", "");
      v.play().catch(() => {});
    });
  };
  startVideos();
  document.body.addEventListener('touchstart', startVideos, { once: true });
  document.body.addEventListener('click', startVideos, { once: true });

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
