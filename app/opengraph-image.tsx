import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          width={480}
          height={262}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            fontWeight: 600,
            color: "#F2F2F5",
          }}
        >
          Entretenimento sem limites
        </div>
        <div
          style={{
            marginTop: 10,
            fontSize: 22,
            color: "rgba(242,242,245,0.7)",
          }}
        >
          TV, filmes e séries com suporte na instalação
        </div>
      </div>
    ),
    size
  );
}
