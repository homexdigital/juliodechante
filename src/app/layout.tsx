import type { Metadata } from "next";
import { Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-navy text-ink">
        <JsonLd data={graph(organizationSchema(), localBusinessSchema())} />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-cream"
        >
          Pular para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
