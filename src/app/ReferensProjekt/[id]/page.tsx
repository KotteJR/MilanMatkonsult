import { readProjects } from "@/src/lib/projectsStore";
import Image from "next/image";

type Params = { params: { id: string } };

export default function ProjectDetailPage({ params }: Params) {
  const project = readProjects().find((p) => p.id === params.id);
  if (!project) {
    return (
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <p>Projekt hittades inte.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 grid md:grid-cols-2 gap-10">
        <div>
          <div className="rounded-xl overflow-hidden">
            <Image src={project.image || "/images/project-thumb.jpg"} alt={project.title} width={1000} height={600} className="w-full h-auto object-cover" />
          </div>
          {/* Thumbnails could be added here in future */}
        </div>
        <div>
          <h1 className="text-[28px] md:text-[32px] font-medium text-[#010207] mb-4">{project.title}</h1>
          <p className="text-[#5C5C5C] leading-relaxed mb-6">{project.shortDescription}</p>

          <div className="grid grid-cols-2 gap-6 text-sm text-[#6B6B6B]">
            <div>
              <div className="uppercase">Typ av Enkarg</div>
              <div>—</div>
            </div>
            <div>
              <div className="uppercase">Tjänster</div>
              <div>{project.tags.join(", ")}</div>
            </div>
            <div>
              <div className="uppercase">Plats</div>
              <div>{project.location}</div>
            </div>
            <div>
              <div className="uppercase">År</div>
              <div>{project.date}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
