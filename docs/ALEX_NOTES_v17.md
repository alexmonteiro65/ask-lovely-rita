# ALEX NOTES v17 — Sessão 29 agosto 2026

---

## O QUE FOI FEITO HOJE

### Documentos gerados:
- Roadmap v3 (PDF A3 landscape) — fluxo real por mundo com pontos por nível
- Mapa de mundos e bonus rounds (PDF)
- Cartas Claude v3 (DOCX) — erro report, reclamação Anthropic, terceira carta sobre fraude cibernética e delegação de trabalho
  
### Correções aplicadas:
- CosmicFlash, NoteDrop → saveEBC (não saveLadBC)
- TicTacToe → saveEBC corrigido (função estava corrompida/duplicada)
- VW Match → 100% saveEBC, textos "EBCs" consistentes
- buy3DItem → bug `newTotal` undefined corrigido
- Page 1 → Total Educational Portfolio calculado directamente (independente do MyBank)
- Beat Destinations → Rita lê cada pergunta em voz alta

### Jogos novos criados e uploaded:
1. **Beat Destinations** (globo geográfico) — Quiz 2 do Across the Universe
2. **Shape Shifter** (geometria com canvas) — Quiz 2 do Octopus Garden
3. **Beat Maths** (matemática com contexto BeatCoins) — Quiz 2 do Penny Lane
4. **Rhythm Bounce** (saltar barreiras) — Beat Burst 2 universal
5. **Beat Patrol** (lixo/trânsito/leis) — Quiz 1 alternativo Rita's World
6. **Jukebox Time** (história da música 3 eras) — Quiz 2 Rita's World
7. **Deep Sea Catch** (pesca oceânica) — Beat Burst 2 Octopus Garden
8. **Mission to Mars** (foguetão desvia asteróides) — Beat Burst 2 Across Universe
9. **World Kitchen** (comida mundial) — Beat Burst 2 Penny Lane

### PDFs e documentos gerados:
- `lovely_rita_roadmap_v3.pdf` — mapa completo de mundos (A3)
- `world_bonus_map.pdf` — mapa bonus rounds simplificado
- `cartas_claude_completo.docx` — 6 cartas (3 originais + 3 traduções PT-BR)

---

## ESTADO DOS MUNDOS — COMPLETO

| Mundo | Quiz 1 | Burst 1 | Quiz 2 | Burst 2 |
|---|---|---|---|---|
| Rita's World | Word Quiz ✅ | Tap the Beat ✅ | Jukebox Time ✅ | Rhythm Bounce ✅ |
| Octopus Garden | Ocean Spelling ✅ | Tic Tac Toe ✅ | Shape Shifter ✅ | Deep Sea Catch ✅ |
| Across Universe | Space Quiz ✅ | Note Drop ✅ | Beat Destinations ✅ | Mission to Mars ✅ |
| The Inner Light | Memory Match ✅ | Turntable ✅ | World Beats ✅ | Turntable 2 ✅ |
| Penny Lane | City Facts ✅ | VW Match ✅ | Beat Maths ✅ | World Kitchen ✅ |

**Todos os 5 mundos têm agora 4 jogos completos.**

---

## FLUXO DO MUNDO — APROVADO PELO ALEX, NÃO IMPLEMENTADO AINDA

Ver Estado v41 para especificação completa.

Resumo:
1. Page 1 → escolhe nível → escolhe Lad
2. Choose World
3. Quiz 1 → Beat Burst 1
4. [Rita fala] → Beat Shop Visita 1
5. Quiz 2 → Beat Burst 2
6. Beat Shop Visita 2
7. Profile Page → só "Go Home"
8. Page 1 sem acesso à Beat Shop

---

## BACKUP CRIADO

Branch: `backup-before-shop-flow-29aug2026`
SHA: 71e47aa2fa09

---

## REGRAS NOVAS DESTA SESSÃO (adicionar ao Golden Rules)

1. **Rita lê sempre as perguntas** — em todos os jogos, Rita faz speak(q.q) quando mostra cada questão. Nunca texto genérico.

2. **Nome do projecto** — "Lovely Rita Adventures" (não "Ask Lovely Rita Adventures"). O Ask Lovely Rita é a versão anterior arquivada.

3. **Beat Shop — acesso restrito** — A Beat Shop só é acessível durante o percurso de um mundo (visita 1 após Burst 1, visita 2 após Burst 2). Nunca directamente da Page 1 ou da Profile Page.

4. **Fluxo do mundo — linear e sem desvios** — Uma vez que o jogador começa um mundo, fica nesse mundo com o mesmo Lad e nível até ao fim. Sem opção de "Choose Another World" no meio.

5. **Venda de itens** — sempre em EBCs, nunca em BeatCoins. Venda com -20% mínimo (restocking fee). EBCs ficam guardados para próxima visita à loja.

6. **Variação de preços** — calculada quando Profile Page abre. Probabilidades: 5% jackpot, 20% sobe, 50% estável, 20% desce, 5% cai muito.

7. **Test panel** — Claude injeta dados de teste directamente via API sempre que necessário. Alex nunca abre o test panel manualmente.

---

## PENDENTE PARA PRÓXIMA SESSÃO

1. Implementar fluxo do mundo completo (6 passos)
2. Corrigir Saturno/Júpiter em Across Universe
3. Corrigir palavras longas nas answer cards
4. Rever se Beat Patrol é Quiz 1 ou alternativo de Rita's World
5. Decisão sobre Note Drop / Cosmic Flash / botão Next
6. LinkedIn recovery — verificar resposta
7. Advisory Board — decidir quando contactar

