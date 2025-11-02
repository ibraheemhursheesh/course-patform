// @ts-nocheck



import { createClient } from "@/utils/server";

import { Suspense } from "react";

import CreateCommentForm from "./CreateCommentForm";
import Comments from "./Comments";

export default async function CommentsSection({ lesson }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: comments } =
    (await supabase
      .from("comments")
      .select()
      .eq("lectureId", lesson)
      .order("createdAt", { ascending: false })) ?? [];

  console.log("comments here =>", comments);

  return (
    <div className="p-7">
      <h2>Comments</h2>
      <Comments initialComments={comments} lesson={lesson} user={user} />
    </div>
  );
}
