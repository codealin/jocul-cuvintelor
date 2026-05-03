# CLAUDE.md — Jocul Cuvintelor
> Fișier de context persistent pentru sesiunile de dezvoltare Claude Code / VS Code.
> Actualizează acest fișier la fiecare sprint major.

---

## 1. Ce este jocul

**Jocul Cuvintelor** este o adaptare digitală a emisiunii TV omonime prezentată de Dan Negru pe Kanal D. Jucătorii trebuie să ghicească un cuvânt pe baza unei definiții afișate pe ecran, cu litere ascunse care pot fi dezvăluite progresiv. Scorul se calculează pe baza literelor rămase nedezvăluite.

### Context de utilizare
- **Game night personal** — joc de societate cu prietenii
- **Team building corporate** — eveniment de grup, prezentatorul controlează jocul de pe un panou separat
- **Format TV** — ecranul principal pe televizor/proiector, prezentatorul pe laptop/tabletă

### Reguli de bază (fidel emisiunii)
- Fiecare jucător are o rundă de cuvinte (14 în Classic, 7 în Arcade)
- Timer individual de 4 minute per jucător
- **100 lei per literă** nedezvăluită la răspuns corect
- Jucătorul apasă **STOP** când știe răspunsul — abia atunci prezentatorul poate marca Corect
- Dacă STOP expiră (30 sec) fără răspuns → automat Greșit, penalizare = litere rămase × 100
- Dacă toate literele sunt dezvăluite prin hint-uri → automat Greșit, 0 penalizare
- Prezentatorul poate dezvălui litere una câte una (hint, −100 per literă)

---

## 2. Structura fișierelor

```
jocul-cuvintelor/
├── jocul-cuvintelor1_1.html     # Aplicația completă (single-file)
├── sursa_complet.json           # Baza de date de cuvinte pentru DEV/TEST (563 cuvinte)
│
├── CLAUDE.md                    # Acest fișier — context pentru Claude
│
# Scripturi utilitare (pipeline bază de date):
├── extrage_cuvinte.py           # Extrage lista de cuvinte din JSON → .txt
├── proceseaza_cuvinte_noi.py    # Filtrează lista brută GPT (deduplicare, validare 4-10 lit)
└── combina_json.py              # Combină două fișiere JSON, elimină duplicate
```

### Notă despre baze de date
- `sursa_complet.json` — 563 cuvinte, folosit pentru **dezvoltare și test**
- Există o sursă mai mare în același format — folosită pentru producție/evenimente reale
- Ambele respectă același format JSON (vezi secțiunea 4)

---

## 3. Funcționalități implementate

### 3.1 Ecrane / Flow-ul jocului
```
Start Screen
  → (opțional: upload JSON)
  → Player Setup Screen (mod + număr jucători + nume)
    → Ready Screen (per jucător — afișează timerul inițial)
      → Game Screen (jocul activ)
        → [Classic] Interim Screen (între jucători, leaderboard parțial)
        → End Screen (leaderboard final)
```

### 3.2 Moduri de joc

**Classic**
- Fiecare jucător primește un set propriu de **14 cuvinte** (2 din fiecare lungime: 4,4,5,5,6,6,7,7,8,8,9,9,10,10)
- Seturile sunt generate cu `usedSet` partajat → fără duplicate între jucători
- Jucătorii joacă complet pe rând; între ei apare Interim Screen cu clasamentul parțial

**Arcade**
- Fiecare jucător primește un set propriu de **7 cuvinte** (câte unul din fiecare lungime: 4,5,6,7,8,9,10)
- Cuvintele sunt **interleaved** în `sessionWords`: toți jucătorii joacă cuvântul de 4 litere pe rând, apoi 5, etc.
- Rotația: `activePlayer() = players[currentWordIdx % players.length]`
- Sub litere apare "URMEAZĂ: [Nume]" pentru jucătorul următor
- Contorul TV arată `TURA X / 7` în loc de `CUVÂNTUL X / 14`

### 3.3 Timer system
- **Timer principal**: 240 secunde (4:00) per jucător, individual, pauzat când nu e tura lui (Arcade)
- **Stop timer**: 30 secunde countdown după ce jucătorul apasă STOP
- Ultimele 5 secunde din Stop: sunet mai acut și mai scurt
- La expirare Stop: `handleWrong(true)` automat (bypass stop check)
- La expirare timer principal: `handleWrong(true)` automat + notificare "TIMP EXPIRAT"

### 3.4 Scoring & Leaderboard
- Scor per jucător: `player.score` acumulat pe toată runda
- `+N*100` la Corect (N = litere nedezvăluite prin hint)
- `-N*100` la Greșit (același calcul)
- Dacă toate literele dezvăluite prin hint → handleWrong automat, penalizare 0
- **Tiebreaker**: la scoruri egale, sortare după `timerSecs` descrescător (mai mult timp rămas = mai bine)
- Timerul apare în leaderboard **numai** lângă jucătorii la egalitate de scor

### 3.5 Regula STOP obligatorie
- Variabila `stopWasPressedThisWord` (boolean, resetată la fiecare cuvânt nou)
- Butoanele **Corect** și **Greșit** sunt disabled până la apăsarea STOP
- Excepții care bypass-uiesc verificarea: expirare Stop, expirare timer principal (ambele `skipStopCleanup=true`)

### 3.6 Animație slot machine
- La `handleCorrect` / `handleWrong`: literele ascunse intră în spin înainte să se dezvăluie
- Fiecare literă se oprește în cascadă: `SPIN_DURATION=380ms` + `STAGGER=110ms` per literă
- Literele deja dezvăluite prin hint sar animația
- La aterizare: animație CSS `scaleY` (efect de "cădere")
- `gamePhase = 'between'` se setează imediat la start animație → nu permite acțiuni duble

### 3.7 Web Audio API (sunet cronometru)
- Niciun fișier audio extern — totul generat cu `OscillatorNode`
- Tick normal: 820Hz, 90ms, volum 0.15
- Tick urgent (ultimele 5 sec): 1100Hz, 60ms, volum 0.25
- AudioContext lazy-init la prima interacțiune (evită restricțiile browser)

### 3.8 Prezentator — panou lateral (P)
- Activat cu tasta **P** pe ecranul TV
- Slide-in din dreapta (overlay, 380px)
- Afișează: cuvântul curent, număr litere, nota cu sinonime/capcane, scor potențial, timer jucător activ
- Butoane: ✓ Corect (C), Literă (L), ⏸ Stop (SPACE), → Următor (N)
- **X / Greșit** eliminat din UI (există în cod, declanșat automat)

### 3.9 Presenter Window — fereastră separată
- URL: `game.html#presenter` → detectat prin `location.hash === '#presenter'`
- Comunicare prin `BroadcastChannel('joc_cuvinte')` — funcționează în același browser, ferestre/tab-uri diferite
- **Perfect pentru**: extended monitor (jocul pe TV via HDMI, prezentatorul pe ecranul laptopului)
- Prezentator vede: cuvântul, definiția, notele, scor potențial, hint-uri folosite, toate butoanele
- Tastele C/L/SPACE/N funcționează și în fereastra prezentator (state cached în `window._lastPwState`)
- Starea se sincronizează la fiecare acțiune prin `broadcastState()`

### 3.10 Alte funcționalități
- **Upload JSON**: drag & drop sau click, validare format, fallback la baza internă
- **Definiția ascunsă la start**: cuvântul nu e vizibil până la primul N (prezentatorul îl vede dinainte)
- **Dots de progres**: 14 (Classic) sau `players×7` (Arcade) puncte vizuale în top bar
- **Notificări**: toast-uri colorate (verde/roșu/albastru) pentru feedback instant
- **Big Stop Button**: buton lateral vizibil pe ecranul TV, pentru jucător cu mouse/touch
- **Scanlines overlay**: efect vizual TV pe tot ecranul (CSS `repeating-linear-gradient`)
- **Colțuri decorative**: elemente CSS fixe în cele 4 colțuri

---

## 4. Arhitectura tehnică

### 4.1 Single-file HTML
Toată aplicația e într-un singur `.html`:
```
<head>
  CSS (variabile, toate ecranele, animații)
</head>
<body>
  DOM (toate ecranele, suprapuse, afișate/ascunse prin display:flex/none)
  <script>
    POOL intern (fallback, ~56 cuvinte)
    BroadcastChannel setup
    State variables
    Audio functions
    Slot animation
    Game logic functions
    Keyboard listeners
    Init (IS_PRESENTER check)
  </script>
</body>
```

### 4.2 State management
```javascript
// Jucători
let players = [];          // [{name, score, timerSecs, words}]
let currentPlayerIdx = 0; // Classic only
let gameMode = 'classic' | 'arcade';
let sessionWords = [];     // Cuvintele active (Classic: ale jucătorului curent; Arcade: interleaved)
let currentWordIdx = 0;

// Cuvânt curent
let revealedLetters = [];  // true = dezvăluit prin hint
let shownLetters = [];     // true = vizibil pe ecran (hint sau reveal final)
let stopWasPressedThisWord = false;

// Timere
let mainTimerInterval, stopTimerInterval;
let mainTimerRunning, stopActive;
let stopTimerSecs = 30;

// UI
let gamePhase = 'idle' | 'playing' | 'between' | 'end';
let presenterVisible = false; // panoul lateral P
```

### 4.3 BroadcastChannel protocol
```javascript
// TV → Presenter (la fiecare acțiune)
BC.postMessage({
  type: 'state',
  phase,           // 'idle'|'playing'|'between'|'end'
  word,            // string cuvânt
  definitie,
  note,
  wordIdx, totalWords,
  playerName, playerScore, playerTimer,
  revealedLetters, // array boolean
  potential,       // litere rămase × 100
  hintsUsed,
  stopActive, stopTimerSecs,
  stopWasPressedThisWord,
  gameMode,
  nextPlayerName,  // Arcade only
  isFirst,         // true dacă timerul nu a pornit încă
  players,         // [{name, score}] pentru leaderboard live
});

// Presenter → TV (acțiuni)
BC.postMessage({ type: 'action', action: 'correct'|'wrong'|'hint'|'stop'|'next' });
```

### 4.4 Generarea cuvintelor
```javascript
const DIST_CLASSIC = [4,4,5,5,6,6,7,7,8,8,9,9,10,10]; // 14 cuvinte
const DIST_ARCADE  = [4,5,6,7,8,9,10];                  // 7 cuvinte

// generateOneSet(usedSet, distribution) → array de cuvinte
// - dacă uploadedWords există: din JSON extern (generateFromJSON)
// - altfel: din POOL intern (generateFromPool)
// - usedSet partajat între jucători → fără duplicate cross-player
```

### 4.5 Formatul JSON pentru cuvinte
```json
[
  {
    "cuvant": "TRANDAFIR",
    "definitie": "Floarea cu spini și parfum inconfundabil, simbolul iubirii în orice limbă.",
    "note": "Răspuns: TRANDAFIR. 9 litere. Poate da cu ROZE."
  }
]
```
- `cuvant`: uppercase, diacritice corecte, 4-10 litere
- `definitie`: scurtă, metaforică, cu umor — stilul emisiunii Dan Negru
- `note`: hint pentru prezentator — răspuns explicit, sinonime posibile, capcane

### 4.6 Design system (CSS variables)
```css
--gold: #FFD700        /* Culoarea principală — text titluri, borders active */
--gold-dim: #B8960C    /* Gold secundar — elemente inactive, badges */
--red: #E63030         /* Greșit, Stop, urgent */
--green: #00C853       /* Corect, success */
--blue: #1E90FF        /* Hint, info */
--bg: #0A0A0F          /* Background principal */
--text: #F0F0F0        /* Text normal */
--dim: #888            /* Text secundar, labels */
```
Fonturi: **Bebas Neue** (titluri mari), **Oswald** (butoane), **Share Tech Mono** (valori, labels), **Rajdhani** (text curent)

---

## 5. Roadmap

### 5.1 Prioritate înaltă — WebSocket server (multi-device)
**De ce**: BroadcastChannel funcționează doar în același browser. Pentru Xbox pe TV + tabletă ca prezentator pe același WiFi e nevoie de server relay.

**Arhitectura planificată**:
```
Game (orice device) ──→ WebSocket Server (Node.js, ~40 linii) ──→ Presenter (orice device)
                    ←─────────────────────────────────────────────
```

**Opțiuni deployment**:
- Local (laptop pe WiFi, `192.168.x.x:3000`) — pentru team building controlat
- Cloud (Railway/Render free tier) — pentru acces de oriunde

**Modificări în joc**: înlocuire `BroadcastChannel` cu `WebSocket`, protocol identic (același format mesaje). Restul codului rămâne neschimbat.

### 5.2 Controller Xbox / Gamepad API
**De ce**: Xbox are Edge browser complet + tastatură Bluetooth. Jocul rulează, dar tastele sunt legate de keyboard.

**Plan**: adăugare listener `gamepadconnected` + polling `navigator.getGamepads()`:
- Buton A → SPACE (Stop)
- Buton B → N (Următor)
- Buton X → C (Corect)
- Buton Y → L (Literă/Hint)

~30 linii JS, independent de restul arhitecturii.

### 5.3 Îmbunătățiri bază de date
**Pipeline existent** (scripturi Python):
1. `extrage_cuvinte.py` → extrage cuvintele existente în `.txt`
2. GPT cu prompt standardizat → 500 cuvinte noi brute
3. `proceseaza_cuvinte_noi.py` → filtrare, deduplicare, sortare pe lungime
4. Claude generează definițiile în stilul jocului
5. `combina_json.py` → merge cu sursa existentă

**Promptul standard pentru GPT** (generare cuvinte):
> Generează o listă cu 500 de cuvinte românești. Reguli: maxim 10 litere, minim 4. Doar substantive sau adjective, nu verbe la infinitiv. Preferă forme articulate (LUPUL, MAREA). Include plural articulat și genitiv dacă se încadrează. Tematici variate: natură, animale, obiecte, meserii, alimente, geografie, sport, artă. Nu repeta. Scrie doar cuvintele, unul pe linie, cu diacritice corecte (Ă Â Î Ș Ț). Peste 10 litere → exclude.

**Distribuție țintă** (per lungime, pentru generare echilibrată în joc):
- 4 litere: minim 30 în pool
- 5-8 litere: minim 40 fiecare
- 9-10 litere: minim 20 fiecare

### 5.4 Alte îmbunătățiri posibile
- **Sesiune Kahoot-style**: server cu cod de sesiune, jucătorii se înscriu de pe telefon, unul pe rând are butonul STOP → arhitectură mai complexă, faza 3
- **Sunet de aplauze** la Corect (Web Audio synthesis sau fișier scurt)
- **Animație intro** per jucător la Ready Screen
- **Statistici post-joc**: câte hint-uri, medie scor per cuvânt, cel mai lung cuvânt ghicit

---

## 6. Convenții

### 6.1 Cod JS
- **Fără framework** — vanilla JS pur, fără dependențe externe
- Funcțiile de acțiune: `handleCorrect`, `handleWrong`, `handleHint`, `handleStop`, `handleNext`
- Funcțiile de UI: `update*` (updateMainTimer, updateScoreDisplay etc.)
- Funcțiile de broadcast: `broadcastState()` apelată la finalul oricărei acțiuni care schimbă starea
- `gamePhase` se setează **imediat** la start acțiune (nu la final) pentru a bloca acțiuni duble
- Orice acțiune care bypass-uiește regula STOP primește parametru explicit: `handleWrong(true)`, `handleCorrect(true)`

### 6.2 Adăugare cuvinte noi
1. Respectă formatul JSON (cuvant/definitie/note)
2. `cuvant`: UPPERCASE, diacritice corecte, 4-10 litere
3. `definitie`: max 1-2 propoziții, stil metaforic/umoristic, nu enciclopedic
4. `note`: începe cu "Răspuns: CUVANT." apoi capcane/sinonime posibile
5. Rulează `proceseaza_cuvinte_noi.py` pentru deduplicare automată
6. Verifică distribuția pe lungimi cu `python3 -c "import json,collections; d=json.load(open('f.json')); print(collections.Counter(len(w['cuvant']) for w in d))"`

### 6.3 Testare manuală
```
# Deschide jocul
open jocul-cuvintelor1_1.html

# Deschide presenter view
open jocul-cuvintelor1_1.html#presenter
# (în alt tab/fereastră al aceluiași browser)

# Upload sursă de test
# → Drag & drop sursa_complet.json pe zona de upload din Start Screen

# Flow rapid de test
# 2 jucători, Classic, câte 2-3 cuvinte → verifică scoring, timer, leaderboard
```

### 6.4 Checklist la orice modificare majoră
- [ ] `broadcastState()` e apelat după modificare (pentru sincronizare presenter)
- [ ] `gamePhase` e setat corect (idle/playing/between/end)
- [ ] `stopWasPressedThisWord` e resetat în `loadWordPaused`
- [ ] Animația `revealWithSlots` e apelată înaintea `showBetweenMsg` (nu invers)
- [ ] Butoanele din `updatePresenterButtons()` și `pwRenderState()` sunt sincronizate

---

## 7. Sesiuni de dezvoltare anterioare (istoric decizii)

| Decizie | Motivație |
|---|---|
| Single-file HTML | Portabilitate maximă — un singur fișier pe desktop, niciun server necesar |
| BroadcastChannel în loc de localStorage | API mai curat pentru comunicare între ferestre, event-driven |
| STOP obligatoriu înainte de Corect | Fidel regulilor emisiunii TV originale |
| handleWrong (nu handleCorrect) la toate literele dezvăluite | handleCorrect crea bug de flow — jucătorul rămânea blocat |
| Arcade: 7 cuvinte (nu 14) | 14 × N jucători era prea lung; 7 dă ~20 min pentru 5 jucători |
| Interleaving în Arcade | Mai dinamic — toți joacă "turul de 4 litere" împreună, competiție clară |
| Web Audio API în loc de fișiere audio | Zero dependențe, portabil, funcționează local fără server |
| Slot animation: gamePhase setat înainte de animație | Previne double-click / acțiuni duble în timpul spinului |
| Definiția ascunsă la primul cuvânt | Prezentatorul vede cuvântul în avans; jucătorul nu |
| Tiebreaker prin timerSecs | Timer afișat doar la jucătorii la egalitate — UI curat |
