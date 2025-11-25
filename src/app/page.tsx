// @ts-nocheck
import LoginForm from "@/components/LoginForm";
import { createClient } from "@/lib/supabase/server";
import CourseList from "@/components/CourseList";

import "./mux-player.css";
import BackgroundGradientLayer from "@/components/BackgroundGradientLayer";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  // console.log("data after login", data);
  const user = data?.user?.user_metadata;

  // console.log("data", data);
  // return (
  //   <div className=" pt-10 pb-25" in="ind">
  //     <h1 className="text-4xl font-bold text-center">Access Your Courses</h1>
  //     <CourseList />
  //   </div>
  // );
  return user ? (
    <div className=" pt-10 pb-25" in="ind">
      <h1 className="text-4xl font-bold text-center">Access Your Courses</h1>
      <CourseList />
    </div>
  ) : (
    // <LoginForm />
    <LandingPage />
  );
}

function LandingPage() {
  return (
    <div className="px-10">
      <div className=" ">
        <h1 className="text-[3.5rem] leading-18 max-w-3xl mx-auto font-bold text-center pt-28">
          Turning your expertise into revenue just got easier
        </h1>
        <p className="text-xl text-zinc-600 max-w-3xl mx-auto text-center mt-2">
          Create and sell online courses, build vibrant communities, and
          monetize memberships - all on a single, scalable platform.
        </p>
        <Button className="mt-5 block h-12 w-full max-w-sm mx-auto ">
          Start Learning
        </Button>
      </div>
      <div className="max-w-4xl mx-auto">
        <section className="mt-25">
          <h2 className="text-xl font-semibold md:text-2xl">
            Deep dive into foundational topics
          </h2>
          <p className="text-zinc-600 lg:text-lg max-w-prose mt-1">
            Our courses don't just tell you to copy and paste code. We focus on
            the why behind the code, showing you how to build apps like a
            seasoned developer.
          </p>
        </section>{" "}
        <CourseList />
        <section className="mx-auto pt-15 relative">
          {/* <BackgroundGradientLayer /> */}
          <div className="relative">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-black sm:text-left lg:px-2 lg:text-4xl">
              Meet your instructor
            </h2>
            <div className="flex flex-col sm:mt-8 sm:flex-row lg:mt-0">
              <div className="max-w-xl sm:pr-8 lg:max-w-[75ch] lg:pr-0">
                <p>
                  Hey! We're Sam Selikoff and Ryan Toronto, and together we've
                  been teaching frontend development for over eight years
                  through our podcast, in-person trainings, conference talks,
                  and more recently on our YouTube channels. We love sharing
                  what excites us about frontend development. Check out our
                  YouTube channels and conference talks to get a feel for our
                  teaching style.
                </p>
              </div>
              <div className="-order-1 mx-auto my-10 flex max-w-[250px] justify-center sm:order-1 sm:my-0 sm:w-1/3 sm:flex-shrink-0 sm:items-start md:max-w-none lg:my-12 lg:hidden">
                <Image src="/avatar2.png" width="175" height="175" />
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto mt-15">
          <div className="flex gap-12">
            <div>
              {" "}
              <h2 className="text-center text-3xl font-semibold tracking-tight text-black sm:text-left lg:px-2 lg:text-4xl">
                Lifetime pricing
              </h2>
              <p className="mt-7.5">
                Our pricing is simple: one payment, lifetime access. A lifetime
                membership includes all of our courses — forever. No
                subscriptions, no recurring fees, no hassle.
              </p>
              <p className="mt-3">
                Make a one-time payment and enjoy full access without the worry
                of monthly bills or unused memberships. It's a simple,
                stress-free way to learn React and frontend development on your
                own terms.
              </p>
            </div>
            <div className="shrink-0 w-xs px-3">
              <p className="text-sm font-semibold text-center text-gray-800">
                Pay once, access forever
              </p>
              <div className="mt-6 text-center">
                <span className="text-6xl font-bold tracking-tighter text-gray-800">
                  $349
                </span>
                <span className="text-sm font-semibold text-gray-500">USD</span>
              </div>
              <Button className="mt-4.5 w-full">Buy now</Button>
              <p className="mt-4.5 text-center">
                Invoices and receipts available for easy company reimbursement.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-15"></div>
    </div>
  );
}