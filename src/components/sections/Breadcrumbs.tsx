import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import { graph, breadcrumbListSchema, type BreadcrumbItem } from "@/lib/schema";

// Regra 3 + Regra 6 — trilha semântica visível e marcada com BreadcrumbList.
export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const withHome: BreadcrumbItem[] = [{ name: "Início", path: "/" }, ...items];

  return (
    <nav aria-label="Trilha de navegação" className="mx-auto max-w-6xl px-4 pt-6 sm:px-6">
      <JsonLd data={graph(breadcrumbListSchema(withHome))} />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-ink-soft">
        {withHome.map((item, index) => {
          const isLast = index === withHome.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {isLast ? (
                <span aria-current="page" className="font-medium text-ink">
                  {item.name}
                </span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-primary">
                    {item.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
