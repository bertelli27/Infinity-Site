import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const DIRETORIO_TUTORIAIS = path.join(process.cwd(), "content/tutoriais");

export type Tutorial = {
  slug: string;
  titulo: string;
  resumo: string;
  modulo: number;
  ordem: number;
  apps: string[];
  dispositivos: string[];
  youtubeId: string;
  atualizadoEm: string;
  rascunho: boolean;
  conteudo: string;
};

export const MODULOS_TRILHA = [
  { numero: 1, titulo: "01 · Preparação" },
  { numero: 2, titulo: "02 · Instalação" },
  { numero: 3, titulo: "03 · Conta" },
  { numero: 4, titulo: "04 · Ativação" },
  { numero: 5, titulo: "05 · Como usar" },
  { numero: 6, titulo: "06 · Extras" },
];

function lerTodosOsArquivos(): Tutorial[] {
  const arquivos = fs
    .readdirSync(DIRETORIO_TUTORIAIS)
    .filter((arquivo) => arquivo.endsWith(".mdx"));

  return arquivos.map((arquivo) => {
    const slug = arquivo.replace(/\.mdx$/, "");
    const bruto = fs.readFileSync(
      path.join(DIRETORIO_TUTORIAIS, arquivo),
      "utf8"
    );
    const { data, content } = matter(bruto);

    return {
      slug,
      titulo: data.titulo,
      resumo: data.resumo,
      modulo: data.modulo,
      ordem: data.ordem,
      apps: data.apps ?? [],
      dispositivos: data.dispositivos ?? [],
      youtubeId: data.youtubeId ?? "",
      atualizadoEm: data.atualizadoEm,
      rascunho: Boolean(data.rascunho),
      conteudo: content,
    };
  });
}

function ordenar(tutoriais: Tutorial[]): Tutorial[] {
  return [...tutoriais].sort(
    (a, b) => a.modulo - b.modulo || a.ordem - b.ordem
  );
}

function publicavel(tutorial: Tutorial): boolean {
  return process.env.NODE_ENV !== "production" || !tutorial.rascunho;
}

export function listarTutoriais(): Tutorial[] {
  return ordenar(lerTodosOsArquivos().filter(publicavel));
}

export function buscarTutorial(slug: string): Tutorial | undefined {
  const tutorial = lerTodosOsArquivos().find((t) => t.slug === slug);
  if (!tutorial || !publicavel(tutorial)) return undefined;
  return tutorial;
}
