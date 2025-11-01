// @ts-nocheck
import React from "react";

import Comment from "@/components/Comment";

export default function Comments({ comments, user }) {
  return (
    <ul>
      {comments?.map((commentObj) => {
        return (
          <Comment
            key={commentObj.commentId}
            commentObj={commentObj}
            user={user}
          />
        );
      })}
    </ul>
  );
}
