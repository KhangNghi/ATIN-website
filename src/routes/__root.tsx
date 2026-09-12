import { createRootRoute, HeadContent, Link, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { SiteShell } from "@/components/layout/site-shell";
import { Button } from "@/components/ui/button";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";

const APP_NAME = "AgeTech Investor Network";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: APP_NAME },
      {
        name: "description",
        content:
          "A curated angel syndication platform developed by AgeTech Capital in collaboration with The AgeTech Collaborative by AARP.",
      },
      { name: "theme-color", content: "#121a18" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  notFoundComponent: RootNotFound,
  component: RootDocument,
});

function RootDocument() {
  return (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <Outlet />
        </AuthProvider>
        <Toaster
          theme="light"
          position="bottom-right"
          toastOptions={{
            className: "font-sans !bg-cream !text-ink !border-border",
          }}
        />
        <Scripts />
      </body>
    </html>
  );
}

function RootNotFound() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col justify-center px-4 py-20 sm:px-6">
        <p className="text-micro text-sage">404</p>
        <h1 className="font-display mt-3 text-4xl tracking-tight">
          That page is not on the platform.
        </h1>
        <p className="mt-4 text-moss">Try search, or go back to the portfolio.</p>
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
