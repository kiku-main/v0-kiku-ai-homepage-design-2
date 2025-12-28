"use client"

import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const topUpOptions = [
  {
    amount: "$10",
    label: "Get started",
    description: "Try out the platform",
  },
  {
    amount: "$50",
    label: "Most popular",
    description: "For active projects",
    popular: true,
  },
  {
    amount: "$200",
    label: "For teams",
    description: "High-volume usage",
  },
]

const productPricing = [
  {
    product: "Chart2CSV",
    price: "$0.02",
    unit: "per chart",
    freeTier: "First 10 free",
  },
  {
    product: "PATAS",
    price: "$0.10",
    unit: "per 1,000 messages",
    freeTier: "First 1,000 messages free",
  },
  {
    product: "Masker",
    price: "$0.001",
    unit: "per request",
    freeTier: "First 1,000 requests/month free",
  },
  {
    product: "ReliAPI",
    price: "$0.005",
    unit: "per request",
    freeTier: "Cache hits free",
  },
]

export default function PricingPage() {
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

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">Simple, usage-based pricing</h1>
          <p className="text-lg text-muted-foreground">
            Top up your balance, pay only for what you use. No subscriptions, no credits to convert.
          </p>
        </motion.div>

        {/* Top-up Options */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {topUpOptions.map((option, index) => (
            <motion.div
              key={option.amount}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-xl border bg-card/50 p-6 backdrop-blur-sm ${
                option.popular ? "border-primary/50 shadow-lg shadow-primary/5" : "border-border/50"
              }`}
            >
              {option.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Zap className="h-3 w-3" /> Most Popular
                  </span>
                </div>
              )}

              <div className="mb-4">
                <span className="text-4xl font-semibold">{option.amount}</span>
              </div>
              <h3 className="mb-1 text-lg font-medium">{option.label}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{option.description}</p>

              <Button asChild className="w-full" variant={option.popular ? "default" : "outline"}>
                <Link href="/dashboard">Top Up</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Custom amount */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16 text-center"
        >
          <p className="text-muted-foreground">
            Need more?{" "}
            <a href="mailto:sales@kikuai.dev" className="text-primary hover:underline">
              Contact us
            </a>{" "}
            for custom amounts and enterprise volume pricing.
          </p>
        </motion.div>

        {/* Pricing Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="rounded-2xl border border-border/60 bg-card/30 overflow-hidden"
        >
          <div className="border-b border-border/40 bg-muted/10 px-6 py-4">
            <h2 className="text-lg font-semibold">Product Pricing</h2>
          </div>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border/40 bg-muted/5">
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Product</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Price</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Unit</th>
                <th className="px-6 py-3 text-left text-sm font-medium text-muted-foreground">Free Tier</th>
              </tr>
            </thead>
            <tbody>
              {productPricing.map((item, index) => (
                <tr
                  key={item.product}
                  className={index !== productPricing.length - 1 ? "border-b border-border/20" : ""}
                >
                  <td className="px-6 py-4 font-medium">{item.product}</td>
                  <td className="px-6 py-4 text-primary font-mono">{item.price}</td>
                  <td className="px-6 py-4 text-muted-foreground">{item.unit}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {item.freeTier}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Bottom notes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            Balance never expires
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            All products included — pay for what you use
          </span>
          <span className="flex items-center gap-2">
            <Check className="h-4 w-4 text-primary" />
            Need enterprise volume?{" "}
            <a href="mailto:sales@kikuai.dev" className="text-primary hover:underline">
              Contact us
            </a>
          </span>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
