import { SITE_URL, SITE_NAME, business } from "./site-config";

/** Regra 6 — builders de dados estruturados (Schema.org / JSON-LD). */

type SchemaObject = Record<string, unknown>;

const dayMap: Record<string, string> = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

export function organizationSchema(): SchemaObject {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: business.displayName,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    founder: {
      "@type": "Person",
      name: business.founderName,
    },
    foundingDate: String(business.activeSince),
    sameAs: [business.social.instagram, business.social.youtube, business.social.googleProfile],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.phoneDisplay,
        contactType: "customer service",
        areaServed: "BR",
        availableLanguage: ["Portuguese"],
      },
    ],
  };
}

export function personSchema(): SchemaObject {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/sobre/#person`,
    name: business.founderName,
    jobTitle: "Hipnoterapeuta e Mestre em Hipnoterapia Avançada",
    description: business.description,
    url: `${SITE_URL}/sobre`,
    image: `${SITE_URL}/images/julio-dechante.jpg`,
    worksFor: { "@id": `${SITE_URL}/#organization` },
    sameAs: [business.social.instagram, business.social.youtube, business.social.googleProfile],
  };
}

export function localBusinessSchema(): SchemaObject {
  return {
    "@type": ["LocalBusiness", "MedicalBusiness"],
    "@id": `${SITE_URL}/#localbusiness`,
    name: SITE_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: business.phoneDisplay,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.streetAddress,
      addressLocality: business.address.addressLocality,
      addressRegion: business.address.addressRegion,
      postalCode: business.address.postalCode,
      addressCountry: business.address.addressCountry,
    },
    openingHoursSpecification: business.openingHours.flatMap((slot) =>
      slot.days.map((day) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayMap[day],
        opens: slot.opens,
        closes: slot.closes,
      })),
    ),
    areaServed: business.serviceArea,
    sameAs: [business.social.instagram, business.social.youtube, business.social.googleProfile],
  };
}

export function websiteSchema(): SchemaObject {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE_URL}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function faqPageSchema(items: FaqItem[]): SchemaObject {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbListSchema(items: BreadcrumbItem[]): SchemaObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  offerText?: string;
}

export function serviceSchema({ name, description, path, offerText }: ServiceSchemaInput): SchemaObject {
  return {
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: `${SITE_URL}${path}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: business.serviceArea,
    audience: {
      "@type": "PeopleAudience",
      audienceType: "Pessoas com ansiedade, traumas, fobias e bloqueios emocionais",
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      description: offerText ?? "Valores sob consulta. Fale pelo WhatsApp para receber a proposta.",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contato`,
    },
  };
}

export interface ArticleSchemaInput {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  image?: string;
}

export function articleSchema({
  title,
  description,
  path,
  datePublished,
  dateModified,
  authorName = business.founderName,
  image,
}: ArticleSchemaInput): SchemaObject {
  return {
    "@type": "Article",
    headline: title,
    description,
    url: `${SITE_URL}${path}`,
    mainEntityOfPage: `${SITE_URL}${path}`,
    datePublished,
    dateModified,
    image: image ?? `${SITE_URL}/og-image.jpg`,
    author: {
      "@type": "Person",
      name: authorName,
      url: `${SITE_URL}/sobre`,
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

/** Envolve um ou mais nós de schema num @graph com @context único. */
export function graph(...nodes: SchemaObject[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
