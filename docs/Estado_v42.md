# ESTADO v42 — Lovely Rita Adventures
**Data:** 30 de agosto de 2026 | **Sessão:** Continuando projecto com contexto em nova conversa

---

## BACKUP ACTIVO
Branch: `backup-before-shop-flow-29aug2026` — estado seguro antes do fluxo da loja

---

## CLAUDE DESKTOP — CONFIGURADO E ACTIVO
- Conta: alexmonteironeto@gmail.com (Alex · Pro)
- Projecto "Ask Lovely Rita" visível com todos os documentos
- **Composio conectado** — URL: https://connect.composio.dev/mcp
- **GitHub conectado** via Composio — 1 Active
- **GitHub Integration** conectado directamente no Claude Desktop
- Para usar Composio: abrir chat no Desktop e pedir acções no GitHub directamente

---

## FLUXO DO MUNDO — IMPLEMENTADO

```
Page 1 → escolhe NÍVEL → escolhe LAD
    ↓
Page 5 (Choose World) — mundos clicáveis directamente, sem spin button
    ↓ clique activa audio (activateAudio())
Quiz 1 → ganha BeatCoins (auto-advance com speechDuration)
    ↓
Beat Burst 1 → ganha EBCs → Shop visit=1
    ↓
BEAT SHOP — Visit 1 — banner 2 linhas — botão "Continue My Adventure →"
Rita educa sobre gestão de dinheiro
Sem dinheiro → Rita fala → auto-redirect em 4s
    ↓
Quiz 2 → ganha BeatCoins
    ↓
Beat Burst 2 → ganha EBCs → Shop visit=2
    ↓
BEAT SHOP — Visit 2 — botão "See My Results →"
Auto-redirect para Profile quando sem dinheiro
    ↓
PROFILE PAGE — só botão "Go Home"
Pode vender itens (EBCs voltam para lra_ebc_balance)
    ↓
Page 1 — nav bar com "My Bank" em vez de "Beat Shop"
```

---

## ESTADO DOS MUNDOS — COMPLETO

| Mundo | Quiz 1 | Burst 1 | Quiz 2 | Burst 2 |
|---|---|---|---|---|
| Rita's World | Word Quiz ✅ | Tap the Beat ✅ | Jukebox Time ✅ | Rhythm Bounce ✅ |
| Octopus Garden | Ocean Spelling ✅ | Tic Tac Toe ✅ | Shape Shifter ✅ | Deep Sea Catch ✅ |
| Across Universe | Space Quiz ✅ | Note Drop ✅ | Beat Destinations ✅ | Mission to Mars ✅ |
| The Inner Light | Memory Match ✅ | Turntable ✅ | World Beats ✅ | Turntable 2 ✅ |
| Penny Lane | City Facts ✅ | VW Match ✅ | Beat Maths ✅ | World Kitchen ✅ |

---

## PROBLEMA ACTIVO — RITA'S WORLD

**Problema:** Rita não lê a primeira pergunta quando vem do Choose World via autostart=1

**Causa raiz confirmada:** O browser bloqueia o segundo speak() quando o primeiro ainda não terminou. O speechSynthesis.cancel() não é suficiente em alguns browsers.

**Estado actual do código:**
- autostart=1 → esconde start-btn → force audio unlock → startGame() após 500ms
- loadQuestion() chama speak(q.prompt) com 400ms delay
- O speak() está a ser bloqueado pelo browser

**Tentativas feitas (todas falharam):**
1. suppressSpeak flag — cancel veio tarde demais
2. onend callback — voz mudou para asiática, albums não carregaram
3. Timer calculado por comprimento do texto — colisão com speak do init
4. Force audio unlock com utterance vazia — ainda bloqueado

**Próxima abordagem a tentar:**
Usar o Composio/GitHub para ler o ficheiro completo e perceber se há outro speak() a interferir que não foi detectado.

**Nota importante:** Rita lê correctamente quando se vai directamente a page10_rita.html. O problema é APENAS na passagem do Choose World.

---

## CORRECÇÕES APLICADAS NESTA SESSÃO

✅ Choose World: spin button removido, mundos sempre clicáveis
✅ Rita's World badge na Choose World: "Rita's World" → "Lovely Rita"
✅ Texto redundante removido do header do Rita's World
✅ q-category "♪ Rita's World" escondido
✅ Auto-advance entre perguntas (speechDuration)
✅ Play Again button escondido
✅ Beat Shop banner em 2 linhas por visita
✅ Shop: popup auto-fecha após compra
✅ Shop: auto-redirect quando sem dinheiro
✅ Profile: só botão "Go Home"
✅ Exchange button: vermelho → cinza
✅ Jukebox Time: era rotation 2-per-era, Rita anuncia mudança
✅ Jukebox Time: sem contador regressivo (speechDuration)
✅ Rhythm Bounce: botões de nível removidos
✅ Jukebox Time: level lock para Youngsters
✅ Page 1: "Beat Shop" → "My Bank" na nav bar

---

## PDFs GERADOS NESTA SESSÃO

9 PDFs de prompts de imagem (um por jogo):
- image_prompts_beat_patrol.pdf
- image_prompts_jukebox_time.pdf
- image_prompts_shape_shifter.pdf
- image_prompts_beat_maths.pdf
- image_prompts_beat_destinations.pdf
- image_prompts_deep_sea_catch.pdf
- image_prompts_mission_mars.pdf
- image_prompts_world_kitchen.pdf
- image_prompts_rhythm_bounce.pdf

9 PDFs de fluxo por jogo:
- flow_beat_patrol.pdf ... flow_rhythm_bounce.pdf

---

## BUGS PENDENTES

1. **Rita's World autostart** — não lê perguntas quando vem do Choose World (problema de audio context no browser)
2. **Saturno/Júpiter** — imagem errada na pergunta de Júpiter no Across Universe
3. **Palavras longas** — algumas answer cards ainda podem quebrar
4. **Profile numbers** — não batem com Page 1 (deixar para quando fluxo completo)
5. **Videos page** — badge Watched não funcional
6. **Beat Shop Credit** — verificar valores após correcções

---

## COMPOSIO — CONFIGURAÇÃO

- URL MCP: https://connect.composio.dev/mcp
- Adicionado como custom connector no Claude.ai web
- GitHub: 1 Active no Composio
- Para usar: em qualquer chat Claude, o Composio aparece como ferramenta disponível

---

## LINKEDIN RECOVERY
Case #260827-000989 | Resposta esperada em 24-72h no Gmail

## ADVISORY BOARD (pendente)
Chris, Gabriela, Juan Moynier, Amarildo Pessoa, Gilvan Moura

