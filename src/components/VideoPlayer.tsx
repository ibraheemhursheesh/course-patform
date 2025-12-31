// @ts-nocheck

"use client";

import { Fira_Code } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import Plyr from 'plyr';

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import "plyr/dist/plyr.css";
import "@/app/mux-player.css"
import { addWatchedLesson } from "@/utils/actions";

const fira = Fira_Code({
  subsets: ["latin"],
});

const roboto = Roboto_Mono({
  subsets: ["latin"],
  weight: "700"
});


export default function VideoPlayer(props) {
  const {
    className,
    poster,
    playsInline = true,
    controls = true,
    crossOrigin = "true",
    lesson,
    videoUrl,
    ...rest
  } = props;
  const [ref, setRef] = useState(null);
  const playerRef = useRef(undefined);
  const player = new Plyr("#player");

  useEffect(() => {
    if (ref && typeof window !== "undefined") {
      void import("plyr").then(({ default: Plyr }) => {
        playerRef.current = new Plyr(ref, {
          controls: [
            "play-large",
            "play",
            "progress",
            "current-time",
            "mute",
            "fullscreen",
          ],
          previewThumbnails: {
            enabled: true,
            src: [
              "https://cdn.plyr.io/static/demo/thumbs/100p.vtt",
              "https://cdn.plyr.io/static/demo/thumbs/240p.vtt",
            ],
          },
        });
      });
    }
  }, [ref]);

  return (
    <div
      className={clsx(
        "not-prose light:after:border-b-0 relative after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:border after:border-black/10 dark:after:border-white/10",
        "before:pointer-events-none before:absolute before:inset-px before:z-10 before:rounded-[inherit] before:shadow-light-top before:shadow-white/10 dark:before:hidden",
        className,
        roboto.className
      )}
      style={{ "--plyr-color-main": "var(--color-orange-500)" }}
    >
      <video
        onEnded={(e) => addWatchedLesson(lesson)}
        data-plyr-config='{"previewThumbnails": { "enabled": false, "src": "", "withCredentials": false },"controls": ["play-large", "play", "rewind", "fast-forward", "progress", "current-time", "duration", "mute", "volume", "captions", "settings", "fullscreen"], "speed": { "selected": 1, "options": [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4] }}'
        ref={setRef}
        controls={controls}
        crossOrigin={crossOrigin}
        playsInline={playsInline}
        className="rounded-[inherit] w-full aspect-video"
        {...rest}
      >
        <source src={videoUrl} type="video/mp4" size="270" />
        <source src={videoUrl} type="video/mp4" size="480" />
        <source src={videoUrl} type="video/mp4" size="1080" />

        {/* <track kind="captions" label="English" srclang="en" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt"
					default />
			<track kind="captions" label="Français" srclang="fr" src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"/> */}
      </video>
    </div>
  );
}

// // @ts-nocheck
// "use client";
// import { addWatchedLesson } from "@/utils/actions";
// import MuxPlayer from "@mux/mux-player-react";
// import React from "react";

// export default function VideoPlayer({ lesson }) {
//   async function handleAddWatchedLesson() {
//     console.log("lesson from video player", lesson);
//     await addWatchedLesson(lesson);
//   }
//   return (
//     <MuxPlayer
//       playbackId="3RFmRP01GolCsOBblYzZOlVHVr8029ae5Vqjkxsdrk92k"
//       streamType="on-demand"
//       className="aspect-video block"
//       accentColor="white"
//       onEnded={handleAddWatchedLesson}
//     />
//   );
// }
