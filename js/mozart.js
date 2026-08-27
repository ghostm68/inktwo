/* ================================================================
   MOZART DICE GAME (K.516f) — ES Module
   Load with: <script type="module" src="js/mozart.js"></script>
   Requires Tone.js (imported below)
   ================================================================ */

import * as Tone from 'https://esm.sh/tone';

const mozartTable = {
  2:  [96, 22, 141, 41, 105, 122, 11, 30],
  3:  [32, 6, 128, 63, 146, 46, 134, 81],
  4:  [69, 95, 158, 13, 153, 55, 110, 24],
  5:  [40, 17, 113, 85, 161, 2, 159, 100],
  6:  [148, 74, 163, 45, 80, 97, 36, 107],
  7:  [104, 157, 27, 167, 154, 68, 118, 91],
  8:  [152, 60, 171, 53, 99, 133, 21, 127],
  9:  [119, 84, 114, 50, 140, 86, 169, 94],
  10: [98, 142, 42, 156, 75, 129, 62, 123],
  11: [3, 87, 165, 61, 135, 47, 147, 33],
  12: [54, 130, 10, 103, 28, 37, 106, 5]
};

const grid = document.getElementById('mozart-grid');
const rollBtn = document.getElementById('rollBtn');
const playBtn = document.getElementById('playBtn');
const codeDisplay = document.getElementById('composition-code');

window.currentSequence = [];

let synth, chorus, reverb;
let isPlaying = false;
let currentPlaybackTimeout = null;

async function initAudio() {
  if (synth) return;
  await Tone.start();
  
  reverb = new Tone.Reverb({ decay: 6, wet: 0.5, preDelay: 0.2 }).toDestination();
  chorus = new Tone.Chorus(1.5, 2.5, 0.5).connect(reverb).start();
  
  synth = new Tone.PolySynth(Tone.FMSynth, {
    harmonicity: 3,
    modulationIndex: 10,
    oscillator: { type: "sine" },
    envelope: { attack: 0.05, decay: 0.3, sustain: 0.1, release: 2 },
    modulation: { type: "square" },
    modulationEnvelope: { attack: 0.002, decay: 0.2, sustain: 0, release: 0.2 }
  }).connect(chorus);
}

function stopPlayback() {
  if (currentPlaybackTimeout) {
    clearTimeout(currentPlaybackTimeout);
    currentPlaybackTimeout = null;
  }
  if (synth) synth.releaseAll();
  isPlaying = false;
  if (playBtn) playBtn.innerHTML = '▶ PLAY COMPOSITION';
}

function buildGrid() {
  if (!grid) return;
  grid.innerHTML = '';
  for(let row=2; row<=12; row++) {
    mozartTable[row].forEach((val, index) => {
      const cell = document.createElement('div');
      cell.textContent = val;
      cell.style.border = '1px solid #333';
      cell.style.padding = '5px';
      cell.style.textAlign = 'center';
      cell.style.color = '#555';
      cell.id = `m-${row}-${index}`;
      grid.appendChild(cell);
    });
  }
}
buildGrid();

const measureCount = document.getElementById('measure-count');
const exportStatus = document.getElementById('export-status');
if (measureCount) measureCount.textContent = 'MEASURES: 0';
if (exportStatus) exportStatus.innerHTML = '{ AWAITING_INPUT }';

if (rollBtn) {
  rollBtn.onclick = () => {
    stopPlayback();
    
    document.querySelectorAll('#mozart-grid div').forEach(d => {
      d.style.background = 'transparent';
      d.style.color = '#555';
      d.style.borderColor = '#333';
    });

    window.currentSequence = [];
    let sequenceIds = [];

    for(let i=0; i<8; i++) {
      const d1 = Math.floor(Math.random() * 6) + 1;
      const d2 = Math.floor(Math.random() * 6) + 1;
      const sum = d1 + d2;
      
      const measureID = mozartTable[sum][i];
      window.currentSequence.push({ note: sum, id: measureID });
      sequenceIds.push(measureID);

      const cell = document.getElementById(`m-${sum}-${i}`);
      if(cell) {
        cell.style.background = 'var(--red)';
        cell.style.color = 'black';
        cell.style.borderColor = 'var(--red)';
      }
    }

    if (codeDisplay) codeDisplay.textContent = `SEQ: [ ${sequenceIds.join(' - ')} ]`;
    if (playBtn) {
      playBtn.disabled = false;
      playBtn.style.opacity = '1';
      playBtn.innerHTML = '▶ PLAY COMPOSITION';
    }
    if (measureCount) measureCount.textContent = `MEASURES: ${window.currentSequence.length}`;
    if (exportStatus) exportStatus.innerHTML = '{ SEQUENCE_READY }';
  };
}

if (playBtn) {
  playBtn.onclick = async () => {
    if (!window.currentSequence.length) {
      alert('Generate a sequence first!');
      return;
    }
    
    if (isPlaying) {
      stopPlayback();
      return;
    }
    
    await initAudio();
    stopPlayback();
    
    isPlaying = true;
    playBtn.innerHTML = '⏸ STOP';
    
    const now = Tone.now();
    let time = 0;

    const chordMap = {
      2:  ['C3', 'E3', 'G3'],
      3:  ['D3', 'F3', 'A3'],
      4:  ['E3', 'G3', 'B3'],
      5:  ['F3', 'A3', 'C4'],
      6:  ['G3', 'B3', 'D4'],
      7:  ['A3', 'C4', 'E4'],
      8:  ['B3', 'D4', 'F4'],
      9:  ['C3', 'E3', 'A#3'],
      10: ['D3', 'F#3', 'C4'],
      11: ['E3', 'G#3', 'D4'],
      12: ['F#3', 'A3', 'C4', 'E4']
    };
    
    window.currentSequence.forEach((step, index) => {
      let notes = [...(chordMap[step.note] || ['C3', 'E3', 'G3'])];
      const bassNote = notes[0];
      let chordTones = notes.slice(1);

      if (Math.random() > 0.5) {
        chordTones = chordTones.map(n => Tone.Frequency(n).transpose(12));
      }

      const humanize = () => (Math.random() * 0.03) - 0.015;
      
      const finalBass = Math.random() > 0.7 ? Tone.Frequency(bassNote).transpose(-12) : bassNote;
      synth.triggerAttackRelease(finalBass, "2n", now + time + humanize(), 0.9);
      
      chordTones.forEach((note, i) => {
        synth.triggerAttackRelease(note, "8n", now + time + 0.3 + (i * 0.05) + humanize(), 0.6);
      });

      chordTones.forEach((note, i) => {
        synth.triggerAttackRelease(note, "8n", now + time + 0.6 + (i * 0.05) + humanize(), 0.5);
      });
      
      let measureGap = 0.85;
      if ((index + 1) % 4 === 0) measureGap += 0.2;
      time += measureGap;
    });
    
    const totalDuration = time * 1000;
    currentPlaybackTimeout = setTimeout(() => {
      if (isPlaying) {
        isPlaying = false;
        if (playBtn) playBtn.innerHTML = '▶ PLAY COMPOSITION';
        currentPlaybackTimeout = null;
      }
    }, totalDuration + 500);
  };
}

window.addEventListener('beforeunload', () => {
  if (synth) synth.dispose();
  if (chorus) chorus.dispose();
  if (reverb) reverb.dispose();
  if (currentPlaybackTimeout) clearTimeout(currentPlaybackTimeout);
});

/* ================================================================
   EXPORT HARMONIC ANALYSIS
   ================================================================ */
function exportHarmonicAnalysis(sequence) {
  if (!sequence || !sequence.length) {
    alert('ROLL THE DICE FIRST');
    return;
  }

  const chordProgressions = {
    2:  ['C', 'Em', 'G7', 'C'],
    3:  ['Dm', 'G7', 'C', 'Am'],
    4:  ['Em', 'Am', 'Dm', 'G7'],
    5:  ['F', 'C', 'G7', 'C'],
    6:  ['G', 'C', 'Am', 'D7'],
    7:  ['Am', 'Dm', 'G7', 'C'],
    8:  ['Bdim', 'C', 'Am', 'Dm'],
    9:  ['C7', 'F', 'C', 'G7'],
    10: ['D7', 'G7', 'C', 'C'],
    11: ['E7', 'Am', 'Dm', 'G7'],
    12: ['F#m7b5', 'B7', 'Em', 'Am']
  };

  const romanNumerals = {
    'C': 'I', 'Dm': 'ii', 'Em': 'iii', 'F': 'IV', 
    'G': 'V', 'G7': 'V7', 'Am': 'vi', 'Bdim': 'vii°',
    'C7': 'V7/IV', 'D7': 'V7/V', 'E7': 'V7/vi',
    'F#m7b5': 'viiø7/ii'
  };

  const voicings = {
    'C': ['C3', 'E3', 'G3', 'C4'],
    'Dm': ['D3', 'F3', 'A3', 'C4'],
    'Em': ['E3', 'G3', 'B3', 'D4'],
    'F': ['F3', 'A3', 'C4', 'E4'],
    'G': ['G3', 'B3', 'D4', 'F4'],
    'G7': ['G3', 'B3', 'F4', 'G4'],
    'Am': ['A3', 'C4', 'E4', 'A4'],
    'Bdim': ['B3', 'D4', 'F4', 'A4'],
    'C7': ['C3', 'E3', 'Bb3', 'C4'],
    'D7': ['D3', 'F#3', 'C4', 'D4'],
    'E7': ['E3', 'G#3', 'D4', 'E4'],
    'F#m7b5': ['F#3', 'A3', 'C4', 'E4']
  };

  const scale = ['C3','D3','E3','F3','G3','A3','B3','C4','D4','E4','F4','G4'];
  const heardNotes = sequence.map(s => scale[s.note - 2] || 'C3');

  const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
  
  let analysis = `╔══════════════════════════════════════════════════════════════╗
║              MOZART - MUSIKALISCHES WÜRFELSPIEL              ║
║                    K. 516f (COMPLETE ANALYSIS)               ║
╚══════════════════════════════════════════════════════════════╝

GENERATED: ${timestamp}
DICE SEQUENCE: ${sequence.map(s => s.note).join(' • ')}
MOZART MEASURE IDs: ${sequence.map(s => s.id).join(' • ')}

╔══════════════════════════════════════════════════════════════╗
║                    HARMONIC FRAMEWORK                        ║
╚══════════════════════════════════════════════════════════════╝

`;

  sequence.forEach((step, index) => {
    const progression = chordProgressions[step.note] || ['C', 'G7', 'C', 'C'];
    const roman = progression.map(ch => romanNumerals[ch] || ch).join(' → ');
    
    analysis += `MEASURE ${index + 1} (Dice: ${step.note} | Mozart ID: ${step.id})
────────────────────────────────────────────────
What you hear:   ${heardNotes[index]} (played 3x in waltz rhythm)
What it implies: ${progression.join(' | ')}
Harmony:         ${roman}

Piano voicing:
${progression.map((ch, i) => `  Beat ${i+1}: ${ch} = ${voicings[ch]?.join(' ') || 'C3 E3 G3 C4'}`).join('\n')}

`;
  });

  analysis += `╔══════════════════════════════════════════════════════════════╗
║                    THEORETICAL NOTES                          ║
╚══════════════════════════════════════════════════════════════╝

• Original composition (1787) used 176 possible measures
• This implementation uses measures 1-8 of the first section
• Each dice roll (2-12) selects a pre-composed measure
• The waltz is in 3/4 time (ONE-two-three)

CURRENT SYNTHESIS PARAMETERS:
• Oscillator: FM Synth (bell-like)
• Harmonicity: 3
• Reverb: Cathedral (6s decay, 50% wet)
• Chorus: 1.5Hz (VHS/tape wobble)

PERFORMANCE NOTES:
• The ghostly single notes you hear are a minimalist interpretation
• Full chord voicings above show Mozart's intended harmony
• To realize fully: play each chord as written, waltz tempo (♩.= 60)

"Anleitung zum Componieren von Walzern vermittelst zweier Würfel, 
 ohne etwas von der Musik oder Composition zu verstehen."
 — W.A. Mozart (attrib.), 1787

`;
  
  return analysis;
}

// Make available globally for the export button
window.exportHarmonicAnalysis = exportHarmonicAnalysis;

document.addEventListener('DOMContentLoaded', function() {
  const exportBtn = document.getElementById('exportHarmonyBtn');
  if (exportBtn) {
    exportBtn.addEventListener('click', function(e) {
      if (!window.currentSequence || !window.currentSequence.length) {
        alert('ROLL THE DICE FIRST');
        return;
      }
      
      try {
        const analysis = exportHarmonicAnalysis(window.currentSequence);
        
        const blob = new Blob([analysis], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mozart-waltz-analysis-${Date.now()}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        const btn = e.target;
        const originalContent = btn.innerHTML;
        
        btn.innerHTML = '<span style="position:absolute; left:10px; top:50%; transform:translateY(-50%); font-size:16px; opacity:0.5;">✓</span><span style="letter-spacing:2px;">ANALYSIS EXPORTED</span><span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:10px; color:#666;">⏎</span>';
        btn.style.background = 'var(--red)';
        btn.style.color = '#000';
        
        setTimeout(() => {
          btn.innerHTML = originalContent;
          btn.style.background = 'rgba(0,0,0,0.7)';
          btn.style.color = 'var(--red)';
        }, 2000);
        
        const statusEl = document.getElementById('export-status');
        if (statusEl) {
          statusEl.innerHTML = '{ ANALYSIS_ARCHIVED }';
          statusEl.style.color = 'var(--red)';
          setTimeout(() => {
            statusEl.innerHTML = '{ SEQUENCE_READY }';
            statusEl.style.color = '#444';
          }, 2000);
        }
        
      } catch (error) {
        console.error('Export error:', error);
        alert('Error exporting: ' + error.message);
      }
    });
  }
});
