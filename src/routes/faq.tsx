import { createFileRoute, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/content";

export const Route = createFileRoute("/faq")({ component: FaqPage });

function FaqPage() {
  const hash = useRouterState({ select: (s) => s.location.hash });
  const open = hash.replace("#", "") || FAQS[0].id;

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, [hash]);

  return (
    <SiteShell>
      <PageHero
        kicker="FAQ"
        title={
          <>
            Straight answers for investors and <em>founders</em>.
          </>
        }
        lede="Membership, fees, accreditation, geography, and how companies are selected. If it is not here, write the team."
      />
      <section className="page-x mx-auto max-w-3xl py-12 sm:py-16">
        <Accordion type="single" collapsible defaultValue={open}>
          {FAQS.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} id={faq.id} className="scroll-mt-28">
              <AccordionTrigger className="font-display text-lg font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-12 text-sm text-moss">
          Accredited-investor definition summarized from{" "}
          <a
            className="text-sage underline-offset-2 hover:underline"
            href="https://www.sec.gov/resources-small-businesses/capital-raising-building-blocks/accredited-investors"
            target="_blank"
            rel="noreferrer"
          >
            SEC.gov
          </a>
          . This site is not an offer to sell securities.
        </p>
      </section>
    </SiteShell>
  );
}
