import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Kicker } from "@/components/layout/kicker";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/content";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ email?: string }>({});

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") || "").trim();
    if (!email) {
      setErrors({ email: "Enter an email address." });
      document.getElementById("email")?.focus();
      toast.error("Check the highlighted field before sending.", {
        duration: Infinity,
        closeButton: true,
      });
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Message sent.");
  }

  return (
    <SiteShell>
      <PageHero
        kicker="Contact"
        title="Write the team."
        lede="Questions about membership, a live round, or introducing a company. Start here."
      />
      <section className="page-x mx-auto grid max-w-page gap-14 py-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <Kicker>Email</Kicker>
          <a
            href={`mailto:${SITE.email}`}
            className="mt-4 inline-block font-display text-2xl text-ink hover:text-sage"
          >
            {SITE.email}
          </a>
          <Kicker className="mt-10">Network</Kicker>
          <a
            href={SITE.linkedin}
            className="mt-4 inline-block text-sm text-moss hover:text-ink"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <p className="mt-10 max-w-sm text-sm leading-relaxed text-moss">
            Developed by {SITE.poweredBy} in collaboration with {SITE.partner}.
          </p>
        </div>
        {sent ? (
          <div className="bg-cream p-8 shadow-border">
            <h2 className="font-display text-3xl">Received.</h2>
            <p className="mt-4 text-moss">
              We will reply to the address you left. For time-sensitive deal
              questions, email {SITE.email} directly.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5 bg-cream p-6 sm:p-8">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" autoComplete="name" required className="bg-paper" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-paper"
                aria-invalid={errors.email ? true : undefined}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email ? (
                <p id="email-error" className="text-sm text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>
            <div className="space-y-2">
              <Label htmlFor="topic">Topic</Label>
              <Input id="topic" name="topic" placeholder="Membership, a company, an event…" className="bg-paper" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" rows={6} required className="bg-paper" />
            </div>
            <Button type="submit" size="lg">
              Send
            </Button>
          </form>
        )}
      </section>
    </SiteShell>
  );
}
