"use client";

import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  date: string;
  location: string;
  tags: string[];
  image: string;
};

export default function ProjectsSection() {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFeaturedProjects() {
      try {
        // Load layout settings
        const settings = localStorage.getItem("layout-settings");
        const homeFeatured = settings ? JSON.parse(settings).homeFeatured : [];
        
        if (homeFeatured.length === 0) {
          // Fallback to first 3 projects if no selection
          const res = await fetch("/api/projects", { cache: "no-store" });
          if (res.ok) {
            const allProjects = await res.json();
            setFeaturedProjects(allProjects.slice(0, 3));
          }
        } else {
          // Load selected projects
          const res = await fetch("/api/projects", { cache: "no-store" });
          if (res.ok) {
            const allProjects = await res.json();
            const selected = allProjects.filter((p: Project) => homeFeatured.includes(p.id));
            setFeaturedProjects(selected);
          }
        }
      } catch (error) {
        console.error("Failed to load featured projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadFeaturedProjects();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-white py-20 md:py-18">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center py-12">
            <p className="text-gray-500">Laddar projekt...</p>
          </div>
        </div>
      </section>
    );
  }

  if (featuredProjects.length === 0) {
    return (
      <section className="w-full bg-white py-20 md:py-18">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center py-12">
            <p className="text-gray-500">Inga utvalda projekt hittades.</p>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="w-full bg-white py-20 md:py-18">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left text (sticky) */}
        <div className="lg:sticky lg:top-32 self-start">
          <h2 className="text-3xl md:text-4xl font-medium text-[#010207] mb-4">
            Ett urval av våra<br />projekt
          </h2>
          <p className="text-gray-500/70 leading-relaxed max-w-md text-lg">
            Utförda mätuppdrag inom bygg, mark och <br /> infrastruktur.
          </p>
        </div>

        {/* Right side list */}
        <div className="flex flex-col gap-10">
          {featuredProjects.map((p, index) => (
            <article
              key={p.id}
              className="flex flex-col md:flex-row bg-white rounded-xl overflow-hidden"
            >
              {/* Image */}
              <div className="w-full md:w-[45%] h-[220px] rounded-xl overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text content */}
              <div className="flex flex-col justify-between p-6 md:w-[55%]">
                <div>
                  <h3 className="text-lg md:text-xl font-medium text-[#010207] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-500/70 text-sm mb-4 leading-relaxed">
                    {p.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm text-gray-400/70">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} /> {p.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} /> {p.location}
                    </div>
                  </div>
                </div>

                <a 
                  href={`/ReferensProjekt/${p.id}`}
                  className="mt-6 inline-flex items-center gap-2 bg-[#E88026] text-white px-5 py-2.5 rounded-xl text-sm font-medium self-start hover:bg-[#d46f1c] transition"
                >
                  Läs Mer
                  <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
