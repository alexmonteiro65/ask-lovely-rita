# ASK LOVELY RITA — MASTER GUIDE
## Versão: v25 — Agosto 2026

---

## 1. IDENTIDADE DO PROJETO

**Nome:** Ask Lovely Rita — NUNCA "ASL Lovely Rita"
**O que é:** Plataforma educacional musical gamificada inspirada nos Beatles.
Ensina conhecimento geral através de jogos com personagens icônicos.
NÃO é um quiz genérico. É uma experiência imersiva com identidade visual forte.
**Missão:** Fazer qualquer pessoa de 6 a 60 anos aprender enquanto se diverte, através da magia dos Beatles.

---

## 2. REGRAS ABSOLUTAS

- Nome: Ask Lovely Rita — NUNCA "ASL Lovely Rita"
- Moeda: BeatCoins — NUNCA "spend", SEMPRE "invest Educational BeatCoins"
- BeatCoins iniciam em 80 (localStorage key: askLovelyRitaV4_bc)
- Versões: v25, v26, v27... — NUNCA com letras
- HTML único autocontido por página, sem frameworks externos
- NUNCA reescrever do zero — sempre editar o existente
- NUNCA implementar sem consolidar feedback antes
- Interface sempre em inglês
- Claude API: claude-sonnet-4-6, max_tokens: 150
- GitHub: github.com/alexmonteiro65/ask-lovely-rita (público)
- GitHub Pages: alexmonteiro65.github.io/ask-lovely-rita/src/
- Arquivo principal: index.html na pasta /src

---

## 3. COMO A RITA FUNCIONA

### Fluxo de uma pergunta:
1. Usuário digita ou fala (mic en-GB)
2. Primeiras 12 palavras aparecem no topo do popup
3. Claude API responde (max 150 tokens)
4. Rita fala a resposta em voz britânica (en-GB)
5. Popup mostra: pergunta + resposta + música Beatles + closing line
6. +5 BeatCoins a cada pergunta respondida
7. BeatCoins salvos no localStorage

### Regras da resposta:
1. Responde QUALQUER pergunta — nunca diz não sei
2. Resposta real e direta PRIMEIRO (2-3 frases)
3. Conexão Beatles SEMPRE — relevante ao tema, não aleatória
4. Resposta curta — máximo 80 palavras
5. Tom muda por nível (ver seção 5)
6. Fallback local quando offline ou API falhar

### Quando API falha (offline):
- FALLBACK local por tema com respostas Beatles pré-programadas
- Usuário não percebe a diferença

---

## 4. ASSETS — INVENTÁRIO COMPLETO

### Personagens
- Rita: rita_beatcorps_clean.png (RGBA, fundo transparente, sem watermark)
- Lads Regular (Youngsters): lad-smart/cute/quiet/funny-regular.png
- Lads Pepper (Grown Ups): transparent_sgt_pepper_smart/cute/quiet/funny_beetle.png
- Lads Abbey (Experts): lad-smart/cute/quiet/funny-abbey.png

### Ícones de Nível (tabs da landing page)
- Youngsters: psychedelic_pop_art_60s_album_art.jpg.png (colorido, Let It Be / Come Together)
- Grown Ups: vintage_newspaper_collage_60s.jpg.png (sépia, Beatlemania)
- Experts: dark_dramatic_grunge_poster.jpg.png (P&B, HELP! / The End)

### 9 Álbuns (para jogos)
- YOUNGSTERS: Yellow Submarine, A Hard Day's Night, Red Album
- GROWN UPS: Rubber Soul, Revolver, Magical Mystery Tour
- EXPERTS: Let It Be, Blue Album, Abbey Road

### Álbuns adicionais
- Abbey Road Beetles Cover (versão com os Lads na faixa de pedestres)
- Magical Mystery Tour (versão com Lads como magos)

---

## 5. OS 3 NÍVEIS

### YOUNGSTERS (6-12 anos)
- BG: #1a0040 | Accent: #ff6ef7 | Accent2: #ffde59
- Btn: linear-gradient(135deg,#ff6ef7,#a855f7) | Glow: #ff6ef7
- Lads: outfit regular | Rita: Traffic Warden
- Tom Rita: "You are absolutely fab!" / "Brilliant work, young one!" / "Keep rocking, superstar!"
- Álbuns: Yellow Submarine, Hard Day's Night, Red Album
- Jogos: Tic-Tac-Toe (Page 2), Beat Match, Penny Lane Math

### GROWN UPS (13-17 anos)
- BG: #0d0d1e | Accent: #c8a96e | Accent2: #e8d5b0
- Btn: linear-gradient(135deg,#c8a96e,#6677aa) | Glow: #c8a96e
- Lads: outfit pepper (chapéus de mago) | Rita: Pepper Outfit
- Tom Rita: "Sharp thinking, mate!" / "Now that is the Pepper spirit!" / "Invest those BeatCoins wisely!"
- Álbuns: Rubber Soul, Revolver, Magical Mystery Tour
- Jogos: Tic-Tac-Toe (Page 2), Fast Track, Streak Master

### EXPERTS (18+ anos)
- BG: #050510 | Accent: #ffd700 | Accent2: #ffd700
- Btn: linear-gradient(135deg,#ffd700,#c8860a) | Glow: #ffd700
- Lads: outfit abbey (ternos Abbey Road) | Rita: Abbey Road — BEAT CORPS
- Tom Rita: "Impressive. Pure Abbey Road calibre." / "The Fab Four salute you." / "Now we are talking, Beat Corps."
- Álbuns: Let It Be, Blue Album, Abbey Road
- Jogos: Tic-Tac-Toe (Page 2), Vinyl Roulette, Double Down

---

## 6. OS PERSONAGENS

### Lovely Rita
- Baseada em "Lovely Rita, Meter Maid" dos Beatles
- Britânica, bem-humorada, sábia, nunca condescendente
- Voz: inglês britânico (en-GB), feminina
- Flutua com animação (ritaFloat) com glow temático
- Aparece no popup ao lado de cada resposta
- Aparece flutuando na tela principal quando popup fechado

### 4 Lads (são insetos estilizados — os Fab Four)
| Lad | Instrumento | Quote |
|-----|------------|-------|
| Smart | Guitarra acústica + óculos | "Pick me! I will take you to Strawberry Fields forever!" |
| Cute | Baixo + laço | "No no no! Pick ME! We will walk down Penny Lane together!" |
| Quiet | Sitar/bandolim | "Choose me... and find your inner peace. Here comes the sun." |
| Funny | Baquetas/percussão | "OI! Pick me! We will share my Octopus Garden — plenty of room!" |

Ao clicar num Lad: quote aparece em balão + Rita lê a frase em voz alta.

---

## 7. ARQUITETURA DE PÁGINAS

```
Page 1: Landing/Home — index.html em /src (ATUAL v25) ✅
Page 2: Tic-Tac-Toe com álbuns do nível — a construir (v26)
Page 3: Game Hub — a criar
Page 4: Lad Select — page2_lad_select.html (pendente)
Page 5: Results/Leaderboard — a criar
```

### Fluxo do usuário:
Landing Page → escolhe nível → vai para Page 2 → Tic-Tac-Toe com álbuns do nível → joga → volta para Home

---

## 8. PRÓXIMO — v26: TIC-TAC-TOE (Page 2)

### Mecânica:
- Grid 3x3 com os 3 álbuns do nível (cada álbum ocupa 3 casas — aparece 3x)
- Usuário = ✔ (marca com símbolo temático do nível)
- Rita = ✘ (marca com símbolo diferente)
- Rita joga automaticamente após o usuário
- Quem completar linha/coluna/diagonal vence
- Vitória = +50 BeatCoins | Derrota = +10 BeatCoins (sempre ganha algo)
- Rita comenta cada jogada com frase Beatles

### Visual por nível:
- Youngsters: marcas em magenta/amarelo, efeito glow roxo
- Grown Ups: marcas em dourado, estilo vintage
- Experts: marcas em ouro, estilo Abbey Road minimalista

---

## 9. MECÂNICAS DE JOGO FUTURAS

- Duolingo style: streaks diários, feedback imediato, lições curtas
- Kahoot style: timer de pressão, leaderboard
- Casino Rita: Vinyl Slot Machine, Double Down, apostas de BeatCoins
- Daily Challenge: +200 BeatCoins por jogar todo dia
- 90 questões em 6 mundos × 3 níveis

---

## 10. IDIOMAS

- AGORA: inglês apenas
- FUTURO: dropdown de idioma na landing page
  - Muda TODO o app: texto, gráficos, voz da Rita
  - Auto-detecção pelo input digitado ou pelo mic
  - NÃO implementar até versão inglesa estar sólida

---

## 11. STACK TÉCNICO

- HTML único autocontido por página
- CSS embutido com variáveis CSS (custom properties)
- JavaScript puro — sem frameworks
- Web Speech API — reconhecimento voz (en-GB)
- Speech Synthesis API — voz da Rita (en-GB, feminina)
- Web Audio API — sons
- Claude API — claude-sonnet-4-6, max_tokens: 150
- localStorage — key: askLovelyRitaV4_bc
- GitHub Pages: alexmonteiro65.github.io/ask-lovely-rita/src/
- Imagens: embutidas em base64 no HTML (sem dependência externa)

---

## 12. O QUE NAO FAZER

- Resposta Beatles aleatória sem responder a pergunta real
- Rita dizer "I don't know"
- Emojis genéricos como design principal
- Visual sem identidade Beatles
- Reescrever código do zero
- Implementar sem testar a lógica antes
- Multi-idioma antes da versão inglesa sólida
- Chamar de "ASL Lovely Rita"
- Watermarks nas imagens dos personagens
- Imagens com fundo branco nos personagens (sempre transparente)

---

## 13. HISTÓRICO DE VERSÕES

| Versão | O que fez |
|--------|-----------|
| v20f | Base: 3 temas, lads, device selector, popup placeholder |
| v21 | RITA_BRAIN local com respostas Beatles |
| v22 | Mic en-GB, voz Rita, math e geo básicos |
| v23 | Tentativa Claude API — falhou (arquivo local bloqueia API) |
| v24 | Cérebro expandido, preview pergunta, erros sintaxe corrigidos |
| v25 | Landing page COMPLETA: todos os personagens + outfits + álbuns + Rita flutuando + Claude API funcionando via Artifact |

---

## 14. COMO USAR EM NOVAS SESSOES

1. Ler este arquivo PRIMEIRO
2. Ler o Estado de versão mais recente
3. Buscar HTML atual em: github.com/alexmonteiro65/ask-lovely-rita/src/index.html
4. NUNCA reescrever do zero — sempre editar
5. Consolidar feedback ANTES de implementar
6. Testar a lógica mentalmente antes de entregar
7. Qualquer mudança de visão → atualizar este guia
8. Imagens dos personagens estão embutidas em base64 no HTML
9. Próxima tarefa: v26 — Page 2 com Tic-Tac-Toe nos álbuns

Atualizado: v25 — Agosto 2026
