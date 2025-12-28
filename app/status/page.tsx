"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, ExternalLink } from "lucide-react"

const services = [
  { name: "Chart2CSV", status: "operational" },
  { name: "PATAS", status: "operational" },
  { name: "Masker", status: "operational" },
  { name: "ReliAPI", status: "operational" },
  { name: "API Gateway", status: "operational" },
  { name: "Dashboard", status: "operational" },
]

export default function StatusPage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

      <main className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-primary">
            <CheckCircle2 className="h-5 w-5" />
            <span className="font-medium">All systems operational</span>
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">System Status</h1>
          <p className="text-muted-foreground">Current status of KikuAI services and infrastructure.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border/60 bg-card/30 overflow-hidden"
        >
          {services.map((service, index) => (
            <div
              key={service.name}
              className={`flex items-center justify-between px-6 py-4 ${
                index !== services.length - 1 ? "border-b border-border/40" : ""
              }`}
            >
              <span className="font-medium">{service.name}</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span className="text-sm text-muted-foreground capitalize">{service.status}</span>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 rounded-xl border border-border/40 bg-card/20 p-6 text-center"
        >
          <p className="text-sm text-muted-foreground">
            Real-time monitoring coming soon.{" "}
            <a href="mailto:status@kikuai.dev" className="inline-flex items-center gap-1 text-primary hover:underline">
              Subscribe to updates
              <ExternalLink className="h-3 w-3" />
            </a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>Last checked: {new Date().toLocaleString()}</p>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
