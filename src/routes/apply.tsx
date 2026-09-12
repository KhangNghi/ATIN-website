import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cloneElement, isValidElement, useMemo, useState, type FormEvent, type ReactElement, type ReactNode } from "react";
import { toast } from "sonner";
import { PageHero } from "@/components/layout/page-hero";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { DEALS, SECTORS, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

type Role = "investor" | "founder";

type Search = {
  as?: Role;
  company?: string;
  event?: string;
};

export const Route = createFileRoute("/apply")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    as: search.as === "founder" ? "founder" : search.as === "investor" ? "investor" : undefined,
    company: typeof search.company === "string" ? search.company : undefined,
    event: typeof search.event === "string" ? search.event : undefined,
  }),
  component: ApplyPage,
});

function ApplyPage() {
  const search = Route.useSearch();
  const [role, setRole] = useState<Role>(search.as ?? "investor");
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const company = useMemo(
    () => DEALS.find((d) => d.slug === search.company),
    [search.company],
  );

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const nextErrors: { name?: string; email?: string } = {};
    if (!name) nextErrors.name = "Enter your full name.";
    if (!email) nextErrors.email = "Enter an email address.";
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      document.getElementById(nextErrors.name ? "name" : "email")?.focus();
      toast.error("Check the highlighted fields before sending.", {
        duration: Infinity,
        closeButton: true,
      });
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Application received.");
  }

  return (
    <SiteShell>
      <PageHero
        kicker="Apply"
        title="Join the network."
        lede="Angels join through the public invite and sign an NDA. Founders apply here. AgeTech Capital reviews every inbound before the Expert Selection Committee."
      />
      <section className="page-x mx-auto max-w-2xl py-12 sm:py-16">
        {sent ? (
          <div className="bg-cream p-8 shadow-border">
            <h2 className="font-display text-3xl">Thank you.</h2>
            <p className="mt-4 leading-relaxed text-moss">
              A member of the AgeTech Capital team will be in touch at the
              email you provided. If it is urgent, write{" "}
              <a className="text-sage underline-offset-2 hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </div>
        ) : (
          <>
            <div role="radiogroup" aria-label="I am applying as" className="flex gap-8 border-b border-ink/10">
              <RoleButton active={role === "investor"} onClick={() => setRole("investor")}>
                I’m an angel
              </RoleButton>
              <RoleButton active={role === "founder"} onClick={() => setRole("founder")}>
                I’m a founder
              </RoleButton>
            </div>
            {role === "investor" ? (
              <div className="mt-8">
                <h2 className="font-display text-2xl">Most angels start with the invite</h2>
                <p className="mt-3 text-sm leading-relaxed text-moss">
                  Create a profile from the public invite, then sign the NDA to
                  see full deal materials. You can also leave a note below if you
                  would rather hear from the team first.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button asChild>
                    <a href={SITE.inviteUrl} target="_blank" rel="noreferrer">
                      {SITE.inviteLabel}
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={SITE.portalUrl} target="_blank" rel="noreferrer">
                      Portal
                    </a>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-8">
                <h2 className="font-display text-2xl">Founder application</h2>
                <p className="mt-3 text-sm leading-relaxed text-moss">
                  Submit the form below. We ask for a deck and a short intake.
                  Companies that pass the AgeTech Capital filter go to the
                  Expert Selection Committee. Up to three are selected per batch.
                </p>
              </div>
            )}
            {company ? (
              <p className="mt-6 text-sm text-moss">
                You are writing about <strong>{company.name}</strong>.
              </p>
            ) : null}
            <form onSubmit={onSubmit} className="mt-10 space-y-5">
              <input type="hidden" name="role" value={role} />
              <input type="hidden" name="company" value={search.company ?? ""} />
              <input type="hidden" name="event" value={search.event ?? ""} />
              <Field id="name" label="Full name" required error={errors.name}>
                <Input id="name" name="name" autoComplete="name" required />
              </Field>
              <Field id="email" label="Email" required error={errors.email}>
                <Input id="email" name="email" type="email" autoComplete="email" required />
              </Field>
              {role === "investor" ? (
                <>
                  <Field id="org" label="Organization or family office">
                    <Input id="org" name="org" />
                  </Field>
                  <Field id="check" label="Typical check size">
                    <Input id="check" name="check" placeholder="Optional" />
                  </Field>
                  <Field id="sectors" label="Sectors of interest">
                    <Input
                      id="sectors"
                      name="sectors"
                      placeholder={SECTORS.map((s) => s.name).slice(0, 3).join(", ")}
                    />
                  </Field>
                  <label className="flex items-start gap-3 bg-cream p-4 text-sm leading-relaxed">
                    <input
                      type="checkbox"
                      name="accredited"
                      required
                      className="mt-1 size-4 accent-sage"
                    />
                    <span>
                      I am an accredited investor under SEC guidelines, or I am
                      authorized to apply on behalf of an entity that is.
                    </span>
                  </label>
                </>
              ) : (
                <>
                  <Field id="companyName" label="Company" required>
                    <Input id="companyName" name="companyName" required />
                  </Field>
                  <Field id="website" label="Website">
                    <Input id="website" name="website" type="url" placeholder="https://" />
                  </Field>
                  <Field id="stage" label="Stage and raise">
                    <Input id="stage" name="stage" placeholder="Seed" />
                  </Field>
                  <Field id="source" label="How did you hear about ATIN?">
                    <Input
                      id="source"
                      name="source"
                      placeholder="Collaborative, referral, partner, inbound"
                    />
                  </Field>
                </>
              )}
              <Field id="note" label="Anything we should know">
                <Textarea id="note" name="note" rows={5} />
              </Field>
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {role === "founder" ? "Submit application" : "Send a note"}
              </Button>
              <p className="text-xs text-moss">
                Applications are reviewed by AgeTech Capital. This form does
                not create an offer, a commitment, or a client relationship.
              </p>
            </form>
          </>
        )}
      </section>
    </SiteShell>
  );
}

function RoleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={active}
      onClick={onClick}
      className={cn(
        "h-12 border-b-2 text-sm font-medium transition-colors duration-150",
        active
          ? "border-ink text-ink"
          : "border-transparent text-moss hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;
  const control = isValidElement(children)
    ? cloneElement(children as ReactElement<Record<string, unknown>>, {
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })
    : children;
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required ? <span className="text-sage"> *</span> : null}
      </Label>
      {control}
      {error ? (
        <p id={errorId} className="text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}
