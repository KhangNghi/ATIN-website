import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { JoinBand } from "@/components/layout/join-band";
import { Kicker } from "@/components/layout/kicker";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { ANGEL_BENEFITS, SITE } from "@/lib/content";

export const Route = createFileRoute("/investors")({ component: InvestorsPage });

const STEPS = [
  { title: "Join", text: "Use the public invite, create a profile, and confirm accredited-investor status." },
  { title: "Sign the NDA", text: "Full deal detail, named customers, round terms, and Q&A recordings unlock after the NDA." },
  { title: "Review and meet", text: "Read the memo, join the founder Q&A during the two-week window, and talk with other members." },
  { title: "Commit deal by deal", text: "ATIN is not a fund. If commitments clear $100K, an SPV is formed and the company sees one investor line." },
];

function InvestorsPage() {
  return (
    <SiteShell>
      <PageHero
        variant="split"
        kicker="For angels"
        title={
          <>
            A curated network of accredited angels, investing in aging and{" "}
            <em>longevity</em> technology.
          </>
        }
        lede="Vetted deal flow from the Expert Selection Committee, SPV mechanics with shared costs, and a founder Q&A before each close."
        image="/images/diligence.jpg"
        imageAlt="Investors reviewing diligence materials"
        actions={
          <>
            <Button asChild size="lg">
              <a href={SITE.inviteUrl} target="_blank" rel="noreferrer">
                {SITE.inviteLabel}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.portalUrl} target="_blank" rel="noreferrer">
                Portal
              </a>
            </Button>
          </>
        }
      />

      <section className="texture bg-cream">
        <div className="page-x mx-auto max-w-page py-20 sm:py-24">
          <h2 className="font-display text-title max-w-2xl">
            Why invest through ATIN rather than <em>directly</em>
          </h2>
          <p className="mt-5 max-w-2xl text-moss leading-relaxed">
            AgeTech is a hard sector to underwrite as an individual. ATIN pools
            sourcing, expert screening, and investment operations. You still
            decide. You still write the check.
          </p>
          <div className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {ANGEL_BENEFITS.map((item) => (
              <div key={item.title} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-moss">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="page-x mx-auto max-w-page py-20 sm:py-24">
          <Kicker>Membership, plainly</Kicker>
          <div className="mt-12 grid lg:grid-cols-3 lg:gap-12">
            <div className="border-t border-ink/10 py-8">
              <p className="text-micro text-moss">Who</p>
              <p className="font-display mt-3 text-2xl">Accredited investors</p>
              <p className="mt-3 text-sm leading-relaxed text-moss">
                Accredited or near-accredited, finance-literate, including people
                who are not yet active angels.
              </p>
            </div>
            <div className="border-t border-ink/10 py-8">
              <p className="text-micro text-moss">Fees</p>
              <p className="font-display mt-3 text-2xl">Membership plus deal fees</p>
              <p className="mt-3 text-sm leading-relaxed text-moss">
                An annual membership fee, plus SPV administration, management,
                and carry on each investment. You elect whether fees sit on top
                of the commitment or are deducted from it. Startups are not charged.
              </p>
            </div>
            <div className="border-t border-ink/10 py-8">
              <p className="text-micro text-moss">Structure</p>
              <p className="font-display mt-3 text-2xl">Deal by deal, via SPV</p>
              <p className="mt-3 text-sm leading-relaxed text-moss">
                ATIN handles the investment operations and keeps the company's
                cap table to a single line, no matter how many angels invest.
                SPVs form when commitments exceed $100K.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="texture bg-cream">
        <div className="page-x mx-auto max-w-page py-20 sm:py-24">
          <h2 className="font-display text-title">How to join</h2>
          <p className="mt-4 max-w-xl text-moss">
            Most angels start from the public invite. If you would rather write the
            team first, use the contact form.
          </p>
          <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li key={step.title} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-moss">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href={SITE.inviteUrl} target="_blank" rel="noreferrer">
                {SITE.inviteLabel}
                <ArrowUpRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/apply" search={{ as: "investor" }}>
                Write the team
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <JoinBand title="Join the syndicate." lede="Create a profile from the public invite, then sign the NDA to see full deal materials." />
    </SiteShell>
  );
}
