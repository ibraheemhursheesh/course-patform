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
  username,
}: {
  lesson: string;
  onOptimisticAdd?: (comment: any) => void;
  username: string;
}) {
  const pathname = usePathname();
  const formRef = React.useRef<HTMLFormElement>(null);

  // const [state, formAction, isPending] = React.useActionState(
  //   createComment,
  //   null
  // );

  // onSubmit: add optimistic comment then let the form submit to the server action
  const handleSubmit = (e) => {
    const fd = new FormData(e.currentTarget);
    const content = fd.get("commentContent");
    const optimistic = {
      action: "createComment",
      commentId: `temp-${Date.now()}`,
      commenterName: username,
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
    <form ref={formRef} action={createComment} onSubmit={handleSubmit}>
      <input type="hidden" name="currentPath" value={pathname} />
      <input type="hidden" name="lectureId" value={lesson} />
      <Textarea name="commentContent" />
      <Button type="submit" className="ml-auto mt-5 flex items-center gap-3 ">
        Comment
      </Button>
    </form>
  );
}
