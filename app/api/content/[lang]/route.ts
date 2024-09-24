import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET(
  req: Request,
  { params }: { params: { lang: string } }
) {
  const { lang } = params;

  try {
    const filePath = path.join(process.cwd(), "shared", lang, "content.json");
    const fileContents = await fs.readFile(filePath, "utf-8");
    const content = JSON.parse(fileContents);

    return NextResponse.json(content);
  } catch (error) {
    console.error("Error reading content file:", error);
    return NextResponse.json({ error: "Content not found" }, { status: 404 });
  }
}
