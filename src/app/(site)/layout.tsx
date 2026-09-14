import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// Chrome do site (header + footer) para todas as páginas "normais". A
// página de link-in-bio (/links) fica fora deste grupo de rotas de
// propósito, para não herdar essa navegação.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-navy"
      >
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" className="flex-1">
        {children}
      </main>
      <Footer />
    </>
  );
}
