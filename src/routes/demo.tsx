import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Image, MessageSquare, RotateCcw, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MacWindow } from "@/components/site/SiteChrome";
import { capabilities } from "@/lib/capabilities";
import useImage from "@/assets/use-mac.jpg";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Chat & image preview — SlashCompute" },
      { name: "description", content: "An illustrative preview of SlashCompute's basic chat and image analysis. File editing is not yet available." },
      { property: "og:title", content: "SlashCompute chat & image preview" },
      { property: "og:description", content: "Preview basic chat and image analysis in the Mac app. No file editing or terminal commands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Demo,
});

function Demo() {
  const [mode, setMode] = useState<"chat" | "image">("chat");
  const [sent, setSent] = useState(false);
  const prompt = mode === "chat" ? "Explain unified memory in simple terms." : "What stands out in this image?";
  return (
    <section className="grid-bg">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <span className="label-mono border border-accent bg-card px-2 py-1">Illustrative preview · preset responses</span>
        <h1 className="headline mt-6 text-5xl md:text-7xl">Chat. Look closer.</h1>
        <p className="mt-5 max-w-2xl text-muted-foreground">Basic chat and image analysis are available in the Mac program. File editing is not yet available.</p>
        <MacWindow title="chat & image analysis — /compute" className="mt-10">
          <div className="grid md:grid-cols-[220px_1fr]">
            <aside className="border-b-2 border-line p-5 md:border-b-0 md:border-r-2">
              <p className="label-mono mb-5 text-muted-foreground">Conversation</p>
              <div className="flex flex-col gap-3">
                <Button variant={mode === "chat" ? "brut" : "brutOutline"} onClick={() => { setMode("chat"); setSent(false); }} aria-pressed={mode === "chat"} disabled={!capabilities.chat}><MessageSquare size={16} /> Chat</Button>
                <Button variant={mode === "image" ? "brut" : "brutOutline"} onClick={() => { setMode("image"); setSent(false); }} aria-pressed={mode === "image"} disabled={!capabilities.imageAnalysis}><Image size={16} /> Image</Button>
              </div>
              <p className="label-mono mt-8 text-muted-foreground">File editing</p>
              <p className="mt-2 text-sm text-muted-foreground">Not yet available</p>
            </aside>
            <div className="flex min-h-[480px] flex-col p-5 md:p-8">
              <div className="flex-1 space-y-6">
                {mode === "image" && <img src={useImage} alt="Silver laptop on a textured desk with chat and image content on its screen" width={1024} height={640} className="w-full max-w-md border-2 border-line" />}
                <p className="font-mono text-sm"><span className="text-primary">you ›</span> {prompt}</p>
                {sent && <div className="border-l-2 border-primary pl-5 leading-7" role="status">
                  <p className="label-mono mb-3 text-primary">/compute</p>
                  {mode === "chat" ? "Unified memory is a shared workspace for your Mac’s CPU and GPU. Both can use the same data without copying it between separate memory pools." : "A silver laptop sits on a textured grey desk. Its screen shows a conversation and an attached landscape image, with a small green status indicator."}
                </div>}
              </div>
              <div className="mt-8 border-t-2 border-line pt-5">
                {sent ? <Button variant="brutOutline" onClick={() => setSent(false)}><RotateCcw size={16} /> Restart preview</Button> : <Button variant="brut" onClick={() => setSent(true)}><Send size={16} /> Preview response</Button>}
              </div>
            </div>
          </div>
        </MacWindow>
      </div>
    </section>
  );
}
