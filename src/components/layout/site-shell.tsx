import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { cn } from "@/lib/utils";

export function SiteShell({
  children,
  overHero = false,
  className,
}: {
  children: ReactNode;
  overHero?: boolean;
  className?: string;
}) {
  return (
    <div className={cn("flex min-h-dvh flex-col bg-background text-foreground", className)}>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:bg-cream focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <SiteHeader overHero={overHero} />
      <div id="main" className={cn("flex-1", !overHero && "pt-[4.25rem]")}>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
