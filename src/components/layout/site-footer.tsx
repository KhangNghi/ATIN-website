import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { SITE } from "@/lib/content";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      { to: "/opportunities", label: "Portfolio" },
      { to: "/investors", label: "For angels" },
      { to: "/startups", label: "For startups" },
      { to: "/apply", label: "Apply" },
    ],
  },
  {
    title: "Learn",
    links: [
      { to: "/committee", label: "Committee" },
      { to: "/market", label: "Market" },
      { to: "/events", label: "Events" },
      { to: "/faq", label: "FAQ" },
      { to: "/about", label: "About" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="page-x relative mx-auto max-w-page pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo inverted />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist">
              Developed by {SITE.poweredBy} in collaboration with {SITE.partner}.
              A curated angel syndication platform for aging and longevity
              technology.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-micro text-mist">{col.title}</p>
              <ul className="mt-5 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-paper/80 transition-colors duration-150 hover:text-paper"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-micro text-mist">Contact</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-5 inline-flex items-center gap-1 text-sm text-paper/80 hover:text-paper"
            >
              {SITE.email}
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={SITE.linkedin}
              className="mt-2 flex items-center gap-1 text-sm text-paper/80 hover:text-paper"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={SITE.portalUrl}
              className="mt-2 flex items-center gap-1 text-sm text-paper/80 hover:text-paper"
              target="_blank"
              rel="noreferrer"
            >
              Portal
              <ArrowUpRight className="size-3.5" />
            </a>
            <Link
              to="/contact"
              className="mt-2 block text-sm text-paper/80 hover:text-paper"
            >
              Write a note
            </Link>
          </div>
        </div>

        <p
          className="font-display mt-16 leading-[0.82] text-paper/[0.07] select-none"
          style={{ fontSize: "clamp(4.5rem, 16vw, 12.5rem)" }}
          aria-hidden
        >
          ATIN
        </p>
      </div>
      <div className="border-t border-paper/10">
        <div className="page-x mx-auto flex max-w-page flex-col gap-2 py-5 text-xs text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AgeTech Investor Network. All rights reserved.</p>
          <p>Accredited investors only. Investments involve risk, including loss of capital.</p>
        </div>
      </div>
    </footer>
  );
}
