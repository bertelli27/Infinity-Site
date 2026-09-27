import type { Metadata } from "next";
import { listarTutoriais, MODULOS_TRILHA } from "@/lib/tutoriais";
import { FiltroTrilha } from "@/components/tutoriais/FiltroTrilha";

export const metadata: Metadata = {
  title: "Tutoriais",
  description:
    "Trilha completa para preparar o aparelho, instalar, ativar e aproveitar os apps da Infinity Recargas.",
};

export default function PaginaTutoriais() {
  const tutoriais = listarTutoriais();

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-center font-orbitron text-3xl text-cinza-claro sm:text-4xl">
        Tutoriais
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-center text-cinza-claro/70">
        Uma trilha completa para preparar o aparelho, instalar, ativar e
        aproveitar cada app.
      </p>

      <div className="mt-12">
        <FiltroTrilha tutoriais={tutoriais} modulos={MODULOS_TRILHA} />
      </div>
    </div>
  );
}
