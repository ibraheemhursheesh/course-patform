// @ts-nocheck
import LoginForm from "@/components/LoginForm";
import { createClient } from "@/utils/server";
import { logoutWithGoogle } from "@/utils/actions";
import CourseList from "@/components/CourseList";
export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  console.log("data after login", data);
  const user = data?.user?.user_metadata;

  console.log("data", data);

  return user ? (
    <>
      <h1>Learn how to build modern user interfaces for the web</h1>
      <p>
        High-quality videos, a private Discord server, and enough reference code
        to help you make the web what you always dreamed it could be.
      </p>
      <h2 className="text-4xl font-bold text-center mt-7">
        Access Your Courses
      </h2>
      <CourseList />
      {/* <p>{user.name}</p>
       */}
      <button onClick={logoutWithGoogle}>Logout</button>
    </>
  ) : (
    <LoginForm />
  );
}
