import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { del } from "@vercel/blob";
import fs from "fs";
import path from "path";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // Check if we're using cloud storage (Vercel Postgres + Blob)
    if (process.env.POSTGRES_URL && process.env.BLOB_READ_WRITE_TOKEN) {
      // Get project data first to find image URLs
      const projectResult = await sql`
        SELECT image_url, gallery FROM projects WHERE id = ${id}
      `;

      if (projectResult.rows.length === 0) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }

      const project = projectResult.rows[0];

      // Delete images from Vercel Blob
      try {
        if (project.image_url && project.image_url.includes("blob.vercel-storage.com")) {
          await del(project.image_url);
        }

        if (project.gallery && Array.isArray(project.gallery)) {
          for (const imageUrl of project.gallery) {
            if (imageUrl.includes("blob.vercel-storage.com")) {
              await del(imageUrl);
            }
          }
        }
      } catch (blobError) {
        console.error("Error deleting images from blob:", blobError);
        // Continue with database deletion even if blob deletion fails
      }

      // Delete from database
      await sql`
        DELETE FROM projects WHERE id = ${id}
      `;

      return NextResponse.json({ success: true });
    } else {
      // Local storage fallback
      const projectsPath = path.join(process.cwd(), "data", "projects.json");
      
      if (!fs.existsSync(projectsPath)) {
        return NextResponse.json({ error: "Projects file not found" }, { status: 404 });
      }

      const projectsData = JSON.parse(fs.readFileSync(projectsPath, "utf8"));
      const projectIndex = projectsData.findIndex((p: any) => p.id === id);

      if (projectIndex === -1) {
        return NextResponse.json({ error: "Project not found" }, { status: 404 });
      }

      const project = projectsData[projectIndex];

      // Delete local image files
      try {
        if (project.image_url && project.image_url.startsWith("/uploads/")) {
          const imagePath = path.join(process.cwd(), "public", project.image_url);
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath);
          }
        }

        if (project.gallery && Array.isArray(project.gallery)) {
          for (const imageUrl of project.gallery) {
            if (imageUrl.startsWith("/uploads/")) {
              const imagePath = path.join(process.cwd(), "public", imageUrl);
              if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
              }
            }
          }
        }
      } catch (fileError) {
        console.error("Error deleting local files:", fileError);
        // Continue with JSON deletion even if file deletion fails
      }

      // Remove project from array
      projectsData.splice(projectIndex, 1);

      // Write back to file
      fs.writeFileSync(projectsPath, JSON.stringify(projectsData, null, 2));

      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
