import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, MessageSquare, Shield, Brain, Sparkles } from "lucide-react"

export default function PATASPage() {
  return (
    <div className="noise-bg grid-bg min-h-screen">
      {/* Header */}
      <div className="border-b border-border/40 bg-background/50 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Link>
          <Button asChild size="sm" className="rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products/patas/demo">Try Demo</Link>
          </Button>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
            <MessageSquare className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-semibold tracking-tight">PATAS</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Upload chat logs or message datasets and get AI-generated spam detection rules. PATAS clusters patterns and
            outputs JSON blocking rules ready for production.
          </p>
        </div>

        {/* Visual Demo */}
        <div className="mb-16 rounded-2xl border border-border/60 bg-card/30 p-8">
          <div className="flex items-center justify-center gap-8">
            {/* Input: Logs */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Input</p>
              <div className="space-y-2 font-mono text-xs">
                <div className="rounded bg-muted/30 px-3 py-2 border-l-2 border-yellow-500/50">
                  <span className="text-yellow-500">[WARN]</span> Free V-Bucks click here...
                </div>
                <div className="rounded bg-muted/30 px-3 py-2 border-l-2 border-red-500/50">
                  <span className="text-red-500">[SPAM]</span> Get rich quick scheme!!!
                </div>
                <div className="rounded bg-muted/30 px-3 py-2 border-l-2 border-muted-foreground/30">
                  <span className="text-muted-foreground">[INFO]</span> Normal user message
                </div>
                <div className="rounded bg-muted/30 px-3 py-2 border-l-2 border-red-500/50">
                  <span className="text-red-500">[SPAM]</span> Buy followers now!!!
                </div>
              </div>
              <p className="mt-3 text-xs text-muted-foreground text-center">chat_logs.jsonl</p>
            </div>

            <ArrowRight className="h-6 w-6 text-primary flex-shrink-0" />

            {/* Output: JSON Rules */}
            <div className="flex-1 rounded-xl border border-border/40 bg-background/50 p-6">
              <p className="mb-4 text-xs font-medium uppercase tracking-wider text-muted-foreground">Output</p>
              <pre className="rounded-lg bg-muted/30 p-4 text-xs font-mono border border-border/30 overflow-hidden">
                {`{
  "action": "BLOCK",
  "pattern": "free.*v-?bucks",
  "confidence": 0.94,
  "cluster": "gaming_scam"
}`}
              </pre>
              <p className="mt-3 text-xs text-muted-foreground text-center">rules.json</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {[
            { icon: Brain, title: "AI Clustering", desc: "Automatically groups similar spam patterns" },
            { icon: Shield, title: "Production Ready", desc: "Export rules compatible with Discord, Slack, etc." },
            { icon: Sparkles, title: "Auto-tune", desc: "Suggests SAFE_AUTO or REVIEW_ONLY modes" },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl border border-border/40 bg-card/20 p-6">
              <feature.icon className="mb-3 h-5 w-5 text-primary" />
              <h3 className="mb-2 font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Specs Section */}
        <div className="mb-16 rounded-2xl border border-border/60 bg-card/30 p-8">
          <h2 className="mb-6 text-xl font-semibold">Specifications</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">Input Formats</h3>
              <p className="text-sm">JSONL, CSV, plain text logs</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">Output</h3>
              <p className="text-sm">JSON rules for Discord AutoMod, Slack, custom systems</p>
            </div>
            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">What counts as "message"</h3>
              <p className="text-sm">One line/object in input file</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="rounded-2xl border border-border/60 bg-card/30 p-8 text-center">
          <h2 className="mb-2 text-xl font-semibold">Pricing</h2>
          <p className="mb-6 text-muted-foreground">Pay per analysis batch</p>
          <div className="inline-flex items-baseline gap-1">
            <span className="text-4xl font-bold text-primary">$0.10</span>
            <span className="text-muted-foreground">/ 1,000 messages</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">First 1,000 messages free</p>
          <Button asChild className="mt-6 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products/patas/demo">Analyze Logs</Link>
          </Button>
        </div>

        {/* Docs Link */}
        <div className="mt-8 text-center">
          <Link href="/docs/patas" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            Read the documentation →
          </Link>
        </div>
      </div>
    </div>
  )
}
