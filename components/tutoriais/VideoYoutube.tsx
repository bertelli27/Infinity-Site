"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

type VideoYoutubeProps = {
  youtubeId: string;
  titulo: string;
};

export function VideoYoutube({ youtubeId, titulo }: VideoYoutubeProps) {
  const [carregado, setCarregado] = useState(false);

  if (carregado) {
    return (
      <div className="aspect-video overflow-hidden rounded-xl border border-cinza-escuro">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
          title={titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setCarregado(true)}
      aria-label={`Assistir ao vídeo: ${titulo}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl border border-cinza-escuro"
    >
      <Image
        src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 700px"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-preto/40 transition-colors group-hover:bg-preto/30">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-roxo text-cinza-claro">
          <Play aria-hidden="true" size={28} fill="currentColor" />
        </span>
      </span>
    </button>
  );
}
