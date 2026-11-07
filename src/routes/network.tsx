import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SectionTitle } from "@/components/site/SiteChrome";

export const Route = createFileRoute("/network")({
  head: () => ({
    meta: [
      { title: "How the network works — SlashCompute" },
      { name: "description", content: "You pick the model, the scheduler picks the Macs: single-Mac or split-model inference across Apple Silicon." },
      { property: "og:title", content: "How the SlashCompute network works" },
      { property: "og:description", content: "Single-Mac and split-model inference across a cooperative Mac network." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Network,
});

const factors = ["Memory", "Model fit", "Measured speed", "Network quality", "Current load", "Reliability"];

function Network() {
  return (
    <>
      <PageHero tag="/network" title={<>You pick the model. <span className="text-primary">We pick the Macs.</span></>} sub="The scheduler places each request on hardware that can serve it well — one Mac when it fits, several when it doesn't." />
      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle n="01" title="Two ways to run" />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="brut-box brut-shadow p-6">
            <h3 className="headline text-3xl text-primary">Single Mac</h3>
            <p className="mt-3 text-muted-foreground">One eligible Mac serves the whole model when it can comfortably handle it.</p>
            <div className="mt-6 flex h-24 items-center justify-center border-2 border-foreground bg-primary font-mono text-primary-foreground">MODEL ▮▮▮▮▮▮▮▮</div>
          </div>
          <div className="brut-box brut-shadow p-6">
            <h3 className="headline text-3xl text-primary">Split model</h3>
            <p className="mt-3 text-muted-foreground">Layers are spread across several Macs when one doesn't have the memory.</p>
            <div className="mt-6 grid h-24 grid-cols-3 gap-2">
              {["L1–26", "L27–52", "L53–80"].map((l) => <div key={l} className="flex items-center justify-center border-2 border-foreground font-mono text-sm">{l}</div>)}
            </div>
          </div>
        </div>
        <p className="label-mono mt-6 border-2 border-dashed border-accent p-4 text-accent">Note: splitting gives access to bigger models. It doesn't automatically make them faster.</p>
      </section>
      <section className="border-t-2 border-foreground bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle n="02" title="What the scheduler weighs" />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {factors.map((f, i) => (
              <div key={f} className="border-2 border-foreground p-5">
                <span className="label-mono text-primary">0{i + 1}</span>
                <p className="headline mt-3 text-2xl">{f}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-muted-foreground">Starting scope: Apple Silicon Macs and a small catalog of supported models.</p>
        </div>
      </section>
    </>
  );
}
