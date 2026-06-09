"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: "up" | "left" | "right" | "none"
}

export function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 32 : 0,
      x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeInStagger({
  children,
  className = "",
  staggerDelay = 0.08,
}: {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94], staggerChildren: staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export const fadeInItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
}
