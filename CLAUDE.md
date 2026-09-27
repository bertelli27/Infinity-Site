# Infinity Recargas — Site (vitrine + tutoriais)

## Em linguagem simples

Este é o site público da Infinity Recargas. Ele serve para três coisas: **apresentar os apps** (Nexa TV, NexoCine, UniTV), **ensinar a instalar e usar** (tutoriais escritos e em vídeo) e **levar o visitante para o WhatsApp**, onde a venda acontece. Não tem login, não tem carrinho e não tem pagamento. Todo botão de compra abre o WhatsApp da Infinity com uma mensagem pronta, do tipo "Olá! Vim pelo site e tenho interesse no Nexa TV".

Este site é um projeto **independente** do Infinity Painel: repositório separado, sem banco de dados e sem ligação com o Painel. Os apps, preços e descrições ficam num único arquivo de dados dentro do site (`data/apps.ts`). Para mudar um preço, basta editar esse arquivo e publicar. A integração com o Painel fica para o futuro, quando o site tiver vendas diretas.

---

## Contexto do negócio

A Infinity Recargas revende códigos de ativação mensais (cerca de 30 dias) para apps de streaming de terceiros. Os clientes são consumidores finais e chegam por TikTok, Instagram e YouTube. A venda acontece pelo WhatsApp.

O fluxo é: interesse → teste grátis de 7 dias (quando o app oferece) → suporte → pagamento (Pix ou cartão) → código → renovação.

O diferencial da marca é **venda + suporte + orientação**. O site precisa transmitir isso: confiança, clareza e ajuda, não "promoção relâmpago".

Existe um sistema interno separado, o **Infinity Painel** (outro repositório, com Supabase). **Este site não se conecta a ele nesta fase**: não usa Supabase, não tem banco e não tem backend. A integração só acontece no futuro, quando houver vendas diretas pelo site.

## Escopo

**Dentro do escopo**

- Home, página de cada app, central de tutoriais, página de tutorial e dúvidas frequentes.
- Botões de WhatsApp com mensagem pronta e contextual.
- Produtos e preços num arquivo de dados local e tipado (`data/apps.ts`).
- Tutoriais escritos (MDX no repositório) com vídeo do YouTube incorporado.
- SEO, performance, acessibilidade e layout mobile-first (a maior parte do tráfego vem do celular, via TikTok e Instagram).

**Fora do escopo nesta fase:** login, cadastro, área do cliente, carrinho, pagamento, API de pagamento, entrega automática de código, blog, painel administrativo (a administração é feita no Infinity Painel) e landing pages de tráfego pago (fase futura).

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Estilo | Tailwind CSS 4 |
| Dados | Arquivo local `data/apps.ts` (sem banco, sem backend) |
| Conteúdo dos tutoriais | MDX em `content/tutoriais/` |
| Vídeos | YouTube incorporado (`youtube-nocookie.com`, carregando só no clique) |
| Hospedagem | Vercel |

Use as mesmas versões principais do Painel (Next 16, React 19, Tailwind 4) para manter o conhecimento consistente entre os projetos. O site é **100% estático** (SSG), sem rotas de API.

## Dados dos apps

Uma única fonte: `data/apps.ts`, que exporta um array tipado. **Nenhum preço ou descrição de app pode ficar escrito diretamente em componentes ou páginas.** Tudo sai desse arquivo.

```ts
export type App = {
  slug: string;               // 'nexa-tv' | 'nexocine' | 'unitv'
  nome: string;
  visivel: boolean;           // false = não aparece no site
  ordem: number;
  precoPix: number;           // 21.00
  precoCartao: number;        // 22.90
  descricaoCurta: string;     // 1 linha, usada no card
  descricao: string;          // parágrafo da página do app
  destaques: string[];
  dispositivos: string[];     // 'Android TV' | 'TV Box' | 'Fire Stick' | 'Celular Android' ...
  temTesteGratis: boolean;
  logo: string;               // caminho em /public/apps/
  corAcento: string;          // acento sutil do card
};
```

Os nomes dos campos espelham as colunas da tabela `produtos` do Painel (`slug`, `nome`, `preco_pix`, `preco_cartao`, ...). Assim, quando os dois projetos forem conectados no futuro, basta trocar a origem dos dados em `lib/apps.ts` sem mexer nos componentes. **Todo acesso aos dados passa por `lib/apps.ts`** (`listarApps()`, `buscarApp(slug)`), nunca importando `data/apps.ts` direto nas páginas.

**Dados iniciais:**

| App | Pix | Cartão | Teste grátis | Posicionamento |
|---|---|---|---|---|
| Nexa TV | 21,00 | 22,90 | a confirmar (`false` até confirmar) | TV ao vivo, canais, área de futebol |
| NexoCine | 17,90 | 19,90 | `true` | Filmes, séries, animes, desenhos, novelas |
| UniTV | 25,00 | 27,90 | `false` (não confirmado) | TV, esportes, filmes e séries |

Os dispositivos de cada app ficam como `TODO` até o Bruno confirmar. Os logos oficiais ficam em `public/apps/` (o Bruno fornece os arquivos; enquanto isso, usar um placeholder neutro com o nome do app, **nunca** uma recriação do logo).

## WhatsApp

Um único componente `BotaoWhatsApp` monta `https://wa.me/<NEXT_PUBLIC_WHATSAPP_NUMBER>?text=<mensagem codificada>`. Ele abre em nova aba, com `rel="noopener"`.

Mensagens (todas começam com "Vim pelo site", o que permite marcar a origem do cliente como "Site" no Painel):

| Onde | Mensagem |
|---|---|
| Genérico (header, hero, CTA final) | `Olá! Vim pelo site e quero saber mais sobre os apps.` |
| Card/página de app | `Olá! Vim pelo site e tenho interesse no {nome}.` |
| App com teste grátis | `Olá! Vim pelo site e quero testar o {nome}.` |
| Tutorial | `Olá! Vim pelo site e preciso de ajuda com: {título do tutorial}.` |

Centralizar os textos em `lib/whatsapp.ts`.

## Regras de comunicação (obrigatórias em todo texto do site)

1. **Nexa TV = TV ao vivo, canais e futebol.** Nunca associar Nexa TV a filmes ou séries. NexoCine é o app de filmes, séries, animes, desenhos e novelas.
2. **Teste grátis:** só exibir quando `temTesteGratis = true`, e sempre com a condição logo ao lado: *"Disponível para novos usuários na primeira instalação do aplicativo."*
3. **Preço:** "A partir de R$ X/mês", usando o menor valor entre Pix e cartão, com nota "no Pix". Formatar com `Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })`.
4. **Proibido** (verificar com grep antes de cada entrega): números inventados de clientes ou avaliações ("+10.000 clientes", "4.9/5"), "24/7", "entrega imediata", "na hora", "compra segura", "ambiente 100% seguro", "melhor preço", "garantido". Use no lugar: "atendimento todos os dias", "entrega rápida pelo WhatsApp", "suporte na instalação".
5. **Sem emojis.** Sem excesso de selos e badges promocionais. O visual é premium e limpo.
6. **Logos dos apps: somente os oficiais** (arquivos em `public/apps/`, fornecidos pelo Bruno). Nunca gerar, redesenhar ou aproximar logos de terceiros.
7. **Transparência:** o rodapé e a FAQ explicam que os apps são plataformas de terceiros, sujeitas a atualizações e mudanças, que a Infinity revende códigos de ativação e presta suporte, e que as marcas pertencem aos respectivos donos.
8. Tom: português do Brasil, direto, acolhedor, sem gírias exageradas. Frases curtas.

## Identidade visual

- **Cores (tokens em `globals.css`):** `--roxo: #8A2BE2` · `--roxo-escuro: #5A00D6` · `--preto: #0D0D12` · `--cinza-escuro: #1A1A24` · `--cinza-claro: #F2F2F5`. Apenas tema escuro nesta fase.
- **Fontes (via `next/font/google`):** Orbitron (títulos, com moderação, porque é difícil de ler em blocos), Raleway SemiBold (subtítulos) e Raleway Regular (corpo).
- **Elementos:** gradientes roxos sutis, linhas finas, grid de pontos discreto, bordas com brilho leve, cards elevados e cantos arredondados.
- **Ícones:** escudo (confiança), raio (agilidade), infinito, headset (suporte). Usar `lucide-react`.
- **Logo da Infinity:** colorido sobre fundo escuro, com área de respiro. Copiar `logo-colorido.png` e `logo-outline.png` do Painel para `public/`.
- **Cor por app:** cada card pode usar um acento sutil inspirado na cor do app (Nexa: vermelho · NexoCine: ciano · UniTV: laranja), sem competir com o roxo da marca.
- **Contraste:** cumprir WCAG AA. Texto cinza sobre preto precisa ter contraste suficiente.

## Páginas

### `/` Home

1. **Header** fixo: logo, links (Apps, Como funciona, Tutoriais, Dúvidas) e botão "Falar no WhatsApp". No mobile, vira menu hambúrguer.
2. **Hero:** título "Entretenimento sem limites", subtítulo sobre os apps de TV, filmes e séries com suporte na instalação, CTA principal "Falar no WhatsApp" e secundário "Ver os apps" (âncora).
3. **Apps** (de `lib/apps.ts`): um card por app visível com logo oficial, nome, `descricaoCurta`, ícones de dispositivos, preço "a partir de", teste grátis com condição (se aplicável), botão "Quero o {nome}" (WhatsApp) e link "Saiba mais".
4. **Como funciona:** 4 passos: Chame no WhatsApp → Teste grátis quando disponível → Pague por Pix ou cartão → Receba o código e ajuda para ativar.
5. **Por que a Infinity:** suporte na instalação, atendimento todos os dias, tutoriais completos, renovação sem complicação. **Sem números inventados.**
6. **Tutoriais em destaque:** 3 a 4 cards linkando para `/tutoriais`.
7. **Dúvidas frequentes** (accordion acessível): o que é um código de ativação; quanto tempo dura (cerca de 30 dias); quem tem direito ao teste grátis; formas de pagamento; em quais aparelhos funciona; como renovar; os apps são oficiais? (resposta transparente); o que acontece se um app parar de funcionar (**deixar como `TODO` com texto provisório neutro até a política ser definida**).
8. **CTA final** para o WhatsApp.
9. **Footer:** logo, redes (@infinityrecargas: TikTok, Instagram, YouTube), WhatsApp, links, aviso de transparência e ano.

### `/apps/[slug]`

Gerada com `generateStaticParams` a partir dos apps visíveis. Contém: hero com logo e nome, `descricao`, lista de `destaques`, dispositivos compatíveis, bloco de preço (Pix e cartão), bloco de teste grátis com condição (se aplicável), botões de WhatsApp contextuais, tutoriais daquele app e FAQ curta. Slug inexistente ou app oculto retorna 404.

### `/tutoriais`

Trilha em módulos, com filtros por app e por dispositivo:

| Módulo | Conteúdo |
|---|---|
| 01 · Preparação | Ativar modo desenvolvedor; instalar o Downloader (TV Box / Fire Stick / Android TV) |
| 02 · Instalação | Instalar Nexa TV, UniTV, NexoCine (TV e celular separados) |
| 03 · Conta | Criar conta em cada app |
| 04 · Ativação | Inserir o código (Nexa TV na TV, Nexa TV no celular, UniTV, NexoCine) |
| 05 · Como usar | Apresentação de cada app |
| 06 · Extras | Buscar filmes/séries, favoritos, categorias, problemas comuns, atualizar o app |

### `/tutoriais/[slug]`

Arquivo MDX com frontmatter:

```yaml
titulo: "Como instalar o NexoCine na TV Box"
resumo: "Passo a passo para instalar pelo Downloader."
modulo: 2
ordem: 1
apps: ["nexocine"]          # slugs de data/apps.ts
dispositivos: ["TV Box", "Fire Stick"]
youtubeId: ""               # vazio = sem vídeo ainda
atualizadoEm: "2026-09-27"
rascunho: true              # rascunhos não aparecem em produção
```

A página tem título, vídeo (se houver `youtubeId`), passos numerados (componente `<Passo>`), dicas e avisos (componente `<Aviso>`), um bloco "Travou em algum passo?" com botão de WhatsApp e navegação anterior/próximo dentro do módulo.

**Conteúdo:** criar a estrutura completa com **um arquivo por tutorial da trilha**, todos com `rascunho: true` e passos marcados `TODO`. Os textos reais serão escritos pelo Bruno. Não inventar passos de interface de apps que você não conhece. Escrever apenas o tutorial "Ativar modo desenvolvedor e instalar o Downloader" de forma genérica e correta, também como rascunho, para revisão.

### `404` com a identidade da marca e link para a home e o WhatsApp.

## Estrutura de pastas

```
infinity-site/
├── CLAUDE.md
├── .env.local                  # nunca commitar
├── .env.local.example
├── app/
│   ├── layout.tsx              # fontes, metadata base, header/footer
│   ├── globals.css             # tokens da marca
│   ├── page.tsx                # home
│   ├── apps/[slug]/page.tsx
│   ├── tutoriais/page.tsx
│   ├── tutoriais/[slug]/page.tsx
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/
│   ├── layout/                 # Header, Footer, MenuMobile
│   ├── home/                   # Hero, SecaoApps, ComoFunciona, PorQue, Faq, CtaFinal
│   ├── apps/                   # CardApp, BlocoPreco, BlocoTeste, Dispositivos
│   ├── tutoriais/              # CardTutorial, Passo, Aviso, VideoYoutube, FiltroTrilha
│   └── ui/                     # BotaoWhatsApp, Botao, Badge, Accordion
├── data/apps.ts                # catálogo: nomes, preços, descrições
├── content/tutoriais/*.mdx
├── lib/
│   ├── apps.ts                 # listarApps(), buscarApp(): único ponto de acesso aos dados
│   ├── tutoriais.ts            # leitura/ordenação do MDX, filtro de rascunhos
│   ├── whatsapp.ts             # número + mensagens
│   └── formatacao.ts           # moeda BRL
└── public/                     # logos da Infinity, og-image
```

## Variáveis de ambiente

```
NEXT_PUBLIC_WHATSAPP_NUMBER=      # só dígitos, com DDI: 5541...
NEXT_PUBLIC_SITE_URL=
```

## Qualidade (critérios de aceite)

- **Mobile-first:** sem scroll horizontal a partir de 360px. Botões de WhatsApp com área de toque de no mínimo 44px.
- **Lighthouse mobile:** Performance ≥ 90, Acessibilidade ≥ 95, SEO ≥ 95.
- Vídeo do YouTube só carrega o iframe após o clique (miniatura estática antes).
- Imagens com `next/image`, dimensões definidas e `alt` descritivo.
- `metadata` por página, Open Graph com imagem da marca, `sitemap.xml` e `robots.txt`.
- Acessibilidade: navegação por teclado, foco visível, accordion com ARIA, `prefers-reduced-motion` respeitado.
- Grep de termos proibidos (seção "Regras de comunicação") limpo.
- Todos os botões de WhatsApp testados: número certo e mensagem certa.
- Testar o app rodando de verdade (Playwright) antes de declarar uma fase concluída, com prints em mobile e desktop.

## Ordem de construção

0. **Fase 0 · Base:** projeto Next.js, Tailwind 4, fontes, tokens, layout com header e footer, `.env.local.example`, `.gitignore` e primeiro deploy de preview na Vercel.
1. **Fase 1 · Home + dados:** `data/apps.ts` + `lib/apps.ts`, `BotaoWhatsApp` e todas as seções da home.
2. **Fase 2 · Páginas de app:** `/apps/[slug]` com geração estática e 404 para slug inválido.
3. **Fase 3 · Tutoriais:** MDX, componentes (`Passo`, `Aviso`, `VideoYoutube`), trilha com filtros e arquivos-rascunho da trilha completa.
4. **Fase 4 · Acabamento:** SEO, OG, sitemap, auditoria Lighthouse e acessibilidade. *Opcional:* animação de entrada do logo da Infinity "se completando". Duração máxima de 1s, só na primeira visita da sessão, respeitando `prefers-reduced-motion` e sem nunca bloquear o conteúdo.
5. **Fase 5 · Go-live:** domínio próprio, variáveis de produção, checklist final.

Ao final de cada fase: commit descritivo em português, resumo do que foi feito e o que falta.

## Futuro (não implementar agora, mas não bloquear)

- Landing pages enxutas para tráfego pago (`/lp/[slug]`), com um único objetivo: levar ao WhatsApp.
- Pixel/analytics de conversão quando começar o tráfego pago.
- **Integração com o Infinity Painel** (quando houver vendas diretas): trocar a origem de `lib/apps.ts` para o Supabase do Painel, com os preços vindo de lá. O desenho atual (campos espelhando `produtos` e acesso centralizado em `lib/apps.ts`) existe para facilitar essa troca.
- Site de vendas com pagamento e entrega automática.

## Nota sobre o AGENTS.md

O `create-next-app` gera e mantém automaticamente um arquivo `AGENTS.md` na raiz do projeto (regenerado pelo `next dev` a cada mudança de versão do Next.js), com regras específicas da versão instalada — coisas que podem divergir do conhecimento pré-treinado do Next.js. Este CLAUDE.md é o briefing do projeto e continua sendo a fonte principal; consulte também o `AGENTS.md` para instruções técnicas específicas da versão do framework.
