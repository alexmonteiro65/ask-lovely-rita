# ASK LOVELY RITA — MASTER GUIDE
## Versão: v24 — Agosto 2026

---

## 1. IDENTIDADE DO PROJETO

**Nome:** Ask Lovely Rita — NUNCA "ASL Lovely Rita"
**O que é:** Plataforma educacional musical gamificada inspirada nos Beatles.
Ensina conhecimento geral através de jogos com personagens icônicos.
NÃO é um quiz genérico. É uma experiência imersiva com identidade visual forte.

**Missão:** Fazer qualquer pessoa de 6 a 60 anos aprender enquanto se diverte, através da magia dos Beatles.

---

## 2. REGRAS ABSOLUTAS

- Nome: **Ask Lovely Rita** — NUNCA "ASL Lovely Rita"
- Moeda: **BeatCoins** — NUNCA "spend", SEMPRE "invest Educational BeatCoins"
- BeatCoins iniciam em: **80** (localStorage key: askLovelyRitaV4)
- Versões: v21, v22, v23, v24... — NUNCA com letras
- HTML único autocontido por página, sem frameworks externos
- NUNCA reescrever do zero — sempre editar o existente
- NUNCA implementar sem consolidar feedback antes
- Interface sempre em inglês
- Claude API: claude-sonnet-4-6, max_tokens: 150
- GitHub: github.com/alexmonteiro65/ask-lovely-rita (público)
- Imagens: /src/images/ no GitHub

---

## 3. COMO A RITA DEVE FUNCIONAR (DEFINITIVO)

### Regras da resposta:
1. Responde QUALQUER pergunta — nunca diz "não sei"
2. Resposta real PRIMEIRO — curta, direta, 2-3 frases
3. Conexão Beatles SEMPRE — música/lyric/fato relevante ao tema
4. Conexão deve fazer sentido — não jogar Beatles aleatório
5. Resposta curta — não recitar enciclopédias

### Exemplos corretos:
- "What is pi?" → "Pi is approximately 3.14159 — the ratio of a circle's circumference to its diameter. As John Lennon explored infinite patterns in 'Across the Universe' — some things go on forever!"
- "What is the size of the Moon?" → "The Moon has a diameter of 3,474 km. As John sang in 'Mr. Moonlight' — The Beatles were always reaching for the moon!"
- "Where can I find a good baker?" → "Try Google Maps or Yelp to find top-rated bakeries near you! Paul would agree — life is sweeter with good things to share, just like in 'Savoy Truffle'."
- "Who is God?" → "God is the supreme being in most world religions. As George Harrison explored in 'My Sweet Lord' — the search for the divine is humanity's greatest journey."
- "How many legs does an ant have?" → "Ants have 6 legs — all insects do! As The Beatles proved in 'Come Together' — when everyone works as one, amazing things happen."

### O que NUNCA fazer:
- Dar resposta Beatles aleatória sem responder a pergunta
- Dizer "I don't know" ou "I'm not sure"
- Conexão Beatles que não faz sentido com o tema

---

## 4. PROBLEMA ATUAL E SOLUÇÃO DEFINITIVA

### Problema (v20f até v24):
O cérebro local (RITA_BRAIN) é limitado — só responde perguntas pré-programadas.
Qualquer pergunta fora da lista cai em resposta Beatles aleatória sem sentido.

### Solução definitiva — v25:
**GitHub Pages + Claude API**

Como funciona:
- GitHub Pages hospeda o app como site real com URL pública (GRÁTIS)
- Claude API responde qualquer pergunta com inteligência real
- Online: usa Claude API — responde absolutamente TUDO
- Offline: usa cérebro local como fallback
- O usuário nunca percebe a diferença

Por que a API não funcionava antes:
- Arquivo aberto localmente (File://) — o browser bloqueia chamadas de API por segurança
- Hospedado como site (https://) — API funciona perfeitamente
- GitHub Pages resolve isso de graça

---

## 5. PRÓXIMOS PASSOS — ORDEM CORRETA

### PASSO 1 — Ativar GitHub Pages (10 minutos, grátis)
1. GitHub: Settings da repo → Pages (menu esquerdo)
2. Source: "Deploy from branch"
3. Branch: "main" → pasta: "/src"
4. Salvar → em 2 minutos o app estará em: alexmonteiro65.github.io/ask-lovely-rita
5. A partir daí, Claude API funciona de verdade

### PASSO 2 — v25: Rita com Claude API real
- askRita() chama Claude API com system prompt específico
- System prompt garante: resposta real PRIMEIRO + conexão Beatles relevante
- Mic corrigido definitivamente (en-GB)
- Pergunta aparece no topo do popup (12 palavras + ...)
- Rita fala a resposta em voz britânica
- Fallback local quando offline

### PASSO 3 — v26: BeatCoins funcionando
- localStorage salva e atualiza pontos
- Ganhar BeatCoins por perguntas respondidas
- Display atualiza em tempo real

### PASSO 4 — v27: Primeiro jogo completo
- Beat Match (Youngsters): escutar trecho, adivinhar música
- Fast Track (Grown Ups): trivia com timer 15 segundos
- Vinyl Roulette (Experts): slot machine de álbuns

---

## 6. OS 3 NÍVEIS

### YOUNGSTERS (6-12 anos)
- BG: #1a0040 | Accent: #ff6ef7 | Accent2: #ffde59
- Rita: Traffic Warden | Lads: outfit regular
- Tom: "You're absolutely fab!" / "Brilliant work, young one!"
- Jogos: Beat Match, Penny Lane Math, Color Quiz

### GROWN UPS (13-17 anos)
- BG: #0d0d1e | Accent: #c8a96e | Accent2: #e8d5b0
- Rita: Pepper Outfit | Lads: outfit pepper
- Tom: "Sharp thinking, mate!" / "Now that's the Pepper spirit!"
- Jogos: Fast Track, Streak Master, Deep Cut, World Tour

### EXPERTS (18+ anos)
- BG: #050510 | Accent: #ffd700 | Accent2: #ffd700
- Rita: Abbey Road | Lads: outfit abbey — BEAT CORPS
- Tom: "Impressive. Pure Abbey Road calibre." / "The Fab Four salute you."
- Jogos: Vinyl Roulette, Double Down, The Archives, Who Said It?

---

## 7. OS PERSONAGENS

### Lovely Rita
- Baseada em "Lovely Rita, Meter Maid" dos Beatles
- Britânica, bem-humorada, sábia, nunca condescendente
- Voz: inglês britânico (en-GB)
- Responde QUALQUER pergunta + sempre conecta ao mundo Beatles
- Outfit muda por tema

### 4 Lads
| Lad | Quote |
|-----|-------|
| Smart | "Pick me! I will take you to Strawberry Fields forever!" |
| Cute | "No no no! Pick ME! We will walk down Penny Lane together!" |
| Quiet | "Choose me... and find your inner peace. Here comes the sun." |
| Funny | "OI! Pick me! We will share my Octopus Garden — plenty of room!" |

---

## 8. ARQUITETURA DE PÁGINAS

Page 1: Landing/Home — real_size_preview_v24.html (ATUAL)
Page 2: Lad Select — page2_lad_select.html (pendente)
Page 3: Game Hub — a criar
Page 4: Game Screen — page4_motor_skills.html (pendente)
Page 5: Results/Leaderboard — a criar

---

## 9. MECÂNICAS DE JOGO

Inspiração:
- Duolingo: streaks diários, feedback imediato, lições curtas
- Kahoot!: timer de pressão, leaderboard, sons
- Trivial Pursuit: categorias coloridas, perguntas em camadas
- Casino exclusivo Rita: Vinyl Slot Machine, BeatCoins como fichas, Double Down

BeatCoins:
- Iniciam em 80
- Ganhos: responder certo, daily challenge (+200), streaks
- Perdidos: errar apostas
- NUNCA "spend" — sempre "invest Educational BeatCoins"

---

## 10. IDIOMAS

- AGORA: inglês apenas — interface, Rita, voz
- FUTURO: dropdown de idioma na landing page
  - Muda TODO o app: texto, gráficos, voz da Rita
  - Auto-detecção pelo input digitado ou pelo mic
  - NÃO implementar até versão inglesa estar sólida

---

## 11. STACK TÉCNICO

- Estrutura: HTML único autocontido por página
- Estilos: CSS embutido com variáveis CSS
- Lógica: JavaScript puro, sem frameworks
- Voz input: Web Speech API (en-GB)
- Voz output: Speech Synthesis API (en-GB, feminina)
- Som: Web Audio API
- IA: Claude API — claude-sonnet-4-6, max_tokens: 150
- Storage: localStorage — key: askLovelyRitaV4
- Hospedagem: GitHub Pages (gratuito)
- Imagens: /src/images/ no GitHub (URLs raw)

---

## 12. O QUE NAO FAZER

- Resposta Beatles aleatória sem responder a pergunta real
- Rita dizer "I don't know"
- Cérebro local como solução final — é só fallback offline
- Emojis genéricos como design principal
- Visual sem identidade Beatles
- Reescrever código do zero
- Implementar sem testar a lógica antes
- Multi-idioma antes da versão inglesa sólida
- Chamar de "ASL Lovely Rita"

---

## 13. HISTÓRICO DE VERSÕES

| Versão | O que fez |
|--------|-----------|
| v20f | Base: 3 temas, lads, device selector, popup placeholder |
| v21 | RITA_BRAIN local com respostas Beatles |
| v22 | Mic en-GB, voz Rita, math e geo básicos |
| v23 | Tentativa Claude API — falhou (arquivo local bloqueia API) |
| v24 | Cérebro expandido, preview pergunta, erros sintaxe corrigidos |
| v25 | GitHub Pages + Claude API real — Rita responde TUDO |

---

## 14. COMO USAR EM NOVAS SESSOES

1. Ler este arquivo PRIMEIRO
2. Buscar HTML atual no GitHub: github.com/alexmonteiro65/ask-lovely-rita/src
3. Se não conseguir buscar → pedir o arquivo ao Alex
4. NUNCA reescrever do zero — sempre editar
5. Consolidar feedback ANTES de implementar
6. Testar a lógica mentalmente antes de entregar
7. Qualquer mudança de visão → atualizar este guia

Atualizado: v24 — Agosto 2026
