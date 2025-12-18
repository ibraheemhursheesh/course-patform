// @ts-nocheck
import Keyboard from "@/components/svgs/Keyboard";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { courseOne as course } from "@/data/course1";
import { createClient } from "@/lib/supabase/server";
import { watch } from "fs";
import { Check, Clapperboard, SquareCheck } from "lucide-react";
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
    <div>
      <div className="relative px-5">
        <div className="grow">
          <div className="sticky top-10 w-full">
            <Keyboard />
            <div className="w-full max-w-lg mx-auto aspect-video mt-10 rounded-sm p-3 relative overflow-hidden bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 @container">
              {" "}
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
              </svg>{" "}
              <h3 className="uppercase text-[5.7cqi] font-bold text-zinc-600 relative max-w-[260px] ">
                React From Scratch
              </h3>
            </div>
            <h1 className="text-3xl mobile:text-[3.5rem] clas font-bold relative mt-3">
              React From Scratch
            </h1>
            <div className="w-[75%]">
              {progress}%
              <Progress value={progress} className="mt-3" />
            </div>
          </div>
        </div>
        <div className="relative bg-white grow py-4">
          <div>
            <ul className="max-w-[1115px] mx-auto">
              {course.map((section, index) => (
                <li key={section.sectionTitle} className="mt-7.5">
                  <h2>
                    <p className="text-sm text-zinc-700">Module {index + 1}</p>
                    <p>{section.sectionTitle}</p>
                  </h2>

                  <ul
                    className={`mt-3 card:grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-x-4 gap-y-10`}
                  >
                    {section.lectures.map((lecture, index) => {
                      const isWatched = watchedLessons.find(
                        (lesson) => lecture.id === lesson
                      );
                      return (
                        <li
                          key={lecture.title}
                          className="card:not-first:mt-0 not-first:mt-5 "
                        >
                          <Link
                            href={lecture.id}
                            className="flex mobile:flex-col gap-3 mobile:gap-0"
                          >
                            <div className="hidden mobile:block w-full aspect-video rounded-sm p-3 relative overflow-hidden bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 @container">
                              {" "}
                              <div className="absolute top-2 right-4 opacity-5 text-6xl font-bold">
                                #{index + 1}
                              </div>
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
                                  <rect
                                    width="21"
                                    height="24"
                                    transform="skewY(30)"
                                  ></rect>
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
                                  <rect
                                    width="21"
                                    height="24"
                                    transform="skewY(30)"
                                  ></rect>
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
                                  <rect
                                    width="21"
                                    height="24"
                                    transform="skewY(30)"
                                  ></rect>
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
                                  <rect
                                    width="21"
                                    height="24"
                                    transform="skewY(30)"
                                  ></rect>
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
                              </svg>{" "}
                              <div className=" pointer-events-none absolute bottom-1.5 right-1.5 rounded bg-black/70 px-1 py-0.5 text-xs font-semibold tracking-tight text-white">
                                {lecture.duration}
                              </div>
                              <h3 className="uppercase text-[5.7cqi] font-bold text-zinc-600 relative max-w-[260px] ">
                                {lecture.title}{" "}
                              </h3>
                            </div>
                            {/* <Clapperboard className="mobile:hidden shrink-0 mt-1" /> */}
                            <div className="mobile:hidden opacity-7 text-3xl font-bold">
                              #{index + 1}
                            </div>
                            <div className="border-b pb-1.5 mobile:border-b-0 mobile:pb-0">
                              <h3 className={`text-lg font-medium`}>
                                {lecture.title}
                              </h3>
                              <p className="text-sm text-zinc-600 mt-2">
                                {lecture.description}
                              </p>
                            </div>
                            {isWatched && (
                              <Check className="mobile:hidden shrink-0 self-center stroke-zinc-600" />
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
          <div>
            <h2 className="text-xl font-semibold md:text-2xl mt-10">
              Leave Us a Review on The Course
            </h2>
            <p className="text-zinc-700 text-sm mobile:text-base">
              Your feedback might be shown along with your username on the
              course page.
            </p>
            <Textarea className="bg-white min-h-50 mt-5" />
          </div>
        </div>{" "}
      </div>
      <div className="mt-40"></div>
    </div>
  );
}
