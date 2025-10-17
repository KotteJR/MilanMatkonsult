import { NextRequest, NextResponse } from "next/server";
import { addProject, readProjects, saveUpload, Project } from "@/src/lib/projectsStore";
import crypto from "crypto";

export async function GET() {
  const projects = readProjects();
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
  const tagsRaw = String(form.get("tags") || "").trim();
  const file = form.get("image") as unknown as File | null;

  if (!title || !shortDescription || !date || !location) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const tags = tagsRaw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean)
    .slice(0, 3);

  let imagePath = "";
  if (file) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    imagePath = saveUpload(file.name, buffer);
  }

  const id = crypto.randomUUID();
  const project: Project = {
    id,
    title,
    shortDescription,
    date,
    location,
    tags,
    image: imagePath,
  };

  addProject(project);
  return NextResponse.json(project, { status: 201 });
}
