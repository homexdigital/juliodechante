import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "./site-config";

/**
 * Regra 2 — metadata única por rota (title, description, canonical, OG, Twitter).
 * Regra 14 — nenhum title/description pode se repetir entre páginas.
 *
 * `buildMetadata` centraliza a montagem e, em build/dev, avisa no console se um
 * title/description sair da faixa recomendada ou colidir com outra página já
 * registrada nesta mesma execução do processo.
 */

const seenTitles = new Map<string, string>();
const seenDescriptions = new Map<string, string>();

function warnOnce(message: string) {
  console.warn(`[SEO] ${message}`);
}

function checkLength(field: "title" | "description", value: string, path: string) {
  const len = value.length;
  const [min, max] = field === "title" ? [50, 60] : [140, 160];
  if (len < min || len > max) {
    warnOnce(`${field} de "${path}" tem ${len} caracteres (ideal ${min}-${max}): "${value}"`);
  }
}

function checkDuplicate(
  field: "title" | "description",
  value: string,
  path: string,
  registry: Map<string, string>,
) {
  const key = value.trim().toLowerCase();
  const existingPath = registry.get(key);
  if (existingPath && existingPath !== path) {
    warnOnce(`${field} duplicado entre "${path}" e "${existingPath}": "${value}"`);
  }
  registry.set(key, path);
}

export interface BuildMetadataInput {
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function buildMetadata({
  path,
  title,
  description,
  ogImage = "/og-image.jpg",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  checkLength("title", title, path);
  checkLength("description", description, path);
  checkDuplicate("title", title, path, seenTitles);
  checkDuplicate("description", description, path, seenDescriptions);

  const canonical = `${SITE_URL}${path}`;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "pt_BR",
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
