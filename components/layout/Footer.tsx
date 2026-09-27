import Image from "next/image";
import Link from "next/link";
import { linkWhatsApp, mensagensWhatsApp } from "@/lib/whatsapp";

const LINKS = [
  { href: "/#apps", label: "Apps" },
  { href: "/tutoriais", label: "Tutoriais" },
  { href: "/#duvidas", label: "Dúvidas" },
];

const REDES = [
  { href: "https://www.tiktok.com/@infinityrecargas", label: "TikTok" },
  { href: "https://www.instagram.com/infinityrecargas", label: "Instagram" },
  { href: "https://www.youtube.com/@infinityrecargas", label: "YouTube" },
];

export function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="border-t border-cinza-escuro bg-cinza-escuro/30">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col gap-3">
            <Image
              src="/logo-colorido.png"
              alt="Infinity Recargas"
              width={160}
              height={87}
              className="h-9 w-auto"
            />
            <p className="max-w-sm text-sm text-cinza-claro/70">
              Suporte na instalação e atendimento pelo WhatsApp para os apps
              de entretenimento que revendemos.
            </p>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Links do rodapé">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cinza-claro hover:text-roxo"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={linkWhatsApp(mensagensWhatsApp.generico())}
              target="_blank"
              rel="noopener"
              className="text-sm text-cinza-claro hover:text-roxo"
            >
              WhatsApp
            </a>
          </nav>

          <div className="flex flex-col gap-2">
            <span className="text-sm text-cinza-claro/70">
              @infinityrecargas
            </span>
            <div className="flex gap-4">
              {REDES.map((rede) => (
                <a
                  key={rede.href}
                  href={rede.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-cinza-claro hover:text-roxo"
                >
                  {rede.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 max-w-3xl text-xs text-cinza-claro/60">
          Os aplicativos apresentados neste site são plataformas de terceiros,
          sujeitas a atualizações e mudanças fora do nosso controle. A
          Infinity Recargas revende códigos de ativação e presta suporte na
          instalação e no uso. As marcas e os aplicativos pertencem aos
          respectivos donos.
        </p>

        <p className="mt-4 text-xs text-cinza-claro/60">
          © {ano} Infinity Recargas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
