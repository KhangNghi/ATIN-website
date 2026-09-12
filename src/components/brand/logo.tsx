import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn("group flex shrink-0 flex-col justify-center no-underline", className)}
      aria-label="AgeTech Investor Network home"
    >
      <img
        src="/images/atin-logo.png"
        alt=""
        width={1296}
        height={279}
        className={cn(
          "brand-mark h-7 w-auto object-contain object-left transition-[filter] duration-300 sm:h-8",
          inverted && "brightness-0 invert",
        )}
      />
      <span
        className={cn(
          "mt-0.5 text-[0.6875rem] tracking-[0.16em] uppercase transition-colors duration-300",
          inverted ? "text-mist" : "text-moss",
        )}
      >
        Investor Network
      </span>
    </Link>
  );
}
