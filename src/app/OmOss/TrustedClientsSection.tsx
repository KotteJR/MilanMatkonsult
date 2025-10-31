"use client";

import { useEffect, useState } from "react";

export default function TrustedClientsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const clients = [
    { src: "/clients/eslovs.png", alt: "Eslövs Kommun" },
    { src: "/clients/kavlinge.png", alt: "Kävlinge" },
    { src: "/clients/peab.png", alt: "PEAB" },
    { src: "/clients/ncc.png", alt: "NCC" },
    { src: "/clients/hoor.png", alt: "Hoor" },
    { src: "/clients/jm.png", alt: "JM" },
  ];

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients];

  useEffect(() => {
    const scrollSpeed = 0.5; // pixels per frame
    const itemWidth = 200; // approximate width of each logo + gap
    
    const animate = () => {
      setScrollPosition((prev) => {
        const newPosition = prev - scrollSpeed;
        // Reset when we've scrolled through one complete set
        return newPosition <= -itemWidth * clients.length ? 0 : newPosition;
      });
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [clients.length]);

  return (
    <section className="w-full bg-white py-12 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex flex-col items-center">
        <p className="max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[#A0A0A0] text-center mb-6">
          Betrodd av kommuner, byggfirmor och konsulter i hela Skåne
        </p>

        <div className="relative w-full max-w-4xl overflow-hidden">
          {/* Blurred sides with white overlay */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling carousel */}
          <div 
            className="flex items-center gap-10 md:gap-16 lg:gap-20"
            style={{ 
              transform: `translateX(${scrollPosition}px)`,
              transition: 'none' // Disable CSS transitions for smooth animation
            }}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.alt}-${index}`}
                className="flex items-center justify-center h-12 md:h-14 flex-shrink-0"
              >
                <img
                  src={client.src}
                  alt={client.alt}
                  className={`max-h-10 md:max-h-12 object-contain ${
                    client.alt === "NCC" ? "md:-mt-5" : ""
                  }`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
