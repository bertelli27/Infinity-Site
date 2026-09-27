import Link from "next/link";

const NUMERO_WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const MENSAGEM_GENERICA = "Olá! Vim pelo site e quero saber mais sobre os apps.";

export default function NotFound() {
  const whatsappHref = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
    MENSAGEM_GENERICA
  )}`;

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
        <Link
          href="/"
          className="flex min-h-11 items-center justify-center rounded-lg border border-cinza-escuro px-5 text-sm font-semibold text-cinza-claro hover:border-roxo"
        >
          Voltar para a home
        </Link>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          className="flex min-h-11 items-center justify-center rounded-lg bg-roxo px-5 text-sm font-semibold text-cinza-claro hover:bg-roxo-escuro"
        >
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
