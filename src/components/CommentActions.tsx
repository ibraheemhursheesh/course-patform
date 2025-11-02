// @ts-nocheck
"use client";
import React, { startTransition } from "react";

import { deleteComment } from "@/utils/actions";
import { EllipsisVertical } from "lucide-react";

// shadcn components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { usePathname } from "next/navigation";

export default function CommentActions({
  commentId,
  setIsEditing,
  pathname,
  onOptimisticAdd,
}: {
  commentId: string;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  pathname: string;
  onOptimisticAdd: (comment: any) => void;
}) {
  const [showAlertDialog, setShowAlertDialog] = React.useState(false);

  function handleDelete() {
    const optimistic = {
      action: "deleteComment",
      commentId,
    };
    startTransition(() => {
      onOptimisticAdd && onOptimisticAdd(optimistic);
    });
  }

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" aria-label="Open menu" size="icon-sm">
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="end">
          <DropdownMenuLabel>Comment Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onSelect={() => setIsEditing(true)}>
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setShowAlertDialog(true)}>
              Delete
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialog open={showAlertDialog} onOpenChange={setShowAlertDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form action={deleteComment} onSubmit={handleDelete}>
              <input type="hidden" name="currentPath" value={pathname} />
              <input type="hidden" name="commentId" value={commentId} />
              <AlertDialogAction type="submit">Continue</AlertDialogAction>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
