"use client";

import CardGrid from "@/components/CardGrid";

export default function WhatWeDo() {
  return (
    <div className="py-16 w-full mx-auto">
      <div className="text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#273238] px-4">
          <div className="inline-block">we prep—you just</div>
          <div className="flex items-center justify-center gap-4 mt-2 flex-wrap md:flex-nowrap">
            <span>focus on</span>
            <div className="h-12 md:h-16 rounded-full mt-2 overflow-hidden flex-shrink-0">
              <video
                muted
                loop
                autoPlay
                playsInline
                src="https://videos.pexels.com/video-files/7464095/7464095-sd_640_360_30fps.mp4"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="italic">growth!</span>
          </div>
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <CardGrid />
      </div>
    </div>
  );
}
