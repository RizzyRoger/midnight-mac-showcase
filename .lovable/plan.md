# SlashCompute — Mac landing site (dark brutalist)

A marketing and demo site for **SlashCompute**: the Mac-first AI coding assistant that runs on a shared network of computers. It uses the project's final direction from the brief (coding agent + cooperative compute; grants removed, leaderboard added).

## Visual direction: dark brutalist
- Near-black background, off-white text, one loud accent: acid lime (`#C6FF00`-style). A warning orange is used only for "approve / cost" moments.
- Thick 2–3px borders, hard offset shadows, square corners, visible grid lines, no gradients and no soft blur.
- Type: **Space Grotesk** (large uppercase headlines) + **JetBrains Mono** (labels, numbers, terminal text).
- Raw details: section numbers like `[01]`, labels like `/USE /CONTRIBUTE /FUND`, a marquee ticker of live network stats, and a blinking cursor.
- Visuals are built from page elements (mock Mac windows, terminals, diagrams), not stock photos.

## Pages
```text
/              Home (landing)
/demo          Interactive app demo (the "main app")
/network       How the compute network works
/contribute    Earn credits by lending your Mac + leaderboard
/pricing       Credits, rates, spending limits
/download      Mac download / waitlist
```
All pages share a top bar (logo `/compute`, page links, "Download for Mac" button) and a heavy footer.

### 1. Home
- **Opening:** "CODE WITH A SUPERCOMPUTER YOU DON'T OWN." Two buttons: Download for Mac / Try the demo. Next to it is a mock Mac window running the agent task "Find the login bug, fix it, and run the tests."
- **Live ticker:** Macs online, tokens served, credits earned (sample numbers).
- **[01] Three parts:** USE / CONTRIBUTE / FUND blocks.
- **[02] What the agent does:** a grid of capabilities (reads files, edits, shows diffs, runs approved commands, runs tests, plans, prepares Git commits).
- **[03] Local tools, remote brains:** a diagram showing your Mac on one side and one Mac or a pool of Macs on the other, plus the privacy modes (local-only / trusted pool / public network).
- **[04] Safeguards:** folder limits, command approval, cancel anytime, spending limits, visible diffs, checkpoints.
- **Closing call to action** plus a note: "Apple Silicon first."

### 2. Demo (the main app, simulated)
A full mock Mac app in the browser that walks through the demo workflow from the brief, step by step:
1. Pick a project folder (sample repo file tree).
2. Type or choose a task and pick a model.
3. Agent log streams: files it inspected, then a plan.
4. Proposed diff shown → **Approve** button.
5. Approve running `npm test` → terminal shows the test results.
6. Usage panel: tokens in, cached and out, credits deducted, contributor rewards split across hosts.
7. Toggle between **Single Mac** and **Split across 3 Macs** to see how the work is shared.
Everything is scripted sample data. No real model runs yet.

### 3. Network
How the scheduler picks hardware (memory, speed, load, reliability). Explains single-Mac vs split-model with a block diagram, and states plainly that splitting isn't automatically faster.

### 4. Contribute
- A slider for "share X% of your Mac", with an estimate of credits earned.
- Rules: you earn for accepted work, you can stop anytime, and limits for power and heat are respected.
- Optional idle mining card: off by default, and inference always comes first.
- **Leaderboard** table ranking contributors by compute given (sample names).

### 5. Pricing
A rate table per model (new input / cached input / output), a spending-limit explainer, and a clearly labeled "test-mode" credit purchase button. Prices are shown as placeholders because the brief says they aren't decided.

### 6. Download
Big Mac download block (macOS 14+, Apple Silicon) and an email waitlist form that shows a confirmation on screen (not saved anywhere for now).

## Open points to confirm
- Your brief has no real numbers, names or download link, so I'll use clearly fake sample data and placeholder prices.
- The waitlist only shows a thank-you for now. Saving emails would need a backend later.

## Technical details
- Built in this project's React/TanStack Start setup, which outputs standard HTML. Each page is its own route with its own title and description.
- Design tokens (colors, borders, hard shadows, fonts) live in `src/styles.css`. There will be brutalist button and card styles in that file, so pages don't hardcode colors.
- The demo is a client-side state machine with timed steps. Sample data lives in a single shared file.
- Fonts are loaded via `<link>` in the root head.
