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
      <div className="rounded-3xl bg-primary px-6 py-12 text-center text-cream sm:px-12">
        <h2 className="text-balance font-heading text-2xl font-semibold sm:text-3xl">{heading}</h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-cream/90">
          {description}
        </p>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-base font-semibold text-ink transition-colors hover:bg-accent-dark hover:text-cream"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          {buttonLabel}
        </a>
      </div>
    </section>
  );
}
