import { Link } from "@tanstack/react-router";
import { Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import type { Deal } from "@/lib/content";
import { useWatchlist } from "@/lib/watchlist";
import { cn } from "@/lib/utils";

export function DealCard({
  deal,
  featured = false,
  compact = false,
}: {
  deal: Deal;
  featured?: boolean;
  compact?: boolean;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const saved = useWatchlist((s) => ready && s.slugs.includes(deal.slug));
  const toggle = useWatchlist((s) => s.toggle);

  if (featured) {
    return (
      <article className="relative">
        <Link
          to="/opportunities/$slug"
          params={{ slug: deal.slug }}
          className="group relative block overflow-hidden"
        >
          <img
            src={deal.image}
            alt=""
            className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] sm:aspect-[2.2/1]"
          />
        </Link>
        <div className="page-x relative mx-auto max-w-page -mt-16 sm:-mt-24">
          <div className="max-w-xl bg-paper p-6 shadow-border sm:p-8">
            <div className="flex items-start justify-between gap-3">
              <div className="flex flex-wrap gap-2">
                <Badge variant="sage">{deal.sector}</Badge>
                {deal.exit ? <Badge variant="ink">Exit</Badge> : null}
              </div>
              <WatchButton saved={saved} onToggle={() => toggle(deal.slug)} />
            </div>
            <Link
              to="/opportunities/$slug"
              params={{ slug: deal.slug }}
              className="mt-5 block no-underline"
            >
              <h3 className="font-display text-title text-ink">{deal.name}</h3>
              <p className="mt-2 text-moss">{deal.tagline}</p>
            </Link>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              {deal.summary}
            </p>
            <p className="mt-8 flex items-center justify-between text-xs text-moss">
              <span>{deal.location}</span>
              <span>{deal.closed ?? deal.status}</span>
            </p>
          </div>
        </div>
      </article>
    );
  }

  if (compact) {
    return (
      <article className="group">
        <Link
          to="/opportunities/$slug"
          params={{ slug: deal.slug }}
          className="relative block overflow-hidden"
        >
          <img
            src={deal.image}
            alt=""
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
          />
        </Link>
        <div className="pt-5 pr-2">
          <p className="text-micro text-moss">{deal.sector}</p>
          <Link
            to="/opportunities/$slug"
            params={{ slug: deal.slug }}
            className="mt-2 block no-underline"
          >
            <h3 className="font-display text-2xl text-ink">{deal.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-moss">{deal.tagline}</p>
          </Link>
        </div>
      </article>
    );
  }

  return (
    <article className="group relative grid grid-cols-[5rem_1fr] gap-4 border-t border-ink/10 py-6 sm:grid-cols-[6.5rem_1fr] sm:gap-7">
      <Link
        to="/opportunities/$slug"
        params={{ slug: deal.slug }}
        className="relative block overflow-hidden"
      >
        <img
          src={deal.image}
          alt=""
          className="aspect-[4/5] size-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
        />
      </Link>
      <div className="min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link
              to="/opportunities/$slug"
              params={{ slug: deal.slug }}
              className="block no-underline"
            >
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="font-display text-xl tracking-tight text-ink sm:text-2xl">
                  {deal.name}
                </h3>
                {deal.exit ? <Badge variant="ink">Exit</Badge> : null}
              </div>
              <p className="mt-1 text-sm text-moss">{deal.tagline}</p>
            </Link>
            <p className="mt-2 hidden text-sm leading-relaxed text-muted-foreground sm:line-clamp-2">
              {deal.summary}
            </p>
          </div>
          <WatchButton saved={saved} onToggle={() => toggle(deal.slug)} />
        </div>
        <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-moss">
          <span>{deal.sector}</span>
          <span aria-hidden>·</span>
          <span>{deal.location}</span>
          <span aria-hidden>·</span>
          <span>{deal.closed ?? deal.status}</span>
        </p>
      </div>
    </article>
  );
}

function WatchButton({ saved, onToggle }: { saved: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="relative -mr-1 -mt-1 flex size-11 shrink-0 items-center justify-center text-moss hover:text-ink"
      aria-label={saved ? "Remove from watchlist" : "Save to watchlist"}
    >
      {saved ? (
        <BookmarkCheck className="size-4 text-sage" />
      ) : (
        <Bookmark className="size-4" />
      )}
    </button>
  );
}
