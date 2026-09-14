# Julio Dechante | Mestre em Hipnoterapia Avançada

Site institucional e de geração de leads para Júlio Dechante, hipnoterapeuta em Sinop-MT, criador do Método SER. Next.js (App Router) com renderização no servidor, dados estruturados (Schema.org) e conteúdo otimizado para buscadores e IAs de busca.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app` — rotas (App Router). Cada `page.tsx` define sua própria metadata via `buildMetadata` (`src/lib/metadata.ts`).
- `src/lib/site-config.ts` — fonte única de dados do negócio (NAP, WhatsApp, redes sociais).
- `src/lib/schema.ts` — builders de JSON-LD (Organization, LocalBusiness, Service, FAQPage, Article, BreadcrumbList).
- `src/lib/keywords.ts` — registro de uma palavra-chave por rota; lança erro em build se duas páginas colidirem.
- `src/lib/routes.ts` + `src/app/sitemap.ts` — sitemap gerado das rotas reais, com `lastModified` vindo da data do arquivo.
- `src/content/blog/*.mdx` — posts do blog (frontmatter + Markdown), lidos por `src/lib/blog.ts`.
- `src/components/sections` — componentes de página (Hero, FAQ, CTA, Breadcrumbs, ContentSection).

## Build e deploy

```bash
npm run build
npm run start   # testar o build de produção localmente
```

Deploy recomendado: [Vercel](https://vercel.com/new), apontando para este repositório. Configure o domínio `juliodechante.com.br` nas configurações do projeto.

## Pendências após publicar

- Confirmar `business.activeSince` em `src/lib/site-config.ts` se o ano de início (2019) estiver incorreto.
- Cadastrar o site no Google Search Console e Bing Webmaster Tools e enviar `/sitemap.xml`.
- Regenerar assets de imagem (se trocar a foto): `npm run generate:images` a partir de `perfiljulio.jpg`.
