import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import { listarTutoriais, buscarTutorial } from "@/lib/tutoriais";
import { buscarApp } from "@/lib/apps";
import { Passo } from "@/components/tutoriais/Passo";
import { Aviso } from "@/components/tutoriais/Aviso";
import { VideoYoutube } from "@/components/tutoriais/VideoYoutube";
import { BotaoWhatsApp } from "@/components/ui/BotaoWhatsApp";
import { Botao } from "@/components/ui/Botao";
import { mensagensWhatsApp } from "@/lib/whatsapp";

export const dynamicParams = false;

export function generateStaticParams() {
  return listarTutoriais().map((tutorial) => ({ slug: tutorial.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/tutoriais/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = buscarTutorial(slug);

  if (!tutorial) return {};

  return {
    title: tutorial.titulo,
    description: tutorial.resumo,
  };
}

export default async function PaginaTutorial({
  params,
}: PageProps<"/tutoriais/[slug]">) {
  const { slug } = await params;
  const tutorial = buscarTutorial(slug);

  if (!tutorial) {
    notFound();
  }

  const doModulo = listarTutoriais()
    .filter((t) => t.modulo === tutorial.modulo)
    .sort((a, b) => a.ordem - b.ordem);
  const indiceAtual = doModulo.findIndex((t) => t.slug === tutorial.slug);
  const anterior = indiceAtual > 0 ? doModulo[indiceAtual - 1] : undefined;
  const proximo =
    indiceAtual < doModulo.length - 1 ? doModulo[indiceAtual + 1] : undefined;

  const nomesDosApps = tutorial.apps
    .map((slugApp) => buscarApp(slugApp)?.nome)
    .filter((nome): nome is string => Boolean(nome));

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="font-orbitron text-2xl text-cinza-claro sm:text-3xl">
        {tutorial.titulo}
      </h1>
      <p className="mt-3 text-cinza-claro/70">{tutorial.resumo}</p>
      {nomesDosApps.length > 0 && (
        <p className="mt-2 text-xs text-cinza-claro/50">
          Apps: {nomesDosApps.join(", ")}
        </p>
      )}

      {tutorial.youtubeId && (
        <div className="mt-8">
          <VideoYoutube
            youtubeId={tutorial.youtubeId}
            titulo={tutorial.titulo}
          />
        </div>
      )}

      <div className="mt-10">
        <MDXRemote source={tutorial.conteudo} components={{ Passo, Aviso }} />
      </div>

      <div className="mt-12 rounded-xl border border-cinza-escuro p-6 text-center">
        <p className="text-sm font-semibold text-cinza-claro">
          Travou em algum passo?
        </p>
        <p className="mt-1 text-sm text-cinza-claro/70">
          Chame a gente no WhatsApp que a gente ajuda.
        </p>
        <div className="mt-4 flex justify-center">
          <BotaoWhatsApp mensagem={mensagensWhatsApp.tutorial(tutorial.titulo)}>
            Falar no WhatsApp
          </BotaoWhatsApp>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        {anterior ? (
          <Botao href={`/tutoriais/${anterior.slug}`} variante="secundario">
            Anterior
          </Botao>
        ) : (
          <span />
        )}
        {proximo ? (
          <Botao href={`/tutoriais/${proximo.slug}`} variante="secundario">
            Próximo
          </Botao>
        ) : (
          <span />
        )}
      </div>
    </div>
  );
}
