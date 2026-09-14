export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqProps {
  items: FaqItem[];
  heading?: string;
}

export default function Faq({ items, heading = "Perguntas frequentes" }: FaqProps) {
  return (
    <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h2
        id="faq-heading"
        className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl"
      >
        {heading}
      </h2>
      <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {items.map((item) => (
          <details
            key={item.question}
            className="group px-5 py-4 first:rounded-t-2xl last:rounded-b-2xl open:bg-primary/10"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
              {item.question}
              <span
                aria-hidden="true"
                className="shrink-0 text-lg text-primary transition-transform group-open:rotate-45"
              >
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
