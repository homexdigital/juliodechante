import type { Metadata } from "next";
import { MessageCircle, ShieldCheck } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { graph, serviceSchema } from "@/lib/schema";
import { business, whatsappLink } from "@/lib/site-config";

export const metadata: Metadata = buildMetadata({
  path: "/libertar-minha-mente",
  title: "Hipnoterapia Avançada: Liberte Sua Mente | Avaliação",
  description:
    "A mente que te protegeu no passado pode te aprisionar hoje. Assista ao vídeo e agende sua avaliação de hipnoterapia avançada com Júlio Dechante.",
});

const VIDEO_ID = "GSomatKl9y0";
const WHATSAPP_MESSAGE =
  "Olá, Júlio! Assisti o vídeo da página e quero libertar minha mente. Quero agendar minha consulta de avaliação.";

const OBJECTIONS = [
  {
    title: "Terapia demais, resultado de menos?",
    body: "Fala, fala, fala... e continua sentindo a mesma dor? A hipnoterapia vai direto na causa raiz. É rápido, profundo e definitivo.",
  },
  {
    title: "Sente que perdeu o controle emocional?",
    body: "Raiva, medo, ansiedade… tudo explodindo dentro de você. Com a hipnoterapia, você volta para o comando da sua própria história.",
  },
  {
    title: "Cansado(a) de depender de remédios para viver em paz?",
    body: "Você não nasceu para viver dopado(a). Existe uma alternativa real para reestruturar suas emoções — e ela começa aqui.",
  },
  {
    title: "Não acredita em promessas milagrosas?",
    body: "Perfeito! Aqui não tem milagre. Tem método, tem ciência e tem resultado comprovado.",
  },
] as const;

const BENEFITS = [
  {
    title: "Controle total das suas emoções",
    body: "Pare de lutar contra você mesmo e viva em equilíbrio.",
  },
  {
    title: "Autoconfiança inabalável",
    body: "Liberte-se da necessidade de aprovação e validação externa.",
  },
  {
    title: "Fim do autoboicote",
    body: "Elimine vícios, procrastinação e hábitos ruins que te enfraquecem.",
  },
  {
    title: "Liberdade e coragem",
    body: "Supere medos profundos e traumas do passado de uma vez por todas.",
  },
  {
    title: "Sono reparador e paz mental",
    body: "Volte a dormir profundamente e acorde revigorado, pronto para o dia.",
  },
] as const;

const STEPS = [
  {
    number: "1",
    title: "Avaliação e Diagnóstico",
    body: "Identificamos a causa exata dos seus bloqueios, medos e gatilhos emocionais. Você passará por uma experiência inicial incrível para descobrir na prática o poder da sua mente.",
  },
  {
    number: "2",
    title: "Sessão de Terapia Profunda",
    body: "Em estado de transe (foco hipnótico), acessamos a raiz emocional dos seus problemas para ressignificar e eliminar os travamentos subconscientes. Você sai da sessão mais leve e livre.",
  },
  {
    number: "3",
    title: "Retorno e Ancoragem",
    body: "Instalamos gatilhos hipnóticos e ensinamos técnicas de autohipnose para que você mantenha o controle emocional, elimine bloqueios e previna a ansiedade no seu dia a dia.",
  },
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

export default function LeadCapturePage() {
  const ctaHref = whatsappLink(WHATSAPP_MESSAGE);

  return (
    <>
      <JsonLd
        data={graph(
          serviceSchema({
            name: "Avaliação de Hipnoterapia Avançada",
            description:
              "Consulta de avaliação de hipnoterapia avançada com Júlio Dechante para identificar bloqueios, medos e gatilhos emocionais e iniciar o Método SER.",
            path: "/libertar-minha-mente",
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
            Hipnoterapia Avançada
          </p>
          <h1 className="mt-5 text-balance font-heading text-3xl font-black uppercase leading-tight tracking-wide text-cream sm:text-4xl md:text-5xl">
            A mente que te protegeu no passado... hoje é a mesma que te aprisiona.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-ink-soft">
            O que um dia te salvou da dor, hoje te impede de viver. Mas você não está condenado a
            repetir esse ciclo para sempre.
          </p>

          <p className="mt-10 text-sm font-semibold text-accent sm:text-base">
            Assista ao vídeo abaixo para entender como assumir o controle da sua mente:
          </p>

          <div className="mx-auto mt-5 aspect-video w-full max-w-3xl overflow-hidden rounded-2xl ring-1 ring-primary/40 shadow-[0_20px_60px_rgba(0,163,255,0.2)]">
            <iframe
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${VIDEO_ID}?rel=0`}
              title="Vídeo: Hipnoterapia Avançada com Júlio Dechante"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="mt-8 flex justify-center">
            <WhatsappCta label="Quero libertar minha mente agora →" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — QUEBRA DE OBJEÇÕES */}
      <section className="border-b border-white/10 bg-navy">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            Chega de empurrar a sua vida com a barriga.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-ink-soft">
            Você já tentou de tudo… menos o que realmente funciona.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {OBJECTIONS.map((item) => (
              <div key={item.title} className="border-l-2 border-primary pl-5">
                <h3 className="font-heading text-lg font-bold text-cream">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — TRANSFORMAÇÃO */}
      <section className="border-b border-white/10 bg-navy-dark/80">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            Você já sofreu demais nas mãos da ansiedade e da autossabotagem.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-soft">
            A hipnoterapia não tapa buracos — ela resolve o problema pela raiz para que você
            conquiste:
          </p>

          <ul className="mt-10 space-y-5">
            {BENEFITS.map((item) => (
              <li key={item.title} className="flex gap-3">
                <span className="mt-0.5 shrink-0 font-bold text-accent" aria-hidden="true">
                  ✓
                </span>
                <div>
                  <p className="font-heading font-bold text-cream">{item.title}</p>
                  <p className="mt-1 text-sm text-ink-soft">{item.body}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <WhatsappCta label="Quero libertar minha mente agora →" />
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — MÉTODO */}
      <section className="border-b border-white/10 bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-3xl">
            Como funciona o método?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-soft">
            O subconsciente comanda cerca de 95% das nossas decisões e emoções. A hipnoterapia
            acessa essa camada profunda da mente para reestruturar padrões e emoções limitantes
            diretamente na fonte.
          </p>

          <ol className="mt-12 space-y-8">
            {STEPS.map((step) => (
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
        </div>
      </section>

      {/* SEÇÃO 5 — PROVA SOCIAL */}
      <section className="border-b border-white/10 bg-gradient-to-b from-navy-dark to-surface">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <p className="font-script text-4xl text-primary sm:text-5xl">{business.founderName}</p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-ink-soft">
            {business.tagline}
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="font-heading text-4xl font-black text-accent sm:text-5xl">+5.000</p>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                Pacientes atendidos e impactados
              </p>
            </div>
            <div>
              <p className="font-heading text-4xl font-black text-accent sm:text-5xl">80%</p>
              <p className="mt-2 text-sm font-medium text-ink-soft">
                dos casos com problemas resolvidos em apenas 3 sessões
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — CTA FINAL */}
      <section className="bg-navy pb-28 md:pb-16">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-black uppercase tracking-wide text-cream sm:text-4xl">
            Quer mudar de verdade?
          </h2>
          <p className="mt-3 text-lg font-semibold text-primary">
            Você não precisa de mais uma tentativa. Precisa de uma decisão real. Agora.
          </p>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-ink-soft">
            Isso não é &quot;mais uma tentativa&quot;. É um método científico que recondiciona seu
            subconsciente para a mudança real acontecer. É hora de sair do lugar e ser o próximo a
            desbloquear sua mente.
          </p>

          <div className="mt-10 flex justify-center">
            <WhatsappCta label="Agendar minha consulta de avaliação →" />
          </div>

          <p className="mt-6 inline-flex items-center justify-center gap-2 text-sm text-ink-soft">
            <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
            Atendimento individual, sigiloso e 100% personalizado.
          </p>
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
