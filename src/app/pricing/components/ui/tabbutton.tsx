"use client"
import { motion } from "framer-motion";

interface TabButtonProps {
  isActive: boolean
  onClick: () => void
  label: string
}

export function TabButton({ isActive, onClick, label }: TabButtonProps) {
  return (
<motion.button
  onClick={onClick}
  animate={
    !isActive
      ? { rotate: [0, -2, 2, -1, 1, 0] }
      : {}
  }
  transition={
    !isActive
      ? {
          duration: 1.2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatDelay: 3,
        }
      : {}
  }
  className={`px-6 py-3 text-sm font-medium hover:scale-95 transition-all duration-200 rounded-md
    ${
      isActive
        ? "border-b-2 border-cyan-500 text-cyan-600 bg-cyan-50"
        : "text-gray-600 bg-cyan-50"
    }`}
>
  {label}
</motion.button>
  )
}
