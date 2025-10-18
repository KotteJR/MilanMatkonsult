"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  date: string;
  location: string;
  tags: string[];
  image: string;
};

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectsModal({ isOpen, onClose }: Props) {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      loadAllProjects();
    }
  }, [isOpen]);

  async function loadAllProjects() {
    setLoading(true);
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setAllProjects(data);
      }
    } catch (error) {
      console.error("Failed to load projects:", error);
    } finally {
      setLoading(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-medium text-[#010207]">Alla projekt</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {loading ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Laddar projekt...</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allProjects.map((project) => (
                <div key={project.id} className="rounded-2xl bg-white border border-gray-200 overflow-hidden hover:shadow-lg transition">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={400} 
                    height={240} 
                    className="w-full h-44 object-cover" 
                  />
                  <div className="p-4">
                    <h3 className="text-[15px] font-medium text-[#010207] mb-2">{project.title}</h3>
                    <p className="text-[13px] text-[#5C5C5C] mb-3 leading-relaxed line-clamp-2">{project.shortDescription}</p>

                    <div className="grid grid-cols-2 gap-3 text-xs text-[#6B6B6B] mb-3">
                      <div>
                        <div className="uppercase">datum</div>
                        <div>{project.date}</div>
                      </div>
                      <div>
                        <div className="uppercase">plats</div>
                        <div>{project.location}</div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="text-[#E88026] bg-[#FFF3E8] text-[11px] px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={`/ReferensProjekt/${project.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#E88026] px-4 py-2 text-white text-sm hover:bg-[#cf660d] w-full justify-center"
                    >
                      Visa projekt <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
