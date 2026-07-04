import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { clsx } from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "whatsapp" | "call";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary text-white shadow-ds1 hover:bg-brand-primaryHover hover:shadow-ds2",
  secondary: "bg-brand-secondary text-brand-primary hover:bg-[#dcebe6]",
  outline: "border border-brand-primary bg-transparent text-brand-primary hover:bg-brand-secondary",
  ghost: "bg-transparent text-brand-primary hover:bg-brand-secondary",
  whatsapp: "bg-brand-whatsapp text-white shadow-ds1 hover:brightness-95 hover:shadow-ds2",
  call: "border border-lexuzNeutral-line bg-white text-brand-primary shadow-ds1 hover:bg-brand-secondary"
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-5 py-3 text-sm md:min-h-12",
  lg: "min-h-12 px-6 py-3 text-base"
};

const baseStyles = "focus-ring inline-flex items-center justify-center gap-2 rounded-dsMd font-bold transition duration-150 ease-out active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50";

type DesignButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function DesignButton({ className, variant = "primary", size = "md", leftIcon, rightIcon, children, ...props }: DesignButtonProps) {
  return (
    <button className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}

type DesignLinkButtonProps = ComponentPropsWithoutRef<typeof Link> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export function DesignLinkButton({ className, variant = "primary", size = "md", leftIcon, rightIcon, children, ...props }: DesignLinkButtonProps) {
  return (
    <Link className={clsx(baseStyles, variantStyles[variant], sizeStyles[size], className)} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </Link>
  );
}
