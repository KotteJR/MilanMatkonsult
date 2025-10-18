"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  rounded?: string; // tailwind rounded class applied to inline image
};

export default function LightboxImage({ src, alt, width = 1200, height = 800, className = "", rounded = "rounded-xl" }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Image src={src} alt={alt} width={width} height={height} className={`${rounded} ${className} cursor-zoom-in`} onClick={() => setOpen(true)} />
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={alt} className="max-w-[92vw] max-h-[92vh] object-contain" />
        </div>
      )}
    </>
  );
}


