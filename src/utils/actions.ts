// @ts-nocheck
"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

// const supabase = createClient();

export const loginWithGoogle = async () => {
  const supabase = await createClient();

  const awaitedHeaders = await headers();

  const origin = awaitedHeaders.get("origin");

  // // console.log(supabase);
  const auth_callback_url = `${origin}/auth/callback`;
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: auth_callback_url,
    },
  });

  // console.log("data from login", data);

  console.log(data.url);

  redirect(data.url);
};

export const logoutWithGoogle = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  redirect("/");
};

export const createComment = async (
  { lectureId, pathname, type, replyTo, commenterAvatar },
  formData
) => {
  // console.log("createComment is called");
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const commentContent = formData.get("commentContent");

  // console.log("currentPath", pathname);

  const { data, error } = await supabase.from("comments").insert({
    commenterId: user.id,
    commenterName: user.user_metadata.full_name,
    comment: commentContent,
    lectureId: lectureId,
    type,
    replyTo,
    commenterAvatar,
  });

  if (error) {
    console.error(error);
    return;
  }

  // revalidate the page so server components refetch fresh data
  try {
    revalidatePath(pathname);
  } catch (e) {
    console.error("revalidatePath error:", e);
  }
};

export const deleteComment = async (formData) => {
  // console.log("delete Comment");
  // console.log(formData.get("commentId"));
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const currentPath = formData.get("currentPath");

  // // console.log(user);

  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("commentId", formData.get("commentId"))
    .eq("commenterId", user.id);
  if (error) console.error(error);
  else {
    // console.log("Comment deleted");
    try {
      revalidatePath(currentPath);
    } catch (e) {
      console.error("revalidatePath error:", e);
    }
  }
};

export const updateComment = async ({ commentId, pathname }, formData) => {
  // console.log("update Comment");
  // // console.log(formData.get("updatedComment"));
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("comments")
    .update({
      comment: formData.get("updatedComment"),
    })
    .eq("commentId", commentId)
    .eq("commenterId", user.id);

  if (error) console.error(error);
  else {
    // console.log("Comment updated:", data);
    try {
      revalidatePath(pathname);
    } catch (e) {
      console.error("revalidatePath error:", e);
    }
  }
};

export const toggleUpvote = async (toggle, commentId, lectureId, pathname) => {
  // console.log("toggleUpvote is called", toggle);
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (toggle === true) {
    const { data, error } = await supabase.from("question_upvotes").insert({
      commenter: user.id,
      commentId: commentId,
      lectureId,
    });
    if (error) console.error(error);
    else {
      // console.log("upvote added");
      try {
        revalidatePath(pathname);
      } catch (e) {
        console.error("revalidatePath error:", e);
      }
    }
  } else {
    const { data, error } = await supabase
      .from("question_upvotes")
      .delete()
      .eq("commenter", user.id)
      .eq("commentId", commentId);
    if (error) console.error(error);
    else {
      // console.log("upvote removed");
      try {
        revalidatePath(pathname);
      } catch (e) {
        console.error("revalidatePath error:", e);
      }
    }
  }
};
