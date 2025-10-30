import React from "react";
import Course from "./Course";

export default function CourseList() {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      slug: "course-1",
      description: "Description 1",
      image: "background1.jpeg",
    },
    {
      id: 2,
      title: "Course 2",
      slug: "course-2",
      description: "Description 2",
      image: "background2.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      slug: "course-3",
      description: "Description 3",
      image: "background3.jpg",
    },
  ];
  return (
    <ul className="">
      {courses.map((course) => (
        <Course key={course.slug} course={course} />
      ))}
    </ul>
  );
}
