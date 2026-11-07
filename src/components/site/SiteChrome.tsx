import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { tickerStats } from "@/lib/site-data";

const nav = [
  { to: "/demo", label: "Demo" },
  { to: "/network", label: "Network" },
  { to: "/contribute", label: "Contribute" },
  { to: "/pricing", label: "Pricing" },
] as const;

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-foreground bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="headline text-2xl">
          <span className="text-primary">/</span>compute
        </Link>
        <nav className="hidden gap-6 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="label-mono hover:text-primary"
              activeProps={{ className: "text-primary underline underline-offset-4" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="brut" size="sm">
          <Link to="/download">Download for Mac</Link>
        </Button>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t-2 border-foreground px-4 py-2 md:hidden">
        {nav.map((n) => (
          <Link key={n.to} to={n.to} className="label-mono">{n.label}</Link>
        ))}
      </nav>
    </header>
  );
}

export function Ticker() {
  const items = [...tickerStats, ...tickerStats];
  return (
    <div className="overflow-hidden border-y-2 border-foreground bg-primary py-2 text-primary-foreground">
      <div className="marquee flex w-max gap-10">
        {items.map((t, i) => (
          <span key={i} className="label-mono font-bold">■ {t}</span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <p className="headline text-6xl md:text-8xl">
            <span className="text-primary">/</span>compute
          </p>
          <p className="label-mono mt-4 text-muted-foreground">
            Mac-first AI coding assistant · shared computing · Apple Silicon first
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <span className="label-mono text-muted-foreground">Product</span>
          <Link to="/demo" className="hover:text-primary">Demo</Link>
          <Link to="/network" className="hover:text-primary">Network</Link>
          <Link to="/pricing" className="hover:text-primary">Pricing</Link>
        </div>
        <div className="flex flex-col gap-2">
          <span className="label-mono text-muted-foreground">Join</span>
          <Link to="/contribute" className="hover:text-primary">Contribute</Link>
          <Link to="/download" className="hover:text-primary">Download</Link>
        </div>
      </div>
      <div className="label-mono border-t-2 border-foreground px-4 py-3 text-center text-muted-foreground">
        © 2026 SlashCompute · Sample data shown for demonstration
      </div>
    </footer>
  );
}

export function SectionTitle({ n, title, kicker }: { n: string; title: string; kicker?: string }) {
  return (
    <div className="mb-10 border-b-2 border-foreground pb-4">
      <span className="label-mono text-primary">[{n}]{kicker ? ` ${kicker}` : ""}</span>
      <h2 className="headline mt-2 text-4xl md:text-6xl">{title}</h2>
    </div>
  );
}

export function PageHero({ tag, title, sub }: { tag: string; title: ReactNode; sub: string }) {
  return (
    <section className="grid-bg border-b-2 border-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <span className="label-mono bg-primary px-2 py-1 text-primary-foreground">{tag}</span>
        <h1 className="headline mt-6 max-w-5xl text-5xl md:text-8xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}

export function MacWindow({ title, children, className = "" }: { title: string; children: ReactNode; className?: string }) {
  return (
    <div className={`brut-box brut-shadow ${className}`}>
      <div className="flex items-center gap-2 border-b-2 border-foreground bg-secondary px-3 py-2">
        <span className="size-3 border-2 border-foreground bg-destructive" />
        <span className="size-3 border-2 border-foreground bg-accent" />
        <span className="size-3 border-2 border-foreground bg-primary" />
        <span className="label-mono ml-2 text-muted-foreground">{title}</span>
      </div>
      {children}
    </div>
  );
}
