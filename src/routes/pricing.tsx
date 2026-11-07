import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionTitle } from "@/components/site/SiteChrome";
import { models } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & credits — SlashCompute" },
      { name: "description", content: "Pay per model for new input, cached input and output tokens. Set a spending limit before every session." },
      { property: "og:title", content: "SlashCompute pricing" },
      { property: "og:description", content: "Credit-based, per-model rates with spending limits." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  const [bought, setBought] = useState(false);
  return (
    <>
      <PageHero tag="/pricing" title={<>Pay for tokens. <span className="text-primary">Not for typing.</span></>} sub="Credits are spent on hosted model usage only. Local edits and local test runs are never billed." />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle n="01" title="Rates per 1M tokens" kicker="placeholder prices" />
        <div className="overflow-x-auto border-2 border-foreground">
          <table className="w-full font-mono text-sm">
            <thead className="bg-primary text-primary-foreground">
              <tr>{["Model", "New input", "Cached input", "Output", "Runs on"].map((h) => <th key={h} className="label-mono p-3 text-left">{h}</th>)}</tr>
            </thead>
            <tbody>
              {models.map((m) => (
                <tr key={m.name} className="border-t-2 border-foreground">
                  <td className="p-3 font-bold">{m.name}</td>
                  <td className="p-3">{m.input}</td>
                  <td className="p-3">{m.cached}</td>
                  <td className="p-3">{m.output}</td>
                  <td className="p-3 text-muted-foreground">{m.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="border-t-2 border-foreground bg-card">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-20 md:grid-cols-2">
          <div>
            <SectionTitle n="02" title="Spending limits" />
            <p className="text-lg text-muted-foreground">See the rates and set a cap before each session starts. When the cap is reached, the agent pauses and asks.</p>
          </div>
          <div className="brut-box brut-shadow p-6">
            <span className="label-mono bg-accent px-2 py-1 text-accent-foreground">Test mode</span>
            <p className="headline mt-4 text-5xl">100 credits</p>
            <p className="mt-2 text-muted-foreground">No real payment is taken.</p>
            <Button variant="brut" size="lg" className="mt-6" onClick={() => setBought(true)}>
              {bought ? "✓ Test credits added" : "Buy test credits"}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
