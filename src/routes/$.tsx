import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/$")({ component: NotFoundPage });

function NotFoundPage() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-20 sm:px-6">
        <p className="text-micro text-sage">404</p>
        <h1 className="font-display mt-3 text-4xl tracking-tight">
          That page is not on the platform.
        </h1>
        <p className="mt-4 text-moss">
          Try search, or go back to the portfolio.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild>
            <Link to="/opportunities">Portfolio</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/">Home</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  );
}
