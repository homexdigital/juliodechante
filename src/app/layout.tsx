import type { Metadata } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { graph, organizationSchema, localBusinessSchema } from "@/lib/schema";
import { SITE_URL, SITE_NAME, business } from "@/lib/site-config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${business.displayName}`,
  },
  description: business.description,
  authors: [{ name: business.founderName, url: `${SITE_URL}/sobre` }],
};

// Layout raiz "puro": html/body, fontes e o JSON-LD sitewide. O header/footer
// do site vive em src/app/(site)/layout.tsx — rotas fora desse grupo de rotas
// (ex.: /links, o link-in-bio) ficam sem chrome, e nada aqui usa headers()/
// cookies(), então todas as páginas continuam estáticas (Regra 11).
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy text-ink">
        <JsonLd data={graph(organizationSchema(), localBusinessSchema())} />
        {children}
      </body>
    </html>
  );
}
