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

const PATH = "/servicos/hipnoterapia-para-traumas";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "Hipnoterapia para Traumas em Sinop-MT | Método SER",
  description:
    "Trate traumas emocionais com hipnoterapia avançada em Sinop-MT ou online. Método SER de Júlio Dechante reprocessa memórias traumáticas com segurança. Agende.",
});

const FAQ_ITEMS = [
  {
    question: "Hipnoterapia para trauma é segura?",
    answer:
      "Sim, quando conduzida por um profissional qualificado. A sessão é feita em estado de relaxamento profundo e consciente, sem reviver o trauma de forma abrupta, e sempre respeitando o ritmo de cada pessoa.",
  },
  {
    question: "Que tipos de trauma podem ser tratados com o Método SER?",
    answer:
      "Traumas de perdas, acidentes, relacionamentos abusivos, luto, violência ou eventos marcantes da infância — qualquer memória que ainda gera sofrimento ou reações emocionais desproporcionais no presente.",
  },
  {
    question: "É preciso relembrar o trauma em detalhes durante a sessão?",
    answer:
      "Não é necessário narrar o evento em detalhes. O trabalho é feito no nível inconsciente, com técnicas que reduzem a carga emocional da memória sem expor a pessoa a um relato doloroso repetido.",
  },
  {
    question: "Quantas sessões são necessárias para tratar um trauma?",
    answer:
      "Depende da complexidade do caso. Após a sessão de avaliação, Júlio Dechante define um plano de acompanhamento específico para o tipo de trauma e o tempo de evolução esperado.",
  },
] as const;

export default function HipnoterapiaTraumasPage() {
  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: "Hipnoterapia para Traumas",
            description:
              "Sessões de hipnoterapia avançada para reprocessar memórias traumáticas, pelo Método SER de Júlio Dechante.",
            path: PATH,
          }),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Serviços", path: "/servicos" },
          { name: "Hipnoterapia para traumas", path: PATH },
        ]}
      />

      <PageHero
        eyebrow="Serviço"
        h1="Hipnoterapia para traumas em Sinop-MT"
        intro="A hipnoterapia para traumas usa o Método SER para reprocessar memórias que continuam gerando dor, medo ou reações desproporcionais no presente. As sessões acontecem em Sinop-MT ou online, com Júlio Dechante conduzindo cada etapa com segurança."
      />

      <ContentSection id="como-atua" heading="Como a hipnoterapia atua sobre um trauma?">
        <p>
          Um trauma não tratado costuma continuar ativo no sistema nervoso, mesmo anos depois do
          evento original. A hipnose clínica avançada permite acessar esse registro em estado de
          relaxamento profundo, sem a necessidade de relembrar o evento em detalhes, e reprocessar
          a carga emocional associada a ele — reduzindo gatilhos, pesadelos, evitações e reações
          físicas de alerta.
        </p>
        <p>
          Esse trabalho segue as mesmas três etapas do <Link href="/metodo-ser">Método SER</Link>:
          sentir onde o trauma ainda se manifesta, entender sua origem inconsciente e reeducar a
          resposta emocional associada a ele.
        </p>
      </ContentSection>

      <ContentSection id="sinais" heading="Quais sinais indicam que vale buscar esse atendimento?" tone="muted">
        <ul>
          <li>Reações emocionais intensas diante de lembranças específicas.</li>
          <li>Dificuldade de dormir ou pesadelos recorrentes ligados a um evento.</li>
          <li>Evitar lugares, pessoas ou situações que lembrem o episódio.</li>
          <li>Sensação de estar sempre em alerta, mesmo sem motivo aparente.</li>
        </ul>
        <p>
          Se algum desses sinais também vem acompanhado de crises de ansiedade, veja também o
          atendimento de <Link href="/">hipnoterapia para ansiedade</Link>, ou, se envolve medo
          específico de uma situação, conheça a{" "}
          <Link href="/servicos/hipnoterapia-para-fobias-e-medos">hipnoterapia para fobias e medos</Link>.
        </p>
      </ContentSection>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre hipnoterapia para traumas" />

      <Cta
        heading="Pronto para reprocessar esse trauma?"
        description="Fale com Júlio Dechante pelo WhatsApp e agende uma sessão de avaliação, presencial em Sinop-MT ou online."
        whatsappMessage="Olá, Júlio! Quero saber mais sobre a hipnoterapia para tratar um trauma."
      />
    </>
  );
}
