// @ts-nocheck
import AnimationsSvg from "@/components/svgs/AnimationsSvg";
import Keyboard from "@/components/svgs/Keyboard";
import Pieces from "@/components/svgs/Pieces";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { courseTwo as course } from "@/data/course1";
import { createClient } from "@/lib/supabase/server";
import { watch } from "fs";
import { Check, Clapperboard, Clock, SquareCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function page() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("user_data")
    .select()
    .eq("user_id", user?.id);

  console.log(data);

  const watchedLessons = data[0] ? data[0]?.watchedLessons : {};

  console.log("watchedLessons", watchedLessons);

  const lessonNumber = 30;

  const progress = watchedLessons["svgs"]
    ? Math.floor((watchedLessons["svgs"]?.length * 100) / lessonNumber)
    : 0;

  console.log("svgs lessons", watchedLessons["svgs"]);

  return (
    <div className="">
      <div className="relative px-5 flex flex-wrap gap-10 justify-center">
        <div className="w-lg">
          <div className="w-full max-w-lg  sticky top-10 overflow-hidden">
            <div className="border-2 border-zinc-300 rounded-md">
              <AnimationsSvg />
            </div>

            <h1 className="text-xl mobile:text-3xl text-center font-bold relative mt-3">
              Scalable Vector Graphics
            </h1>

            <p className="mt-2 text-center">
              Learn how to create, design, and animate beautiful vector graphics
              on the web.
            </p>
            <div className="flex flex-wrap gap-5 mt-8 mb-5">
              <div className="flex gap-3">
                <Image
                  alt="Instructor Avatar"
                  className="rounded-full shrink-0 size-10.5"
                  src="/avatar2.png"
                  width={50}
                  height={50}
                />
                <div>
                  <p className="text-zinc-700 text-xs lg:text-sm">Taught by</p>
                  <p className="text-sm lg:text-base">Ibrahim Harchiche</p>
                </div>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <Clock size={30} />
                <div>
                  <p className="text-zinc-700 text-xs lg:text-sm">Length</p>
                  <p className="text-sm lg:text-base">3 hours, 15 minutes</p>
                </div>
              </div>
            </div>

            <div className="w-[75%] mx-auto">
              {progress}%
              <Progress value={progress} className="mt-3" />
            </div>
          </div>
        </div>
        <div className="relative bg-white py-4 w-lg">
          <div className="">
            <ul className="">
              {course.map((section, index) => (
                <li key={section.sectionTitle} className="mt-7.5">
                  <h2>
                    <p className="text-sm text-zinc-700">Module {index + 1}</p>
                    <p>{section.sectionTitle}</p>
                  </h2>

                  <ul className={``}>
                    {section.lectures.map((lecture, index) => {
                      const isWatched = watchedLessons["svgs"]
                        ? watchedLessons["svgs"].find(
                            (lesson) => lecture.id === lesson
                          )
                        : false;
                      return (
                        <li key={lecture.title} className="mt-3">
                          <Link
                            href={"/svgs/" + lecture.id}
                            className="flex gap-3"
                          >
                            <div className=" opacity-7 text-3xl font-bold">
                              #{index + 1}
                            </div>
                            <div className="border-b pb-1.5">
                              <h3 className={`text-lg font-medium`}>
                                {lecture.title}
                              </h3>
                              <p className="text-sm text-zinc-600 mt-2">
                                {lecture.description}
                              </p>
                            </div>
                            {isWatched && (
                              <Check className="shrink-0 self-center stroke-zinc-600" />
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h2 className="text-xl font-semibold md:text-2xl mt-10">
              Leave Us a Review on The Course
            </h2>
            <p className="text-zinc-700 text-sm mobile:text-base">
              Your feedback might be shown along with your username on the
              course page.
            </p>
            <Textarea className="bg-white min-h-50 mt-5" />
          </div> */}
        </div>{" "}
      </div>
      <div className="mt-40"></div>
    </div>
  );
}
