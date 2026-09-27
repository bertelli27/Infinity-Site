"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";

type LinkItem = {
  href: string;
  label: string;
};

type MenuMobileProps = {
  aberto: boolean;
  onFechar: () => void;
  links: LinkItem[];
  numeroWhatsApp: string;
  mensagemWhatsApp: string;
};

export function MenuMobile({
  aberto,
  onFechar,
  links,
  numeroWhatsApp,
  mensagemWhatsApp,
}: MenuMobileProps) {
  const fecharRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!aberto) return;

    fecharRef.current?.focus();

    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
    };

    document.addEventListener("keydown", aoTeclar);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", aoTeclar);
      document.body.style.overflow = "";
    };
  }, [aberto, onFechar]);

  if (!aberto) return null;

  const whatsappHref = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(
    mensagemWhatsApp
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menu de navegação"
      className="fixed inset-0 z-50 bg-preto md:hidden"
    >
      <div className="flex items-center justify-between px-4 py-4 border-b border-cinza-escuro">
        <span className="font-orbitron text-sm text-cinza-claro">Menu</span>
        <button
          ref={fecharRef}
          type="button"
          onClick={onFechar}
          aria-label="Fechar menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-cinza-claro"
        >
          <X aria-hidden="true" size={24} />
        </button>
      </div>

      <nav className="flex flex-col gap-1 px-4 py-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onFechar}
            className="flex min-h-11 items-center rounded-lg px-3 text-base text-cinza-claro hover:bg-cinza-escuro"
          >
            {link.label}
          </Link>
        ))}

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener"
          onClick={onFechar}
          className="mt-4 flex min-h-11 items-center justify-center rounded-lg bg-roxo px-4 text-base font-semibold text-cinza-claro"
        >
          Falar no WhatsApp
        </a>
      </nav>
    </div>
  );
}
