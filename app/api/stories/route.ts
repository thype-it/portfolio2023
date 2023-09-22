import { NextResponse } from "next/server";

import stories from "@/data/stories.json";

export async function GET() {
  return NextResponse.json({ stories: stories.data });
}
