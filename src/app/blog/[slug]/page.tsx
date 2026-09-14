import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Breadcrumbs from "@/components/sections/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import JsonLd from "@/components/JsonLd";
import { buildMetadata } from "@/lib/metadata";
import { graph, articleSchema } from "@/lib/schema";
import { getAllPostsMeta, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPostsMeta().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    path: `/blog/${post.slug}`,
    title: post.title,
    description: post.description,
  });
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "long", year: "numeric" });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={graph(
          articleSchema({
            title: post.title,
            description: post.description,
            path: `/blog/${post.slug}`,
            datePublished: post.datePublished,
            dateModified: post.dateModified,
            authorName: post.author,
          }),
        )}
      />
      <Breadcrumbs
        items={[
          { name: "Blog", path: "/blog" },
          { name: post.title, path: `/blog/${post.slug}` },
        ]}
      />

      <PageHero eyebrow={`Publicado em ${formatDate(post.datePublished)}`} h1={post.title} intro={post.description} />

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="prose prose-neutral max-w-none prose-headings:font-heading prose-headings:text-primary prose-a:text-primary">
          <MDXRemote source={post.content} />
        </div>
      </article>

      {post.faq.length > 0 ? (
        <Faq items={post.faq} heading="Perguntas frequentes sobre este artigo" />
      ) : null}

      <Cta
        heading="Quer tratar isso com acompanhamento profissional?"
        description="Fale com Júlio Dechante pelo WhatsApp e agende uma sessão de avaliação, presencial em Sinop-MT ou online."
        whatsappMessage={`Olá, Júlio! Li o artigo "${post.title}" no blog e quero agendar uma sessão.`}
      />
    </>
  );
}
