// @ts-nocheck
"use server";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { headers } from "next/headers";

// const supabase = createClient();

export const loginWithOTP = async (formData) => {
  const supabase = await createClient();

  const awaitedHeaders = await headers();
  const origin = awaitedHeaders.get("origin");

  const email = formData.get("email");
  const { data, error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // set this to false if you do not want the user to be automatically signed up
      // shouldCreateUser: false,
    },
  });

  if (error) {
    console.error("Error sending OTP:", error.message);
    return error.message;
  }
  return "ok";
  // redirect(`${origin}/confirm-password`);
};

export const verifyOneTimePassword = async (email, token) => {
  const supabase = await createClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.verifyOtp({
    email,
    token,
    type: "email",
  });

  if (error) {
    console.error("error verifying OTP", error.message);
    return error.message;
  }

  return "ok";
};

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

  console.log("user data =>", data);
  // const { er } = await supabase
  //   .from("user_data")
  //   .insert({ user_id: userId });

  if (data?.url) redirect(data.url);
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

export const addWatchedLesson = async (lesson) => {
  console.log("lesson from server action", lesson);
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  console.log("userid", user.id);

  const { data: current, error: currentError } = await supabase
    .from("user_data")
    .select()
    .eq("user_id", user.id);

  console.log("WHAT IS INSIDE DATABASE", current);
  if (currentError) console.error(currentError);

  if (!current[0]) {
    const { data, error } = await supabase.from("user_data").insert({
      user_id: user?.id,
      watchedLessons: [],
    });

    if (error)
      console.error("error while creating watchedLessons column", error);
  }

  const isWatched = current[0]
    ? current[0].watchedLessons.find(
        (watchedLesson) => watchedLesson === lesson
      )
    : false;

  if (isWatched) return;
  const watchedLessons = current[0]?.watchedLessons;
  const updated = [...(watchedLessons || []), lesson];

  const { data, error } = await supabase
    .from("user_data")
    .update({ watchedLessons: updated })
    .eq("user_id", user.id);

  revalidatePath("/react-from-scratch");

  if (error) console.error(error.message);
};