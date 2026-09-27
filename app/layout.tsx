import type { Metadata } from "next";
import { Orbitron, Raleway } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const descricaoSite =
  "Nexa TV, NexoCine e UniTV: apps de TV, filmes e séries com suporte na instalação e atendimento pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Infinity Recargas",
    template: "%s | Infinity Recargas",
  },
  description: descricaoSite,
  openGraph: {
    title: "Infinity Recargas",
    description: descricaoSite,
    siteName: "Infinity Recargas",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${orbitron.variable} ${raleway.variable} h-full`}
    >
      <body className="flex min-h-full flex-col font-raleway antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-roxo focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-cinza-claro"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
