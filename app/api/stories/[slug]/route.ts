import { NextResponse } from "next/server";

import stories from "@/data/stories";

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  try {
    const story = stories.find((story) => story.id === params.slug);

    if (!story) {
      return new NextResponse("not found", { status: 404 });
    }

    return NextResponse.json({ story });
  } catch (error) {
    return new NextResponse("internal server error", { status: 500 });
  }
}
