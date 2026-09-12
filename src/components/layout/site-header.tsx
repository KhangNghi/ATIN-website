import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/logo";
import { SiteSearch } from "@/components/search/site-search";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader({ overHero = false }: { overHero?: boolean }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(!overHero);

  useEffect(() => {
    if (!overHero) {
      setSolid(true);
      return;
    }

    const update = () => {
      const hero = document.getElementById("site-hero");
      if (!hero) {
        setSolid(window.scrollY > 80);
        return;
      }
      setSolid(hero.getBoundingClientRect().bottom <= 72);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [overHero]);

  const inverted = overHero && !solid;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,color,backdrop-filter] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        inverted
          ? "border-transparent bg-transparent text-paper"
          : "border-ink/8 bg-paper/88 text-ink backdrop-blur-md",
      )}
    >
      <div className="page-x mx-auto flex h-[4.25rem] max-w-page items-center gap-6">
        <Logo inverted={inverted} />
        <nav className="hidden items-center gap-7 xl:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active =
              pathname === item.to || pathname.startsWith(`${item.to}/`);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "relative py-2 text-sm tracking-wide transition-colors duration-150",
                  inverted
                    ? active
                      ? "text-paper"
                      : "text-mist hover:text-paper"
                    : active
                      ? "text-ink"
                      : "text-moss hover:text-ink",
                )}
              >
                {item.label}
                {active ? (
                  <span
                    className={cn(
                      "absolute inset-x-0 bottom-1 h-px",
                      inverted ? "bg-paper/80" : "bg-ink",
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <SiteSearch
            compact
            inverted={inverted}
            className="hidden sm:inline-flex lg:hidden"
          />
          <SiteSearch inverted={inverted} className="hidden lg:inline-flex" />
          <Button
            asChild
            variant={inverted ? "ghost" : "outline"}
            size="sm"
            className={cn(
              "hidden sm:inline-flex",
              inverted && "text-paper hover:bg-paper/10",
            )}
          >
            <a
              href={SITE.portalUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={SITE.portalLabel}
            >
              Portal
              <ArrowUpRight className="size-3.5" />
            </a>
          </Button>
          <Button
            asChild
            variant={inverted ? "mist" : "ink"}
            size="sm"
            className="hidden lg:inline-flex"
          >
            <Link to="/apply">Apply</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("xl:hidden", inverted && "text-paper hover:bg-paper/10")}
                aria-label="Open menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetTitle className="font-display text-2xl font-medium">Menu</SheetTitle>
              <div className="mt-8 flex flex-col">
                {NAV.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-3.5 text-[1.05rem] text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/events"
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3.5 text-[1.05rem] text-ink"
                >
                  Events
                </Link>
                <Link
                  to="/faq"
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3.5 text-[1.05rem] text-ink"
                >
                  FAQ
                </Link>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3.5 text-[1.05rem] text-ink"
                >
                  Contact
                </Link>
              </div>
              <div className="mt-6">
                <SiteSearch className="w-full" />
              </div>
              <Button asChild className="mt-4 w-full" variant="ink">
                <a href={SITE.portalUrl} target="_blank" rel="noreferrer">
                  Portal
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
              <Button asChild variant="outline" className="mt-2 w-full">
                <Link to="/apply" onClick={() => setOpen(false)}>
                  Apply to the network
                </Link>
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
