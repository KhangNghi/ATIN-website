import type { ReactNode } from "react";
import { Kicker } from "@/components/layout/kicker";
import { cn } from "@/lib/utils";

export function PageHero({
  kicker,
  title,
  lede,
  actions,
  image,
  imageAlt = "",
  variant = "plain",
  children,
}: {
  kicker?: string;
  title: ReactNode;
  lede?: ReactNode;
  actions?: ReactNode;
  image?: string;
  imageAlt?: string;
  variant?: "plain" | "split" | "banner";
  children?: ReactNode;
}) {
  if (variant === "split" && image) {
    return (
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="page-x flex flex-col justify-end py-16 sm:py-20 lg:max-w-none lg:pr-16 lg:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
            {kicker ? <Kicker className="rise-in">{kicker}</Kicker> : null}
            <h1 className="font-display text-display mt-5 max-w-3xl text-ink rise-in-2">
              {title}
            </h1>
            {lede ? (
              <p className="text-lede mt-6 max-w-md text-moss rise-in-3">{lede}</p>
            ) : null}
            {actions ? (
              <div className="mt-8 flex flex-wrap items-center gap-3 rise-in-4">
                {actions}
              </div>
            ) : null}
            {children}
          </div>
          <div className="relative min-h-64 overflow-hidden lg:min-h-[32rem]">
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 size-full object-cover"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-paper">
      <div className="page-x mx-auto max-w-page pt-14 pb-12 sm:pt-20 sm:pb-16">
        {kicker ? <Kicker className="rise-in">{kicker}</Kicker> : null}
        <h1 className="font-display text-display mt-5 max-w-4xl text-ink rise-in-2">
          {title}
        </h1>
        {lede ? (
          <p className="text-lede mt-6 max-w-xl text-moss rise-in-3">{lede}</p>
        ) : null}
        {actions ? (
          <div className="mt-8 flex flex-wrap items-center gap-3 rise-in-4">{actions}</div>
        ) : null}
        {children}
      </div>
      {variant === "banner" && image ? (
        <img
          src={image}
          alt={imageAlt}
          className={cn("aspect-[2.1/1] w-full object-cover sm:aspect-[2.5/1]")}
        />
      ) : (
        <div className="h-px bg-ink/10" />
      )}
    </section>
  );
}
