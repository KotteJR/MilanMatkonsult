"use client";

import LightboxImage from "./LightboxImage";

type Props = {
  main: string;
  title: string;
  thumbs?: string[];
};

export default function ProjectGallery({ main, title, thumbs = [] }: Props) {
  return (
    <div>
      <div className="rounded-xl overflow-hidden">
        <LightboxImage src={main} alt={title} width={1000} height={600} className="w-full h-auto object-cover" />
      </div>
      {thumbs.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-3">
          {thumbs.map((src, i) => (
            <div key={i} className="rounded-lg overflow-hidden border border-gray-200">
              <LightboxImage src={src} alt={`thumb-${i}`} width={400} height={240} className="w-full h-24 object-cover" rounded="rounded-lg" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


