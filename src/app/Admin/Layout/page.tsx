"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, X } from "lucide-react";

type Project = {
  id: string;
  title: string;
  shortDescription: string;
  date: string;
  location: string;
  tags: string[];
  image: string;
};

type LayoutSettings = {
  homeFeatured: string[]; // project IDs for home page
  referensFeatured: string[]; // project IDs for referens page (6 max)
};

export default function LayoutAdminPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [settings, setSettings] = useState<LayoutSettings>({
    homeFeatured: [],
    referensFeatured: []
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function loadData() {
    try {
      const res = await fetch("/api/projects", { cache: "no-store" });
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
      
      // Load layout settings from localStorage (or API in future)
      const saved = localStorage.getItem("layout-settings");
      if (saved) {
        setSettings(JSON.parse(saved));
      }
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  async function saveSettings() {
    setLoading(true);
    setMessage("");
    
    try {
      // Save to localStorage (or API in future)
      localStorage.setItem("layout-settings", JSON.stringify(settings));
      setMessage("Inställningar sparade!");
    } catch (error) {
      setMessage("Fel vid sparning");
    }
    
    setLoading(false);
  }

  function toggleHomeFeatured(projectId: string) {
    setSettings(prev => ({
      ...prev,
      homeFeatured: prev.homeFeatured.includes(projectId)
        ? prev.homeFeatured.filter(id => id !== projectId)
        : [...prev.homeFeatured, projectId]
    }));
  }

  function toggleReferensFeatured(projectId: string) {
    setSettings(prev => {
      const current = prev.referensFeatured;
      const isSelected = current.includes(projectId);
      
      if (isSelected) {
        return {
          ...prev,
          referensFeatured: current.filter(id => id !== projectId)
        };
      } else if (current.length < 6) {
        return {
          ...prev,
          referensFeatured: [...current, projectId]
        };
      }
      return prev; // Max 6 reached
    });
  }

  function setOrder(list: 'homeFeatured' | 'referensFeatured', projectId: string, position: number) {
    setSettings(prev => {
      const listArr = [...prev[list]].filter(id => id !== projectId);
      const insertAt = Math.max(0, Math.min(position - 1, listArr.length));
      listArr.splice(insertAt, 0, projectId);
      return { ...prev, [list]: listArr } as LayoutSettings;
    });
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/Admin" className="p-2 hover:bg-gray-100 rounded-lg transition">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-medium">Layout Admin</h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Home Page Featured Projects */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-medium mb-2">Hem - Utvalda projekt</h2>
              <p className="text-sm text-[#6B6B6B] mb-4">
                Välj vilka projekt som visas på startsidan
              </p>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {projects.map((project) => {
                const isSelected = settings.homeFeatured.includes(project.id);
                return (
                  <div
                    key={project.id}
                    className={`p-4 rounded-xl border cursor-pointer transition-all hover:shadow-sm ${
                      isSelected ? "border-[#E88026] bg-[#FFF3E8]" : "border-gray-200"
                    }`}
                    onClick={() => toggleHomeFeatured(project.id)}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-[#E88026] bg-[#E88026]" : "border-gray-300"
                      }`}>
                        {isSelected && <Check size={14} className="text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-[#010207] truncate">{project.title}</h3>
                        <p className="text-sm text-[#6B6B6B] line-clamp-2">{project.shortDescription}</p>
                      </div>
                      {isSelected && (
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-[#6B6B6B]">Plats</label>
                          <input
                            type="number"
                            min={1}
                            value={(settings.homeFeatured.indexOf(project.id) + 1) || 1}
                            onClick={(e)=>e.stopPropagation()}
                            onChange={(e)=> setOrder('homeFeatured', project.id, parseInt(e.target.value || '1', 10))}
                            className="w-14 bg-white border border-gray-300 rounded-lg px-2 py-1 text-sm"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ReferensProjekt Featured Projects */}
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-medium mb-2">ReferensProjekt - Utvalda projekt</h2>
              <p className="text-sm text-[#6B6B6B] mb-4">
                Välj vilka projekt som visas på ReferensProjekt-sidan (max 6)
              </p>
              <div className="text-xs text-[#6B6B6B] mb-4">
                Valda: {settings.referensFeatured.length}/6
              </div>
            </div>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {projects.map((project) => {
                const isSelected = settings.referensFeatured.includes(project.id);
                const canSelect = !isSelected && settings.referensFeatured.length < 6;
                
                return (
                  <div
                    key={project.id}
                    className={`p-4 rounded-xl border transition-all hover:shadow-sm ${
                      isSelected 
                        ? "border-[#E88026] bg-[#FFF3E8] cursor-pointer" 
                        : canSelect 
                          ? "border-gray-200 cursor-pointer" 
                          : "border-gray-100 bg-gray-50 cursor-not-allowed"
                    }`}
                    onClick={() => canSelect || isSelected ? toggleReferensFeatured(project.id) : null}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                        isSelected ? "border-[#E88026] bg-[#E88026]" : "border-gray-300"
                      }`}>
                        {isSelected && <Check size={14} className="text-white" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-[#010207] truncate">{project.title}</h3>
                        <p className="text-sm text-[#6B6B6B] line-clamp-2">{project.shortDescription}</p>
                      </div>
                      {isSelected && (
                        <div className="flex items-center gap-2">
                          <label className="text-xs text-[#6B6B6B]">Plats</label>
                          <input
                            type="number"
                            min={1}
                            value={(settings.referensFeatured.indexOf(project.id) + 1) || 1}
                            onClick={(e)=>e.stopPropagation()}
                            onChange={(e)=> setOrder('referensFeatured', project.id, parseInt(e.target.value || '1', 10))}
                            className="w-14 bg-white border border-gray-300 rounded-lg px-2 py-1 text-sm"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={saveSettings}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-xl bg-[#E88026] px-6 py-3 text-white hover:bg-[#cf660d] disabled:opacity-50"
          >
            {loading ? "Sparar..." : "Spara inställningar"}
          </button>
        </div>

        {message && (
          <div className="mt-4 p-3 rounded-lg bg-green-50 text-green-700 text-sm">
            {message}
          </div>
        )}
      </div>
    </section>
  );
}
