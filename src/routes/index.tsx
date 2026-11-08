import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/site/SiteChrome";
import { Eye, LockKeyhole, ShieldCheck, MessageSquare, CirclePause, FolderLock, Terminal, Undo2 } from "lucide-react";
import { capabilityItems } from "@/lib/capabilities";
import { GpuBackdrop } from "@/components/site/GpuBackdrop";
import useImage from "@/assets/use-mac.jpg";
import contributeImage from "@/assets/contribute-macs.jpg";
import fundImage from "@/assets/fund-credits.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SlashCompute — Code with a supercomputer you don't own" },
      { name: "description", content: "Mac-first AI chat and image analysis on shared Apple Silicon compute. File editing is not yet available." },
      { property: "og:title", content: "SlashCompute — Code with a supercomputer you don't own" },
      { property: "og:description", content: "Basic chat and image analysis for Mac. File editing is not yet available." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const parts = [
  { k: "/USE", t: "Talk with AI and explore images, right from your Mac.", n: "01", image: useImage, alt: "Mac laptop with a chat and image conversation" },
  { k: "/CONTRIBUTE", t: "Lend spare Mac power to run models for others. Earn credits.", n: "02", image: contributeImage, alt: "Three connected compact Mac computers" },
  { k: "/FUND", t: "Buy credits, or optionally earn them with idle mining.", n: "03", image: fundImage, alt: "Machined computing tokens beside a desktop computer" },
];
const guards = [
  { title: "Your conversation", text: "Basic chat is available now.", icon: MessageSquare, status: "Available" },
  { title: "Images, understood", text: "Image analysis is available in the Mac app.", icon: Eye, status: "Available" },
  { title: "No file edits yet", text: "The current app does not modify your project files.", icon: FolderLock, status: "Current boundary" },
  { title: "Command approval", text: "An explicit approval step is planned for future terminal tools.", icon: Terminal, status: "Planned" },
  { title: "Spending limits", text: "Session caps are part of the proposed network experience.", icon: CirclePause, status: "Planned" },
  { title: "Checkpoints", text: "Reversible changes are planned alongside future editing tools.", icon: Undo2, status: "Planned" },
];

function Home() {
  return (
    <>
      <section className="home-hero grid-bg border-b-2 border-foreground">
        <GpuBackdrop />
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 md:py-24">
          <div>
            <span className="label-mono bg-primary px-2 py-1 text-primary-foreground">macOS · Apple Silicon</span>
            <h1 className="headline mt-6 text-5xl md:text-7xl">
              <span className="text-primary">/compute</span><br />AI on your Mac.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Chat with AI and analyze images on your Mac. Shared Apple Silicon compute is the vision.
              File editing isn’t available yet.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild variant="brut" size="lg"><Link to="/download">Download for Mac</Link></Button>
              <Button asChild variant="brutOutline" size="lg"><Link to="/demo">Try the demo →</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionTitle n="01" title="Three parts. One network." />
        <div className="grid gap-6 md:grid-cols-3">
          {parts.map((p) => (
            <div key={p.k} className="brut-box brut-shadow part-panel overflow-hidden">
              <div className="p-6">
              <span className="label-mono text-muted-foreground">{p.n}</span>
              <h3 className="headline mt-4 text-4xl text-primary">{p.k}</h3>
              <p className="mt-4">{p.t}</p>
              </div>
              <img src={p.image} alt={p.alt} width={1024} height={640} loading="lazy" className="aspect-[8/5] w-full border-t-2 border-line object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="border-y-2 border-foreground bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle n="02" title="What’s available today." />
          <div className="grid grid-cols-1 border-l-2 border-t-2 border-line sm:grid-cols-2 md:grid-cols-4">
            {capabilityItems.map((c, i) => (
              <div key={c.title} className="capability-tile border-b-2 border-r-2 border-line p-6">
                <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                <p className="headline mt-6 text-xl">{c.title}</p>
                <p className={`label-mono mt-4 ${c.available ? "text-primary" : "text-muted-foreground"}`}>{c.available ? "Available" : "Coming soon"}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle n="03" title="Your Mac. Your boundaries." kicker="network design" />
        <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
          <div className="brut-box p-6">
            <span className="label-mono text-primary">Your Mac</span>
            <ul className="mt-4 space-y-2 font-mono text-sm">
              <li>■ Chat & image input</li><li>■ No file editing yet</li><li>■ Your selected content</li>
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
          {[
            { title: "Local-only", text: "Designed to keep inference on your own Mac, with no network host involved.", icon: LockKeyhole, note: "Keep it on your machine" },
            { title: "Trusted pool", text: "Designed for a pool of Macs you explicitly choose, rather than unknown hosts.", icon: ShieldCheck, note: "Choose who you trust" },
            { title: "Public network", text: "Network hosts receive the content sent for inference. Keep sensitive content local.", icon: Eye, note: "Know what you share" },
          ].map((p) => (
            <div key={p.title} className="privacy-panel p-6">
              <p.icon size={26} className="mb-5 text-primary" strokeWidth={1.5} />
              <p className="headline text-2xl">{p.title}</p><p className="mt-3 text-sm leading-6 text-muted-foreground">{p.text}</p>
              <p className="label-mono mt-5 border-t border-line pt-4 text-primary">{p.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t-2 border-foreground bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle n="04" title="You stay in control." />
          <div className="grid gap-6 md:grid-cols-3">
            {guards.map((g) => (
              <div key={g.title} className="mechanical-panel p-6">
                <div className="mb-5 flex items-center justify-between gap-3"><g.icon size={24} strokeWidth={1.5} className="text-primary" /><span className="label-mono text-muted-foreground">{g.status}</span></div>
                <h3 className="headline text-2xl">{g.title}</h3>
                <p className="mt-3 leading-6 text-muted-foreground">{g.text}</p>
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
