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
      ? "bg-roxo text-cinza-claro hover:bg-roxo-escuro"
      : "border border-cinza-escuro text-cinza-claro hover:border-roxo";

  return (
    <a
      href={linkWhatsApp(mensagem)}
      target="_blank"
      rel="noopener"
      onClick={onClick}
      className={`inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors ${estilos} ${className}`}
    >
      {children}
    </a>
  );
}
