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

const PATH = "/servicos/hipnoterapia-para-fobias-e-medos";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "Hipnoterapia para Fobias e Medos em Sinop-MT | SER",
  description:
    "Supere fobias e medos excessivos com hipnoterapia avançada em Sinop-MT ou online. Método SER de Júlio Dechante trata a origem inconsciente do medo. Agende já.",
});

const FAQ_ITEMS = [
  {
    question: "Hipnoterapia funciona para qualquer tipo de fobia?",
    answer:
      "Funciona para a maioria das fobias específicas, como medo de altura, de dirigir, de avião, de agulhas, de espaços fechados, de falar em público e outras respostas de medo desproporcionais a uma situação concreta.",
  },
  {
    question: "Qual a diferença entre tratar ansiedade e tratar uma fobia?",
    answer:
      "A ansiedade costuma ser mais difusa, sem um gatilho único. A fobia é uma resposta de medo intensa ligada a uma situação, objeto ou lugar específico. O Método SER se adapta a cada caso, mas em fobias o trabalho é mais direcionado ao gatilho identificado.",
  },
  {
    question: "É preciso enfrentar o medo durante a sessão de hipnoterapia?",
    answer:
      "Não é necessário se expor fisicamente à situação temida. O trabalho é feito no nível mental e emocional, em estado de relaxamento, reduzindo a intensidade da resposta de medo antes de qualquer exposição real.",
  },
  {
    question: "Quanto tempo leva para reduzir uma fobia com hipnoterapia?",
    answer:
      "Muitas fobias específicas apresentam redução perceptível já nas primeiras sessões do Método SER, mas o número exato de sessões é definido após a avaliação inicial de cada caso.",
  },
] as const;

export default function HipnoterapiaFobiasPage() {
  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: "Hipnoterapia para Fobias e Medos",
            description:
              "Sessões de hipnoterapia avançada para reduzir fobias específicas e medos excessivos, pelo Método SER de Júlio Dechante.",
            path: PATH,
          }),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Serviços", path: "/servicos" },
          { name: "Hipnoterapia para fobias e medos", path: PATH },
        ]}
      />

      <PageHero
        eyebrow="Serviço"
        h1="Hipnoterapia para fobias e medos em Sinop-MT"
        intro="A hipnoterapia para fobias e medos trabalha a origem inconsciente de uma resposta de medo específica, como medo de altura, de avião ou de dirigir. Com o Método SER, Júlio Dechante reduz essa resposta em sessões presenciais em Sinop-MT ou online."
      />

      <ContentSection id="origem-do-medo" heading="Por que uma fobia se instala mesmo sem motivo lógico?">
        <p>
          A maioria das fobias nasce de uma associação inconsciente feita pelo cérebro entre uma
          situação e uma sensação de perigo, muitas vezes criada num momento pontual e depois
          generalizada. Por isso, argumentos racionais raramente eliminam uma fobia — o cérebro
          continua reagindo como se o perigo fosse real.
        </p>
        <p>
          A hipnose clínica avançada acessa diretamente esse registro inconsciente, permitindo
          identificar a origem do medo e reeducar a resposta emocional associada a ele, seguindo as
          etapas do <Link href="/metodo-ser">Método SER</Link>.
        </p>
      </ContentSection>

      <ContentSection id="fobias-comuns" heading="Quais fobias são mais tratadas em consultório?" tone="muted">
        <ul>
          <li>Medo de altura, de avião ou de dirigir.</li>
          <li>Medo de agulhas, sangue ou procedimentos médicos.</li>
          <li>Medo de espaços fechados ou de multidões.</li>
          <li>Medo de falar em público ou de ser julgado socialmente.</li>
        </ul>
        <p>
          Quando o medo vem acompanhado de crises de ansiedade generalizada, o atendimento de{" "}
          <Link href="/">hipnoterapia para ansiedade</Link> pode ser combinado ao trabalho de fobia
          específica.
        </p>
      </ContentSection>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre hipnoterapia para fobias" />

      <Cta
        heading="Pronto para encarar essa fobia de outro jeito?"
        description="Fale com Júlio Dechante pelo WhatsApp e agende uma sessão de avaliação, presencial em Sinop-MT ou online."
        whatsappMessage="Olá, Júlio! Tenho uma fobia e quero saber se a hipnoterapia pode me ajudar."
      />
    </>
  );
}
