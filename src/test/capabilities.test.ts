import { describe, expect, it } from "vitest";
import { capabilities } from "@/lib/capabilities";

describe("Current Mac program capabilities", () => {
  it("supports basic chat", () => { expect(capabilities.chat).toBe(true); });
  it("supports image analysis", () => { expect(capabilities.imageAnalysis).toBe(true); });
  it("does not support file editing yet", () => { expect(capabilities.fileEditing).toBe(false); });
});
