import Image from "next/image";
import { Botao } from "@/components/ui/Botao";
import { BotaoWhatsApp } from "@/components/ui/BotaoWhatsApp";
import { Badge } from "@/components/ui/Badge";
import { Dispositivos } from "@/components/apps/Dispositivos";
import { formatarMoeda } from "@/lib/formatacao";
import { mensagensWhatsApp } from "@/lib/whatsapp";
import type { App } from "@/lib/apps";

type CardAppProps = {
  app: App;
};

export function CardApp({ app }: CardAppProps) {
  const precoMinimo = Math.min(app.precoPix, app.precoCartao);

  return (
    <div
      className="flex flex-col rounded-2xl border border-cinza-escuro bg-cinza-escuro/30 p-6"
      style={{ borderTopColor: app.corAcento, borderTopWidth: 2 }}
    >
      <Image
        src={app.logo}
        alt={`Logo do ${app.nome}`}
        width={160}
        height={64}
        className="h-12 w-auto"
      />

      <h3 className="mt-4 font-orbitron text-lg text-cinza-claro">
        {app.nome}
      </h3>
      <p className="mt-2 text-sm text-cinza-claro/70">{app.descricaoCurta}</p>

      <div className="mt-4">
        <Dispositivos dispositivos={app.dispositivos} />
      </div>

      <div className="mt-4">
        <p className="text-lg font-semibold text-cinza-claro">
          A partir de {formatarMoeda(precoMinimo)}/mês
        </p>
        <p className="text-xs text-cinza-claro/60">no Pix</p>
      </div>

      {app.temTesteGratis && (
        <div className="mt-3">
          <Badge>Teste grátis</Badge>
          <p className="mt-1 text-xs text-cinza-claro/60">
            Disponível para novos usuários na primeira instalação do
            aplicativo.
          </p>
        </div>
      )}

      <div className="mt-6 flex flex-col gap-2">
        <BotaoWhatsApp mensagem={mensagensWhatsApp.app(app.nome)}>
          Quero o {app.nome}
        </BotaoWhatsApp>
        <Botao href={`/apps/${app.slug}`} variante="link">
          Saiba mais
        </Botao>
      </div>
    </div>
  );
}
