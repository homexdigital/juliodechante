import type { Metadata } from "next";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/privacidade",
  title: "Política de Privacidade | Júlio Dechante Hipnoterapia",
  description:
    "Saiba como Júlio Dechante Hipnoterapia coleta, usa e protege seus dados pessoais ao entrar em contato pelo site, WhatsApp ou formulário de agendamento.",
});

export default function PrivacidadePage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Política de privacidade", path: "/privacidade" }]} />

      <PageHero
        eyebrow="Legal"
        h1="Política de privacidade"
        intro="Esta política explica quais dados este site coleta, para que eles são usados e como você pode solicitar acesso, correção ou exclusão das suas informações, em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
      />

      <ContentSection id="dados-coletados" heading="Quais dados este site coleta?">
        <p>
          Ao usar o formulário de contato ou os links de WhatsApp deste site, podem ser coletados:
          nome, telefone, e-mail e o conteúdo da mensagem enviada. Também é utilizado um serviço de
          analytics para entender, de forma agregada, como os visitantes usam o site (páginas
          acessadas, origem do tráfego e tempo de navegação).
        </p>
      </ContentSection>

      <ContentSection id="uso-dos-dados" heading="Para que esses dados são usados?" tone="muted">
        <ul>
          <li>Responder à sua mensagem e agendar sessões de hipnoterapia.</li>
          <li>Manter contato sobre sessões já agendadas.</li>
          <li>Entender o desempenho do site e melhorar seu conteúdo.</li>
        </ul>
        <p>Os dados não são vendidos nem compartilhados com terceiros para fins de marketing.</p>
      </ContentSection>

      <ContentSection id="seus-direitos" heading="Quais são os seus direitos sobre esses dados?">
        <p>
          Você pode solicitar, a qualquer momento, a confirmação de quais dados seus estão
          registrados, a correção de informações incorretas ou a exclusão dos seus dados de
          contato. Basta enviar um e-mail para{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </p>
      </ContentSection>

      <ContentSection id="cookies" heading="Este site usa cookies?" tone="muted">
        <p>
          Sim, cookies e tecnologias semelhantes podem ser usados para fins estatísticos, medindo o
          desempenho do site em ferramentas de analytics. Você pode bloquear cookies nas
          configurações do seu navegador a qualquer momento.
        </p>
      </ContentSection>
    </>
  );
}
