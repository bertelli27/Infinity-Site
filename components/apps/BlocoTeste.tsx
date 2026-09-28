import { Gift } from "lucide-react";

export function BlocoTeste() {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-roxo/30 bg-roxo/5 p-5 shadow-[0_0_28px_-14px_rgba(138,43,226,0.8)]">
      <Gift aria-hidden="true" className="mt-0.5 shrink-0 text-roxo" size={20} />
      <div>
        <p className="text-sm font-semibold text-cinza-claro">
          Teste grátis disponível
        </p>
        <p className="mt-1 text-sm text-cinza-claro/70">
          Disponível para novos usuários na primeira instalação do
          aplicativo.
        </p>
      </div>
    </div>
  );
}
