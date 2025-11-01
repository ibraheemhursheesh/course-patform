// @ts-nocheck
"use client";
import React from "react";

import { createComment } from "@/utils/actions";

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { Spinner } from "./ui/spinner";

export default function CreateCommentForm({ lesson }: { lesson: string }) {
  const pathname = usePathname();
  console.log("pathname =>", typeof pathname);
  const [state, formAction, isPending] = React.useActionState(
    createComment,
    null
  );

  return (
    <form action={formAction}>
      <input type="hidden" name="currentPath" />
      <input type="hidden" name="lectureId" value={lesson} />
      <Textarea name="commentContent" />
      <Button type="submit" className="ml-auto mt-5 flex items-center gap-3 ">
        {isPending ? (
          <>
            Submitting..
            <Spinner />
          </>
        ) : (
          "Comment"
        )}
      </Button>
    </form>
  );
}
