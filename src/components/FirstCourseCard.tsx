// @ts-nocheck

import React from "react";

export default function FirstCourseCard() {
  return (
    <div className="w-full aspect-video rounded-t-sm p-3 pb-0 relative overflow-hidden bg-gray-950/2.5 after:pointer-events-none after:absolute after:inset-0 after:rounded-t-lg after:inset-ring after:inset-ring-gray-950/5 dark:after:inset-ring-white/10 bg-[radial-gradient(var(--pattern-fg)_1px,transparent_0)] bg-size-[10px_10px] bg-fixed [--pattern-fg:var(--color-gray-950)]/5 dark:[--pattern-fg:var(--color-white)]/10 @container">
      {" "}
      {/* <div className="absolute top-2 right-4 opacity-5 text-6xl font-bold">
        #{1}
      </div> */}
      {/* <h3 className="uppercase text-[5.7cqi] font-bold text-zinc-600 relative max-w-[260px] ">
        {"React From Scratch"}{" "}
      </h3> */}
      <div className="bg-white w-full mx-auto h-full rounded-t-lg border border-zinc-300 border-b-0 pt-5 p-2.5 pb-0">
        <div className="flex flex-col gap-2.5 bg-zinc-100 h-full rounded-t-lg border border-b-0 border-zinc-200">
          <div className="bg-white flex gap-2.5 items-center py-2 px-6 rounded-t-lg">
            <div className="bg-zinc-500 rounded-full size-7"></div>
            <span className="block text-sm">The Heard Lead</span>
          </div>

          <div className="w-[50%] bg-sky-200/60 rounded-md py-1 px-2 text-sm ml-auto mr-4">
            We'll meet at the intersection of theory and practice.
          </div>
          <div className="w-[48%] bg-white rounded-md py-1 px-2 text-sm ml-4 mr-auto flex flex-col gap-y-4">
            Art is about understanding.
          </div>
          <div className="w-[48%] bg-sky-200/60 rounded-md py-1 px-2 text-sm ml-auto mr-4">
            Every brushstroke has a purpose, every color tells a story.
          </div>
          <div className="w-[48%] h-12 bg-white rounded-md py-1 px-2 text-sm ml-4 mr-auto flex flex-col gap-1">
            <div
              id="message-loading-skeleton"
              className="bg-zinc-100 h-2.5 rounded-full"
            ></div>
            <div
              id="message-loading-skeleton"
              className="bg-zinc-100 w-[80%] h-2.5 rounded-full"
            ></div>
          </div>
          {/* <div className="w-[50%] bg-sky-300/60">
            
          </div>
          <div className="w-[50%] bg-sky-300/60">
            
          </div> */}
        </div>
      </div>
    </div>
  );
}
