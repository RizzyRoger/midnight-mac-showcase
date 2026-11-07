import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LATEST_RELEASE_URL, macDownload, windowsDownload, type Download } from "@/lib/downloads";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: "Download SlashCompute for Mac" },
      {
        name: "description",
        content:
          "Download the SlashCompute Mac app for Apple Silicon (macOS 12+). Windows is coming soon.",
      },
      { property: "og:title", content: "Download SlashCompute for Mac" },
      {
        property: "og:description",
        content: "Early build for Apple Silicon Macs, macOS 12+. Windows coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DownloadPage,
});

const extension = (file: string) => `.${file.split(".").pop()}`;

function DownloadCard({ download }: { download: Download }) {
  const url = download.status === "available" ? download.url : null;
  return (
    <div className={`brut-box p-6 ${url ? "brut-shadow" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="headline text-3xl">{download.platform}</p>
        <span
          className={`label-mono px-2 py-1 ${url ? "bg-primary text-primary-foreground" : "border border-line text-muted-foreground"}`}
        >
          {url ? "Early build" : "Coming soon"}
        </span>
      </div>
      <p className="label-mono mt-2 text-muted-foreground">{download.requirements}</p>
      {url ? (
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Button asChild variant="brut" size="lg">
            <a href={url}>Download {extension(download.file)}</a>
          </Button>
          <a
            href={LATEST_RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="label-mono text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
          >
            Release notes ↗
          </a>
        </div>
      ) : (
        <Button variant="brut" size="lg" className="mt-6" disabled>
          Download {extension(download.file)} — coming soon
        </Button>
      )}
      <p className="label-mono mt-6 text-muted-foreground">
        {url ? "Install" : "Install (once it's out)"}
      </p>
      <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
        {download.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      {download.help && (
        <a
          href={download.help.url}
          target="_blank"
          rel="noopener noreferrer"
          className="label-mono mt-4 inline-block text-muted-foreground underline-offset-4 hover:text-primary hover:underline"
        >
          {download.help.label} ↗
        </a>
      )}
    </div>
  );
}

function DownloadPage() {
  const [done, setDone] = useState(false);
  return (
    <section className="grid-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2">
        <div>
          <span className="label-mono bg-primary px-2 py-1 text-primary-foreground">/download</span>
          <h1 className="headline mt-6 text-6xl md:text-8xl">
            Get <span className="text-primary">/compute</span> for Mac.
          </h1>
          <p className="label-mono mt-6 text-muted-foreground">{macDownload.requirements}</p>
          <p className="label-mono mt-2 text-muted-foreground">Windows 10/11 · coming soon</p>
        </div>
        <div className="space-y-6">
          <DownloadCard download={macDownload} />
          <DownloadCard download={windowsDownload} />
          <form
            className="brut-box p-6"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <p className="label-mono text-muted-foreground">Join the waitlist</p>
            {done ? (
              <p className="headline mt-4 text-3xl text-primary">✓ You're on the list.</p>
            ) : (
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 border-2 border-foreground bg-background p-3 font-mono"
                />
                <Button type="submit" variant="brut" size="lg">
                  Join
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
