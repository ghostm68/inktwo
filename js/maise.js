/* INK REALM UI SCRIPTS // v3.0 */

// ==========================================================================
// 1. ARTICLE AUTO-SAVE TO URL HASH & COMPRESSION (DEFLATE-RAW)
// ==========================================================================
(function initArticlePersistence() {
    function debounce(ms, fn) {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), ms);
        };
    }

    async function compressArticle(string) {
        const byteArray = new TextEncoder().encode(string);
        const stream = new CompressionStream('deflate-raw');
        const writer = stream.writable.getWriter();
        writer.write(byteArray);
        writer.close();
        const buffer = await new Response(stream.readable).arrayBuffer();
        return btoa(String.fromCharCode(...new Uint8Array(buffer)))
            .replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    }

    async function decompressArticle(b64) {
        const byteArray = Uint8Array.from(
            atob(b64.replace(/-/g, "+").replace(/_/g, "/")), 
            c => c.charCodeAt(0)
        );
        const stream = new DecompressionStream('deflate-raw');
        const writer = stream.writable.getWriter();
        writer.write(byteArray);
        writer.close();
        const buffer = await new Response(stream.readable).arrayBuffer();
        return new TextDecoder().decode(buffer);
    }

    function updateArticleTitle(article) {
        const match = article.textContent.match(/^\n*#(.+)\n/);
        if (match) document.title = `${match[1].trim()} - INK REALM`;
    }

    async function saveArticle(article) {
        try {
            const hash = '#' + await compressArticle(article.textContent);
            if (location.hash !== hash) {
                history.replaceState({}, '', hash);
            }
            localStorage.setItem('article-hash', hash);
            updateArticleTitle(article);
        } catch (e) {}
    }

    async function loadArticle(article) {
        try {
            if (location.hash && location.hash.length > 1) {
                article.textContent = await decompressArticle(location.hash.slice(1));
            } else {
                const saved = localStorage.getItem('article-hash');
                if (saved && saved.length > 1) {
                    article.textContent = await decompressArticle(saved.slice(1));
                }
            }
            updateArticleTitle(article);
        } catch (e) {}
    }

    document.addEventListener('DOMContentLoaded', () => {
        const article = document.querySelector('article');
        if (!article) return;
        loadArticle(article);
        article.addEventListener('input', debounce(500, () => saveArticle(article)));
        window.addEventListener('hashchange', () => loadArticle(article));
    });
})();


// ==========================================================================
// 2. DOCUMENT LEVELS, MATRIX CIPHER & GSAP KINETICS
// ==========================================================================
let currentDocLevel = 0;
const docChars = '§!<>-_\\/[]{}—=+*^?#@%&010101';

window.setDocLevel = function(lvl) {
    currentDocLevel = lvl;
    const articleEl = document.querySelector('article');
    if (!articleEl) return;

    // 1. Update HUD buttons
    document.querySelectorAll('.doc-lvl-btn').forEach((b, i) => {
        if (b.id && b.id.startsWith('doc-btn-')) {
            b.classList.toggle('active', b.id === `doc-btn-${lvl}`);
        }
    });

    // 2. Switch classes
    articleEl.classList.remove('level-0', 'level-1', 'level-2', 'level-3');
    articleEl.classList.add(`level-${lvl}`);

    // 3. Level transitions
    if (lvl === 1) {
        runArticleCipher(articleEl);
    } else if (lvl === 2 && typeof gsap !== 'undefined') {
        gsap.fromTo(articleEl, 
            { scale: 0.98, x: -5 }, 
            { scale: 1, x: 0, duration: 0.4, ease: "elastic.out(1, 0.4)" }
        );
    } else if (lvl === 3 && typeof gsap !== 'undefined') {
        gsap.fromTo(articleEl, 
            { filter: "brightness(2) contrast(1.4)" }, 
            { filter: "brightness(1) contrast(1)", duration: 0.5 }
        );
    }
};

function runArticleCipher(element) {
    const originalText = element.innerText;
    if (!originalText || originalText.trim().length === 0) return;

    let iteration = 0;
    const interval = setInterval(() => {
        element.innerText = originalText
            .split('')
            .map((char, index) => {
                if (char === ' ' || char === '\n') return char;
                if (index < iteration) return originalText[index];
                return docChars[Math.floor(Math.random() * docChars.length)];
            })
            .join('');

        if (iteration >= originalText.length) {
            clearInterval(interval);
            element.innerText = originalText;
        }
        iteration += 2;
    }, 20);
}

// Keystroke reactive styles
document.addEventListener('DOMContentLoaded', () => {
    const articleEl = document.querySelector('article');
    if (!articleEl) return;

    articleEl.addEventListener('keydown', (e) => {
        if (typeof gsap === 'undefined') return;

        if (currentDocLevel === 1 && e.key.length === 1) {
            gsap.fromTo(articleEl, 
                { textShadow: "0 0 15px #ff0033, 2px 0 0 #ffffff" }, 
                { textShadow: "0 0 8px rgba(255, 0, 51, 0.6)", duration: 0.2 }
            );
        } else if (currentDocLevel === 2) {
            if (e.key === 'Enter') {
                gsap.fromTo(articleEl, 
                    { y: 6, rotate: -0.2 }, 
                    { y: 0, rotate: 0, duration: 0.35, ease: "elastic.out(1.2, 0.3)" }
                );
            } else if (e.key.length === 1) {
                const randX = (Math.random() - 0.5) * 3;
                const randY = (Math.random() - 0.5) * 2;
                gsap.fromTo(articleEl, { x: randX, y: randY }, { x: 0, y: 0, duration: 0.08 });
            }
        } else if (currentDocLevel === 3 && e.key.length === 1) {
            gsap.fromTo(articleEl, 
                { textShadow: "0 0 20px #ffffff, 0 0 35px #ff0033", letterSpacing: "0.16em" }, 
                { textShadow: "0 0 10px #ff0033, 0 0 20px rgba(255, 0, 51, 0.8)", letterSpacing: "0.12em", duration: 0.3, ease: "power2.out" }
            );
        }
    });
});


// ==========================================================================
// 3. MOBILE VIEWPORT SWITCHER
// ==========================================================================
window.switchMobileView = function(view) {
    const container = document.getElementById('main-container') || document.querySelector('.container');
    const tabs = document.querySelectorAll('.mobile-tab');
    if (!container) return;

    container.classList.remove('view-doc', 'view-chat', 'view-pad');
    tabs.forEach(t => t.classList.remove('active'));

    container.classList.add(`view-${view}`);

    tabs.forEach(tab => {
        if (tab.getAttribute('data-view') === view) {
            tab.classList.add('active');
        }
    });
};


// ==========================================================================
// 4. DOCUMENT PDF EXPORT ENGINE
// ==========================================================================
window.exportDocPDF = function() {
    const article = document.querySelector('article');
    const text = article ? (article.innerText || article.textContent || '') : '';
    
    if (!text.trim()) {
        alert('Document buffer is empty.');
        return;
    }

    const match = text.match(/^#\s+(.+)$/m);
    let title = match ? match[1].trim() : 'INKREALM-DOCUMENT';
    title = title.replace(/[^a-zA-Z0-9_\- ]/g, '').replace(/\s+/g, '_');

    const prevTitle = document.title;
    document.title = `${title}.pdf`;
    window.print();
    document.title = prevTitle;
};


// ==========================================================================
// 5. MECHANICAL SOLENOID SYNTHESIZER (WEB AUDIO API)
// ==========================================================================
let audioCtx = null;
let sfxActive = false;

function initAudioContext() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

window.toggleSolenoid = function() {
    initAudioContext();
    sfxActive = !sfxActive;
    
    const btn = document.getElementById('solenoid-btn');
    if (btn) {
        btn.textContent = sfxActive ? 'SFX: ON' : 'SFX: OFF';
        btn.classList.toggle('active', sfxActive);
    }
    if (sfxActive) playSolenoid('standard');
};

function playSolenoid(type = 'standard') {
    if (!sfxActive) return;
    initAudioContext();
    if (!audioCtx) return;

    const now = audioCtx.currentTime;
    const jitter = (Math.random() - 0.5) * 16;
    let baseFreq = 110;
    let duration = 0.028;

    if (type === 'space') {
        baseFreq = 80;
        duration = 0.038;
    } else if (type === 'enter') {
        baseFreq = 65;
        duration = 0.055;
    }

    // Layer 1: Striker thump
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(baseFreq + jitter, now);
    osc.frequency.exponentialRampToValueAtTime(30, now + duration);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + duration);

    // Layer 2: Relay snap
    const snapOsc = audioCtx.createOscillator();
    const snapGain = audioCtx.createGain();
    const snapFreq = type === 'enter' ? 750 : (1500 + jitter * 8);
    snapOsc.type = 'square';
    snapOsc.frequency.setValueAtTime(snapFreq, now);
    snapOsc.frequency.exponentialRampToValueAtTime(200, now + 0.012);
    snapGain.gain.setValueAtTime(0.045, now);
    snapGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.012);
    snapOsc.connect(snapGain);
    snapGain.connect(audioCtx.destination);
    snapOsc.start(now);
    snapOsc.stop(now + 0.012);
}

document.addEventListener('DOMContentLoaded', () => {
    const inputs = [
        document.querySelector('article'),
        document.getElementById('notepad'),
        document.querySelector('.text-input')
    ];

    inputs.forEach(el => {
        if (!el) return;
        el.addEventListener('keydown', (e) => {
            if (e.repeat) return;
            if (e.key === 'Enter') playSolenoid('enter');
            else if (e.key === ' ') playSolenoid('space');
            else if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete') {
                playSolenoid('standard');
            }
        });
    });
});


// ==========================================================================
// 6. WIRE & TICKER INTERCEPTS (HOLLYWOOD, INTEL, GRAM MARKET)
// ==========================================================================
(async function loadHollywoodWire() {
    const track = document.querySelector('#feed-hollywood .wire-ticker-track');
    if (!track) return;

    const feeds = [
        'https://deadline.com/feed/',
        'https://variety.com/feed/',
        'https://www.hollywoodreporter.com/feed/'
    ];

    async function fetchFeed(feedUrl) {
        try {
            const res = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(feedUrl)}`);
            const data = await res.json();
            if (data.status === 'ok' && data.items && data.items.length > 0) {
                return data.items.slice(0, 8).map(i => ({ title: i.title, link: i.link }));
            }
        } catch (e) {}

        try {
            const res = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(feedUrl)}`);
            const data = await res.json();
            const xml = new DOMParser().parseFromString(data.contents, "text/xml");
            const items = Array.from(xml.querySelectorAll("item")).slice(0, 8).map(el => ({
                title: el.querySelector("title")?.textContent || "",
                link: el.querySelector("link")?.textContent || "#"
            })).filter(i => i.title);
            if (items.length > 0) return items;
        } catch (e) {}

        return null;
    }

    let articles = null;
    for (const url of feeds) {
        articles = await fetchFeed(url);
        if (articles && articles.length > 0) break;
    }

    if (articles && articles.length > 0) {
        const itemsHtml = articles.map(a => {
            const parser = document.createElement('div');
            parser.innerHTML = a.title;
            const cleanTitle = parser.textContent.trim().toUpperCase();
            return `<a href="${a.link}" target="_blank" rel="noopener noreferrer"><span class="wire-bullet">//</span> ${cleanTitle}</a>`;
        }).join('');
        track.innerHTML = itemsHtml + itemsHtml;
    } else {
        track.innerHTML = '<span class="wire-placeholder">[WIRE OFFLINE // RETRYING LINK]</span>';
    }
})();

async function updateNewsFeed() {
    const feedEl = document.getElementById("feed-news");
    if (!feedEl) return;
    try {
        const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json");
        const ids = await res.json();
        const stories = await Promise.all(
            ids.slice(0, 3).map(id => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json()))
        );
        feedEl.innerHTML = stories.filter(s => s && s.title).map(s => `→ ${s.title}`).join("<br>");
    } catch {
        feedEl.textContent = "→ no signal";
    }
}

async function updateMarketFeed() {
    const el = document.getElementById("feed-market");
    if (!el) return;
    try {
        const res = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd&include_24hr_change=true");
        const data = await res.json();
        const gram = data["the-open-network"];
        const arrow = gram.usd_24h_change >= 0 ? "▲" : "▼";
        el.textContent = `GRAM $${gram.usd.toLocaleString()} ${arrow}`;
    } catch {
        el.textContent = "GRAM — no signal";
    }
}

// Kick off feeds on load and set refresh intervals
document.addEventListener('DOMContentLoaded', () => {
    updateNewsFeed();
    updateMarketFeed();
});
setInterval(updateNewsFeed, 5 * 60 * 1000); 
setInterval(updateMarketFeed, 60 * 1000);


// ==========================================================================
// 7. POINTER TRAIL ENGINE
// ==========================================================================
(function initPointerTrail() {
    const canvas = document.getElementById('trailCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let W, H, dpr;
    const pts = [];
    const LIFE = 650;
    const isCoarse = window.matchMedia('(pointer: coarse)').matches;

    function resize() {
        dpr = window.devicePixelRatio || 1;
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W * dpr;
        canvas.height = H * dpr;
        ctx.resetTransform();
        ctx.scale(dpr, dpr);
    }
    resize();
    window.addEventListener('resize', resize);

    if (!isCoarse) {
        window.addEventListener('pointermove', (e) => {
            pts.push({ x: e.clientX, y: e.clientY, t: performance.now() });
        });
    }

    function render() {
        requestAnimationFrame(render);
        if (isCoarse) return;

        const now = performance.now();
        while (pts.length && now - pts[0].t > LIFE) {
            pts.shift();
        }

        ctx.clearRect(0, 0, W, H);
        if (pts.length < 2) return;

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        for (let i = 1; i < pts.length; i++) {
            const progress = (now - pts[i].t) / LIFE;
            const alpha = Math.max(0, Math.min(1, (1 - progress) * 1.2));
            ctx.strokeStyle = `rgba(255, 0, 0, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1.25;
            ctx.beginPath();
            ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
            ctx.lineTo(pts[i].x, pts[i].y);
            ctx.stroke();
        }
    }
    requestAnimationFrame(render);
})();


// ==========================================================================
// 8. NOVA FM POP-OUT STREAM
// ==========================================================================
(function initNovaFm() {
    const toggle = document.getElementById("nova-fm-toggle");
    const panel = document.getElementById("nova-fm-panel");
    const audio = document.getElementById("novaAudio");
    const status = document.getElementById("nova-fm-status");
    if (!toggle || !panel || !audio) return;

    function setLive(on) {
        toggle.textContent = on ? "[ Nova: ON ]" : "[ Nova: OFF ]";
        toggle.classList.toggle("live", on);
        if (status) {
            status.textContent = on ? "LIVE" : "STANDBY";
            status.style.color = on ? "#ff0033" : "#444";
        }
    }

    toggle.addEventListener("click", () => {
        const open = panel.style.display === "block";
        if (open) {
            panel.style.display = "none";
            audio.pause();
            setLive(false);
        } else {
            panel.style.display = "block";
            setLive(false);
            status.textContent = "READY";
            status.style.color = "#888";
        }
    });

    audio.addEventListener("play", () => setLive(true));
    audio.addEventListener("pause", () => {
        if (panel.style.display === "block") {
            setLive(false);
            if (status) { status.textContent = "PAUSED"; status.style.color = "#888"; }
        }
    });
    audio.addEventListener("error", () => {
        if (status) {
            status.textContent = "STREAM ERROR";
            status.style.color = "#ff0033";
        }
        setLive(false);
    });
})();


// ==========================================================================
// 9. SEARCH OVERLAY CONTROLLER
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    const searchOverlay = document.querySelector('.searchform-overlay');
    const closeSearch = document.querySelector('.btn-close-search');
    const searchTriggers = document.querySelectorAll('.header-icon');

    searchTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            if (searchOverlay) {
                searchOverlay.classList.add('active');
                setTimeout(() => {
                    const searchInput = searchOverlay.querySelector('.search-field');
                    if (searchInput) searchInput.focus();
                }, 100);
            }
        });
    });

    if (closeSearch && searchOverlay) {
        closeSearch.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.classList.remove('active');
        });
    }

    if (searchOverlay) {
        searchOverlay.addEventListener('click', (e) => {
            if (e.target === searchOverlay) {
                searchOverlay.classList.remove('active');
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && searchOverlay && searchOverlay.classList.contains('active')) {
            searchOverlay.classList.remove('active');
        }
    });
});


// ==========================================================================
// 10. DYNAMIC MOBILE LAYOUT OFFSET
// ==========================================================================
(function adjustMobileLayout() {
    function updateOffsets() {
        if (window.innerWidth > 768) return;
        const header = document.querySelector('.header');
        const tabBar = document.getElementById('mobile-tabs');
        const container = document.getElementById('main-container') || document.querySelector('.container');
        if (!header || !tabBar || !container) return;

        const headerH = header.offsetHeight;
        const tabH = tabBar.offsetHeight || 44;

        tabBar.style.top = headerH + 'px';
        const totalTop = headerH + tabH;
        container.style.paddingTop = totalTop + 'px';

        const panels = document.querySelectorAll('.article-panel, .writing-container, .notepad-panel');
        panels.forEach(p => {
            p.style.top = totalTop + 'px';
            p.style.height = `calc(100dvh - ${totalTop}px)`;
        });
    }

    window.addEventListener('resize', updateOffsets);
    window.addEventListener('orientationchange', () => setTimeout(updateOffsets, 150));
    document.addEventListener('DOMContentLoaded', () => {
        setTimeout(updateOffsets, 100);
        setTimeout(updateOffsets, 3000);
    });
})();
