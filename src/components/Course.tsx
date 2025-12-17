// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Clock } from "lucide-react";
import Pieces from "./svgs/Pieces";
import Keyboard from "./svgs/Keyboard";
import FirstCourseCard from "./FirstCourseCard";

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
      key={course.id}
    >
      {/* <div
        className="absolute inset-0 bg-gray-100/30"
        style={course.style}
      ></div> */}
      {/* {isReactCourse ? <Keyboard /> : <Pieces />} */}
      {/* {isReactCourse ? ( */}
      <div className="w-full aspect-video rounded-sm p-3 relative overflow-hidden bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 @container">
        {" "}
        <div className="absolute top-2 right-4 opacity-5 text-6xl font-bold">
          #{1}
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
          {"React From Scratch"}{" "}
        </h3>
      </div>
      {/* ) : (
        <>
           <FirstCourseCard /> 
          <Image
            quality={100}
            priority={true}
            src="/chat.png"
            alt="well"
            width={200}
            height={100}
            className="block w-full aspect-video"
          /> 
          <img
            src="/chat.png"
            alt="200"
            className="block w-full aspect-video"
          />
          wel
        </>
      )} */}

      <div className="relative p-4 pb-10">
        <h2 className="text-3xl font-bold mt-3">{course.title}</h2>
        <p className="mt-2 text-zinc-700">{course.shortDescription}</p>

        {!insideDashboard && (
          <>
            <p className="text-base max-w-2xl mt-5">{course.description}</p>
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
          </>
        )}

        <div className="flex flex-wrap gap-5 mt-8 mb-5">
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



