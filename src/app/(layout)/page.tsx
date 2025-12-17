// @ts-nocheck
import LoginForm from "@/components/LoginForm";
import { createClient } from "@/lib/supabase/server";
import CourseList from "@/components/CourseList";

import "@/app/mux-player.css";
import BackgroundGradientLayer from "@/components/BackgroundGradientLayer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import Course from "@/components/Course";

export default async function Home() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  // console.log("data after login", data);
  const user = data?.user?.user_metadata;

  return user ? (
    <div className="pt-10 pb-25" in="ind">
      <Dashboard />
    </div>
  ) : (
    <LandingPage />
  );
}

function LandingPage() {
  return (
    <div className=" pb-25">
      <div className="px-7 sm:px-10">
        <h1 className="text-[42px] leading-11.5 sm:text-[3.5rem] sm:leading-16 max-w-3xl mx-auto font-bold text-center pt-28">
          Learn how to craft stunning user interfaces
        </h1>
        <p className="text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto text-center mt-2">
          high-quality courses that teaches you how to build performant,
          accessible, cutting-edge web interfaces
        </p>
        <Link
          href="/login"
          className="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 mt-5 block w-full max-w-sm mx-auto h-12 px-4 has-[>svg]:px-3 text-center leading-12"
        >
          Start Learning
        </Link>
      </div>
      <div className="max-w-4xl mx-auto px-5">
        <section className="mt-25 pt-4.5">
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
              <div className="mt-5 max-w-xl sm:pr-8 lg:max-w-[75ch] lg:pr-0">
                <p>
                  Hey! I'm Ibrahim Harchiche, I've been teaching frontend
                  development for over eight years through our podcast,
                  in-person trainings, conference talks, and more recently on my
                  YouTube channel. I love sharing what excites me about frontend
                  development. Check out my YouTube channel and conference talks
                  to get a feel for my teaching style.
                </p>
              </div>
              <div className="-order-1 mx-auto my-10 flex max-w-[250px] justify-center sm:order-1 sm:my-0 sm:w-1/3 sm:shrink-0 sm:items-start md:max-w-none lg:my-12">
                <Image
                  alt="avatar"
                  src="/avatar2.png"
                  width="175"
                  height="175"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="mx-auto mt-15">
          <div className="flex flex-wrap justify-center gap-12">
            <div className="w-sm grow">
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
            <div className=" w-xs px-3">
              <p className="text-sm font-semibold text-center text-zinc-800">
                Pay once, access forever
              </p>
              <div className="mt-6 text-center">
                <span className="text-6xl font-bold tracking-tighter text-zinc-800">
                  $349
                </span>
                <span className="text-sm font-semibold text-zinc-500">USD</span>
              </div>
              <Link
                className="rounded-lg items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 mt-5 block w-full max-w-sm mx-auto h-10 px-4 has-[>svg]:px-3 text-center leading-10"
                href="/login"
              >
                Buy now
              </Link>
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

function Dashboard() {
  return (
    <div className="px-10 pb-25 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Access Your Courses</h1>
      <CourseList insideDashboard={true} />
    </div>
  );
}