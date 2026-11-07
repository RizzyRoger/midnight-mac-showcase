import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { MacWindow, SectionTitle, Ticker } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SlashCompute — Code with a supercomputer you don't own" },
      { name: "description", content: "A Mac-first AI coding agent that runs models on one Mac or splits them across many. Pay with credits or earn them by contributing." },
      { property: "og:title", content: "SlashCompute — Code with a supercomputer you don't own" },
      { property: "og:description", content: "Mac-first AI coding agent on a cooperative network of Apple Silicon Macs." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const parts = [
  { k: "/USE", t: "Ask an AI agent to work on your local code project.", n: "01" },
  { k: "/CONTRIBUTE", t: "Lend spare Mac power to run models for others. Earn credits.", n: "02" },
  { k: "/FUND", t: "Buy credits, or optionally earn them with idle mining.", n: "03" },
];
const caps = [
  "Read & search files", "Create & edit files", "Show diffs", "Run approved commands",
  "Build & run tests", "Read errors, iterate", "Plan big tasks", "Prepare Git commits",
];
const guards = [
  ["Folder boundaries", "The agent only sees the folder you pick."],
  ["Command approval", "Nothing runs in your terminal without a yes."],
  ["Cancel anytime", "One key stops the model and the job."],
  ["Spending limits", "Set a cap before every session."],
  ["Visible diffs", "Every change shown before it lands."],
  ["Checkpoints", "Roll files back to any earlier step."],
];

function Home() {
  return (
    <>
      <section className="grid-bg border-b-2 border-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-2">
          <div>
            <span className="label-mono bg-primary px-2 py-1 text-primary-foreground">macOS · Apple Silicon</span>
            <h1 className="headline mt-6 text-6xl md:text-8xl">
              Code with a supercomputer you <span className="text-primary">don't own.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              SlashCompute is an AI coding agent for your Mac. Big models run on a shared network of
              Macs — one machine or split across many.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="brut" size="lg"><Link to="/download">Download for Mac</Link></Button>
              <Button asChild variant="brutOutline" size="lg"><Link to="/demo">Try the demo →</Link></Button>
            </div>
          </div>
          <MacWindow title="~/projects/acme-app — /compute">
            <div className="space-y-2 p-5 font-mono text-sm">
              <p><span className="text-primary">you ›</span> Find the login bug, fix it, and run the tests.</p>
              <p className="text-muted-foreground">▸ read src/auth/login.ts</p>
              <p className="text-muted-foreground">▸ read src/auth/session.ts</p>
              <p className="text-muted-foreground">▸ plan: token expiry compared in seconds vs ms</p>
              <p className="text-destructive">- if (exp &lt; Date.now()) </p>
              <p className="text-primary">+ if (exp * 1000 &lt; Date.now())</p>
              <p className="text-accent">⚠ approve: npm test</p>
              <p>✓ 14 passed · 0 failed</p>
              <p className="label-mono text-muted-foreground">split ×3 macs · 2.4 credits<span className="blink">█</span></p>
            </div>
          </MacWindow>
        </div>
      </section>
      <Ticker />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle n="01" title="Three parts. One network." />
        <div className="grid gap-6 md:grid-cols-3">
          {parts.map((p) => (
            <div key={p.k} className="brut-box brut-shadow p-6">
              <span className="label-mono text-muted-foreground">{p.n}</span>
              <h3 className="headline mt-4 text-4xl text-primary">{p.k}</h3>
              <p className="mt-4">{p.t}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-foreground bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle n="02" title="A workspace, not a chatbot." />
          <div className="grid grid-cols-2 border-l-2 border-t-2 border-foreground md:grid-cols-4">
            {caps.map((c, i) => (
              <div key={c} className="border-b-2 border-r-2 border-foreground p-6 hover:bg-primary hover:text-primary-foreground">
                <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                <p className="headline mt-6 text-xl">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle n="03" title="Local tools. Remote brains." />
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="brut-box p-6">
            <span className="label-mono text-primary">Your Mac</span>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              <li>■ Project files</li><li>■ Agent tools</li><li>■ Permissions & approvals</li>
            </ul>
          </div>
          <div className="headline text-center text-5xl text-primary">⇄</div>
          <div className="brut-box p-6">
            <span className="label-mono text-primary">Inference network</span>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              <li>■ One Mac</li><li>■ or a multi-Mac pool</li><li>■ No shell access to you</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[["Local-only", "Nothing leaves your Mac."], ["Trusted pool", "Only Macs you approve."], ["Public network", "Prompt text goes to network hosts."]].map(([a, b]) => (
            <div key={a} className="border-2 border-dashed border-foreground p-4">
              <p className="label-mono text-accent">{a}</p><p className="mt-2 text-sm text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-foreground bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle n="04" title="You stay in control." />
          <div className="grid gap-6 md:grid-cols-3">
            {guards.map(([a, b]) => (
              <div key={a} className="border-l-4 border-primary pl-4">
                <h3 className="headline text-2xl">{a}</h3>
                <p className="mt-2 text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-16 md:flex-row md:items-center">
          <h2 className="headline text-5xl md:text-7xl">Your Mac. Every Mac.</h2>
          <Button asChild variant="brutOutline" size="lg"><Link to="/download">Get /compute</Link></Button>
        </div>
      </section>
    </>
  );
}
