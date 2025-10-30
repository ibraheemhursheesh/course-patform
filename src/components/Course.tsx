// @ts-nocheck
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Course({ course }) {
  return (
    <li
      className="bg-zinc-100 border border-black max-w-sm mt-10"
      key={course.id}
    >
      <Link href={`/${course.slug}`}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <Image
          src={"/" + course.image}
          alt={course.title}
          width={300}
          height={200}
        />
      </Link>
    </li>
  );
}
