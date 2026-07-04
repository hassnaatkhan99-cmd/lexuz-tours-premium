import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsx } from "clsx";

type FieldState = "default" | "error" | "success";

const fieldStateStyles: Record<FieldState, string> = {
  default: "border-lexuzNeutral-line focus:border-brand-primary focus:ring-brand-secondary",
  error: "border-semantic-error focus:border-semantic-error focus:ring-red-100",
  success: "border-semantic-success focus:border-semantic-success focus:ring-green-100"
};

const inputBase = "min-h-12 w-full rounded-dsSm border bg-white px-4 py-3 text-sm text-lexuzNeutral-100 outline-none transition placeholder:text-lexuzNeutral-30 focus:ring-4";

export function FieldGroup({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={clsx("grid gap-2", className)} {...props} />;
}

export function FieldLabel({ className, ...props }: ComponentPropsWithoutRef<"label">) {
  return <label className={clsx("text-sm font-semibold text-lexuzNeutral-80", className)} {...props} />;
}

export function FieldHelp({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={clsx("text-xs leading-5 text-lexuzNeutral-60", className)} {...props} />;
}

export function FieldMessage({ state = "default", className, children, ...props }: ComponentPropsWithoutRef<"p"> & { state?: FieldState }) {
  return (
    <p className={clsx("text-xs leading-5", state === "error" ? "text-semantic-error" : state === "success" ? "text-semantic-success" : "text-lexuzNeutral-60", className)} {...props}>
      {children}
    </p>
  );
}

export function DesignInput({ className, state = "default", ...props }: ComponentPropsWithoutRef<"input"> & { state?: FieldState }) {
  return <input className={clsx(inputBase, fieldStateStyles[state], className)} {...props} />;
}

export function DesignSelect({ className, state = "default", ...props }: ComponentPropsWithoutRef<"select"> & { state?: FieldState }) {
  return <select className={clsx(inputBase, fieldStateStyles[state], className)} {...props} />;
}

export function DesignTextarea({ className, state = "default", ...props }: ComponentPropsWithoutRef<"textarea"> & { state?: FieldState }) {
  return <textarea className={clsx(inputBase, "min-h-28 resize-y", fieldStateStyles[state], className)} {...props} />;
}

export function SegmentedControl({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={clsx("rounded-dsMd border border-lexuzNeutral-line bg-white p-1", className)} role="group" aria-label={label}>
      {children}
    </div>
  );
}
