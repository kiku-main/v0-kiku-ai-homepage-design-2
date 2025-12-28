"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "framer-motion"

function useCountUp(end: number, duration = 1500, inView: boolean) {
  const [count, setCount] = useState(0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (!inView || hasAnimated.current) return
    hasAnimated.current = true

    const startTime = performance.now()
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, inView])

  return count
}

function AnimatedStat({
  value,
  numericValue,
  prefix = "",
  suffix = "",
  label,
  inView,
}: {
  value?: string
  numericValue?: number
  prefix?: string
  suffix?: string
  label: string
  inView: boolean
}) {
  const count = useCountUp(numericValue ?? 0, 1500, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex flex-col items-center"
    >
      <span className="text-2xl font-semibold text-foreground md:text-3xl">
        {numericValue !== undefined ? (
          <>
            {prefix}
            {count}
            {suffix}
          </>
        ) : (
          value
        )}
      </span>
      <span className="mt-1 text-xs text-muted-foreground">{label}</span>
    </motion.div>
  )
}

export function Hero() {
  const statsRef = useRef(null)
  const inView = useInView(statsRef, { once: true, margin: "-50px" })

  return (
    <section className="relative z-10 px-6 pt-20 pb-12 text-center md:pt-28 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto max-w-2xl"
      >
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Turn messy inputs into <span className="text-primary">usable data</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm text-muted-foreground/70 md:text-base">
          AI-powered APIs for data extraction and processing.
          <br />
          Pay only for what you use.
        </p>
      </motion.div>

      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-10 flex max-w-xl flex-wrap items-center justify-center gap-8 md:gap-12"
      >
        <AnimatedStat numericValue={4} label="APIs available" inView={inView} />
        <AnimatedStat numericValue={100} prefix="<" suffix="ms" label="Avg response" inView={inView} />
        <AnimatedStat value="24/7" label="Monitoring" inView={inView} />
        <AnimatedStat value="$0" label="To start" inView={inView} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-10 text-xs text-muted-foreground/50"
      >
        Pick a workflow below
      </motion.p>
    </section>
  )
}
