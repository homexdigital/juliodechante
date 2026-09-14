import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";
import ContactForm from "@/components/ContactForm";
import { buildMetadata } from "@/lib/metadata";
import { business, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/contato",
  title: "Agendar Sessão de Hipnoterapia em Sinop-MT | Contato",
  description:
    "Agende sua sessão de hipnoterapia com Júlio Dechante em Sinop-MT ou online. Endereço, telefone, horários de atendimento e WhatsApp direto. Fale agora.",
});

const HOURS = [
  { label: "Segunda a quinta-feira", value: "08:00 – 23:00" },
  { label: "Sexta-feira", value: "08:00 – 23:30" },
  { label: "Sábado", value: "Fechado" },
  { label: "Domingo", value: "09:00 – 23:00" },
] as const;

const FAQ_ITEMS = [
  {
    question: "Como funciona o agendamento de uma sessão de hipnoterapia?",
    answer:
      "Você envia uma mensagem pelo WhatsApp ou preenche o formulário desta página contando o que gostaria de tratar. Júlio Dechante responde com os horários disponíveis, presenciais em Sinop-MT ou online.",
  },
  {
    question: "Preciso agendar com quanto tempo de antecedência?",
    answer:
      "O ideal é entrar em contato com pelo menos 2 a 3 dias de antecedência, mas horários de última hora podem estar disponíveis — confirme direto pelo WhatsApp.",
  },
  {
    question: "Onde fica o consultório em Sinop-MT?",
    answer: `O atendimento presencial acontece na ${business.addressDisplay}.`,
  },
  {
    question: "É possível remarcar uma sessão já agendada?",
    answer:
      "Sim, basta avisar com antecedência pelo WhatsApp para reorganizar o horário sem prejuízo para você ou para a agenda de outros atendimentos.",
  },
] as const;

export default function ContatoPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Contato", path: "/contato" }]} />

      <PageHero
        eyebrow="Agendamento"
        h1="Como agendar hipnoterapia em Sinop com Júlio Dechante"
        intro="Para agendar uma sessão de hipnoterapia com Júlio Dechante, o caminho mais rápido é o WhatsApp: basta informar se prefere atendimento presencial em Sinop-MT ou online. Você também pode usar o formulário abaixo para organizar as informações antes de enviar."
      />

      <section className="mx-auto grid max-w-5xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2">
        <div>
          <h2 className="font-heading text-2xl font-semibold text-primary">
            Informações de contato
          </h2>
          <ul className="mt-6 space-y-5 text-sm text-ink">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {business.addressDisplay}
                <br />
                <a
                  href={business.social.googleProfile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-dark underline"
                >
                  Ver perfil e avaliações no Google
                </a>
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)} target="_blank" rel="noopener noreferrer">
                {business.phoneDisplay} (WhatsApp)
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
              <div>
                <p className="font-medium">Horário de atendimento</p>
                <dl className="mt-1 space-y-1 text-ink-soft">
                  {HOURS.map((slot) => (
                    <div key={slot.label} className="flex justify-between gap-4">
                      <dt>{slot.label}</dt>
                      <dd>{slot.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          </ul>

          <p className="mt-6 text-sm text-ink-soft">
            Ainda não sabe qual atendimento é o mais indicado? Veja todos os{" "}
            <Link href="/servicos" className="text-primary underline">
              serviços de hipnoterapia
            </Link>{" "}
            ou conheça o <Link href="/metodo-ser" className="text-primary underline">Método SER</Link>{" "}
            antes de agendar.
          </p>
        </div>

        <div className="rounded-2xl border border-black/5 bg-white/70 p-6">
          <h2 className="font-heading text-xl font-semibold text-primary">
            Prefere organizar por escrito?
          </h2>
          <p className="mt-2 text-sm text-ink-soft">
            Preencha os campos abaixo. Ao enviar, sua mensagem é aberta diretamente no WhatsApp de
            Júlio Dechante.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre agendamento" />
    </>
  );
}
