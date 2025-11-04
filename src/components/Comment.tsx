// @ts-nocheck
"use client";

import React, { startTransition, useMemo, useOptimistic } from "react";

import SubmitFormButton from "@/components/SumbitFormButton";

import { Button } from "@/components/ui/button";
import CommentActions from "@/components/CommentActions";
import { ArrowBigUp } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { updateComment } from "@/utils/actions";
import { toggleUpvote } from "@/utils/actions";
import { usePathname } from "next/navigation";
import path from "path";

// interface CommentProps {
//   commentObj: {
//     commentId: string;
//     commenterName: string;
//     commenterId: string;
//     createdAt: string;
//     comment: string;
//     upvotes: string[];
//   };
//   user: {
//     id: string;
//   };
//   onOptimisticAdd?: (comment: any) => void;
// }

export default function Comment({
  initialQuestionUpvotes,
  commentObj,
  user,
  onOptimisticAdd,
}) {
  const [isEditing, setIsEditing] = React.useState(false);

  const [questionUpvotes, addOptimistic] = useOptimistic(
    initialQuestionUpvotes,
    (state, item) => {
      // console.log("optimistic", item);
      return item.action === "addUpvote"
        ? [
            ...state,
            {
              commenter: item.commenter,
              commentId: item.commentId,
              lectureId: item.lectureId,
            },
          ]
        : state.filter((upvote) => upvote.commenter !== item.commenter);
    }
  );

  const isUserUpvoted = useMemo(
    function () {
      return questionUpvotes.some((upvote) => upvote.commenter === user.id);
    },
    [questionUpvotes, user.id]
  );

  console.log("isUserUpvoted => ", isUserUpvoted);

  // const [isClicked, setIsClicked] = React.useState(false);

  const pathname = usePathname();

  const {
    commentId,
    commenterName,
    commenterId,
    createdAt,
    comment,
    lectureId,
  } = commentObj;
  const bindedUpdateComment = updateComment.bind(null, { commentId, pathname });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // await the server action so it runs to completion before closing the editor
    await bindedUpdateComment(formData);
    setIsEditing(false);
  };

  const upvoteComment = async (e) => {
    // console.log("upvoteComment is called");

    const optimistic = {
      commenter: user.id,
      commentId: commentId,
      lectureId: lectureId,
      action: isUserUpvoted ? "removeUpvote" : "addUpvote",
    };
    startTransition(() => {
      addOptimistic(optimistic);
    });

    await toggleUpvote(!isUserUpvoted, commentId, lectureId, pathname);
  };

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
          <form onSubmit={handleSubmit}>
            <input type="hidden" name="currentPath" value={pathname} />
            <input type="hidden" name="commentId" value={commentId} />
            <Textarea
              name="updatedComment"
              className="w-full"
              defaultValue={comment}
            />
            <div className="flex gap-3 items-center mt-3 ">
              <Button
                type="button"
                variant="outline"
                className="ml-auto"
                onClick={() => setIsEditing(false)}
              >
                {" "}
                Cancel
              </Button>{" "}
              <SubmitFormButton />
            </div>
          </form>
        ) : (
          <div>
            <p className="mt-2">{comment}</p>
            <div className="flex items-center gap-3 mt-3">
              <Button
                onClick={upvoteComment}
                className={`min-w-[65px] text-center shrink-0`}
                variant="secondary"
              >
                <ArrowBigUp fill={isUserUpvoted ? "black" : "none"} />
                {questionUpvotes.length}
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
          <CommentActions
            commentId={commentId}
            setIsEditing={setIsEditing}
            pathname={pathname}
            onOptimisticAdd={onOptimisticAdd}
          />
        )}
      </div>
    </li>
  );
}
