// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Course({ course }) {
  return (
    <li className="basis-sm rounded-lg overflow-hidden" key={course.id}>
      <Link href={`/${course.slug}`}>
        <Image
          src={"/" + course.image}
          alt={course.title}
          className="w-full aspect-video rounded-md"
          width={300}
          height={200}
        />

        <div className="p-4">
          <h2 className="text-2xl font-bold mt-4">{course.title}</h2>
          <p className="mt-5">{course.description}</p>
        </div>
      </Link>
    </li>
  );
}
