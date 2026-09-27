import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { listarApps, buscarApp } from "@/lib/apps";
import { BlocoPreco } from "@/components/apps/BlocoPreco";
import { BlocoTeste } from "@/components/apps/BlocoTeste";
import { Dispositivos } from "@/components/apps/Dispositivos";
import { BotaoWhatsApp } from "@/components/ui/BotaoWhatsApp";
import { Botao } from "@/components/ui/Botao";
import { Accordion } from "@/components/ui/Accordion";
import { mensagensWhatsApp } from "@/lib/whatsapp";

export function generateStaticParams() {
  return listarApps().map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/apps/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const app = buscarApp(slug);

  if (!app) return {};

  return {
    title: app.nome,
    description: app.descricaoCurta,
  };
}

function faqDoApp(nome: string) {
  return [
    {
      pergunta: `Como recebo o código de ativação do ${nome}?`,
      resposta: `Depois de confirmar o pagamento pelo WhatsApp, enviamos o código de ativação do ${nome} e ajudamos você a inserir no aplicativo.`,
    },
    {
      pergunta: "Por quanto tempo o código é válido?",
      resposta: "O código de ativação tem duração de cerca de 30 dias.",
    },
    {
      pergunta: "Como funciona a renovação?",
      resposta:
        "É só chamar a gente no WhatsApp perto do vencimento para renovar o acesso.",
    },
  ];
}

export default async function PaginaApp({
  params,
}: PageProps<"/apps/[slug]">) {
  const { slug } = await params;
  const app = buscarApp(slug);

  if (!app) {
    notFound();
  }

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 text-center">
        <Image
          src={app.logo}
          alt={`Logo do ${app.nome}`}
          width={200}
          height={80}
          priority
          className="mx-auto h-16 w-auto"
        />
        <h1 className="mt-6 font-orbitron text-3xl text-cinza-claro sm:text-4xl">
          {app.nome}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-cinza-claro/70">
          {app.descricao}
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="text-sm font-semibold text-cinza-claro">
              Destaques
            </h2>
            <ul className="mt-4 space-y-2">
              {app.destaques.map((destaque) => (
                <li key={destaque} className="text-sm text-cinza-claro/70">
                  {destaque}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-sm font-semibold text-cinza-claro">
              Dispositivos compatíveis
            </h2>
            <div className="mt-4">
              {app.dispositivos.length > 0 ? (
                <Dispositivos dispositivos={app.dispositivos} />
              ) : (
                <p className="text-sm text-cinza-claro/60">
                  Em breve, mais detalhes sobre compatibilidade.
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <BlocoPreco precoPix={app.precoPix} precoCartao={app.precoCartao} />

            {app.temTesteGratis && <BlocoTeste />}

            <div className="flex flex-col gap-3">
              <BotaoWhatsApp mensagem={mensagensWhatsApp.app(app.nome)}>
                Quero o {app.nome}
              </BotaoWhatsApp>
              {app.temTesteGratis && (
                <BotaoWhatsApp
                  mensagem={mensagensWhatsApp.testeGratis(app.nome)}
                  variante="secundario"
                >
                  Quero testar grátis
                </BotaoWhatsApp>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-cinza-escuro">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center">
          <h2 className="font-orbitron text-2xl text-cinza-claro sm:text-3xl">
            Tutoriais do {app.nome}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-cinza-claro/70">
            Passo a passo para instalar, ativar e aproveitar o {app.nome}.
          </p>
          <div className="mt-6">
            <Botao href="/tutoriais" variante="secundario">
              Ver tutoriais
            </Botao>
          </div>
        </div>
      </section>

      <section className="border-t border-cinza-escuro">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="text-center font-orbitron text-2xl text-cinza-claro sm:text-3xl">
            Dúvidas sobre o {app.nome}
          </h2>
          <div className="mt-10">
            <Accordion itens={faqDoApp(app.nome)} />
          </div>
        </div>
      </section>
    </>
  );
}
