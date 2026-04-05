"use client";

import React, { useState, useEffect, startTransition } from "react";

type BackgroundOption = {
  type: "image" | "video";
  src: string;
};

const backgroundOptions: BackgroundOption[] = [
  {
    type: "video",
    src: "https://res.cloudinary.com/djmddrfv2/video/upload/v1774547897/herobg_i0e4vj.webm",
  },
  // { type: "video", src: "/videos/herobg2.mp4" },
];

const VideoTimeline = () => {
  const [background, setBackground] = useState<BackgroundOption | null>(null);

  useEffect(() => {
    startTransition(() => {
      const randomIndex = Math.floor(Math.random() * backgroundOptions.length);
      setBackground(backgroundOptions[randomIndex]);
    });
  }, []);

  return (
    <div className="mt-1">
      <div
        className="relative isolate min-h-[90vh] overflow-hidden bg-black py-12 sm:py-16 lg:py-20"
        data-aos="fade-in"
      >
        <video
          key={background?.src}
          className="absolute inset-0 z-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          src={background?.src}
        />

        <div
          className="pointer-events-none absolute inset-0 z-1 bg-gray-900/80"
          aria-hidden
        />

        <div className="relative z-2 mx-auto flex min-h-[90vh] max-w-8xl flex-col justify-end items-end px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl  px-2 sm:px-6 lg:px-8 backdrop-blur-sm  rounded-lg p-6">
            <h1 className="text-3xl mb-8 font-heading font-light text-white sm:text-4xl lg:text-5xl ">
              Discover extraordinary stays chosen for their sense of place,
              thoughtful hospitality, and memorable experiences — with rewards
              that follow you wherever you go.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTimeline;
