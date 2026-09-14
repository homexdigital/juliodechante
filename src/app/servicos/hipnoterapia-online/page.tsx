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

const PATH = "/servicos/hipnoterapia-online";

export const metadata: Metadata = buildMetadata({
  path: PATH,
  title: "Hipnoterapia Online com Júlio Dechante | Método SER",
  description:
    "Faça hipnoterapia online com Júlio Dechante de qualquer cidade ou país, pelo mesmo Método SER usado em Sinop-MT. Sessões por videochamada. Agende a sua.",
});

const FAQ_ITEMS = [
  {
    question: "Hipnoterapia online funciona tão bem quanto presencial?",
    answer:
      "Sim. O protocolo do Método SER é o mesmo nas duas modalidades. O estado de relaxamento necessário para a hipnose clínica é alcançado normalmente por videochamada, desde que a pessoa esteja em um ambiente tranquilo.",
  },
  {
    question: "Preciso de algum equipamento especial para a sessão online?",
    answer:
      "Não. Basta um celular, tablet ou computador com internet estável, câmera e áudio funcionando, além de um espaço privado e silencioso durante o horário da sessão.",
  },
  {
    question: "A hipnoterapia online atende pessoas fora do Brasil?",
    answer:
      "Sim. Júlio Dechante atende clientes de qualquer país, sempre em português, ajustando apenas o horário conforme o fuso horário de cada cliente.",
  },
  {
    question: "Como agendar uma sessão de hipnoterapia online?",
    answer:
      "Basta enviar uma mensagem pelo WhatsApp informando sua cidade e o horário disponível. Júlio Dechante confirma a agenda e envia o link da videochamada antes da sessão.",
  },
] as const;

export default function HipnoterapiaOnlinePage() {
  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: "Hipnoterapia Online",
            description:
              "Sessões de hipnoterapia avançada por videochamada, pelo Método SER de Júlio Dechante, para clientes de qualquer cidade ou país.",
            path: PATH,
          }),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Serviços", path: "/servicos" },
          { name: "Hipnoterapia online", path: PATH },
        ]}
      />

      <PageHero
        eyebrow="Serviço"
        h1="Hipnoterapia online com Júlio Dechante"
        intro="A hipnoterapia online aplica o mesmo Método SER usado nos atendimentos presenciais em Sinop-MT, por videochamada, para clientes de qualquer cidade ou país. É a opção indicada para quem não mora em Sinop-MT ou prefere fazer o tratamento de casa."
      />

      <ContentSection id="como-funciona-online" heading="Como funciona uma sessão de hipnoterapia por videochamada?">
        <p>
          A sessão online segue a mesma estrutura da sessão presencial: uma conversa inicial, a
          indução ao estado de relaxamento profundo e o trabalho de hipnose clínica guiado por
          Júlio Dechante, tudo por videochamada. O ambiente da pessoa em casa, quando tranquilo e
          privado, favorece o mesmo nível de relaxamento alcançado no consultório em Sinop-MT.
        </p>
        <p>
          O protocolo aplicado é o mesmo <Link href="/metodo-ser">Método SER</Link> usado nos
          atendimentos de <Link href="/">ansiedade</Link>,{" "}
          <Link href="/servicos/hipnoterapia-para-traumas">traumas</Link> e{" "}
          <Link href="/servicos/hipnoterapia-para-fobias-e-medos">fobias e medos</Link>.
        </p>
      </ContentSection>

      <ContentSection id="para-quem" heading="Para quem a hipnoterapia online é indicada?" tone="muted">
        <ul>
          <li>Pessoas que não moram em Sinop-MT ou na região.</li>
          <li>Brasileiros vivendo no exterior que preferem atendimento em português.</li>
          <li>Quem tem rotina apertada e prefere não se deslocar até o consultório.</li>
          <li>Quem já conhece o trabalho pelo Instagram ou YouTube e quer começar de onde estiver.</li>
        </ul>
      </ContentSection>

      <Faq items={[...FAQ_ITEMS]} heading="Perguntas frequentes sobre hipnoterapia online" />

      <Cta
        heading="Pronto para começar de onde você está?"
        description="Fale com Júlio Dechante pelo WhatsApp e agende sua primeira sessão de hipnoterapia online."
        whatsappMessage="Olá, Júlio! Não moro em Sinop e quero agendar uma sessão de hipnoterapia online."
      />
    </>
  );
}
