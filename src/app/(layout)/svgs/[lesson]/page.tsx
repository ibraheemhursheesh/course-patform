// @ts-nocheck

import MuxPlayer from "@mux/mux-player-react";

import { createClient } from "@/lib/supabase/server";
import { courseTwo } from "@/data/course1";

import CommentsSection from "@/components/CommentSection";

import "@/app/mux-player.css";

import VideoTabs from "@/components/VideoTabs";
import VideoPlayer from "@/components/VideoPlayer";

export default async function Page({ params }) {
  const { lesson } = await params;

  const videoUrl = process.env.VIDEO_URL;

  let lectureTitle = "";
  for (let i = 0; i < courseTwo.length; i++) {
    const section = courseTwo[i];
    for (let j = 0; j < section.lectures.length; j++) {
      const lecture = section.lectures[j];
      if (lecture.id === lesson) {
        lectureTitle = lecture.title;
        break;
      }
    }
  }
  // // console.log("lectureTitle =>", lectureTitle);

  return (
    <div className="w-full">
      <VideoPlayer lesson={lesson} videoUrl={videoUrl} />

      <div className="" in="ind">
        <VideoTabs lesson={lesson} lectureTitle={lectureTitle}>
          <CommentsSection lesson={lesson} />
        </VideoTabs>
      </div>
    </div>
  );
}
