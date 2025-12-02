// @ts-nocheck
import Keyboard from "@/components/svgs/Keyboard";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { courseOne as course } from "@/data/course1";
import { createClient } from "@/lib/supabase/server";
import { watch } from "fs";
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
      <div className="flex gap-5 flex-wrap relative px-10">
        <div className="w-lg grow px-15">
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
        <div className="relative bg-white w-md   grow py-4 px-6">
          <div>
            <ul>
              {course.map((section, index) => (
                <li key={section.sectionTitle} className="mt-7.5">
                  <h2>
                    <p className="text-sm text-zinc-700">Module {index + 1}</p>
                    <p>{section.sectionTitle}</p>
                  </h2>

                  <ul className={`mt-3`}>
                    {section.lectures.map((lecture) => {
                      const isWatched = watchedLessons.find(
                        (lesson) => lecture.id === lesson
                      );
                      return (
                        <li
                          key={lecture.title}
                          className="flex gap-4 items-center px-4 py-1.5"
                        >
                          {/* <Checkbox className="bg-zinc-300" /> */}
                          <Link className="grow" href={lecture.id}>
                            <h3
                              className={`flex gap-4 justify-between ${
                                isWatched ? "text-zinc-500" : ""
                              }`}
                            >
                              <div className="">{lecture.title}</div>
                              <div>{lecture.duration}</div>
                              {/* {lecture.title} */}
                            </h3>
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
