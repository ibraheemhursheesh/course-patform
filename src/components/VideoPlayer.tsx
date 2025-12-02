// @ts-nocheck
"use client";
import { addWatchedLesson } from "@/utils/actions";
import MuxPlayer from "@mux/mux-player-react";
import React from "react";

export default function VideoPlayer({ lesson }) {
  async function handleAddWatchedLesson() {
    console.log("lesson from video player", lesson);
    await addWatchedLesson(lesson);
  }
  return (
    <MuxPlayer
      playbackId="3RFmRP01GolCsOBblYzZOlVHVr8029ae5Vqjkxsdrk92k"
      streamType="on-demand"
      className="aspect-video block"
      accentColor="white"
      onEnded={handleAddWatchedLesson}
    />
  );
}
