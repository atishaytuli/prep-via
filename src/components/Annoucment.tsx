"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Announcement = () => {
  return (
    <div className="w-full z-50 bg-primary-cyan/50 px-1 md:px-6 py-1 text-xs flex items-center justify-between overflow-hidden">
      <div className="px-4 font-roboto">
        <motion.span
          className="mr-4 inline-flex relative"
          animate={{
            x: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📦
        </motion.span>
        We {"don't "} just move boxes - we move your business forward.
      </div>
      <div className="hidden md:flex flex-shrink-0 h-full overflow-hidden relative">
        <Image
          alt="logo"
          src="/PREPVIA_Logo slate black.png"
          width={90}
          height={100}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
};

export default Announcement;
