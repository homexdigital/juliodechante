"use client";

import { useState, type FormEvent } from "react";
import { SITE_URL } from "@/lib/site-config";

export default function SiteSearchForm() {
  const [query, setQuery] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const domain = SITE_URL.replace("https://", "");
    const searchQuery = `site:${domain} ${query}`.trim();
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
  }

  return (
    <form onSubmit={handleSubmit} role="search" className="flex w-full max-w-md gap-2">
      <label htmlFor="site-search" className="sr-only">
        Buscar no site
      </label>
      <input
        id="site-search"
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Buscar no site (ex.: hipnoterapia para ansiedade)"
        className="w-full rounded-full border border-white/15 bg-navy-dark px-4 py-2.5 text-sm text-ink placeholder:text-ink-soft focus:border-primary focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-navy hover:bg-primary-dark"
      >
        Buscar
      </button>
    </form>
  );
}
