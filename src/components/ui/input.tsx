import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-sm border border-ink/50 bg-cream px-3 text-base text-foreground shadow-none transition-[box-shadow,border-color] duration-150 placeholder:text-stone focus-visible:border-sage focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/30 aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
