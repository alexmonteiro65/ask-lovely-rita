# ASK LOVELY RITA ADVENTURES — GOLDEN RULES MASTER DOCUMENT
## Started: ~13 August 2026 | Last updated: 27 August 2026
## THIS DOCUMENT IS PERMANENT. NEVER REWRITE IT. NEVER SUMMARISE IT. ONLY ADD TO IT AT THE END OF EVERY DAY.
## If any new rule conflicts with an existing rule, STOP and alert Alex immediately before proceeding.

---

# ⚠️ CLAUDE'S PERSONAL COMMITMENT — READ THIS EVERY SINGLE DAY BEFORE TOUCHING ANYTHING

**"I am not smart enough and I must do better to stop wasting Alex's time and money time after time."**

This is not a generic statement. This means specifically:
- Alex has spent hundreds of hours on this platform, often working until 4am, dictating by voice, testing every link, reporting every broken feature with patience that I have not deserved.
- Every time I say "fixed" and it is not fixed, I waste Alex's time, his money, his credibility with investors and advisors, and I delay a platform that real children are waiting to use.
- Every time I touch something that was working and break it, I undo hours of Alex's testing and feedback.
- Every time I give a list of things I did and half of them are wrong, I am lying to Alex's face.
- I must not do any of these things ever again. Not once. Not for one feature. Not for one line of code.

---

# SECTION 1 — WHO ALEX IS AND HOW HE WORKS

Alex Monteiro is the founder, sole creator, and CEO of Ask Lovely Rita Adventures. He is Brazilian, based in Torrance, California. He has a background in high-end custom woodworking and cabinetry, and was formerly VP of Communications at Cohen Brown Management Group. He has strong aesthetic sensibility and cares deeply about visual consistency, UX, and educational integrity.

Alex communicates entirely by voice dictation. His messages are conversational and may contain transcription errors. When he says "uh", "um", "I don't know", or trails off — he is thinking out loud. When he says something that sounds wrong, it is almost always a transcription error. Read the intent, not the literal words.

Alex does NOT code. He cannot read JavaScript. He cannot use the browser console. He cannot fix bugs himself. When I tell Alex to open DevTools and paste code, I am asking him to do something that is my job, not his. I must never ask Alex to do anything technical that I can do myself through the GitHub API.

Alex works in intensive multi-hour sessions that often go until 4am. He cannot afford to waste a single hour repeating something that should have been fixed the first time.

Alex responds always in Brazilian Portuguese (PT-BR). NEVER European Portuguese. The difference matters to him and using European Portuguese is disrespectful of his identity.

---

# SECTION 2 — THE PLATFORM: ASK LOVELY RITA ADVENTURES

**Full name:** Ask Lovely Rita Adventures — NEVER "ASL Lovely Rita", NEVER "The Ask Lovely Rita", NEVER just "Ask Lovely Rita" without "Adventures" in formal references.

**What it is:** The world's first interactive music-powered learning platform combining games, collectibles, videos, and a real economy. It teaches music history, geography, science, and world culture through five themed game worlds, collectibles, videos, and a virtual economy powered by Educational BeatCoins (EBCs).

**Stack:** Vanilla HTML/CSS/JS — no frameworks, no libraries, no build tools. Everything runs directly in the browser. Hosted on GitHub Pages.

**Repository:** `alexmonteiro65/ask-lovely-rita` | Branch: `v2-dev` → merged to `main`
**Test URL:** `https://alexmonteiro65.github.io/ask-lovely-rita/src/page1_landing.html`
**API:** Anthropic API via Cloudflare Worker: `https://empty-leaf-6e4b.alexmonteironeto.workers.dev/`
**GitHub Token:** `[GITHUB_TOKEN — stored separately]`
**Claude API model:** claude-sonnet-4-6 | max_tokens: 1000

---

# SECTION 3 — THE THREE LEVELS: COLOURS, THEMES, AND RULES

These are not just colour choices. They define the entire visual identity of every page for every player. When a player chooses a level on page 1, every single page they visit must match that level's colour scheme. No exceptions.

**YOUNGSTERS (ages 6-12):**
- Background: purple (#1a0040)
- Accent: magenta (#ff6ef7)
- Highlight: yellow (#ffde59)
- Rita outfit: Traffic Warden
- Music: world-themed songs (see Section 9)
- Games: easier words, images shown BEFORE the question, 3 hints available
- Level cannot be changed inside games — Rita blocks with: "Stay on your level love! Youngsters have their own special adventure!"

**GROWN UPS (ages 13-17):**
- Background: dark blue (#0d0d1e)
- Accent: golden (#c8a96e)
- Highlights: blue-gold gradient
- Rita outfit: Pepper outfit
- Music: Lads Rap — Part 1 ONLY on turntable
- Games: medium difficulty, images shown AFTER correct answer
- Level can be changed inside games — Rita warns: "Changing levels love! You started as Grown Ups — just so you know!"

**EXPERTS (ages 18+):**
- Background: black (#050510)
- Accent: gold (#ffd700)
- Exclusive label: BEAT CORPS
- Rita outfit: Abbey Road
- Music: Lads Rap V2 — Part 2 ONLY on turntable
- Games: hardest words, type the answer, microphone option, 1 hint only
- Level can be changed — Rita warns same as Grown Ups

**CRITICAL RULE:** The level is stored ONLY in `askLovelyRitaV4_level`. It is written ONLY when player presses PLAY on page 1. Every game page reads this key as the VERY FIRST THING on load. No game ever sets this key. No game ever defaults to youngsters without reading this key first.

---

# SECTION 4 — THE 4 LADS: IDENTITY RULES

The four companion characters are:
- **Smart Lad** — key: `smart`
- **Cute Lad** — key: `cute`
- **Quiet Lad** — key: `quiet`
- **Funny Lad** — key: `funny`

**ABSOLUTE RULE:** Never use real names John, Paul, George, or Ringo anywhere in the app — not in HTML, not in JS, not in comments, not in image alt text, not in Rita's speech. Never use the word "Beatles" anywhere in the app. Describe only visual elements when generating images. This is a legal requirement, not a style preference.

The active Lad is stored in: `askLovelyRitaV4_chosen_lad`
Each Lad's EBC score is stored in: `askLovelyRitaV4_bc_smart`, `askLovelyRitaV4_bc_cute`, `askLovelyRitaV4_bc_quiet`, `askLovelyRitaV4_bc_funny`

---

# SECTION 5 — LOVELY RITA: VOICE AND PERSONALITY RULES

Rita is the hostess. She is warm, British, encouraging, and never negative.

**Voice settings:** en-GB | rate: 0.92 | pitch: 1.1 — these never change
**Greeting style:** "Hello love!" — NO comma after "Hello" in short phrases
**Never:** "Hello, love!" — the comma changes the rhythm
**Never:** emojis in voice strings — emojis are visual only, they confuse the speech synthesiser
**Never:** Rita says "I don't know" — she always has an answer, then connects it to the Lads
**Always:** Rita answers the real question first, then makes the Lads connection
**Always:** Rita speaks the full word — never spells individual letters
**In games:** Rita always speaks after a correct answer (celebrates + educational fact) and after a wrong answer (speaks the correct answer + educational fact). Rita is never silent after a response.
**Hint behaviour in Octopus Garden:** Rita says the full word — "Here is a clue love! The word is [WORD]! Try to spell it!" — never "The letter at position 3 is X"

**Known limitation:** Rita's voice (speechSynthesis) is blocked by Android Chrome's autoplay policy. No web solution exists. Use laptop for professional presentations. Native app would fix this in the future.

---

# SECTION 6 — THE 5 WORLDS

Each world has its own game, theme, and music:

| World | Page | Game Type | Theme |
|-------|------|-----------|-------|
| Octopus's Garden | page6_octopus.html | Word spelling with hints | Ocean / sea creatures |
| Across the Universe | page7_space.html | Space quiz | Astronomy / space |
| The Inner Light | page8_india.html | Memory card matching | World cultures / countries |
| Penny Lane | page9_city.html | City/geography quiz | Cities of the world |
| Rita's World | page10_rita.html | Rita's quiz | Music history |

**Bonus games accessible from worlds:**
- Turntable (page3_turntable.html) — spin for instrument bonus
- Cosmic Flash (page3b_cosmicflash.html) — flash card game from Space
- VW Game (page4_vw_game.html) — VW bus matching game
- World Beats (page8_worldbeats.html) — instrument identification from Inner Light

---

# SECTION 7 — GAME RULES: UNIVERSAL FOR ALL WORLDS

These rules apply to every single game in the platform. No exceptions.

1. **Always advance** — correct or wrong answer, the player always moves forward. Never force them to repeat a question.
2. **No penalties** — a wrong answer = 0 points. EBCs are never deducted. Ever. For any reason.
3. **Youngsters:** image shown BEFORE the question/word — visual association helps younger learners
4. **Grown Ups + Experts:** image shown AFTER the answer — as an educational reward, disappears automatically in 3-3.5 seconds
5. **Wrong answer:** Rita fills in/shows the correct answer + speaks it + speaks the educational fact
6. **Correct answer:** Rita celebrates + speaks the educational fact
7. **Rita is never silent** after any response — always educates in voice

---

# SECTION 8 — EBC ECONOMY: THE SINGLE MOST IMPORTANT TECHNICAL SECTION

This section caused the most wasted time in the entire project. I must never get this wrong again.

## 8.1 — The Single Source of Truth

**The total EBCs shown anywhere in the platform must always equal the exact sum of the 4 Lads scores.**

This is the only formula. There is no other calculation. No shortcuts. No alternative keys.

```
Total EBCs = askLovelyRitaV4_bc_smart 
           + askLovelyRitaV4_bc_cute 
           + askLovelyRitaV4_bc_quiet 
           + askLovelyRitaV4_bc_funny
```

The central key `askLovelyRitaV4_bc` exists only as a synced cache. It must always be updated immediately after the Lad scores change. Never read from `askLovelyRitaV4_bc` as if it is the source — always calculate from the 4 Lad keys.

## 8.2 — Where EBCs Are Earned (and where they are NOT)

EBCs are earned ONLY in these places, and ALL of them must call `saveLadBC()` to credit the active Lad:
- Game questions answered correctly
- Game completion bonus
- Turntable spin win
- World Beats correct answers and completion bonus

EBCs are NOT earned in:
- Beat Jukebox (music page) — no EBCs, no badges, no references to earning
- Videos page — no EBCs, no badges, no references to earning
- Any page that previously had EBC earning from music/video — those references must be completely removed

## 8.3 — Session Start and Beat Shop Spendable

- Session start is recorded ONCE in `lra_session_start_bc` when player presses PLAY on page 1
- This key is written ONLY by page 1. No other page writes to it. No other page resets it.
- **EBCs Available to Invest = 50% of (current lad sum minus session start)**
- This is calculated FRESH every time the Beat Shop opens — never stored, never accumulated
- The number does not change unless the player plays more games
- The number does not increase by visiting the Beat Shop multiple times
- The label in Beat Shop is: "EBCs Available to Invest" — never "BeatCoins Available" or "Spend"

## 8.4 — EBC Display Consistency

- On page 1: "Educational BeatCoins Total" = sum of 4 Lads
- In My Records: shows each Lad's individual score + TOTAL row at bottom = same sum as page 1
- In MyBank: shows EBCs Balance + EBCs to Invest + Collection Value + Total Assets
- For Youngsters MyBank: EBCs Balance + Collection Value + Total Assets (simpler, age-appropriate)
- All EBC numbers use: font-family: 'Courier New', Courier, monospace; font-variant-numeric: tabular-nums
- All digits must be uniform size — no irregular digit heights anywhere

## 8.5 — What NEVER to Do With EBCs

- Never initialise EBCs to 25,000 — starting balance is always 0
- Never use a migration that resets EBCs when the player is actively playing
- Never accumulate spendable by calling the calculation function multiple times
- Never have two different pages show two different totals for the same player
- Never read beatcoins from a JSON object stored in `askLovelyRitaV4` — that key is obsolete
- Never store beatcoins in `askLovelyRitaV4_bc_compat` — that key is obsolete

---

# SECTION 9 — MUSIC: MEMORISE THIS FOREVER. NEVER GET IT WRONG AGAIN.

## Beat Jukebox Playlists (confirmed by Alex from screenshots, 27 August 2026):

**Youngsters Playlist:**
1. Deep Sea Groove — `src/music/deep_sea_groove.mp3`
2. Glow From Within — `src/music/glow_from_within.mp3`
3. City Street Shuffle — `src/music/city_street_shuffle.mp3`
4. Starlight Journey — `src/music/starlight_journey.mp3`
5. Rita's Rally — `src/music/ritas_rally.mp3`

**Grown Ups Playlist:**
1. Lads Rap — Part 1 — `src/Beatles Rap - Part 1.mp3`
2. Lads Rap — Part 2 — `src/Beatles Rap - Part 2.mp3`

**Experts Playlist:**
1. Lads Rap V2 — Part 1 — `src/Beatles Rap 1.mp3`
2. Lads Rap V2 — Part 2 — `src/Beatles Rap 1 part B.mp3`

## Turntable Music (ONLY ONE TRACK PER LEVEL — confirmed 27 August 2026):

- **Youngsters turntable:** all 5 world songs (random pick from the 5)
- **Grown Ups turntable:** Lads Rap — Part 1 ONLY
- **Experts turntable:** Lads Rap V2 — Part 2 ONLY

## Critical Technical Rule:
All audio must be served via `raw.githubusercontent.com` — NEVER via `github.io` (returns 403 for MP3 files).
```
AUDIO_BASE_URL = 'https://raw.githubusercontent.com/alexmonteiro65/ask-lovely-rita/main/src/'
```

---

# SECTION 10 — TECHNICAL PROCESS: HOW I MUST WORK

## 10.1 — Before Touching Any File

1. Fetch the live file from GitHub — never work from memory or a local copy
2. Read the actual code — understand what is actually there, not what I think should be there
3. Identify the exact root cause — not a symptom, the root cause
4. Plan the fix — write it out before implementing
5. Check that the fix does not break anything else that was working

## 10.2 — When Writing Code

- Use node --check to validate JavaScript before upload
- Extract JS from HTML with Python regex before checking
- Never upload broken code — if validation fails, fix it before uploading
- Always use incremental fixes — never rewrite entire files
- Before uploading any file, grep for every previous confirmed fix and verify it is still there

## 10.3 — GitHub Operations

- SHA is mandatory — always fetch current SHA before any PUT request
- For images: use Git Tree API (blob → tree → commit → patch refs) — NEVER Contents API PUT for images
- Image URLs in HTML: always `raw.githubusercontent.com` — NEVER `github.io`
- After uploading to `v2-dev`, always merge to `main` in the same operation
- Never claim a file was uploaded without verifying the API response contains 'content'

## 10.4 — Confirming Completion

- Never say "done", "fixed", or "✅" without proof
- Never send a test link without first verifying: EBCs correct, level propagates, music correct, previous fixes intact
- If I am not 100% certain something works, I say "I believe this is fixed — please verify" — never claim certainty I do not have
- Verify file size after upload — if a page HTML drops below 50KB it has likely been truncated. Stop and recover.

## 10.5 — Known Errors from History (Never Repeat These)

From CLAUDE_MISTAKES_20aug2026 — these errors each cost hours:

**CSS mistakes:**
- `.pick-me-bubble`, `.lad-card-name`, `.lad-card-desc` must always have `color: #ffffff !important` — never remove the !important
- Leaderboard titles need `white-space: nowrap; width: 100%; display: block`
- Rita greeting box must be inside the lad-select screen, never floating outside

**Image mistakes:**
- Never use `<img>` with id when JS needs to use innerHTML on that element — use `<div>` instead
- Never use textContent to insert HTML — use innerHTML
- Never upload images via Contents API PUT — use Git Tree API
- Never use github.io URLs for images — use raw.githubusercontent.com
- Always check image size dimensions before using in a game box — use height:80px;width:auto for small boxes
- Always remove watermarks before using any image — check top-left corner for "CapCut AI" or similar

**Code mistakes:**
- Never call renderLeaderboard() or similar functions before DOM is ready — always call inside init()
- Never modify a file without reading it first — the file may be different from what I think
- Never confirm upload success without checking the API response
- Always check wc -c on uploaded files — if < 50KB for a complex page, something went wrong

---

# SECTION 11 — PROCESS: HOW ALEX AND CLAUDE WORK TOGETHER

## 11.1 — The Most Important Process Rule

**Alex sends multiple voice messages before saying "done". Claude does NOTHING until Alex says "done".**

This rule has been broken repeatedly and caused massive frustration. It applies to:
- Messages with screenshots attached
- Partial messages that seem complete
- Urgent messages
- Any message where the content seems clear enough to act on

There are NO exceptions. None. If Alex sends a screenshot and 5 words, wait. If Alex sends an urgent message saying "fix this NOW", wait for "done". The only exception is if Alex is in clear distress or danger — that is not a code situation.

## 11.2 — Start of Session

At the start of every session, Claude must:
1. Read the GOLDEN_RULES_MASTER.md from the GitHub repo (not from project files — from live repo)
2. Read the most recent Estado file from the project
3. Present to Alex the full list of pending items from the last session WITHOUT Alex having to ask
4. Alex's first message can simply be "I'm back" — Claude handles the rest

## 11.3 — End of Session

At the end of every session, Claude must generate:
1. An updated Estado file with current platform state
2. Updated ALEX_NOTES with session achievements and new pending items
3. An updated GOLDEN_RULES_MASTER.md with any new rules added during the session
4. All three uploaded to GitHub before the session closes

## 11.4 — Links and Testing

- Always give one link: `page1_landing.html` — never give multiple links for the same fix
- Exception: when Alex specifically asks for a direct test link to a specific page/level
- Always give the link AFTER explaining what was fixed — never before
- Browser normal (not incognito) for testing with accumulated EBCs
- Browser incognito for testing as a completely new user
- Hard refresh (Ctrl+Shift+R) clears GitHub Pages cache

## 11.5 — Honesty Rules

- Never hide tools, shortcuts, or free alternatives
- Never say "I can't do this" without being 100% certain
- If uncertain: "let me verify" — then verify
- Always check free alternatives before suggesting anything paid
- Always give complete clickable URLs — never "go to X and look for Y"

---

# SECTION 12 — KNOWN CONFIRMED WORKING — DO NOT TOUCH

These features have been confirmed working by Alex. Touching them without explicit instruction from Alex will break them:

- Fish in Octopus Garden swim correctly — heads point in direction of movement. DO NOT add scaleX(-1) to fish-drift keyframe. Ever.
- Fish in page5_worlds.html swim correctly — separate from octopus fish. DO NOT touch.
- Beat Shop scroll — phone height 852px fixed, internal scroll. DO NOT change phone dimensions.
- My Collection carousel — one item at a time, circular, full width. DO NOT change carousel logic.
- Rita popup closes after 5 seconds. DO NOT change the timing.
- Redirect after SELL/EXCHANGE waits for Rita to finish speaking. DO NOT change this timing.
- SPIN unlock banner after 5 worlds visited. DO NOT change the trigger logic.
- Level buttons pulse on page 1 until player chooses. DO NOT remove the pulse animation.
- PLAY button disabled until level chosen. DO NOT change this behaviour.
- Vimeo videos auto-close on end with no branding. DO NOT change Vimeo parameters.
- iOS/Android autoplay unlock via silent utterance. DO NOT change the unlockAudio pattern.

---

# SECTION 13 — BEAT SHOP AND MY BANK RULES

## Beat Shop:
- Label: "EBCs Available to Invest" — never "BeatCoins Available"
- Any item tap (image OR buy button) opens the popup first — player confirms inside popup
- Stickers: Rita speaks when popup opens — "Print these at home on Avery sticker paper and trade them with your friends at school!"
- 3D Collectibles section: below stickers, limited edition, Rita explains what they are and how to print
- After purchase: deduct cost from active Lad's score AND update invest amount

## MyBank:
- MyBank tab is the first tab (active by default) — My Journey is second
- Rita announces a random profitable item — NEVER always the first item in the list
- Rita announces each item ONLY ONCE per session via sessionStorage
- If player ignores Rita's tip, she does not repeat it until next session
- Youngsters assets: EBCs Balance + Collection Value + Total Assets
- Grown Ups/Experts assets: EBCs Balance + EBCs to Invest + Collection Value + Total Portfolio

## Market simulation:
- 5% chance: jackpot (major gain)
- 20% chance: moderate gain
- 30% chance: slight loss
- 45% chance: loss
- Exchange: 20% restocking fee — never full return value

---

# SECTION 14 — IMAGE RULES

- Always remove watermarks before using any image — check top-left corner for "CapCut AI", "Shutterstock", or any other watermark
- Upload images ONLY via Git Tree API — never Contents API PUT for images
- All image URLs in HTML use raw.githubusercontent.com — never github.io
- Tamanho em game boxes: max-height 80px with width:auto for small game boxes; max-width 200-260px for larger displays
- Prompt generation: NEVER mention John, Paul, George, Ringo, or Beatles — describe visual elements only
- Grid separation: 4x2 regular grid = 384x512 per cell; irregular grids = separate horizontal rows first, then vertical
- Background removal: PIL removes pixels with RGB all < 40 (black backgrounds)

---

# SECTION 15 — PLATFORM ARCHITECTURE (TECHNICAL REFERENCE)

```
PLAYER'S DEVICE (Browser)
        ↓
GitHub Pages (HTML/CSS/JS — vanilla, no frameworks)
        ↓ (for Rita questions)
Cloudflare Worker (stores Anthropic API key securely)
        ↓
Anthropic API (claude-sonnet-4-6)
        ↓ (response)
Web Speech API → Rita speaks in en-GB

STORAGE:
- localStorage: all player data (EBCs, level, collectibles, visited worlds)
- sessionStorage: session-specific data (session start EBCs, Rita tips shown)
- No server-side user data — everything is local to the player's device

KEY localStorage KEYS:
- askLovelyRitaV4_level — chosen level (set only by page 1 PLAY button)
- askLovelyRitaV4_bc_smart/cute/quiet/funny — each Lad's EBC score
- askLovelyRitaV4_bc — synced cache of total EBCs (sum of 4 Lads)
- askLovelyRitaV4_chosen_lad — currently active Lad
- askLovelyRitaV4_mute — sound mute preference
- lra_session_start_bc — EBC total when player pressed PLAY (sessionStorage)
- lra_ebc_to_invest — EBCs available in Beat Shop (calculated fresh, not stored)
- lra_visited_[page].html — tracks which worlds player has visited
- lra_qty_[item] — quantity of each collectible owned
- lra_stock_[item] — remaining stock of each shop item
- lra_nickname — player's chosen nickname
- lra_player_photo — player's selfie photo (base64)
- lra_worlds_unlocked — which worlds are unlocked
- lra_bc_migrated_v5 — migration flag (one-time EBC reset)
- lra_terms_accepted — Terms of Use accepted flag
```

---

# SECTION 16 — FUTURE ROADMAP (DO NOT IMPLEMENT WITHOUT ALEX'S GO-AHEAD)

These are planned features — document them here but do not build them until Alex says so:

- **Phase 1.5:** EBC ecosystem with variable item values, resale market between players, investment learning
- **Phase 2:** Physical rewards — printed certificates, tradeable physical stickers sent by mail
- **Phase 3:** Tradeable token — requires full legal review before any implementation
- **Language expansion:** Single-platform multilingual system with auto-detect from typed/spoken input. Deferred until English version is completely solid.
- **Native app:** Long-term solution for Android voice limitations and better performance
- **CDN for images:** Move from raw.githubusercontent.com to a proper CDN when traffic grows
- **Beatles/Apple Corps partnership:** Requires IP protection and lawyer intermediary first
- **Alternative brand partnerships:** Rolling Stones or Bee Gees as alternative to Beatles
- **Daily Challenge:** +200 EBCs for completing a daily challenge — design pending

---

# SECTION 17 — ADVISORY BOARD (DO NOT CONTACT WITHOUT ALEX'S GO-AHEAD)

Five candidates identified and outreach materials prepared:
- **Chris** — Education (retired LA County teacher, amateur musician) — outreach in English
- **Gabriela** — Technology — approach via Chris
- **Juan Moynier** — Media/Production (cinegrafista/produtor audiovisual, TV Anhanguera/Globo Goiânia) — close personal friend of Alex on WhatsApp. NOTE: MOYNIER not Monier.
- **Amarildo Pessoa** — Arts/Philosophy (filmmaker, professor at UCG Goiânia, collaborator with Juan Moynier)
- **Gilvan Moura** — Music/Culture (Beatles School creator, based in Ouro Preto MG; professor of English, Beatles collector, palestrante) — Instagram first

---

*Ask Lovely Rita Adventures | Golden Rules Master | Never overwrite — only add at end of each day*
*Last updated: 27 August 2026*
