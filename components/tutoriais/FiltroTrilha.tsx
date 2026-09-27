"use client";

import { useMemo, useState } from "react";
import { CardTutorial } from "./CardTutorial";
import { listarApps } from "@/lib/apps";
import type { Tutorial } from "@/lib/tutoriais";

type Modulo = { numero: number; titulo: string };

type FiltroTrilhaProps = {
  tutoriais: Tutorial[];
  modulos: Modulo[];
};

const TODOS = "todos";

export function FiltroTrilha({ tutoriais, modulos }: FiltroTrilhaProps) {
  const [appFiltro, setAppFiltro] = useState(TODOS);
  const [dispositivoFiltro, setDispositivoFiltro] = useState(TODOS);

  const apps = listarApps();

  const dispositivos = useMemo(() => {
    const unicos = new Set<string>();
    tutoriais.forEach((tutorial) =>
      tutorial.dispositivos.forEach((dispositivo) => unicos.add(dispositivo))
    );
    return Array.from(unicos);
  }, [tutoriais]);

  const filtrados = tutoriais.filter((tutorial) => {
    const combinaApp = appFiltro === TODOS || tutorial.apps.includes(appFiltro);
    const combinaDispositivo =
      dispositivoFiltro === TODOS ||
      tutorial.dispositivos.includes(dispositivoFiltro);
    return combinaApp && combinaDispositivo;
  });

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-center">
        <label className="flex flex-col gap-1 text-sm text-cinza-claro/70">
          App
          <select
            value={appFiltro}
            onChange={(e) => setAppFiltro(e.target.value)}
            className="min-h-11 rounded-lg border border-cinza-escuro bg-preto px-3 text-sm text-cinza-claro"
          >
            <option value={TODOS}>Todos os apps</option>
            {apps.map((app) => (
              <option key={app.slug} value={app.slug}>
                {app.nome}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1 text-sm text-cinza-claro/70">
          Dispositivo
          <select
            value={dispositivoFiltro}
            onChange={(e) => setDispositivoFiltro(e.target.value)}
            className="min-h-11 rounded-lg border border-cinza-escuro bg-preto px-3 text-sm text-cinza-claro"
          >
            <option value={TODOS}>Todos os dispositivos</option>
            {dispositivos.map((dispositivo) => (
              <option key={dispositivo} value={dispositivo}>
                {dispositivo}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="mt-10 space-y-12">
        {modulos.map((modulo) => {
          const doModulo = filtrados
            .filter((tutorial) => tutorial.modulo === modulo.numero)
            .sort((a, b) => a.ordem - b.ordem);

          if (doModulo.length === 0) return null;

          return (
            <div key={modulo.numero}>
              <h2 className="font-orbitron text-lg text-cinza-claro">
                {modulo.titulo}
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {doModulo.map((tutorial) => (
                  <CardTutorial
                    key={tutorial.slug}
                    titulo={tutorial.titulo}
                    resumo={tutorial.resumo}
                    href={`/tutoriais/${tutorial.slug}`}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {filtrados.length === 0 && (
          <p className="text-center text-sm text-cinza-claro/60">
            Nenhum tutorial publicado com esses filtros ainda.
          </p>
        )}
      </div>
    </div>
  );
}
