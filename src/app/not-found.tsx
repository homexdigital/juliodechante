import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SiteSearchForm from "@/components/SiteSearchForm";

export const metadata: Metadata = {
  title: "Página não encontrada | Júlio Dechante",
  description: "A página que você procurava não existe ou foi movida. Use a busca ou os links principais para continuar navegando.",
  robots: { index: false, follow: true },
};

const MAIN_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Júlio Dechante" },
  { href: "/metodo-ser", label: "Método SER" },
  { href: "/servicos", label: "Serviços de hipnoterapia" },
  { href: "/blog", label: "Blog sobre ansiedade e hipnoterapia" },
  { href: "/contato", label: "Contato e agendamento" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="conteudo-principal" className="flex-1">
        <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-20 text-center sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-accent">
            Erro 404
          </p>
          <h1 className="mt-3 font-heading text-3xl font-black uppercase tracking-wide text-cream sm:text-4xl">
            Essa página não foi encontrada
          </h1>
          <p className="mt-4 text-ink-soft">
            O endereço pode ter mudado ou nunca existiu. Use a busca abaixo ou escolha um dos links
            principais do site.
          </p>

          <div className="mt-8">
            <SiteSearchForm />
          </div>

          <nav aria-label="Links principais" className="mt-10 w-full">
            <ul className="grid gap-3 sm:grid-cols-2">
              {MAIN_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-primary hover:border-primary/40"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </main>
      <Footer />
    </>
  );
}
