// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";

export default function Course({ course }) {
  console.log(course.style);
  return (
    <li
      className="relative rounded-xl bg-cover border border-zinc-300 overflow-hidden text-white"
      style={{ backgroundImage: `url(/${course.image}) ` }}
      key={course.id}
    >
      <div className="absolute inset-0 bg-slate-900/50"></div>
      <div className="absolute inset-0" style={course.style}></div>

      <div className="relative p-4 bg-black/20 ">
        <h2 className="text-3xl font-bold mt-6">{course.title}</h2>
        <p className="mt-2 text-zinc-200">{course.shortDescription}</p>
        <p className="mt-5 text-lg max-w-2xl ">{course.description}</p>
        {/* <h3>Tech stack:</h3>
        <ul>
          {course.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul> */}
        <div className="flex gap-5 mt-10">
          <div className="flex gap-3">
            <Image
              alt="Instructor Avatar"
              className="rounded-full shrink-0"
              src="/avatar.png"
              width={50}
              height={50}
            />
            <div>
              <p className="text-zinc-300">Taught by</p>
              <p>{course.taughtBy}</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Clock size={30} />
            <div>
              <p className="text-zinc-300">Length</p>
              <p>{course.length}</p>
            </div>
          </div>
        </div>{" "}
        <Link href="/1001001001001001">
          <Button className="mt-20 bg-background text-foreground hover:bg-zinc-100 rounded-full min-w-xs block mx-auto">
            Watch now{" "}
          </Button>
        </Link>
      </div>
    </li>
  );
}
