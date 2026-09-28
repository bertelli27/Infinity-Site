import type { ReactNode } from "react";
import { linkWhatsApp } from "@/lib/whatsapp";

type BotaoWhatsAppProps = {
  mensagem: string;
  children: ReactNode;
  variante?: "primario" | "secundario";
  className?: string;
  onClick?: () => void;
};

export function BotaoWhatsApp({
  mensagem,
  children,
  variante = "primario",
  className = "",
  onClick,
}: BotaoWhatsAppProps) {
  const estilos =
    variante === "primario"
      ? "bg-roxo text-cinza-claro shadow-[0_0_24px_-6px_rgba(138,43,226,0.7)] hover:bg-roxo-escuro hover:shadow-[0_0_32px_-4px_rgba(138,43,226,0.85)]"
      : "border border-cinza-escuro text-cinza-claro hover:border-roxo";

  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener"
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-[background-color,box-shadow] ${estilos} ${className}`}
    >
      {children}
    </a>
  );
}
