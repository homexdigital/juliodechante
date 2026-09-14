import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site-config";

export interface CtaProps {
  heading: string;
  description: string;
  whatsappMessage: string;
  buttonLabel?: string;
}

export default function Cta({
  heading,
  description,
  whatsappMessage,
  buttonLabel = "Agendar pelo WhatsApp",
}: CtaProps) {
  return (
    <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
      <div className="rounded-3xl bg-gradient-to-br from-navy-dark to-surface px-6 py-12 text-center ring-1 ring-primary/30 sm:px-12">
        <h2 className="text-balance font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-ink-soft">{description}</p>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-base font-bold text-cream transition-colors hover:bg-whatsapp-dark"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
