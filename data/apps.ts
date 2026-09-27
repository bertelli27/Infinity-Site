export type App = {
  slug: string;
  nome: string;
  visivel: boolean;
  ordem: number;
  precoPix: number;
  precoCartao: number;
  descricaoCurta: string;
  descricao: string;
  destaques: string[];
  dispositivos: string[];
  temTesteGratis: boolean;
  logo: string;
  corAcento: string;
};

// Dispositivos por app: TODO — pendente de confirmação com o Bruno.
export const apps: App[] = [
  {
    slug: "nexa-tv",
    nome: "Nexa TV",
    visivel: true,
    ordem: 1,
    precoPix: 21.0,
    precoCartao: 22.9,
    descricaoCurta: "TV ao vivo, canais e uma área completa de futebol.",
    descricao:
      "O Nexa TV reúne canais de TV aberta e fechada e uma área dedicada de futebol, para acompanhar a programação e os jogos direto do seu aparelho.",
    destaques: [
      "Canais de TV aberta e fechada",
      "Área dedicada de futebol",
      "Interface simples para navegar entre os canais",
    ],
    dispositivos: [],
    temTesteGratis: false,
    logo: "/apps/nexa-tv.svg",
    corAcento: "#EF4444",
  },
  {
    slug: "nexocine",
    nome: "NexoCine",
    visivel: true,
    ordem: 2,
    precoPix: 17.9,
    precoCartao: 19.9,
    descricaoCurta: "Filmes, séries, animes, desenhos e novelas em um só lugar.",
    descricao:
      "O NexoCine reúne filmes, séries, animes, desenhos e novelas em um catálogo amplo, com busca por categoria e favoritos para continuar de onde parou.",
    destaques: [
      "Catálogo de filmes e séries",
      "Animes, desenhos e novelas",
      "Organização por categorias e favoritos",
    ],
    dispositivos: [],
    temTesteGratis: true,
    logo: "/apps/nexocine.svg",
    corAcento: "#22D3EE",
  },
  {
    slug: "unitv",
    nome: "UniTV",
    visivel: true,
    ordem: 3,
    precoPix: 25.0,
    precoCartao: 27.9,
    descricaoCurta: "TV ao vivo, esportes, filmes e séries em um único app.",
    descricao:
      "O UniTV combina canais de TV ao vivo, cobertura de esportes e um catálogo de filmes e séries, tudo em um único aplicativo.",
    destaques: [
      "Canais de TV ao vivo",
      "Cobertura de esportes",
      "Filmes e séries no catálogo",
    ],
    dispositivos: [],
    temTesteGratis: false,
    logo: "/apps/unitv.svg",
    corAcento: "#F97316",
  },
];
