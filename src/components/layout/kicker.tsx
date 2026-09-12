import { cn } from "@/lib/utils";

export function Kicker({
  children,
  className,
  inverted = false,
}: {
  children: string;
  className?: string;
  inverted?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 text-micro",
        inverted ? "text-mist" : "text-sage",
        className,
      )}
    >
      <span
        className={cn(
          "inline-block h-px w-6 shrink-0",
          inverted ? "bg-mist/70" : "bg-sage/70",
        )}
        aria-hidden
      />
      {children}
    </p>
  );
}
