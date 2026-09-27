import type { MetadataRoute } from "next";
import { listarApps } from "@/lib/apps";
import { listarTutoriais } from "@/lib/tutoriais";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const apps = listarApps();
  const tutoriais = listarTutoriais();

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/tutoriais`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...apps.map((app) => ({
      url: `${siteUrl}/apps/${app.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...tutoriais.map((tutorial) => ({
      url: `${siteUrl}/tutoriais/${tutorial.slug}`,
      lastModified: new Date(tutorial.atualizadoEm),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
