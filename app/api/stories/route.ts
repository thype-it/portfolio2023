import { NextResponse } from "next/server";

import { stories } from "@/data";

export async function GET() {
  return NextResponse.json({ stories });
}
