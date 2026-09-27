import { Botao } from "@/components/ui/Botao";
import { BotaoWhatsApp } from "@/components/ui/BotaoWhatsApp";
import { mensagensWhatsApp } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <span className="font-orbitron text-sm tracking-widest text-roxo">
        404
      </span>
      <h1 className="mt-2 font-orbitron text-2xl text-cinza-claro sm:text-3xl">
        Página não encontrada
      </h1>
      <p className="mt-4 text-cinza-claro/70">
        O link que você acessou pode ter mudado ou não existe mais.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Botao href="/" variante="secundario">
          Voltar para a home
        </Botao>
        <BotaoWhatsApp mensagem={mensagensWhatsApp.generico()}>
          Falar no WhatsApp
        </BotaoWhatsApp>
      </div>
    </div>
  );
}
