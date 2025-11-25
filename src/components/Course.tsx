// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";

export default function Course({ course }) {
  // console.log(course.style);

  const skillClassNames = [
    "text-[#007b83] bg-[#e4f7fb]",
    "text-[#a50e0e] bg-[#fef7e0]",
    "text-[#9c166b] bg-[#fde7f3]",
    "text-[#0d652d] bg-[#e6f4ea]",
  ];
  return (
    <li
      className="grid grid-rows-subgrid row-span-7 relative rounded-xl bg-cover border border-zinc-300 overflow-hidden bg-white text-black "
      // style={{
      //   backgroundImage: `url(/${course.image})`,
      //   backgroundPosition: "50% 35%",
      // }}
      key={course.id}
    >
      <Image
        alt={course.title}
        src={"/" + course.image}
        className="w-full aspect-video object-cover"
        width={626}
        height={356}
      />
      {/* <div className="absolute inset-0 bg-slate-900/25 backdrop-blur-[1px]"></div> */}
      {/* <div className="absolute inset-0" style={course.style}></div> */}

      <div className="relative p-4 pt-0 grid grid-rows-subgrid row-span-6">
        <h2 className="text-3xl font-bold">{course.title}</h2>
        {/* <p className="mt-2 text-zinc-700">{course.shortDescription}</p> */}
        <p className="text-lg max-w-2xl ">{course.description}</p>
        <h3>Tech stack:</h3>
        <ul className="flex gap-2">
          {course.techStack.map((tech, index) => (
            <li
              className={`text-sm px-2 py-1 rounded-sm font-medium ${skillClassNames[index]}`}
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="flex gap-5 mt-10">
          <div className="flex gap-3">
            <Image
              alt="Instructor Avatar"
              className="rounded-full shrink-0 size-12.5"
              src="/avatar.png"
              width={50}
              height={50}
            />
            <div>
              <p className="text-zinc-700">Taught by</p>
              <p>{course.taughtBy}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Clock size={30} />
            <div>
              <p className="text-zinc-700">Length</p>
              <p>{course.length}</p>
            </div>
          </div>
        </div>{" "}
        <Link href="/1001001001001001">
          <Button className=" hover:bg-zinc-800 rounded-full min-w-xs block mx-auto">
            Watch now{" "}
          </Button>
        </Link>
      </div>
    </li>
  );
}
