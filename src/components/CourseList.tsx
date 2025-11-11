import React from "react";
import Course from "./Course";

export default function CourseList() {
  const courses = [
    {
      id: 1,
      title: "React Upload",
      slug: "course-1",
      description:
        "Since its release 10 years ago, React's core APIs have remained surprisingly stable. The original component boundary that supports state and lifecycle methods still works to this day. Hooks were then added which introduced a new level of composition, bringing state and effects to functional components and marking the second era of React.",
      image: "react.png",
    },
    {
      id: 2,
      title: "Tailwind Decode",
      slug: "course-2",
      description:
        "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. It allows developers to rapidly create responsive and modern user interfaces without writing custom CSS.",
      image: "tailwind.png",
    },
    {
      id: 3,
      title: "Performance Matters",
      slug: "course-3",
      description:
        "Web performance refers to the speed and responsiveness of websites and web applications. It encompasses various factors such as load times, interactivity, and overall user experience. Optimizing web performance is crucial for retaining users, improving SEO rankings, and ensuring accessibility across different devices and network conditions.",
      image: "performance.png",
    },
  ];
  return (
    <ul className="flex flex-wrap gap-5 px-10 justify-center mt-10">
      {courses.map((course) => (
        <Course key={course.slug} course={course} />
      ))}
    </ul>
  );
}
