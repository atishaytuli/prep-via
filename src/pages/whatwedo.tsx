"use client";

import CardGrid from "@/components/CardGrid";
import { TabButtons } from "@/components/Tabbutton";

export default function WhatWeDo() {
  return (
    <div className="py-16 w-full mx-auto">
      <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
        <TabButtons title="Services" title2="" />
        <h2 className="text-3xl md:text-5xl font-medium text-gray-800 leading-tight mb-2 mt-6 font-poppins px-4">
          Managing Your <span className="text-cyan-600">Inventory </span> Has
          Never Been Easier
        </h2>
        {/* <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal text-[#273238] px-4">
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
        </h2> */}
        <p className="text-center max-w-4xl mx-auto text-gray-700 text-lg mt-8 font-roboto">
          Learn why effortless fulfillment matters →
        </p>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-0">
        <CardGrid />
      </div>
    </div>
  );
}
