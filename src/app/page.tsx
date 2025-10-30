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

  return user ? (
    <>
      <CourseList />
      <p>{user.name}</p>
      <button onClick={logoutWithGoogle}>Logout</button>
    </>
  ) : (
    <LoginForm />
  );
}
