"use client";

import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useState, useMemo } from "react";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  date: string;
  location: string;
  category: string;
  tags: string[];
  image: string;
};

export default function ProjectsGridSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("senaste");

  useEffect(() => {
    async function loadProjects() {
      try {
        const res = await fetch("/api/projects", { cache: "no-store" });
        if (res.ok) {
          const data = await res.json();
          const mappedProjects = data.map((p: any) => ({
            id: p.id,
            title: p.title,
            shortDescription: p.shortDescription,
            date: p.date,
            location: p.location,
            category: p.category || "",
            tags: p.tags || [],
            image: p.image || "/images/project-thumb.jpg",
          }));
          setProjects(mappedProjects);

          // Load layout settings for featured projects
          const settings = localStorage.getItem("layout-settings");
          const referensFeatured = settings ? JSON.parse(settings).referensFeatured : [];
          
          if (referensFeatured.length === 0) {
            // Fallback to first 6 projects if no selection
            setFeaturedProjects(mappedProjects.slice(0, 6));
          } else {
            // Load selected projects
            const selected = mappedProjects.filter((p: Project) => referensFeatured.includes(p.id));
            setFeaturedProjects(selected);
          }
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  // Filter and sort projects
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(project => 
        project.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "senaste":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case "aldsta":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case "storsta":
          // Sort by title length as a proxy for project size
          return b.title.length - a.title.length;
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchTerm, selectedCategory, sortBy]);

  if (loading) {
    return (
      <section className="w-full bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center py-12">
            <p className="text-gray-500">Laddar projekt...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8 mb-15 md:mb-20">
          <div className="flex-1">
            <h2 className="text-[34px] font-medium text-[#010207] mb-4">Projekt</h2>
            <div className="flex gap-3">
              <button className="bg-[#E88026] text-white px-4 py-2.5 rounded-xl text-sm flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Kontakta oss
              </button>
              <button className="text-[#E88026] px-4 py-2.5 rounded-xl text-sm flex items-center gap-1">
                Kostnadsfri offert <ArrowRight size={14} />
              </button>
            </div>
          </div>
          <div className="flex-1 flex md:justify-end">
            <p className="text-gray-500/70 md:text-right max-w-md leading-relaxed">
              Här hittar du allt från pågående till avslutade projekt. Har du frågor eller funderingar över något projekt? Tveka inte att kontakta oss så ska vi berätta om vad de olika projektet handlar om.
            </p>
          </div>
        </div>

        {/* Toolbar with dropdowns */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-1">Kategori</label>
            <div className="relative">
              <select 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-xl bg-[#F4F4F4] px-4 py-2 pr-9 text-sm text-[#6B6B6B] appearance-none focus:outline-none"
              >
                <option value="">Alla kategorier</option>
                <option value="Maskinstyrning">Maskinstyrning</option>
                <option value="Drönarscanning">Drönarscanning</option>
                <option value="Laserskanning">Laserskanning</option>
                <option value="Teknisk konsult">Teknisk konsult</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-1">Sortering</label>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-xl bg-[#F4F4F4] px-4 py-2 pr-9 text-sm text-[#6B6B6B] appearance-none focus:outline-none"
              >
                <option value="senaste">Senaste först</option>
                <option value="storsta">Störst omfattning</option>
                <option value="aldsta">Äldsta först</option>
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-1">Sökfält</label>
            <input 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl bg-[#F4F4F4] px-4 py-2 text-sm placeholder:text-gray-500" 
              placeholder="Sök projekt efter plats eller typ..." 
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-14 md:gap-y-12">
          {filteredAndSortedProjects.length > 0 ? (
            (showAll ? filteredAndSortedProjects : filteredAndSortedProjects.slice(0, 6)).map((p) => (
              <div key={p.id} className="rounded-2xl bg-white overflow-hidden">
                <div className="w-full h-44 rounded-2xl overflow-hidden">
                  <Image src={p.image} alt={p.title} width={800} height={480} className="w-full h-full object-cover" />
                </div>
                <div className="pt-4 px-2">
                  <h3 className="text-[15px] font-medium text-[#010207]">{p.title}</h3>
                  <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">{p.shortDescription}</p>

                  <div className="mt-3 grid grid-cols-2 text-xs text-gray-500">
                    <div>
                      <div className="uppercase">datum</div>
                      <div>{p.date}</div>
                    </div>
                    <div>
                      <div className="uppercase">plats</div>
                      <div>{p.location}</div>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="text-[#E88026] bg-[#FFF3E8] text-[11px] px-3 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4">
                    <a href={`/ReferensProjekt/${p.id}`} className="inline-flex items-center gap-2 rounded-lg bg-[#E88026] px-4 py-2 text-white text-sm hover:bg-[#cf660d]">
                      Visa projekt <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">Inga projekt hittades.</p>
            </div>
          )}
        </div>

        {filteredAndSortedProjects.length > 6 && (
          <div className="flex justify-center mt-10">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="border border-gray-300 text-[#E88026] px-4 py-2 rounded-xl text-sm hover:bg-gray-50 transition flex items-center gap-1"
            >
              {showAll ? "Visa färre" : "Visa mer"} <ArrowRight size={14} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}