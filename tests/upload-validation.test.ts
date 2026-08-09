import { describe, expect, it } from "vitest";
import { MAX_SCREENSHOT_BYTES, validatePaymentScreenshot } from "@/lib/security/upload";

describe("payment screenshot validation", () => {
  it("recognizes PNG bytes independent of the supplied MIME type", async () => {
    const file = new File([new Uint8Array([0x89,0x50,0x4e,0x47,0x0d,0x0a,0x1a,0x0a,0x00])], "unsafe.exe", { type: "application/octet-stream" });
    await expect(validatePaymentScreenshot(file)).resolves.toMatchObject({ extension: "png", contentType: "image/png" });
  });

  it("recognizes complete JPEG marker bytes", async () => {
    const file = new File([new Uint8Array([0xff,0xd8,0x00,0xff,0xd9])], "image.jpg", { type: "image/jpeg" });
    await expect(validatePaymentScreenshot(file)).resolves.toMatchObject({ extension: "jpg", contentType: "image/jpeg" });
  });

  it("rejects spoofed and oversized files", async () => {
    await expect(validatePaymentScreenshot(new File(["not an image"], "fake.png", { type: "image/png" }))).rejects.toThrow("UPLOAD_INVALID_TYPE");
    await expect(validatePaymentScreenshot(new File([new Uint8Array(MAX_SCREENSHOT_BYTES + 1)], "large.png", { type: "image/png" }))).rejects.toThrow("UPLOAD_TOO_LARGE");
  });
});
