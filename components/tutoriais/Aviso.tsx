import type { ReactNode } from "react";
import { Info, AlertTriangle } from "lucide-react";

type AvisoProps = {
  tipo?: "dica" | "atencao";
  children: ReactNode;
};

const CONFIG = {
  dica: {
    icone: Info,
    rotulo: "Dica",
    classeBorda: "border-roxo/30 bg-roxo/5",
    classeRotulo: "text-roxo",
  },
  atencao: {
    icone: AlertTriangle,
    rotulo: "Atenção",
    classeBorda: "border-cinza-claro/20 bg-cinza-claro/5",
    classeRotulo: "text-cinza-claro",
  },
};

export function Aviso({ tipo = "dica", children }: AvisoProps) {
  const { icone: Icone, rotulo, classeBorda, classeRotulo } = CONFIG[tipo];

  return (
    <div className={`flex items-start gap-3 rounded-xl border p-4 ${classeBorda}`}>
      <Icone aria-hidden="true" size={18} className={`mt-0.5 shrink-0 ${classeRotulo}`} />
      <p className="text-sm text-cinza-claro/80">
        <span className={`font-semibold ${classeRotulo}`}>{rotulo}: </span>
        {children}
      </p>
    </div>
  );
}
