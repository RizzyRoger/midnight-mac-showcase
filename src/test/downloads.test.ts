import { describe, expect, it } from "vitest";

import { macDownload, windowsDownload } from "@/lib/downloads";

describe("downloads", () => {
  it("links the Mac download to the compute classic dmg in its repo's latest release", () => {
    expect(macDownload.status).toBe("available");
    expect(macDownload.url).toBe(
      "https://github.com/darrenyoungblood12345-a11y/SlashCompute/releases/latest/download/compute-classic-mac.dmg",
    );
    expect(macDownload.releaseNotes).toBe(
      "https://github.com/darrenyoungblood12345-a11y/SlashCompute/releases/latest",
    );
  });

  it("states the Mac build's real requirements (arm64, LSMinimumSystemVersion 14.0)", () => {
    expect(macDownload.requirements).toContain("macOS 14+");
    expect(macDownload.requirements).toContain("Apple Silicon");
  });

  it("names the app the dmg really holds, so the install steps match what users see", () => {
    expect(macDownload.steps[0]).toContain("compute-classic-mac.dmg");
    expect(macDownload.steps[0]).toContain("compute classic");
    expect(macDownload.steps.join(" ")).not.toContain("compute-mac.dmg");
  });

  it("tells Mac users to allow python3.13, the name macOS shows for the app's local network access", () => {
    const step = macDownload.steps.find((s) => s.includes("local network"));
    expect(step).toContain("python3.13");
    expect(step).toContain("Allow");
  });

  it("offers no Windows link until a Windows build is published", () => {
    expect(windowsDownload.status).toBe("coming-soon");
    expect(windowsDownload.url).toBeNull();
    expect(windowsDownload.steps.length).toBeGreaterThan(0);
  });
});
