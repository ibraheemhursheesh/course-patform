// @ts-nocheck

import { createClient } from "@/utils/server";

import { Suspense } from "react";
import Comments from "./Comments";
import CreateCommentForm from "./CreateCommentForm";

import { cache } from "react";

// const cachedComments = cache(async (lesson) => {
//   const supabase = await createClient();
//   const { data: comments } =
//     (await supabase
//       .from("comments")
//       .select()
//       .eq("lectureId", lesson)
//       .order("createdAt", { ascending: false })) ?? [];
//   return comments;
// });

// Example of a custom fetch function for Supabase (simplified)

async function fetchSupabaseData(query, cacheOptions = {}) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  const response = await fetch(`${supabaseUrl}/rest/v1/${query}`, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
    },
    ...cacheOptions, // Pass Next.js cache options like { cache: 'force-cache', next: { revalidate: 60 } }
  });

  if (!response.ok) {
    throw new Error(`Supabase fetch failed: ${response.statusText}`);
  }

  return response.json();
}

export default async function CommentsSection({ lesson }) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const res = await fetch(`${"http://localhost:3000"}/api/comments/${lesson}`, {
    cache: "no-store", // Next.js-level caching
  });

  const comments = await res.json();

  // const comments = await cachedComments(lesson);
  // const newcomments = await cachedComments(lesson);

  // const { data: comments } =
  //   (await supabase
  //     .from("comments")
  //     .select()
  //     .eq("lectureId", lesson)
  //     .order("createdAt", { ascending: false })) ?? [];

  // const comments = await fetchSupabaseData(`comments`, {
  //   cache: "no-store",
  // });

  // console.log("comments here =>", comments);

  return (
    <div className="p-7">
      <CreateCommentForm lesson={lesson} />
      <h2>Comments</h2>
      <Comments comments={comments} user={user} />
    </div>
  );
}
