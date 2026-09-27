import { apps, type App } from "@/data/apps";

export function listarApps(): App[] {
  return apps.filter((app) => app.visivel).sort((a, b) => a.ordem - b.ordem);
}

export function buscarApp(slug: string): App | undefined {
  return apps.find((app) => app.slug === slug && app.visivel);
}

export type { App };
