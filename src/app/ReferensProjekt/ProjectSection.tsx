import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { readProjects } from "@/src/lib/projectsStore";

export default function ProjectsGridSection() {
  const stored = readProjects();
  const projects = stored.length
    ? stored.map((p) => ({
        id: p.id,
        title: p.title,
        desc: p.shortDescription,
        date: p.date,
        location: p.location,
        tags: p.tags,
        image: p.image || "/images/project-thumb.jpg",
      }))
    : Array(3).fill({
        id: "demo",
        title: "MAL-2023-07",
        desc:
          "Drönarskanning och exakt utsättning för utvidgningen av en kommunal i centrala Malmö.",
        date: "15 jul 2025",
        location: "Malmö, Sverige",
        tags: ["Infrastruktur", "Drönarskanning", "Utsättning"],
        image: "/images/project-thumb.jpg",
      });

  return (
    <section className="w-full bg-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <h2 className="text-[34px] font-medium text-[#010207]">Projekt</h2>
          <div className="flex gap-3">
            <button className="bg-[#E88026] text-white px-4 py-2.5 rounded-xl text-sm">Kontakta oss</button>
            <button className="border border-[#E88026] text-[#E88026] px-4 py-2.5 rounded-xl text-sm flex items-center gap-1">
              Kostnadsfri offert <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Toolbar with dropdowns */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-1">Kategori</label>
            <select className="w-full rounded-xl bg-[#F4F4F4] px-4 py-2 text-sm text-[#3A3A3A]">
              <option>Maskinstyrning</option>
              <option>Drönarscanning</option>
              <option>Teknisk konsult</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-1">Sortering</label>
            <select className="w-full rounded-xl bg-[#F4F4F4] px-4 py-2 text-sm text-[#3A3A3A]">
              <option>Senaste först</option>
              <option>Störst omfattning</option>
              <option>Äldsta först</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-[#6B6B6B] mb-1">Sökfält</label>
            <input className="w-full rounded-xl bg-[#F4F4F4] px-4 py-2 text-sm placeholder:text-gray-500" placeholder="Sök projekt efter plats eller typ..." />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="rounded-2xl bg-white p-3">
              <div className="rounded-xl overflow-hidden">
                <Image src={p.image} alt={p.code} width={800} height={480} className="w-full h-44 object-cover" />
              </div>
              <div className="pt-4">
                <h3 className="text-[15px] font-medium text-[#010207]">{p.title}</h3>
                <p className="text-[13px] text-[#5C5C5C] mt-1 leading-relaxed">{p.desc}</p>

                <div className="mt-3 grid grid-cols-2 gap-3 text-xs text-[#6B6B6B]">
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
                    <span key={idx} className="text-[#E88026] bg-[#FFF3E8] text-[11px] px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4">
                  <a href={`/ReferensProjekt/${p.id}`} className="inline-flex items-center gap-2 rounded-xl bg-[#E88026] px-4 py-2 text-white text-sm hover:bg-[#cf660d]">
                    Visa projekt <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="text-[#E88026] flex items-center gap-1 text-sm">
            Visa mer <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}