import type { ReactNode } from "react";
import Link from "next/link";

type BotaoProps = {
  href: string;
  children: ReactNode;
  variante?: "primario" | "secundario" | "link";
  className?: string;
};

export function Botao({
  href,
  children,
  variante = "secundario",
  className = "",
}: BotaoProps) {
  const estilos = {
    primario: "bg-roxo text-cinza-claro hover:bg-roxo-escuro",
    secundario: "border border-cinza-escuro text-cinza-claro hover:border-roxo",
    link: "text-roxo hover:text-roxo-escuro underline-offset-4 hover:underline",
  }[variante];

  const base =
    variante === "link"
      ? "inline-flex min-h-11 items-center text-sm font-semibold"
      : "inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-semibold transition-colors";

  return (
    <Link href={href} className={`${base} ${estilos} ${className}`}>
      {children}
    </Link>
  );
}
