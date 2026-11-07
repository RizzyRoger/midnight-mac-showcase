import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MacWindow } from "@/components/site/SiteChrome";
import { demoFiles, models } from "@/lib/site-data";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Live demo — SlashCompute coding agent" },
      { name: "description", content: "Walk through a simulated SlashCompute session: pick a project, give a task, approve a diff, run tests, see credits used." },
      { property: "og:title", content: "SlashCompute demo" },
      { property: "og:description", content: "A simulated session of the SlashCompute Mac coding agent." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Demo,
});

type Line = { t: string; tone?: "muted" | "add" | "del" | "warn" | "ok" };
const TASK = "Find the login bug, fix it, and run the tests.";
const scan: Line[] = [
  { t: "▸ search 'login' → 3 files", tone: "muted" },
  { t: "▸ read src/auth/login.ts", tone: "muted" },
  { t: "▸ read src/auth/session.ts", tone: "muted" },
  { t: "▸ read tests/login.test.ts", tone: "muted" },
  { t: "PLAN: session expiry is in seconds but compared to Date.now() in ms. Fix the comparison, then run tests." },
];
const tests: Line[] = [
  { t: "$ npm test", tone: "muted" },
  { t: "✓ login accepts valid token", tone: "ok" },
  { t: "✓ login rejects expired token", tone: "ok" },
  { t: "✓ session refresh keeps user", tone: "ok" },
  { t: "Tests: 14 passed, 0 failed (1.82s)", tone: "ok" },
];
const toneCls = { muted: "text-muted-foreground", add: "text-primary", del: "text-destructive", warn: "text-accent", ok: "text-primary" };

type Step = 0 | 1 | 2 | 3 | 4 | 5;

function Demo() {
  const [step, setStep] = useState<Step>(0);
  const [split, setSplit] = useState(true);
  const [model, setModel] = useState(models[2]?.name ?? "");
  const [log, setLog] = useState<Line[]>([]);

  const stream = (lines: Line[], next: Step) => {
    lines.forEach((l, i) => setTimeout(() => {
      setLog((p) => [...p, l]);
      if (i === lines.length - 1) setStep(next);
    }, 450 * (i + 1)));
  };

  useEffect(() => { if (step === 1) stream(scan, 2); }, [step]);

  const reset = () => { setStep(0); setLog([]); };
  const hosts = split ? ["mac-a · M2 Ultra", "mac-b · M4 Max", "mac-c · M3 Max"] : ["mac-a · M2 Ultra"];
  const shares = split ? [0.45, 0.35, 0.2] : [1];
  const total = split ? 2.4 : 1.9;
  const steps = ["Project", "Task", "Plan", "Diff", "Tests", "Usage"];

  return (
    <section className="grid-bg">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <span className="label-mono bg-accent px-2 py-1 text-accent-foreground">Simulated · sample data</span>
        <h1 className="headline mt-4 text-5xl md:text-7xl">The app, in your browser.</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {steps.map((s, i) => (
            <span key={s} className={`label-mono border-2 border-foreground px-3 py-1 ${i <= step ? "bg-primary text-primary-foreground" : ""}`}>
              {i + 1}. {s}
            </span>
          ))}
        </div>

        <MacWindow title="acme-app — /compute" className="mt-8">
          <div className="grid min-h-[560px] md:grid-cols-[220px_1fr_280px]">
            <aside className="border-b-2 border-foreground p-4 md:border-b-0 md:border-r-2">
              <p className="label-mono text-muted-foreground">Project</p>
              <p className="mt-2 font-mono text-sm text-primary">~/projects/acme-app</p>
              <pre className="mt-4 font-mono text-xs leading-6">{demoFiles.join("\n")}</pre>
            </aside>

            <div className="flex flex-col p-4">
              <div className="flex-1 space-y-2 font-mono text-sm">
                {step === 0 && <p className="text-muted-foreground">Folder selected. Only files in this folder are visible to the agent.</p>}
                {step >= 1 && <p><span className="text-primary">you ›</span> {TASK}</p>}
                {log.map((l, i) => <p key={i} className={l.tone ? toneCls[l.tone] : ""}>{l.t}</p>)}
                {step >= 3 && (
                  <div className="my-3 border-2 border-foreground bg-background p-3">
                    <p className="label-mono text-muted-foreground">src/auth/session.ts {step === 3 ? "· proposed" : "· applied ✓"}</p>
                    <p className="text-destructive">- if (session.exp &lt; Date.now()) return null;</p>
                    <p className="text-primary">+ if (session.exp * 1000 &lt; Date.now()) return null;</p>
                  </div>
                )}
              </div>
              <div className="mt-4 border-t-2 border-foreground pt-4">
                {step === 0 && <Button variant="brut" onClick={() => setStep(1)}>Send task: "{TASK.slice(0, 24)}…"</Button>}
                {step === 1 && <p className="label-mono blink text-primary">Agent working…</p>}
                {step === 2 && <Button variant="brut" onClick={() => setStep(3)}>Show proposed change</Button>}
                {step === 3 && (
                  <div className="flex flex-wrap gap-3">
                    <Button variant="brut" onClick={() => { setLog((p) => [...p, { t: "✓ edit applied · checkpoint saved", tone: "ok" }, { t: "⚠ agent wants to run: npm test", tone: "warn" }]); setStep(4); }}>Approve edit</Button>
                    <Button variant="brutOutline" onClick={reset}>Reject</Button>
                  </div>
                )}
                {step === 4 && log.at(-1)?.tone === "warn" && (
                  <Button variant="brutAccent" onClick={() => stream(tests, 5)}>Allow command: npm test</Button>
                )}
                {step === 5 && <Button variant="brutOutline" onClick={reset}>↺ Restart demo</Button>}
              </div>
            </div>

            <aside className="border-t-2 border-foreground p-4 md:border-l-2 md:border-t-0">
              <p className="label-mono text-muted-foreground">Model</p>
              <select value={model} onChange={(e) => setModel(e.target.value)} className="mt-2 w-full border-2 border-foreground bg-background p-2 font-mono text-sm">
                {models.map((m) => <option key={m.name}>{m.name}</option>)}
              </select>
              <p className="label-mono mt-6 text-muted-foreground">Placement</p>
              <div className="mt-2 grid grid-cols-2">
                <button onClick={() => setSplit(false)} className={`label-mono border-2 border-foreground p-2 ${!split ? "bg-primary text-primary-foreground" : ""}`}>Single Mac</button>
                <button onClick={() => setSplit(true)} className={`label-mono border-2 border-l-0 border-foreground p-2 ${split ? "bg-primary text-primary-foreground" : ""}`}>Split ×3</button>
              </div>
              <div className="mt-4 space-y-2">
                {hosts.map((h, i) => (
                  <div key={h}>
                    <p className="font-mono text-xs">{h}</p>
                    <div className="h-3 border-2 border-foreground"><div className="h-full bg-primary" style={{ width: `${(shares[i] ?? 0) * 100}%` }} /></div>
                  </div>
                ))}
              </div>
              <p className="label-mono mt-6 text-muted-foreground">Spending limit</p>
              <p className="font-mono text-sm">5.00 credits</p>
              {step === 5 && (
                <div className="mt-6 border-2 border-primary p-3 font-mono text-xs">
                  <p className="label-mono text-primary">Usage</p>
                  <p>new input: 18,420 tok</p>
                  <p>cached input: 9,100 tok</p>
                  <p>output: 1,240 tok</p>
                  <p className="mt-2 text-primary">charged: {total.toFixed(2)} credits</p>
                  <p className="mt-2 text-muted-foreground">contributor rewards:</p>
                  {hosts.map((h, i) => <p key={h}>{h.split(" ")[0]} +{(total * 0.6 * (shares[i] ?? 0)).toFixed(2)}</p>)}
                  <p className="mt-2 text-muted-foreground">local edits & tests: not billed</p>
                </div>
              )}
            </aside>
          </div>
        </MacWindow>
      </div>
    </section>
  );
}
