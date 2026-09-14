import type { ReactNode } from "react";
import Image from "next/image";

export interface PageHeroProps {
  eyebrow?: string;
  h1: string;
  /** Regra 4 — resposta direta à pergunta implícita da página, em 2-3 frases. */
  intro: string;
  portrait?: {
    src: string;
    alt: string;
    caption?: string;
  };
  children?: ReactNode;
}

export default function PageHero({ eyebrow, h1, intro, portrait, children }: PageHeroProps) {
  return (
    <section className="border-b border-black/5 bg-gradient-to-b from-cream-dark to-cream">
      <div className="mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 sm:py-20">
        {eyebrow ? (
          <p className="font-heading text-sm font-semibold uppercase tracking-widest text-accent-dark">
            {eyebrow}
          </p>
        ) : null}
        {portrait ? (
          <figure className={eyebrow ? "mt-6" : undefined}>
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={280}
              height={280}
              priority
              className="mx-auto h-56 w-56 rounded-full object-cover object-top shadow-[0_12px_40px_rgba(31,77,67,0.28)] ring-4 ring-cream sm:h-64 sm:w-64"
            />
            {portrait.caption ? (
              <figcaption className="mt-4 text-sm text-ink-soft">{portrait.caption}</figcaption>
            ) : null}
          </figure>
        ) : null}
        <h1
          className={`${portrait || eyebrow ? "mt-6" : ""} text-balance font-heading text-3xl font-semibold text-primary sm:text-4xl md:text-5xl`}
        >
          {h1}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
          {intro}
        </p>
        {children ? <div className="mt-8 flex flex-wrap justify-center gap-4">{children}</div> : null}
      </div>
    </section>
  );
}
