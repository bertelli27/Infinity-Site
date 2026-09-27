import { formatarMoeda } from "@/lib/formatacao";

type BlocoPrecoProps = {
  precoPix: number;
  precoCartao: number;
};

export function BlocoPreco({ precoPix, precoCartao }: BlocoPrecoProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-cinza-escuro p-5">
        <p className="text-xs text-cinza-claro/60">Pix</p>
        <p className="mt-1 text-2xl font-semibold text-cinza-claro">
          {formatarMoeda(precoPix)}
          <span className="text-sm font-normal text-cinza-claro/60">/mês</span>
        </p>
      </div>
      <div className="rounded-xl border border-cinza-escuro p-5">
        <p className="text-xs text-cinza-claro/60">Cartão</p>
        <p className="mt-1 text-2xl font-semibold text-cinza-claro">
          {formatarMoeda(precoCartao)}
          <span className="text-sm font-normal text-cinza-claro/60">/mês</span>
        </p>
      </div>
    </div>
  );
}
