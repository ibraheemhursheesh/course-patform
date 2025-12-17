// @ts-nocheck
import { createClient } from "@/lib/supabase/server";
import { Suspense } from "react";
import CreateCommentForm from "./CreateCommentForm";
import Comments from "./Comments";

export default async function CommentsSection({ lesson }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const [commentsResponse, upvotesResponse, repliesResponse] =
    await Promise.all([
      supabase
        .from("comments")
        .select()
        .eq("lectureId", lesson)
        .eq("type", "comment")
        .order("createdAt", { ascending: false }),
      supabase.from("question_upvotes").select().eq("lectureId", lesson),
      supabase
        .from("comments")
        .select()
        .eq("lectureId", lesson)
        .eq("type", "reply")
        .order("createdAt", { ascending: true }),
    ]);

  const comments = commentsResponse.data ?? [];
  console.log("comments", comments);
  const allQuestionUpvotes = upvotesResponse.data ?? [];
  const allReplies = repliesResponse.data ?? [];

  return (
    <div className="p-3 sm:p-7 pb-45">
      <h2 className="mb-5">
        <p className="text-2xl font-bold">
          Have a question about this lecture?
        </p>
        <p className="mt-1"> Leave it below and let other folks answer it.</p>
      </h2>
      <Comments
        allQuestionUpvotes={allQuestionUpvotes}
        initialComments={comments}
        allReplies={allReplies}
        lesson={lesson}
        user={user}
      />
    </div>
  );
}