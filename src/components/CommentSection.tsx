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

  // Fetch comments and upvotes in parallel
  const [commentsResponse, upvotesResponse] = await Promise.all([
    supabase
      .from("comments")
      .select()
      .eq("lectureId", lesson)
      .order("createdAt", { ascending: false }),
    supabase.from("question_upvotes").select().eq("lectureId", lesson),
  ]);

  const comments = commentsResponse.data ?? [];
  const allQuestionUpvotes = upvotesResponse.data ?? [];

  console.log("upvotes", allQuestionUpvotes);

  return (
    <div className="p-7">
      <h2>Comments</h2>
      <Comments
        // supabase={supabase}
        // fetchCommentUpvotes={fetchCommentUpvotes}
        allQuestionUpvotes={allQuestionUpvotes}
        initialComments={comments}
        lesson={lesson}
        user={user}
      />
    </div>
  );
}
