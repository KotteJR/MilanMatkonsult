import { sql } from "@vercel/postgres";

export async function ensureProjectsTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS projects (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      short_description TEXT NOT NULL,
      date TEXT NOT NULL,
      location TEXT NOT NULL,
      category TEXT,
      assignment_type TEXT,
      services TEXT,
      size_info TEXT,
      year TEXT,
      tags TEXT NOT NULL,
      image_url TEXT NOT NULL,
      brief TEXT,
      challenge TEXT,
      solution TEXT,
      result TEXT,
      gallery JSON
    );
  `;
  // Add new columns if the table already existed before
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS category TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS assignment_type TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS services TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS size_info TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS year TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS brief TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS challenge TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS solution TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS result TEXT;`;
  await sql`ALTER TABLE projects ADD COLUMN IF NOT EXISTS gallery JSON;`;
}

export type DbProject = {
  id: string;
  title: string;
  short_description: string;
  date: string;
  location: string;
  category?: string;
  assignment_type?: string;
  services?: string;
  size_info?: string;
  year?: string;
  tags: string; // comma separated
  image_url: string;
  brief?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  gallery?: any;
};

export async function insertProject(p: DbProject) {
  await ensureProjectsTable();
  await sql`
    INSERT INTO projects (id, title, short_description, date, location, category, assignment_type, services, size_info, year, tags, image_url, brief, challenge, solution, result, gallery)
    VALUES (${p.id}, ${p.title}, ${p.short_description}, ${p.date}, ${p.location}, ${p.category || null}, ${p.assignment_type || null}, ${p.services || null}, ${p.size_info || null}, ${p.year || null}, ${p.tags}, ${p.image_url}, ${p.brief || null}, ${p.challenge || null}, ${p.solution || null}, ${p.result || null}, ${JSON.stringify(p.gallery || [])})
  `;
}

export async function getProjects(): Promise<DbProject[]> {
  await ensureProjectsTable();
  const { rows } = await sql`SELECT * FROM projects ORDER BY row_number() OVER () DESC`;
  return rows as DbProject[];
}

export async function getProjectById(id: string): Promise<DbProject | null> {
  await ensureProjectsTable();
  const { rows } = await sql`SELECT * FROM projects WHERE id = ${id} LIMIT 1`;
  return (rows[0] as DbProject) || null;
}
