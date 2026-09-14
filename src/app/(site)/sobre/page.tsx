import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { graph, personSchema } from "@/lib/schema";
import { business } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/sobre",
  title: "Júlio Dechante: Hipnoterapeuta em Sinop-MT | Sobre Mim",
  description:
    "Júlio Dechante é hipnoterapeuta em Sinop-MT desde 2019, pai do Luis e do Lucas, criador do Método SER e responsável por mais de 5.000 pessoas tratadas.",
});

const FAQ_ITEMS = [
  {
    question: "Júlio Dechante é psicólogo ou psiquiatra?",
    answer:
      "Não. Júlio Dechante é hipnoterapeuta, especialista em Hipnoterapia Avançada e criador do Método SER. Ele atua de forma complementar à psicologia e à psiquiatria, e não substitui diagnóstico ou tratamento médico quando estes forem necessários.",
  },
  {
    question: "Desde quando Júlio Dechante atua como hipnoterapeuta?",
    answer:
      "Júlio Dechante atua como hipnoterapeuta desde 2019, com mais de 7 anos de prática clínica dedicados a tratar ansiedade, traumas, fobias e bloqueios emocionais em Sinop-MT e online.",
  },
  {
    question: "Onde Júlio Dechante atende presencialmente?",
    answer: `Os atendimentos presenciais acontecem em Sinop-MT, na ${business.addressDisplay}. Também é possível fazer todo o processo online, de qualquer cidade ou país.`,
  },
  {
    question: "O que é o Método SER, criado por Júlio Dechante?",
    answer:
      "O Método SER é o protocolo próprio de hipnoterapia avançada desenvolvido por Júlio Dechante para reeducar emoções pela raiz, já aplicado em mais de 5.000 pessoas.",
  },
] as const;

export default function SobrePage() {
  return (
    <>
      <JsonLd data={graph(personSchema())} />
      <Breadcrumbs items={[{ name: "Sobre", path: "/sobre" }]} />

      <PageHero
        eyebrow="Sobre"
        h1="Quem é Júlio Dechante, hipnoterapeuta em Sinop-MT"
        intro="Júlio Dechante é hipnoterapeuta há mais de 7 anos, criador do Método SER e responsável por mais de 5.000 pessoas tratadas para ansiedade, traumas, fobias e bloqueios emocionais. Atende presencialmente em Sinop-MT e online para o mundo todo desde 2019."
        portrait={{
          src: "/images/julio-dechante.jpg",
          alt: "Retrato de Júlio Dechante, hipnoterapeuta e criador do Método SER",
          caption: `${business.founderName} · ${business.tagline}`,
        }}
      />

      <ContentSection id="trajetoria" heading="Qual é a trajetória de Júlio Dechante?">
        <p>
          Pai do Luis e do Lucas, Júlio Dechante construiu sua trajetória como hipnoterapeuta a
          partir de uma pergunta simples: por que tantas pessoas continuam presas à ansiedade e à
          depressão mesmo depois de anos de tratamento convencional? A resposta o levou a se
          especializar em reeducar emoções pela raiz, usando a Hipnoterapia Avançada para acessar
          e transformar padrões inconscientes.
        </p>
        <p>
          Ao longo de mais de 7 anos de prática clínica em Sinop-MT, esse trabalho deu origem ao{" "}
          <Link href="/metodo-ser">Método SER</Link>, protocolo exclusivo já aplicado a mais de
          5.000 pessoas, presencialmente e online.
        </p>
      </ContentSection>

      <ContentSection id="abordagem" heading="Como Júlio Dechante trata ansiedade e depressão?" tone="muted">
        <p>
          A abordagem parte de um princípio: ansiedade e depressão não são falhas de caráter, mas
          padrões inconscientes que podem ser desbloqueados e reeducados. Sem remédios e sem
          julgamentos, o trabalho combina hipnose clínica avançada com técnicas de reeducação
          emocional, aplicadas nos atendimentos de{" "}
          <Link href="/servicos/hipnoterapia-para-traumas">traumas</Link>,{" "}
          <Link href="/servicos/hipnoterapia-para-fobias-e-medos">fobias e medos</Link> e{" "}
          <Link href="/servicos/hipnoterapia-para-bloqueios-emocionais">bloqueios emocionais</Link>.
        </p>
        <p>
          Confira os detalhes de cada atendimento na página de{" "}
          <Link href="/servicos">serviços de hipnoterapia</Link>.
        </p>
      </ContentSection>

      <ContentSection id="podcasts" heading="Onde ver Júlio Dechante falando sobre hipnoterapia?">
        <p>
          Além do consultório, Júlio Dechante leva o tema da saúde emocional a entrevistas e
          podcasts, e publica conteúdo semanal no{" "}
          <a href={business.social.youtube} target="_blank" rel="noopener noreferrer">
            canal do YouTube
          </a>{" "}
          e no{" "}
          <a href={business.social.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          .
        </p>
        <ul>
          {business.podcasts.map((url, index) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                Participação em podcast sobre hipnoterapia e saúde emocional #{index + 1}
              </a>
            </li>
          ))}
        </ul>
      </ContentSection>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre Júlio Dechante" />

      <Cta
        heading="Quer conversar diretamente com Júlio Dechante?"
        description="Agende uma sessão de avaliação e entenda como o Método SER pode ajudar no seu caso."
        whatsappMessage="Olá, Júlio! Li sobre sua trajetória no site e quero agendar uma conversa."
      />
    </>
  );
}
