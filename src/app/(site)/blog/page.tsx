import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Cta from "@/components/sections/Cta";
import { buildMetadata } from "@/lib/metadata";
import { getAllPostsMeta } from "@/lib/blog";

export const metadata: Metadata = buildMetadata({
  path: "/blog",
  title: "Blog sobre Ansiedade e Hipnoterapia | Júlio Dechante",
  description:
    "Artigos de Júlio Dechante sobre ansiedade, traumas, fobias e hipnoterapia avançada: sintomas, mitos, tratamento e o Método SER explicado em detalhes.",
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default function BlogPage() {
  const posts = getAllPostsMeta();

  return (
    <>
      <Breadcrumbs items={[{ name: "Blog", path: "/blog" }]} />

      <PageHero
        eyebrow="Blog"
        h1="Blog sobre ansiedade e hipnoterapia"
        intro="Neste blog, Júlio Dechante escreve sobre sintomas de ansiedade, mitos e verdades da hipnoterapia e o que esperar de um tratamento com o Método SER. O objetivo é ajudar você a entender melhor o que sente antes mesmo de agendar uma sessão."
      />

      <section aria-label="Lista de artigos" className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
        {posts.length === 0 ? (
          <p className="text-center text-ink-soft">Novos artigos chegam em breve.</p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-primary/40 hover:bg-white/10"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-accent">
                    {formatDate(post.datePublished)}
                  </p>
                  <h2 className="mt-2 font-heading text-xl font-bold text-cream">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft">{post.description}</p>
                  <span className="mt-3 inline-block text-sm font-medium text-primary">
                    Ler artigo completo →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <Cta
        heading="Quer ir direto ao ponto?"
        description="Se preferir, fale agora com Júlio Dechante pelo WhatsApp e explique o que você está sentindo."
        whatsappMessage="Olá, Júlio! Li o blog e quero saber mais sobre o tratamento com hipnoterapia."
      />
    </>
  );
}
