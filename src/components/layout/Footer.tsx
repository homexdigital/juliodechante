import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, YoutubeIcon } from "@/components/icons/BrandIcons";
import { business, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-dark">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="font-script text-3xl text-primary">Júlio Dechante</p>
          <p className="mt-2 text-sm text-ink-soft">
            Mestre em Hipnoterapia Avançada, criador do Método SER. Mais de{" "}
            {business.peopleServed.toLocaleString("pt-BR")} pessoas tratadas em Sinop-MT e online
            para todo o mundo.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={business.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Júlio Dechante"
              className="rounded-full border border-primary/30 p-2 text-primary hover:bg-primary hover:text-cream"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={business.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Canal do YouTube de Júlio Dechante"
              className="rounded-full border border-primary/30 p-2 text-primary hover:bg-primary hover:text-cream"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <nav aria-label="Navegação institucional">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink">
            Institucional
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/sobre" className="hover:text-primary">
                Sobre Júlio Dechante
              </Link>
            </li>
            <li>
              <Link href="/metodo-ser" className="hover:text-primary">
                Conheça o Método SER
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary">
                Artigos sobre ansiedade e hipnoterapia
              </Link>
            </li>
            <li>
              <Link href="/privacidade" className="hover:text-primary">
                Política de privacidade
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:text-primary">
                Termos de uso
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Serviços de hipnoterapia">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink">
            Serviços
          </h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/servicos/hipnoterapia-para-traumas" className="hover:text-primary">
                Hipnoterapia para traumas
              </Link>
            </li>
            <li>
              <Link href="/servicos/hipnoterapia-para-fobias-e-medos" className="hover:text-primary">
                Hipnoterapia para fobias e medos
              </Link>
            </li>
            <li>
              <Link
                href="/servicos/hipnoterapia-para-bloqueios-emocionais"
                className="hover:text-primary"
              >
                Hipnoterapia para bloqueios emocionais
              </Link>
            </li>
            <li>
              <Link href="/servicos/hipnoterapia-online" className="hover:text-primary">
                Hipnoterapia online
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wide text-ink">
            Atendimento em Sinop-MT
          </h2>
          <ul className="mt-3 space-y-3 text-sm text-ink-soft">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{business.addressDisplay}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} className="hover:text-primary">
                {business.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${business.email}`} className="hover:text-primary">
                {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-xs text-ink-soft sm:px-6">
        © {year} {business.legalName}. Atendimento presencial em Sinop-MT e online para todo o
        mundo.
      </div>
    </footer>
  );
}
