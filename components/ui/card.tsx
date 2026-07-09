import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsx } from "clsx";

type CardVariant = "tour" | "info" | "testimonial" | "interactive";

const cardVariants: Record<CardVariant, string> = {
  tour: "luxury-card overflow-hidden rounded-[22px] border border-white/70 bg-white/88 shadow-ds1 backdrop-blur ds-card-transition hover:-translate-y-1 hover:shadow-ds2",
  info: "luxury-card rounded-[22px] border border-white/70 bg-white/88 p-5 shadow-ds1 backdrop-blur md:p-6",
  testimonial: "luxury-card rounded-[22px] border border-white/70 bg-white/88 p-5 shadow-ds1 backdrop-blur ds-card-transition hover:shadow-ds2",
  interactive: "luxury-card rounded-[22px] border border-white/70 bg-white/88 p-5 shadow-ds1 backdrop-blur ds-card-transition hover:-translate-y-1 hover:border-brand-primary/30 hover:shadow-ds2 md:p-6"
};

type DesignCardProps = ComponentPropsWithoutRef<"article"> & {
  variant?: CardVariant;
};

export function DesignCard({ className, variant = "info", ...props }: DesignCardProps) {
  return <article className={clsx(cardVariants[variant], className)} {...props} />;
}

export function DesignCardHeader({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={clsx("space-y-2", className)} {...props} />;
}

export function DesignCardTitle({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return <h3 className={clsx("text-lg font-bold leading-[1.4] text-lexuzNeutral-100", className)} {...props} />;
}

export function DesignCardText({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={clsx("text-sm leading-[1.6] text-lexuzNeutral-60", className)} {...props} />;
}

export function DesignPrice({ amount, qualifier, className }: { amount: ReactNode; qualifier?: ReactNode; className?: string }) {
  return (
    <p className={clsx("flex flex-wrap items-baseline gap-1", className)}>
      <span className="text-xl font-black leading-[1.2] text-brand-primary">{amount}</span>
      {qualifier ? <span className="text-sm font-medium text-lexuzNeutral-60">{qualifier}</span> : null}
    </p>
  );
}
