import { Command } from "cmdk";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { SEARCH_INDEX, type SearchItem } from "@/lib/content";
import { cn } from "@/lib/utils";

const GROUPS: SearchItem["group"][] = ["Pages", "Portfolio", "Questions", "Events"];

export function SiteSearch({
  compact = false,
  inverted = false,
  className,
}: {
  compact?: boolean;
  inverted?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = useMemo(() => SEARCH_INDEX, []);

  function go(to: string) {
    setOpen(false);
    const [path, hash] = to.split("#");
    void navigate({ to: path || "/" });
    if (hash) {
      window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 80);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-11 items-center gap-2 px-2.5 text-sm transition-colors duration-150",
          inverted
            ? "text-mist hover:text-paper"
            : "text-moss hover:text-ink",
          compact ? "w-11 justify-center px-0" : "min-w-0 sm:min-w-36",
          className,
        )}
        aria-label="Search the site"
      >
        <Search className="size-4 shrink-0" />
        {!compact ? (
          <>
            <span className="hidden truncate sm:inline">Search</span>
            <kbd
              className={cn(
                "ml-auto hidden rounded-sm px-1.5 py-0.5 font-mono text-[10px] sm:inline",
                inverted
                  ? "border border-paper/20 text-mist"
                  : "border border-border text-stone",
              )}
            >
              ⌘K
            </kbd>
          </>
        ) : null}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="overflow-hidden p-0">
          <DialogTitle className="sr-only">Search</DialogTitle>
          <Command className="flex max-h-[min(86vh,40rem)] flex-col" loop>
            <div className="flex items-center gap-2 border-b border-border px-4">
              <Search className="size-4 text-stone" />
              <Command.Input
                autoFocus
                placeholder="Search deals, FAQs, pages…"
                className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-stone"
              />
            </div>
            <Command.List className="max-h-[min(60vh,28rem)] overflow-y-auto p-2">
              <Command.Empty className="px-3 py-8 text-center text-sm text-muted-foreground">
                Nothing matches that. Try “accredited”, a company, or “fees”.
              </Command.Empty>
              {GROUPS.map((group) => (
                <Command.Group
                  key={group}
                  heading={group}
                  className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[11px] [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:tracking-wider [&_[cmdk-group-heading]]:text-stone [&_[cmdk-group-heading]]:uppercase"
                >
                  {items
                    .filter((item) => item.group === group)
                    .map((item) => (
                      <Command.Item
                        key={item.id}
                        value={`${item.title} ${item.hint} ${item.group}`}
                        onSelect={() => go(item.to)}
                        className="flex cursor-pointer flex-col gap-0.5 rounded-md px-2 py-2 text-sm data-[selected=true]:bg-secondary"
                      >
                        <span className="font-medium text-ink">{item.title}</span>
                        <span className="text-xs text-muted-foreground">
                          {item.hint}
                        </span>
                      </Command.Item>
                    ))}
                </Command.Group>
              ))}
            </Command.List>
          </Command>
        </DialogContent>
      </Dialog>
    </>
  );
}
