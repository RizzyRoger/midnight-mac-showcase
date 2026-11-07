import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, SectionTitle } from "@/components/site/SiteChrome";
import { leaderboard } from "@/lib/site-data";

export const Route = createFileRoute("/contribute")({
  head: () => ({
    meta: [
      { title: "Contribute your Mac — SlashCompute" },
      { name: "description", content: "Share part of your Mac's power, run models for others, and earn credits for accepted work. See the contributor leaderboard." },
      { property: "og:title", content: "Contribute to SlashCompute" },
      { property: "og:description", content: "Lend spare Mac power, earn credits, climb the leaderboard." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contribute,
});

function Contribute() {
  const [pct, setPct] = useState(40);
  const est = Math.round(pct * 6.2);
  return (
    <>
      <PageHero tag="/contribute" title={<>Your idle Mac <span className="text-primary">pays you back.</span></>} sub="Choose how much of your Mac to share. Earn credits for work that's accepted — not just for being online." />
      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2">
        <div className="brut-box brut-shadow p-6">
          <p className="label-mono text-muted-foreground">Share of your Mac</p>
          <p className="headline mt-2 text-8xl text-primary">{pct}%</p>
          <input type="range" min={5} max={90} value={pct} onChange={(e) => setPct(+e.target.value)} className="mt-6 w-full accent-primary" aria-label="Share percentage" />
          <p className="mt-6 font-mono">≈ {est} credits / week <span className="text-muted-foreground">(sample estimate)</span></p>
        </div>
        <ul className="space-y-4">
          {["Earn for accepted inference work", "Stop anytime — one click", "Power, heat and memory limits respected", "Your files are never exposed to anyone"].map((r) => (
            <li key={r} className="border-l-4 border-primary pl-4 text-lg">{r}</li>
          ))}
          <li className="border-2 border-dashed border-accent p-4">
            <p className="label-mono text-accent">Optional · idle mining</p>
            <p className="mt-2 text-sm text-muted-foreground">Off by default. Runs only when no inference jobs are waiting, and stops the moment one arrives. Shown separately from inference earnings.</p>
          </li>
        </ul>
      </section>
      <section className="border-t-2 border-foreground bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle n="01" title="Leaderboard" kicker="sample" />
          <div className="overflow-x-auto border-2 border-foreground">
            <table className="w-full font-mono text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>{["#", "Contributor", "Hardware", "Jobs", "Credits"].map((h) => <th key={h} className="label-mono p-3 text-left">{h}</th>)}</tr>
              </thead>
              <tbody>
                {leaderboard.map((r) => (
                  <tr key={r.rank} className="border-t-2 border-foreground hover:bg-secondary">
                    <td className="headline p-3 text-2xl">{r.rank}</td>
                    <td className="p-3">{r.name}</td>
                    <td className="p-3 text-muted-foreground">{r.chip}</td>
                    <td className="p-3">{r.jobs.toLocaleString()}</td>
                    <td className="p-3 text-primary">{r.credits.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
