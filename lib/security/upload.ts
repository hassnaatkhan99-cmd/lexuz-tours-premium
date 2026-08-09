import "server-only";

export const MAX_SCREENSHOT_BYTES = 5 * 1024 * 1024;

type ValidatedUpload = {
  bytes: Uint8Array;
  contentType: "image/png" | "image/jpeg";
  extension: "png" | "jpg";
};

function isPng(bytes: Uint8Array) {
  const signature = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  return bytes.length >= signature.length && signature.every((value, index) => bytes[index] === value);
}

function isJpeg(bytes: Uint8Array) {
  return bytes.length >= 4 && bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[bytes.length - 2] === 0xff && bytes[bytes.length - 1] === 0xd9;
}

export async function validatePaymentScreenshot(file: File): Promise<ValidatedUpload> {
  if (file.size === 0) throw new Error("UPLOAD_REQUIRED");
  if (file.size > MAX_SCREENSHOT_BYTES) throw new Error("UPLOAD_TOO_LARGE");

  const bytes = new Uint8Array(await file.arrayBuffer());
  if (isPng(bytes)) return { bytes, contentType: "image/png", extension: "png" };
  if (isJpeg(bytes)) return { bytes, contentType: "image/jpeg", extension: "jpg" };
  throw new Error("UPLOAD_INVALID_TYPE");
}
