import { CardTutorial } from "@/components/tutoriais/CardTutorial";
import { Botao } from "@/components/ui/Botao";
import { Divisor } from "@/components/ui/Divisor";

const DESTAQUES = [
  {
    titulo: "Preparação do aparelho",
    resumo: "Ativar o modo desenvolvedor e instalar o Downloader na TV.",
  },
  {
    titulo: "Instalação dos apps",
    resumo: "Passo a passo para instalar cada app na TV ou no celular.",
  },
  {
    titulo: "Ativação do código",
    resumo: "Como inserir o código de ativação recebido pelo WhatsApp.",
  },
  {
    titulo: "Como usar cada app",
    resumo: "Buscar conteúdo, organizar favoritos e resolver problemas comuns.",
  },
];

export function TutoriaisDestaque() {
  return (
    <section>
      <Divisor />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-orbitron text-2xl text-cinza-claro sm:text-3xl">
          Tutoriais em destaque
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-cinza-claro/70">
          Uma trilha completa para instalar, ativar e aproveitar os apps.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {DESTAQUES.map((destaque) => (
            <CardTutorial
              key={destaque.titulo}
              titulo={destaque.titulo}
              resumo={destaque.resumo}
              href="/tutoriais"
              rotulo="Ver tutoriais"
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Botao href="/tutoriais" variante="secundario">
            Ver todos os tutoriais
          </Botao>
        </div>
      </div>
    </section>
  );
}
