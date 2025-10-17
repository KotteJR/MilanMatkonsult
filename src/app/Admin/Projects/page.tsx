"use client";

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

export default function AdminProjectsPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [projects, setProjects] = useState<Project[]>([]);

  async function load() {
    const res = await fetch("/api/projects", { cache: "no-store" });
    if (res.ok) setProjects(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // tags: join by commas, ensuring max 3 from chips or manual input
    const tags = (formData.getAll("tag") as string[]).filter(Boolean).slice(0, 3);
    if (tags.length) formData.set("tags", tags.join(","));

    const res = await fetch("/api/projects", { method: "POST", body: formData });
    const data = await res.json();
    if (!res.ok) {
      setMessage(data?.error || "Något gick fel");
    } else {
      setMessage("Projekt skapat");
      form.reset();
      await load();
    }
    setLoading(false);
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-4xl mx-auto px-6 md:px-8 lg:px-12">
        <h1 className="text-2xl font-medium mb-6">Admin: Skapa projekt</h1>

        <form onSubmit={onSubmit} encType="multipart/form-data" className="space-y-5">
          <div>
            <label className="block text-sm mb-1">Titel</label>
            <input name="title" required className="w-full bg-[#F5F5F5] px-4 py-2 rounded-xl" />
          </div>

          <div>
            <label className="block text-sm mb-1">Kort beskrivning</label>
            <textarea name="shortDescription" required rows={3} className="w-full bg-[#F5F5F5] px-4 py-2 rounded-xl" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm mb-1">Datum</label>
              <input name="date" required className="w-full bg-[#F5F5F5] px-4 py-2 rounded-xl" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Plats</label>
              <input name="location" required className="w-full bg-[#F5F5F5] px-4 py-2 rounded-xl" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Taggar (max 3)</label>
            <div className="flex gap-2">
              <input name="tag" className="flex-1 bg-[#F5F5F5] px-4 py-2 rounded-xl" />
              <input name="tag" className="flex-1 bg-[#F5F5F5] px-4 py-2 rounded-xl" />
              <input name="tag" className="flex-1 bg-[#F5F5F5] px-4 py-2 rounded-xl" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Bild</label>
            <input name="image" type="file" accept="image/*" className="w-full" />
          </div>

          <button disabled={loading} className="inline-flex items-center gap-2 rounded-xl bg-[#E88026] px-5 py-2.5 text-white">
            {loading ? "Sparar…" : "Skapa projekt"}
          </button>

          {message && <p className="text-sm text-[#3A3A3A]">{message}</p>}
        </form>

        <div className="mt-10">
          <h2 className="text-xl font-medium mb-3">Projekt</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((p) => (
              <div key={p.id} className="rounded-xl border border-gray-200 p-4">
                <div className="text-sm text-[#6B6B6B]">{p.date} • {p.location}</div>
                <div className="font-medium text-[#010207]">{p.title}</div>
                <div className="text-sm text-[#3A3A3A] line-clamp-2">{p.shortDescription}</div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span key={i} className="text-[#E88026] bg-[#FFF3E8] text-[11px] px-2 py-0.5 rounded-full">{t}</span>
                  ))}
                </div>
                <a href={`/ReferensProjekt/${p.id}`} className="inline-flex items-center gap-2 rounded-xl bg-[#E88026] px-3 py-1.5 text-white text-sm mt-3">
                  Visa
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
