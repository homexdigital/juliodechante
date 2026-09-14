import JsonLd from "@/components/JsonLd";
import { graph, faqPageSchema, type FaqItem } from "@/lib/schema";

export interface FaqProps {
  items: FaqItem[];
  heading?: string;
}

// Regra 5 — 4 a 6 perguntas reais, visíveis e marcadas com FAQPage.
export default function Faq({ items, heading = "Perguntas frequentes" }: FaqProps) {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <JsonLd data={graph(faqPageSchema(items))} />
      <h2 id="faq-heading" className="text-center font-heading text-2xl font-semibold text-primary sm:text-3xl">
        {heading}
      </h2>
      <div className="mt-8 divide-y divide-black/5 rounded-2xl border border-black/5 bg-white/60">
        {items.map((item) => (
          <details key={item.question} className="group px-5 py-4 first:rounded-t-2xl last:rounded-b-2xl open:bg-cream-dark/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <span aria-hidden="true" className="shrink-0 text-lg text-primary transition-transform group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
