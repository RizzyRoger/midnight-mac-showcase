import { describe, expect, it } from "vitest";

import { macDownload, windowsDownload } from "@/lib/downloads";

describe("downloads", () => {
  it("links the Mac download to the dmg in the app repo's latest release", () => {
    expect(macDownload.status).toBe("available");
    expect(macDownload.url).toBe(
      "https://github.com/RizzyRoger/SlashCompute-V2/releases/latest/download/compute-mac.dmg",
    );
  });

  it("states the Mac build's real requirements (arm64, LSMinimumSystemVersion 12.0)", () => {
    expect(macDownload.requirements).toContain("macOS 12+");
    expect(macDownload.requirements).toContain("Apple Silicon");
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
