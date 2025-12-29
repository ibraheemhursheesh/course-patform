// @ts-nocheck
import Keyboard from "@/components/svgs/Keyboard";
import Pieces from "@/components/svgs/Pieces";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { courseOne as course } from "@/data/course1";
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

  const watchedLessons = data[0] ? data[0]?.watchedLessons : [];

  console.log(watchedLessons);

  const lessonNumber = 60;

  const progress = Math.floor((watchedLessons.length / 100) * lessonNumber);

  return (
    <div className="">
      <div className="relative px-5 flex flex-wrap gap-10 justify-center">
        <div className="w-lg">
          <div className="w-full max-w-lg  sticky top-10 overflow-hidden">
            <Pieces />
            {/* <div className="bg-white">
              <div className="w-full max-w-lg mx-auto aspect-video mt-10 rounded-sm p-3 relative overflow-hidden bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 @container">
                
                <div className="absolute top-2 right-4 opacity-5 text-6xl font-bold"></div>
                <svg
                  width="80%"
                  height="auto"
                  viewBox="0 0 250 150"
                  className=" absolute -bottom-[20%] -right-[32%] opacity-50 rotate-14"
                  style={{
                    fill: "hsl(388, 50%, 50%)",
                    stroke: "hsl(388, 50%, 30%)",
                  }}
                >
                  <g
                    id="cube7"
                    dataSvgOrigin="0 -12.027886390686035"
                    transform="matrix(1,0,0,1,50,78)"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "0px 0px",
                    }}
                  >
                    <rect width="21" height="24" transform="skewY(30)"></rect>
                    <rect
                      width="21"
                      height="24"
                      transform="skewY(-30) translate(21 24.3)"
                    ></rect>
                    <rect
                      width="21"
                      height="21"
                      transform="scale(1.41,.81) rotate(45) translate(0 -21)"
                    ></rect>
                  </g>
                  <g
                    id="cube8"
                    dataSvgOrigin="0 -12.027886390686035"
                    transform="matrix(1,0,0,1,50,54)"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "0px 0px",
                    }}
                  >
                    <rect width="21" height="24" transform="skewY(30)"></rect>
                    <rect
                      width="21"
                      height="24"
                      transform="skewY(-30) translate(21 24.3)"
                    ></rect>
                    <rect
                      width="21"
                      height="21"
                      transform="scale(1.41,.81) rotate(45) translate(0 -21)"
                    ></rect>
                  </g>
                  <g
                    id="cube9"
                    dataSvgOrigin="0 -12.027886390686035"
                    transform="matrix(1,0,0,1,71,90)"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "0px 0px",
                    }}
                  >
                    <rect width="21" height="24" transform="skewY(30)"></rect>
                    <rect
                      width="21"
                      height="24"
                      transform="skewY(-30) translate(21 24.3)"
                    ></rect>
                    <rect
                      width="21"
                      height="21"
                      transform="scale(1.41,.81) rotate(45) translate(0 -21)"
                    ></rect>
                  </g>
                  <g
                    id="cube10"
                    dataSvgOrigin="0 -12.027886390686035"
                    transform="matrix(1,0,0,1,29,90)"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transformOrigin: "0px 0px",
                    }}
                  >
                    <rect width="21" height="24" transform="skewY(30)"></rect>
                    <rect
                      width="21"
                      height="24"
                      transform="skewY(-30) translate(21 24.3)"
                    ></rect>
                    <rect
                      width="21"
                      height="21"
                      transform="scale(1.41,.81) rotate(45) translate(0 -21)"
                    ></rect>
                  </g>
                </svg>
                <h3 className="uppercase text-[5.7cqi] font-bold text-zinc-600 relative max-w-[260px] ">
                  React From Scratch
                </h3>
              </div>
            </div> */}
            <h1 className="text-xl mobile:text-3xl text-center font-bold relative mt-3">
              React From Scratch
            </h1>

            <p className="mt-2 text-center">
              Learn React by building rich, interactive UI components from
              scratch.
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
              <div className="flex gap-3 items-center">
                <Clock size={30} />
                <div>
                  <p className="text-zinc-700 text-xs lg:text-sm">Length</p>
                  <p className="text-sm lg:text-base">5 hours, 35 minutes</p>
                </div>
              </div>
            </div>

            {/* <div className="w-[75%] mx-auto">
              {progress}%
              <Progress value={progress} className="mt-3" />
            </div> */}
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
                      const isWatched = watchedLessons.find(
                        (lesson) => lecture.id === lesson
                      );
                      return (
                        <li key={lecture.title} className="mt-3">
                          <Link
                            href={"react-from-scratch/" + lecture.id}
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
