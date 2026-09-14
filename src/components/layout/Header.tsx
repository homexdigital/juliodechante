import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site-config";

const NAV_LINKS = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre Júlio Dechante" },
  { href: "/metodo-ser", label: "Método SER" },
  { href: "/servicos", label: "Serviços" },
  { href: "/blog", label: "Blog" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const cta = whatsappLink(DEFAULT_WHATSAPP_MESSAGE);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy/95 backdrop-blur supports-[backdrop-filter]:bg-navy/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="leading-tight">
          <span className="font-script text-3xl text-primary sm:text-4xl">Júlio Dechante</span>
          <span className="mt-0.5 block text-[0.65rem] font-sans font-semibold uppercase tracking-[0.18em] text-ink-soft sm:text-xs">
            Mestre em Hipnoterapia Avançada
          </span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm font-medium text-ink">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={cta}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-whatsapp-dark md:inline-flex"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Agendar no WhatsApp
        </a>

        <details className="group relative md:hidden">
          <summary
            className="flex cursor-pointer list-none items-center rounded-md border border-primary/40 px-3 py-2 text-sm font-medium text-primary [&::-webkit-details-marker]:hidden"
            aria-label="Abrir menu de navegação"
          >
            Menu
          </summary>
          <nav
            aria-label="Navegação principal (mobile)"
            className="absolute right-0 top-full mt-2 w-64 rounded-xl border border-white/10 bg-navy-dark p-4 shadow-lg"
          >
            <ul className="flex flex-col gap-3 text-sm font-medium text-ink">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="block py-1 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={cta}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-bold text-navy hover:bg-whatsapp-dark"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Agendar no WhatsApp
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
