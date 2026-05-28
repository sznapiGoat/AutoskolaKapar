"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

interface CounterProps {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
}

export function Counter({ value, prefix = "", suffix = "", duration = 1800 }: CounterProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const [count, setCount] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true

    const steps = 60
    const stepDuration = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current++
      setCount(Math.round((current / steps) * value))
      if (current >= steps) clearInterval(timer)
    }, stepDuration)

    return () => clearInterval(timer)
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString("cs-CZ")}{suffix}
    </span>
  )
}
