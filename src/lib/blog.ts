import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

/**
 * Posts em Markdown/MDX com frontmatter em src/content/blog/*.mdx.
 * `dateModified` vem do frontmatter (fonte da verdade editorial) com fallback
 * para a data de modificação real do arquivo — nunca hardcoded no sitemap.
 */

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface PostFaqItem {
  question: string;
  answer: string;
}

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  keyword: string;
  datePublished: string;
  dateModified: string;
  author: string;
  faq: PostFaqItem[];
}

export interface Post extends PostMeta {
  content: string;
}

function listPostFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".mdx"));
}

export function getAllPostsMeta(): PostMeta[] {
  return listPostFiles()
    .map((file) => {
      const fullPath = path.join(BLOG_DIR, file);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(raw);
      const stat = fs.statSync(fullPath);
      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title as string,
        description: data.description as string,
        keyword: data.keyword as string,
        datePublished: (data.datePublished as string) ?? stat.birthtime.toISOString(),
        dateModified: (data.dateModified as string) ?? stat.mtime.toISOString(),
        author: (data.author as string) ?? "Júlio Dechante",
        faq: (data.faq as PostFaqItem[]) ?? [],
      };
    })
    .sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const stat = fs.statSync(fullPath);
  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    keyword: data.keyword as string,
    datePublished: (data.datePublished as string) ?? stat.birthtime.toISOString(),
    dateModified: (data.dateModified as string) ?? stat.mtime.toISOString(),
    author: (data.author as string) ?? "Júlio Dechante",
    faq: (data.faq as PostFaqItem[]) ?? [],
    content,
  };
}
