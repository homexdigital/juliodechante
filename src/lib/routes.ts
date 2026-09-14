import fs from "node:fs";
import path from "node:path";

/**
 * Regra 8 — o sitemap é gerado a partir das rotas reais, com lastModified
 * vindo da data de modificação do próprio arquivo de página (nunca escrito à mão).
 */

const APP_DIR = path.join(process.cwd(), "src", "app");

export interface StaticRouteEntry {
  route: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
}

// Rotas estáticas do site. Ao adicionar uma página nova, registre aqui
// (e em src/lib/keywords.ts) para que ela entre automaticamente no sitemap.
export const STATIC_ROUTES: StaticRouteEntry[] = [
  { route: "/", priority: 1, changeFrequency: "weekly" },
  { route: "/sobre", priority: 0.8, changeFrequency: "monthly" },
  { route: "/metodo-ser", priority: 0.9, changeFrequency: "monthly" },
  { route: "/servicos", priority: 0.9, changeFrequency: "monthly" },
  { route: "/servicos/hipnoterapia-para-traumas", priority: 0.8, changeFrequency: "monthly" },
  { route: "/servicos/hipnoterapia-para-fobias-e-medos", priority: 0.8, changeFrequency: "monthly" },
  { route: "/servicos/hipnoterapia-para-bloqueios-emocionais", priority: 0.8, changeFrequency: "monthly" },
  { route: "/servicos/hipnoterapia-online", priority: 0.8, changeFrequency: "monthly" },
  { route: "/contato", priority: 0.9, changeFrequency: "yearly" },
  { route: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { route: "/libertar-minha-mente", priority: 0.9, changeFrequency: "monthly" },
  { route: "/privacidade", priority: 0.2, changeFrequency: "yearly" },
  { route: "/termos", priority: 0.2, changeFrequency: "yearly" },
];

function routeToPageFile(route: string): string {
  const segment = route === "/" ? "" : route;
  const candidates = [
    path.join(APP_DIR, segment, "page.tsx"),
    path.join(APP_DIR, segment, "page.mdx"),
  ];
  return candidates.find((candidate) => fs.existsSync(candidate)) ?? candidates[0];
}

export function lastModifiedFor(route: string): Date {
  const file = routeToPageFile(route);
  try {
    // Escopo estático em src/app evita que o bundler rastreie o projeto inteiro.
    return fs.statSync(/* turbopackIgnore: true */ file).mtime;
  } catch {
    return new Date();
  }
}
