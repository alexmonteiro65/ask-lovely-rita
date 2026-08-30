# ALEX NOTES v18 — Sessão 30 agosto 2026

---

## O QUE ACONTECEU HOJE

### Claude Desktop configurado:
- Conta Alex Pro activa
- Projecto Ask Lovely Rita visível
- Composio conectado (URL: https://connect.composio.dev/mcp)
- GitHub conectado via Composio (1 Active)
- GitHub Integration conectado directamente

### Fluxo do mundo implementado:
- Choose World → Quiz 1 → Burst 1 → Shop Visit 1 → Quiz 2 → Burst 2 → Shop Visit 2 → Profile
- Beat Shop com banner por visita
- Auto-redirect quando sem dinheiro
- Profile com só "Go Home"

### Problema persistente:
Rita não lê a primeira pergunta quando vem do Choose World. O browser bloqueia o segundo speak() após navegação. Tentadas 6 abordagens diferentes. Nenhuma funcionou.

### Documentos gerados:
- 9 PDFs de prompts de imagem (um por jogo novo)
- 9 PDFs de fluxo por jogo
- Estado v42, ALEX_NOTES v18, TODO v42

---

## REGRAS NOVAS DESTA SESSÃO

1. **speechSynthesis não é fiável após navegação entre páginas** — o browser precisa de um novo user gesture para falar. A solução definitiva pode requerer uma mudança de arquitectura (single page app) ou aceitar que Rita não fala a primeira pergunta quando vem do Choose World.

2. **Composio está conectado** — nas próximas sessões, tentar usar o Composio para fazer uploads ao GitHub em vez do código Python manual.

3. **Claude Desktop é o ambiente de trabalho preferido** — tem o projecto, memórias e conectores todos no mesmo lugar.

4. **Este chat deve ser mantido aberto** — tem todo o contexto. Quando abrir chat novo, copiar o Estado v42 e ALEX_NOTES v18 para o contexto.

---

## PARA A PRÓXIMA SESSÃO

**Prioridade 1:** Resolver o Rita's World autostart definitivamente
- Opção A: Aceitar que Rita não fala a primeira pergunta quando vem do Choose World — ela lê a partir da segunda
- Opção B: Testar com Composio se há algum speak() extra a interferir
- Opção C: Remover autostart e pedir ao jogador para clicar um botão pequeno "Start" na própria página do jogo

**Prioridade 2:** Testar Composio para uploads GitHub

**Prioridade 3:** Aplicar mesmo fluxo automático aos outros 4 mundos

**Prioridade 4:** Corrigir bugs pendentes (Saturno/Júpiter, etc.)

