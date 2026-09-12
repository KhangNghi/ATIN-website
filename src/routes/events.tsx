import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EVENTS, SITE } from "@/lib/content";

export const Route = createFileRoute("/events")({ component: EventsPage });

function EventsPage() {
  return (
    <SiteShell>
      <PageHero
        variant="split"
        kicker="Events"
        title={
          <>
            Meet the Founder, on a cadence with the <em>deals</em>.
          </>
        }
        lede="Each commitment window includes a live founder Q&A. Recordings go to signed members. Dates are shared with members."
        image="/images/diligence.jpg"
        imageAlt="Investment materials on a table"
      />
      <section className="page-x mx-auto max-w-page py-16 sm:py-20">
        <ol>
          {EVENTS.map((event) => (
            <li
              key={event.id}
              id={event.id}
              className="scroll-mt-28 grid gap-6 border-t border-ink/10 py-10 lg:grid-cols-[1fr_auto] lg:items-end"
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="sage">{event.type}</Badge>
                  <Badge variant="outline">{event.audience}</Badge>
                </div>
                <h2 className="font-display mt-4 text-3xl">{event.title}</h2>
                <p className="mt-2 text-sm text-moss">
                  {event.displayDate} · {event.time} · {event.place}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {event.summary}
                </p>
              </div>
              <Button asChild>
                <a href={SITE.portalUrl} target="_blank" rel="noreferrer">
                  Open portal
                  <ArrowUpRight className="size-4" />
                </a>
              </Button>
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
