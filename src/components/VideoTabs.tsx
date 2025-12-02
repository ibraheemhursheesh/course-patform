// @ts-nocheck
"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Suspense } from "react";
import CommentsLoader from "@/components/CommentsLoader";
import CourseNavigation from "@/components/CourseNavigation";
import CreateCommentForm from "./CreateCommentForm";

export default function VideoTabs({
  children,
  lectureTitle,
  lesson,
}: {
  children: React.ReactNode;
  lectureTitle: string;
  lesson: string;
}) {
  const [isMobile, setIsMobile] = React.useState(false);
  const handleResize = (e) => {
    // console.log(window.innerWidth);

    if (window.innerWidth >= 960) setIsMobile(false);
    else setIsMobile(true);
  };

  React.useEffect(function () {
    if (window.innerWidth >= 960) setIsMobile(false);
    else setIsMobile(true);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={isMobile ? "w-full max-w-2xl mx-auto" : ""}>
      <h1 className="text-3xl font-bold bg-white px-7 py-[27px]">
        {lectureTitle}
      </h1>
      {isMobile ? (
        <Tabs defaultValue="course-content">
          <div className="mx-7">
            <TabsList className="w-full px-1">
              <TabsTrigger value="course-content">Course Content</TabsTrigger>
              <TabsTrigger value="qa">Qeustions</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="course-content">
            <CourseNavigation isPlacedDownVideo={true} />
          </TabsContent>
          <TabsContent value="qa">
            <Suspense fallback={<CommentsLoader />}>{children}</Suspense>
          </TabsContent>
        </Tabs>
      ) : (
        <Suspense
          fallback={
            <>
              {" "}
              <CreateCommentForm
                userData={{ user_metadata: { avatar_url: "" } }}
                lesson={lesson}
              />
              <CommentsLoader />
            </>
          }
        >
          {children}
        </Suspense>
      )}
    </div>
  );
}
