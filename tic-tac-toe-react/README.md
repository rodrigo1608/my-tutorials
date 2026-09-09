# Tic-Tac-Toe (Jogo da Velha)

Todo mundo que aprende React conhece o clássico *Tic-Tac-Toe* da documentação oficial. Ele é ótimo para entender estados e imutabilidade, mas possui layout estático e visual puramente didático.

Decidi pegar essa base e transformá-la em um projeto de **Design Engineering**, onde o foco principal foi a **Experiência do Usuário (UX)** e o **Design de Interface (UI)** do início ao fim.

---

##  Diferenciais de UX/UI & Implementação

-  Design System & Prototipagem:** Antes de escrever o código, desenhei as telas e o fluxo no **Figma**, criando uma estrutura visual com *auto layouts*, variáveis e hierarquia clara para cada estado do jogo.

- **Estabilidade Visual & Zero Layout Shift:** No tutorial tradicional, o tabuleiro muda de comportamento conforme os símbolos são inseridos. Ajustei as restrições no **Tailwind CSS** (utilizando proporções e dimensões estáveis) para garantir que o render dos elementos dinâmicos não causasse nenhum "pulo" na tela.
- **UX Responsiva Adaptativa:**
  - **Desktop:** Criei uma experiência rica com painel lateral, histórico detalhado de coordenadas e *auto-scroll* suave via `useRef` para acompanhar as jogadas.
  - **Mobile:** Redesenhei a interface para telas menores, condensando a navegação em um painel compacto na parte inferior, mantendo a área de toque confortável para o usuário.
- **Arquitetura Desacoplada:** Levei a regra de negócio e o controle de tempo (*time travel*) para o `App`, mantendo os componentes de apresentação (`Board`, `Square`, `Panel`, `History`) totalmente isolados e tipados com **TypeScript**.

---

## Tecnologias Utilizadas

- **[React](https://react.dev/):** Biblioteca de interface baseada em componentes funcionais e Hooks (`useState`, `useRef`, `useEffect`).
- **[TypeScript](https://www.typescriptlang.org/):** Tipagem estática para garantia de segurança dos estados, propriedades de componentes e matrizes de jogo.
- **[Tailwind CSS](https://tailwindcss.com/):** Estilização utilitária e responsiva (Flexbox, CSS Grid e design tokens).
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida para o ambiente de desenvolvimento.

---

## Arquitetura do Projeto

A aplicação adota o padrão **Lifting State Up (Elevação de Estado)**, mantendo o `App.tsx` como a única fonte da verdade (*single source of truth*) para o estado do jogo e histórico, promovendo componentes de apresentação desacoplados e previsíveis.

```text
src/
├── components/
│   ├── Board.tsx          # Renderiza a grade 3x3 e repassa eventos de clique
│   ├── Square.tsx         # Casa individual do tabuleiro com tratamento de hover/clique
│   ├── Panel.tsx          # Exibe o status da rodada, turno, vencedor ou empate
│   ├── HistoryDesktop.tsx # Lista com auto-scroll e botões de navegação no desktop
│   ├── HistoryMobile.tsx  # Barra compacta de controle de turno para mobile
│   ├── HistoryButton.tsx  # Botão genérico configurável com estados ativo/desativado
│   └── Icons.tsx          # Componentes SVG modulares e customizáveis (X, O, Controles)
├── App.tsx                # Gerenciador do estado global (history, move, winner, tie)
└── index.css              # Configurações globais e utilitários do Tailwind CSS
