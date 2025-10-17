import fs from "fs";
import path from "path";

export type Project = {
  id: string; // slug/uuid
  title: string;
  shortDescription: string;
  date: string; // ISO or readable
  location: string;
  tags: string[]; // max 3
  image: string; // public path under /public/uploads
};

const dataFile = path.join(process.cwd(), "data", "projects.json");
const uploadsDir = path.join(process.cwd(), "public", "uploads");

function ensureDirs() {
  if (!fs.existsSync(path.dirname(dataFile))) fs.mkdirSync(path.dirname(dataFile), { recursive: true });
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
  if (!fs.existsSync(dataFile)) fs.writeFileSync(dataFile, JSON.stringify([]), "utf8");
}

export function readProjects(): Project[] {
  ensureDirs();
  const raw = fs.readFileSync(dataFile, "utf8");
  try {
    return JSON.parse(raw) as Project[];
  } catch {
    return [];
  }
}

export function writeProjects(projects: Project[]) {
  ensureDirs();
  fs.writeFileSync(dataFile, JSON.stringify(projects, null, 2), "utf8");
}

export function addProject(project: Project) {
  const all = readProjects();
  all.unshift(project);
  writeProjects(all);
}

export function saveUpload(filename: string, buffer: Buffer): string {
  ensureDirs();
  const safe = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const target = path.join(uploadsDir, safe);
  fs.writeFileSync(target, buffer);
  return "/uploads/" + safe;
}
