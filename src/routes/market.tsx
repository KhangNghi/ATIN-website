import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Kicker } from "@/components/layout/kicker";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { MARKET_ECONOMY, MARKET_SPEND, SECTORS } from "@/lib/content";

export const Route = createFileRoute("/market")({ component: MarketPage });

const chartAxis = { fill: "var(--color-moss)", fontSize: 12 };
const tooltipStyle = {
  background: "var(--color-cream)",
  border: "1px solid var(--color-border)",
  borderRadius: 4,
};

function MarketPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  return (
    <SiteShell>
      <PageHero
        kicker="Market"
        title={
          <>
            The 50+ economy is not a niche. It is the next <em>consumer cycle</em>.
          </>
        }
        lede="AgeTech sits where demographics, health spend, housing, and household wealth meet. Here is the picture members use when they underwrite the sector."
        actions={
          <Button asChild variant="outline">
            <Link to="/opportunities">See companies against this map</Link>
          </Button>
        }
      />

      <section className="page-x mx-auto max-w-page py-6 sm:py-10">
        <div className="grid gap-10 border-y border-ink/10 py-10 sm:grid-cols-3 sm:gap-8">
          <StatCard value="$8.3T" label="Current U.S. economic contribution of adults 50+" />
          <StatCard value="$12T" label="Projected U.S. 50+ contribution by 2030" />
          <StatCard value="12,000" label="People in the U.S. who turn 65 every day" />
        </div>
        <p className="mt-4 text-xs text-stone">
          Figures commonly cited by AARP and AgeTech operators. Use as sector
          context, not as a forecast of any single company.
        </p>
      </section>

      <section className="texture bg-cream">
        <div className="page-x mx-auto grid max-w-page gap-14 py-20 lg:grid-cols-2">
          <div>
            <Kicker>Spend</Kicker>
            <h2 className="font-display mt-4 text-3xl">
              U.S. technology spend, adults 50+
            </h2>
            <p className="mt-3 text-sm text-moss">
              $77B in 2022, projected $120B by 2030. Interpolated years shown
              for trend, not as published annuals.
            </p>
            <div className="mt-6 h-72">
              {ready ? (
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MARKET_SPEND} margin={{ left: 0, right: 8, top: 8 }}>
                    <CartesianGrid stroke="color-mix(in oklab, var(--color-ink) 8%, transparent)" vertical={false} />
                    <XAxis dataKey="year" tick={chartAxis} axisLine={false} tickLine={false} />
                    <YAxis
                      tick={chartAxis}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${v}B`}
                    />
                    <Tooltip
                      contentStyle={tooltipStyle}
                      formatter={(value) => [`$${value}B`, "Spend"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="var(--color-sage)"
                      fill="var(--color-mist)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full bg-muted" />
              )}
            </div>
          </div>
          <div>
            <Kicker>Weight</Kicker>
            <h2 className="font-display mt-4 text-3xl">Economic weight of 50+</h2>
            <p className="mt-3 text-sm text-moss">
              By 2030, U.S. 50+ contribution is often compared to a top-three
              national GDP. Globally the figure is larger still.
            </p>
            <div className="mt-6 h-72">
              {ready ? (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MARKET_ECONOMY} margin={{ left: 0, right: 8, top: 8 }}>
                    <CartesianGrid stroke="color-mix(in oklab, var(--color-ink) 8%, transparent)" vertical={false} />
                    <XAxis dataKey="year" tick={chartAxis} axisLine={false} tickLine={false} />
                    <YAxis
                      tick={chartAxis}
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(v) => `$${v}T`}
                    />
                    <Tooltip contentStyle={tooltipStyle} formatter={(value) => [`$${value}T`, ""]} />
                    <Bar dataKey="us" name="United States" fill="var(--color-sage)" radius={[2, 2, 0, 0]} />
                    <Bar dataKey="global" name="Global" fill="var(--color-stone)" radius={[2, 2, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              ) : (
                <div className="h-full bg-muted" />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="page-x mx-auto max-w-page">
          <h2 className="font-display text-title">Where members deploy</h2>
          <p className="mt-4 max-w-2xl text-moss">
            The network looks across four verticals: financial wellbeing,
            independent and connected living, empowered health and vitality, and
            Caregiving 2.0.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2">
          {SECTORS.map((sector) => (
            <Link
              key={sector.slug}
              to="/opportunities"
              search={{ sector: sector.name }}
              className="group relative isolate min-h-64 overflow-hidden no-underline"
            >
              <img src={sector.image} alt="" className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
              <div className="relative flex h-full min-h-64 flex-col justify-end p-6 text-paper sm:p-8">
                <h3 className="font-display text-2xl">{sector.name}</h3>
                <p className="mt-2 max-w-sm text-sm text-mist">{sector.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-display text-5xl tracking-tight text-ink sm:text-6xl">{value}</p>
      <p className="mt-3 text-sm text-moss">{label}</p>
    </div>
  );
}
