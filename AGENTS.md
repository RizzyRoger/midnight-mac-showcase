<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

- Keep current capability availability in a shared browser-safe module, so home content and previews cannot disagree about supported tools.
- Use global semantic surface, texture, shadow and motion tokens for layered presentation; screen-edge overlays must never capture pointer events or cover navigation.
- Keep decorative GPU artwork in a browser-safe SVG component with CSS motion and a static reduced-motion fallback, so it remains crisp without adding playback dependencies.
- Deliver native-app restyling as stylesheet-only changes against original repository source, preserving HTML, JavaScript, Python, API contracts and permissions byte-for-byte to avoid replacing real behavior with simulations.
- Keep the marketing website at /website; the root opens /compare with original and restyled source markup, explicitly visual-only because native behavior runs in the Mac app.
- Export into one repository with the native app at the root and marketing-only source under website/; exclude simulations and comparison routes, and preserve native executable source with CSS/texture-only changes so both products stay independent.
- Keep native-restyle as the canonical CSS/texture-only laptop adaptation; mirror its stylesheet into the visual comparison without changing original markup or native behavior.
