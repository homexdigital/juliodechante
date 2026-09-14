import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { graph, serviceSchema } from "@/lib/schema";

const PATH = "/servicos/hipnoterapia-para-bloqueios-emocionais";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "Hipnoterapia para Bloqueios Emocionais em Sinop-MT",
  description:
    "Desbloqueie padrões que travam decisões, relações e autoestima com hipnoterapia avançada. Método SER de Júlio Dechante, em Sinop-MT ou online. Agende agora.",
});

const FAQ_ITEMS = [
  {
    question: "O que é considerado um bloqueio emocional?",
    answer:
      "É um padrão inconsciente que impede uma pessoa de agir, decidir ou se relacionar da forma que gostaria, mesmo tendo clareza racional do que deveria fazer — como travar em entrevistas, sabotar relacionamentos ou não conseguir cobrar pelo próprio trabalho.",
  },
  {
    question: "Bloqueio emocional é a mesma coisa que ansiedade?",
    answer:
      "Nem sempre. A ansiedade costuma vir com sintomas físicos de alerta constante. Já o bloqueio emocional aparece mais como repetição de um mesmo padrão de comportamento, mesmo sem crise de ansiedade associada.",
  },
  {
    question: "Como a hipnoterapia identifica a origem de um bloqueio?",
    answer:
      "No estado de relaxamento profundo, é possível acessar a experiência original — muitas vezes da infância ou de uma relação marcante — que criou a crença inconsciente por trás do bloqueio, e reeducar essa crença.",
  },
  {
    question: "Esse atendimento serve para bloqueios profissionais e financeiros?",
    answer:
      "Sim. Muitos bloqueios emocionais aparecem na vida profissional e financeira, como dificuldade de pedir aumento, medo de empreender ou sabotagem antes de conquistas importantes. O Método SER trabalha a raiz emocional desses padrões.",
  },
] as const;

export default function HipnoterapiaBloqueiosPage() {
  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: "Hipnoterapia para Bloqueios Emocionais",
            description:
              "Sessões de hipnoterapia avançada para desbloquear padrões inconscientes que travam decisões, relações e autoestima, pelo Método SER.",
            path: PATH,
          }),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Serviços", path: "/servicos" },
          { name: "Hipnoterapia para bloqueios emocionais", path: PATH },
        ]}
      />

      <PageHero
        eyebrow="Serviço"
        h1="Hipnoterapia para bloqueios emocionais em Sinop-MT"
        intro="A hipnoterapia para bloqueios emocionais trata padrões inconscientes que travam decisões, relacionamentos, autoestima e vida profissional, mesmo quando a pessoa entende racionalmente o que deveria mudar. Com o Método SER, Júlio Dechante atua na raiz desses padrões, em Sinop-MT ou online."
      />

      <ContentSection id="tipos-de-bloqueio" heading="Quais são os bloqueios emocionais mais comuns?">
        <ul>
          <li>Dificuldade de colocar limites ou dizer não.</li>
          <li>Sabotagem antes de conquistas importantes.</li>
          <li>Repetição do mesmo padrão de relacionamento.</li>
          <li>Baixa autoestima e autocrítica excessiva.</li>
          <li>Dificuldade de cobrar pelo próprio trabalho ou negociar.</li>
        </ul>
        <p>
          Esses padrões costumam ter origem em crenças formadas na infância ou em experiências
          marcantes, e são trabalhados com as mesmas três etapas do{" "}
          <Link href="/metodo-ser">Método SER</Link>.
        </p>
      </ContentSection>

      <ContentSection id="quando-buscar" heading="Quando vale a pena buscar esse atendimento?" tone="muted">
        <p>
          Vale buscar esse atendimento quando você percebe um padrão que se repete — em
          relacionamentos, no trabalho ou nas decisões do dia a dia — e sente que a vontade
          consciente de mudar não é suficiente para quebrar esse ciclo. Se o bloqueio vem
          acompanhado de crises de ansiedade, o atendimento de{" "}
          <Link href="/">hipnoterapia para ansiedade</Link> pode ser combinado ao trabalho de
          bloqueio emocional.
        </p>
      </ContentSection>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre bloqueios emocionais" />

      <Cta
        heading="Pronto para romper esse padrão?"
        description="Fale com Júlio Dechante pelo WhatsApp e agende uma sessão de avaliação, presencial em Sinop-MT ou online."
        whatsappMessage="Olá, Júlio! Sinto que tenho um bloqueio emocional e quero saber como a hipnoterapia pode ajudar."
      />
    </>
  );
}
