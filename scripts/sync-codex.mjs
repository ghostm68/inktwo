import fs from 'node:fs';

const HTML_PATH = '1991.html';
const JSON_PATH = 'codex1991.json';
const MAX_ENRICH = Math.max(0, parseInt(process.env.MAX_ENRICH || '40', 10));
const NVIDIA_KEY = (process.env.NVIDIA_API_KEY || '').trim();
const UA = 'InkrealmCodex1991Bot/1.0 (https://inkrealm.info; contact@inkrealm.info)';

const NAMED_ENTITIES = {
  nbsp: ' ', amp: '&', quot: '"', apos: "'", lt: '<', gt: '>',
  rsquo: "'", lsquo: "'", ldquo: '"', rdquo: '"', ndash: '-', mdash: '-',
  hellip: '...', eacute: 'é', egrave: 'è', ecirc: 'ê', aacute: 'á', agrave: 'à',
  auml: 'ä', ouml: 'ö', uuml: 'ü', ntilde: 'ñ', ccedil: 'ç', oacute: 'ó',
  iacute: 'í', uacute: 'ú', szlig: 'ß', oslash: 'ø', aring: 'å'
};

function decodeEntities(str) {
  return (str || '')
    .replace(/&rsquop;/gi, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&([a-z]+);/gi, (m, name) => NAMED_ENTITIES[name.toLowerCase()] ?? m)
    .replace(/\u00a0/g, ' ');
}

function normKey(s) {
  return (s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9\u0400-\u04ff\u0600-\u06ff\u4e00-\u9fff]+/g, ' ')
    .trim();
}

function tokenOverlap(a, b) {
  const ta = new Set(normKey(a).split(' ').filter(Boolean));
  const tb = new Set(normKey(b).split(' ').filter(Boolean));
  if (!ta.size || !tb.size) return 0;
  let shared = 0;
  for (const w of ta) if (tb.has(w)) shared++;
  return (2 * shared) / (ta.size + tb.size);
}

function isNonLatin(s) {
  return /[\u0370-\u03ff\u0400-\u04ff\u0600-\u06ff\u10a0-\u10ff\u3040-\u30ff\u4e00-\u9fff\uac00-\ud7af]/.test(s || '');
}

function cleanYear(y) {
  const n = Number(y);
  return (Number.isFinite(n) && n > 1800 && n < 2100) ? Math.trunc(n) : null;
}

function cleanDir(d) {
  const s = (d || '').replace(/\s+/g, ' ').trim();
  return /^(unknown|—|-|n\/a|pending|\?)$/i.test(s) ? '' : s;
}

function parse1991Html(html) {
  const out = [];
  const seenExact = new Set();
  const strongRe = /<strong\b[^>]*>([\s\S]*?)<\/strong>/gi;
  let match;

  while ((match = strongRe.exec(html)) !== null) {
    const inner = match[1]
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/(p|div|li)>/gi, '\n')
      .replace(/<[^>]+>/g, '');

    const decoded = decodeEntities(inner);
    for (const line of decoded.split(/\n+/)) {
      const trimmed = line.replace(/\s+/g, ' ').trim();
      if (!trimmed) continue;

      for (const part of trimmed.split(/(?=(?:^|\s)\d{1,4}(?:andahalf)?\s?[_~]+)/i)) {
        const raw = part.trim();
        const m = raw.match(/^(\d+)(?:andahalf)?\s*[_~>]+[\s_~>]*([^\s].*)$/i);
        if (!m) continue;

        const id = parseInt(m[1], 10);
        const body = m[2].replace(/^[_~>\s]+/, '').trim();
        if (!body) continue;

        let year = null, title = body, director = '';
        const trYr = body.match(/[\s,(\[-]+\b((?:18|19|20)\d{2})\b[\s)\]-]*$/);
        if (trYr) {
          year = parseInt(trYr[1], 10);
          title = body.slice(0, trYr.index).replace(/[,\s-]+$/, '').trim();
        } else {
          const anyYr = body.match(/\((\d{4})\)|\b((?:18|19|20)\d{2})\b/);
          if (anyYr) year = parseInt(anyYr[1] || anyYr[2], 10);
        }

        if (title.includes(',')) {
          const parts = title.split(',');
          const tail = parts[parts.length - 1].trim();
          const words = tail.split(/\s+/);
          if (
            words.length >= 2 && words.length <= 3 &&
            !/\d/.test(tail) &&
            !/\b(the|of|and|in|at|on|sun|star|evening|morning|new|york|kansas)\b/i.test(tail)
          ) {
            director = tail;
            title = parts.slice(0, -1).join(',').trim();
          }
        }

        const key = `${id}|${normKey(title)}`;
        if (seenExact.has(key)) continue;
        seenExact.add(key);

        out.push({ id, title, year, director });
      }
    }
  }
  return out.sort((a, b) => a.id - b.id);
}

async function lookupWikidata(title, knownYear) {
  const query = async q => {
    const url = `https://www.wikidata.org/w/api.php?action=wbsearchentities&search=${encodeURIComponent(q)}&language=en&limit=6&format=json`;
    const r = await fetch(url, { headers: { 'User-Agent': UA } });
    if (!r.ok) return [];
    return (await r.json()).search || [];
  };

  let hits = await query(knownYear ? `${title} ${knownYear} film` : `${title} film`);
  if (!hits.length) hits = await query(title);
  if (!hits.length) return null;

  const pick = hits.find(h => /film|movie|cinema|documentary/i.test(h.description || '')) || hits[0];
  const entRes = await fetch(
    `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${pick.id}&props=claims|labels&languages=en&format=json`,
    { headers: { 'User-Agent': UA } }
  );
  if (!entRes.ok) return null;
  const entity = (await entRes.json()).entities?.[pick.id];
  const claims = entity?.claims || {};

  const p31Ids = (claims.P31 || []).map(c => c.mainsnak?.datavalue?.value?.id);
  const looksFilm = /film|movie|documentary|cinema/i.test(pick.description || '') ||
    p31Ids.some(id => ['Q11424', 'Q24869', 'Q93204', 'Q202866', 'Q506240', 'Q5398426'].includes(id));
  if (!looksFilm) return null;

  let year = null;
  const p577 = claims.P577?.[0]?.mainsnak?.datavalue?.value?.time;
  if (p577) { const ym = p577.match(/(\d{4})/); if (ym) year = cleanYear(ym[1]); }

  let director = '';
  const dirId = claims.P57?.[0]?.mainsnak?.datavalue?.value?.id;
  if (dirId) {
    const dRes = await fetch(
      `https://www.wikidata.org/w/api.php?action=wbgetentities&ids=${dirId}&props=labels&languages=en&format=json`,
      { headers: { 'User-Agent': UA } }
    );
    if (dRes.ok) director = cleanDir((await dRes.json()).entities?.[dirId]?.labels?.en?.value || '');
  }

  return (year || director) ? { year, director, label: entity?.labels?.en?.value || '' } : null;
}

async function lookupNvidia(title, knownYear) {
  if (!NVIDIA_KEY) return null;
  try {
    const res = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${NVIDIA_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'nvidia/nemotron-3-ultra-550b-a55b',
        temperature: 0.1,
        max_tokens: 120,
        messages: [
          { role: 'system', content: 'Return ONLY valid JSON: {"year": 1999, "director": "Name", "title": "English Title"}. Use null for unknown year and "" for unknown director.' },
          { role: 'user', content: `Film title from archive: "${title}"${knownYear ? ` (year hint: ${knownYear})` : ''}` }
        ]
      })
    });
    if (!res.ok) return null;
    const content = (await res.json()).choices?.[0]?.message?.content || '';
    const jm = content.match(/\{[\s\S]*\}/);
    if (!jm) return null;
    const p = JSON.parse(jm[0]);
    const year = cleanYear(p.year), director = cleanDir(p.director);
    return (year || director) ? { year, director, label: p.title || '' } : null;
  } catch (_) {
    return null;
  }
}

async function main() {
  if (!fs.existsSync(HTML_PATH)) throw new Error(`Missing ${HTML_PATH}`);
  const html = fs.readFileSync(HTML_PATH, 'utf8');
  const existingRaw = fs.existsSync(JSON_PATH) ? JSON.parse(fs.readFileSync(JSON_PATH, 'utf8')) : {};

  // Index existing codex1991.json by BOTH oldId and normalized title for drift-safe realignment
  const oldById = new Map();
  const oldByTitle = new Map();
  for (const [k, v] of Object.entries(existingRaw)) {
    const oldId = parseInt(k, 10);
    if (!Number.isFinite(oldId) || !Array.isArray(v)) continue;
    const rec = { oldId, year: cleanYear(v[0]), director: cleanDir(v[1]), title: (v[2] || '').trim() };
    oldById.set(oldId, rec);
    const tk = normKey(rec.title);
    if (tk) {
      if (!oldByTitle.has(tk)) oldByTitle.set(tk, []);
      oldByTitle.get(tk).push(rec);
    }
  }

  // Rebuild codex aligned strictly to 1991.html's true IDs
  const parsed = parse1991Html(html);
  const codex = {};
  let lastOffset = 0;
  let realigned = 0;

  for (const item of parsed) {
    if (codex[item.id]) continue; // Keep primary entry per ID in JSON map
    let matched = null;

    // 1. Exact normalized title match near this ID (fixes historical +1..+6 Codex ID drift)
    const tk = normKey(item.title);
    const exactCandidates = oldByTitle.get(tk) || [];
    if (exactCandidates.length) {
      exactCandidates.sort((a, b) => Math.abs(a.oldId - item.id) - Math.abs(b.oldId - item.id));
      if (Math.abs(exactCandidates[0].oldId - item.id) <= 25 || exactCandidates.length === 1) {
        matched = exactCandidates[0];
      }
    }

    // 2. Fuzzy title overlap within ±10 IDs (catches typos / punctuation variants)
    if (!matched) {
      let bestScore = 0.55;
      for (let d = -4; d <= 10; d++) {
        const cand = oldById.get(item.id + d);
        if (!cand) continue;
        const sc = tokenOverlap(item.title, cand.title);
        if (sc > bestScore) { bestScore = sc; matched = cand; }
      }
    }

    // 3. Non-Latin title (Cyrillic/Greek/Arabic/CJK) matched via rolling offset from neighboring films
    if (!matched && isNonLatin(item.title)) {
      const cand = oldById.get(item.id + lastOffset) || oldById.get(item.id);
      if (cand) matched = cand;
    }

    if (matched) {
      if (matched.oldId !== item.id) realigned++;
      if (Math.abs(matched.oldId - item.id) <= 12) lastOffset = matched.oldId - item.id;
      codex[item.id] = [
        matched.year || cleanYear(item.year),
        matched.director || cleanDir(item.director),
        matched.title || item.title
      ];
    } else {
      codex[item.id] = [cleanYear(item.year), cleanDir(item.director), item.title];
    }
  }

  // Enrich newest missing entries first (so fresh pushes to 1991.html enrich immediately)
  const missingIds = Object.keys(codex)
    .map(Number)
    .filter(id => !codex[id][0] || !codex[id][1])
    .sort((a, b) => b - a)
    .slice(0, MAX_ENRICH);

  let enriched = 0;
  for (const id of missingIds) {
    const entry = codex[id];
    const [curYr, curDir, title] = entry;
    if (!title) continue;
    try {
      let hit = await lookupWikidata(title, curYr);
      if ((!hit || (!hit.year && !curYr) || (!hit.director && !curDir)) && NVIDIA_KEY) {
        const ai = await lookupNvidia(title, curYr);
        if (ai) hit = { year: hit?.year || ai.year, director: hit?.director || ai.director, label: hit?.label || ai.label };
      }
      if (hit) {
        let changed = false;
        if (!curYr && hit.year) { entry[0] = hit.year; changed = true; }
        if (!curDir && hit.director) { entry[1] = hit.director; changed = true; }
        if (changed) {
          enriched++;
          console.log(`Enriched #${id} "${title}" -> ${entry[0] || '?'} · ${entry[1] || '?'}`);
        }
      }
    } catch (err) {
      console.warn(`Lookup failed for #${id}:`, err.message);
    }
    await new Promise(r => setTimeout(r, 350));
  }

  const sortedIds = Object.keys(codex).map(Number).sort((a, b) => a - b);
  const lines = sortedIds.map(id => `${JSON.stringify(String(id))}:${JSON.stringify(codex[id])}`);
  fs.writeFileSync(JSON_PATH, `{\n${lines.join(',\n')}\n}\n`, 'utf8');

  console.log(`Synced ${sortedIds.length} entries from 1991.html | Realigned ${realigned} drifted IDs | Enriched ${enriched}/${missingIds.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
