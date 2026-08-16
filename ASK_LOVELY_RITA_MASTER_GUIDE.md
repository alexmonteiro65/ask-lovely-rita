# ASK LOVELY RITA — MASTER VISION GUIDE
## Documento Permanente de Visão, Design e Regras do Projeto

---

## 1. O QUE É O ASK LOVELY RITA

Uma **plataforma educacional musical gamificada** inspirada nos Beatles, que ensina conhecimento geral (música, matemática, geografia, ciências, cultura) através de jogos envolventes com personagens icônicos. NÃO é um quiz genérico com emojis de prateleira. É uma experiência imersiva, com identidade visual forte, personagens com personalidade, e mecânicas de jogo inspiradas nos melhores apps do mundo.

**Missão:** Fazer qualquer pessoa — de 6 a 60 anos — aprender enquanto se diverte de verdade, através da magia dos Beatles e da música.

---

## 2. REGRAS ABSOLUTAS (NUNCA QUEBRAR)

- Nome do app: **Ask Lovely Rita** — NUNCA "ASL Lovely Rita"
- Moeda: **BeatCoins** — NUNCA "spend", SEMPRE "invest Educational BeatCoins"
- BeatCoins iniciam em: **80** (localStorage key: `askLovelyRitaV4`)
- Claude API: `claude-sonnet-4-6`, `max_tokens: 1000`
- Versões: a partir da v21, apenas números — v21, v22, v23... (sem letras)
- HTML único autocontido, sem frameworks externos
- Imagens externas via GitHub raw URL (não base64 embutido)
- Responder SEMPRE em PT-BR
- Alex NÃO é programador — instruções passo a passo sempre
- NUNCA criar jogos genéricos com emojis básicos — tudo deve ter identidade visual forte

---

## 3. OS 3 NÍVEIS E SUAS IDENTIDADES VISUAIS COMPLETAS

### 🟣 YOUNGSTERS (6–12 anos)
**Inspiração de jogos:** Prodigy Math, Kahoot! Kids, PBS Kids
**O que funciona nessa faixa:** personagens expressivos, cores vibrantes, recompensas frequentes, missões curtas (2–3 min), feedback imediato com celebração, perguntas simples com imagens

**Visual:**
- BG: `#1a0040` | Accent: `#ff6ef7` | Accent2: `#ffde59`
- Estilo: néon roxo + magenta + amarelo — festivo, enérgico, divertido
- Fonte: arredondada, grande, legível
- Rita outfit: **Traffic Warden** (colorida, simpática)
- Lads: outfit `regular` (casuais, amigáveis)
- Tom de voz: entusiasmado, simples, celebrativo ("WOW! You got it! Amazing!")

**Tipos de jogos para Youngsters:**
- 🎵 **Beat Match** — escutar trecho de música Beatles e adivinhar a música (escolha múltipla com imagens dos álbuns)
- 🔢 **Penny Lane Math** — problemas de matemática básica com tema musical
- 🌍 **Abbey Road Map** — geografia simples com mapa interativo
- 🎨 **Yellow Submarine Color Quiz** — perguntas de cultura geral com visual colorido

---

### 🔵 GROWN UPS / TEENS (13–17 anos)
**Inspiração de jogos:** Kahoot!, Quizlet Live, Duolingo, Trivia Crack
**O que funciona nessa faixa:** competição social, timer de pressão, streaks diários, leaderboard, perguntas com pegadinha, mix de temas (música + cultura pop + ciências)

**Visual:**
- BG: `#0d0d1e` | Accent: `#c8a96e` | Accent2: `#e8d5b0`
- Estilo: dourado + azul escuro — sofisticado mas acessível, estilo "Sgt. Pepper's"
- Rita outfit: **Pepper Outfit** (banda militar colorida)
- Lads: outfit `pepper`
- Tom de voz: cool, desafiador, irônico ("Think you know? Prove it.")

**Tipos de jogos para Grown Ups:**
- ⏱️ **Fast Track** — trivia com timer de 15 segundos, pressão máxima
- 🎸 **Chord Challenge** — identificar acordes e instrumentos Beatles
- 🔥 **Streak Master** — série de perguntas sem errar, cada certa dobra os BeatCoins
- 🧠 **Deep Cut** — perguntas sobre letras, datas, histórias por trás das músicas
- 🌐 **World Tour** — geografia avançada + história + ciências com contexto Beatles

---

### ⭐ EXPERTS / ADULTS (18+ anos)
**Inspiração de jogos:** Trivial Pursuit, Jeopardy!, Cranium, Half Truth
**O que funciona nessa faixa:** profundidade, raridade do conhecimento, prestígio, apostas (casino mechanics), conquistas desbloqueáveis, conteúdo que surpreende até quem já sabe muito

**Visual:**
- BG: `#050510` | Accent: `#ffd700` | Accent2: `#ffd700`
- Estilo: ouro puro + preto profundo — exclusivo, premium, "Abbey Road" era
- Rita outfit: **Abbey Road** (elegante, icônica)
- Lads: outfit `abbey` — **BEAT CORPS** (versão mais séria e estilosa)
- Tom de voz: sofisticado, culto, com humor seco ("Not bad. Now try the hard part.")

**Tipos de jogos para Experts:**
- 🎰 **Vinyl Roulette** — slot machine de álbuns que determina categoria e aposta
- 🃏 **Double Down** — aposta de BeatCoins antes de ver a pergunta
- 📖 **The Archives** — perguntas ultra-específicas sobre sessões de gravação, versões alternativas, fatos ocultos
- 🎤 **Who Said It?** — identificar qual Beatle disse determinada frase/letra
- 🏆 **Beat Corps Challenge** — rodadas eliminatórias de alta dificuldade

---

## 4. OS PERSONAGENS

### Lovely Rita
- Personagem principal e narradora
- Baseada na canção "Lovely Rita, Meter Maid" dos Beatles
- Personalidade: britânica, bem-humorada, sábia, nunca condescendente
- Voz: inglês britânico (Web Speech Synthesis)
- Muda de outfit conforme o tema:
  - Youngsters: Traffic Warden (jaleco amarelo, chapéu)
  - Grown Ups: Pepper Outfit (banda militar colorida)
  - Experts: Abbey Road (elegante, monocromático)

### Os 4 Lads (personagens de escolha)
| Lad | Personalidade | Quote de seleção |
|-----|--------------|-----------------|
| **Smart** | Intelectual, estratégico | "Pick me! I will take you to Strawberry Fields forever!" |
| **Cute** | Carismático, otimista | "No no no! Pick ME! We will walk down Penny Lane together!" |
| **Quiet** | Místico, introspectivo | "Choose me... and find your inner peace. Here comes the sun." |
| **Funny** | Engraçado, improvisador | "OI! Pick me! We will share my Octopus Garden — plenty of room!" |

**Outfits por tema:**
- `regular` → Youngsters
- `pepper` → Grown Ups
- `abbey` → Experts

---

## 5. MECÂNICAS DE JOGO INSPIRADAS NOS MELHORES APPS

### Do Duolingo (adaptar para Rita):
- ✅ **Streaks diários** — "Day 3 on the Beat!" com proteção via BeatCoins
- ✅ **Feedback imediato** — animação de acerto/erro na hora
- ✅ **Lições curtas** — máximo 5 perguntas por rodada
- ✅ **Progressão visual** — barra de XP que enche visualmente

### Do Kahoot! (adaptar para Rita):
- ✅ **Timer de pressão** — responder rápido dá mais BeatCoins
- ✅ **Leaderboard** — ranking ao final de cada rodada
- ✅ **Efeito sonoro** — música Beatles de fundo adaptada

### Do Trivial Pursuit / Jeopardy (adaptar para Rita):
- ✅ **Categorias com cores** — cada categoria tem cor e ícone próprio
- ✅ **Apostas** — o jogador pode dobrar/triplicar a aposta antes da pergunta
- ✅ **Perguntas em camadas** — fácil → médio → difícil dentro da mesma sessão

### Casino Mechanics (exclusivo do Rita):
- 🎰 **Vinyl Slot Machine** — vinil giratório que sorteia nível/álbum/categoria
- 💰 **BeatCoins como fichas** — investir antes de responder
- 🃏 **Double Down** — dobrar a aposta após ver metade da dica
- 🎁 **Daily Jackpot** — +200 BeatCoins por jogar todo dia

---

## 6. ARQUITETURA DE PÁGINAS

### Páginas existentes ou planejadas:
```
Page 1: Landing / Home (real_size_preview_v20f.html) ✅
  → Tema muda conforme nível selecionado
  → Ask Rita (campo de perguntas + mic)
  → Seleção de nível: Youngsters / Grown Ups / Experts

Page 2: Lad Select (page2_lad_select.html) 🔄 em desenvolvimento
  → Jogador escolhe seu Lad
  → Visual muda conforme tema/nível escolhido
  → Quote do Lad animada

Page 3: Game Hub (a criar) 📋
  → Central de jogos do nível escolhido
  → Vinyl Slot Machine para Experts
  → Seleção de tipo de jogo

Page 4: Game Screen (page4_motor_skills.html) 🔄 em desenvolvimento
  → Tela do jogo em si
  → Timer, pergunta, opções de resposta
  → Animação de acerto/erro

Page 5: Results / Leaderboard (a criar) 📋
  → BeatCoins ganhos
  → Streak atual
  → Ranking e próximos desafios
```

---

## 7. O QUE A LANDING PAGE DEVE COMUNICAR POR NÍVEL

Quando o usuário seleciona um nível na landing page, **TUDO muda**:
- Cores de fundo e accent
- Outfit dos Lads e da Rita
- Texto e tom dos botões
- Álbuns exibidos
- Tipo de pergunta sugerida no placeholder
- Música de fundo (quando implementada)

**Não é só uma mudança de cor — é uma mudança de mundo.**

---

## 8. O QUE NÃO FAZER (LIÇÕES APRENDIDAS)

❌ Emojis genéricos como elementos de design principais
❌ Jogos de "clicar no balão" ou "pegar estrelas caindo"
❌ Perguntas sem contexto Beatles/musical
❌ Visual de aplicativo genérico (botões azuis padrão, fontes sem personalidade)
❌ Feedback sem animação ou som
❌ Reescrever código do zero — sempre editar o existente
❌ Misturar inglês e português na interface (interface sempre em inglês)
❌ Chamar de "ASL Lovely Rita"

---

## 9. STACK TÉCNICO

- **HTML único** autocontido por arquivo/página
- **CSS embutido** com variáveis CSS (custom properties)
- **JavaScript puro** embutido — sem frameworks
- **Web Speech API** — reconhecimento de voz (inglês britânico)
- **Web Audio API** — sons e música
- **Claude API** — `claude-sonnet-4-6`, `max_tokens: 1000`
- **localStorage** — key: `askLovelyRitaV4`
- **GitHub** — `github.com/alexmonteiro65/ask-lovely-rita` pasta `/src`
- Imagens em `/src/images/` referenciadas por URL raw do GitHub

---

## 10. PRÓXIMOS PASSOS (v21 em diante)

### v21 — Integração Claude API Real
- [ ] `askRita()` conectada à Claude API de verdade
- [ ] Rita responde perguntas Beatles com personalidade por tema
- [ ] Voz britânica via Web Speech Synthesis
- [ ] Respostas curtas, educativas, com humor

### v22 — Lad Select funcional
- [ ] Page 2 com seleção de personagem animada
- [ ] Lad escolhido salvo no localStorage
- [ ] Transição suave para o Game Hub

### v23 — Vinyl Slot Machine
- [ ] Animação do vinil girando
- [ ] Sorteio de categoria/nível/álbum
- [ ] Integração com sistema de apostas de BeatCoins

### v24 — Primeiro jogo completo
- [ ] Beat Match (Youngsters) ou Fast Track (Grown Ups)
- [ ] Timer funcionando
- [ ] BeatCoins sendo ganhos/perdidos de verdade
- [ ] Animações de acerto e erro

### v25+ — Expansão
- [ ] Daily Challenge (+200 BeatCoins)
- [ ] Streak system completo
- [ ] Leaderboard
- [ ] 90 questões em 6 mundos × 3 níveis
- [ ] Shop de BeatCoins

---

## 11. COMO USAR ESTE GUIA EM NOVAS SESSÕES

1. Claude lê este arquivo PRIMEIRO (está no Project como contexto)
2. Verifica o Estado_v20f_completo.md para estado técnico atual
3. Pede o HTML atual ao Alex (ou busca no GitHub se público)
4. NUNCA reescreve do zero — sempre edita o existente
5. Qualquer dúvida sobre visão/design → consulta este guia
6. Qualquer mudança de visão que Alex decidir → atualiza este guia

---

*Última atualização: v20f — Agosto 2026*
*Próxima versão: v21 — Integração Claude API*
