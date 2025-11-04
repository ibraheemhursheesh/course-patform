// @ts-nocheck
"use client";
import React, { useOptimistic } from "react";
import CreateCommentForm from "./CreateCommentForm";
import Comment from "./Comment";

export default function Comments({
  allQuestionUpvotes,
  initialComments = [],
  lesson,
  user,
}) {
  // reducer: put new comment at top

  const [comments, addOptimistic] = useOptimistic(
    initialComments,
    (state, item) => {
      if (item.action === "createComment") {
        return [item, ...state];
      } else if (item.action === "deleteComment") {
        return state.filter((c) => c.commentId !== item.commentId);
      }
    }
  );

  return (
    <div>
      {/* pass an onOptimisticAdd so the form can show a comment immediately */}
      <CreateCommentForm
        lesson={lesson}
        onOptimisticAdd={(c) => addOptimistic(c)}
        username={user.user_metadata.full_name}
      />
      <div>
        {comments.map((commentObj) => {
          const questionUpvotes = allQuestionUpvotes.filter(
            (upvote) => upvote.commentId === commentObj.commentId
          );

          return (
            <Comment
              initialQuestionUpvotes={questionUpvotes}
              key={
                commentObj.commentId ??
                commentObj.commentId ??
                commentObj.tempId
              }
              commentObj={commentObj}
              user={user}
              onOptimisticAdd={(c) => addOptimistic(c)}
            />
          );
        })}
      </div>
    </div>
  );
}
