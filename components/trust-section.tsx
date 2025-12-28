"use client"

import { motion } from "framer-motion"
import { Github, Zap, CreditCard } from "lucide-react"
import Link from "next/link"

export function TrustSection() {
  const features = [
    {
      icon: Github,
      title: "Open Source",
      description: "Core libraries on GitHub",
      href: "https://github.com/kikuai",
    },
    {
      icon: CreditCard,
      title: "Usage-based",
      description: "Pay only for what you use",
      href: "/pricing",
    },
    {
      icon: Zap,
      title: "Self-serve",
      description: "Get API keys instantly",
      href: "/signup",
    },
  ]

  return (
    <section className="relative z-10 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-lg font-medium text-muted-foreground">Built for developers</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={feature.href}
                className="group flex flex-col items-center rounded-xl border border-border/40 bg-card/50 p-6 transition-all duration-200 hover:border-border hover:bg-card"
              >
                <feature.icon className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-sm font-medium text-foreground">{feature.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Tech stack row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground/60"
        >
          <span>Works with your stack:</span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="rounded-md border border-border/40 bg-secondary/30 px-2.5 py-1 font-mono text-muted-foreground">
              Python
            </span>
            <span className="rounded-md border border-border/40 bg-secondary/30 px-2.5 py-1 font-mono text-muted-foreground">
              Node.js
            </span>
            <span className="rounded-md border border-border/40 bg-secondary/30 px-2.5 py-1 font-mono text-muted-foreground">
              cURL
            </span>
            <span className="rounded-md border border-border/40 bg-secondary/30 px-2.5 py-1 font-mono text-muted-foreground">
              REST
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
