# TODO v41 — Lovely Rita Adventures
**Data:** 29 agosto 2026

---

## PRIORIDADE 1 — FLUXO DO MUNDO (APROVADO, PENDENTE IMPLEMENTAÇÃO)

### O que implementar (em ordem):

**Passo 1 — Navegação dos Beat Bursts para a Loja**
- Cada Beat Burst passa `?from=world&world=[nome]&visit=1` para a Beat Shop
- Beat Shop grava `lra_current_world` e `lra_shop_visit` no localStorage
- Beat Shop mostra botão correcto conforme visit (1 ou 2)

**Passo 2 — Beat Shop: dois modos**
- Visita 1: botão "Continue My Adventure →" → vai para Quiz 2 do mundo correcto
- Visita 2: botão "See My Results →" → vai para Profile Page

**Passo 3 — Transição antes da loja**
- Overlay/tela simples antes de entrar na loja
- Rita fala e explica o que vai acontecer
- Botão "Take me to the Shop!"

**Passo 4 — Rita na loja: gestão de dinheiro**
- Entrada loja: Rita fala sobre investir vs poupar
- Tentativa de compra sem dinheiro: Rita explica e incentiva a continuar jogando

**Passo 5 — Profile Page: botão único "Go Home"**
- Remover qualquer botão "Choose World" da Profile Page
- Adicionar sistema de venda de itens com variação de preço

**Passo 6 — Page 1: remover acesso directo à Beat Shop**
- Remover "Beat Shop" da nav bar da Page 1
- Nav bar Page 1: Sound / Help / Music / Videos / Ask Rita / Play Again / Profile & Bank

---

## PRIORIDADE 2 — BUGS A CORRIGIR

- [ ] Saturno/Júpiter em Across the Universe
- [ ] Palavras longas quebrando nas answer cards
- [ ] MyBank visão simplificada para Youngsters
- [ ] Videos page — badge "Watched"
- [ ] Beat Shop Credit — verificar valores correctos

---

## PRIORIDADE 3 — DECISÕES PENDENTES

- [ ] Across the Universe: Note Drop ou Cosmic Flash como Beat Burst oficial?
- [ ] Botão Next — remover de todos os mundos?
- [ ] Octopus: Turntable extra — manter ou remover?
- [ ] Note Drop — mover para Penny Lane?
- [ ] Beat Patrol — ligar como Quiz 1 ou alternativo de Rita's World?

---

## PRIORIDADE 4 — MELHORIAS VISUAIS E UX

- [ ] Globe game (Beat Destinations) — melhorar visual do globo (agora parece bola azul)
- [ ] Litter patrol (Beat Patrol Youngsters) — drag & drop em touch mobile
- [ ] Jukebox Time — adicionar mais perguntas por era
- [ ] Revisar e ajustar perguntas repetitivas no Beat Destinations

---

## FIM DE SESSÃO — DOCUMENTOS A GERAR

- [x] Estado v41
- [x] TODO v41
- [ ] ALEX_NOTES v17
- [ ] Golden Rules Master actualizado (adicionar regras novas desta sessão)

