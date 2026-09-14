"use client";

import { useState } from "react";
import { Play } from "lucide-react";

// Miniatura clicável em vez de <iframe> direto: evita carregar vários players
// do YouTube de uma vez (Regra 11 — performance/CLS) em seções de depoimentos.
export default function YoutubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-primary/40">
        <iframe
          className="h-full w-full"
          src={`https://www.youtube.com/embed/${videoId}?rel=0&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproduzir depoimento em vídeo: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-2xl ring-1 ring-primary/40"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        width={480}
        height={360}
        loading="lazy"
        className="h-full w-full object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-navy/40 transition-colors group-hover:bg-navy/25">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-navy shadow-lg">
          <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
