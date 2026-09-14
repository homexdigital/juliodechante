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

export const metadata: Metadata = buildMetadata({
  path: "/metodo-ser",
  title: "Método SER: Hipnoterapia Avançada de Júlio Dechante",
  description:
    "O Método SER é o protocolo exclusivo de hipnoterapia avançada de Júlio Dechante, já aplicado a mais de 5.000 pessoas para tratar ansiedade, traumas e fobias.",
});

const FAQ_ITEMS = [
  {
    question: "O Método SER é uma técnica registrada?",
    answer:
      "O Método SER é o nome do protocolo próprio criado por Júlio Dechante, que estrutura a Hipnoterapia Avançada em três etapas — Sentir, Entender e Reeducar — aplicadas de forma personalizada a cada pessoa atendida.",
  },
  {
    question: "Para quais problemas o Método SER é indicado?",
    answer:
      "É indicado para ansiedade, depressão, traumas, bloqueios emocionais, medos e fobias — qualquer padrão emocional que se repete apesar da vontade consciente de mudar.",
  },
  {
    question: "O Método SER exige quantas sessões?",
    answer:
      "O número de sessões varia conforme o caso. A primeira sessão é sempre de avaliação, e a partir dela Júlio Dechante define um plano de acompanhamento específico para o objetivo da pessoa.",
  },
  {
    question: "O Método SER pode ser feito online?",
    answer:
      "Sim. O protocolo do Método SER é aplicado da mesma forma nas sessões presenciais em Sinop-MT e nas sessões online, por videochamada, para clientes em qualquer lugar do mundo.",
  },
] as const;

export default function MetodoSerPage() {
  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: "Método SER",
            description:
              "Protocolo exclusivo de hipnoterapia avançada criado por Júlio Dechante para reeducar padrões emocionais inconscientes.",
            path: "/metodo-ser",
          }),
        )}
      />
      <Breadcrumbs items={[{ name: "Método SER", path: "/metodo-ser" }]} />

      <PageHero
        eyebrow="Protocolo exclusivo"
        h1="O que é o Método SER de hipnoterapia avançada?"
        intro="O Método SER é o protocolo exclusivo de hipnoterapia avançada criado por Júlio Dechante, estruturado em três etapas — Sentir, Entender e Reeducar — para tratar ansiedade, traumas, fobias e bloqueios emocionais na raiz. Já foi aplicado em mais de 5.000 pessoas, presencialmente em Sinop-MT e online."
      />

      <ContentSection id="etapas" heading="Quais são as três etapas do Método SER?">
        <ol>
          <li>
            <strong>Sentir:</strong> antes de qualquer mudança, a sessão ajuda a identificar onde e
            como a ansiedade, o medo ou o bloqueio emocional se manifestam no corpo e na mente.
          </li>
          <li>
            <strong>Entender:</strong> por meio da hipnose clínica avançada, é possível acessar o
            momento ou o padrão inconsciente de origem do problema, muitas vezes esquecido pela
            mente consciente.
          </li>
          <li>
            <strong>Reeducar:</strong> o padrão antigo é substituído por uma resposta emocional
            saudável, consolidada ao longo das sessões de acompanhamento.
          </li>
        </ol>
        <p>
          Esse mesmo protocolo é a base dos atendimentos de{" "}
          <Link href="/servicos/hipnoterapia-para-traumas">hipnoterapia para traumas</Link>,{" "}
          <Link href="/servicos/hipnoterapia-para-fobias-e-medos">fobias e medos</Link> e{" "}
          <Link href="/servicos/hipnoterapia-para-bloqueios-emocionais">bloqueios emocionais</Link>.
        </p>
      </ContentSection>

      <ContentSection id="resultados" heading="Quais resultados o Método SER já entregou?" tone="muted">
        <table>
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Número</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pessoas atendidas com o Método SER</td>
              <td>+5.000</td>
            </tr>
            <tr>
              <td>Anos de prática em Hipnoterapia Avançada</td>
              <td>+7</td>
            </tr>
            <tr>
              <td>Modalidades de atendimento</td>
              <td>Presencial (Sinop-MT) e online (mundo todo)</td>
            </tr>
          </tbody>
        </table>
        <p>
          Quer entender a história por trás do método? Conheça a{" "}
          <Link href="/sobre">trajetória de Júlio Dechante</Link>.
        </p>
      </ContentSection>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre o Método SER" />

      <Cta
        heading="Quer aplicar o Método SER no seu caso?"
        description="Fale com Júlio Dechante pelo WhatsApp e agende uma sessão de avaliação, presencial em Sinop-MT ou online."
        whatsappMessage="Olá, Júlio! Quero entender como o Método SER pode me ajudar."
      />
    </>
  );
}
