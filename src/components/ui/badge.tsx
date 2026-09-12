import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm px-2 py-0.5 text-micro font-medium",
  {
    variants: {
      variant: {
        default: "bg-secondary text-moss",
        sage: "bg-sage/10 text-sage-deep",
        ink: "bg-ink text-paper",
        outline: "border border-border text-moss",
        mist: "bg-mist/50 text-ink",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
