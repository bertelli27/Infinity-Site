import { BotaoWhatsApp } from "@/components/ui/BotaoWhatsApp";
import { Botao } from "@/components/ui/Botao";
import { mensagensWhatsApp } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(138,43,226,0.22), transparent 65%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
        <h1 className="font-orbitron text-3xl leading-tight text-cinza-claro sm:text-5xl">
          Entretenimento sem limites
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-cinza-claro/70 sm:text-lg">
          Apps de TV ao vivo, filmes e séries, com suporte na instalação e
          atendimento pelo WhatsApp do início ao fim.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <BotaoWhatsApp mensagem={mensagensWhatsApp.generico()}>
            Falar no WhatsApp
          </BotaoWhatsApp>
          <Botao href="#apps" variante="secundario">
            Ver os apps
          </Botao>
        </div>
      </div>
    </section>
  );
}
