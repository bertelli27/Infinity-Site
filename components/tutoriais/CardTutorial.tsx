import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CardTutorialProps = {
  titulo: string;
  resumo: string;
  href: string;
  rotulo?: string;
};

export function CardTutorial({
  titulo,
  resumo,
  href,
  rotulo = "Ver tutorial",
}: CardTutorialProps) {
  return (
    <Link
      href={href}
      className="flex flex-col rounded-2xl border border-cinza-escuro bg-cinza-escuro/30 p-6 transition-colors hover:border-roxo"
    >
      <h3 className="text-sm font-semibold text-cinza-claro">{titulo}</h3>
      <p className="mt-2 flex-1 text-sm text-cinza-claro/70">{resumo}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-roxo">
        {rotulo}
        <ArrowRight aria-hidden="true" size={16} />
      </span>
    </Link>
  );
}
