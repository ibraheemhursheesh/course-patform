// @ts-nocheck
"use client";
import React, { useState } from "react";
import { courseOne } from "@/data/course1";
import { courseTwo } from "@/data/course1";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TableOfContents } from "lucide-react";

export default function CourseNavigation({
  isPlacedDownVideo,
  course,
}: {
  isPlacedDownVideo?: boolean;
  course?: string;
}) {
  const pathname = usePathname();

  const navCourse = course === "react-from-scratch" ? courseOne : courseTwo;

  return (
    <nav
      className={`${
        isPlacedDownVideo
          ? "block"
          : "hidden border-l border-zinc-200 md:w-[300px] lg:w-[400px]"
      } md:block pb-25  bg-white relative shrink-0`}
      style={{ overflowAnchor: "none" }}
    >
      <div
        className={`${
          isPlacedDownVideo ? "" : "h-dvh sticky top-0"
        } py-4 px-6 overflow-y-auto w-full`}
      >
        {" "}
        <ul>
          {navCourse.map((section, index) => (
            <li key={section.sectionTitle} className="mt-7.5">
              <h2>
                <p className="text-sm text-zinc-700">Module {index + 1}</p>
                <p>{section.sectionTitle}</p>
              </h2>

              <ul
                className={`mt-3 ${
                  isPlacedDownVideo ? "p-5 bg-zinc-950 rounded-md" : ""
                }`}
              >
                {" "}
                {section.lectures.map((lecture) => (
                  <li key={lecture.title}>
                    <Link
                      className={`block ${
                        isPlacedDownVideo
                          ? "text-white hover:bg-zinc-800"
                          : "text-zinc-800 hover:bg-zinc-200/80"
                      } py-1.5 px-4  rounded-sm ${
                        pathname === "/course-1/" + lecture.id
                          ? isPlacedDownVideo
                            ? "bg-zinc-800"
                            : "bg-zinc-200/80"
                          : ""
                      }`}
                      href={lecture.id}
                    >
                      <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {/* <div className="whitespace-nowrap overflow-hidden overflow-ellipsis ">
                            {lecture.title}
                          </div>
                          <div>{lecture.duration}</div> */}
                        {lecture.title}
                      </h3>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
