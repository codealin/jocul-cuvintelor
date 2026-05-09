/* ══════════════════════════════════════════════
   WORD DATABASES (preserved from v1)
══════════════════════════════════════════════ */
const POOL = {
  4: [
    { cuvant: "ZBOR", definitie: "Deplasarea prin aer a unei ființe sau a unui aparat", note: "Verb și substantiv." },
    { cuvant: "CLAR", definitie: "Ușor de înțeles sau perceput, fără ambiguitate", note: "Antonim: obscur, neclar." },
    { cuvant: "BRAD", definitie: "Arbore conifer cu frunze aciculare, simbol al sărbătorilor de iarnă", note: "Simbol al Crăciunului." },
    { cuvant: "PLOP", definitie: "Arbore înalt și zvelt cu frunze tremurătoare, frecvent lângă ape", note: "Specific câmpiei." },
    { cuvant: "FRIG", definitie: "Temperatura scăzută resimțită neplăcut de organism", note: "Antonim: căldură." },
    { cuvant: "GLOB", definitie: "Corp sferic; model al planetei Pământ", note: "Jucărie sau instrument geografic." },
    { cuvant: "NORI", definitie: "Mase de vapori condensați suspendate în atmosferă", note: "Plural de la nor." },
    { cuvant: "STEA", definitie: "Corp ceresc care emite lumină proprie, vizibil pe cerul nopții", note: "Atenție la ordinea literelor." },
  ],
  5: [
    { cuvant: "MUNTE", definitie: "Formă de relief ridicată, cu versanți abrupți și vârf ascuțit", note: "Exemplu: Carpații." },
    { cuvant: "CERUL", definitie: "Spațiul de deasupra pământului, bolta aparent albastră", note: "Cu articol hotărât." },
    { cuvant: "MAREA", definitie: "Întindere vastă de apă sărată, mai mică decât oceanul", note: "Cu articol hotărât feminin." },
    { cuvant: "FAGUL", definitie: "Arbore de pădure cu frunze late și scoarță netedă cenușie", note: "Specific pădurilor de deal." },
    { cuvant: "FLAUT", definitie: "Instrument muzical de suflat, cu sunet melodios și dulce", note: "Se cântă transversal." },
    { cuvant: "NORUL", definitie: "Masa de vapori de apă condensați suspendată în atmosferă", note: "Singular articulat." },
    { cuvant: "SOLAR", definitie: "Legat de soare sau de energia produsă de acesta", note: "Adjectiv. Energie solară." },
    { cuvant: "ARBOR", definitie: "Plantă lemnoasă cu trunchi, ramuri și coroană bine definită", note: "Formă veche pentru arbore." },
  ],
  6: [
    { cuvant: "VAPORI", definitie: "Starea gazoasă a unui lichid, obținută prin evaporare sau fierbere", note: "Plural de la vapor." },
    { cuvant: "TURNAT", definitie: "Acțiunea de a vărsa un lichid dintr-un recipient în altul", note: "Participiu trecut." },
    { cuvant: "LUMINA", definitie: "Radiație electromagnetică vizibilă ochiului uman, produsă de soare", note: "Substantiv cu articol." },
    { cuvant: "TOCMAI", definitie: "Adverb care exprimă exactitate sau intensificare a unui fapt", note: "Sinonim: fix, exact." },
    { cuvant: "STANCA", definitie: "Masă mare de rocă, de obicei în munte sau lângă mare", note: "Stâncă – fără diacritice." },
    { cuvant: "CAMPUL", definitie: "Suprafată plană deschisă, cultivată sau naturală, lipsită de pădure", note: "Câmpul – cu articol." },
    { cuvant: "PESCAR", definitie: "Persoana care prinde pești, ca meserie sau activitate de timp liber", note: "Substantiv de agent." },
    { cuvant: "BARJELE", definitie: "Ambarcațiuni plate folosite pentru transportul mărfurilor pe ape interioare", note: "Plural articulat de la barjă." },
  ],
  7: [
    { cuvant: "TRACTOR", definitie: "Vehicul agricol puternic folosit la tractarea utilajelor în câmp", note: "Specific agriculturii." },
    { cuvant: "PICTURA", definitie: "Artă vizuală de a crea imagini cu ajutorul culorilor pe o suprafață", note: "Accentul pe u." },
    { cuvant: "CAMPION", definitie: "Persoana care a câștigat primul loc într-o competiție sau concurs", note: "Din fr. champion." },
    { cuvant: "RACOARE", definitie: "Senzație plăcută de temperatură ușor scăzută și răcoritoare", note: "Sinonim: răcoare." },
    { cuvant: "BALOANE", definitie: "Obiecte sferice din cauciuc sau latex, umflate cu aer sau gaz", note: "Plural de la balon." },
    { cuvant: "LANTERN", definitie: "Sursă portabilă de lumină, cu baterie sau combustibil", note: "Lampă de buzunar." },
    { cuvant: "SOARELE", definitie: "Steaua din centrul sistemului solar care dă lumină și căldură Pământului", note: "Cu articol hotărât." },
    { cuvant: "LACUSTE", definitie: "Insecte cu salturi mari, care pot forma roiuri devastatoare de culturi", note: "Lăcuste – plural." },
  ],
  8: [
    { cuvant: "CALENDAR", definitie: "Sistem de organizare a timpului în zile, săptămâni, luni și ani", note: "Accentul pe a." },
    { cuvant: "SPECTRUL", definitie: "Gama completă de culori obținute prin descompunerea luminii albe", note: "Spectrul vizibil." },
    { cuvant: "ALBINELE", definitie: "Insecte sociale producătoare de miere, care trăiesc în colonii organizate", note: "Plural articulat de la albină." },
    { cuvant: "POVESTEA", definitie: "Narațiune literară cu personaje și întâmplări, reală sau imaginară", note: "Cu articol feminin." },
    { cuvant: "TOAMNELE", definitie: "Anotimpul dintre vară și iarnă, cu frunze colorate, la plural articulat", note: "Plural articulat de la toamnă." },
    { cuvant: "DANSATOR", definitie: "Persoana care dansează cu măiestrie, profesional sau amator", note: "Substantiv de agent." },
    { cuvant: "CATALOAGE", definitie: "Liste sistematice de produse, articole sau informații, structurate după criterii", note: "Plural de la catalog." },
    { cuvant: "FLACARIA", definitie: "Vâlvătaia luminoasă a focului, flacara vizibilă a unui corp în ardere", note: "Flacăra – cu articol." },
  ],
  9: [
    { cuvant: "ALBASTRUL", definitie: "Culoarea cerului senin și a mării adânci, între verde și violet în spectru", note: "Accentul pe a." },
    { cuvant: "PASTORALE", definitie: "Creații artistice sau muzicale cu teme din viața ciobanilor și naturii", note: "Adjectiv/substantiv plural." },
    { cuvant: "PADURARUL", definitie: "Persoana care supraveghează și administrează o pădure sau rezervație forestieră", note: "Substantiv cu articol." },
    { cuvant: "PRIMAVARA", definitie: "Anotimpul renașterii naturii, cu flori și temperaturi blânde, după iarnă", note: "Fără articol." },
    { cuvant: "DRAGOSTEA", definitie: "Sentimentul profund de afecțiune față de o persoană sau un lucru drag", note: "Cu articol." },
    { cuvant: "FLUVIALUL", definitie: "Legat de fluviu sau de procesele hidrografice ale râurilor mari", note: "Adjectiv articulat." },
    { cuvant: "COLTISORUL", definitie: "Diminutiv afectuos de la colț, un loc mic și ascuns, drăguț", note: "Diminutiv cu articol." },
    { cuvant: "CAMPIOANA", definitie: "Feminin de la campion: cea care a câștigat primul loc într-o competiție", note: "Forma feminină." },
  ],
  10: [
    { cuvant: "PRIMAVEREI", definitie: "Anotimpul renașterii naturii, al florilor și temperaturii blânde, la genitiv", note: "Genitiv de la primăvară." },
    { cuvant: "INOVATORUL", definitie: "Persoana care aduce idei noi, originale, schimbând modul de a face lucruri", note: "Substantiv cu articol." },
    { cuvant: "RAZBOAIELE", definitie: "Conflicte armate de mare amploare între state, cu pierderi umane uriașe", note: "Plural articulat de la război." },
    { cuvant: "CONDUCTORUL", definitie: "Persoana care conduce un grup, o organizație sau un vehicle de transport", note: "Substantiv cu articol." },
    { cuvant: "FOTOGRAFIEI", definitie: "Arta și tehnica de a fixa imagini cu ajutorul luminii pe un suport sensibil", note: "Genitiv de la fotografie." },
    { cuvant: "LUMINATORUL", definitie: "Cel care luminează sau aduce lumina; deschidere în tavan pentru lumina naturală", note: "Substantiv cu articol." },
    { cuvant: "AVENTURIERA", definitie: "Femeie care caută aventuri, riscuri și experiențe neobișnuite", note: "Forma feminină cu articol." },
    { cuvant: "CROITORULUI", definitie: "Meșteșugarul care croiește și coase haine, la genitiv articulat", note: "Genitiv articulat." },
  ],
};

/* ══════════════════════════════════════════════
   BROADCAST CHANNEL + MODE DETECTION
   Detectare automată: file:// → BroadcastChannel
                       http:// → WebSocket (server mode)
══════════════════════════════════════════════ */
const IS_PRESENTER = location.hash === '#presenter';

function createWSBridge() {
  const protocol = location.protocol === 'https:' ? 'wss:' : 'ws:';
  const url = `${protocol}//${location.host}`;
  let socket = null;
  const listeners = [];
  const queue = [];

  const bridge = {
    // BroadcastChannel-compatible API
    set onmessage(fn) { this.addEventListener('message', fn); },
    addEventListener(type, fn) {
      if (type === 'message') listeners.push(fn);
    },
    postMessage(data) {
      const str = JSON.stringify(data);
      if (socket && socket.readyState === WebSocket.OPEN) socket.send(str);
      else queue.push(str);
    }
  };

  function dispatch(data) {
    const evt = { data };
    for (const fn of listeners) { try { fn(evt); } catch (_) {} }
  }

  function connect() {
    socket = new WebSocket(url);
    socket.onopen = () => {
      queue.splice(0).forEach(msg => socket.send(msg));
    };
    socket.onmessage = (e) => {
      try { dispatch(JSON.parse(e.data)); } catch (_) {}
    };
    socket.onclose = () => { socket = null; setTimeout(connect, 2000); };
    socket.onerror = () => {};
  }

  connect();
  return bridge;
}

const BC = location.protocol === 'file:'
  ? new BroadcastChannel('joc_cuvinte')
  : createWSBridge();

/* ══════════════════════════════════════════════
   GAME STATE
══════════════════════════════════════════════ */

// Players: [{name, score, timerSecs, words}]
// words[] is populated in Classic mode; Arcade uses shared arcadeWords
let players = [];
let currentPlayerIdx = 0; // Classic: index of active player; Arcade: derived from wordIdx
let gameMode = 'classic';
let teamMode = false;
let playerCount = 3;

let uploadedWords = null;
let loadedCategories = []; // [{name, words}] from folder picker
let selectedCategories = new Set();

let arcadeWords = [];     // Arcade mode: shared 14 words
let sessionWords = [];    // Active word list for current context
let currentWordIdx = 0;
let revealedLetters = [];
let shownLetters = [];
let wordPotential = 0;

let mainTimerInterval = null;
let mainTimerRunning = false;
let mainTimerExpired = false;
let stopTimerSecs = 30;
let stopTimerInterval = null;
let stopActive = false;
let stopWasPressedThisWord = false;
let stopPressedByName = '';
let gamePhase = 'idle';

/* ══════════════════════════════════════════════
   AUDIO — Web Audio API (no files needed)
══════════════════════════════════════════════ */
let _audioCtx = null;
function getAudioCtx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return _audioCtx;
}

function playTick(urgent = false) {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.value = urgent ? 1100 : 820;
    gain.gain.setValueAtTime(urgent ? 0.25 : 0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (urgent ? 0.06 : 0.09));
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.1);
  } catch(e) {}
}

/* ══════════════════════════════════════════════
   SLOT ANIMATION
══════════════════════════════════════════════ */
const SLOT_CHARS = 'ABCDEFGHIJKLMNOPRSTUVWXYZ';

// Reveals hidden letters one-by-one with a slot spin effect.
// Already-hint-revealed letters skip animation (already visible).
// callback() is called when all letters have landed.
function revealWithSlots(word, onComplete) {
  // Identify which indices need animation (not already shown)
  const toAnimate = [];
  for (let i = 0; i < word.cuvant.length; i++) {
    if (!shownLetters[i]) toAnimate.push(i);
    shownLetters[i] = true; // mark all as shown now
  }

  if (toAnimate.length === 0) { onComplete(); return; }

  const SPIN_DURATION = 380;  // ms of random spinning per letter
  const STAGGER = 110;        // ms between each letter starting to land

  let settled = 0;

  toAnimate.forEach((boxIdx, order) => {
    const box = document.getElementById(`lb-${boxIdx}`);
    if (!box) { settled++; if (settled === toAnimate.length) onComplete(); return; }

    const correctChar = word.cuvant[boxIdx];
    const landAt = SPIN_DURATION + order * STAGGER;

    // Spin phase
    const spinInterval = setInterval(() => {
      box.textContent = SLOT_CHARS[Math.floor(Math.random() * SLOT_CHARS.length)];
      box.classList.add('slot-spinning');
    }, 55);

    // Land on correct letter
    setTimeout(() => {
      clearInterval(spinInterval);
      box.textContent = correctChar;
      box.classList.remove('slot-spinning');
      box.classList.add('revealed', 'slot-landed');
      // Remove landing flash class after animation
      setTimeout(() => box.classList.remove('slot-landed'), 400);
      settled++;
      if (settled === toAnimate.length) onComplete();
    }, landAt);
  });
}

/* ══════════════════════════════════════════════
   HELPERS
══════════════════════════════════════════════ */
function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${s.toString().padStart(2,'0')}`;
}

function showNotif(text, type = 'info', duration = 2000) {
  const el = document.getElementById('notification');
  el.textContent = text;
  el.className = 'show ' + type;
  clearTimeout(el._timer);
  el._timer = setTimeout(() => { el.className = ''; }, duration);
}

// Who is currently playing (works for both modes)
function activePlayer() {
  if (gameMode === 'arcade') return players[currentWordIdx % players.length];
  return players[currentPlayerIdx];
}

// Next player (for Arcade display)
function nextPlayerInArcade() {
  if (players.length === 0) return null;
  const nextWordIdx = currentWordIdx + 1;
  if (nextWordIdx >= sessionWords.length) return null;
  return players[nextWordIdx % players.length];
}

/* ══════════════════════════════════════════════
   FILE UPLOAD
══════════════════════════════════════════════ */
function handleFileUpload(input) {
  const file = input.files[0];
  if (!file) return;

  const statusEl = document.getElementById('uploadStatus');
  const zone = document.getElementById('uploadZone');

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      let data = JSON.parse(e.target.result);
      if (!Array.isArray(data)) {
        if (data.words && Array.isArray(data.words)) data = data.words;
        else if (data.cuvinte && Array.isArray(data.cuvinte)) data = data.cuvinte;
        else throw new Error('JSON-ul trebuie să fie un array');
      }
      const valid = data.filter(w => w.cuvant && w.definitie);
      if (valid.length < 14) throw new Error(`Prea puține cuvinte valide: ${valid.length} (min. 14)`);
      uploadedWords = valid.map(w => ({
        cuvant: String(w.cuvant).toUpperCase().trim(),
        definitie: String(w.definitie).trim(),
        note: w.note ? String(w.note).trim() : '',
      }));
      // Clear category selection — single file takes precedence
      loadedCategories = [];
      selectedCategories = new Set();
      const catSection = document.getElementById('categoryCardsSection');
      if (catSection) catSection.style.display = 'none';

      statusEl.textContent = `✓ ${uploadedWords.length} cuvinte încărcate — ${file.name}`;
      statusEl.className = 'upload-status ok';
      zone.style.borderColor = 'var(--green)';
    } catch (err) {
      uploadedWords = null;
      statusEl.textContent = `✗ ${err.message}`;
      statusEl.className = 'upload-status err';
      zone.style.borderColor = 'var(--red)';
    }
  };
  reader.readAsText(file, 'UTF-8');
}

// Drag & drop
(function() {
  const zone = document.getElementById('uploadZone');
  if (!zone) return;
  zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('drag-over'); });
  zone.addEventListener('dragleave', () => zone.classList.remove('drag-over'));
  zone.addEventListener('drop', e => {
    e.preventDefault();
    zone.classList.remove('drag-over');
    const file = e.dataTransfer.files[0];
    if (file) {
      const input = document.getElementById('jsonFileInput');
      const dt = new DataTransfer();
      dt.items.add(file);
      input.files = dt.files;
      handleFileUpload(input);
    }
  });
})();

/* ══════════════════════════════════════════════
   CATEGORY FOLDER PICKER
══════════════════════════════════════════════ */
async function openWordFolder() {
  if (!window.showDirectoryPicker) {
    showNotif('Browserul tău nu suportă această funcție. Folosește Chrome, Edge sau Brave.', 'neg', 4000);
    return;
  }
  try {
    const dirHandle = await window.showDirectoryPicker({ mode: 'read' });
    const cats = [];
    for await (const [name, handle] of dirHandle.entries()) {
      if (handle.kind !== 'file' || !name.toLowerCase().endsWith('.json')) continue;
      try {
        const file = await handle.getFile();
        const text = await file.text();
        let data = JSON.parse(text);
        if (!Array.isArray(data)) {
          if (data.words && Array.isArray(data.words)) data = data.words;
          else if (data.cuvinte && Array.isArray(data.cuvinte)) data = data.cuvinte;
          else continue;
        }
        const valid = data.filter(w => w.cuvant && w.definitie).map(w => ({
          cuvant: String(w.cuvant).toUpperCase().trim(),
          definitie: String(w.definitie).trim(),
          note: w.note ? String(w.note).trim() : '',
        }));
        if (valid.length === 0) continue;
        const rawName = name.replace(/\.json$/i, '');
        const displayName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
        cats.push({ name: displayName, words: valid });
      } catch (e) { /* skip invalid files */ }
    }
    if (cats.length === 0) {
      showNotif('Niciun fișier JSON valid găsit în folder', 'neg', 3000);
      return;
    }
    // Reset single-file upload state
    uploadedWords = null;
    const statusEl = document.getElementById('uploadStatus');
    if (statusEl) { statusEl.textContent = 'drag & drop sau click'; statusEl.className = 'upload-status'; }
    const zone = document.getElementById('uploadZone');
    if (zone) zone.style.borderColor = '';

    loadedCategories = cats;
    selectedCategories = new Set(cats.map(c => c.name));
    renderCategoryCards();
    showNotif(`${cats.length} categorii încărcate`, 'pos', 2500);
  } catch (e) {
    if (e.name !== 'AbortError') showNotif('Eroare la deschiderea folderului', 'neg', 3000);
  }
}

function renderCategoryCards() {
  const section = document.getElementById('categoryCardsSection');
  const grid = document.getElementById('categoryCardsGrid');
  if (!section || !grid) return;
  section.style.display = 'flex';

  grid.innerHTML = loadedCategories.map(cat => {
    const sel = selectedCategories.has(cat.name);
    const safe = cat.name.replace(/&/g,'&amp;').replace(/'/g,'&#39;').replace(/"/g,'&quot;');
    return `<div class="cat-card${sel ? ' selected' : ''}" onclick="toggleCategory('${safe}')">
      <div class="cat-card-name">${cat.name}</div>
      <div class="cat-card-count">${cat.words.length} cuvinte</div>
    </div>`;
  }).join('');

  const n = selectedCategories.size, total = loadedCategories.length;
  document.getElementById('catStatus').textContent =
    n === total ? 'Toate categoriile selectate' :
    n === 0     ? 'Nicio categorie selectată'  :
    `${n} / ${total} categorii selectate`;
}

function toggleCategory(name) {
  if (selectedCategories.has(name)) {
    if (selectedCategories.size > 1) selectedCategories.delete(name);
    else showNotif('Cel puțin o categorie trebuie selectată', 'neg', 2000);
  } else {
    selectedCategories.add(name);
  }
  renderCategoryCards();
}

function selectAllCategories() {
  selectedCategories = new Set(loadedCategories.map(c => c.name));
  renderCategoryCards();
}

function deselectAllCategories() {
  if (loadedCategories.length > 0) {
    selectedCategories = new Set([loadedCategories[0].name]);
    renderCategoryCards();
  }
}

function buildUploadedWordsFromCategories() {
  const selected = loadedCategories.filter(c => selectedCategories.has(c.name));
  if (selected.length === 0) return;

  // Shuffle each category independently
  const shuffled = selected.map(cat => {
    const arr = [...cat.words];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  });

  // Interleave: cat1[0], cat2[0], ..., cat1[1], cat2[1], ...
  const merged = [];
  const maxLen = Math.max(...shuffled.map(a => a.length));
  for (let i = 0; i < maxLen; i++) {
    for (const arr of shuffled) {
      if (i < arr.length) merged.push(arr[i]);
    }
  }
  uploadedWords = merged;
}

/* ══════════════════════════════════════════════
   WORD GENERATION
══════════════════════════════════════════════ */
const DIST_CLASSIC = [4,4,5,5,6,6,7,7,8,8,9,9,10,10];
const DIST_ARCADE  = [4,5,6,7,8,9,10];

function generateFromPool(usedSet, distribution = DIST_CLASSIC) {
  const words = [];
  for (const len of distribution) {
    const pool = POOL[len].filter(w => !usedSet.has(w.cuvant));
    if (pool.length === 0) {
      const any = POOL[len][Math.floor(Math.random() * POOL[len].length)];
      words.push(any);
    } else {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      usedSet.add(pick.cuvant);
      words.push(pick);
    }
  }
  return words;
}

function generateFromJSON(usedSet, distribution = DIST_CLASSIC) {
  const result = [];
  for (const len of distribution) {
    const wlen = w => [...w.cuvant].length;
    const candidates = uploadedWords.filter(w => wlen(w) === len && !usedSet.has(w.cuvant));
    if (candidates.length === 0) {
      // Prefer reusing a word of the correct length over picking wrong-length word
      const correctLen = uploadedWords.filter(w => wlen(w) === len);
      if (correctLen.length > 0) {
        result.push(correctLen[Math.floor(Math.random() * correctLen.length)]);
        continue;
      }
      // Last resort: any unused word (wrong length)
      const fallback = uploadedWords.filter(w => !usedSet.has(w.cuvant));
      if (fallback.length > 0) {
        const pick = fallback[Math.floor(Math.random() * fallback.length)];
        usedSet.add(pick.cuvant);
        result.push(pick);
      } else if (uploadedWords.length > 0) {
        result.push(uploadedWords[Math.floor(Math.random() * uploadedWords.length)]);
      }
    } else {
      const pick = candidates[Math.floor(Math.random() * candidates.length)];
      usedSet.add(pick.cuvant);
      result.push(pick);
    }
  }
  return result;
}

function generateOneSet(usedSet, distribution = DIST_CLASSIC) {
  return uploadedWords ? generateFromJSON(usedSet, distribution) : generateFromPool(usedSet, distribution);
}

/* ══════════════════════════════════════════════
   START SCREEN
══════════════════════════════════════════════ */
function goToPlayerSetup() {
  if (loadedCategories.length > 0) buildUploadedWordsFromCategories();
  document.getElementById('startScreen').style.display = 'none';
  const ps = document.getElementById('playerSetupScreen');
  ps.style.display = 'flex';
  renderPlayerSetup();
  loadQRCode();
  if (_lobbyPlayersData.length > 0) renderLobbyBubbles(_lobbyPlayersData);
}

function loadQRCode() {
  if (location.protocol === 'file:') return;
  const theme = localStorage.getItem('joc_theme') || 'clasic';
  fetch(`/api/info?theme=${theme}`)
    .then(r => r.json())
    .then(info => {
      const widget = document.getElementById('qrWidget');
      const img    = document.getElementById('qrImg');
      const urlEl  = document.getElementById('qrUrl');
      if (!widget || !info.qrDataUrl) return;
      img.src = info.qrDataUrl;
      urlEl.textContent = info.playerUrl;
      widget.style.display = 'flex';
    })
    .catch(() => {});
}

function hideQRCode() {
  const w = document.getElementById('qrWidget');
  if (w) w.style.display = 'none';
}

function backToWordList() {
  document.getElementById('playerSetupScreen').style.display = 'none';
  document.getElementById('startScreen').style.display = 'flex';
  hideQRCode();
  hideLobbyBubbles();
}

/* ══════════════════════════════════════════════
   PLAYER SETUP
══════════════════════════════════════════════ */
const MODE_DESC = {
  classic: 'Fiecare jucător joacă câte o rundă completă de 14 cuvinte.<br>La final, clasamentul decide câștigătorul.',
  arcade: 'Jucătorii se rotesc la fiecare cuvânt în ordine.<br>Fiecare are propriul timp. Mai dinamic, mai competitiv!'
};

function setMode(mode) {
  gameMode = mode;
  document.getElementById('btnModeClassic').classList.toggle('active', mode === 'classic');
  document.getElementById('btnModeArcade').classList.toggle('active', mode === 'arcade');
  document.getElementById('modeDesc').innerHTML = MODE_DESC[mode];
}

function setPlayerMode(mode) {
  teamMode = (mode === 'team');
  document.getElementById('btnModeIndividual').classList.toggle('active', !teamMode);
  document.getElementById('btnModeTeam').classList.toggle('active', teamMode);
  document.getElementById('playerCountLabel').textContent = teamMode ? 'Număr de echipe' : 'Număr de jucători';
  document.getElementById('playersGridLabel').textContent = teamMode ? 'Configurare echipe' : 'Nume jucători';
  renderPlayerInputs();
}

function changePlayerCount(delta) {
  playerCount = Math.max(2, Math.min(8, playerCount + delta));
  document.getElementById('playerCountDisplay').textContent = playerCount;
  renderPlayerInputs();
}

function renderPlayerInputs() {
  const grid = document.getElementById('playersGrid');

  // Save current values before clearing
  const savedIndividual = Array.from(grid.querySelectorAll('.player-input-row .player-name-input')).map(i => i.value);
  const savedTeamNames  = Array.from(grid.querySelectorAll('.team-name-input')).map(i => i.value);
  const savedMembers    = Array.from(grid.querySelectorAll('.team-slot')).map(slot =>
    Array.from(slot.querySelectorAll('.team-member-input')).map(i => i.value)
  );

  grid.innerHTML = '';

  if (!teamMode) {
    const defaultNames = ['Alin','Bogdan','Cristi','Diana','Elena','Florin','Gabi','Horia'];
    for (let i = 0; i < playerCount; i++) {
      const row = document.createElement('div');
      row.className = 'player-input-row';
      row.innerHTML = `
        <div class="player-num-badge">${i+1}</div>
        <input class="player-name-input" type="text" placeholder="${defaultNames[i]}" maxlength="20" />
      `;
      grid.appendChild(row);
      if (savedIndividual[i]) row.querySelector('input').value = savedIndividual[i];
    }
  } else {
    const defaultTeams = ['Echipa A','Echipa B','Echipa C','Echipa D','Echipa E','Echipa F','Echipa G','Echipa H'];
    for (let i = 0; i < playerCount; i++) {
      const slot = document.createElement('div');
      slot.className = 'team-slot';
      slot.innerHTML = `
        <div class="team-name-row">
          <div class="player-num-badge">${i+1}</div>
          <input class="player-name-input team-name-input" type="text" placeholder="${defaultTeams[i] || 'Echipa ' + (i+1)}" maxlength="24" />
        </div>
        <div class="team-members" id="teamMembers${i}">
          <div class="team-member-row">
            <input class="team-member-input" type="text" placeholder="Jucător 1" maxlength="20" />
            <button class="add-member-btn" onclick="addMember(${i})">+</button>
          </div>
        </div>
        <div class="team-lobby-row" id="teamLobbyRow${i}" style="display:none;"></div>
      `;
      grid.appendChild(slot);
      if (savedTeamNames[i]) slot.querySelector('.team-name-input').value = savedTeamNames[i];
      // Restore members
      const members = (savedMembers[i] || []).filter(Boolean);
      const container = document.getElementById(`teamMembers${i}`);
      if (members.length > 0) {
        container.querySelector('.team-member-input').value = members[0];
        for (let j = 1; j < members.length; j++) {
          addMember(i);
          const allInputs = container.querySelectorAll('.team-member-input');
          allInputs[allInputs.length - 1].value = members[j];
        }
      }
    }
  }
}

function addMember(teamIdx) {
  const container = document.getElementById(`teamMembers${teamIdx}`);
  const rows = container.querySelectorAll('.team-member-row');
  const newNum = rows.length + 1;
  // Remove + button from last row
  rows[rows.length - 1].querySelector('.add-member-btn').remove();
  // Add new row with +
  const newRow = document.createElement('div');
  newRow.className = 'team-member-row';
  newRow.innerHTML = `
    <input class="team-member-input" type="text" placeholder="Jucător ${newNum}" maxlength="20" />
    <button class="add-member-btn" onclick="addMember(${teamIdx})">+</button>
  `;
  container.appendChild(newRow);
  newRow.querySelector('input').focus();
}

function renderPlayerSetup() {
  document.getElementById('playerCountDisplay').textContent = playerCount;
  renderPlayerInputs();
  if (_lobbyPlayersData.length > 0) renderLobby(_lobbyPlayersData);
}

function openPresenterWindow() {
  const url = location.href.split('#')[0] + '#presenter';
  window.open(url, '_blank', 'width=900,height=700');
}

function goToReadyFromSetup() {
  players = [];

  if (!teamMode) {
    const inputs = document.querySelectorAll('.player-name-input');
    inputs.forEach(inp => {
      const name = inp.value.trim();
      if (!name) return; // skip empty slots
      players.push({ name, score: 0, timerSecs: 240, words: [], members: null, hintsTotal: 0 });
    });
    if (players.length === 0) {
      showNotif('Adaugă cel puțin un jucător', 'neg', 2500);
      return;
    }
  } else {
    const hasTeamAssignments = _lobbyPlayersData.some(p => p.team);
    const slots = document.querySelectorAll('.team-slot');
    slots.forEach((slot, i) => {
      const teamName = _publishedTeams[i] || slot.querySelector('.team-name-input')?.value.trim() || `Echipa ${i + 1}`;
      let members;
      if (hasTeamAssignments) {
        // Auto-populate from phone team selection — team size determined by who joined
        members = _lobbyPlayersData.filter(p => p.team === teamName).map(p => p.name);
        if (members.length === 0) return; // skip teams with no phone players
      } else {
        // Manual member inputs
        const memberInputs = slot.querySelectorAll('.team-member-input');
        members = Array.from(memberInputs).map(inp => inp.value.trim()).filter(Boolean);
      }
      players.push({ name: teamName, score: 0, timerSecs: 240, words: [], members: members.length > 0 ? members : null, hintsTotal: 0 });
    });
    if (players.length === 0) {
      showNotif('Niciun jucător nu s-a alăturat unei echipe', 'neg', 2500);
      return;
    }
  }

  // Generate words
  if (gameMode === 'classic') {
    const usedSet = new Set();
    players.forEach(p => { p.words = generateOneSet(usedSet, DIST_CLASSIC); });
  } else {
    // Each player gets 7 words (one per length). Words interleaved: p0r0, p1r0, p2r0, p0r1...
    const usedSet = new Set();
    players.forEach(p => { p.words = generateOneSet(usedSet, DIST_ARCADE); });
    sessionWords = [];
    const rounds = DIST_ARCADE.length; // 7
    for (let round = 0; round < rounds; round++) {
      for (const p of players) {
        if (p.words[round]) sessionWords.push(p.words[round]);
      }
    }
  }

  // Show ready screen for first player
  currentPlayerIdx = 0;
  currentWordIdx = 0;
  // Attach avatar from lobby data (name match)
  players.forEach(p => {
    const match = _lobbyPlayersData.find(lp => lp.name.toUpperCase() === p.name.toUpperCase());
    p.avatar = match ? match.avatar : null;
  });

  document.getElementById('playerSetupScreen').style.display = 'none';
  hideQRCode();
  hideLobbyBubbles();
  showReadyScreen(0);
}

function showReadyScreen(playerIdx) {
  const p = players[playerIdx];
  document.getElementById('readyPlayerLabel').textContent =
    gameMode === 'classic'
      ? `${teamMode ? 'ECHIPA' : 'JUCĂTORUL'} ${playerIdx + 1} DIN ${players.length}`
      : 'PORNIRE JOC';
  document.getElementById('readyPlayerName').textContent = p.name;
  document.getElementById('readyTimerPreview').textContent = `⏱ ${formatTime(p.timerSecs)}`;
  document.getElementById('readyScreen').style.display = 'flex';
}

function backToPlayerSetup() {
  document.getElementById('readyScreen').style.display = 'none';
  document.getElementById('playerSetupScreen').style.display = 'flex';
}

function startPlayerRound() {
  document.getElementById('readyScreen').style.display = 'none';

  if (gameMode === 'classic') {
    sessionWords = players[currentPlayerIdx].words;
    currentWordIdx = 0;
  } else {
    // sessionWords already built and interleaved in goToReadyFromSetup
    // currentWordIdx already set (0 at game start)
  }

  const gs = document.getElementById('gameScreen');
  gs.style.display = 'flex';

  score = 0; // reset display score; actual score per player tracked separately
  mainTimerRunning = false;
  buildProgressDots();
  updateScoreDisplay();
  updateMainTimer();
  updatePlayerLabel();
  updateNextPlayerRow();

  loadWordPaused(currentWordIdx);
  showBetweenMsg('▶ PREGĂTIT', 'ready');
  gamePhase = 'between';
  updatePresenterButtons();
  broadcastState();
}

// Alias for readability (score in the active player context)
let score = 0; // mirrors activePlayer().score for display

/* ══════════════════════════════════════════════
   PROGRESS DOTS
══════════════════════════════════════════════ */
function buildProgressDots() {
  const row = document.getElementById('progressDots');
  row.innerHTML = '';
  sessionWords.forEach((_, i) => {
    const d = document.createElement('div');
    d.className = 'progress-dot';
    d.id = `dot-${i}`;
    row.appendChild(d);
  });
  updateProgressDots();
}

function updateProgressDots() {
  sessionWords.forEach((_, i) => {
    const d = document.getElementById(`dot-${i}`);
    if (!d) return;
    d.className = 'progress-dot' + (i < currentWordIdx ? ' done' : i === currentWordIdx ? ' current' : '');
  });
}

/* ══════════════════════════════════════════════
   TV DISPLAY HELPERS
══════════════════════════════════════════════ */
function updatePlayerLabel() {
  const p = activePlayer();
  if (!p) return;
  document.getElementById('currentPlayerLabel').textContent = p.name.toUpperCase();
  const avatarEl = document.getElementById('topBarAvatar');
  if (avatarEl) {
    const idx = p.avatar && p.avatar.animal != null ? p.avatar.animal : null;
    if (idx !== null && ANIMAL_SVGS[idx]) {
      avatarEl.innerHTML = ANIMAL_SVGS[idx];
      avatarEl.style.display = 'block';
    } else {
      avatarEl.style.display = 'none';
    }
  }
}

function updateNextPlayerRow() {
  const row = document.getElementById('nextPlayerRow');
  const next = nextPlayerInArcade();
  if (gameMode === 'arcade' && next) {
    row.style.display = 'block';
    document.getElementById('nextPlayerNameDisplay').textContent = next.name;
  } else {
    row.style.display = 'none';
  }
}

/* ══════════════════════════════════════════════
   WORD LOADING
══════════════════════════════════════════════ */
function loadWordPaused(idx) {
  if (idx >= sessionWords.length) { endPlayerOrGame(); return; }

  const word = sessionWords[idx];
  const len = word.cuvant.length;

  revealedLetters = new Array(len).fill(false);
  shownLetters = new Array(len).fill(false);
  wordPotential = len * 100;
  stopWasPressedThisWord = false;
  stopPressedByName = '';
  mainTimerExpired = false;

  document.getElementById('definitionText').textContent = '';
  document.getElementById('definitionText').dataset.pending = word.definitie;
  if (gameMode === 'arcade') {
    const round = Math.floor(idx / players.length) + 1;
    document.getElementById('wordCounter').textContent = `TURA ${round} / ${DIST_ARCADE.length}`;
  } else {
    document.getElementById('wordCounter').textContent = `CUVÂNTUL ${idx+1} / ${sessionWords.length}`;
  }

  const row = document.getElementById('lettersRow');
  row.innerHTML = '';
  for (let i = 0; i < len; i++) {
    const box = document.createElement('div');
    box.className = 'letter-box';
    box.id = `lb-${i}`;
    box.textContent = word.cuvant[i];
    row.appendChild(box);
  }

  document.getElementById('betweenMsg').style.display = 'none';
  updateProgressDots();
  updatePlayerLabel();
  updateNextPlayerRow();
  score = activePlayer()?.score || 0;
  updateScoreDisplay();
}

function loadWord(idx) {
  loadWordPaused(idx);
  const el = document.getElementById('definitionText');
  el.textContent = el.dataset.pending || '';
  gamePhase = 'playing';
  updatePresenterButtons();
}

function updateLetterBoxes() {
  for (let i = 0; i < shownLetters.length; i++) {
    const box = document.getElementById(`lb-${i}`);
    if (!box) continue;
    if (shownLetters[i]) {
      box.classList.add('revealed');
      box.classList.remove('hint-revealed');
    } else if (revealedLetters[i]) {
      box.classList.add('hint-revealed');
      box.classList.remove('revealed');
    } else {
      box.classList.remove('revealed', 'hint-revealed');
    }
  }
}

/* ══════════════════════════════════════════════
   TIMERS
══════════════════════════════════════════════ */
function startMainTimer() {
  if (mainTimerRunning) return;
  mainTimerRunning = true;
  clearInterval(mainTimerInterval);
  mainTimerInterval = setInterval(() => {
    if (stopActive || gamePhase !== 'playing') return;
    const p = activePlayer();
    if (!p) return;
    if (p.timerSecs <= 0) {
      clearInterval(mainTimerInterval);
      mainTimerRunning = false;
      mainTimerExpired = true;
      showNotif('TIMP EXPIRAT — 30 secunde pentru răspuns!', 'neg', 3500);
      startStopTimer();
      return;
    }
    p.timerSecs--;
    updateMainTimer();
    broadcastState();
  }, 1000);
}

function updateMainTimer() {
  const p = activePlayer();
  const secs = p ? p.timerSecs : 0;
  const el = document.getElementById('mainTimer');
  el.textContent = formatTime(secs);
  el.className = 'timer-value' + (secs <= 30 ? ' urgent' : '');
}

function startStopTimer() {
  stopTimerSecs = 30;
  stopActive = true;
  stopWasPressedThisWord = true;
  document.getElementById('stopTimerBlock').classList.add('active');
  document.getElementById('stopOverlay').classList.add('active');

  clearInterval(stopTimerInterval);
  stopTimerInterval = setInterval(() => {
    stopTimerSecs--;
    document.getElementById('stopTimer').textContent = formatTime(stopTimerSecs);
    playTick(stopTimerSecs <= 5);
    broadcastState();
    if (stopTimerSecs <= 0) {
      endStopTimer(true);
    }
  }, 1000);
}

function endStopTimer(fromExpiry = false) {
  clearInterval(stopTimerInterval);
  stopActive = false;
  stopPressedByName = '';
  const label = document.getElementById('stopPressedByLabel');
  if (label) label.textContent = '';
  document.getElementById('stopTimerBlock').classList.remove('active');
  document.getElementById('stopOverlay').classList.remove('active');

  if (fromExpiry && gamePhase === 'playing') {
    showNotif('STOP EXPIRAT — RĂSPUNS GREȘIT', 'neg', 3000);
    handleWrong(true); // skipStopCleanup=true to avoid double-calling endStopTimer
  } else {
    updatePresenterButtons();
    broadcastState();
  }
}

/* ══════════════════════════════════════════════
   SCORE
══════════════════════════════════════════════ */
function updateScoreDisplay() {
  const el = document.getElementById('scoreDisplay');
  el.textContent = score;
  el.classList.remove('score-flash');
  void el.offsetWidth;
  el.classList.add('score-flash');
}

function addScore(pts) {
  const p = activePlayer();
  if (!p) return;
  p.score = Math.max(0, p.score + pts);
  score = p.score;
  updateScoreDisplay();
}

/* ══════════════════════════════════════════════
   PRESENTER PANEL (overlay)
══════════════════════════════════════════════ */
function updatePresenterButtons() {
  const playing = gamePhase === 'playing';
  const bigStop = document.getElementById('bigStopBtn');
  if (bigStop) {
    bigStop.style.display = playing ? 'flex' : 'none';
    bigStop.disabled = !playing || stopActive;
  }
  const teamsBtn = document.getElementById('teamsToggleBtn');
  if (teamsBtn) {
    teamsBtn.style.display = (teamMode && gamePhase !== 'idle') ? 'flex' : 'none';
  }
}

/* ══════════════════════════════════════════════
   TEAMS OVERVIEW PANEL
══════════════════════════════════════════════ */
let _teamsPanelOpen = false;

function toggleTeamsPanel() {
  _teamsPanelOpen = !_teamsPanelOpen;
  const panel = document.getElementById('teamsPanel');
  if (!panel) return;
  if (_teamsPanelOpen) {
    updateTeamsPanel();
    panel.style.display = 'flex';
  } else {
    panel.style.display = 'none';
  }
}

function updateTeamsPanel() {
  if (!_teamsPanelOpen) return;
  const grid = document.getElementById('tpTeamsGrid');
  if (!grid) return;

  grid.innerHTML = players.map((pl, i) => {
    const members = (teamMode && pl.members) ? pl.members : [pl.name];
    const memberRows = members.map(memberName => {
      const lobbyP = _lobbyPlayersData.find(lp => lp.name.toUpperCase() === memberName.toUpperCase());
      const av = lobbyP?.avatar || pl.avatar;
      const animalIdx = (av && av.animal != null) ? av.animal : (i % ANIMAL_SVGS.length);
      const svgHtml = ANIMAL_SVGS[animalIdx] || ANIMAL_SVGS[0];
      return `<div class="tp-member">
        <div class="tp-avatar">${svgHtml}</div>
        <span class="tp-member-name">${memberName}</span>
      </div>`;
    }).join('');

    return `<div class="tp-team">
      <div class="tp-team-name">${pl.name}</div>
      <div class="tp-team-score">${pl.score} <span style="font-size:9px;opacity:0.6;">LEI</span></div>
      <div class="tp-members">${memberRows}</div>
    </div>`;
  }).join('');
}

/* ══════════════════════════════════════════════
   GAME ACTIONS
══════════════════════════════════════════════ */
function handleCorrect(bypassStopCheck = false) {
  if (gamePhase !== 'playing') return;
  if (!bypassStopCheck && !stopWasPressedThisWord) {
    showNotif('Jucătorul trebuie să apese STOP mai întâi!', 'neg', 2500);
    return;
  }
  const word = sessionWords[currentWordIdx];
  let unrev = 0;
  for (let i = 0; i < word.cuvant.length; i++) { if (!revealedLetters[i]) unrev++; }
  const pts = unrev * 100;
  addScore(pts);

  gamePhase = 'between'; // lock immediately so no double-calls during animation

  revealWithSlots(word, () => {
    if (pts === 0) {
      showNotif('CORECT — 0 PUNCTE (toate literele dezvăluite)', 'info', 3000);
    } else {
      showNotif(`+${pts} PUNCTE`, 'pos');
    }
    showBetweenMsg('✓ CORECT!', 'correct');
    updatePresenterButtons();
      if (stopActive) endStopTimer(false);
    broadcastState();
  });
}

function handleHint() {
  if (gamePhase !== 'playing') return;
  if (stopActive) { showNotif('Nu poți cere litere în Stop!', 'neg', 2000); return; }
  const word = sessionWords[currentWordIdx];
  const unrevealed = [];
  for (let i = 0; i < word.cuvant.length; i++) {
    if (!revealedLetters[i] && !shownLetters[i]) unrevealed.push(i);
  }
  if (unrevealed.length === 0) { showNotif('Toate literele dezvăluite!', 'info'); return; }
  const idx = unrevealed[Math.floor(Math.random() * unrevealed.length)];
  revealedLetters[idx] = true;
  shownLetters[idx] = true;
  updateLetterBoxes();
  showNotif(`Litera "${word.cuvant[idx]}" dezvăluită · −100`, 'neg');
  const p = activePlayer();
  if (p) p.hintsTotal = (p.hintsTotal || 0) + 1;

  // Auto-wrong if all letters now revealed (penalty = 0 since unrev = 0)
  const stillHidden = revealedLetters.filter(r => !r).length;
  if (stillHidden === 0) {
    setTimeout(() => handleWrong(true), 600); // small delay so TV sees the last letter
    return;
  }

  broadcastState();
}

function handleStop(fromName = '') {
  if (gamePhase !== 'playing' || stopActive) return;
  stopPressedByName = fromName ? fromName.toUpperCase() : '';
  const label = document.getElementById('stopPressedByLabel');
  if (label) label.textContent = stopPressedByName || '';
  startStopTimer();
  showNotif('STOP TIMP — 30 secunde', 'info');
  updatePresenterButtons();
  broadcastState();
}

// skipStopCleanup=true when called from endStopTimer (expiry) or main timer → bypasses stop check
function handleWrong(skipStopCleanup = false) {
  if (gamePhase !== 'playing') return;
  if (!skipStopCleanup && !stopWasPressedThisWord) {
    showNotif('Jucătorul trebuie să apese STOP mai întâi!', 'neg', 2500);
    return;
  }
  const word = sessionWords[currentWordIdx];
  let unrev = 0;
  for (let i = 0; i < word.cuvant.length; i++) { if (!revealedLetters[i]) unrev++; }
  const penalty = unrev * 100;
  addScore(-penalty);

  gamePhase = 'between'; // lock immediately

  revealWithSlots(word, () => {
    showNotif(`−${penalty} PUNCTE`, 'neg', 2500);
    showBetweenMsg('✕ RATAT', 'wrong');
    updatePresenterButtons();
      if (stopActive && !skipStopCleanup) endStopTimer(false);
    broadcastState();
  });
}

function handleNext() {
  if (gamePhase !== 'between') return;

  // First N: reveal definition then start timer — only when timer hasn't started yet
  if (!mainTimerRunning && !mainTimerExpired) {
    const el = document.getElementById('definitionText');
    el.textContent = el.dataset.pending || '';
    startMainTimer();
    gamePhase = 'playing';
    updatePresenterButtons();
    broadcastState();
    return;
  }

  // Advance word
  currentWordIdx++;

  if (gameMode === 'arcade') {
    if (currentWordIdx >= sessionWords.length) {
      endGame();
      return;
    }
    updatePlayerLabel();
    updateNextPlayerRow();
    loadWord(currentWordIdx);
    if (!mainTimerRunning) startMainTimer(); // restart after timer expiry
    updatePresenterButtons();
    broadcastState();
    return;
  }

  // Classic mode — timer expirat sau cuvinte epuizate = runda jucătorului se încheie
  if (mainTimerExpired || currentWordIdx >= sessionWords.length) {
    endPlayerOrGame();
    return;
  }
  loadWord(currentWordIdx);
  updatePresenterButtons();
  broadcastState();
}

function showBetweenMsg(text, cls) {
  const el = document.getElementById('betweenMsg');
  const sub = (cls === 'correct' || cls === 'wrong')
    ? `<div style="font-family:'Share Tech Mono',monospace;font-size:11px;letter-spacing:3px;margin-top:10px;opacity:0.4;">URMĂTOR → N</div>`
    : '';
  el.innerHTML = text + sub;
  el.className = 'between-msg ' + cls;
  el.style.display = 'inline-block';
}

/* ══════════════════════════════════════════════
   PLAYER ROUND TRANSITIONS (Classic)
══════════════════════════════════════════════ */
function endPlayerOrGame() {
  // Stop timers
  clearInterval(mainTimerInterval);
  mainTimerRunning = false;

  if (gameMode === 'classic') {
    const isLastPlayer = currentPlayerIdx >= players.length - 1;
    if (isLastPlayer) {
      endGame();
    } else {
      showInterimScreen();
    }
  } else {
    endGame();
  }
}

function showInterimScreen() {
  document.getElementById('gameScreen').style.display = 'none';
  document.getElementById('presenterPanel').classList.remove('visible');
  presenterVisible = false;

  const nextIdx = currentPlayerIdx + 1;
  const nextPlayer = players[nextIdx];

  document.getElementById('interimTitle').textContent =
    `${players[currentPlayerIdx].name} — Rundă completă!`;
  document.getElementById('interimNextLabel').textContent =
    `URMEAZĂ: ${nextPlayer.name}`;
  document.getElementById('interimContinueBtn').textContent =
    `▶ ${nextPlayer.name} — Pregătit`;

  renderLeaderboard('interimLeaderboard', false);

  const screen = document.getElementById('interimScreen');
  screen.style.display = 'flex';
  broadcastState();
}

function continueToNextPlayer() {
  document.getElementById('interimScreen').style.display = 'none';
  currentPlayerIdx++;
  showReadyScreen(currentPlayerIdx);
  broadcastState();
}

/* ══════════════════════════════════════════════
   END GAME
══════════════════════════════════════════════ */
function endGame() {
  clearInterval(mainTimerInterval);
  clearInterval(stopTimerInterval);
  gamePhase = 'end';

  document.getElementById('gameScreen').style.display = 'none';
  document.getElementById('interimScreen').style.display = 'none';
  document.getElementById('presenterPanel').classList.remove('visible');
  presenterVisible = false;

  renderLeaderboard('finalLeaderboard', true);
  document.getElementById('endScreen').style.display = 'flex';
  broadcastState();
}

function renderLeaderboard(containerId, showFinal) {
  const container = document.getElementById(containerId);

  // Sort: score desc, tiebreak by timerSecs desc (more time remaining = better)
  const sorted = [...players]
    .map((p, i) => ({ ...p, origIdx: i }))
    .sort((a, b) => b.score !== a.score ? b.score - a.score : b.timerSecs - a.timerSecs);

  // Which scores appear more than once among played players (to know who's tied)
  const playedPlayers = showFinal ? sorted : sorted.filter(p => p.origIdx <= currentPlayerIdx);
  const scoreCounts = {};
  playedPlayers.forEach(p => { scoreCounts[p.score] = (scoreCounts[p.score] || 0) + 1; });

  const rankClasses = ['gold', 'silver', 'bronze'];
  const rankEmojis = ['🥇', '🥈', '🥉'];

  container.innerHTML = `<div class="lb-header">${showFinal ? 'Clasament Final' : 'Clasament Curent'}</div>`;

  sorted.forEach((p, rank) => {
    const isPlayed = showFinal || p.origIdx <= currentPlayerIdx;
    const isCurrent = !showFinal && p.origIdx === currentPlayerIdx;
    const showTimer = isPlayed && (scoreCounts[p.score] || 0) > 1;
    const hasMembers = p.members && p.members.length > 0;

    const row = document.createElement('div');
    row.className = 'lb-row' + (isCurrent ? ' highlight' : '') + (hasMembers ? ' has-members' : '');
    row.innerHTML = `
      <div class="lb-rank ${rankClasses[rank] || ''}">${rank < 3 ? rankEmojis[rank] : rank+1}</div>
      <div class="lb-name" style="color:${isCurrent ? 'var(--gold)' : 'var(--text)'}">${p.name}${hasMembers ? ' <span style="font-size:11px;color:var(--dim);font-family:\'Share Tech Mono\',monospace;letter-spacing:1px;">▾</span>' : ''}</div>
      ${isPlayed
        ? `<div class="lb-score">
             ${p.score.toLocaleString('ro')} pts
             ${showTimer ? `<span style="font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--dim);margin-left:8px;">⏱ ${formatTime(p.timerSecs)}</span>` : ''}
             ${showFinal && p.hintsTotal > 0 ? `<span style="font-family:'Share Tech Mono',monospace;font-size:11px;color:var(--dim);margin-left:8px;">💡 ${p.hintsTotal}</span>` : ''}
           </div>`
        : `<div class="lb-pending">în așteptare</div>`
      }
    `;

    if (hasMembers) {
      const membersRow = document.createElement('div');
      membersRow.style.cssText = 'display:none; flex-wrap:wrap; gap:6px; padding:6px 0 4px 40px; grid-column:1/-1;';
      membersRow.innerHTML = p.members.map(m =>
        `<span style="font-family:'Share Tech Mono',monospace;font-size:11px;letter-spacing:2px;color:var(--dim);background:rgba(255,255,255,0.04);padding:3px 10px;border:1px solid rgba(255,215,0,0.1);">${m}</span>`
      ).join('');
      row.appendChild(membersRow);
      row.addEventListener('click', () => {
        membersRow.style.display = membersRow.style.display === 'none' ? 'flex' : 'none';
      });
    }

    container.appendChild(row);
  });
}

function showResetModal() {
  document.getElementById('resetModal').style.display = 'flex';
}
function hideResetModal() {
  document.getElementById('resetModal').style.display = 'none';
}
function confirmReset() {
  hideResetModal();
  resetGame();
}

function resetGame() {
  document.getElementById('endScreen').style.display = 'none';
  document.getElementById('interimScreen').style.display = 'none';
  document.getElementById('readyScreen').style.display = 'none';
  document.getElementById('playerSetupScreen').style.display = 'none';
  document.getElementById('startScreen').style.display = 'flex';
  clearInterval(mainTimerInterval);
  clearInterval(stopTimerInterval);
  mainTimerRunning = false;
  mainTimerExpired = false;
  stopActive = false;
  score = 0;
  players = [];
  currentPlayerIdx = 0;
  currentWordIdx = 0;
  gamePhase = 'idle';
  sessionWords = [];
  _publishedTeams = [];
  if (_teamsPanelOpen) { _teamsPanelOpen = false; const p = document.getElementById('teamsPanel'); if (p) p.style.display = 'none'; }
  broadcastState();
}

/* ══════════════════════════════════════════════
   BROADCAST CHANNEL — TV SIDE
══════════════════════════════════════════════ */
function broadcastState() {
  if (IS_PRESENTER) return;
  const word = (currentWordIdx < sessionWords.length) ? sessionWords[currentWordIdx] : null;
  const p = activePlayer();
  const next = nextPlayerInArcade();
  const nextWordEntry = (currentWordIdx + 1 < sessionWords.length) ? sessionWords[currentWordIdx + 1] : null;
  const nextWordPlayerName = (gameMode === 'arcade' && nextWordEntry)
    ? (players[(currentWordIdx + 1) % players.length]?.name || '') : '';
  try {
    BC.postMessage({
      type: 'state',
      phase: gamePhase,
      word: word?.cuvant || null,
      definitie: word?.definitie || null,
      note: word?.note || null,
      wordIdx: currentWordIdx,
      totalWords: sessionWords.length,
      playerName: p?.name || '',
      playerScore: p?.score || 0,
      playerTimer: p?.timerSecs || 0,
      revealedLetters: [...revealedLetters],
      potential: revealedLetters.filter(r => !r).length * 100,
      hintsUsed: revealedLetters.filter(Boolean).length,
      stopActive,
      stopTimerSecs,
      stopWasPressedThisWord,
      stopPressedByName,
      gameMode,
      nextPlayerName: next?.name || '',
      isFirst: !mainTimerRunning,
      players: players.map(pl => ({ name: pl.name, score: pl.score, hintsTotal: pl.hintsTotal || 0, members: pl.members || null })),
      playerMembers: p?.members || null,
      teamMode,
      nextWord: nextWordEntry?.cuvant || null,
      nextWordDef: nextWordEntry?.definitie || null,
      nextWordPlayerName,
    });
  } catch(e) {}
  updateTeamsPanel();
}

// Listen for actions (from presenter / player phones) and lobby updates
BC.addEventListener('message', e => {
  if (IS_PRESENTER) return;

  if (e.data.type === 'action') {
    const a = e.data.action;
    if (a === 'correct') handleCorrect();
    else if (a === 'wrong') handleWrong();
    else if (a === 'hint') handleHint();
    else if (a === 'stop') handleStop(e.data.fromName || '');
    else if (a === 'next') handleNext();
    else if (a === 'reset') showResetModal();
    return;
  }

  if (e.data.type === 'lobby') {
    renderLobby(e.data.players || []);
  }
});

/* ══════════════════════════════════════════════
   ANIMAL AVATARS
══════════════════════════════════════════════ */
const ANIMAL_SVGS = [
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#EDEDED"/><circle cx="25" cy="25" r="12" fill="#333"/><circle cx="75" cy="25" r="12" fill="#333"/><circle cx="50" cy="55" r="35" fill="white"/><ellipse cx="35" cy="50" rx="10" ry="12" fill="#333"/><ellipse cx="65" cy="50" rx="10" ry="12" fill="#333"/><circle cx="35" cy="48" r="3" fill="white"/><circle cx="65" cy="48" r="3" fill="white"/><path d="M45 65 Q50 70 55 65" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FF8C42"/><path d="M20 30 L40 10 L50 30 Z" fill="#E5772F"/><path d="M80 30 L60 10 L50 30 Z" fill="#E5772F"/><path d="M50 40 L15 65 Q15 85 50 85 Q85 85 85 65 Z" fill="white"/><circle cx="35" cy="55" r="4" fill="#333"/><circle cx="65" cy="55" r="4" fill="#333"/><circle cx="50" cy="68" r="5" fill="#333"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#95A5A6"/><path d="M25 35 L20 15 L45 35 Z" fill="#7F8C8D"/><path d="M75 35 L80 15 L55 35 Z" fill="#7F8C8D"/><circle cx="35" cy="55" r="5" fill="#333"/><circle cx="65" cy="55" r="5" fill="#333"/><path d="M45 70 Q50 75 55 70" stroke="#333" stroke-width="2" fill="none"/><line x1="15" y1="60" x2="30" y2="62" stroke="#BDC3C7" stroke-width="2"/><line x1="85" y1="60" x2="70" y2="62" stroke="#BDC3C7" stroke-width="2"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#FFC0CB"/><ellipse cx="35" cy="20" rx="8" ry="20" fill="#FFC0CB"/><ellipse cx="65" cy="20" rx="8" ry="20" fill="#FFC0CB"/><ellipse cx="35" cy="22" rx="4" ry="12" fill="#FFB6C1"/><ellipse cx="65" cy="22" rx="4" ry="12" fill="#FFB6C1"/><circle cx="35" cy="55" r="4" fill="#333"/><circle cx="65" cy="55" r="4" fill="#333"/><circle cx="50" cy="65" r="4" fill="#E74C3C"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#8D6E63"/><circle cx="25" cy="25" r="10" fill="#6D4C41"/><circle cx="75" cy="25" r="10" fill="#6D4C41"/><circle cx="50" cy="65" r="20" fill="#A1887F"/><circle cx="38" cy="50" r="4" fill="#333"/><circle cx="62" cy="50" r="4" fill="#333"/><ellipse cx="50" cy="62" rx="6" ry="4" fill="#333"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#2C3E50"/><ellipse cx="50" cy="60" rx="30" ry="35" fill="white"/><circle cx="38" cy="45" r="4" fill="#333"/><circle cx="62" cy="45" r="4" fill="#333"/><path d="M45 55 L50 65 L55 55 Z" fill="#F39C12"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="55" r="45" fill="#4CAF50"/><circle cx="30" cy="25" r="12" fill="#4CAF50"/><circle cx="70" cy="25" r="12" fill="#4CAF50"/><circle cx="30" cy="25" r="7" fill="white"/><circle cx="70" cy="25" r="7" fill="white"/><circle cx="30" cy="25" r="3" fill="black"/><circle cx="70" cy="25" r="3" fill="black"/><path d="M30 70 Q50 85 70 70" stroke="#1B5E20" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#E67E22" stroke="#D35400" stroke-width="2"/><circle cx="50" cy="52" r="35" fill="#F1C40F"/><circle cx="40" cy="45" r="4" fill="#333"/><circle cx="60" cy="45" r="4" fill="#333"/><circle cx="50" cy="58" r="12" fill="#F39C12" opacity="0.5"/><circle cx="50" cy="58" r="4" fill="#333"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#9B59B6"/><ellipse cx="50" cy="65" rx="30" ry="25" fill="#8E44AD"/><circle cx="35" cy="40" r="15" fill="white"/><circle cx="65" cy="40" r="15" fill="white"/><circle cx="35" cy="40" r="6" fill="#333"/><circle cx="65" cy="40" r="6" fill="#333"/><path d="M45 55 L50 62 L55 55 Z" fill="#F1C40F"/><path d="M30 75 Q35 70 40 75 M60 75 Q65 70 70 75" stroke="#F1C40F" stroke-width="2" fill="none"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#7F8C8D"/><ellipse cx="50" cy="60" rx="35" ry="30" fill="#95A5A6"/><circle cx="20" cy="40" r="15" fill="#7F8C8D"/><circle cx="80" cy="40" r="15" fill="#7F8C8D"/><path d="M50 65 L40 85 Q50 90 60 85 L50 65 Z" fill="#BDC3C7"/><circle cx="40" cy="50" r="3" fill="#333"/><circle cx="60" cy="50" r="3" fill="#333"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#E67E22"/><ellipse cx="50" cy="60" rx="35" ry="30" fill="#F5CBA7"/><path d="M15 35 L30 15 L35 35 Z" fill="#D35400"/><path d="M85 35 L70 15 L65 35 Z" fill="#D35400"/><circle cx="40" cy="50" r="4" fill="#333"/><circle cx="60" cy="50" r="4" fill="#333"/><ellipse cx="50" cy="65" rx="8" ry="6" fill="#D35400"/><path d="M48 75 Q50 78 52 75" stroke="#333" stroke-width="2" fill="none"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#F4D03F"/><ellipse cx="50" cy="60" rx="35" ry="30" fill="#D35400"/><circle cx="25" cy="45" r="10" fill="#D35400"/><circle cx="75" cy="45" r="10" fill="#D35400"/><circle cx="40" cy="55" r="4" fill="#333"/><circle cx="60" cy="55" r="4" fill="#333"/><path d="M40 75 Q50 82 60 75" stroke="#8D6E63" stroke-width="2" fill="none"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#85C1E9"/><ellipse cx="50" cy="55" rx="35" ry="25" fill="#F1C40F"/><rect x="25" y="40" width="10" height="30" fill="#333"/><rect x="45" y="40" width="10" height="30" fill="#333"/><rect x="65" y="40" width="10" height="30" fill="#333"/><ellipse cx="40" cy="35" rx="10" ry="8" fill="white" opacity="0.7"/><ellipse cx="60" cy="35" rx="10" ry="8" fill="white" opacity="0.7"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#F1948A"/><circle cx="50" cy="55" r="40" fill="#F5B7B1"/><path d="M25 30 L35 15 L45 30 Z" fill="#F1948A"/><path d="M75 30 L65 15 L55 30 Z" fill="#F1948A"/><ellipse cx="50" cy="68" rx="15" ry="10" fill="#FADBD8"/><circle cx="45" cy="68" r="3" fill="#E6B0AA"/><circle cx="55" cy="68" r="3" fill="#E6B0AA"/><circle cx="38" cy="50" r="3" fill="#333"/><circle cx="62" cy="50" r="3" fill="#333"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#A2D9CE"/><circle cx="50" cy="60" r="35" fill="#BDC3C7"/><circle cx="20" cy="45" r="18" fill="#BDC3C7"/><circle cx="80" cy="45" r="18" fill="#BDC3C7"/><circle cx="20" cy="45" r="10" fill="white"/><circle cx="80" cy="45" r="10" fill="white"/><ellipse cx="50" cy="65" rx="8" ry="12" fill="#333"/><circle cx="40" cy="50" r="3" fill="#7F8C8D"/><circle cx="60" cy="50" r="3" fill="#7F8C8D"/></svg>`,
  `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50" fill="#81D4FA"/><circle cx="50" cy="55" r="40" fill="#FF9800"/><path d="M15 30 L30 15 L35 30 Z" fill="#FF9800"/><path d="M85 30 L70 15 L65 30 Z" fill="#FF9800"/><ellipse cx="50" cy="70" rx="20" ry="15" fill="white"/><circle cx="50" cy="68" r="5" fill="#333"/><circle cx="38" cy="52" r="4" fill="#333"/><circle cx="62" cy="52" r="4" fill="#333"/><path d="M25 45 L15 42 L25 40 Z" fill="black"/><path d="M75 45 L85 42 L75 40 Z" fill="black"/><path d="M45 25 L50 35 L55 25 Z" fill="black"/></svg>`,
];

/* ══════════════════════════════════════════════
   AVATAR SVG BUILDER (face customization — kept for future use)
══════════════════════════════════════════════ */
const _AV_HAIR_BACK = [
  '',
  `<path d="M24 52 Q22 7 50 6 Q78 7 76 52 Q70 30 50 30 Q30 30 24 52Z" fill="#2C1A0E"/>`,
  `<path d="M24 52 Q22 4 50 4 Q78 4 76 52 Q70 28 50 28 Q30 28 24 52Z" fill="#2C1A0E"/>`,
  `<path d="M44 36 Q45 2 50 0 Q55 2 56 36 Q53 27 50 27 Q47 27 44 36Z" fill="#2C1A0E"/>`,
];
const _AV_HAIR_FRONT = [
  '', '',
  `<rect x="16" y="48" width="13" height="44" rx="6" fill="#2C1A0E"/><rect x="71" y="48" width="13" height="44" rx="6" fill="#2C1A0E"/>`,
  '',
];
const _AV_GLASSES = [
  '',
  `<circle cx="40" cy="51" r="8" fill="rgba(180,220,255,0.12)" stroke="#1a1a1a" stroke-width="2.5"/>
   <circle cx="60" cy="51" r="8" fill="rgba(180,220,255,0.12)" stroke="#1a1a1a" stroke-width="2.5"/>
   <line x1="48" y1="51" x2="52" y2="51" stroke="#1a1a1a" stroke-width="2"/>
   <line x1="22" y1="50" x2="32" y2="51" stroke="#1a1a1a" stroke-width="2"/>
   <line x1="68" y1="51" x2="78" y2="50" stroke="#1a1a1a" stroke-width="2"/>`,
  `<rect x="31" y="45" width="17" height="12" rx="2" fill="rgba(180,220,255,0.12)" stroke="#1a1a1a" stroke-width="2.5"/>
   <rect x="52" y="45" width="17" height="12" rx="2" fill="rgba(180,220,255,0.12)" stroke="#1a1a1a" stroke-width="2.5"/>
   <line x1="48" y1="51" x2="52" y2="51" stroke="#1a1a1a" stroke-width="2"/>
   <line x1="22" y1="50" x2="31" y2="51" stroke="#1a1a1a" stroke-width="2"/>
   <line x1="69" y1="51" x2="78" y2="50" stroke="#1a1a1a" stroke-width="2"/>`,
];
const _AV_MUSTACHE = [
  '',
  `<path d="M37 68 Q43 62 50 65 Q57 62 63 68 Q57 71 50 68 Q43 71 37 68Z" fill="#2C1A0E"/>`,
  `<path d="M32 66 Q41 57 50 62 Q59 57 68 66 Q60 73 50 69 Q40 73 32 66Z" fill="#2C1A0E"/>
   <path d="M32 66 Q27 61 25 67 Q28 73 35 69Z" fill="#2C1A0E"/>
   <path d="M68 66 Q73 61 75 67 Q72 73 65 69Z" fill="#2C1A0E"/>`,
];

function buildAvatarSVG(av, uid) {
  const h = (av && av.hair    != null) ? av.hair    : 0;
  const g = (av && av.glasses != null) ? av.glasses : 0;
  const m = (av && av.mustache!= null) ? av.mustache: 0;
  const gid = `avbg${uid != null ? uid : Math.random().toString(36).slice(2,6)}`;
  return `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="${gid}" cx="38%" cy="32%" r="68%">
        <stop offset="0%" stop-color="#FFD700"/>
        <stop offset="100%" stop-color="#6B2A05"/>
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#${gid})"/>
    ${_AV_HAIR_BACK[h] || ''}
    <circle cx="50" cy="57" r="26" fill="#F4C5A0"/>
    ${_AV_HAIR_FRONT[h] || ''}
    <ellipse cx="41" cy="53" rx="3" ry="3.5" fill="#2C1810"/>
    <ellipse cx="59" cy="53" rx="3" ry="3.5" fill="#2C1810"/>
    <path d="M46 61 Q50 65 54 61" stroke="#C4956A" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    ${_AV_GLASSES[g] || ''}
    ${_AV_MUSTACHE[m] || ''}
  </svg>`;
}

/* ══════════════════════════════════════════════
   LOBBY — phone player registration
══════════════════════════════════════════════ */
let lobbyPlayers = [];     // names only — used by addFromLobby
let _lobbyPlayersData = []; // full {name, avatar} — used by bubbles
let _publishedTeams = []; // team names at publish time — used for stable matching

function renderLobby(players) {
  lobbyPlayers = players.map(p => p.name);
  _lobbyPlayersData = players;
  const section = document.getElementById('lobbySection');
  const chips   = document.getElementById('lobbyChips');
  if (!section || !chips) return;

  if (players.length === 0) {
    section.style.display = 'none';
    renderLobbyBubbles([]);
    return;
  }

  section.style.display = 'flex';

  if (teamMode) {
    // Update inline team lobby rows inside each team slot
    const slots = document.querySelectorAll('.team-slot');
    slots.forEach((slot, i) => {
      const teamName = _publishedTeams[i] || slot.querySelector('.team-name-input')?.value.trim() || `Echipa ${i + 1}`;
      const teamPlayers = players.filter(p => p.team === teamName);
      const row = document.getElementById(`teamLobbyRow${i}`);
      if (!row) return;
      if (teamPlayers.length === 0) {
        row.innerHTML = ''; row.style.display = 'none'; return;
      }
      row.style.display = 'flex';
      row.innerHTML = `<span class="team-lobby-label">📱 de pe telefon</span>` +
        teamPlayers.map(p =>
          `<button class="team-lobby-chip-inline" onclick="addFromLobby('${p.name.replace(/'/g, "\\'")}')">
            ${p.name}
          </button>`
        ).join('');
    });

    // Show unassigned players in chips area
    const unassigned = players.filter(p => !p.team);
    if (chips) {
      chips.innerHTML = unassigned.length > 0
        ? `<span style="font-family:'Share Tech Mono',monospace;font-size:8px;letter-spacing:2px;color:var(--dim);">fără echipă:</span> ` +
          unassigned.map(p =>
            `<button class="lobby-chip" onclick="addFromLobby('${p.name.replace(/'/g, "\\'")}')">📱 ${p.name}</button>`
          ).join('')
        : `<span style="font-family:'Share Tech Mono',monospace;font-size:8px;letter-spacing:2px;color:var(--dim);">${players.length} conectat${players.length !== 1 ? 'ți' : ''} · toți în echipă</span>`;
    }
  } else {
    // Individual mode: show all as chips
    if (chips) {
      chips.innerHTML = players.map(p =>
        `<button class="lobby-chip" onclick="addFromLobby('${p.name.replace(/'/g, "\\'")}')">📱 ${p.name}</button>`
      ).join('');
    }
  }

  const publishBtn = document.getElementById('publishTeamsBtn');
  if (publishBtn) publishBtn.style.display = (players.length > 0 && teamMode) ? 'inline-block' : 'none';

  renderLobbyBubbles(players);
}

function resetSession() {
  BC.postMessage({ type: 'resetSession' });
  _publishedTeams = [];
  lobbyPlayers = [];
  _lobbyPlayersData = [];
  renderLobby([]);
  showNotif('Sesiune resetată — datele vechi au fost șterse', 'info', 2500);
}

function publishTeams() {
  const teamSlots = document.querySelectorAll('.team-slot');
  const teams = Array.from(teamSlots).map((slot, i) =>
    slot.querySelector('.team-name-input')?.value.trim() || `Echipa ${i + 1}`
  );
  _publishedTeams = teams;
  BC.postMessage({ type: 'teams', teams });
  showNotif(`Echipe publicate: ${teams.join(', ')}`, 'pos', 2500);
}

function addFromLobby(name) {
  if (teamMode) {
    // Find this player's assigned team from lobby data
    const lobbyPlayer = _lobbyPlayersData.find(p => p.name === name);
    const targetTeam = lobbyPlayer?.team || null;

    const slots = document.querySelectorAll('.team-slot');
    let targetSlotIdx = -1;

    if (targetTeam) {
      slots.forEach((slot, i) => {
        const slotTeamName = _publishedTeams[i] || slot.querySelector('.team-name-input')?.value.trim() || `Echipa ${i + 1}`;
        if (slotTeamName === targetTeam) targetSlotIdx = i;
      });
    }

    if (targetSlotIdx >= 0) {
      const container = document.getElementById(`teamMembers${targetSlotIdx}`);
      const memberInputs = container.querySelectorAll('.team-member-input');
      for (const input of memberInputs) {
        if (input.value.trim().toUpperCase() === name.toUpperCase()) return; // already added
        if (!input.value.trim()) { input.value = name; return; }
      }
      // All rows full — expand this team
      addMember(targetSlotIdx);
      const all = container.querySelectorAll('.team-member-input');
      all[all.length - 1].value = name;
      return;
    }

    // Fallback (no team assigned): fill first empty slot across all teams
    for (const input of document.querySelectorAll('.team-member-input')) {
      if (!input.value.trim()) { input.value = name; return; }
    }
    showNotif('Toate câmpurile sunt completate', 'neg', 1500);
    return;
  }
  const inputs = document.querySelectorAll('.player-name-input');
  for (const input of inputs) {
    if (!input.value.trim()) {
      input.value = name;
      input.dispatchEvent(new Event('input'));
      return;
    }
  }
  showNotif('Toate câmpurile sunt completate', 'neg', 1500);
}

function addAllFromLobby() {
  for (const name of lobbyPlayers) addFromLobby(name);
}

/* ── Floating lobby bubbles ── */
const BUBBLE_SLOTS = [
  { top: '9%',  left: '6%'  },
  { top: '9%',  left: '76%' },
  { top: '44%', left: '2%'  },
  { top: '44%', left: '85%' },
  { top: '74%', left: '5%'  },
  { top: '74%', left: '80%' },
  { top: '24%', left: '82%' },
  { top: '62%', left: '3%'  },
];
const FLOAT_ANIMS = ['bubble-float-a','bubble-float-b','bubble-float-c','bubble-float-d','bubble-float-e'];
const _bubbleSlotMap = new Map(); // name → slot index (keeps positions stable)

function renderLobbyBubbles(players) {
  const container = document.getElementById('lobbyBubbles');
  if (!container) return;

  const setupVisible = document.getElementById('playerSetupScreen')?.style.display !== 'none';
  if (!setupVisible || players.length === 0) {
    container.innerHTML = '';
    return;
  }

  // Assign stable slots to new players
  players.forEach(p => {
    if (!_bubbleSlotMap.has(p.name)) {
      _bubbleSlotMap.set(p.name, _bubbleSlotMap.size % BUBBLE_SLOTS.length);
    }
  });
  const nameSet = new Set(players.map(p => p.name));
  for (const key of _bubbleSlotMap.keys()) {
    if (!nameSet.has(key)) _bubbleSlotMap.delete(key);
  }

  container.innerHTML = players.map((p, i) => {
    const slot  = BUBBLE_SLOTS[_bubbleSlotMap.get(p.name) ?? (i % BUBBLE_SLOTS.length)];
    const anim  = FLOAT_ANIMS[i % FLOAT_ANIMS.length];
    const dur   = (4.5 + (i * 0.7) % 2.5).toFixed(1);
    const delay = ((i * 1.1) % 2.5).toFixed(1);
    const animalIdx = p.avatar && p.avatar.animal != null ? p.avatar.animal : null;
    const avatarContent = (animalIdx !== null && ANIMAL_SVGS[animalIdx])
      ? ANIMAL_SVGS[animalIdx]
      : p.name.charAt(0);
    return `<div class="lobby-bubble" style="top:${slot.top};left:${slot.left};
        animation:bubble-in 0.5s ease both, ${anim} ${dur}s ${delay}s ease-in-out infinite;">
      <div class="bubble-avatar">${avatarContent}</div>
      <div class="bubble-name">${p.name}</div>
    </div>`;
  }).join('');
}

function hideLobbyBubbles() {
  const c = document.getElementById('lobbyBubbles');
  if (c) c.innerHTML = '';
  _bubbleSlotMap.clear();
}

/* ══════════════════════════════════════════════
   BROADCAST CHANNEL — PRESENTER WINDOW SIDE
══════════════════════════════════════════════ */
function pwSend(action) {
  BC.postMessage({ type: 'action', action });
}

function setupPresenterWindow() {
  const pw = document.getElementById('presenterWindow');
  pw.style.display = 'flex';

  // Hide all TV screens
  ['startScreen','playerSetupScreen','readyScreen','gameScreen','interimScreen','endScreen','presenterPanel']
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = 'none';
    });

  document.querySelector('.corner-tl').style.display = 'none';
  document.querySelector('.corner-tr').style.display = 'none';
  document.querySelector('.corner-bl').style.display = 'none';
  document.querySelector('.corner-br').style.display = 'none';

  BC.addEventListener('message', e => {
    if (e.data.type === 'state') {
      pwRenderState(e.data);
    }
  });

  // Keyboard shortcuts work in presenter window too (sends via BroadcastChannel)
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    const key = e.key.toUpperCase();
    const s = window._lastPwState;
    if (!s) return;
    if (s.phase === 'playing') {
      if (key === 'C') pwSend('correct');
      if (key === 'L') pwSend('hint');
      if (key === ' ' || key === 'S') { e.preventDefault(); pwSend('stop'); }
    }
    if (s.phase === 'between') {
      if (key === 'N') pwSend('next');
    }
  });

  document.title = 'Prezentator · Jocul Cuvintelor';
}

function pwRenderState(s) {
  window._lastPwState = s; // cache for keyboard shortcuts
  const connStatus = document.getElementById('pwConnStatus');
  connStatus.textContent = '⬤ conectat';
  connStatus.className = 'pw-connection-status connected';

  const pwContent = document.getElementById('pwContent');
  const pwGame = document.getElementById('pwGame');

  if (s.phase === 'idle' || s.phase === 'end') {
    pwContent.style.display = 'flex';
    pwGame.style.display = 'none';
    pwContent.innerHTML = `<div class="pw-wait">
      <div class="pw-wait-msg">${s.phase === 'end' ? 'JOC ÎNCHEIAT' : 'AȘTEPTARE JOC'}</div>
    </div>`;
    return;
  }

  pwContent.style.display = 'none';
  pwGame.style.display = 'flex';

  // Player info
  document.getElementById('pwPlayerName').textContent = s.playerName || '—';
  document.getElementById('pwPlayerMeta').innerHTML =
    `Scor: <strong style="color:var(--gold)">${s.playerScore}</strong><br>
     Timer: ${formatTime(s.playerTimer)}<br>
     Cuvânt: ${s.wordIdx + 1} / ${s.totalWords}`;

  // Word
  document.getElementById('pwWord').textContent = s.word || '—';
  document.getElementById('pwWordMeta').textContent = s.word
    ? `${s.word.length} litere · ${s.gameMode === 'arcade' ? 'ARCADE' : 'CLASSIC'}${s.nextPlayerName ? ' · Urmează: ' + s.nextPlayerName : ''}`
    : '';

  // Def + notes
  document.getElementById('pwDef').textContent = s.definitie || '';
  document.getElementById('pwNotes').textContent = s.note || '—';

  // Score info
  document.getElementById('pwScoreInfo').innerHTML =
    `<div class="pw-chip">Potențial <span>+${s.potential}</span></div>
     <div class="pw-chip">Penalizare <span style="color:var(--red)">−${s.potential}</span></div>
     <div class="pw-chip">Hint-uri <span>${s.hintsUsed}</span></div>`;

  // Stop indicator
  const stopBlock = document.getElementById('pwStopBlock');
  if (s.stopActive) {
    stopBlock.className = 'pw-stop-indicator active';
    document.getElementById('pwStopTime').textContent = formatTime(s.stopTimerSecs);
  } else {
    stopBlock.className = 'pw-stop-indicator';
  }

  // Buttons
  const playing = s.phase === 'playing';
  const between = s.phase === 'between';

  document.getElementById('pwBtnCorrect').disabled = !playing || !s.stopWasPressedThisWord;
  document.getElementById('pwBtnHint').disabled = !playing || s.stopActive;

  const stopBtn = document.getElementById('pwBtnStop');
  stopBtn.disabled = !playing || s.stopActive;
  stopBtn.className = 'pw-btn pw-btn-stop' + (s.stopActive ? ' active-stop' : '');

  const nextBtn = document.getElementById('pwBtnNext');
  nextBtn.style.display = between ? 'flex' : 'none';
  nextBtn.disabled = !between;
  nextBtn.innerHTML = s.isFirst ? '▶ Pornește Jocul' : '→ Următor Cuvânt';

  // Next word preview
  const nextWordBox = document.getElementById('pwNextWord');
  if (s.nextWord) {
    nextWordBox.style.display = 'block';
    document.getElementById('pwNextWordText').textContent = s.nextWord;
    document.getElementById('pwNextWordDef').textContent = s.nextWordDef || '';
    const nextPlayerEl = document.getElementById('pwNextPlayer');
    if (s.nextWordPlayerName) {
      nextPlayerEl.textContent = 'Jucător: ' + s.nextWordPlayerName;
      nextPlayerEl.style.display = 'block';
    } else {
      nextPlayerEl.style.display = 'none';
    }
  } else {
    nextWordBox.style.display = 'none';
  }

  // Mini leaderboard
  const miniLb = document.getElementById('pwMiniLb');
  const miniRows = document.getElementById('pwMiniLbRows');
  if (s.players && s.players.length > 0) {
    miniLb.style.display = 'block';
    const sorted = [...s.players].sort((a, b) => b.score - a.score);
    const medals = ['🥇','🥈','🥉'];
    miniRows.innerHTML = sorted.map((pl, i) =>
      `<div class="pw-mini-lb-row">
        <span class="pw-mini-lb-rank">${medals[i] || (i+1)}</span>
        <span class="pw-mini-lb-name">${pl.name}</span>
        <span class="pw-mini-lb-score">${pl.score.toLocaleString('ro')}</span>
        ${pl.hintsTotal > 0 ? `<span class="pw-mini-lb-hints">💡${pl.hintsTotal}</span>` : ''}
      </div>`
    ).join('');
  } else {
    miniLb.style.display = 'none';
  }
}

/* ══════════════════════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════════════════════ */
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  const key = e.key.toUpperCase();

  // ESC închide modalul de reset
  if (e.key === 'Escape') { hideResetModal(); return; }

  // Blochează shortcut-urile când modalul e deschis
  if (document.getElementById('resetModal').style.display !== 'none') return;

  if (gamePhase === 'playing') {
    if (key === 'C') handleCorrect();
    if (key === 'L') handleHint();
    if (key === ' ' || key === 'S') { e.preventDefault(); handleStop(); }
  }

  if (gamePhase === 'between') {
    if (key === 'N') handleNext();
  }
});

/* ══════════════════════════════════════════════
   THEME SYSTEM
══════════════════════════════════════════════ */
const THEMES = ['clasic', 'cobalt', 'brutalist'];
const THEME_LABELS = { clasic: '◆ Clasic', cobalt: '◆ Cobalt', brutalist: '◆ Brutalist' };

function applyTheme(theme) {
  document.body.dataset.theme = (theme === 'clasic') ? '' : theme;
  localStorage.setItem('joc_theme', theme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.textContent = THEME_LABELS[theme] || '◆ Clasic';
  // Reload QR with new theme colors if setup screen is open
  const setupOpen = document.getElementById('playerSetupScreen')?.style.display !== 'none';
  if (setupOpen) loadQRCode();
}

function cycleTheme() {
  const current = localStorage.getItem('joc_theme') || 'clasic';
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
  applyTheme(next);
}

// Restore saved theme on load
(function() {
  const saved = localStorage.getItem('joc_theme') || 'clasic';
  applyTheme(saved);
})();

/* ══════════════════════════════════════════════
   INIT
══════════════════════════════════════════════ */
if (IS_PRESENTER) {
  setupPresenterWindow();
  const legend = document.getElementById('bottomLegend');
  if (legend) legend.style.display = 'flex';
}
