import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download SlashCompute for Mac" },
      { name: "description", content: "Get the SlashCompute Mac app for Apple Silicon, or join the waitlist for early access." },
      { property: "og:title", content: "Download SlashCompute for Mac" },
      { property: "og:description", content: "The Mac-first AI coding agent. Apple Silicon, macOS 14+." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Download,
});

function Download() {
  const [done, setDone] = useState(false);
  return (
    <section className="grid-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2">
        <div>
          <span className="label-mono bg-primary px-2 py-1 text-primary-foreground">/download</span>
          <h1 className="headline mt-6 text-6xl md:text-8xl">Get <span className="text-primary">/compute</span> for Mac.</h1>
          <p className="label-mono mt-6 text-muted-foreground">macOS 14+ · Apple Silicon (M1 and newer)</p>
        </div>
        <div className="space-y-6">
          <div className="brut-box brut-shadow p-6">
            <p className="headline text-3xl">Early build</p>
            <p className="mt-2 text-muted-foreground">Public download opens soon.</p>
            <Button variant="brut" size="lg" className="mt-6" disabled>Download .dmg — coming soon</Button>
          </div>
          <form
            className="brut-box p-6"
            onSubmit={(e) => { e.preventDefault(); setDone(true); }}
          >
            <p className="label-mono text-muted-foreground">Join the waitlist</p>
            {done ? (
              <p className="headline mt-4 text-3xl text-primary">✓ You're on the list.</p>
            ) : (
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input required type="email" placeholder="you@example.com" className="flex-1 border-2 border-foreground bg-background p-3 font-mono" />
                <Button type="submit" variant="brut" size="lg">Join</Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
