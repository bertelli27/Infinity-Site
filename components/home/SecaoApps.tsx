import { CardApp } from "@/components/apps/CardApp";
import { listarApps } from "@/lib/apps";

export function SecaoApps() {
  const apps = listarApps();

  return (
    <section id="apps" className="mx-auto max-w-6xl px-4 py-16 scroll-mt-16">
      <h2 className="text-center font-orbitron text-2xl text-cinza-claro sm:text-3xl">
        Nossos apps
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-cinza-claro/70">
        Escolha o app que combina com o que você quer assistir.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <CardApp key={app.slug} app={app} />
        ))}
      </div>
    </section>
  );
}
