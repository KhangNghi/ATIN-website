import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { JoinBand } from "@/components/layout/join-band";
import { Kicker } from "@/components/layout/kicker";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { SITE, SOURCING, STARTUP_STEPS } from "@/lib/content";

export const Route = createFileRoute("/startups")({ component: StartupsPage });

const BENEFITS = [
  {
    title: "A screened angel network",
    text: "Angels who have already chosen AgeTech. You spend the window on the raise, not on explaining the buyer.",
  },
  {
    title: "One line on the cap table",
    text: "ATIN handles investment operations and keeps your cap table to a single line, no matter how many angels invest.",
  },
  {
    title: "Meet the Founder",
    text: "A live Q&A during the two-week commitment window, hosted by ATIN, with committee members joining when relevant.",
  },
];

function StartupsPage() {
  return (
    <SiteShell>
      <PageHero
        variant="split"
        kicker="For startups"
        title={
          <>
            Raise from angels who already understand aging and <em>longevity</em>.
          </>
        }
        lede="ATIN is seed-first, with select later-stage opportunities, across the United States and Canada. There are no fees for startups."
        image="/images/still-sunroom.jpg"
        imageAlt="A quiet sunroom designed for independent living"
        actions={
          <>
            <Button asChild size="lg">
              <Link to="/apply" search={{ as: "founder" }}>
                Apply now
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/committee">Expert Selection Committee</Link>
            </Button>
          </>
        }
      />

      <section className="page-x mx-auto max-w-page py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-3">
          {BENEFITS.map((item) => (
            <div key={item.title} className="border-t border-ink/10 pt-6">
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-moss">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="texture bg-cream" id="how-it-works">
        <div className="page-x mx-auto max-w-page py-20 sm:py-24">
          <Kicker>How it works</Kicker>
          <h2 className="font-display text-title mt-4 max-w-2xl">
            From application to a single investor line.
          </h2>
          <p className="mt-5 max-w-2xl leading-relaxed text-moss">
            We look for founder caliber, co-investor quality, and directional
            commercial traction in aging and longevity technology: digital
            health, caregiving, smart home, consumer products, financial
            services, senior living operations, robotics, brain health, and
            preventative care.
          </p>
          <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {STARTUP_STEPS.map((step) => (
              <li key={step.title} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-2xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-moss">{step.text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <Link to="/apply" search={{ as: "founder" }}>
                Founder application
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <p className="text-sm text-moss">
              Questions:{" "}
              <a className="text-ink underline-offset-2 hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="page-x mx-auto max-w-page py-20">
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-title">Who should apply</h2>
            <p className="mt-5 leading-relaxed text-moss">
              Primarily seed (pre-seed and seed, priced rounds and SAFEs), with
              select later-stage companies. Geography: United States and Canada.
              All funding decisions are made by participating
              accredited investors. ATIN does not allocate on their behalf.
            </p>
            <p className="mt-4 leading-relaxed text-moss">
              The AgeTech Collaborative™ by AARP is a primary sourcing channel.
              It is not the only one. Partner networks, the committee, events,
              inbound applications, and referrals all feed the same filter.
            </p>
          </div>
          <div className="border-t border-ink/10 pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-14">
            <Kicker>What we ask for</Kicker>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-moss">
              <li>Pitch deck (PDF or PPTX).</li>
              <li>A structured intake. This is the source we treat as authoritative when figures conflict.</li>
              <li>A recorded pitch or founder call, if you have one.</li>
              <li>Any press you are comfortable sharing.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="texture border-t border-ink/10 bg-cream">
        <div className="page-x mx-auto max-w-page py-20">
          <h2 className="font-display text-title">Six sourcing channels</h2>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {SOURCING.map((item) => (
              <div key={item.title} className="border-t border-ink/10 pt-6">
                <h3 className="font-display text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-moss">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JoinBand title="Bring a company." lede="There are no fees for startups. AgeTech Capital reviews every inbound before the committee." />
    </SiteShell>
  );
}
