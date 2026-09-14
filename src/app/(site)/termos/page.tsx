import type { Metadata } from "next";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import ContentSection from "@/components/sections/ContentSection";
import { buildMetadata } from "@/lib/metadata";
import { business } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/termos",
  title: "Termos de Uso do Site | Júlio Dechante Hipnoterapia",
  description:
    "Condições de uso do site de Júlio Dechante Hipnoterapia: natureza dos atendimentos, limites da hipnoterapia e regras para agendamento de sessões.",
});

export default function TermosPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Termos de uso", path: "/termos" }]} />

      <PageHero
        eyebrow="Legal"
        h1="Termos de uso"
        intro="Estes termos explicam a natureza dos atendimentos de hipnoterapia oferecidos por Júlio Dechante, os limites dessa prática e as condições para uso do site e agendamento de sessões."
      />

      <ContentSection id="natureza-do-servico" heading="Qual é a natureza dos atendimentos oferecidos?">
        <p>
          Os atendimentos oferecidos por {business.founderName} são sessões de hipnoterapia,
          técnica complementar de reeducação emocional. A hipnoterapia não é uma especialidade
          médica ou psicológica regulamentada como profissão de saúde no Brasil e não substitui
          consulta, diagnóstico ou tratamento com médicos, psicólogos ou psiquiatras quando estes
          forem necessários.
        </p>
      </ContentSection>

      <ContentSection id="responsabilidades" heading="Quais são as responsabilidades de cada parte?" tone="muted">
        <ul>
          <li>
            O cliente é responsável por informar condições de saúde relevantes antes das sessões.
          </li>
          <li>
            Em casos de emergência psiquiátrica ou risco à vida, o cliente deve procurar
            atendimento médico de urgência, e não apenas a hipnoterapia.
          </li>
          <li>
            Júlio Dechante se compromete a conduzir as sessões com ética, sigilo e dentro dos
            limites da prática de hipnoterapia.
          </li>
        </ul>
      </ContentSection>

      <ContentSection id="agendamento-e-cancelamento" heading="Como funcionam agendamento e cancelamento?">
        <p>
          Sessões são agendadas por WhatsApp ou pelo formulário do site, conforme disponibilidade
          de agenda. Cancelamentos ou remarcações devem ser avisados com antecedência pelo mesmo
          canal usado no agendamento.
        </p>
      </ContentSection>

      <ContentSection id="uso-do-site" heading="Quais são as regras de uso deste site?" tone="muted">
        <p>
          O conteúdo deste site tem caráter informativo sobre hipnoterapia, ansiedade e temas
          relacionados, e não deve ser interpretado como aconselhamento médico individual. Dúvidas
          sobre um caso específico devem ser tratadas diretamente com {business.founderName} pelo{" "}
          <a href={`mailto:${business.email}`}>e-mail</a> ou WhatsApp.
        </p>
      </ContentSection>
    </>
  );
}
