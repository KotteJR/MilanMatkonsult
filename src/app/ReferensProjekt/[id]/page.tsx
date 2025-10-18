import Image from "next/image";
import ProjectGallery from "@/app/Components/ProjectGallery";
import { getProjectById } from "@/lib/db";
import { readProjects } from "@/lib/projectsStore";
import ContactSection from "../ContactSection";
import Footer from "@/app/Components/Footer";

async function fetchProject(id: string) {
  try {
    if (process.env.POSTGRES_URL) {
      const row = await getProjectById(id);
      if (row) {
        return {
          id: row.id,
          title: row.title,
          shortDescription: row.short_description,
          date: row.date,
          location: row.location,
          assignmentType: (row as any).assignment_type || "",
          services: (row as any).services || "",
          sizeInfo: (row as any).size_info || "",
          year: (row as any).year || "",
          tags: (row.tags || "").split(",").filter(Boolean),
          image: row.image_url,
          brief: row.brief || "",
          challenge: row.challenge || "",
          solution: row.solution || "",
          result: row.result || "",
          gallery: Array.isArray(row.gallery) ? row.gallery : [],
        } as any;
      }
    }
  } catch {}
  // fallback to local
  const p = readProjects().find((p) => p.id === id);
  return p ? { ...p, tags: p.tags || [], brief: "", challenge: "", solution: "", result: "", gallery: [], assignmentType: "", services: "", sizeInfo: "", year: "" } : null;
}

export default async function ProjectDetailPage(props: any) {
  const { id } = await props.params;
  const project = await fetchProject(id);
  if (!project) {
    return (
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <p>Projekt hittades inte.</p>
        </div>
      </section>
    );
  }

  const thumbs: string[] = Array.isArray(project.gallery) ? project.gallery : [];

  return (
    <section className="w-full bg-white py-24 md:py-24 md:">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <ProjectGallery main={project.image || "/images/hero.png"} title={project.title} thumbs={thumbs} />
          </div>
          <div className="max-w-xl">
            <h1 className="text-[28px] md:text-[32px] font-medium text-[#010207] mb-4">{project.title}</h1>
            <p className="text-[#5C5C5C] leading-relaxed mb-6">{project.shortDescription}</p>
            <div className="grid grid-cols-2 gap-6 text-sm text-[#6B6B6B]">
              <div>
                <div className="uppercase">Typ av Uppdrag</div>
                <div className="text-black">{project.assignmentType || '—'}</div>
              </div>
              <div>
                <div className="uppercase">Levererade Tjänster</div>
                <div className="text-black">{project.services || '—'}</div>
              </div>
              <div>
                <div className="uppercase">Plats</div>
                <div className="text-black">{project.location}</div>
              </div>
              <div>
                <div className="uppercase">Omfattning</div>
                <div className="text-black">{project.sizeInfo || '—'}</div>
              </div>
              <div>
                <div className="uppercase">År</div>
                <div className="text-black">{project.year || project.date}</div>
              </div>
              <div>
                <div className="uppercase">Taggar</div>
                <div className="text-black">{(project.tags || []).join(', ')}</div>
              </div>
            </div>

            {/* Details stacked under meta on the right */}
            <div className="mt-8 space-y-6">
              {project.brief && (
                <div>
                  <div className="font-medium text-[#010207] mb-1">Projektintro</div>
                  <p className="text-[#3A3A3A] leading-relaxed break-words">{project.brief}</p>
                </div>
              )}
              {project.challenge && (
                <div>
                  <div className="font-medium text-[#010207] mb-1">Reto</div>
                  <p className="text-[#3A3A3A] leading-relaxed break-words">{project.challenge}</p>
                </div>
              )}
              {project.solution && (
                <div>
                  <div className="font-medium text-[#010207] mb-1">Solución</div>
                  <p className="text-[#3A3A3A] leading-relaxed break-words">{project.solution}</p>
                </div>
              )}
              {project.result && (
                <div>
                  <div className="font-medium text-[#010207] mb-1">Resultado</div>
                  <p className="text-[#3A3A3A] leading-relaxed break-words">{project.result}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <ContactSection />        
      <Footer />
    </section>
    
  );
}
