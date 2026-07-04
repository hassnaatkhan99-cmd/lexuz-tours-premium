import type { ComponentPropsWithoutRef } from "react";
import type { LucideIcon } from "lucide-react";
import { clsx } from "clsx";

type IconSize = "sm" | "md" | "lg";
type IconTone = "default" | "primary" | "accent" | "success" | "error" | "whatsapp" | "muted";

const iconSizes: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24
};

const iconTones: Record<IconTone, string> = {
  default: "text-lexuzNeutral-60",
  primary: "text-brand-primary",
  accent: "text-brand-accent",
  success: "text-semantic-success",
  error: "text-semantic-error",
  whatsapp: "text-brand-whatsapp",
  muted: "text-lexuzNeutral-30"
};

export function DesignIcon({ icon: Icon, size = "md", tone = "default", className, "aria-label": ariaLabel, ...props }: ComponentPropsWithoutRef<"span"> & { icon: LucideIcon; size?: IconSize; tone?: IconTone }) {
  return (
    <span className={clsx("inline-flex shrink-0 items-center justify-center", iconTones[tone], className)} aria-label={ariaLabel} aria-hidden={ariaLabel ? undefined : true} {...props}>
      <Icon size={iconSizes[size]} strokeWidth={1.5} />
    </span>
  );
}
