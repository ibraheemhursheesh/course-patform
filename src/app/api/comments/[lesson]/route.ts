// app/api/comments/[lesson]/route.ts
// @ts-nocheck
import { NextResponse } from "next/server";
import { createClient } from "@/utils/server";

export async function GET(
  request: Request,
  { params }: { params: { lesson: string } }
) {
  const { lesson } = await params;
  console.log("here", lesson);
  const supabase = await createClient();

  const { data: comments, error } = await supabase
    .from("comments")
    .select()
    .eq("lectureId", lesson)
    .order("createdAt", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(comments, {
    headers: {
      "Cache-Control":
        "public, max-age=60, s-maxage=60, stale-while-revalidate=120",
    },
  });
}
