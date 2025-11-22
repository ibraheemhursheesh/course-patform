// @ts-nocheck
"use client";

import supabase from "@/lib/supabase/client";

import React, { startTransition, useMemo, useOptimistic } from "react";

import SubmitFormButton from "@/components/SumbitFormButton";

import { Button } from "@/components/ui/button";
import CommentActions from "@/components/CommentActions";
import { ArrowBigUp, Heart, MessageSquareText } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { createComment, updateComment } from "@/utils/actions";
import { toggleUpvote } from "@/utils/actions";
import { usePathname } from "next/navigation";
import path from "path";
import Image from "next/image";

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
  initialCommentReplies = [],
  initialQuestionUpvotes,
  allQuestionUpvotes,
  commentObj,
  user,
  onOptimisticAdd,
  type,
}) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [isReplying, setIsReplying] = React.useState(false);
  const [repliesVisible, setRepliesVisible] = React.useState(false);

  const [commentReplies, addOptimisticReplies] = useOptimistic(
    initialCommentReplies,
    (state, item) => {
      return item.action === "deleteComment"
        ? state.filter((reply) => reply.commentId !== item.commentId)
        : state;
    }
  );

  const [questionUpvotes, addOptimistic] = useOptimistic(
    initialQuestionUpvotes,
    (state, item) => {
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

  const isUpvotedByUser = useMemo(
    function () {
      return questionUpvotes.some((upvote) => upvote.commenter === user.id);
    },
    [questionUpvotes, user.id]
  );

  // console.log("isUpvotedByUser =>", isUpvotedByUser);

  // console.log("commentReplies", commentReplies);

  const pathname = usePathname();
  // console.log("commentObj", commentObj);
  const {
    commentId,
    commenterName,
    commenterId,
    createdAt,
    comment,
    lectureId,
    commenterAvatar,
  } = commentObj;

  const bindedUpdateComment = updateComment.bind(null, {
    commentId,
    pathname,
  });

  const bindedCreateComment = createComment.bind(null, {
    lectureId,
    pathname,
    type: "reply",
    replyTo: commentId,
    commenterAvatar: user.user_metadata.avatar_url,
  });

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // await the server action so it runs to completion before closing the editor
    await bindedUpdateComment(formData);
    setIsEditing(false);
  };

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    // await the server action so it runs to completion before closing the editor
    await bindedCreateComment(formData);
    setIsReplying(false);
    setRepliesVisible(true);
  };

  const upvoteComment = async (e) => {
    // // console.log("upvoteComment is called");

    const optimistic = {
      commenter: user.id,
      commentId: commentId,
      lectureId: lectureId,
      action: isUpvotedByUser ? "removeUpvote" : "addUpvote",
    };
    startTransition(() => {
      addOptimistic(optimistic);
    });

    await toggleUpvote(!isUpvotedByUser, commentId, lectureId, pathname);
  };

  const handleReply = (e) => {
    // console.log("Reply clicked");
    setIsReplying((isReplying) => !isReplying);
  };

  const date = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  console.log("commenterAvatar", commenterAvatar);

  return (
    <li className={` ${type === "comment" ? "mt-7" : "mt-5"} flex flex-col   `}>
      <div className="flex gap-5">
        {" "}
        {commenterAvatar ? (
          <Image
            src={commenterAvatar}
            alt={commenterName}
            width={40}
            height={40}
            className="rounded-full self-start"
          />
        ) : (
          <div className="size-10 bg-black rounded-full self-start"></div>
        )}
        {/* <div className="bg-white"> */}
        <div className="grow flex gap-5 bg-[#fbfbfb] p-5 rounded-md border ">
          <div className="grow">
            {" "}
            <div className="flex gap-2 text-sm">
              <p className="font-bold">{commenterName}</p>
              <p className="text-zinc-700">{date}</p>
            </div>
            {isEditing ? (
              <form className="mt-2" onSubmit={handleUpdateSubmit}>
                <input type="hidden" name="currentPath" value={pathname} />
                <input type="hidden" name="commentId" value={commentId} />
                <Textarea
                  name="updatedComment"
                  className="w-full min-h-30 max-h-30 bg-white"
                  defaultValue={comment}
                />
                <div className="flex gap-3 items-center mt-3 ">
                  <Button
                    type="button"
                    variant="outline"
                    className="ml-auto rounded-full"
                    onClick={() => setIsEditing(false)}
                  >
                    {" "}
                    Cancel
                  </Button>{" "}
                  <SubmitFormButton>Update</SubmitFormButton>
                </div>
              </form>
            ) : (
              <div>
                <p className="mt-2">
                  {/* {comment.length > 350
                    ? comment.slice(0, 350) + "..."
                    : comment} */}
                  {comment}
                </p>
                <div className="flex items-center gap-3 mt-3 flex-wrap">
                  <Button
                    onClick={upvoteComment}
                    className={`min-w-[75px] text-center shrink-0 rounded-full`}
                    variant="outline"
                  >
                    <Heart fill={isUpvotedByUser ? "black" : "none"} />

                    {questionUpvotes.length}
                  </Button>
                  {type === "comment" && (
                    <Button
                      onClick={handleReply}
                      className="min-w-[75px] text-center shrink-0 rounded-full"
                      variant="outline"
                    >
                      <MessageSquareText />
                      Reply
                    </Button>
                  )}
                  {commentReplies.length > 0 && (
                    <Button
                      className="min-w-[75px] text-center shrink-0 rounded-full"
                      variant="outline"
                      onClick={() => setRepliesVisible(!repliesVisible)}
                    >
                      {repliesVisible ? "Hide" : "View"} {commentReplies.length}{" "}
                      repl
                      {commentReplies.length === 1 ? "y" : "ies"}
                    </Button>
                  )}
                </div>
              </div>
            )}
            {isReplying && (
              <form onSubmit={handleReplySubmit}>
                <Textarea
                  className="min-h-30 max-h-30 mt-5 bg-white"
                  name="commentContent"
                />

                <div className="flex gap-3 items-center mt-3">
                  <Button
                    onClick={() => setIsReplying(false)}
                    type="button"
                    variant="outline"
                    className="ml-auto  rounded-full"
                  >
                    Cancel
                  </Button>
                  <SubmitFormButton>Continue</SubmitFormButton>
                </div>
              </form>
            )}
          </div>

          {user.id === commenterId && (
            <CommentActions
              commentId={commentId}
              setIsEditing={setIsEditing}
              setIsReplying={setIsReplying}
              pathname={pathname}
              onOptimisticAdd={onOptimisticAdd}
            />
          )}
        </div>
        {/* </div> */}
      </div>

      {repliesVisible && (
        <ul
          // style={{ interpolateSize: "allow-keywords" }}
          // className="mt-5 pl-5 starting:h-0 h-auto duration-500 ease-out overflow-y-hidden bg-zinc-300"
          className=" ml-15"
        >
          {commentReplies.map((reply, index) => {
            const questionUpvotes = allQuestionUpvotes.filter(
              (upvote) => upvote.commentId === reply.commentId
            );
            return (
              <Comment
                key={index}
                initialCommentReplies={[]}
                initialQuestionUpvotes={questionUpvotes}
                allQuestionUpvotes={[]}
                commentObj={reply}
                user={user}
                onOptimisticAdd={(c) => addOptimisticReplies(c)}
                type={reply.type}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
