export function formatPakistanWhatsAppNumber(phone: string | null | undefined) {
  const digits = (phone || "").replace(/\D/g, "");

  if (!digits) return "";
  if (digits.startsWith("0092")) return digits.slice(2);
  if (digits.startsWith("92")) return digits;
  if (digits.startsWith("0")) return `92${digits.slice(1)}`;
  if (digits.startsWith("3") && digits.length === 10) return `92${digits}`;

  return digits;
}

export function createWhatsAppLink(phone: string | null | undefined, message: string) {
  const number = formatPakistanWhatsAppNumber(phone);
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
