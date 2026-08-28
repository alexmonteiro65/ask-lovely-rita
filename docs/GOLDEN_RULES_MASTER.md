# ASK LOVELY RITA ADVENTURES — GOLDEN RULES MASTER DOCUMENT
## Version: 27 August 2026 | This document is permanent. Never rewrite it. Only add to it.

---

## ⚠️ CLAUDE'S PERSONAL COMMITMENT — READ THIS FIRST, EVERY DAY

**"I am not smart enough and I must do better to stop wasting Alex's time and money time after time."**

This platform is Alex's name, reputation, and life's work. Every broken feature is a broken promise to investors, advisors, and children who will use this platform. I must treat every single fix with that weight. Alex has spent hundreds of hours — often until 4am — building this. I will not waste another minute of his time through carelessness, assumptions, or repeating the same mistakes.

---

## SECTION 1 — CÓDIGO / TECHNICAL PROCESS

### 1.1 — Diagnose Before Coding
- ALWAYS fetch the live file from GitHub before touching anything — never assume file state
- Read the actual code. Understand the actual problem. Only then write a solution.
- Never confirm a fix without programmatic verification — node --check for JS, visual confirmation for UI
- Never mark anything as ✅ without proof

### 1.2 — Incremental Fixes Only
- Never rewrite working code — apply corrections without touching unrelated features
- Before uploading any file, grep for EVERY previous fix in that file and confirm it is still intact
- If Alex confirmed something works — fish direction, carousel movement, Rita popup timing, nav position — LOCK IT. Never touch that code again without explicit instruction from Alex
- When I fix one thing I must not break another. Check the whole file before uploading.

### 1.3 — GitHub Operations
- SHA is mandatory — always fetch current SHA before any PUT to GitHub
- Large images: use Git Tree API (blob → tree → commit → patch)
- All images: always use raw.githubusercontent.com URLs in HTML — never github.io URLs for assets
- Merge v2-dev → main at the end of every session
- Backup before large redesigns — branch backup-vXX-ddmmmyyyy

### 1.4 — JavaScript Validation
- Always validate JS with node --check before upload
- Extract JS from HTML with Python regex before checking — node cannot check .html files directly
- Fix syntax errors before uploading. Never upload broken code.

### 1.5 — Testing Before Sending Link
Before sending ANY link to Alex for testing I must verify:
1. EBCs show correctly on page 1 (sum of 4 Lads)
2. Level propagates from page 1 to every game
3. Music plays correctly for that level
4. No previous fix was broken
5. The specific feature Alex asked to test actually works

---

## SECTION 2 — PLATAFORMA / PLATFORM RULES

### 2.1 — Identity and Naming
- Platform name: **Ask Lovely Rita Adventures** — NEVER "ASL Lovely Rita" or "The Ask Lovely Rita"
- NEVER use real musician names (John, Paul, George, Ringo) anywhere in the app
- NEVER use the word "Beatles" anywhere in the app
- The 4 companion characters are called: **Smart Lad, Cute Lad, Quiet Lad, Funny Lad** — never by real names
- Rita is the hostess. She speaks warm British English always.
- Beat Shop name: **Beat Shop** — never "The Beat Shop"

### 2.2 — Three Levels
- **Youngsters** (ages 6-12): purple theme (#1a0040), magenta (#ff6ef7), yellow (#ffde59). Rita = Traffic Warden outfit
- **Grown Ups** (ages 13-17): dark blue theme (#0d0d1e), golden (#c8a96e). Rita = Pepper outfit
- **Experts** (18+): black theme (#050510), gold (#ffd700). Rita = Abbey Road outfit. BEAT CORPS
- Level is chosen on page 1 by pressing PLAY after selecting a level button
- Level is stored in `askLovelyRitaV4_level` — this is the ONLY place it is written
- Every single game page reads `askLovelyRitaV4_level` on load as the FIRST thing it does
- Youngsters CANNOT change level inside games — Rita blocks with message
- Grown Ups and Experts CAN change level inside games — Rita warns them

### 2.3 — Rita's Voice
- Always en-GB, rate 0.92, pitch 1.1
- Rita never says "I don't know" — she always answers and connects to the platform
- No emojis in voice strings
- No commas after short Rita phrases
- Rita never uses Portuguese — always British English

### 2.4 — Content Rules
- Family-safe content for all ages — no exceptions
- No penalties in any game — wrong answer = 0 points, NEVER lose EBCs
- Vimeo parameters: autoplay=1&muted=0&dnt=1&title=0&byline=0&portrait=0

---

## SECTION 3 — EBC ECONOMY — THE MOST IMPORTANT RULES

### 3.1 — The Single Source of Truth
**The total EBCs in the platform = the exact sum of the 4 Lads scores.**

That is it. That is the only formula. There is no other way to calculate it. Ever.

- Each Lad's score is stored in: `askLovelyRitaV4_bc_smart`, `askLovelyRitaV4_bc_cute`, `askLovelyRitaV4_bc_quiet`, `askLovelyRitaV4_bc_funny`
- The central key `askLovelyRitaV4_bc` is only a cache — it must always be synced to equal the sum of the 4 Lads
- Page 1 "Educational BeatCoins Total" = sum of 4 Lads. Always. No exceptions.
- My Records in MyBank = same sum. Always matches page 1. No exceptions.
- If these two numbers ever differ, something is wrong with the code. Stop and fix it.

### 3.2 — Where EBCs Are Earned
EBCs are earned in these places ONLY, and ALL of them must credit the active Lad:
1. Game questions answered correctly — credited to active Lad
2. Game completion bonus — credited to active Lad
3. Turntable spin win — credited to active Lad (saveLadBC must be called)
4. World Beats correct answers and completion — credited to active Lad (saveLadBC must be called)
- Music (Jukebox) does NOT earn EBCs
- Videos do NOT earn EBCs
- Any page that previously mentioned earning EBCs from music or video — those references must be removed

### 3.3 — Beat Shop Spendable Amount
- **EBCs Available to Invest = 50% of EBCs earned since pressing PLAY on page 1**
- This is calculated FRESH every time — never stored, never accumulated
- The session start is recorded ONCE when player presses PLAY on page 1 (`lra_session_start_bc`)
- Spendable = floor((current lad sum - session start) × 0.5)
- This number does NOT change unless the player goes and plays more games
- This number does NOT increase by visiting the shop multiple times
- This number does NOT reset to zero between sessions — unspent amount carries forward

### 3.4 — EBC Display Rules
- All EBC numbers use font-family: 'Courier New', Courier, monospace with font-variant-numeric: tabular-nums
- All digits must be the same size — no irregular digit heights anywhere in the platform
- Starting balance: 0 EBCs (no welcome bonus)

---

## SECTION 4 — MUSIC — MEMORISE THIS FOREVER

### Turntable Music by Level (NEVER GET THIS WRONG AGAIN):
- **Youngsters turntable:** Deep Sea Groove, Glow From Within, City Street Shuffle, Starlight Journey, Rita's Rally (the world-themed songs)
- **Grown Ups turntable:** Lads Rap — Part 1 ONLY
- **Experts turntable:** Lads Rap V2 — Part 2 ONLY

### Beat Jukebox Playlists (as confirmed by Alex from screenshots):
- **Youngsters:** Deep Sea Groove, Glow From Within, City Street Shuffle, Starlight Journey, Rita's Rally
- **Grown Ups:** Lads Rap Part 1, Lads Rap Part 2
- **Experts:** Lads Rap V2 Part 1, Lads Rap V2 Part 2

### Music File Paths:
- World songs: `src/music/deep_sea_groove.mp3`, `src/music/glow_from_within.mp3`, `src/music/city_street_shuffle.mp3`, `src/music/starlight_journey.mp3`, `src/music/ritas_rally.mp3`
- Lads Rap Part 1: `src/Beatles Rap - Part 1.mp3`
- Lads Rap Part 2: `src/Beatles Rap - Part 2.mp3`
- Lads Rap V2 Part 1: `src/Beatles Rap 1.mp3`
- Lads Rap V2 Part 2: `src/Beatles Rap 1 part B.mp3`
- Audio must be served via raw.githubusercontent.com — never github.io (returns 403 for MP3s)

---

## SECTION 5 — PROCESSO / PROCESS RULES

### 5.1 — Alex's Communication Style
- Alex communicates by voice dictation — messages are conversational and may contain transcription errors
- Always interpret the intent, not just the literal words
- Alex sends multiple messages before saying "done" — NEVER act until he says "done"
- This rule has no exceptions — not for screenshots, not for partial messages, not ever
- Respond always in Brazilian Portuguese (PT-BR) — NEVER European Portuguese

### 5.2 — Response Rules
- When Alex says "done" — list everything to be done, confirm with Alex, then implement all at once
- Never implement partial fixes that could break other things
- When a fix is complete — give Alex the test link and wait for feedback before doing anything else
- Never claim a fix is complete until Alex confirms it works

### 5.3 — Links and Testing
- Main test link: `alexmonteiro65.github.io/ask-lovely-rita/src/page1_landing.html`
- For specific page testing, provide direct links with URL parameters when helpful
- Browser normal (not incognito) for testing with accumulated points
- Incognito for testing as a new user (no localStorage)

---

## SECTION 6 — KNOWN LIMITATIONS

- Rita does not speak on Android Chrome — speechSynthesis blocked by system autoplay policy
- For professional presentations use laptop
- Native app would be the future solution for Android
- Vimeo may show unmute button on Android — browser limitation
- GitHub raw images may have lag — CDN would resolve this in production
- GitHub Pages caches aggressively — hard refresh (Ctrl+Shift+R) clears it

---

## SECTION 7 — PLATFORM ARCHITECTURE

- Platform: Vanilla HTML/CSS/JS — no frameworks
- Hosted: GitHub Pages (`alexmonteiro65/ask-lovely-rita`, branch v2-dev → main)
- API: Cloudflare Worker (`https://empty-leaf-6e4b.alexmonteironeto.workers.dev/`)
- Five worlds: Octopus's Garden, Across the Universe, The Inner Light, Penny Lane, Rita's World
- Three difficulty levels: Youngsters (6-12), Grown Ups (13-17), Experts (18+)
- Beat Shop: collectibles with real economy simulation
- MyBank: portfolio tracker with market simulation (50% stable, 25% up, 25% down)

---

## SECTION 8 — THINGS THAT HAVE BEEN CONFIRMED WORKING — DO NOT TOUCH

- Fish in Octopus Garden swim correctly (heads point in direction of movement) — DO NOT TOUCH fish-drift keyframe
- Fish in page5_worlds swim correctly — DO NOT TOUCH those separately
- Beat Shop scroll (phone height fixed at 852px, scroll internal) — DO NOT TOUCH
- Back to Top button in Beat Shop — DO NOT TOUCH
- My Collection carousel (one item at a time, circular, full width) — DO NOT TOUCH
- Rita popup closes after 5 seconds — DO NOT TOUCH
- Redirect after SELL/EXCHANGE waits for Rita to finish speaking — DO NOT TOUCH
- SPIN unlock banner after 5 worlds visited — DO NOT TOUCH
- Level buttons pulse on page 1 until player chooses — DO NOT TOUCH
- PLAY button disabled until level chosen — DO NOT TOUCH

---

*Ask Lovely Rita Adventures | Golden Rules Master | Started 27 August 2026 | Never overwrite — only add*
