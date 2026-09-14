import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";
import { STATIC_ROUTES, lastModifiedFor } from "@/lib/routes";
import { getAllPostsMeta } from "@/lib/blog";

// Regra 8 — sitemap.xml gerado automaticamente a partir das rotas reais.
export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(({ route, priority, changeFrequency }) => ({
    url: `${SITE_URL}${route}`,
    lastModified: lastModifiedFor(route),
    changeFrequency,
    priority,
  }));

  const postEntries: MetadataRoute.Sitemap = getAllPostsMeta().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
