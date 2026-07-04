import type { ReactNode } from "react";
import { AlertCircle, CheckCircle2, Inbox, Loader2, XCircle } from "lucide-react";
import { clsx } from "clsx";
import { DesignIcon } from "./icon";

export function LoadingSpinner({ label = "Loading" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm font-semibold text-lexuzNeutral-60" role="status" aria-live="polite">
      <Loader2 className="animate-spin" size={18} aria-hidden="true" />
      {label}
    </span>
  );
}

export function Skeleton({ className }: { className?: string }) {
  return <div className={clsx("animate-pulse rounded-dsMd bg-lexuzNeutral-line/70", className)} aria-hidden="true" />;
}

export function CardSkeleton() {
  return (
    <div className="rounded-dsLg border border-lexuzNeutral-line bg-white p-4 shadow-ds1" aria-hidden="true">
      <Skeleton className="h-44 w-full" />
      <Skeleton className="mt-4 h-5 w-3/4" />
      <Skeleton className="mt-3 h-4 w-1/2" />
      <Skeleton className="mt-6 h-10 w-full" />
    </div>
  );
}

export function EmptyState({ title, description, action }: { title: string; description: string; action?: ReactNode }) {
  return (
    <div className="rounded-dsLg border border-lexuzNeutral-line bg-white p-8 text-center shadow-ds1">
      <DesignIcon icon={Inbox} size="lg" tone="muted" className="mx-auto" />
      <h3 className="mt-4 text-lg font-bold text-lexuzNeutral-100">{title}</h3>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-lexuzNeutral-60">{description}</p>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}

type FeedbackTone = "success" | "error" | "info" | "warning";

const feedbackStyles: Record<FeedbackTone, { icon: typeof CheckCircle2; classes: string; iconTone: "success" | "error" | "default" | "accent" }> = {
  success: { icon: CheckCircle2, classes: "border-semantic-success/25 bg-green-50 text-semantic-success", iconTone: "success" },
  error: { icon: XCircle, classes: "border-semantic-error/25 bg-red-50 text-semantic-error", iconTone: "error" },
  info: { icon: AlertCircle, classes: "border-semantic-info/25 bg-blue-50 text-semantic-info", iconTone: "default" },
  warning: { icon: AlertCircle, classes: "border-semantic-warning/25 bg-yellow-50 text-semantic-warning", iconTone: "accent" }
};

export function FeedbackNotice({ tone = "info", title, children }: { tone?: FeedbackTone; title: string; children?: ReactNode }) {
  const style = feedbackStyles[tone];
  return (
    <div className={clsx("flex gap-3 rounded-dsLg border p-4", style.classes)} role={tone === "error" ? "alert" : "status"}>
      <DesignIcon icon={style.icon} tone={style.iconTone} />
      <div>
        <p className="font-bold">{title}</p>
        {children ? <div className="mt-1 text-sm leading-6 text-lexuzNeutral-80">{children}</div> : null}
      </div>
    </div>
  );
}
