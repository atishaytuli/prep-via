"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  isLast?: boolean
}

export function ProcessStep({ number, title, description }: ProcessStepProps) {
  const stepRef = useRef(null)
  const isInView = useInView(stepRef, { once: true, amount: 0.3 })

  // Animation variants
  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="flex gap-8 items-start relative" ref={stepRef}>
      <div className="relative">
        <motion.div
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-cyan-400 bg-white text-cyan-600 z-10 font-medium"
          variants={numberVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {number}
        </motion.div>
      </div>
      <motion.div
        className="flex-1"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="mb-3">
          <h3 className="text-2xl font-semibold font-poppins text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 pt-4 text-lg">{description}</p>
      </motion.div>
    </div>
  )
}

interface ProcessStepsProps {
  steps: Array<{
    number: string
    title: string
    description: string
  }>
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  const lineRef = useRef(null)
  const isLineInView = useInView(lineRef, { once: true, amount: 0.1 })

  const lineVariants = {
    hidden: { scaleY: 0, originY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <div className="grid gap-16 mb-24 relative max-w-3xl">
      {/* Vertical line connecting all steps */}
      <motion.div
        ref={lineRef}
        className="absolute left-5 top-5 bottom-5 w-0.5 bg-cyan-400"
        variants={lineVariants}
        initial="hidden"
        animate={isLineInView ? "visible" : "hidden"}
      ></motion.div>

      {steps.map((step, index) => (
        <ProcessStep
          key={step.number}
          number={step.number}
          title={step.title}
          description={step.description}
          isLast={index === steps.length - 1}
        />
      ))}
    </div>
  )
}
