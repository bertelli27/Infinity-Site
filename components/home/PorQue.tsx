import { Headset, Shield, Infinity as InfinityIcon, Zap } from "lucide-react";

const MOTIVOS = [
  {
    icone: Headset,
    titulo: "Suporte na instalação",
    descricao: "Te ajudamos a instalar e ativar o app do zero, sem enrolação.",
  },
  {
    icone: Shield,
    titulo: "Atendimento todos os dias",
    descricao: "Estamos disponíveis pelo WhatsApp para tirar dúvidas e ajudar.",
  },
  {
    icone: InfinityIcon,
    titulo: "Tutoriais completos",
    descricao: "Uma central de tutoriais escritos e em vídeo para cada app.",
  },
  {
    icone: Zap,
    titulo: "Renovação sem complicação",
    descricao: "Quando o período acabar, renovar é rápido, direto pelo WhatsApp.",
  },
];

export function PorQue() {
  return (
    <section className="border-t border-cinza-escuro">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-orbitron text-2xl text-cinza-claro sm:text-3xl">
          Por que a Infinity
        </h2>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {MOTIVOS.map((motivo) => (
            <div key={motivo.titulo} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roxo/10 text-roxo">
                <motivo.icone aria-hidden="true" size={24} />
              </span>
              <h3 className="mt-4 text-sm font-semibold text-cinza-claro">
                {motivo.titulo}
              </h3>
              <p className="mt-2 text-sm text-cinza-claro/70">
                {motivo.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
