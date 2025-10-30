// @ts-nocheck

import MuxPlayer from "@mux/mux-player-react";

import { createClient } from "@/utils/server";

import "@/app/mux-player.css";

import CommentsSection from "@/components/CommentSection";
import { Suspense } from "react";

export default async function Page({ params }) {
  const { lesson } = await params;
  console.log("lesson param:", lesson);

  return (
    <div className="w-full">
      <MuxPlayer
        playbackId="3RFmRP01GolCsOBblYzZOlVHVr8029ae5Vqjkxsdrk92k"
        streamType="on-demand"
        className="aspect-video h-fit"
        accentColor="lightgreen"
        // onEnded={() => console.log("onEnded")}
      />

      <CommentsSection lesson={lesson} />

      <div className="mt-50"></div>
    </div>
  );
}
