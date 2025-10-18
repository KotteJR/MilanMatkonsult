"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, X, Plus } from "lucide-react";

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
  
  // Form states
  const [title, setTitle] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("Maskinstyrning");
  const [year, setYear] = useState("");
  const [assignmentType, setAssignmentType] = useState("");
  const [services, setServices] = useState("");
  const [sizeInfo, setSizeInfo] = useState("");
  const [brief, setBrief] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [result, setResult] = useState("");
  
  // Image states
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string>("");
  const [galleryImages, setGalleryImages] = useState<File[]>([]);
  const [galleryPreviews, setGalleryPreviews] = useState<string[]>([]);
  
  // Tags
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const mainImageInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);

  async function load() {
    const res = await fetch("/api/projects", { cache: "no-store" });
    if (res.ok) setProjects(await res.json());
  }

  useEffect(() => {
    load();
  }, []);

  function resetForm() {
    setTitle("");
    setShortDescription("");
    setDate("");
    setLocation("");
    setCategory("Maskinstyrning");
    setYear("");
    setAssignmentType("");
    setServices("");
    setSizeInfo("");
    setBrief("");
    setChallenge("");
    setSolution("");
    setResult("");
    setMainImage(null);
    setMainImagePreview("");
    setGalleryImages([]);
    setGalleryPreviews([]);
    setTags([]);
    setNewTag("");
    setMessage("");
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("shortDescription", shortDescription);
    formData.append("date", date);
    formData.append("location", location);
    formData.append("category", category);
    formData.append("year", year);
    formData.append("assignmentType", assignmentType);
    formData.append("services", services);
    formData.append("sizeInfo", sizeInfo);
    formData.append("brief", brief);
    formData.append("challenge", challenge);
    formData.append("solution", solution);
    formData.append("result", result);
    formData.append("tags", tags.join(","));

    if (mainImage) {
      formData.append("image", mainImage);
    }

    galleryImages.forEach((file) => {
      formData.append("gallery", file);
    });

    try {
      const res = await fetch("/api/projects", { method: "POST", body: formData });
      const data = await res.json();
      
      if (!res.ok) {
        setMessage(data?.error || "Något gick fel");
      } else {
        setMessage("Projekt skapat!");
        resetForm();
        await load();
      }
    } catch (error) {
      setMessage("Fel vid skapande av projekt");
    }
    
    setLoading(false);
  }

  function handleMainImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith("image/")) {
      setMessage("Endast bildfiler tillåtna");
      return;
    }
    
    if (file.size > 10 * 1024 * 1024) {
      setMessage("Bilden är för stor (max 10MB)");
      return;
    }
    
    setMainImage(file);
    setMainImagePreview(URL.createObjectURL(file));
    setMessage("");
  }

  function handleGalleryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => 
      file.type.startsWith("image/") && file.size <= 10 * 1024 * 1024
    );
    
    setGalleryImages(prev => [...prev, ...validFiles]);
    setGalleryPreviews(prev => [...prev, ...validFiles.map(file => URL.createObjectURL(file))]);
  }

  function removeGalleryImage(index: number) {
    setGalleryImages(prev => prev.filter((_, i) => i !== index));
    setGalleryPreviews(prev => prev.filter((_, i) => i !== index));
  }

  function addTag() {
    const trimmed = newTag.trim();
    if (trimmed && !tags.includes(trimmed) && tags.length < 3) {
      setTags(prev => [...prev, trimmed]);
      setNewTag("");
    }
  }

  function removeTag(index: number) {
    setTags(prev => prev.filter((_, i) => i !== index));
  }

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/Admin" className="p-2 hover:bg-gray-100 rounded-lg transition">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-medium">Admin: Skapa projekt</h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-8">
          {/* Main Project Card */}
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-medium mb-4">Projektkort</h2>
              
              {/* Main Image */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Huvudbild</label>
                <input
                  ref={mainImageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleMainImageChange}
                  className="hidden"
                />
                <div
                  onClick={() => mainImageInputRef.current?.click()}
                  className="w-full h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-gray-400 transition flex items-center justify-center"
                >
                  {mainImagePreview ? (
                    <img src={mainImagePreview} alt="Preview" className="w-full h-full object-cover rounded-xl" />
                  ) : (
                    <div className="text-center text-gray-500">
                      <Upload size={32} className="mx-auto mb-2" />
                      <p>Klicka för att ladda upp bild</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Titel *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="Projektets titel"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Kort beskrivning *</label>
                  <input
                    type="text"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="Kort beskrivning av projektet"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Datum *</label>
                  <input
                    type="text"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="t.ex. 15 juli 2025"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Plats *</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="t.ex. Malmö, Sverige"
                  />
                </div>
              </div>

              {/* Category and Year */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Kategori</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                  >
                    <option value="Maskinstyrning">Maskinstyrning</option>
                    <option value="Drönarscanning">Drönarscanning</option>
                    <option value="Laserskanning">Laserskanning</option>
                    <option value="Teknisk konsult">Teknisk konsult</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">År</label>
                  <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="2025"
                  />
                </div>
              </div>

              {/* Additional Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Typ av uppdrag</label>
                  <input
                    type="text"
                    value={assignmentType}
                    onChange={(e) => setAssignmentType(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="t.ex. Replanteo för väg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Tjänster</label>
                  <input
                    type="text"
                    value={services}
                    onChange={(e) => setServices(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="t.ex. Replanteo, drönarscanning"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Omfattning</label>
                  <input
                    type="text"
                    value={sizeInfo}
                    onChange={(e) => setSizeInfo(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="t.ex. 120 000 m²"
                  />
                </div>
              </div>

              {/* Tags */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Taggar (max 3)</label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="Lägg till tagg"
                    disabled={tags.length >= 3}
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    disabled={!newTag.trim() || tags.length >= 3}
                    className="px-4 py-2 bg-[#E88026] text-white rounded-lg hover:bg-[#cf660d] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                    <Plus size={16} />
                    Lägg till
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 bg-[#FFF3E8] text-[#E88026] px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(index)}
                        className="text-[#cf660d] hover:text-[#E88026]"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-medium mb-4">Projektdetaljer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Projektintro</label>
                  <textarea
                    value={brief}
                    onChange={(e) => setBrief(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="Kort introduktion till projektet"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Utmaning</label>
                  <textarea
                    value={challenge}
                    onChange={(e) => setChallenge(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="Vilka utmaningar fanns?"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Lösning</label>
                  <textarea
                    value={solution}
                    onChange={(e) => setSolution(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="Hur löstes utmaningarna?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Resultat</label>
                  <textarea
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E88026] focus:border-transparent"
                    placeholder="Vilka resultat uppnåddes?"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Images - Optional */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-lg font-medium mb-4">Galleri (valfritt)</h2>
            <p className="text-sm text-gray-600 mb-4">Lägg till upp till 3 galleribilder som visas som thumbnails på projektsidan</p>
            
            <input
              ref={galleryInputRef}
              type="file"
              accept="image/*"
              multiple
              onChange={handleGalleryChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => galleryInputRef.current?.click()}
              className="mb-4 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
            >
              <Upload size={16} />
              Lägg till galleribilder
            </button>
            
            <div className="grid grid-cols-3 gap-4">
              {[0, 1, 2].map((index) => (
                <div key={index} className="relative">
                  {galleryPreviews[index] ? (
                    <>
                      <img src={galleryPreviews[index]} alt={`Gallery ${index + 1}`} className="w-full h-32 object-cover rounded-lg border border-gray-200" />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <X size={12} />
                      </button>
                    </>
                  ) : (
                    <div
                      onClick={() => galleryInputRef.current?.click()}
                      className="w-full h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition flex items-center justify-center"
                    >
                      <div className="text-center text-gray-500">
                        <Upload size={24} className="mx-auto mb-1" />
                        <p className="text-xs">Bild {index + 1}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {galleryPreviews.length > 3 && (
              <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">Endast de första 3 bilderna kommer att visas på projektsidan.</p>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading || !title || !shortDescription || !date || !location}
              className="px-6 py-3 bg-[#E88026] text-white rounded-lg hover:bg-[#cf660d] disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {loading ? "Sparar..." : "Skapa projekt"}
            </button>
          </div>

          {message && (
            <div className={`p-3 rounded-lg text-sm ${
              message.includes("skapat") ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
            }`}>
              {message}
            </div>
          )}
        </form>

        {/* Existing Projects */}
        <div className="mt-12">
          <h2 className="text-xl font-medium mb-6">Befintliga projekt</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((p) => (
              <div key={p.id} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="text-sm text-gray-500 mb-1">{p.date} • {p.location}</div>
                <h3 className="font-medium text-[#010207] mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{p.shortDescription}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {p.tags.map((t, i) => (
                    <span key={i} className="text-[#E88026] bg-[#FFF3E8] text-xs px-2 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={`/ReferensProjekt/${p.id}`}
                  className="inline-flex items-center gap-2 bg-[#E88026] text-white px-3 py-1.5 rounded-lg text-sm hover:bg-[#cf660d]"
                >
                  Visa projekt
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}