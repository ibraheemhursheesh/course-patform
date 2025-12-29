import CourseNavigation from "@/components/CourseNavigation";
import { Suspense } from "react";
export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {children}
      <CourseNavigation />
      <div className="mt-25"></div>
    </div>
  );
}
