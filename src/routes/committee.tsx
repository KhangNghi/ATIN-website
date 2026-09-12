import { createFileRoute, Link } from "@tanstack/react-router";
import { JoinBand } from "@/components/layout/join-band";
import { Kicker } from "@/components/layout/kicker";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { COMMITTEE, COMMITTEE_LENSES } from "@/lib/content";

export const Route = createFileRoute("/committee")({ component: CommitteePage });

function CommitteePage() {
  return (
    <SiteShell>
      <PageHero
        variant="split"
        kicker="Expert Selection Committee"
        title={
          <>
            Five lenses on every company, before it reaches the <em>network</em>.
          </>
        }
        lede="Domain experts pre-vet opportunities after AgeTech Capital's initial filter. The committee selects up to three companies per batch. Sponsors and observers never vote."
        image="/images/diligence.jpg"
        imageAlt="Materials prepared for a selection review"
      />

      <section className="texture bg-cream">
        <div className="page-x mx-auto max-w-page py-20 sm:py-24">
          <Kicker>The framework</Kicker>
          <h2 className="font-display text-display mt-4 max-w-3xl">
            {COMMITTEE_LENSES.map((lens) => lens.name).join(". ")}.
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-moss">
            Five views on every company, not just the founder's narrative.
            AgeTech is hard to underwrite as an individual. The buyer landscape is
            fragmented, the clinical context is specialized, and quality deal flow
            is dispersed.
          </p>
          <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {COMMITTEE_LENSES.map((lens) => (
              <li key={lens.name} className="border-t border-ink/10 pt-6">
                <p className="font-display text-2xl">{lens.name}</p>
                <p className="mt-3 text-sm leading-relaxed text-moss">{lens.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-paper">
        <div className="page-x mx-auto max-w-page py-20 sm:py-24">
          <Kicker>Current members</Kicker>
          <h2 className="font-display text-title mt-4">The people who score the batch</h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-moss">
            Independently minded operators, payers, founders, and researchers.
            AgeTech Capital holds the investor seat and runs the filter before a
            company reaches this group.
          </p>
          <ul className="mt-14">
            {COMMITTEE.map((member) => (
              <li
                key={member.name}
                className="grid gap-2 border-t border-ink/10 py-8 md:grid-cols-[8rem_1fr_1.3fr] md:gap-10 md:py-10"
              >
                <p className="text-micro text-sage">{member.lens}</p>
                <div>
                  <h3 className="font-display text-3xl">{member.name}</h3>
                  <p className="mt-2 text-sm text-ink">{member.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-moss md:pt-1">{member.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="texture bg-cream">
        <div className="page-x mx-auto grid max-w-page gap-16 py-20 lg:grid-cols-2">
          <div>
            <Kicker>Process</Kicker>
            <h2 className="font-display text-title mt-4">How a company gets here</h2>
            <ol className="mt-10 space-y-8">
              {[
                "A founder applies, is referred, or comes through the Collaborative or a partner network.",
                "AgeTech Capital completes an initial filter and, if the company advances, a preliminary memo.",
                "Each committee member scores the company. Up to three are selected per batch.",
                "Selected companies go live with members for a two-week commitment window, with a founder Q&A during it.",
              ].map((step) => (
                <li key={step} className="border-t border-ink/10 pt-5">
                  <p className="leading-relaxed text-moss">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="lg:border-l lg:border-ink/10 lg:pl-14">
            <Kicker>Independence</Kicker>
            <p className="font-display mt-6 text-2xl leading-snug text-ink sm:text-3xl">
              The committee's job is to decide what the network sees.
            </p>
            <p className="mt-5 leading-relaxed text-moss">
              Funding decisions stay with participating accredited investors. ATIN is
              not a fund. Angels commit deal by deal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/startups">How startups apply</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/opportunities">See the portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <JoinBand />
    </SiteShell>
  );
}
