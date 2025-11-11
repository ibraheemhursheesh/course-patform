// @ts-nocheck
"use client";
import React, { useState } from "react";
import { course } from "@/data/course1";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function CourseNavigation() {
  const pathname = usePathname();

  return (
    <nav
      className="basis-sm shrink-0 relative"
      style={{ overflowAnchor: "none" }}
    >
      <div className="h-dvh  py-4 px-6 overflow-y-auto sticky top-0 w-full">
        {" "}
        <ul>
          {course.map((section, index) => (
            <li key={section.sectionTitle} className="mt-7.5">
              <h2>
                <p className="text-sm text-zinc-700">Module {index + 1}</p>
                <p>{section.sectionTitle}</p>
              </h2>

              <ul className="mt-3">
                {" "}
                {section.lectures.map((lecture) => (
                  <li key={lecture.title}>
                    <Link
                      className={`block text-zinc-800 py-1.5 px-4 hover:bg-zinc-200/80 rounded-sm ${
                        pathname === "/course-1/" + lecture.id
                          ? "bg-zinc-200/80"
                          : ""
                      }`}
                      href={"/course-1/" + lecture.id}
                    >
                      <h3 className="whitespace-nowrap overflow-hidden overflow-ellipsis">
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
