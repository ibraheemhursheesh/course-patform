// @ts-nocheck
"use server";
import { redirect } from "next/navigation";
import { createClient } from "./server";

// const supabase = createClient();

export const loginWithGoogle = async () => {
  const supabase = await createClient();

  // console.log(supabase);
  const auth_callback_url = "http://localhost:3000/auth/callback";
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: auth_callback_url,
    },
  });

  console.log("data from login", data);

  redirect(data.url);
};

export const logoutWithGoogle = async () => {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  // redirect("/");
};

export const createNote = async (formData) => {
  // console.log("formData", formData);
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("notes")
    .insert({
      user_id: user.id,
      note_title: formData.get("noteTitle"),
      note_content: formData.get("noteContent"),
    })
    .select();

  if (error) console.error(error);
  // else console.log("Note created:", data);

  // redirect("/");
};

export const deleteNote = async (noteId) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // console.log(user);

  const { error } = await supabase
    .from("notes")
    .delete()
    .eq("id", noteId)
    .eq("user_id", user.id);
  if (error) console.error(error);
  // else console.log("Note deleted");
};

export const createComment = async (formData) => {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Inserts comment into 'comments' table
  const { data, error } = await supabase.from("comments").insert({
    commenterId: user.id,
    commenterName: user.user_metadata.full_name,
    comment: formData.get("commentContent"),
    lectureId: formData.get("lectureId"),
  });

  if (error) console.error(error);
};

export const deleteComment = async (formData) => {
  console.log("delete Comment");
  console.log(formData.get("commentId"));
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // console.log(user);

  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("commentId", formData.get("commentId"))
    .eq("commenterId", user.id);
  if (error) console.error(error);
  else console.log("Comment deleted");
};

export const updateComment = async (formData) => {
  console.log("update Comment");
  console.log(formData.get("updatedComment"));
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("comments")
    .update({
      comment: formData.get("updatedComment"),
    })
    .eq("commentId", formData.get("commentId"))
    .eq("commenterId", user.id);
  // .select();

  if (error) console.error(error);
  else console.log("Comment updated:", data);
};
