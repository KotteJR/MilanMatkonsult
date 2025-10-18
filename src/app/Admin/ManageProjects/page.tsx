"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Calendar, MapPin, Tag, ArrowLeft } from "lucide-react";

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

export default function ManageProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

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
        }
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProjects();
  }, []);

  const handleDelete = async (projectId: string) => {
    if (!confirm("Är du säker på att du vill ta bort detta projekt? Detta kan inte ångras.")) {
      return;
    }

    setDeleting(projectId);
    try {
      const res = await fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProjects(projects.filter(p => p.id !== projectId));
        alert("Projektet har tagits bort!");
      } else {
        alert("Ett fel uppstod vid borttagning av projektet.");
      }
    } catch (error) {
      console.error("Failed to delete project:", error);
      alert("Ett fel uppstod vid borttagning av projektet.");
    } finally {
      setDeleting(null);
    }
  };

  if (loading) {
    return (
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center py-12">
            <p className="text-gray-500">Laddar projekt...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/Admin" className="p-2 rounded-lg transition">
            <ArrowLeft size={20} />
          </Link>
          <div>
            <h1 className="text-2xl font-medium text-[#010207]">Hantera projekt</h1>
            <p className="text-gray-500 text-sm">Visa och ta bort befintliga projekt från databasen</p>
          </div>
        </div>

        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Inga projekt hittades.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={() => handleDelete(project.id)}
                    disabled={deleting === project.id}
                    className="absolute top-3 right-3 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors disabled:opacity-50"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-medium text-[#010207] mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-2">{project.shortDescription}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={12} />
                      <span>{project.location}</span>
                    </div>
                    {project.category && (
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <Tag size={12} />
                        <span>{project.category}</span>
                      </div>
                    )}
                  </div>
                  
                  {project.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="text-[#E88026] bg-[#FFF3E8] text-[10px] px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <div className="text-xs text-gray-400">
                    ID: {project.id}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
