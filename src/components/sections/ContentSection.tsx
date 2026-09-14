import type { ReactNode } from "react";

export interface ContentSectionProps {
  id?: string;
  heading: string;
  children: ReactNode;
  tone?: "default" | "muted";
}

// Regra 3 — <section> semântica com H2. Regra 4 — subtítulos como pergunta funcionam bem aqui.
export default function ContentSection({ id, heading, children, tone = "default" }: ContentSectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={id ? `${id}-heading` : undefined}
      className={tone === "muted" ? "bg-navy-dark/80" : undefined}
    >
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <h2
          id={id ? `${id}-heading` : undefined}
          className="font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl"
        >
          {heading}
        </h2>
        <div className="prose mt-6 max-w-none prose-headings:font-heading prose-headings:text-cream prose-a:text-primary">
          {children}
        </div>
      </div>
    </section>
  );
}
