import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight, Bookmark, BookmarkCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { Kicker } from "@/components/layout/kicker";
import { SiteShell } from "@/components/layout/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DEALS, SITE, getDeal } from "@/lib/content";
import { useWatchlist } from "@/lib/watchlist";

export const Route = createFileRoute("/opportunities/$slug")({
  loader: ({ params }) => {
    const deal = getDeal(params.slug);
    if (!deal) throw notFound();
    return { deal };
  },
  component: DealPage,
});

function DealPage() {
  const { deal } = Route.useLoaderData();
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  const saved = useWatchlist((s) => ready && s.slugs.includes(deal.slug));
  const toggle = useWatchlist((s) => s.toggle);
  const related = DEALS.filter((d) => d.sector === deal.sector && d.slug !== deal.slug).slice(
    0,
    2,
  );

  return (
    <SiteShell>
      <article>
        <div className="grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="page-x flex flex-col justify-end py-12 sm:py-16 lg:max-w-none lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 text-sm text-moss hover:text-ink"
            >
              <ArrowLeft className="size-4" />
              All portfolio
            </Link>
            <div className="mt-8 flex flex-wrap gap-2">
              <Badge variant="sage">{deal.sector}</Badge>
              <Badge variant="outline">{deal.stage}</Badge>
              <Badge variant="mist">{deal.status}</Badge>
              {deal.exit ? <Badge variant="ink">Exit</Badge> : null}
            </div>
            <h1 className="font-display text-display mt-5 text-ink">{deal.name}</h1>
            <p className="mt-4 text-lg text-moss">{deal.tagline}</p>
            <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
              {deal.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={SITE.portalUrl} target="_blank" rel="noreferrer">
                  Portal
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
              <Button type="button" variant="outline" onClick={() => toggle(deal.slug)}>
                {saved ? <BookmarkCheck className="size-4" /> : <Bookmark className="size-4" />}
                {saved ? "On your watchlist" : "Save to watchlist"}
              </Button>
            </div>
          </div>
          <div className="relative min-h-72 overflow-hidden lg:min-h-[28rem]">
            <img src={deal.image} alt="" className="absolute inset-0 size-full object-cover" />
          </div>
        </div>

        <div className="page-x mx-auto max-w-page">
          <dl className="grid gap-8 border-y border-ink/10 py-8 sm:grid-cols-3">
            <Fact label="Location" value={deal.location} />
            <Fact label="Stage" value={deal.stage} />
            <Fact label={deal.closed ? "Closed" : "Status"} value={deal.closed ?? deal.status} />
          </dl>

          <div className="grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr]">
            <section>
              <Kicker>On this public page</Kicker>
              <p className="mt-5 max-w-xl leading-relaxed text-moss">
                This is a high-level description for visitors. Metrics, named
                customers, round terms, and diligence files are available to
                signed members after the NDA. ATIN does not independently
                verify company figures; materials for members are founder-provided.
              </p>
            </section>
            <aside className="border-t border-ink/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <Kicker>For members</Kicker>
              <p className="mt-5 text-sm leading-relaxed text-moss">
                Open opportunities, portfolio companies, and research live in the
                investment portal. Join from the public invite, then sign the NDA
                to unlock full deal detail.
              </p>
              <Button asChild className="mt-5" variant="outline" size="sm">
                <a href={SITE.inviteUrl} target="_blank" rel="noreferrer">
                  {SITE.inviteLabel}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </Button>
            </aside>
          </div>

          {related.length ? (
            <section className="border-t border-ink/10 py-14">
              <h2 className="font-display text-title">More in {deal.sector}</h2>
              <div className="mt-8 grid sm:grid-cols-2 sm:gap-10">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to="/opportunities/$slug"
                    params={{ slug: item.slug }}
                    className="border-t border-ink/10 py-6 no-underline"
                  >
                    <p className="text-micro text-stone">{item.status}</p>
                    <p className="font-display mt-2 text-2xl">{item.name}</p>
                    <p className="mt-2 text-sm text-moss">{item.tagline}</p>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
    </SiteShell>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-micro text-stone">{label}</dt>
      <dd className="mt-2 font-display text-xl">{value}</dd>
    </div>
  );
}
