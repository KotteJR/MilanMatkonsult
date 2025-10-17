"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      value: 20,
      suffix: "+ år",
      title: "Fälterfarenhet",
      description:
        "Vi har över två decenniers praktisk erfarenhet från mätuppdrag i bygg- och anläggningsprojekt.",
    },
    {
      value: 850,
      suffix: "+",
      title: "Projekt levererade",
      description:
        "Från små markarbeten till komplexa stadsutvecklingsprojekt – vi har sett (och mätt) det mesta.",
    },
    {
      value: 9,
      suffix: "",
      title: "Certifierade mätkonsulter",
      description:
        "Ett erfaret team med teknisk spetskompetens och lokal kännedom.",
    },
    

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500; // 2 seconds
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      const newCounts = stats.map(stat => 
        Math.floor(stat.value * easeOutQuart)
      );
      
      setCounts(newCounts);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Ensure final values are set exactly
        setCounts(stats.map(stat => stat.value));
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">
        <div className="flex flex-col md:flex-row justify-center items-stretch text-center">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative flex-1 px-6 py-10 flex flex-col items-center justify-center"
            >
              {/* Divider lines – appear only between middle columns */}
              {index !== stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 h-16 w-px bg-gray-300"></div>
              )}

              <h2 className="text-3xl md:text-4xl font-medium text-[#010207] mb-2">
                {counts[index]}{item.suffix}
              </h2>
              <h3 className="text-gray-500/80 font-medium mb-3 text-lg">
                {item.title}
              </h3>
              <p className="text-gray-500/70 leading-relaxed max-w-xs text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
