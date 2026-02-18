<!-- LOGIC -->
    import * as webllm from "https://esm.run/@mlc-ai/web-llm";
    const modelId = "Hermes-3-Llama-3.2-3B-q4f16_1-MLC"; 
    let engine;

    const btn = document.getElementById('loadCoreBtn');
    const output = document.getElementById('nous-output');
    const dlText = document.getElementById('dl-text');
    const genBtn = document.getElementById('nous-transmit-btn'); 
    const promptInput = document.getElementById('nous-prompt'); 

    btn.onclick = async () => {
        try {
            if (!navigator.gpu) throw new Error("GPU MISSING");
            btn.disabled = true; btn.textContent = "SYNCING...";
            document.getElementById('dl-track').style.display = 'block';
            dlText.style.display = 'block';
            output.textContent = "INITIALIZING...";
            
            engine = await webllm.CreateMLCEngine(modelId, {
                initProgressCallback: (report) => {
                    const p = report.progress * 100;
                    document.getElementById('dl-bar').style.width = p + '%';
                    dlText.textContent = `LOADING: ${Math.round(p)}%`;
                    if (p === 100) {
                        output.textContent = "HERMES ONLINE.";
                        btn.style.display = 'none';
                        dlText.style.display = 'none';
                        document.getElementById('nous-status').textContent = "ONLINE"; 
                        document.getElementById('nous-status').style.color = "#ff0033"; 
                    }
                }
            });
        } catch (err) { output.textContent = "ERR: " + err.message; }
    };

    genBtn.onclick = async () => {
        if (!engine) return;
        const val = promptInput.value.trim();
        if (!val) return;
        genBtn.disabled = true;
        output.textContent = ""; let fullText = "";
        try {
            const chunks = await engine.chat.completions.create({ 
                messages: [{ role: "system", content: "You are NOUS." }, { role: "user", content: val }],
                stream: true, temperature: 0.7, max_tokens: 512
            });
            for await (const chunk of chunks) {
                fullText += chunk.choices[0]?.delta?.content || "";
                output.textContent = fullText; 
                output.scrollTop = output.scrollHeight;
            }
        } catch (e) { output.textContent = "ERR"; } 
        finally { genBtn.disabled = false; }
    };

    function toggleMenu() {
        const m = document.getElementById('menuOverlay');
        m.style.display = (m.style.display === 'flex') ? 'none' : 'flex';
    }
    
    function toggleNous() {
        const p = document.getElementById('nous-panel');
        p.style.display = (p.style.display === 'block') ? 'none' : 'block';
    }

    function glitchEffect() {
        document.body.style.filter = 'invert(1)';
        setTimeout(() => { document.body.style.filter = 'invert(0)'; }, 50);
    }

    window.addEventListener('scroll', () => {
        document.getElementById('anchorStar').style.transform = `translate(-50%, -50%) rotate(${window.scrollY * 0.1}deg)`;
    });

    const canvas = document.getElementById('vizCanvas');
    const ctx = canvas.getContext('2d');
    function anim() {
        ctx.fillStyle='rgba(0,0,0,0.1)'; ctx.fillRect(0,0,280,150);
        ctx.fillStyle='#333';
        const x = Math.random()*280;
        ctx.fillRect(x, 150 - Math.random()*50, 2, 50);
        requestAnimationFrame(anim);
    }
    anim();

    import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

    const container = document.getElementById('three-footer');
    let camera, scene, renderer;
    let particles, count = 0;
    let mouseX = 0;

    init();
    animate();

    function init() {
        // 1. Setup
        camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 1, 10000);
        camera.position.z = 1000;
        camera.position.y = 200; // Looking down slightly

        scene = new THREE.Scene();
        // Fog makes it fade into the background color (Black/Grey)
        scene.fog = new THREE.FogExp2(0x050505, 0.0015); 

        // 2. Create Particles (BufferGeometry)
        // We create 5000 particles arranged in a grid
        const particleCount = 5000;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];

        const color1 = new THREE.Color(0xff0033); // Your RED
        const color2 = new THREE.Color(0xffffff); // White

        // Generate a grid of points
        let i = 0;
        for (let x = -1000; x < 1000; x += 40) {
            for (let z = -1000; z < 1000; z += 40) {
                positions.push(x, 0, z); // y is 0 for now, we animate it later
                
                // Mix Red and White randomly for that "Glitch" look
                const color = (Math.random() > 0.8) ? color1 : color2;
                colors.push(color.r, color.g, color.b);
                i++;
            }
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // 3. Material
        const material = new THREE.PointsMaterial({
            size: 6,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            blending: THREE.AdditiveBlending
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // 4. Renderer
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Handle Resize
        window.addEventListener('resize', onWindowResize);
        
        // Slight interaction
        container.addEventListener('mousemove', (e) => {
            mouseX = e.clientX - (window.innerWidth / 2);
        });
    }

    function onWindowResize() {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        // Rotate the whole system slightly based on mouse
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.lookAt(scene.position);

        const positions = particles.geometry.attributes.position.array;
        
        // This is the "Dynamic" part - Waving the particles
        let i = 0, ix, iz;
        // The math here creates a sine wave that moves over time
        for (let x = -1000; x < 1000; x += 40) {
            for (let z = -1000; z < 1000; z += 40) {
                // positions[ i + 1 ] is the Y coordinate (Height)
                // We make it ripple based on X, Z, and Time (count)
                positions[i + 1] = (Math.sin((x + count) * 0.01) * 50) + (Math.sin((z + count) * 0.01) * 50);
                i += 3;
            }
        }

        particles.geometry.attributes.position.needsUpdate = true; // Tell Three.js the dots moved
        count += 2; // Speed of the wave

        renderer.render(scene, camera);
    }

    // Import Three.js from a CDN (No local files needed)
    import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

    const container = document.getElementById('three-footer');
    let camera, scene, renderer;
    let particles, count = 0;
    let mouseX = 0;
    let windowHalfX = container.clientWidth / 2;

    init();
    animate();

    function init() {
        // 1. SETUP
        camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 1, 10000);
        camera.position.z = 1000;
        camera.position.y = 300; // Look down from above

        scene = new THREE.Scene();
        // Fog blends the particles into the background color (Hex #050505 matches your CSS)
        scene.fog = new THREE.FogExp2(0x050505, 0.001);

        // 2. CREATE PARTICLES (Procedural Wave)
        const particleCount = 2500;
        const geometry = new THREE.BufferGeometry();
        const positions = [];
        const colors = [];

        // Your Palette
        const colorRed = new THREE.Color(0xff0033);
        const colorWhite = new THREE.Color(0xffffff);

        // Grid Generation
        let i = 0;
        // Create a spread of dots
        for (let x = -1500; x < 1500; x += 50) {
            for (let z = -1000; z < 1000; z += 50) {
                positions.push(x, 0, z); // Y is 0 initially
                
                // Randomly assign Red or White (20% Red for accents)
                const color = (Math.random() > 0.85) ? colorRed : colorWhite;
                colors.push(color.r, color.g, color.b);
                i++;
            }
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        // 3. MATERIAL
        const material = new THREE.PointsMaterial({
            size: 5,
            vertexColors: true,
            transparent: true,
            opacity: 0.8,
            // Additive blending makes them glow when they overlap
            blending: THREE.AdditiveBlending 
        });

        particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // 4. RENDERER
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        // Events
        container.addEventListener('mousemove', onDocumentMouseMove);
        window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
        windowHalfX = container.clientWidth / 2;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    }

    function onDocumentMouseMove(event) {
        // Subtle camera tilt based on mouse
        mouseX = (event.clientX - windowHalfX) * 0.1;
    }

    function animate() {
        requestAnimationFrame(animate);
        render();
    }

    function render() {
        // Move camera slightly
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.lookAt(scene.position);

        const positions = particles.geometry.attributes.position.array;
        
        // ANIMATION LOOP: Create the Sine Wave
        let i = 0;
        // We iterate through the grid and adjust height (Y) based on X/Z position + Time
        for (let x = -1500; x < 1500; x += 50) {
            for (let z = -1000; z < 1000; z += 50) {
                
                // The Magic Math: Sine waves creating a ripple
                // positions[i+1] is the Y coordinate
                positions[i + 1] = (Math.sin((x + count) * 0.005) * 50) + 
                                   (Math.sin((z + count) * 0.005) * 50);
                i += 3;
            }
        }

        particles.geometry.attributes.position.needsUpdate = true; // Important!
        count += 4; // Speed of the wave

        renderer.render(scene, camera);
    }

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
    'runes': ['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ'],
    'block': ['█', '▓', '▒', '░', ' '],
    'simple': ['#', '*', '+', '.', ' '],
    'matrix': ['ア', 'イ', 'ウ', 'エ', 'オ'],
    'witch': ['☾', '✧', '☽', '☆', '✵']
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
	
// --- EXPORT FUNCTIONS ---
function clearChat() {
    // Now clears ASCII art and resets
    const container = document.getElementById('ascii-container');
    container.textContent = 
        "╔══════════════════════════════════════════╗\n" +
        "║ ASCII ART GENERATOR v1.2                ║\n" +
        "║ Type text and select style above        ║\n" +
        "╚══════════════════════════════════════════╝\n\n" +
        "Ready for input...";
    
    document.getElementById('ascii-input').value = '';
}

function exportChat() {
    // Export ASCII art as text file
    const asciiContent = document.getElementById('ascii-container').textContent;
    const textBlob = new Blob([asciiContent], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = `ascii-art-${Date.now()}.txt`;
    textLink.click();
    
    // Download the MP3 file after a short delay
    setTimeout(() => {
        const audio = document.getElementById('viz-audio');
        if (audio && audio.src) {
            const audioLink = document.createElement('a');
            audioLink.href = audio.src;
            audioLink.download = 'imthroughwithloveTWOSKINNYGIRLS.mp3';
            audioLink.click();
        }
    }, 100);
}

// Optional: Rename functions to be more accurate
function exportASCII() {
    const asciiContent = document.getElementById('ascii-container').textContent;
    const textBlob = new Blob([asciiContent], { type: 'text/plain' });
    const textUrl = URL.createObjectURL(textBlob);
    const textLink = document.createElement('a');
    textLink.href = textUrl;
    textLink.download = `ascii-art-${Date.now()}.txt`;
    textLink.click();
}

function exportAll() {
    // Export ASCII
    exportASCII();
    
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
	</script>
<script>
    let storySynth = window.speechSynthesis;
    let storyUtterance = null;

    function toggleStoryTTS() {
        const btn = document.getElementById('story-tts-btn');
        const textContainer = document.getElementById('story-text');

        // If currently speaking, STOP.
        if (storySynth.speaking) {
            storySynth.cancel();
            btn.innerHTML = "▶ SPEAK";
            btn.style.borderColor = "#333";
            btn.style.color = "#888"; // Reset color
            return;
        }

        // Otherwise, START.
        const textToRead = textContainer.innerText;
        storyUtterance = new SpeechSynthesisUtterance(textToRead);

        // --- VOICE TUNING (The "Hamlet" Settings) ---
        storyUtterance.pitch = 0.85; // Slightly lower, more serious
        storyUtterance.rate = 0.9;   // Deliberate pacing
        storyUtterance.volume = 1.0;

        // Try to find a distinct voice (Google US English or similar)
        const voices = storySynth.getVoices();
        const preferredVoice = voices.find(v => v.name.includes("Google US English")) || voices[0];
        if (preferredVoice) storyUtterance.voice = preferredVoice;

        // Visual Feedback while reading
        btn.innerHTML = "■ STOP";
        btn.style.borderColor = "var(--red)";
        btn.style.color = "var(--red)";

        // When finished, reset the button
        storyUtterance.onend = function() {
            btn.innerHTML = "▶ SPEAK";
            btn.style.borderColor = "#333";
            btn.style.color = "#888";
        };

        storySynth.speak(storyUtterance);
    }

	document.addEventListener('DOMContentLoaded', function() {
    initCustomSelects();
});

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
			// --- AUDIO CORE ---
// --- AUDIO CORE ---
// --- AUDIO CORE ---
// --- AUDIO CORE ---
// --- AUDIO CORE ---
// --- AUDIO CORE ---
let audioCtx, humOsc, isPowered = false;

function togglePower() {
  const powerBtn = document.getElementById('power-toggle');
  
  if(!audioCtx) {
    // First click - create and start audio
    audioCtx = new AudioContext();
    humOsc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    humOsc.type = 'sawtooth'; 
    humOsc.frequency.value = 55;
    gain.gain.value = 0.02;
    
    humOsc.connect(gain); 
    gain.connect(audioCtx.destination);
    humOsc.start();
    
    // Set state to ON
    isPowered = true;
  } else {
    // Toggle existing audio
    if(isPowered) {
      audioCtx.suspend();
      isPowered = false;
    } else {
      audioCtx.resume();
      isPowered = true;
    }
  }
  // ALWAYS update button text and color based on isPowered
  if(isPowered) {
    powerBtn.innerText = "POWER: ON";
    powerBtn.classList.add('power-on');
  } else {
    powerBtn.innerText = "POWER: OFF";
    powerBtn.classList.remove('power-on');
  }
}
    <!-- LOGIC -->
        import * as Tone from 'https://esm.run/tone';

        // 1. THE DATA: Mozart's Actual Lookup Table (First 8 Measures)
        // Rows = Dice Sum (2-12), Cols = Measure Index (1-8)
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

        // DOM Elements
        const grid = document.getElementById('mozart-grid');
        const rollBtn = document.getElementById('rollBtn');
        const playBtn = document.getElementById('playBtn');
        const codeDisplay = document.getElementById('composition-code');
        
        let currentSequence = []; // Will hold the selected measures

        // 2. BUILD THE GRID UI
        function buildGrid() {
            grid.innerHTML = '';
            for(let row=2; row<=12; row++) {
                mozartTable[row].forEach((val, index) => {
                    const cell = document.createElement('div');
                    cell.textContent = val;
                    cell.style.border = '1px solid #333';
                    cell.style.padding = '5px';
                    cell.style.textAlign = 'center';
                    cell.style.color = '#555';
                    cell.id = `m-${row}-${index}`; // Unique ID for highlighting
                    grid.appendChild(cell);
                });
            }
        }
        buildGrid();

        // 3. GENERATE (Roll Dice)
        rollBtn.onclick = () => {
            // Reset UI
            document.querySelectorAll('#mozart-grid div').forEach(d => {
                d.style.background = 'transparent'; 
                d.style.color = '#555';
                d.style.borderColor = '#333';
            });

            currentSequence = [];
            let sequenceIds = [];

            // For each of the 8 measures...
            for(let i=0; i<8; i++) {
                // Roll 2 Dice
                const d1 = Math.floor(Math.random() * 6) + 1;
                const d2 = Math.floor(Math.random() * 6) + 1;
                const sum = d1 + d2;
                
                // Get the Mozart Number
                const measureID = mozartTable[sum][i];
                currentSequence.push({ note: sum, id: measureID }); // We use 'sum' to determine pitch height
                sequenceIds.push(measureID);

                // Highlight the Grid
                const cell = document.getElementById(`m-${sum}-${i}`);
                if(cell) {
                    cell.style.background = 'var(--red)';
                    cell.style.color = 'black';
                    cell.style.borderColor = 'var(--red)';
                }
            }

            codeDisplay.textContent = `SEQ: [ ${sequenceIds.join(' - ')} ]`;
            playBtn.disabled = false;
            playBtn.style.opacity = '1';
        };

        // 4. PLAY (The Cyber-Harpsichord)
        playBtn.onclick = async () => {
            await Tone.start();
            
// 1. The Reverb (The "Cathedral/Void" Space)
const reverb = new Tone.Reverb({
    decay: 6,       // Long decay for that "ghost" feel
    wet: 0.5,       // 50% mix
    preDelay: 0.2   // Slight delay before echo for clarity
}).toDestination();

// 2. The Chorus (The "VHS/Tape" Wobble)
// We slow the frequency down to 1.5Hz so it drifts slowly instead of shaking fast
const chorus = new Tone.Chorus(1.5, 2.5, 0.5).connect(reverb).start();

// 3. The Synth (The "Glass" Instrument)
const synth = new Tone.PolySynth(Tone.FMSynth, {
    harmonicity: 3,         // 3:1 ratio = Bell-like
    modulationIndex: 10,    // High modulation = Metallic
    oscillator: { type: "sine" },
    envelope: {
        attack: 0.05,
        decay: 0.3,
        sustain: 0.1,
        release: 2
    },
    modulation: { type: "square" },
    modulationEnvelope: {
        attack: 0.002,
        decay: 0.2,
        sustain: 0,
        release: 0.2
    }
}).connect(chorus); // <--- CONNECT TO CHORUS, NOT DESTINATION

// 4. The Logic (KEEP THIS!)
// You absolutely need this part because it calculates *when* to play the notes.
const now = Tone.now();
let time = 0;

            // Play the sequence
            // Since we don't have the 176 MP3s, we procedurally generate a waltz
            // based on the dice rolls. 
            // Higher Dice Roll = Higher Pitch.
            
            currentSequence.forEach((step, index) => {
                // Map dice sum (2-12) to a C Major Scale
                // 2=C3, 12=E4 roughly
                const scale = ['C3','D3','E3','F3','G3','A3','B3','C4','D4','E4','F4','G4'];
                const rootNote = scale[step.note - 2] || 'C3';
                
                // Play a Waltz pattern (ONE-two-three)
                synth.triggerAttackRelease(rootNote, "8n", now + time);
                synth.triggerAttackRelease(rootNote, "8n", now + time + 0.25); // Chord element
                synth.triggerAttackRelease(rootNote, "8n", now + time + 0.5);  // Chord element
                
                time += 0.75; // Next measure
            });
        };

				 function exportDraft() {
    const content = document.getElementById('editor').innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'inkrealm-dossier.txt';
    a.click();
  
