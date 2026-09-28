import { MessageCircle, Gift, Wallet, CheckCircle2 } from "lucide-react";
import { Divisor } from "@/components/ui/Divisor";

const PASSOS = [
  {
    icone: MessageCircle,
    titulo: "Chame no WhatsApp",
    descricao: "Conte pra gente qual app você quer e tire suas dúvidas.",
  },
  {
    icone: Gift,
    titulo: "Teste grátis quando disponível",
    descricao:
      "Alguns apps oferecem teste grátis para novos usuários antes da compra.",
  },
  {
    icone: Wallet,
    titulo: "Pague por Pix ou cartão",
    descricao: "Escolha a forma de pagamento que for mais fácil pra você.",
  },
  {
    icone: CheckCircle2,
    titulo: "Receba o código e ajuda para ativar",
    descricao: "Enviamos o código de ativação e te ajudamos a colocar no ar.",
  },
];

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="scroll-mt-16">
      <Divisor />
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-center font-orbitron text-2xl text-cinza-claro sm:text-3xl">
          Como funciona
        </h2>

        <ol className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PASSOS.map((passo, indice) => (
            <li key={passo.titulo} className="flex flex-col items-center text-center">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-roxo/10 text-roxo shadow-[0_0_24px_-8px_rgba(138,43,226,0.6)]">
                <passo.icone aria-hidden="true" size={24} />
              </span>
              <span className="mt-4 text-xs font-semibold text-roxo">
                Passo {indice + 1}
              </span>
              <h3 className="mt-1 text-sm font-semibold text-cinza-claro">
                {passo.titulo}
              </h3>
              <p className="mt-2 text-sm text-cinza-claro/70">
                {passo.descricao}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
