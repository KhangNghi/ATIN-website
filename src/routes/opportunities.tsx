import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DealCard } from "@/components/deals/deal-card";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DEALS, SECTORS, SITE, type DealStatus, type SectorName } from "@/lib/content";
import { useWatchlist } from "@/lib/watchlist";
import { cn } from "@/lib/utils";

type Search = {
  sector?: SectorName;
};

export const Route = createFileRoute("/opportunities")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    sector: typeof search.sector === "string" ? (search.sector as SectorName) : undefined,
  }),
  component: OpportunitiesPage,
});

const STATUSES: Array<DealStatus | "All"> = ["All", "In portfolio", "Recently featured"];

function OpportunitiesPage() {
  const { sector: sectorFromUrl } = Route.useSearch();
  const [query, setQuery] = useState("");
  const [sector, setSector] = useState<SectorName | "All">(sectorFromUrl ?? "All");
  const [status, setStatus] = useState<DealStatus | "All">("All");
  const [savedOnly, setSavedOnly] = useState(false);
  const slugs = useWatchlist((s) => s.slugs);

  const deals = useMemo(() => {
    return DEALS.filter((deal) => {
      if (sector !== "All" && deal.sector !== sector) return false;
      if (status !== "All" && deal.status !== status) return false;
      if (savedOnly && !slugs.includes(deal.slug)) return false;
      if (query.trim()) {
        const hay = `${deal.name} ${deal.tagline} ${deal.summary} ${deal.location}`.toLowerCase();
        if (!hay.includes(query.trim().toLowerCase())) return false;
      }
      return true;
    });
  }, [query, sector, status, savedOnly, slugs]);

  return (
    <SiteShell>
      <PageHero
        kicker="Portfolio"
        title={
          <>
            Companies the committee has put in front of the <em>network</em>.
          </>
        }
        lede="Live allocations, memos, and data rooms sit behind the member NDA."
      />

      <section className="page-x mx-auto max-w-page pb-20">
        <div className="flex flex-col gap-4 border-b border-ink/10 py-6 lg:flex-row lg:items-end">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search companies, sectors, cities…"
            aria-label="Search portfolio"
            className="lg:flex-1"
          />
          <div className="flex flex-wrap gap-2">
            <Button
              type="button"
              variant={savedOnly ? "default" : "outline"}
              aria-pressed={savedOnly}
              onClick={() => setSavedOnly((v) => !v)}
            >
              Watchlist{slugs.length ? ` (${slugs.length})` : ""}
            </Button>
            <Button asChild variant="ink">
              <a href={SITE.portalUrl} target="_blank" rel="noreferrer">
                Portal
              </a>
            </Button>
          </div>
        </div>
        <FilterRow
          label="Sector"
          value={sector}
          options={["All", ...SECTORS.map((s) => s.name)]}
          onChange={(v) => setSector(v as SectorName | "All")}
        />
        <FilterRow
          label="Status"
          value={status}
          options={STATUSES}
          onChange={(v) => setStatus(v as DealStatus | "All")}
        />

        <p className="mt-10 text-sm text-moss">
          {deals.length} {deals.length === 1 ? "company" : "companies"}
        </p>

        {deals.length === 0 ? (
          <div className="mt-8 border border-dashed border-border px-6 py-16 text-center">
            <p className="font-display text-2xl">No companies match those filters.</p>
            <p className="mt-2 text-sm text-moss">Clear a filter or search a different term.</p>
            <Button
              className="mt-5"
              variant="outline"
              onClick={() => {
                setQuery("");
                setSector("All");
                setStatus("All");
                setSavedOnly(false);
              }}
            >
              Reset filters
            </Button>
          </div>
        ) : (
          <div className="mt-2">
            {deals.map((deal) => (
              <DealCard key={deal.slug} deal={deal} />
            ))}
          </div>
        )}
      </section>
    </SiteShell>
  );
}

function FilterRow({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
}) {
  return (
    <div className="mt-6">
      <p className="text-micro text-moss">{label}</p>
      <div role="radiogroup" aria-label={label} className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
        {options.map((option) => {
          const active = option === value;
          return (
            <button
              key={option}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(option)}
              className={cn(
                "h-9 border-b text-sm transition-colors duration-150",
                active
                  ? "border-ink text-ink"
                  : "border-transparent text-moss hover:text-ink",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
