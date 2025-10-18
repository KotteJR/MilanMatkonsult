import { NextRequest, NextResponse } from "next/server";
import { addProject as addLocal, readProjects as readLocal, saveUpload as saveLocal, Project } from "@/lib/projectsStore";
import crypto from "crypto";
import { put } from "@vercel/blob";
import { getProjects, insertProject } from "@/lib/db";

function hasCloud() {
  return !!process.env.BLOB_READ_WRITE_TOKEN && !!process.env.POSTGRES_URL;
}

export async function GET() {
  if (hasCloud()) {
    const rows = await getProjects();
    const projects: Project[] = rows.map((r) => ({
      id: r.id,
      title: r.title,
      shortDescription: r.short_description,
      date: r.date,
      location: r.location,
      category: r.category || "",
      assignmentType: r.assignment_type || "",
      services: r.services || "",
      sizeInfo: r.size_info || "",
      year: r.year || "",
      tags: r.tags.split(",").filter(Boolean),
      image: r.image_url,
    }));
    return NextResponse.json(projects);
  }

  const projects = readLocal();
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  const contentType = req.headers.get("content-type") || "";
  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: "multipart/form-data required" }, { status: 400 });
  }

  const form = await req.formData();
  const title = String(form.get("title") || "").trim();
  const shortDescription = String(form.get("shortDescription") || "").trim();
  const date = String(form.get("date") || "").trim();
  const location = String(form.get("location") || "").trim();
  const category = String(form.get("category") || "").trim();
  const assignmentType = String(form.get("assignmentType") || "").trim();
  const services = String(form.get("services") || "").trim();
  const sizeInfo = String(form.get("sizeInfo") || "").trim();
  const year = String(form.get("year") || "").trim();
  const tagsRaw = String(form.get("tags") || "").trim();
  const file = form.get("image") as unknown as File | null;

  const brief = String(form.get("brief") || "").trim();
  const challenge = String(form.get("challenge") || "").trim();
  const solution = String(form.get("solution") || "").trim();
  const result = String(form.get("result") || "").trim();
  const galleries = form.getAll("gallery") as unknown as File[];

  if (!title || !shortDescription || !date || !location) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 3);

  const id = crypto.randomUUID();

  let imagePath = "";
  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    if (hasCloud()) {
      const blob = await put(`projects/${id}-${file.name}`, buffer, { access: "public", token: process.env.BLOB_READ_WRITE_TOKEN });
      imagePath = blob.url;
    } else {
      imagePath = saveLocal(file.name, buffer);
    }
  }

  const galleryUrls: string[] = [];
  for (const g of galleries || []) {
    const arr = await g.arrayBuffer();
    const buf = Buffer.from(arr);
    if (hasCloud()) {
      const blob = await put(`projects/${id}/gallery-${crypto.randomUUID()}-${g.name}`, buf, { access: "public", token: process.env.BLOB_READ_WRITE_TOKEN });
      galleryUrls.push(blob.url);
    } else {
      galleryUrls.push(saveLocal(g.name, buf));
    }
  }

  const project: Project = {
    id,
    title,
    shortDescription,
    date,
    location,
    tags,
    image: imagePath,
  };

  if (hasCloud()) {
    await insertProject({
      id,
      title,
      short_description: shortDescription,
      date,
      location,
      category,
      assignment_type: assignmentType,
      services,
      size_info: sizeInfo,
      year,
      tags: tags.join(","),
      image_url: imagePath,
      brief,
      challenge,
      solution,
      result,
      gallery: galleryUrls,
    });
  } else {
    addLocal(project);
  }

  return NextResponse.json({ ...project, gallery: galleryUrls }, { status: 201 });
}
