// @ts-nocheck
import Comment from "@/components/Comment";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/server";
import { createComment } from "@/utils/actions";

import { Suspense } from "react";
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

  return (
    <div className="p-7">
      <Comments>
        <ul>
          {comments?.map((commentObj) => {
            console.log(commentObj);
            return (
              <Comment
                key={commentObj.commentId}
                commentObj={commentObj}
                user={user}
              />
            );
          })}
        </ul>
      </Comments>
    </div>
  );
}
