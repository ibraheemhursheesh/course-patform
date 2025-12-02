// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";
import Pieces from "./svgs/Pieces";
import Keyboard from "./svgs/Keyboard";

export default function Course({ insideDashboard, course }) {
  // console.log(course.style);

  const isReactCourse = course.slug === "react-from-scratch";

  const skillClassNames = [
    "text-[#007b83] bg-[#e4f7fb]",
    "text-[#a50e0e] bg-[#fef7e0]",
    "text-[#9c166b] bg-[#fde7f3]",
    "text-[#0d652d] bg-[#e6f4ea]",
  ];
  return (
    <li
      className="relative rounded-xl bg-cover border border-zinc-300 overflow-hidden bg-white text-black nth-[2]:mt-7.5 grid:nth-[2]:mt-0"
      // style={
      //   isReactCourse
      //     ? {}
      //     : {
      //         backgroundImage: `url(/${course.image})`,
      //       }
      // }
      key={course.id}
    >
      <div
        className="absolute inset-0 bg-gray-100/30"
        style={course.style}
      ></div>
      {/* {isReactCourse ? <Keyboard /> : <Pieces />} */}

      <div className="relative p-4 pb-10">
        <h2 className="text-3xl font-bold mt-3">{course.title}</h2>
        <p className="mt-2 text-zinc-700">{course.shortDescription}</p>
        <p className="text-lg max-w-2xl mt-5">{course.description}</p>
        {/* <h3 className="mt-3">Tech stack:</h3>
        <ul className="flex gap-2 mt-1">
          {course.techStack.map((tech, index) => (
            <li
              className={`text-sm px-2 py-1 rounded-sm font-medium ${skillClassNames[index]}`}
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul> */}
        <div className="flex flex-wrap gap-5 mt-45 mb-5">
          <div className="flex gap-3">
            <Image
              alt="Instructor Avatar"
              className="rounded-full shrink-0 size-10.5"
              src="/avatar.png"
              width={50}
              height={50}
            />
            <div>
              <p className="text-zinc-700 text-xs lg:text-sm">Taught by</p>
              <p className="text-sm lg:text-base">{course.taughtBy}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Clock className="hidden sm:block" size={30} />
            <div>
              <p className="text-zinc-700 text-xs lg:text-sm">Length</p>
              <p className="text-sm lg:text-base">{course.length}</p>
            </div>
          </div>
        </div>
        {insideDashboard && (
          <Link
            className="rounded-full items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-zinc-800 mt-5 block w-full max-w-sm mx-auto h-10 px-4 has-[>svg]:px-3 text-center leading-10"
            href={"/" + course.slug}
          >
            Watch now
          </Link>
        )}
      </div>
    </li>
  );
}



