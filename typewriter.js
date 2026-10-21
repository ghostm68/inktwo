const { jsPDF } = window.jspdf;

const editor = document.getElementById('editor');
const marquee = document.getElementById('marquee');
const marqueeWrap = document.getElementById('marquee-wrap');
const videoSelect = document.getElementById('video-select');
const customVideo = document.getElementById('custom-video');
const videoLayer = document.getElementById('video-layer');
const fontSelect = document.getElementById('font-select');
const themeSelect = document.getElementById('theme-select');
const wordsEl = document.getElementById('words');
const charsEl = document.getElementById('chars');
const linesEl = document.getElementById('lines');
const readyEl = document.getElementById('ready');
const sheetNameEl = document.getElementById('sheet-name');
const deckSheetTag = document.getElementById('deck-sheet-tag');
const cursorWrap = document.getElementById('cursor-wrap');
const cursor = document.getElementById('cursor');
const workspace = document.getElementById('workspace');
const sidePanel = document.getElementById('side-panel');
const lampProc = document.getElementById('lamp-proc');
const lampIO = document.getElementById('lamp-io');
const lampWait = document.getElementById('lamp-wait');
const crtSysStatus = document.getElementById('crt-sys-status');

let currentImageData = null;
let imgAlign = 'center';
let imgShape = 'rect';
let currentImgWidth = 180;
let soundOn = false;
let marqueeOn = true;
let audioCtx = null;
let masterGain = 0.4;
let undoStack = [];
let idleTimer = null;
let currentSheetId = 'sheet-1';
let sheets = {};
let cadenceTimer = null;

const LIVE_IDS = new Set(['DB7oO82OeD4', '8TDmgVs6HZE', '7Ux4GeY5MXQ']);

// Laser Pointer Trail Engine
const trailCanvas = document.getElementById('trailCanvas');
const trailCtx = trailCanvas.getContext('2d');
let trailPoints = [];

function resizeTrailCanvas() {
  trailCanvas.width = window.innerWidth;
  trailCanvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeTrailCanvas);
resizeTrailCanvas();

let mouseX = -100, mouseY = -100, curX = -100, curY = -100;

function renderLaserTrail() {
  curX += (mouseX - curX) * 0.35;
  curY += (mouseY - curY) * 0.35;
  cursorWrap.style.transform = `translate3d(${curX}px,${curY}px,0)`;

  trailCtx.clearRect(0, 0, trailCanvas.width, trailCanvas.height);
  if (trailPoints.length > 1) {
    const themeColor = getComputedStyle(document.body).getPropertyValue('--red').trim() || '#ff2a2a';
    trailCtx.strokeStyle = themeColor;
    trailCtx.lineWidth = 1.5;
    trailCtx.shadowColor = themeColor;
    trailCtx.shadowBlur = 6;
    trailCtx.beginPath();
    for (let i = 0; i < trailPoints.length; i++) {
      const p = trailPoints[i];
      p.age++;
      if (i === 0) trailCtx.moveTo(p.x, p.y);
      else trailCtx.lineTo(p.x, p.y);
    }
    trailCtx.stroke();
  }
  trailPoints = trailPoints.filter(p => p.age < 12);
  requestAnimationFrame(renderLaserTrail);
}
renderLaserTrail();

window.addEventListener('mousemove', e => {
  mouseX = e.clientX; mouseY = e.clientY;
  trailPoints.push({ x: e.clientX, y: e.clientY, age: 0 });
  const over = !!e.target.closest('#editor, .crt-frame');
  const inter = e.target.closest('button, select, a, input, .seg, .knob-dial, .tactile-btn, .storage-box, .capsule-pill');
  if (over) {
    document.body.classList.add('typing');
    cursor.classList.remove('hovering');
  } else {
    document.body.classList.remove('typing');
    cursor.classList.toggle('hovering', !!inter);
  }
});

// Sound Synthesizer
function initAudio() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();
}
window.addEventListener('touchstart', () => { if (soundOn) initAudio(); }, { passive: true, once: true });
window.addEventListener('pointerdown', () => { if (soundOn) initAudio(); }, { passive: true, once: true });

function playTone(f1, f2, type, dur, mul = 1) {
  if (!soundOn) return;
  initAudio();
  if (!audioCtx || audioCtx.state === 'suspended') return;
  const now = audioCtx.currentTime, osc = audioCtx.createOscillator(), g = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(f1, now);
  if (f2) osc.frequency.exponentialRampToValueAtTime(f2, now + dur * 0.85);
  const vol = masterGain * mul;
  g.gain.setValueAtTime(vol, now);
  g.gain.exponentialRampToValueAtTime(0.001, now + dur);
  osc.connect(g);
  g.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + dur + 0.01);
}

function playClick() { playTone(820 + Math.random() * 140, 95, 'triangle', 0.024, 0.55); }
function playSpace() { playTone(160 + Math.random() * 30, 80, 'sine', 0.038, 0.35); }
function playReturn() { playTone(130, 50, 'square', 0.065, 0.45); }
function playBackspace() { playTone(380, 160, 'sawtooth', 0.032, 0.4); }
function playKnobTick() { playTone(1500 + Math.random() * 200, null, 'square', 0.010, 0.18); }

// Theme & Capsule Controller
function applyTheme(cls) {
  ['theme-invert', 'theme-green', 'theme-amber', 'theme-blue', 'theme-mono'].forEach(c => document.body.classList.remove(c));
  if (cls) document.body.classList.add(cls);
  themeSelect.value = cls || '';
  
  // Sync Theme Capsules
  document.querySelectorAll('#theme-capsules .capsule-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.val === (cls || ''));
  });
  localStorage.setItem('hybrid_theme', cls || '');
}

themeSelect.addEventListener('change', () => applyTheme(themeSelect.value));
document.getElementById('theme-capsules').addEventListener('click', e => {
  const pill = e.target.closest('.capsule-pill');
  if (pill) applyTheme(pill.dataset.val);
});

const savedTheme = localStorage.getItem('hybrid_theme');
if (savedTheme !== null) { applyTheme(savedTheme); }

// Font & Capsule Controller
function applyFont(family) {
  editor.style.fontFamily = family;
  fontSelect.value = family;
  document.querySelectorAll('#font-capsules .capsule-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.val === family);
  });
  localStorage.setItem('hybrid_font', family);
}

fontSelect.addEventListener('change', () => applyFont(fontSelect.value));
document.getElementById('font-capsules').addEventListener('click', e => {
  const pill = e.target.closest('.capsule-pill');
  if (pill) applyFont(pill.dataset.val);
});

const savedFont = localStorage.getItem('hybrid_font');
if (savedFont) { applyFont(savedFont); }
else { applyFont(fontSelect.value); }

// Knob Controller with Wheel & Drag
function setupKnobVisual(dial, readoutId, unit, val) {
  const min = +dial.dataset.min, max = +dial.dataset.max, step = +dial.dataset.step || 1;
  const frac = (val - min) / (max - min);
  dial.style.transform = `rotate(${-135 + frac * 270}deg)`;
  document.getElementById(readoutId).textContent = (step < 1 ? val.toFixed(2) : Math.round(val)) + unit;
  dial.setAttribute('aria-valuenow', val);
}

function setupKnob(id, readoutId, unit, onChange) {
  const dial = document.getElementById(id);
  const min = +dial.dataset.min, max = +dial.dataset.max, step = +dial.dataset.step || 1;
  let val = +dial.dataset.val;

  function apply(tick = false) {
    setupKnobVisual(dial, readoutId, unit, val);
    if (tick) playKnobTick();
    onChange(val);
  }

  let startY = 0, startVal = 0, drag = false;
  dial.addEventListener('pointerdown', e => {
    drag = true; startY = e.clientY; startVal = val;
    dial.classList.add('active'); dial.setPointerCapture(e.pointerId);
  });
  dial.addEventListener('pointermove', e => {
    if (!drag) return;
    let raw = startVal + ((startY - e.clientY) / 140) * (max - min);
    let c = Math.min(max, Math.max(min, Math.round(raw / step) * step));
    if (c !== val) { val = c; dial.dataset.val = val; apply(true); }
  });
  const stop = () => { drag = false; dial.classList.remove('active'); };
  dial.addEventListener('pointerup', stop);
  dial.addEventListener('pointercancel', stop);

  dial.addEventListener('wheel', e => {
    e.preventDefault();
    const d = e.deltaY < 0 ? step : -step;
    val = Math.min(max, Math.max(min, val + d));
    dial.dataset.val = val;
    apply(true);
  }, { passive: false });

  dial.addEventListener('keydown', e => {
    let d = 0;
    if (e.key === 'ArrowUp' || e.key === ']') d = step;
    if (e.key === 'ArrowDown' || e.key === '[') d = -step;
    if (e.key === 'Home') { val = min; dial.dataset.val = val; apply(true); e.preventDefault(); return; }
    if (e.key === 'End') { val = max; dial.dataset.val = val; apply(true); e.preventDefault(); return; }
    if (d) { val = Math.min(max, Math.max(min, val + d)); dial.dataset.val = val; apply(true); e.preventDefault(); }
  });

  apply(false);
}

setupKnob('knob-zoom', 'readout-zoom', '%', v => editor.style.fontSize = `${(v / 100) * 1.15}rem`);
setupKnob('knob-pitch', 'readout-pitch', 'X', v => editor.style.lineHeight = v);
setupKnob('knob-img', 'readout-img', 'PX', v => {
  currentImgWidth = Math.round(v);
  editor.querySelectorAll('img.inline-img').forEach(img => img.style.width = currentImgWidth + 'px');
});
setupKnob('knob-vidgain', 'readout-vidgain', '%', v => document.documentElement.style.setProperty('--video-opacity', v / 100));
setupKnob('knob-vol', 'readout-vol', '%', v => masterGain = v / 100);
setupKnob('knob-marq', 'readout-marq', 'S', v => document.documentElement.style.setProperty('--marquee-speed', v + 's'));

// Video Multiplexer
function extractId(val) {
  if (!val) return '';
  const m = val.trim().match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|shorts\/|live\/)|[?&]v=)([\w-]{11})/);
  if (m) return m[1];
  const c = val.trim();
  return /^[a-zA-Z0-9_-]{11}$/.test(c) ? c : '';
}

function setVideo(id) {
  if (!id || id === 'none') { videoLayer.innerHTML = ''; return; }
  const live = LIVE_IDS.has(id);
  const params = live
    ? 'autoplay=1&mute=1&controls=0&playsinline=1&modestbranding=1'
    : `autoplay=1&mute=1&controls=0&loop=1&playlist=${id}&playsinline=1&modestbranding=1`;
  videoLayer.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?${params}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  localStorage.setItem('hybrid_last_video', id);
}

videoSelect.addEventListener('change', () => {
  const v = videoSelect.value;
  customVideo.style.display = v === 'custom' ? 'inline-block' : 'none';
  if (v !== 'custom') setVideo(v);
});
customVideo.addEventListener('change', () => { const id = extractId(customVideo.value); if (id) { setVideo(id); localStorage.setItem('hybrid_custom_id', id); } });
customVideo.addEventListener('keydown', e => { if (e.key === 'Enter') { const id = extractId(customVideo.value); if (id) setVideo(id); } });

const lastVid = localStorage.getItem('hybrid_last_video');
if (lastVid) {
  if ([...videoSelect.options].some(o => o.value === lastVid)) videoSelect.value = lastVid;
  else { videoSelect.value = 'custom'; customVideo.style.display = 'inline-block'; customVideo.value = lastVid; }
  setVideo(lastVid);
} else setVideo(videoSelect.value);

// Optical Bay / Image Insertion
document.getElementById('img-upload').onclick = () => document.getElementById('img-input').click();
document.getElementById('img-input').onchange = e => {
  const f = e.target.files[0];
  if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    currentImageData = r.result;
    const t = document.getElementById('img-thumb');
    t.src = currentImageData;
    t.style.display = 'inline-block';
  };
  r.readAsDataURL(f);
};

document.getElementById('align-seg').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  imgAlign = b.dataset.val;
  document.querySelectorAll('#align-seg button').forEach(x => x.classList.toggle('active', x === b));
});

document.getElementById('shape-seg').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  imgShape = b.dataset.val;
  document.querySelectorAll('#shape-seg button').forEach(x => x.classList.toggle('active', x === b));
});

document.getElementById('img-insert').onclick = () => {
  if (!currentImageData) { alert('Load an image into the optical bay first.'); return; }
  const img = document.createElement('img');
  img.src = currentImageData;
  img.className = `inline-img ${imgShape} align-${imgAlign}`;
  img.style.width = currentImgWidth + 'px';
  img.dataset.align = imgAlign;
  img.dataset.shape = imgShape;
  img.dataset.width = currentImgWidth;
  img.alt = '';

  const sel = window.getSelection();
  if (sel.rangeCount) {
    const range = sel.getRangeAt(0);
    range.deleteContents();
    range.insertNode(img);
    range.setStartAfter(img);
    range.collapse(true);
    sel.removeAllRanges();
    sel.addRange(range);
  } else {
    editor.appendChild(img);
  }
  editor.focus();
  updateStatus(); scheduleMarquee(); scheduleCadence(); saveCurrentSheet(); pushUndo(true);
};

// Marquee Engine
let marqueeTimer = null;
function updateMarquee() {
  if (!marqueeOn) return;
  const text = editor.innerText.trim();
  if (!text) { marquee.innerHTML = '<span>— BUFFER EMPTY // CH_00 IDLE —</span><span>— BUFFER EMPTY // CH_00 IDLE —</span>'; return; }
  const words = text.split(/\s+/).filter(Boolean).slice(-36);
  const rev = words.reverse().join('  //  ');
  marquee.innerHTML = `<span>${rev}     ${rev}</span><span>${rev}     ${rev}</span>`;
}
function scheduleMarquee() { clearTimeout(marqueeTimer); marqueeTimer = setTimeout(updateMarquee, 180); }

document.getElementById('marquee-toggle').onclick = () => {
  marqueeOn = !marqueeOn;
  marqueeWrap.classList.toggle('hidden', !marqueeOn);
  document.getElementById('marquee-toggle').classList.toggle('active', marqueeOn);
  if (marqueeOn) updateMarquee();
};

// Pushbutton Toggles
document.getElementById('sound-toggle').onclick = () => {
  soundOn = !soundOn;
  document.getElementById('sound-toggle').classList.toggle('active', soundOn);
  if (soundOn) initAudio();
};

document.getElementById('btn-scan').onclick = () => {
  document.body.classList.toggle('scanlines');
  document.getElementById('btn-scan').classList.toggle('active', document.body.classList.contains('scanlines'));
};

document.getElementById('btn-zen').onclick = () => {
  document.body.classList.toggle('zen');
  document.getElementById('btn-zen').classList.toggle('active', document.body.classList.contains('zen'));
};

document.getElementById('btn-panel').onclick = () => {
  workspace.classList.toggle('panel-open');
  document.getElementById('btn-panel').classList.toggle('active', workspace.classList.contains('panel-open'));
};

document.getElementById('btn-mobile-panel').onclick = () => {
  sidePanel.classList.toggle('mobile-open');
};

// Panel Tabs
document.querySelectorAll('.panel-tabs button').forEach(btn => {
  btn.onclick = () => {
    document.querySelectorAll('.panel-tabs button').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.panel-section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('sec-' + btn.dataset.tab).classList.add('active');
  };
});

// Telemetry & Diagnostic Status
function pad(n, len = 4) {
  let s = String(n);
  while (s.length < len) s = '0' + s;
  return s;
}

function updateStatus() {
  const t = editor.innerText;
  const w = t.trim() ? t.trim().split(/\s+/).length : 0;
  wordsEl.textContent = pad(w, 4);
  charsEl.textContent = pad(t.length, 4);
  linesEl.textContent = pad(t.split('\n').length, 3);

  lampProc.classList.add('active');
  lampIO.classList.add('lit');
  lampWait.classList.remove('lit');
  readyEl.textContent = 'BUSY';
  readyEl.classList.remove('idle');
  crtSysStatus.textContent = 'CH_TX';

  clearTimeout(idleTimer);
  idleTimer = setTimeout(() => {
    lampProc.classList.remove('active');
    lampIO.classList.remove('lit');
    lampWait.classList.add('lit');
    readyEl.textContent = 'WAIT';
    readyEl.classList.add('idle');
    crtSysStatus.textContent = 'STANDBY';
  }, 2500);
}

function analyzeCadence() {
  const text = editor.innerText.trim();
  const words = text ? text.split(/\s+/).filter(Boolean) : [];
  const sents = text ? text.split(/[.!?]+/).map(s => s.trim()).filter(Boolean) : [];
  const wordCount = words.length;
  const sentCount = sents.length || 1;
  const avg = sentCount ? (wordCount / sentCount).toFixed(1) : 0;
  const readMin = Math.max(1, Math.round(wordCount / 200));

  document.getElementById('c-words').textContent = wordCount;
  document.getElementById('c-sents').textContent = sents.length;
  document.getElementById('c-avg').textContent = avg;
  document.getElementById('c-read').textContent = readMin + 'm';

  const unique = new Set(words.map(w => w.toLowerCase().replace(/[^a-z']/g, ''))).size;
  const div = wordCount ? Math.round((unique / wordCount) * 100) : 100;
  document.getElementById('stat-diversity').textContent = `DIV ${div}%`;

  const freq = {};
  words.forEach(w => {
    const k = w.toLowerCase().replace(/[^a-z']/g, '');
    if (k.length < 4) return;
    freq[k] = (freq[k] || 0) + 1;
  });
  const echoes = Object.entries(freq).filter(([, c]) => c >= 3).sort((a, b) => b[1] - a[1]).slice(0, 12);
  const box = document.getElementById('echo-box');
  if (!echoes.length) box.innerHTML = '<span style="color:var(--text-dim)">— clean transmission —</span>';
  else box.innerHTML = echoes.map(([w, c]) => `<span class="echo-badge" data-w="${w}">${w} ×${c}</span>`).join('');

  const canvas = document.getElementById('cadenceCanvas');
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const w = canvas.clientWidth, h = canvas.clientHeight;
  canvas.width = w * dpr; canvas.height = h * dpr; ctx.scale(dpr, dpr);
  ctx.clearRect(0, 0, w, h);
  if (!sents.length) return;

  const lengths = sents.map(s => s.split(/\s+/).filter(Boolean).length);
  const maxL = Math.max(...lengths, 8);
  const barW = Math.max(3, (w - 4) / lengths.length);
  lengths.forEach((len, i) => {
    const bh = (len / maxL) * (h - 6);
    const x = 2 + i * barW;
    const y = h - 2 - bh;
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue('--red').trim() || '#ff2a2a';
    ctx.globalAlpha = 0.85;
    ctx.fillRect(x, y, Math.max(2, barW - 1.5), bh);
  });
  ctx.globalAlpha = 1;
}

function scheduleCadence() { clearTimeout(cadenceTimer); cadenceTimer = setTimeout(analyzeCadence, 280); }

// Lexicon Engine
async function runLexicon(q) {
  q = (q || '').trim().toLowerCase();
  if (!q) return;
  const defsEl = document.getElementById('lex-defs');
  const synsEl = document.getElementById('lex-syns');
  const rhymesEl = document.getElementById('lex-rhymes');
  defsEl.innerHTML = '<span style="color:var(--text-dim)">QUERYING SYSTEM DICTIONARY...</span>';
  synsEl.innerHTML = ''; rhymesEl.innerHTML = '';

  try {
    const r1 = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(q)}`);
    if (r1.ok) {
      const data = await r1.json();
      const entry = data[0];
      let html = '';
      (entry.meanings || []).slice(0, 3).forEach(m => {
        html += `<div class="def-entry"><strong>${m.partOfSpeech}</strong> — ${(m.definitions[0] || {}).definition || ''}</div>`;
      });
      defsEl.innerHTML = html || '<span style="color:var(--text-dim)">NO RECORD.</span>';
      const syns = new Set();
      (entry.meanings || []).forEach(m => (m.synonyms || []).forEach(s => syns.add(s)));
      synsEl.innerHTML = [...syns].slice(0, 16).map(s => `<span class="word-tag" data-w="${s}">${s}</span>`).join('') || '<span style="color:var(--text-dim)">—</span>';
    } else {
      defsEl.innerHTML = '<span style="color:var(--text-dim)">NO ENTRY IN DATASET.</span>';
    }
  } catch {
    defsEl.innerHTML = '<span style="color:var(--text-dim)">OFFLINE // NO RESPONSE.</span>';
  }

  try {
    const r2 = await fetch(`https://api.datamuse.com/words?rel_rhy=${encodeURIComponent(q)}&max=18`);
    if (r2.ok) {
      const rh = await r2.json();
      rhymesEl.innerHTML = rh.map(x => `<span class="word-tag" data-w="${x.word}">${x.word}</span>`).join('') || '<span style="color:var(--text-dim)">—</span>';
    }
  } catch {}
}

document.getElementById('lex-go').onclick = () => runLexicon(document.getElementById('lex-query').value);
document.getElementById('lex-query').addEventListener('keydown', e => { if (e.key === 'Enter') runLexicon(e.target.value); });
document.getElementById('lex-syns').addEventListener('click', e => {
  const t = e.target.closest('.word-tag');
  if (t) { document.getElementById('lex-query').value = t.dataset.w; runLexicon(t.dataset.w); }
});
document.getElementById('lex-rhymes').addEventListener('click', e => {
  const t = e.target.closest('.word-tag');
  if (t) { document.getElementById('lex-query').value = t.dataset.w; runLexicon(t.dataset.w); }
});
document.getElementById('echo-box').addEventListener('click', e => {
  const b = e.target.closest('.echo-badge');
  if (!b) return;
  const w = b.dataset.w;
  document.getElementById('lex-query').value = w;
  runLexicon(w);
  workspace.classList.add('panel-open');
  document.querySelectorAll('.panel-tabs button').forEach(x => x.classList.toggle('active', x.dataset.tab === 'lexicon'));
  document.querySelectorAll('.panel-section').forEach(s => s.classList.toggle('active', s.id === 'sec-lexicon'));
});

// Serialization
function serializeEditor() {
  const clone = editor.cloneNode(true);
  clone.querySelectorAll('img.inline-img').forEach(img => {
    const marker = document.createTextNode(`{{IMG:${img.dataset.align || 'center'}:${img.dataset.shape || 'rect'}:${img.dataset.width || 180}:${img.src}}}`);
    img.parentNode.replaceChild(marker, img);
  });
  return clone.innerText;
}

function deserializeToEditor(raw) {
  editor.innerHTML = '';
  if (!raw) return;
  const parts = raw.split(/(\{\{IMG:[^}]+\}\})/g);
  parts.forEach(part => {
    const m = part.match(/^\{\{IMG:([^:]+):([^:]+):(\d+):(.+)\}\}$/);
    if (m) {
      const [, align, shape, width, data] = m;
      const img = document.createElement('img');
      img.src = data; img.className = `inline-img ${shape} align-${align}`;
      img.style.width = width + 'px'; img.dataset.align = align; img.dataset.shape = shape; img.dataset.width = width; img.alt = '';
      editor.appendChild(img);
    } else if (part) {
      const lines = part.split('\n');
      lines.forEach((line, i) => {
        if (i > 0) editor.appendChild(document.createElement('br'));
        if (line) editor.appendChild(document.createTextNode(line));
      });
    }
  });
}

// History Stack
let undoTimer = null;
function pushUndo(force = false) {
  const v = serializeEditor();
  if (force) {
    if (undoStack[undoStack.length - 1] !== v) undoStack.push(v);
    if (undoStack.length > 60) undoStack.shift();
    return;
  }
  clearTimeout(undoTimer);
  undoTimer = setTimeout(() => {
    if (undoStack[undoStack.length - 1] !== v) undoStack.push(v);
    if (undoStack.length > 60) undoStack.shift();
  }, 400);
}

document.getElementById('btn-undo').onclick = () => {
  if (undoStack.length > 1) {
    undoStack.pop();
    deserializeToEditor(undoStack[undoStack.length - 1] || '');
    updateStatus(); scheduleMarquee(); scheduleCadence(); saveCurrentSheet();
  }
};

// Mainframe Sectors (Sheets)
function loadSheets() {
  try { sheets = JSON.parse(localStorage.getItem('hybrid_sheets') || '{}'); } catch { sheets = {}; }
  if (!Object.keys(sheets).length) sheets['sheet-1'] = { name: 'Sector 1', content: '', created: Date.now() };
  if (!sheets[currentSheetId]) currentSheetId = Object.keys(sheets)[0];
}

function saveSheets() { localStorage.setItem('hybrid_sheets', JSON.stringify(sheets)); }
function saveCurrentSheet() {
  if (!sheets[currentSheetId]) return;
  sheets[currentSheetId].content = serializeEditor();
  sheets[currentSheetId].updated = Date.now();
  saveSheets();
}

function switchSheet(id) {
  if (id === currentSheetId) return;
  saveCurrentSheet();
  currentSheetId = id;
  const s = sheets[id];
  deserializeToEditor(s.content || '');
  const title = (s.name || id).toUpperCase();
  sheetNameEl.textContent = title.slice(0, 8);
  deckSheetTag.textContent = 'SECTOR: ' + title;
  undoStack = [serializeEditor()];
  updateStatus(); scheduleMarquee(); scheduleCadence();
  renderSheetList();
  document.getElementById('sheet-menu').classList.remove('open');
}

function renderSheetList() {
  const list = document.getElementById('sheet-list');
  list.innerHTML = '';
  Object.entries(sheets).forEach(([id, s]) => {
    const btn = document.createElement('button');
    btn.textContent = (s.name || id).toUpperCase();
    if (id === currentSheetId) btn.classList.add('active');
    btn.onclick = () => switchSheet(id);
    list.appendChild(btn);
  });
}

const toggleSheetMenu = e => {
  e.stopPropagation();
  renderSheetList();
  document.getElementById('sheet-menu').classList.toggle('open');
};
document.getElementById('btn-sheets').onclick = toggleSheetMenu;
document.getElementById('btn-sheet-quick').onclick = toggleSheetMenu;

document.addEventListener('click', e => {
  const m = document.getElementById('sheet-menu');
  if (!m.contains(e.target) && e.target.id !== 'btn-sheets' && !e.target.closest('#btn-sheet-quick')) {
    m.classList.remove('open');
  }
});

document.getElementById('btn-new-sheet').onclick = () => {
  const id = 'sheet-' + Date.now();
  const name = 'Sector ' + (Object.keys(sheets).length + 1);
  sheets[id] = { name, content: '', created: Date.now() };
  saveSheets();
  switchSheet(id);
};

document.getElementById('btn-rename-sheet').onclick = () => {
  const s = sheets[currentSheetId];
  const name = prompt('Rename Sector:', s.name || '');
  if (name !== null && name.trim()) {
    s.name = name.trim();
    saveSheets();
    const title = s.name.toUpperCase();
    sheetNameEl.textContent = title.slice(0, 8);
    deckSheetTag.textContent = 'SECTOR: ' + title;
    renderSheetList();
  }
};

document.getElementById('btn-del-sheet').onclick = () => {
  if (Object.keys(sheets).length <= 1) { alert('Cannot delete the primary sector.'); return; }
  if (!confirm('Purge active sector buffer?')) return;
  delete sheets[currentSheetId];
  saveSheets();
  currentSheetId = Object.keys(sheets)[0];
  switchSheet(currentSheetId);
};

// Export Handlers
document.getElementById('btn-pdf').onclick = () => {
  const doc = new jsPDF({ unit: 'pt', format: 'letter' });
  const margin = 54, maxW = 504, pageH = 720;
  let y = margin;
  const fontName = fontSelect.value.includes('Garamond') ? 'times' : 'courier';
  doc.setFont(fontName, 'normal');
  const sizePx = parseFloat(getComputedStyle(editor).fontSize) || 18;
  const fontSizePt = Math.max(9, Math.min(15, sizePx * 0.72));
  doc.setFontSize(fontSizePt);
  const lineH = fontSizePt * (parseFloat(getComputedStyle(editor).lineHeight) || 1.65);
  const raw = serializeEditor();
  const parts = raw.split(/(\{\{IMG:[^}]+\}\})/g);

  parts.forEach(part => {
    const m = part.match(/^\{\{IMG:([^:]+):([^:]+):(\d+):(.+)\}\}$/);
    if (m) {
      const [, align, shape, wStr, data] = m;
      const width = +wStr || 180;
      const h = shape === 'circle' ? width : width * 0.75;
      if (y + h > pageH) { doc.addPage(); y = margin; }
      let x = margin;
      if (align === 'center') x = (612 - width) / 2;
      if (align === 'right') x = 612 - margin - width;
      try {
        const isPng = data.startsWith('data:image/png');
        doc.addImage(data, isPng ? 'PNG' : 'JPEG', x, y, width, h);
        y += h + 12;
      } catch {
        doc.text('[IMAGE FRAME]', x, y);
        y += lineH;
      }
    } else if (part) {
      const lines = doc.splitTextToSize(part, maxW);
      lines.forEach(line => {
        if (y > pageH - 20) { doc.addPage(); y = margin; }
        doc.text(line, margin, y);
        y += lineH;
      });
    }
  });
  doc.save((sheets[currentSheetId]?.name || 'mainframe-draft') + '.pdf');
};

function downloadText(name, text) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
}

document.getElementById('btn-txt').onclick = () => downloadText((sheets[currentSheetId]?.name || 'mainframe-buffer') + '.txt', editor.innerText);

document.getElementById('btn-copy').onclick = async () => {
  try {
    await navigator.clipboard.writeText(editor.innerText);
    const b = document.getElementById('btn-copy');
    const o = b.textContent;
    b.textContent = 'ACK';
    setTimeout(() => b.textContent = o, 1100);
  } catch {
    alert('Clipboard transfer denied.');
  }
};

document.getElementById('btn-clear').onclick = () => {
  if (confirm('Initial Program Load (IPL): Purge current console buffer?')) {
    editor.innerHTML = '';
    updateStatus(); scheduleMarquee(); scheduleCadence(); saveCurrentSheet(); pushUndo(true);
  }
};

// Editor Keystroke Handlers
editor.addEventListener('input', () => {
  updateStatus(); scheduleMarquee(); scheduleCadence(); saveCurrentSheet(); pushUndo();
});

editor.addEventListener('keydown', e => {
  if (!soundOn) return;
  if (e.key === 'Enter') playReturn();
  else if (e.key === ' ') playSpace();
  else if (e.key === 'Backspace') playBackspace();
  else if (e.key.length === 1) playClick();
});

editor.addEventListener('focus', () => document.body.classList.add('typing'));
editor.addEventListener('blur', () => document.body.classList.remove('typing'));
editor.addEventListener('mouseup', () => {
  const sel = window.getSelection().toString().trim();
  if (sel && sel.split(/\s+/).length <= 3) {
    document.getElementById('lex-query').value = sel;
  }
});

// Help Overlay Handlers
function openHelp() { document.getElementById('help-overlay').classList.add('open'); }
function closeHelp() { document.getElementById('help-overlay').classList.remove('open'); }
document.getElementById('btn-help').onclick = openHelp;
document.getElementById('close-help').onclick = closeHelp;
document.getElementById('help-overlay').addEventListener('click', e => {
  if (e.target.id === 'help-overlay') closeHelp();
});

// Global Shortcuts
document.addEventListener('keydown', e => {
  if (e.key === '?' && !e.ctrlKey && !e.metaKey && document.activeElement !== editor) { openHelp(); e.preventDefault(); }
  if ((e.ctrlKey || e.metaKey) && e.key === '/') { openHelp(); e.preventDefault(); }
  if (e.key === 'Escape') {
    closeHelp();
    if (document.body.classList.contains('zen')) {
      document.body.classList.remove('zen');
      document.getElementById('btn-zen').classList.remove('active');
    }
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) { document.getElementById('btn-undo').click(); e.preventDefault(); }
  if ((e.ctrlKey || e.metaKey) && e.key === 's') { saveCurrentSheet(); e.preventDefault(); }
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'z' || e.key === 'Z')) { document.getElementById('btn-zen').click(); e.preventDefault(); }
});

// Bootstrap
loadSheets();
deserializeToEditor(sheets[currentSheetId]?.content || '');
const initialTitle = (sheets[currentSheetId]?.name || 'Sector 1').toUpperCase();
sheetNameEl.textContent = initialTitle.slice(0, 8);
deckSheetTag.textContent = 'SECTOR: ' + initialTitle;
updateStatus(); updateMarquee(); scheduleCadence(); pushUndo(true);

const oldText = localStorage.getItem('typewriter_text');
if (oldText && !sheets[currentSheetId]?.content) {
  deserializeToEditor(oldText);
  saveCurrentSheet();
  localStorage.removeItem('typewriter_text');
}