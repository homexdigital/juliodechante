import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/servicos",
  title: "Serviços de Hipnoterapia em Sinop-MT | Júlio Dechante",
  description:
    "Conheça os atendimentos de hipnoterapia avançada de Júlio Dechante em Sinop-MT: ansiedade, traumas, fobias, bloqueios emocionais e sessões 100% online.",
});

const SERVICES = [
  {
    href: "/",
    title: "Hipnoterapia para ansiedade",
    description: "Tratamento da ansiedade na raiz, com o Método SER, em Sinop-MT ou online.",
  },
  {
    href: "/servicos/hipnoterapia-para-traumas",
    title: "Hipnoterapia para traumas",
    description: "Reprocessamento de memórias traumáticas de forma segura e conduzida.",
  },
  {
    href: "/servicos/hipnoterapia-para-fobias-e-medos",
    title: "Hipnoterapia para fobias e medos",
    description: "Redução de respostas de medo excessivo e fobias específicas.",
  },
  {
    href: "/servicos/hipnoterapia-para-bloqueios-emocionais",
    title: "Hipnoterapia para bloqueios emocionais",
    description: "Desbloqueio de padrões que travam decisões, relações e autoestima.",
  },
  {
    href: "/servicos/hipnoterapia-online",
    title: "Hipnoterapia online",
    description: "O mesmo protocolo do Método SER, por videochamada, em qualquer lugar do mundo.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "Quanto custa uma sessão de hipnoterapia com Júlio Dechante?",
    answer:
      "Os valores variam conforme o tipo de atendimento (avulso ou plano de acompanhamento) e são informados sob consulta, direto pelo WhatsApp, para que a proposta seja adequada ao seu caso.",
  },
  {
    question: "Qual serviço de hipnoterapia é indicado para o meu caso?",
    answer:
      "Todos os atendimentos usam o Método SER como base. A indicação específica — ansiedade, traumas, fobias ou bloqueios emocionais — é definida na primeira sessão de avaliação.",
  },
  {
    question: "Os atendimentos são presenciais, online ou os dois?",
    answer:
      "Os dois. Há atendimento presencial em Sinop-MT e atendimento online para clientes de qualquer cidade ou país, com o mesmo protocolo e a mesma qualidade.",
  },
  {
    question: "Como faço para agendar um dos serviços?",
    answer:
      "Basta enviar uma mensagem pelo WhatsApp informando o que você gostaria de tratar. Júlio Dechante responde com os próximos passos e os horários disponíveis.",
  },
] as const;

export default function ServicosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Serviços", path: "/servicos" }]} />

      <PageHero
        eyebrow="Atendimentos"
        h1="Serviços de hipnoterapia em Sinop-MT e online"
        intro="Júlio Dechante oferece atendimentos de hipnoterapia avançada baseados no Método SER para ansiedade, traumas, fobias e bloqueios emocionais, presencialmente em Sinop-MT ou online para o mundo todo. Os valores são informados sob consulta, direto pelo WhatsApp."
      />

      <section aria-label="Lista de serviços" className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/40 hover:bg-white/10"
            >
              <h2 className="font-heading text-xl font-bold text-cream">{service.title}</h2>
              <p className="mt-2 text-sm text-ink-soft">{service.description}</p>
              <span className="mt-3 inline-block text-sm font-medium text-primary">
                Saiba como funciona este atendimento →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre os serviços" />

      <Cta
        heading="Não sabe qual atendimento escolher?"
        description="Fale com Júlio Dechante pelo WhatsApp, explique o que você está sentindo e receba a indicação certa."
        whatsappMessage="Olá, Júlio! Quero entender qual atendimento de hipnoterapia é indicado para o meu caso."
      />
    </>
  );
}
