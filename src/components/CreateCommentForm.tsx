// @ts-nocheck
"use client";
import React, { startTransition } from "react";

import { createComment } from "@/utils/actions";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Spinner } from "./ui/spinner";

export default function CreateCommentForm({
  lesson,
  onOptimisticAdd,
  userData,
}: {
  lesson: string;
  onOptimisticAdd?: (comment: any) => void;
  userData: any;
}) {
  const pathname = usePathname();
  const formRef = React.useRef<HTMLFormElement>(null);

  const bindedCreateComment = createComment.bind(null, {
    lectureId: lesson,
    pathname,
    type: "comment",
    replyTo: null,
    commenterAvatar: userData.user_metadata.avatar_url,
  });

  // onSubmit: add optimistic comment then let the form submit to the server action
  const handleSubmit = (e) => {
    const fd = new FormData(e.currentTarget);
    const content = fd.get("commentContent");
    const optimistic = {
      action: "createComment",
      commentId: `temp-${Date.now()}`,
      commenterName: userData.user_metadata.full_name,
      commenterAvatar: userData.user_metadata.avatar_url,
      comment: content,
      type: "comment",
      replyTo: null,
      commenterId: "local",
      lectureId: lesson,
      createdAt: new Date().toISOString(),
      upvotes: [],
    };
    startTransition(() => {
      onOptimisticAdd && onOptimisticAdd(optimistic);
    });
  };

  return (
    <form ref={formRef} action={bindedCreateComment} onSubmit={handleSubmit}>
      <Textarea name="commentContent" />
      <Button
        type="submit"
        className="ml-auto mt-5 flex items-center gap-3 rounded-full "
      >
        Comment
      </Button>
    </form>
  );
}
