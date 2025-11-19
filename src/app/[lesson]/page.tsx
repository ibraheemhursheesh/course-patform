// @ts-nocheck

import MuxPlayer from "@mux/mux-player-react";

import { createClient } from "@/utils/server";
import { courseOne } from "@/data/course1";

import CommentsSection from "@/components/CommentSection";

import "@/app/mux-player.css";

import VideoTabs from "@/components/VideoTabs";

export default async function Page({ params }) {
  const { lesson } = await params;
  // // console.log("lesson param =>", lesson);

  let lectureTitle = "";
  for (let i = 0; i < courseOne.length; i++) {
    const section = courseOne[i];
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
      <MuxPlayer
        playbackId="3RFmRP01GolCsOBblYzZOlVHVr8029ae5Vqjkxsdrk92k"
        streamType="on-demand"
        className="aspect-video block"
        accentColor="white"
        // onEnded={() => // console.log("onEnded")}
      />

      <div className="" id="in">
        <VideoTabs lectureTitle={lectureTitle}>
          <CommentsSection lesson={lesson} />
        </VideoTabs>
      </div>
    </div>
  );
}
