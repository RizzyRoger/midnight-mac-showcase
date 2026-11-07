import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: [
      { title: "SlashCompute" },
      { httpEquiv: "refresh", content: "0; url=/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: RedirectHome,
});

function RedirectHome() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <p>
        This page has moved. <a href="/">Continue to the website</a>
      </p>
      <script dangerouslySetInnerHTML={{ __html: 'location.replace("/")' }} />
    </main>
  );
}
