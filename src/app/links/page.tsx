import type { Metadata } from "next";
import type { ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Video,
  Brain,
  Sparkles,
  Layers,
  BookOpen,
  Star,
  PlayCircle,
} from "lucide-react";
import { buildMetadata } from "@/lib/metadata";
import { business, whatsappLink } from "@/lib/site-config";

// Página de link-in-bio para o Instagram: sem header/footer do site (ver
// CHROMELESS_PREFIXES em src/app/layout.tsx), conteúdo raso por natureza —
// por isso fica fora do sitemap e com noindex (Regra 14 não se aplica aqui).
export const metadata: Metadata = buildMetadata({
  path: "/links",
  title: "Júlio Dechante | Todos os Links Oficiais e Contato",
  description:
    "Agende sua sessão de hipnoterapia avançada, assista aos vídeos e conheça o Método SER de Júlio Dechante. Todos os links oficiais em um só lugar.",
  noIndex: true,
});

const WHATSAPP_MESSAGE = "Olá, Júlio! Vim do Instagram e quero agendar uma sessão de avaliação.";

interface BioLink {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  external?: boolean;
}

const LINKS: BioLink[] = [
  {
    href: "/libertar-minha-mente",
    label: "Vídeo: liberte sua mente da ansiedade",
    icon: Video,
  },
  {
    href: "/controle-da-ansiedade",
    label: "Controle a ansiedade sem remédios",
    icon: Brain,
  },
  {
    href: "/metodo-ser",
    label: "Conheça o Método SER",
    icon: Sparkles,
  },
  {
    href: "/servicos",
    label: "Todos os atendimentos",
    icon: Layers,
  },
  {
    href: "/blog",
    label: "Blog sobre ansiedade e hipnoterapia",
    icon: BookOpen,
  },
  {
    href: business.social.googleProfile,
    label: "Avaliações no Google",
    icon: Star,
    external: true,
  },
  {
    href: business.social.youtube,
    label: "Vídeos e depoimentos no YouTube",
    icon: PlayCircle,
    external: true,
  },
];

export default function LinksPage() {
  const ctaHref = whatsappLink(WHATSAPP_MESSAGE);

  return (
    <div className="relative min-h-full overflow-hidden bg-gradient-to-b from-surface via-navy-dark to-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,163,255,0.18),_transparent_55%)]"
      />
      <div className="relative mx-auto flex min-h-full max-w-md flex-col items-center px-5 py-14 text-center sm:py-20">
        <Image
          src="/images/julio-dechante.jpg"
          alt="Foto de Júlio Dechante"
          width={112}
          height={112}
          priority
          className="h-28 w-28 rounded-full object-cover ring-2 ring-primary/50"
        />
        <h1 className="mt-5 font-script text-4xl font-normal text-primary">
          {business.founderName}
        </h1>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
          {business.tagline}
        </p>
        <p className="mx-auto mt-3 max-w-xs text-pretty text-sm text-ink-soft">
          Especialista em ansiedade · Criador do Método SER ·{" "}
          {business.peopleServed.toLocaleString("pt-BR")}+ vidas transformadas
        </p>

        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-whatsapp px-5 py-4 text-sm font-black uppercase tracking-wide text-navy transition-colors hover:bg-whatsapp-dark"
        >
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          Agendar sessão de avaliação
        </a>

        <nav aria-label="Links" className="mt-4 w-full">
          <ul className="flex w-full flex-col gap-3">
            {LINKS.map((link) => {
              const Icon = link.icon;
              const content = (
                <>
                  <Icon className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="flex-1 text-left">{link.label}</span>
                </>
              );
              const className =
                "flex w-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-ink transition-colors hover:border-primary/40 hover:bg-white/10";

              return (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
                      {content}
                    </a>
                  ) : (
                    <Link href={link.href} className={className}>
                      {content}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="mt-10 text-xs text-ink-soft">📍 Sinop-MT · atendimento também online</p>
        <Link href="/" className="mt-2 text-xs font-medium text-primary underline">
          juliodechante.com.br
        </Link>
      </div>
    </div>
  );
}
