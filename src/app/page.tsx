// @ts-nocheck
import LoginForm from "@/components/LoginForm";
import { createClient } from "@/lib/supabase/server";
import CourseList from "@/components/CourseList";

import "./mux-player.css";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  // console.log("data after login", data);
  const user = data?.user?.user_metadata;

  // console.log("data", data);

  return user ? (
    <div className=" pt-10 pb-25" id="in">
      <h1 className="text-4xl font-bold text-center">Access Your Courses</h1>
      <CourseList />
    </div>
  ) : (
    <LoginForm />
  );
}
