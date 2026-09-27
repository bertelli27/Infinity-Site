import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";
import { listarApps, buscarApp } from "@/lib/apps";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return listarApps().map((app) => ({ slug: app.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = buscarApp(slug);

  const logo = fs.readFileSync(
    path.join(process.cwd(), "public/logo-colorido.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0D0D12",
          backgroundImage:
            "radial-gradient(circle at 28% 20%, rgba(138,43,226,0.35), transparent 55%), radial-gradient(circle at 78% 82%, rgba(90,0,214,0.35), transparent 55%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="Infinity Recargas"
          width={220}
          height={120}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 60,
            fontWeight: 700,
            color: "#F2F2F5",
          }}
        >
          {app?.nome ?? "Infinity Recargas"}
        </div>
        {app && (
          <div
            style={{
              marginTop: 14,
              fontSize: 26,
              color: "rgba(242,242,245,0.7)",
              maxWidth: 800,
              textAlign: "center",
            }}
          >
            {app.descricaoCurta}
          </div>
        )}
      </div>
    ),
    size
  );
}
