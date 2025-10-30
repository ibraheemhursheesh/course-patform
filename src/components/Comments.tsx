// @ts-nocheck
"use client";
import React from "react";

export default function Comments({ children }) {
  const [createdComment, setCreatedComment] = React.useState([]);

  function handleCreateComment() {}

  return (
    <div>
      {" "}
      <form action={createComment}>
        <input type="hidden" name="lectureId" value={lesson} />
        <Textarea name="commentContent" />
        <Button
          onClick={handleCreateComment}
          type="submit"
          className="ml-auto block mt-5"
        >
          Comment
        </Button>
      </form>
      <h2>Comments</h2>
      {createdComments.map((commentObj) => (
        <Comment key={commentObj.commentId} />
      ))}
      {children}
    </div>
  );
}
