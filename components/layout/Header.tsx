"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { MenuMobile } from "./MenuMobile";
import { BotaoWhatsApp } from "@/components/ui/BotaoWhatsApp";
import { mensagensWhatsApp } from "@/lib/whatsapp";

const LINKS = [
  { href: "/#apps", label: "Apps" },
  { href: "/#como-funciona", label: "Como funciona" },
  { href: "/tutoriais", label: "Tutoriais" },
  { href: "/#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-cinza-escuro bg-preto/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center"
            aria-label="Infinity Recargas, ir para a home"
          >
            <Image
              src="/logo-colorido.png"
              alt="Infinity Recargas"
              width={160}
              height={87}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Navegação principal"
          >
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-cinza-claro hover:text-roxo"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <BotaoWhatsApp mensagem={mensagensWhatsApp.generico()}>
                Falar no WhatsApp
              </BotaoWhatsApp>
            </div>

            <button
              type="button"
              onClick={() => setMenuAberto(true)}
              aria-label="Abrir menu"
              aria-expanded={menuAberto}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-cinza-claro md:hidden"
            >
              <Menu aria-hidden="true" size={24} />
            </button>
          </div>
        </div>
      </header>

      <MenuMobile
        aberto={menuAberto}
        onFechar={() => setMenuAberto(false)}
        links={LINKS}
      />
    </>
  );
}
