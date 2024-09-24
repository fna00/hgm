import { getLanguages } from "@/utils/getLanguages";
import { NextResponse } from "next/server";

export async function GET() {
  const languages = getLanguages();
  return NextResponse.json({ languages });
}
