"use client";

import Image from "next/image";
import { useState } from "react";

const fallbackLogo = "/logo.png";

export function FounderImage({ src, name, position }: { src: string | null; name: string; position: string }) {
  const [failed, setFailed] = useState(false);
  const useFallback = !src || failed;

  return (
    <div className="relative aspect-[4/5] min-h-[360px] overflow-hidden rounded-dsLg border border-lexuzNeutral-line bg-white shadow-ds3">
      {useFallback ? (
        <div className="grid h-full place-items-center bg-brand-secondary p-8 text-center">
          <div>
            <Image src={fallbackLogo} alt="Lexuz Tours & Adventures logo" width={180} height={180} className="mx-auto h-32 w-32 rounded-full bg-white object-contain p-2 shadow-ds1" />
            <p className="mt-5 text-xl font-black text-brand-primary">{name}</p>
            <p className="mt-2 text-sm font-bold text-lexuzNeutral-60">{position}</p>
          </div>
        </div>
      ) : (
        <Image
          src={src}
          alt={`${name}, ${position}`}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover object-center"
          onError={() => setFailed(true)}
          priority
        />
      )}
    </div>
  );
}
