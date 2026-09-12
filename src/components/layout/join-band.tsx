import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/content";

export function JoinBand({
  title = "Ready when you are.",
  lede = "Angels join through the invite. Founders apply here. AgeTech Capital reviews every inbound.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <img
        src="/images/home-dusk.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/45" />
      <div className="page-x relative mx-auto flex max-w-page flex-col gap-8 py-20 sm:py-24 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-display">{title}</h2>
          <p className="mt-5 max-w-md text-mist">{lede}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild variant="cream" size="lg">
            <a href={SITE.inviteUrl} target="_blank" rel="noreferrer">
              {SITE.inviteLabel}
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-paper/25 text-paper hover:bg-paper/10"
          >
            <Link to="/apply" search={{ as: "founder" }}>
              Founder application
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
