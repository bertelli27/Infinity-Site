import { BotaoWhatsApp } from "@/components/ui/BotaoWhatsApp";
import { Divisor } from "@/components/ui/Divisor";
import { mensagensWhatsApp } from "@/lib/whatsapp";

export function CtaFinal() {
  return (
    <section className="relative overflow-hidden">
      <Divisor />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(138,43,226,0.16), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <h2 className="font-orbitron text-2xl text-cinza-claro sm:text-3xl">
          Pronto para começar?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-cinza-claro/70">
          Fale com a gente pelo WhatsApp e escolha o app certo para você.
        </p>

        <div className="mt-8">
          <BotaoWhatsApp mensagem={mensagensWhatsApp.generico()}>
            Falar no WhatsApp
          </BotaoWhatsApp>
        </div>
      </div>
    </section>
  );
}
