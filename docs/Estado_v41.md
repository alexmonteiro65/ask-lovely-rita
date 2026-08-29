# ESTADO v41 — Lovely Rita Adventures
**Data:** 29 de agosto de 2026 | **Branch:** main + v2-dev  
**Backup desta sessão:** `backup-before-shop-flow-29aug2026`

---

## NOME CORRETO DO PROJETO
**Lovely Rita Adventures** (não "Ask Lovely Rita Adventures")

---

## URL DE TESTE
`alexmonteiro65.github.io/ask-lovely-rita/src/page1_landing.html`

---

## ARQUITETURA DE MOEDAS (LINHA VERMELHA — NUNCA MISTURAR)

| Moeda | Ganho em | Chave localStorage | Usado para |
|---|---|---|---|
| BeatCoins | Quiz games (respostas corretas + completion bonus) | `askLovelyRitaV4_bc_[lad]` | Portfolio/MyBank — não pode ser gasto |
| EBCs | Beat Burst bonus rounds APENAS | `lra_ebc_balance` | Beat Shop APENAS |

**Funções:**
- `saveLadBC(amount)` → BeatCoins para quiz games
- `saveEBC(amount)` → EBCs para Beat Burst rounds

**MyBank — 4 linhas:**
1. BeatCoins Total Balance
2. Collection Value (ao preço de compra)
3. Beat Shop Credit (EBCs) — cor OURO, não verde
4. Total Educational Portfolio = soma das 3

**Page 1:** mostra Total Educational Portfolio calculado directamente (mesma fórmula que MyBank). Números SEM separadores de milhar.

---

## MAPA COMPLETO DE JOGOS E MUNDOS

### FLUXO POR MUNDO (ESTADO ACTUAL — ARQUIVOS EXISTENTES)

| Ordem | Mundo | Quiz 1 | Beat Burst 1 | Quiz 2 | Beat Burst 2 |
|---|---|---|---|---|---|
| 1 | Rita's World (page10_rita) | Word Quiz | Tap the Beat (page3c) | Jukebox Time (page_jukebox_time) ✅NEW | Rhythm Bounce (page_rhythm_bounce) ✅NEW |
| 2 | Octopus Garden (page6_octopus) | Ocean Spelling | Tic Tac Toe (page2) | Shape Shifter (page_shape_shifter) ✅NEW | Deep Sea Catch (page_deep_sea_catch) ✅NEW |
| 3 | Across the Universe (page7_space) | Space Quiz | Note Drop (page3b_notedrop) | Beat Destinations (page_beat_destinations) ✅NEW | Mission to Mars (page_mission_mars) ✅NEW |
| 4 | The Inner Light (page8_india) | Memory Match | Turntable (page3) | World Beats (page8_worldbeats) | Turntable 2 |
| 5 | Penny Lane (page9_city) | City Facts | VW Match (page4) | Beat Maths (page_beat_maths) ✅NEW | World Kitchen (page_world_kitchen) ✅NEW |

**Nota:** Beat Patrol (page_beat_patrol) ✅NEW — 1º quiz alternativo para Rita's World (ainda não ligado no fluxo oficial — pendente)

**CosmicFlash (page3b_cosmicflash)** — ainda órfão. goNextPage do page7_space aponta para ele. Decisão pendente.

---

## TODOS OS ARQUIVOS DE JOGO NO REPO

```
src/page1_landing.html       — Home/Landing
src/page2_tictactoe.html     — Tic Tac Toe (Beat Burst — Octopus)
src/page3_turntable.html     — Turntable (Beat Burst — Inner Light)
src/page3b_cosmicflash.html  — Cosmic Flash (órfão — pendente)
src/page3b_notedrop.html     — Note Drop (Beat Burst — Across Universe)
src/page3c_tapthebeat.html   — Tap the Beat (Beat Burst — Rita's World)
src/page4_vw_game.html       — VW Match (Beat Burst — Penny Lane)
src/page5_worlds.html        — Choose World
src/page6_octopus.html       — Octopus Garden (Quiz 1)
src/page7_space.html         — Across the Universe (Quiz 1)
src/page8_india.html         — The Inner Light (Quiz 1)
src/page8_worldbeats.html    — World Beats (Quiz 2 — Inner Light)
src/page9_city.html          — Penny Lane (Quiz 1)
src/page10_rita.html         — Rita's World (Quiz 1)
src/page_adventures.html     — Profile/Adventures page
src/page_shop.html           — Beat Shop
src/page_music.html          — Music/Jukebox
src/page_videos.html         — Videos
src/page_terms.html          — Terms
src/page_records.html        — Records/Leaderboard
src/page_beat_destinations.html  — Beat Destinations ✅NEW (Quiz 2 — Across Universe)
src/page_shape_shifter.html      — Shape Shifter ✅NEW (Quiz 2 — Octopus)
src/page_beat_maths.html         — Beat Maths ✅NEW (Quiz 2 — Penny Lane)
src/page_rhythm_bounce.html      — Rhythm Bounce ✅NEW (Beat Burst — Rita's World B2)
src/page_beat_patrol.html        — Beat Patrol ✅NEW (Quiz alternativo — Rita's World)
src/page_jukebox_time.html       — Jukebox Time ✅NEW (Quiz 2 — Rita's World)
src/page_deep_sea_catch.html     — Deep Sea Catch ✅NEW (Beat Burst 2 — Octopus)
src/page_mission_mars.html       — Mission to Mars ✅NEW (Beat Burst 2 — Across Universe)
src/page_world_kitchen.html      — World Kitchen ✅NEW (Beat Burst 2 — Penny Lane)
```

---

## CORREÇÕES APLICADAS NESTA SESSÃO (29 ago 2026)

✅ CosmicFlash → saveEBC (não saveLadBC)  
✅ NoteDrop → saveEBC (não saveLadBC)  
✅ TicTacToe → saveEBC corrigido (função estava corrompida)  
✅ VW Match → saveEBC, textos "BeatCoins" → "EBCs"  
✅ buy3DItem → bug `newTotal` undefined corrigido  
✅ Page 1 → Total Educational Portfolio calculado directamente (não depende do MyBank)  
✅ Beat Destinations → Rita lê cada pergunta em voz alta  
✅ 9 jogos novos criados e uploaded  

---

## SISTEMA FINANCEIRO MYBANK

```
BeatCoins Total Balance    = soma de askLovelyRitaV4_bc_[lad] × 4
Collection Value           = soma de preços de compra dos itens possuídos
Beat Shop Credit (EBCs)    = lra_ebc_balance
Total Educational Portfolio = soma das três linhas acima
```

**Preços dos itens (para Collection Value):**
```javascript
const PRICES = {
  rita_p1:500, rita_p2:450, vw_red:800, vw_yellow:750,
  badge_oct:350, badge_spc:330, note_gold:200, note_red:150,
  lad_smart:400, lad_cute:400, lad_quiet:400, lad_funny:400,
  stk_lads:800, stk_vw:800, stk_instruments:800, stk_albums:800, stk_rita:1600,
  vw_bus_3d:1200, vw_beetle_3d:2000
};
```

---

## SISTEMA DE VARIAÇÃO DE PREÇOS (PROFILE PAGE — A IMPLEMENTAR)

| Variação | Probabilidade | Resultado |
|---|---|---|
| Jackpot | 5% | ×2 a ×3 do preço de compra |
| Subiu | 20% | +10% a +50% |
| Estável | 50% | Igual ao preço de compra |
| Desceu | 20% | -10% a -30% |
| Caiu muito | 5% | -40% a -50% |

- Calculado quando jogador abre Profile Page
- Vender = EBCs voltam para `lra_ebc_balance`
- Nunca converte para BeatCoins
- Venda sempre com -20% mínimo (restocking fee)

---

## PLANO DE IMPLEMENTAÇÃO — FLUXO DO MUNDO (APROVADO, NÃO IMPLEMENTADO)

### Fluxo completo aprovado por Alex:

```
Page 1
  ├── Escolhe NÍVEL (primeiro)
  └── Escolhe LAD (segundo)
           ↓
Page 5 — Choose World
           ↓
Quiz 1 → ganha BeatCoins
           ↓
Beat Burst 1 → ganha EBCs
           ↓
[TRANSIÇÃO] Rita fala antes de entrar na loja:
"You earned X EBCs love! Now let me take you to the Beat Shop!
You can browse everything but you can only buy what you can afford.
When you are done come back and we continue the adventure!"
Botão: "Take me to the Shop!"
           ↓
🛍️ BEAT SHOP — VISITA 1
- Loja completa
- Jogador pode comprar ou só navegar
- Se tentar comprar sem dinheiro suficiente:
  Rita: "Oh sorry love! You need X more EBCs for that one! Keep playing and come back!"
- Botão saída: "Continue My Adventure →"
           ↓
Quiz 2 → ganha mais BeatCoins
           ↓
Beat Burst 2 → ganha mais EBCs
           ↓
🛍️ BEAT SHOP — VISITA 2
- Loja completa
- Rita: "Final stop love! Last chance to invest before we see your results!"
- Botão saída: "See My Results →"
           ↓
🏆 PROFILE PAGE
- Vê: BeatCoins totais, EBCs, coleção, Total Educational Portfolio
- Pode navegar para MyBank
- Pode vender/devolver itens → EBCs voltam para lra_ebc_balance
- Botão único: "Go Home →"
           ↓
Page 1 — HOME
- Nav bar: Sound / Help / Music / Videos / Ask Rita / Play Again / Profile & Bank
- SEM acesso directo à Beat Shop
```

### Parâmetros de navegação a implementar:

Cada Beat Burst passa para a Beat Shop:
- `?from=world&world=[nome]&visit=[1ou2]`

A Beat Shop lê e grava:
- `lra_current_world` — qual mundo está a jogar
- `lra_shop_visit` — qual visita (1 ou 2)

Com base nisso mostra botão correcto:
- Visita 1 → "Continue My Adventure →"
- Visita 2 → "See My Results →"

### Rita educa sobre gestão de dinheiro:

Na entrada da loja (visita 1):
*"You have X EBCs to invest love! You can buy now or save for something more expensive later. Some items go up in value and some go down — choose wisely darling!"*

Na entrada da loja (visita 2):
*"Welcome back love! You earned more EBCs this round! This is your final chance to invest before you see everything you have accomplished. Remember — items can gain or lose value. Buy what you love!"*

---

## REGRAS DE ACESSO À BEAT SHOP

| De onde | Acesso |
|---|---|
| Após Beat Burst 1 (no mundo) | ✅ Visita 1 |
| Após Beat Burst 2 (no mundo) | ✅ Visita 2 |
| Page 1 (Home) | ❌ Removido da nav bar |
| Profile Page | ❌ Não — só vender/devolver |
| Nav bar durante jogos | ❌ Não |

---

## BUGS PENDENTES (DA SESSÃO E ANTERIORES)

1. **Saturno/Júpiter** — Across the Universe mostra imagem de Saturno para resposta de Júpiter
2. **Palavras longas** — quebram no meio nas answer cards (ex: "photosynthesis")
3. **MyBank por nível** — Youngsters deveria ter visão simplificada (não implementado)
4. **Videos page** — badge "Watched" não funcional
5. **CosmicFlash** — órfão, nenhum mundo navega para ele de forma consistente
6. **Botão Next** — em vários mundos leva a destino diferente do bonus round (decisão pendente)
7. **Beat Shop Credit** — verificar se mostra valores correctos após correções de hoje
8. **Terminologia** — BeatCoins/EBCs ainda inconsistente em algumas páginas antigas
9. **Números** — verificar que não há separadores de milhar (vírgulas) em nenhuma página
10. **Beat Patrol** — criado mas não ligado ao fluxo oficial de Rita's World

---

## DECISÕES PENDENTES DO ROADMAP

1. **Across the Universe Beat Burst** — Note Drop ou Cosmic Flash como oficial?
2. **Botão Next** — remover ou redirecionar para mesmo destino do bonus?
3. **Octopus Garden** — Turntable extra (via Next) — manter como surpresa ou remover?
4. **Note Drop** — mover para Penny Lane como 2º Beat Burst?
5. **Beat Patrol vs Word Quiz** — qual é o Quiz 1 oficial de Rita's World?

---

## LINKEDIN RECOVERY

Case #260827-000989 (aberto 26 ago 2026)
- Meta: manter conta Cohen Brown, fechar conta Gmail nova
- Email antigo: alexmonteiro@cohenbrown.com (sem acesso)
- Email novo: alexmonteironeto@gmail.com (tem acesso)
- Resposta esperada em 24-72h

---

## ADVISORY BOARD (PENDENTE — NÃO CONTACTAR SEM AUTORIZAÇÃO DE ALEX)

1. Chris — Educação (professor aposentado LA County)
2. Gabriela — Tecnologia (filha do Chris)
3. Juan Moynier — Mídia/Produção (TV Anhanguera/Globo Goiânia) — amigo pessoal de Alex
4. Amarildo Pessoa — Artes/Filosofia (cineasta, professor UCG Goiânia)
5. Gilvan Moura — Música/Cultura (Beatles School, Ouro Preto MG)

