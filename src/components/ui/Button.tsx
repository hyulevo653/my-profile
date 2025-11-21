// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Nếu bạn chưa có cn utility, thêm cái này vào lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type Variant = "default" | "outline" | "ghost" | "link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}

const variantStyles: Record<Variant, string> = {
  default:
    "bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
  outline:
    "border border-white/20 bg-transparent text-white hover:bg-white/10 transition-colors",
  ghost:
    "hover:bg-white/10 text-white transition-colors",
  link:
    "text-blue-400 underline-offset-4 hover:underline",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "default", className, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          // Base styles chung cho mọi button
          "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
          "disabled:pointer-events-none disabled:opacity-50",
          "transition-colors duration-200",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";