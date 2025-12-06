// @ts-nocheck
import Keyboard from "@/components/svgs/Keyboard";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { courseOne as course } from "@/data/course1";
import { createClient } from "@/lib/supabase/server";
import { watch } from "fs";
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
      <div className="relative px-10">
        <div className=" grow px-15">
          <div className="sticky top-10 w-full">
            <Keyboard />
            <h1 className="text-[3.5rem] leading-18 font-bold text-center relative mt-10">
              React From Scratch
            </h1>
            <div className="w-[75%] mx-auto">
              <div>Your progress</div>
              {progress}%
              <Progress value={progress} className="mt-3" />
            </div>
          </div>
        </div>
        <div className="relative bg-white grow py-4 px-6">
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
                          className="card:not-first:mt-0 not-first:mt-10"
                        >
                          <Link
                            href={lecture.id}
                            className="flex flex-col gap-2"
                          >
                            <div className="w-full aspect-video rounded-sm p-3 relative overflow-hidden bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 @container">
                              {" "}
                              <div className="absolute top-2 right-4 opacity-5 text-6xl font-bold">
                                #{index + 1}
                              </div>
                              {/* <svg
                                className="text-gray-950 [--site-background:var(--color-white)] dark:text-white dark:[--site-background:var(--color-gray-950)] absolute top-15 left-2.5 opacity-40"
                                width="168"
                                height="108"
                                viewBox="0 0 112 72"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g clip-path="url(#clip0_408_5745)">
                                  <rect
                                    width="63"
                                    height="63"
                                    rx="4"
                                    transform="matrix(0.866025 -0.5 0.866025 0.5 1.92969 39.814)"
                                    stroke="currentColor"
                                    strokeDasharray="3 3"
                                  ></rect>
                                  <path
                                    d="M6.82052 32.0748C4.71896 30.8759 4.9198 28.8839 7.24809 27.8339L42.7856 11.8071C44.6906 10.948 47.3962 11.0195 49.1572 11.9756L100.957 40.0964C102.762 41.0766 103.015 42.6809 101.546 43.8334L73.7036 65.6789C71.933 67.0682 68.4396 67.2268 66.3145 66.0145L6.82052 32.0748Z"
                                    fill="currentColor"
                                    fillOpacity="0.3"
                                  ></path>
                                  <path
                                    d="M74.1457 62.6688L101.618 43.5542C102.344 43.0493 102.721 42.4339 102.745 41.8139V38.6818C102.722 38.0961 102.384 37.5131 101.729 37.0222L56.8938 3.4116C55.3193 2.23135 52.4292 1.95847 50.2856 2.78769L13.3287 17.0838C11.9732 17.6082 11.2255 18.4488 11.1608 19.3139V22.3139C11.1111 22.9798 11.4661 23.6601 12.2601 24.2219L66.5802 62.651C68.5301 64.0305 72.1763 64.0391 74.1457 62.6688Z"
                                    fill="var(--site-background)"
                                  ></path>
                                  <path
                                    d="M102.745 38.6818C102.722 38.0961 102.384 37.5131 101.729 37.0222L56.8938 3.4116C55.3193 2.23135 52.4292 1.95847 50.2856 2.78769L13.3287 17.0838C11.9732 17.6082 11.2255 18.4488 11.1608 19.3139M102.745 38.6818C102.772 39.3459 102.395 40.0135 101.618 40.5542L74.1457 59.6688C72.1763 61.0391 68.5301 61.0305 66.5802 59.651L12.2601 21.2219C11.4661 20.6601 11.1111 19.9798 11.1608 19.3139M102.745 38.6818V41.8139C102.721 42.4339 102.344 43.0493 101.618 43.5542L74.1457 62.6688C72.1763 64.0391 68.5301 64.0305 66.5802 62.651L12.2601 24.2219C11.4661 23.6601 11.1111 22.9798 11.1608 22.3139V19.3139"
                                    stroke="currentColor"
                                  ></path>
                                </g>
                                <defs>
                                  <clipPath id="clip0_408_5745">
                                    <rect
                                      width="112"
                                      height="72"
                                      fill="var(--site-background)"
                                    ></rect>
                                  </clipPath>
                                </defs>
                              </svg> */}
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

                            <h3
                              className={`text-lg font-medium ${
                                isWatched ? "text-zinc-500" : ""
                              }`}
                            >
                              {lecture.title}
                            </h3>
                            <p className="text-sm">{lecture.description}</p>
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
            <p className="text-zinc-700 text-sm sm:text-base">
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
