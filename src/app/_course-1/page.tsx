import Link from "next/link";
import React from "react";
import { courseOne as course } from "@/data/course1";

export default function page() {
  return (
    <div>
      <h1>Course 1</h1>
      <ul className="list-disc pl-13 mt-4">
        {course.map((section) => (
          <li key={section.sectionTitle}>
            <h2 className="text-zinc-700 text-xl">
              section: {section.sectionTitle}
            </h2>

            <ul className="list-disc pl-13">
              {" "}
              {section.lectures.map((lecture) => (
                <li key={lecture.title}>
                  <Link href={"course-1/" + lecture.id}>
                    <h3>{lecture.title}</h3>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
