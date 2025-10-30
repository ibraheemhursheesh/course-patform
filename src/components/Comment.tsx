"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import CommentActions from "@/components/CommentActions";
import { ArrowBigUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { updateComment } from "@/utils/actions";

interface CommentProps {
  commentObj: {
    commentId: string;
    commenterName: string;
    commenterId: string;
    createdAt: string;
    comment: string;
    upvotes: string[];
  };
  user: {
    id: string;
  };
}

export default function Comment({ commentObj, user }: CommentProps) {
  const [isEditing, setIsEditing] = React.useState(false);

  const { commentId, commenterName, commenterId, createdAt, comment, upvotes } =
    commentObj;

  const date = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <li className="mt-5 border-b pb-5 flex gap-5">
      <div className="grow">
        <div className="flex gap-2 text-sm">
          <p className="font-bold">{commenterName}</p>
          <p className="text-zinc-700">{date}</p>
        </div>
        {isEditing ? (
          <form action={updateComment}>
            <input type="hidden" name="commentId" value={commentId} />
            <Textarea
              name="updatedComment"
              className="w-full"
              defaultValue={comment}
            />
            <div className="flex gap-3 items-center mt-3 ">
              <Button
                variant="outline"
                className="ml-auto"
                onClick={() => setIsEditing(false)}
              >
                {" "}
                Cancel
              </Button>
              <Button type="submit" onClick={() => setIsEditing(false)}>
                Update
              </Button>
            </div>
          </form>
        ) : (
          <div>
            <p className="mt-2">{comment}</p>
            <div className="flex items-center gap-3 mt-3">
              <Button
                className="min-w-[65px] text-center shrink-0"
                variant="secondary"
              >
                <ArrowBigUp />
                {upvotes.length}
              </Button>
              <Button
                className="min-w-[65px] text-center shrink-0"
                variant="secondary"
              >
                Reply
              </Button>
            </div>
          </div>
        )}
      </div>
      <div>
        {user.id === commenterId && (
          <CommentActions commentId={commentId} setIsEditing={setIsEditing} />
        )}
      </div>
    </li>
  );
}
