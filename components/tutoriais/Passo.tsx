import type { ReactNode } from "react";

type PassoProps = {
  numero: number;
  titulo: string;
  children: ReactNode;
};

export function Passo({ numero, titulo, children }: PassoProps) {
  return (
    <div className="flex gap-4 border-b border-cinza-escuro py-6 last:border-b-0">
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-roxo/10 text-sm font-semibold text-roxo">
        {numero}
      </span>
      <div>
        <h3 className="font-semibold text-cinza-claro">{titulo}</h3>
        <div className="mt-2 text-sm leading-relaxed text-cinza-claro/70">
          {children}
        </div>
      </div>
    </div>
  );
}
