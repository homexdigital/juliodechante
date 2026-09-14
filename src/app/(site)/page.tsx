import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { graph, websiteSchema, serviceSchema } from "@/lib/schema";
import { business, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/",
  title: "Hipnoterapia para Ansiedade em Sinop, MT | Método SER",
  description:
    "Trate ansiedade e traumas com hipnoterapia avançada em Sinop-MT ou online. Método SER de Júlio Dechante, +5.000 pessoas tratadas. Agende sua sessão.",
});

const FAQ_ITEMS = [
  {
    question: "Hipnoterapia para ansiedade realmente funciona?",
    answer:
      "Sim. A hipnoterapia avançada trabalha diretamente com o subconsciente, onde a maioria dos padrões de ansiedade é criada e mantida. O Método SER combina técnicas de hipnose clínica com reeducação emocional para reduzir sintomas de ansiedade de forma estruturada, e já foi aplicado em mais de 5.000 atendimentos.",
  },
  {
    question: "Quantas sessões de hipnoterapia são necessárias para tratar ansiedade?",
    answer:
      "Varia de pessoa para pessoa, mas a maioria dos casos de ansiedade apresenta evolução perceptível já nas primeiras sessões do Método SER. Um plano de acompanhamento completo costuma ser definido após a primeira sessão de avaliação, presencial em Sinop-MT ou online.",
  },
  {
    question: "A hipnoterapia é segura e substitui acompanhamento médico?",
    answer:
      "A hipnoterapia é uma técnica segura quando conduzida por um profissional qualificado, mas não substitui diagnóstico ou tratamento médico e psiquiátrico quando estes forem necessários. Júlio Dechante atua como hipnoterapeuta complementar ao cuidado de saúde do cliente.",
  },
  {
    question: "O atendimento é só presencial em Sinop ou também online?",
    answer:
      "Júlio Dechante atende presencialmente em Sinop-MT, na Av. das Embaúbas, 2065, e também realiza hipnoterapia online para clientes em qualquer cidade do Brasil ou do mundo, com o mesmo protocolo do Método SER.",
  },
  {
    question: "O que é o Método SER?",
    answer:
      "O Método SER é o protocolo exclusivo de hipnoterapia avançada criado por Júlio Dechante para tratar ansiedade, traumas, fobias e bloqueios emocionais, reeducando padrões inconscientes na raiz do problema, sem uso de remédios.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graph(
          websiteSchema(),
          serviceSchema({
            name: "Hipnoterapia para Ansiedade",
            description:
              "Sessões de hipnoterapia avançada para tratamento de ansiedade, presenciais em Sinop-MT e online para todo o mundo, pelo Método SER de Júlio Dechante.",
            path: "/",
          }),
        )}
      />

      <PageHero
        eyebrow="Hipnoterapia Avançada em Sinop-MT e online"
        h1="Hipnoterapia para ansiedade em Sinop com o Método SER"
        intro="Se a ansiedade está roubando sua leveza de viver, a hipnoterapia avançada trata a raiz inconsciente do problema, não só o sintoma. Júlio Dechante já aplicou o Método SER em mais de 5.000 pessoas, presencialmente em Sinop-MT e online para o mundo todo."
      >
        <a
          href={whatsappLink("Olá, Júlio! Quero saber mais sobre a hipnoterapia para ansiedade.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-whatsapp px-7 py-3.5 text-base font-bold text-navy transition-colors hover:bg-whatsapp-dark"
        >
          Agendar minha sessão
        </a>
        <Link
          href="/metodo-ser"
          className="inline-flex items-center justify-center rounded-full border border-primary px-7 py-3.5 text-base font-bold text-primary transition-colors hover:bg-primary hover:text-navy"
        >
          Conhecer o Método SER
        </Link>
      </PageHero>

      <section aria-label="Números em destaque" className="border-b border-white/10 bg-white/5">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-10 text-center sm:grid-cols-3 sm:px-6">
          <div>
            <p className="font-heading text-3xl font-semibold text-primary">+5.000</p>
            <p className="mt-1 text-sm text-ink-soft">pessoas tratadas com o Método SER</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-semibold text-primary">+7 anos</p>
            <p className="mt-1 text-sm text-ink-soft">de atuação como hipnoterapeuta</p>
          </div>
          <div>
            <p className="font-heading text-3xl font-semibold text-primary">100%</p>
            <p className="mt-1 text-sm text-ink-soft">presencial em Sinop-MT ou online no mundo</p>
          </div>
        </div>
      </section>

      <ContentSection id="como-funciona" heading="Como funciona a hipnoterapia para ansiedade?">
        <p>
          A hipnoterapia avançada leva você a um estado profundo de relaxamento e foco, no qual é
          possível acessar e reorganizar os padrões inconscientes que alimentam crises de
          ansiedade, medos e bloqueios emocionais. O <Link href="/metodo-ser">Método SER</Link>{" "}
          estrutura esse processo em etapas claras, aplicadas nas sessões presenciais em Sinop-MT
          ou por videochamada.
        </p>
        <ul>
          <li>
            <strong>S — Sentir:</strong> identificar onde a ansiedade se instalou no corpo e na
            mente.
          </li>
          <li>
            <strong>E — Entender:</strong> encontrar a raiz inconsciente do padrão de ansiedade.
          </li>
          <li>
            <strong>R — Reeducar:</strong> substituir o padrão antigo por respostas emocionais
            saudáveis, sem remédios.
          </li>
        </ul>
        <p>
          Conheça também os atendimentos específicos para{" "}
          <Link href="/servicos/hipnoterapia-para-traumas">traumas</Link>,{" "}
          <Link href="/servicos/hipnoterapia-para-fobias-e-medos">fobias e medos</Link> e{" "}
          <Link href="/servicos/hipnoterapia-para-bloqueios-emocionais">bloqueios emocionais</Link>.
        </p>
      </ContentSection>

      <section aria-label="Diferenciais" className="bg-navy-dark/80">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            Por que tratar a ansiedade com Júlio Dechante?
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div className="text-center">
              <Sparkles className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-lg font-bold text-ink">Método SER exclusivo</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Protocolo próprio de hipnoterapia avançada, desenvolvido por Júlio Dechante ao
                longo de mais de 7 anos de prática clínica.
              </p>
            </div>
            <div className="text-center">
              <Users className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-lg font-bold text-ink">+5.000 pessoas tratadas</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Experiência aplicada em casos reais de ansiedade, traumas, fobias e bloqueios
                emocionais em Sinop-MT e a distância.
              </p>
            </div>
            <div className="text-center">
              <ShieldCheck className="mx-auto h-8 w-8 text-accent" aria-hidden="true" />
              <h3 className="mt-3 font-heading text-lg font-bold text-ink">Sem remédios, sem julgamentos</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Um espaço de escuta e técnica, para reeducar emoções pela raiz. Saiba mais{" "}
                <Link href="/sobre">sobre a trajetória de Júlio Dechante</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre hipnoterapia para ansiedade" />

      <Cta
        heading="Pronto para tratar a ansiedade na raiz?"
        description={`Agende uma conversa com ${business.founderName} pelo WhatsApp e descubra como o Método SER pode ajudar você, presencialmente em Sinop-MT ou online.`}
        whatsappMessage="Olá, Júlio! Vim pelo site e quero agendar uma sessão de hipnoterapia para ansiedade."
      />
    </>
  );
}
