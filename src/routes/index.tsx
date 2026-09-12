import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { DealCard } from "@/components/deals/deal-card";
import { JoinBand } from "@/components/layout/join-band";
import { Kicker } from "@/components/layout/kicker";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { ANGEL_BENEFITS, COMMITTEE_LENSES, DEALS, SECTORS, SITE } from "@/lib/content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = DEALS.filter((d) => d.featured);
  const lead = featured[0];
  const rest = featured.slice(1);

  return (
    <SiteShell overHero>
      <section id="site-hero" className="relative min-h-dvh overflow-hidden bg-ink text-paper">
        <img
          src="/images/hero-living.jpg"
          alt=""
          className="hero-still absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="page-x relative mx-auto flex min-h-dvh max-w-page flex-col justify-end pb-14 pt-32 sm:pb-20">
          <p className="text-micro text-mist/80 rise-in">
            A curated angel syndicate · 2026
          </p>
          <h1 className="font-display text-display mt-5 max-w-[13ch] text-paper rise-in-2">
            Invest in the <em>bright future</em> of aging
          </h1>
          <p className="text-lede mt-6 max-w-md text-mist/90 rise-in-3">
            A curated angel syndication platform developed by AgeTech Capital
            in collaboration with {SITE.partner}. Seed-first deal flow in aging
            and longevity technology.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 rise-in-4">
            <Button asChild size="lg" variant="cream">
              <a href={SITE.inviteUrl} target="_blank" rel="noreferrer">
                {SITE.inviteLabel}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Link
              to="/startups"
              className="text-sm text-paper underline-offset-4 hover:underline"
            >
              Apply as a founder
            </Link>
          </div>
          <p className="mt-16 max-w-lg text-micro leading-relaxed text-mist/65">
            Developed by{" "}
            <a
              href={SITE.poweredByUrl}
              className="text-paper/80 underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {SITE.poweredBy}
            </a>{" "}
            in collaboration with{" "}
            <a
              href={SITE.partnerUrl}
              className="text-paper/80 underline-offset-2 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              {SITE.partner}
            </a>
          </p>
        </div>
      </section>

      <section className="texture bg-paper">
        <div className="page-x mx-auto max-w-page py-16 sm:py-20">
          <p className="font-display max-w-4xl text-[1.65rem] leading-snug text-ink sm:text-[2.05rem] sm:leading-[1.2]">
            <em>Four</em> thesis verticals. <em>Six</em> companies in the
            portfolio. Seed-first, with select later-stage, across the United
            States and Canada.
          </p>
        </div>
      </section>

      <section className="texture bg-cream">
        <div className="page-x mx-auto grid max-w-page gap-14 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24 lg:py-28">
          <h2 className="font-display text-display text-ink">
            AgeTech is hard to underwrite <em>alone</em>.
          </h2>
          <div>
            <p className="text-lg leading-relaxed text-moss">
              The buyer landscape is fragmented across payers, operators,
              families, and government. The clinical context is specialized.
              Quality deal flow is dispersed. ATIN pools sourcing, expert
              screening, and investment operations so an individual angel can
              participate without building that infrastructure.
            </p>
            <ul className="mt-12 space-y-10">
              {[
                {
                  title: "A market already in motion",
                  text: "Adults 50+ already drive a large share of U.S. consumer spend and household wealth. Demand is rising for products that keep people independent for longer.",
                },
                {
                  title: "Screened deal flow",
                  text: "Companies pass an AgeTech Capital filter and the Expert Selection Committee before they reach members. Up to three companies per batch.",
                },
                {
                  title: "One line on the cap table",
                  text: "ATIN handles investment operations and keeps the company's cap table to a single line, no matter how many angels invest.",
                },
              ].map((item) => (
                <li key={item.title}>
                  <h3 className="flex items-center gap-3 text-base font-medium">
                    <span className="inline-block h-px w-8 shrink-0 bg-sage/55" aria-hidden />
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-md pl-11 text-sm leading-relaxed text-moss">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="page-x mx-auto max-w-page py-20 sm:py-28">
          <Kicker inverted>For angels</Kicker>
          <h2 className="font-display text-title mt-5 max-w-2xl">
            You still decide. You still write the check.
          </h2>
          <p className="mt-5 max-w-xl text-mist">
            Screened deal flow, SPV operations, and a founder Q&A before you
            commit. ATIN is not a fund.
          </p>
          <ul className="mt-16 grid sm:grid-cols-2 sm:gap-x-16 sm:gap-y-14">
            {ANGEL_BENEFITS.map((step) => (
              <li key={step.title} className="border-t border-paper/15 pt-7">
                <h3 className="font-display text-2xl">{step.title}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist">
                  {step.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper pb-24 pt-20">
        <div className="page-x mx-auto max-w-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Kicker>Portfolio</Kicker>
              <h2 className="font-display text-title mt-4">
                Companies the network has backed
              </h2>
            </div>
            <Link
              to="/opportunities"
              className="inline-flex items-center gap-2 text-sm text-ink underline-offset-4 hover:underline"
            >
              View all
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <p className="mt-4 max-w-xl text-sm text-moss">
            High-level descriptions only. Full memos and live allocations are
            available to signed members.
          </p>
        </div>
        <div className="mt-12">
          {lead ? <DealCard deal={lead} featured /> : null}
        </div>
        <div className="page-x mx-auto mt-16 grid max-w-page gap-10 sm:grid-cols-3 sm:gap-8">
          {rest.map((deal) => (
            <DealCard key={deal.slug} deal={deal} compact />
          ))}
        </div>
      </section>

      <section className="texture bg-cream">
        <div className="page-x mx-auto max-w-page py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Kicker>Expert Selection Committee</Kicker>
              <h2 className="font-display text-display mt-5">
                {COMMITTEE_LENSES.map((lens) => lens.name).join(". ")}.
              </h2>
              <p className="mt-6 max-w-lg text-moss leading-relaxed">
                Five views on every company, before it reaches the network.
                Domain experts score the batch. Up to three companies are
                selected. The committee does not allocate capital.
              </p>
            </div>
            <Button asChild variant="outline">
              <Link to="/committee">
                Meet the committee
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-[28rem] overflow-hidden bg-ink">
          <img
            src="/images/diligence.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/15" />
          <div className="page-x relative flex h-full min-h-[28rem] flex-col justify-end py-12 text-paper lg:px-12">
            <Kicker inverted>Angels</Kicker>
            <h2 className="font-display text-title mt-4 max-w-md">
              Vetted deal flow, SPV mechanics, and a founder Q&A before you commit.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
              ATIN is not a fund. You decide deal by deal.
            </p>
            <Link
              to="/investors"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-paper underline-offset-4 hover:underline"
            >
              For angels
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="relative min-h-[22rem] overflow-hidden bg-sage lg:min-h-[28rem]">
          <img
            src="/images/still-sunroom.jpg"
            alt=""
            className="absolute inset-0 size-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-sage/45" />
          <div className="page-x relative flex h-full min-h-[22rem] flex-col justify-end py-12 text-paper lg:px-12">
            <Kicker inverted>Startups</Kicker>
            <h2 className="font-display text-title mt-4 max-w-md">
              A two-week window, a founder Q&A, and one line on the cap table.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-mist">
              There are no fees for startups.
            </p>
            <Link
              to="/startups"
              className="mt-6 inline-flex w-fit items-center gap-2 text-sm text-paper underline-offset-4 hover:underline"
            >
              How it works
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 sm:py-24">
        <div className="page-x mx-auto max-w-page">
          <Kicker>Where we look</Kicker>
          <h2 className="font-display text-title mt-4">Four thesis verticals</h2>
        </div>
        <div className="mt-12 grid lg:grid-cols-2">
          {SECTORS.map((sector, index) => (
            <Link
              key={sector.slug}
              to="/opportunities"
              search={{ sector: sector.name }}
              className={
                index === 0
                  ? "group relative isolate min-h-[28rem] overflow-hidden no-underline lg:row-span-3 lg:min-h-full"
                  : "group relative isolate min-h-52 overflow-hidden no-underline"
              }
            >
              <img
                src={sector.image}
                alt=""
                className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
              <div className="relative flex h-full min-h-52 flex-col justify-end p-6 text-paper sm:p-8 lg:min-h-0">
                <h3 className="font-display text-2xl lg:text-3xl">{sector.name}</h3>
                <p className="mt-2 max-w-sm text-sm text-mist opacity-90">
                  {sector.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="texture bg-cream">
        <div className="page-x mx-auto max-w-page py-20 sm:py-28">
          <blockquote className="relative max-w-4xl sm:pl-4">
            <span
              className="font-display pointer-events-none absolute -top-3 -left-1 text-6xl leading-none text-sage sm:-left-7 sm:text-7xl"
              aria-hidden
            >
              “
            </span>
            <p className="font-display text-display text-ink">
              The AgeTech Investor Network is going to give angel investors
              access to a very unique deal flow pipeline.”
            </p>
            <footer className="mt-8 text-sm text-moss">
              Andy Miller, Senior Vice President, AARP Innovation Labs
            </footer>
          </blockquote>
          <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-ink/10 pt-8">
            <div>
              <Kicker>For members</Kicker>
              <p className="font-display mt-3 text-2xl">Open opportunities and research</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-moss">
                Signed members see current deals, portfolio companies, Meet the
                Founder sessions, and research in one place.
              </p>
            </div>
            <Button asChild variant="outline">
              <a href={SITE.portalUrl} target="_blank" rel="noreferrer">
                Portal
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <JoinBand />
    </SiteShell>
  );
}
