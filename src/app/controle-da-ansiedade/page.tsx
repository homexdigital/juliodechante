import type { Metadata } from "next";
import { Lock, MessageCircle } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import YoutubeFacade from "@/components/YoutubeFacade";
import { buildMetadata } from "@/lib/metadata";
import { graph, serviceSchema } from "@/lib/schema";
import { business, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/controle-da-ansiedade",
  title: "Hipnoterapia Sem Remédios Para Ansiedade | Avaliação",
  description:
    "Livre-se dos sintomas físicos e psicológicos da ansiedade sem remédios, com hipnoterapia avançada em Sinop-MT ou online. Agende sua sessão de avaliação.",
});

const WHATSAPP_MESSAGE =
  "Olá, Júlio! Quero agendar minha sessão de avaliação para tratar a ansiedade sem remédios.";

const PHYSICAL_SYMPTOMS = [
  "Palpitações, taquicardia e dores no peito",
  "Tremores e sudorese intensa",
  "Sensação de falta de ar ou sufocamento",
  "Tensão muscular, dores de cabeça e calafrios",
  "Náuseas, diarreia ou desconforto gástrico",
  "Tontura, boca seca e sensação de desmaio",
] as const;

const PSYCHOLOGICAL_SYMPTOMS = [
  "Preocupação excessiva com o futuro",
  "Irritabilidade, inquietação e nervosismo",
  "Dificuldade de concentração e distração",
  "Sensação constante de que algo ruim vai acontecer",
  "Medo irracional de julgamentos e situações sociais",
  "Dificuldade em parar pensamentos repetitivos",
] as const;

const WHY_IT_WORKS = [
  {
    icon: "🎯",
    title: "Acesso ao Subconsciente",
    body: "A ansiedade surge de padrões e gatilhos armazenados no subconsciente. Na hipnose, acessamos e reconfiguramos esses padrões na fonte.",
  },
  {
    icon: "🔄",
    title: "Ressignificação de Memórias",
    body: "Neutraliza memórias traumáticas e episódios passados, alterando a resposta emocional e os gatilhos do seu corpo.",
  },
  {
    icon: "🧠",
    title: "Sugestões Terapêuticas",
    body: "Fortalece circuitos neurais focados em calma, autoconfiança, clareza e capacidade de lidar com o estresse.",
  },
  {
    icon: "⚡",
    title: "Resultados Rápidos",
    body: "Proporciona melhora na regulação emocional e na qualidade do sono em um período infinitamente menor do que as abordagens tradicionais.",
  },
] as const;

const METHOD_STEPS = [
  {
    number: "1",
    title: "Anamnese Profunda (1h40)",
    body: "Mapeamos detalhadamente a sua história e identificamos as causas primárias da sua ansiedade, em um ambiente seguro e sem julgamentos.",
  },
  {
    number: "2",
    title: "Estado de Super-Foco",
    body: "Guiamos você a um estado relaxado e receptivo para acessar as emoções e bloqueios que estão travados no seu subconsciente.",
  },
  {
    number: "3",
    title: "Regressão à Causa Raiz",
    body: "Localizamos o momento exato em que a sua mente aprendeu a responder com ansiedade e desarmamos o gatilho emocional original.",
  },
  {
    number: "4",
    title: "Recodificação Mental",
    body: "Reprogramamos o subconsciente com novos padrões comportamentais de calma, segurança e controle emocional definitivo.",
  },
] as const;

const CREDENTIALS = [
  {
    icon: "🎖️",
    text: "Formado pela Escola de Hipnoterapia OMNI (a única com Certificado de Qualidade ISO 9001).",
  },
  { icon: "🎓", text: "Formado em Hipnoterapia Avançada (CMEI) + Padrões Comportamentais." },
  { icon: "🎯", text: "Especialista no Método BRAVO (Hipnose Online) e Eneagrama." },
  { icon: "📈", text: "+5.000 transformações documentadas e acompanhadas." },
] as const;

const TESTIMONIAL_VIDEOS = [
  { id: "MiML4IsiyGo", title: "Depoimento em vídeo #1 — resultado com hipnoterapia avançada" },
  { id: "2dNA7kpCu7c", title: "Depoimento em vídeo #2 — resultado com hipnoterapia avançada" },
  { id: "NgF-f2YhEkE", title: "Depoimento em vídeo #3 — resultado com hipnoterapia avançada" },
  { id: "mvjvz9uqcEk", title: "Depoimento em vídeo #4 — resultado com hipnoterapia avançada" },
] as const;

function WhatsappCta({ label }: { label: string }) {
  return (
    <a
      href={whatsappLink(WHATSAPP_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-navy transition-colors hover:bg-whatsapp-dark sm:text-base"
    >
      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
      {label}
    </a>
  );
}

export default function ControleDaAnsiedadePage() {
  const ctaHref = whatsappLink(WHATSAPP_MESSAGE);

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: "Hipnoterapia Avançada para Ansiedade Sem Remédios",
            description:
              "Sessões de hipnoterapia avançada com Júlio Dechante para tratar sintomas físicos e psicológicos da ansiedade sem remédios, em Sinop-MT ou online.",
            path: "/controle-da-ansiedade",
          }),
        )}
      />

      {/* SEÇÃO 1 — HERO */}
      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-surface via-navy-dark to-navy">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,163,255,0.18),_transparent_55%)]"
        />
        <div className="relative mx-auto max-w-4xl px-4 pb-16 pt-12 text-center sm:px-6 sm:pb-20 sm:pt-16">
          <p className="font-heading text-sm font-black uppercase tracking-[0.28em] text-primary">
            Hipnoterapia Avançada em Sinop e Online
          </p>
          <h1 className="mt-5 text-balance font-heading text-3xl font-black uppercase leading-tight tracking-wide text-cream sm:text-4xl md:text-5xl">
            Livre-se dos sintomas físicos e psicológicos da ansiedade sem remédios e de forma
            natural.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            Sem anos de tratamentos lentos. Descubra como a Hipnoterapia Avançada acessa a raiz do
            problema para você retomar o controle da sua vida em poucas sessões.
          </p>

          <div className="mt-8 flex justify-center">
            <WhatsappCta label="Agendar sessão de avaliação →" />
          </div>

          <p className="mt-6 inline-flex items-center justify-center gap-2 text-sm text-ink-soft">
            <Lock className="h-4 w-4 text-accent" aria-hidden="true" />
            Atendimento presencial em Sinop ou online para todo o Brasil.
          </p>
        </div>
      </section>

      {/* SEÇÃO 2 — CHECKLIST DE DIAGNÓSTICO */}
      <section className="border-b border-white/10 bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            Você se identifica com algum destes sintomas de ansiedade?
          </h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="font-heading text-lg font-bold text-cream">Sintomas Físicos 🫀</h3>
              <ul className="mt-4 space-y-3">
                {PHYSICAL_SYMPTOMS.map((symptom) => (
                  <li key={symptom} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                      •
                    </span>
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-cream">
                Sintomas Psicológicos 🧠
              </h3>
              <ul className="mt-4 space-y-3">
                {PSYCHOLOGICAL_SYMPTOMS.map((symptom) => (
                  <li key={symptom} className="flex gap-3 text-sm text-ink-soft">
                    <span className="mt-0.5 shrink-0 text-accent" aria-hidden="true">
                      •
                    </span>
                    {symptom}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — O QUE É E POR QUE FUNCIONA */}
      <section className="border-b border-white/10 bg-navy-dark/80">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            O que é hipnoterapia e por que ela funciona?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-soft">
            A hipnoterapia (ou hipnose clínica) é a aplicação de técnicas terapêuticas direcionadas
            sob um estado de transe hipnótico — um estado natural de consciência focado, onde você
            mantém 100% o controle da sua mente.
          </p>

          <ul className="mt-10 space-y-6">
            {WHY_IT_WORKS.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="text-2xl" aria-hidden="true">
                  {item.icon}
                </span>
                <div>
                  <p className="font-heading font-bold text-cream">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÃO 4 — MÉTODO EM 4 PASSOS */}
      <section className="border-b border-white/10 bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            O Método 4 Passos Para a Libertação Emocional
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-accent">
            Até 90% de percepção de resultado já na 1ª sessão.
          </p>

          <ol className="mt-12 space-y-8">
            {METHOD_STEPS.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-xl font-black text-navy">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-cream">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex justify-center">
            <WhatsappCta label="Agendar sessão de avaliação →" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — SOBRE O ESPECIALISTA */}
      <section className="border-b border-white/10 bg-navy-dark/80">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <p className="text-center font-script text-4xl text-primary sm:text-5xl">
            {business.founderName}
          </p>
          <h2 className="mt-3 text-center font-heading text-xl font-black uppercase tracking-wide text-cream sm:text-2xl">
            O Especialista Que Revoluciona Vidas Onde Outras Terapias Falharam
          </h2>

          <blockquote className="mx-auto mt-8 max-w-2xl border-l-2 border-primary pl-5 text-pretty italic text-ink-soft">
            &ldquo;Assisti minha esposa sofrer por anos com depressão, gastrite e fobias — onde
            remédios apenas mascaravam os sintomas. Quando a hipnoterapia a libertou em apenas 1
            sessão, decidi me dedicar a levar essa transformação definitiva para você.&rdquo;
          </blockquote>

          <ul className="mx-auto mt-10 max-w-xl space-y-4">
            {CREDENTIALS.map((item) => (
              <li key={item.text} className="flex gap-3 text-sm text-ink-soft">
                <span className="shrink-0 text-lg" aria-hidden="true">
                  {item.icon}
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SEÇÃO 6 — PROVA SOCIAL E RESULTADOS */}
      <section className="border-b border-white/10 bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            Resultados comprovados
          </h2>

          <div className="mt-10 grid gap-8 text-center sm:grid-cols-2">
            <div>
              <p className="font-heading text-4xl font-black text-accent sm:text-5xl">97%</p>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                de eficácia no alívio de sintomas de ansiedade e depressão
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl font-black text-accent sm:text-5xl">4</p>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                encontros, em média, para a libertação emocional completa
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {TESTIMONIAL_VIDEOS.map((video) => (
              <YoutubeFacade key={video.id} videoId={video.id} title={video.title} />
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — CTA FINAL */}
      <section className="bg-gradient-to-b from-navy-dark to-surface pb-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-4xl">
            Chegou a hora de retomar o comando da sua vida.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-ink-soft">
            A ansiedade não precisa continuar definindo o seu futuro.
          </p>

          <div className="mt-8 grid gap-2 text-sm text-ink-soft sm:grid-cols-2 sm:gap-4">
            <p>📍 Presencial: Sinop / MT</p>
            <p>💻 Online: Para todo o Brasil e Exterior</p>
          </div>

          <p className="mx-auto mt-6 max-w-md rounded-xl border border-accent/40 bg-accent/10 px-4 py-3 text-sm font-semibold text-accent">
            ⚠️ Devido à duração de cada atendimento, a agenda possui vagas limitadas por semana.
          </p>

          <div className="mt-10 flex justify-center">
            <WhatsappCta label="Agendar minha sessão de avaliação agora →" />
          </div>
        </div>
      </section>

      {/* CTA fixo mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 p-3 backdrop-blur md:hidden">
        <a
          href={ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3.5 text-sm font-black uppercase tracking-wide text-navy"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Agendar avaliação
        </a>
      </div>
    </>
  );
}
