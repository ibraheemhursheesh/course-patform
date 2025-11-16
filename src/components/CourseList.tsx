// @ts-nocheck
import React from "react";
import Course from "./Course";

export default function CourseList() {
  const courses = [
    {
      id: 1,
      title: "React Course",
      slug: "course-1",
      shortDescription:
        "Learn React by building rich, interactive UI components from scratch.",
      description:
        "In this course you'll learn React by building a variety of rich, interactive UI components. You'll start with the fundamentals of React, learning how to create components, manage state, and handle user input. From there, you'll build a series of increasingly complex components, including modals, tabs, accordions, and more. Along the way, you'll learn best practices for structuring your React applications, managing component state, and optimizing performance. By the end of the course, you'll have a solid understanding of React and the skills you need to build your own rich UI components from scratch.",
      image: "one.webp",
      taughtBy: "Ibrahim Harchiche",
      length: "5 hours, 35 minutes",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      style: {
        opacity: "0.07",
        background:
          "radial-gradient(650px at 200px 0px, rgb(14, 165, 233), transparent 100%)",
      },
    },
    ,
    {
      id: 1,
      title: "Framer Motion",
      slug: "course-1",
      shortDescription:
        "Add beautiful animations to your React apps using Framer Motion.",
      description:
        "In this course you'll learn Framer Motion from scratch by building six animated components. You'll start with the fundamentals of state-based animation, learn how to animate an unmounting component, create a reusable hook that can animate style properties on scroll, and use dynamic variants to customize an animation based on component state.",
      image: "three.jpg",
      taughtBy: "Ibrahim Harchiche",
      length: "3 hours, 15 minutes",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      style: {
        opacity: "1",
        background:
          "radial-gradient(650px circle at 200px 0px, rgba(139, 92, 246, 0.15), transparent 150%)",
      },
    },
    {
      id: 1,
      title: "Build a Work Journal with Remix",
      slug: "course-1",
      shortDescription:
        "Learn this popular React framework by building and deploying your own Work Journal.",
      description:
        "In this course you'll learn Remix by building a personal Work Journal app. You'll set up a database, render pages with dynamic data, use actions and forms to save user input, explore nested routing, learn how to render custom error pages, and finish by adding authentication and deploying your app. By the end, you'll have a polished Remix app of your own that you can use as both a personal journal, as well as a rock-solid side project you can keep working on as you continue to learn Remix and other libraries in the React ecosystem.",
      image: "two.jpg",
      taughtBy: "Ibrahim Harchiche",
      length: "2 hours, 35 minutes",
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      style: {
        opacity: "0.07",
        background:
          "radial-gradient(650px at 200px 0px, rgb(14, 165, 233), transparent 100%)",
      },
    },
  ];
  return (
    <ul className="flex flex-col gap-5 px-10 justify-center mt-10 max-w-[950px] mx-auto">
      {courses.map((course) => (
        <Course key={course.title} course={course} />
      ))}
    </ul>
  );
}
