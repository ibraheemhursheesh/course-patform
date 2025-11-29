// @ts-nocheck
import React from "react";
import Course from "./Course";

export default function CourseList() {
  const courses = [
    {
      id: 1,
      title: "Framer Motion",
      slug: "course-1",
      shortDescription:
        "Add beautiful animations to your React apps using Framer Motion.",
      description:
        "In this course you'll learn Framer Motion from scratch by building six animated components. You'll start with the fundamentals of state-based animation, learn how to animate an unmounting component, create a reusable hook that can animate style properties on scroll, and use dynamic variants to customize an animation based on component state.",
      image: "loading.webp",
      taughtBy: "Ibrahim Harchiche",
      length: "3 hours, 15 minutes",
      techStack: ["React", "Framer Motion", "React Spring", "GSAP"],
      style: {
        backdropFilter: "blur(2px)",
      },
    },
    {
      id: 1,
      title: "React From Scratch",
      slug: "course-1",
      shortDescription:
        "Learn React by building rich, interactive UI components from scratch.",
      description:
        "In this course you'll learn React by building a variety of rich, interactive UI components. You'll start with the fundamentals of React, learning how to create components, manage state, and handle user input. From there, you'll build a series of increasingly complex components, including modals, tabs, accordions, and more.",
      image: "wireframe.png",
      taughtBy: "Ibrahim Harchiche",
      length: "5 hours, 35 minutes",
      techStack: ["React", "Dndkit", "TypeScript", "Tailwind CSS"],

      style: {
        backdropFilter: "blur(1px)",
      },
    },

    // {
    //   id: 1,
    //   title: "Build a Work Journal with Remix",
    //   slug: "course-1",
    //   shortDescription:
    //     "Learn this popular React framework by building and deploying your own Work Journal.",
    //   description:
    //     "In this course you'll learn Remix by building a personal Work Journal app. You'll set up a database, render pages with dynamic data, use actions and forms to save user input, explore nested routing, learn how to render custom error pages, and finish by adding authentication and deploying your app.",
    //   image: "two.jpg",
    //   taughtBy: "Ibrahim Harchiche",
    //   length: "2 hours, 35 minutes",
    //   techStack: ["React", "Remix", "TypeScript"],
    //   style: {
    //     opacity: "0.07",
    //     background:
    //       "radial-gradient(650px at 200px 0px, rgb(14, 165, 233), transparent 100%)",
    //   },
    // },
  ];
  return (
    <ul className="grid grid-cols-1 gap-5 justify-center mt-10 mx-auto">
      {courses.map((course) => (
        <Course key={course.title} course={course} />
      ))}
    </ul>
  );
}
