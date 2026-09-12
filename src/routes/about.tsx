import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { JoinBand } from "@/components/layout/join-band";
import { Kicker } from "@/components/layout/kicker";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { PARTNERS, SITE } from "@/lib/content";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        variant="split"
        kicker="About"
        title={
          <>
            A curated angel syndicate for aging and <em>longevity</em> technology.
          </>
        }
        lede={`Developed by AgeTech Capital in collaboration with ${SITE.partner}. ATIN connects accredited angels to pre-vetted deal flow and consolidates commitments through SPVs.`}
        image="/images/caregiving.jpg"
        imageAlt="Hands sharing a table in a domestic care setting"
      />

      <section className="texture bg-cream">
        <div className="page-x mx-auto grid max-w-page gap-16 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <Kicker>What ATIN is</Kicker>
            <p className="mt-6 text-lg leading-relaxed text-moss">
              ATIN surfaces and syndicates investment opportunities in aging
              and longevity technology to a curated network of angel investors.
              It is primarily seed stage, with select later-stage opportunities.
            </p>
            <p className="mt-4 leading-relaxed text-moss">
              ATIN is not a fund. Angels commit deal by deal. AgeTech Capital
              runs sourcing and screening with the Expert Selection Committee.
              Funding decisions stay with participating accredited investors.
            </p>
          </div>
          <div className="lg:pt-12">
            <Kicker>Why it exists</Kicker>
            <p className="font-display mt-6 text-2xl leading-snug text-ink sm:text-3xl">
              AgeTech is a hard sector to invest in as an individual.
            </p>
            <p className="mt-4 leading-relaxed text-moss">
              The buyer landscape is fragmented, the clinical and regulatory
              context is specialized, and quality deal flow is dispersed. ATIN
              pools sourcing, expert screening, and investment operations so an
              individual angel can participate without building that
              infrastructure alone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="page-x mx-auto grid max-w-page lg:grid-cols-2">
          <article className="border-b border-ink/10 py-16 lg:border-r lg:border-b-0 lg:pr-16">
            <Kicker>Developed by</Kicker>
            <h2 className="font-display mt-4 text-4xl">AgeTech Capital</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-moss">
              Four partners, each with 25+ years in venture, healthcare, or
              operating roles across North America. Thesis areas include
              financial wellbeing, independent and connected living, empowered
              health and vitality, and Caregiving 2.0.
            </p>
            <a
              href={SITE.poweredByUrl}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sage hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Visit AgeTech Capital
              <ArrowUpRight className="size-3.5" />
            </a>
          </article>
          <article className="py-16 lg:pl-16">
            <Kicker>In collaboration with</Kicker>
            <h2 className="font-display mt-4 text-4xl">{SITE.partner}</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-moss">
              AARP's accelerator and startup ecosystem program, and ATIN's
              primary ecosystem sourcing channel. The Collaborative is
              represented on the Expert Selection Committee.
            </p>
            <a
              href={SITE.partnerUrl}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sage hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              Visit the Collaborative
              <ArrowUpRight className="size-3.5" />
            </a>
          </article>
        </div>
      </section>

      <section className="texture bg-cream">
        <div className="page-x mx-auto max-w-page py-20">
          <Kicker>The partners</Kicker>
          <ul className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {PARTNERS.map((person) => (
              <li key={person.name} className="border-t border-ink/10 pt-6">
                <p className="text-micro text-moss">{person.title}</p>
                <h3 className="font-display mt-2 text-3xl">{person.name}</h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-moss">{person.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper sm:py-28">
        <div className="page-x mx-auto max-w-page">
          <Kicker inverted>Expert Selection Committee</Kicker>
          <h2 className="font-display text-title mt-5 max-w-2xl">
            Five lenses on every company.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-mist">
            Payer, operator, user, design, and founder, plus ecosystem and
            investor seats. Members include Sarah Thomas, Amelia Hay, John Sieb,
            Doug Leidig, Ivan Yuen, and Sheng Li, with AgeTech Capital holding
            the investor seat. The committee selects up to three companies per
            batch. It does not allocate capital.
          </p>
          <Button asChild variant="mist" className="mt-8">
            <Link to="/committee">Read the committee</Link>
          </Button>
        </div>
      </section>

      <section className="page-x mx-auto max-w-page py-20">
        <Kicker>How companies reach members</Kicker>
        <ol className="mt-12 grid gap-10 sm:grid-cols-3">
          {[
            {
              t: "Sourcing",
              d: "Six channels: the Collaborative, partner networks, the committee, events, inbound applications, and referrals.",
            },
            {
              t: "Selection",
              d: "AgeTech Capital filter, preliminary memo, then the Expert Selection Committee. Up to three companies per batch.",
            },
            {
              t: "Members",
              d: "A two-week window, a founder Q&A, and an SPV above $100K so the cap table stays one line.",
            },
          ].map((step) => (
            <li key={step.t} className="border-t border-ink/10 pt-6">
              <h3 className="font-display text-2xl">{step.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-moss">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <JoinBand />
    </SiteShell>
  );
}
