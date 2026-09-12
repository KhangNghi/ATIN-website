export const SITE = {
  name: "AgeTech Investor Network",
  short: "ATIN",
  tagline: "Invest in the bright future of aging",
  description:
    "A curated angel syndication platform developed by AgeTech Capital in collaboration with The AgeTech Collaborative™ by AARP. ATIN surfaces and syndicates investment opportunities in aging and longevity technology to a curated network of angel investors.",
  email: "khang@agetechcapital.com",
  poweredBy: "AgeTech Capital",
  poweredByUrl: "https://agetechcapital.com/",
  partner: "The AgeTech Collaborative™ by AARP",
  partnerUrl: "https://agetechcollaborative.org/",
  linkedin: "https://www.linkedin.com/company/agetech-investor-network",
  portalUrl: "https://agetechcapital.vessel.co/login",
  portalLabel: "Investment portal log-in",
  inviteUrl: "https://agetechcapital.vessel.co/invite/rkD-atin-public",
  inviteLabel: "Join as an angel",
} as const;


export const NAV = [
  { to: "/opportunities", label: "Portfolio" },
  { to: "/investors", label: "Angels" },
  { to: "/startups", label: "Startups" },
  { to: "/committee", label: "Committee" },
  { to: "/market", label: "Market" },
  { to: "/about", label: "About" },
] as const;

export const SECTORS = [
  {
    slug: "financial-wellbeing",
    name: "Financial wellbeing",
    summary: "Estate, documents, protection, and money products designed for longer lives.",
    image: "/images/still-folio.jpg",
  },
  {
    slug: "independent-living",
    name: "Independent and connected living",
    summary: "Smart home, assistive products, and tools that make aging in place feel effortless.",
    image: "/images/still-sunroom.jpg",
  },
  {
    slug: "health-vitality",
    name: "Empowered Health & Vitality",
    summary: "Digital health, prevention, brain health, and tools that keep people stronger for longer.",
    image: "/images/still-tablet.jpg",
  },
  {
    slug: "caregiving",
    name: "Caregiving 2.0",
    summary: "Workforce, intake, and family tools that take pressure off caregivers and operators.",
    image: "/images/caregiving.jpg",
  },
] as const;

export type SectorName = (typeof SECTORS)[number]["name"];
export type Stage = "Seed" | "Later stage";
export type DealStatus = "In portfolio" | "Recently featured";

export type Deal = {
  slug: string;
  name: string;
  tagline: string;
  sector: SectorName;
  stage: Stage;
  location: string;
  status: DealStatus;
  featured: boolean;
  exit?: boolean;
  closed?: string;
  summary: string;
  image: string;
};

export const DEALS: Deal[] = [
  {
    slug: "prisidio",
    name: "Prisidio",
    tagline: "A digital vault for the documents that matter later in life.",
    sector: "Financial wellbeing",
    stage: "Seed",
    location: "United States",
    status: "In portfolio",
    featured: true,
    closed: "February 2025",
    summary:
      "Secure storage and sharing of wills, deeds, and medical records with family, caregivers, lawyers, and accountants. Built for adults 50+.",
    image: "/images/still-folio.jpg",
  },
  {
    slug: "trust-and-will",
    name: "Trust & Will",
    tagline: "Estate planning that does not require an attorney appointment.",
    sector: "Financial wellbeing",
    stage: "Later stage",
    location: "United States",
    status: "In portfolio",
    featured: true,
    exit: true,
    closed: "February 2025",
    summary:
      "Legally valid wills, trusts, and end-of-life documents completed fully online, designed so more families actually finish the work.",
    image: "/images/finance.jpg",
  },
  {
    slug: "linus-health",
    name: "Linus Health",
    tagline: "Digital cognitive assessment at the scale of a health system.",
    sector: "Empowered Health & Vitality",
    stage: "Later stage",
    location: "United States",
    status: "In portfolio",
    featured: true,
    closed: "September 2025",
    summary:
      "Validated digital assessments that identify mild cognitive impairment and early dementia, replacing paper tests such as MoCA.",
    image: "/images/still-tablet.jpg",
  },
  {
    slug: "1-true-health",
    name: "1 True Health",
    tagline: "Vertical AI for aging adults with complex conditions.",
    sector: "Empowered Health & Vitality",
    stage: "Seed",
    location: "United States",
    status: "In portfolio",
    featured: false,
    closed: "November 2025",
    summary:
      "An AI-enabled longevity platform spanning a personal health record, an avatar-based virtual care companion, and engagement tools for conditions such as dementia and cancer.",
    image: "/images/health.jpg",
  },
  {
    slug: "eldera",
    name: "Eldera AI",
    tagline: "Intergenerational mentorship, monitored in real time.",
    sector: "Independent and connected living",
    stage: "Seed",
    location: "United States",
    status: "In portfolio",
    featured: false,
    closed: "2026",
    summary:
      "Connects volunteer adults 60+ with teenagers. A proprietary AI chaperone monitors every video session so the relationship can be both warm and safe.",
    image: "/images/hero-living.jpg",
  },
  {
    slug: "care-daily",
    name: "Care Daily",
    tagline: "Ambient AI for senior care, inside the systems operators already use.",
    sector: "Caregiving 2.0",
    stage: "Seed",
    location: "United States",
    status: "In portfolio",
    featured: true,
    closed: "May 2026",
    summary:
      "An operating system for senior care, commercially live and embedded in MatrixCare, with reach across senior living communities and home health.",
    image: "/images/still-sunroom.jpg",
  },
  {
    slug: "captify",
    name: "Captify",
    tagline: "Assistive glasses that caption the room.",
    sector: "Independent and connected living",
    stage: "Seed",
    location: "United States",
    status: "Recently featured",
    featured: false,
    summary:
      "Wearable captioning glasses designed for clinics and daily life, so hearing loss does not cut people out of conversation.",
    image: "/images/still-glasses.jpg",
  },
  {
    slug: "eversafe",
    name: "EverSafe",
    tagline: "Financial monitoring across the institutions an older adult already uses.",
    sector: "Financial wellbeing",
    stage: "Seed",
    location: "United States",
    status: "Recently featured",
    featured: false,
    summary:
      "Cross-institutional monitoring that flags unusual activity for older adults and the people who help them, with a companion product for case work.",
    image: "/images/finance.jpg",
  },
  {
    slug: "managinglife",
    name: "ManagingLife",
    tagline: "Digital chronic pain management for insurers and health systems.",
    sector: "Empowered Health & Vitality",
    stage: "Seed",
    location: "Canada",
    status: "Recently featured",
    featured: false,
    summary:
      "A digital program and AI companion for chronic pain, sold to disability insurers, health systems, and workers compensation carriers.",
    image: "/images/health.jpg",
  },
  {
    slug: "june-health",
    name: "June Health",
    tagline: "Virtual care for perimenopause, delivered as an employer benefit.",
    sector: "Empowered Health & Vitality",
    stage: "Seed",
    location: "Canada",
    status: "Recently featured",
    featured: false,
    summary:
      "Multidisciplinary clinical care plus AI navigation for midlife women's health, led by CEO Lori Casselman.",
    image: "/images/health.jpg",
  },
  {
    slug: "jona-health",
    name: "Jona Health",
    tagline: "AI microbiome intelligence for longevity clinics.",
    sector: "Empowered Health & Vitality",
    stage: "Seed",
    location: "United States",
    status: "Recently featured",
    featured: false,
    summary:
      "Stool testing, strain-level sequencing, and an AI match against published research, sold through cash-pay providers. Founded by Leo Grady, PhD.",
    image: "/images/still-tablet.jpg",
  },
  {
    slug: "alita-health",
    name: "Alita Health",
    tagline: "AI front desk, intake, and hiring for senior care.",
    sector: "Caregiving 2.0",
    stage: "Seed",
    location: "Charleston, SC",
    status: "Recently featured",
    featured: false,
    summary:
      "Omnichannel agents for web, SMS, voice, and social, with lead scoring and a central command console for senior-care operators. Co-founded by Matt Rosa.",
    image: "/images/caregiving.jpg",
  },
];

export const COMMITTEE_LENSES = [
  {
    name: "Payer",
    text: "How the product is paid for: Medicare, commercial, employer, or family spend.",
  },
  {
    name: "Operator",
    text: "Whether senior living, home care, or health systems can actually run it.",
  },
  {
    name: "User",
    text: "Whether older adults and families will use it, not just admire the deck.",
  },
  {
    name: "Design",
    text: "Age-inclusive product, language, and service design.",
  },
  {
    name: "Founder",
    text: "Whether this team can sell, hire, and stay in the sector.",
  },
] as const;

export const COMMITTEE = [
  {
    name: "Sarah Thomas",
    lens: "Design",
    role: "Partner and Venture Partner, AgeTech Capital. VP, The AgeTech Collaborative by AARP.",
    bio: "More than 20 years advising on age-inclusive design, innovation, and strategy. Advisor to Techstars, EIR programs, and Aging2.0.",
  },
  {
    name: "Amelia Hay",
    lens: "Ecosystem",
    role: "VP of Startup Programming & Investments, The AgeTech Collaborative by AARP / AARP Innovation Labs.",
    bio: "Leads accelerator programs and AARP's startup investments. More than 20 years at AARP, Verizon, and MCI.",
  },
  {
    name: "John Sieb",
    lens: "Payer",
    role: "Current President & COO, Long-Term Care, Prudential.",
    bio: "38 years in Fortune 50 senior leadership, with a payer's view of what actually gets reimbursed.",
  },
  {
    name: "Doug Leidig",
    lens: "Operator",
    role: "President & CEO, Asbury Communities.",
    bio: "Leads one of the largest U.S. nonprofit senior living organizations, with more than 30 years in aging services. Washington, DC.",
  },
  {
    name: "Ivan Yuen",
    lens: "Founder",
    role: "Serial entrepreneur and angel investor.",
    bio: "Founded and scaled ventures to exit, most recently Wattpad. Toronto.",
  },
  {
    name: "Sheng Li, PhD",
    lens: "User",
    role: "Behavioral Economist, Google.",
    bio: "Behavioral science and data-driven product strategy. New York.",
  },
  {
    name: "AgeTech Capital",
    lens: "Investor",
    role: "Institutional seat on the committee.",
    bio: "The AgeTech Capital team holds the investor lens and runs the filter before companies reach the committee.",
  },
] as const;

export const PARTNERS = [
  {
    name: "Bruce Simpson",
    title: "Partner",
    bio: "Senior partner on strategy and messaging. Former head of McKinsey Canada.",
  },
  {
    name: "Lyne Landry",
    title: "Partner",
    bio: "Venture and private-equity veteran across healthcare and growth investing.",
  },
  {
    name: "Alan MacIntosh",
    title: "Founding Partner",
    bio: "Early-stage technology investor. Presents ATIN to investor audiences.",
  },
  {
    name: "Sarah Thomas",
    title: "Partner and Venture Partner",
    bio: "Age-inclusive design and strategy. Also sits on the Expert Selection Committee and holds a VP role at The AgeTech Collaborative by AARP.",
  },
] as const;

export const STARTUP_STEPS = [
  {
    title: "Apply",
    text: "Submit through this site, a referral, the Collaborative, or a partner introduction. Share a deck and a short intake.",
  },
  {
    title: "Initial filter",
    text: "The AgeTech Capital team does a light screen for sector, stage, geography, and founder signal.",
  },
  {
    title: "Memo",
    text: "Companies that advance get a preliminary investment memo before they go to the committee.",
  },
  {
    title: "Expert Selection Committee",
    text: "Domain experts score the company. Up to three companies are selected per batch.",
  },
  {
    title: "Go live with members",
    text: "Selected companies open for angel commitments. The standard window is two weeks, with a founder Q&A during it.",
  },
  {
    title: "One line on the cap table",
    text: "If commitments clear $100K, ATIN forms an SPV. Operations stay with ATIN, so the company sees a single investor line no matter how many angels participate.",
  },
] as const;

export const ANGEL_BENEFITS = [
  {
    title: "Vetted deal flow",
    text: "Companies are pre-screened by the Expert Selection Committee before they reach members.",
  },
  {
    title: "SPV mechanics",
    text: "Shared legal and administrative costs, with AgeTech Capital handling investment operations.",
  },
  {
    title: "Founder Q&A",
    text: "Direct access to the founding team during each commitment window, before you decide.",
  },
  {
    title: "Research and briefings",
    text: "Webinars, research, and member briefings alongside live deals.",
  },
] as const;

export const SOURCING = [
  {
    title: "Ecosystem collaboration",
    text: "The AgeTech Collaborative™ by AARP, ATIN's primary ecosystem sourcing channel.",
  },
  {
    title: "Partner networks",
    text: "The four AgeTech Capital partners' own networks across North America.",
  },
  {
    title: "Selection Committee reach",
    text: "Members sourcing from long-term care, senior living, behavioral science, and founder networks.",
  },
  {
    title: "In-person presence",
    text: "Conferences and gatherings across gerontology, AgeTech, and investor rooms.",
  },
  {
    title: "Inbound",
    text: "Applications through this site, the newsletter, and ATIN content.",
  },
  {
    title: "Referrals",
    text: "Founder and angel introductions from a network that has already transacted.",
  },
] as const;

export const FAQS = [
  {
    id: "what-is-atin",
    q: "What is the AgeTech Investor Network?",
    a: "ATIN is a curated angel syndication platform developed by AgeTech Capital in collaboration with The AgeTech Collaborative™ by AARP. It connects accredited angel investors to pre-vetted deal flow in aging and longevity technology, primarily seed stage with select later-stage opportunities, and consolidates angel commitments through SPVs.",
    tags: ["overview", "investors", "startups"],
  },
  {
    id: "how-to-join",
    q: "How can I join the network?",
    a: "Angels join through the public invite or apply on this site, sign an NDA, and then see full deal materials. Founders apply on this site. Applications are reviewed by AgeTech Capital before they reach the Expert Selection Committee.",
    tags: ["membership", "apply"],
  },
  {
    id: "what-is-agetech",
    q: "What is AgeTech?",
    a: "AgeTech is technology designed for aging and longevity. It spans digital health, caregiving, smart home, consumer products, financial services, senior living operations, robotics, brain health, and preventative care.",
    tags: ["market", "sectors"],
  },
  {
    id: "sectors",
    q: "Is the network focused on a specific sector?",
    a: "Four thesis verticals: financial wellbeing, independent and connected living, empowered health and vitality, and Caregiving 2.0.",
    tags: ["market", "sectors"],
  },
  {
    id: "stage",
    q: "What stage companies are a fit?",
    a: "Primarily seed (pre-seed and seed, priced rounds and SAFEs), with select later-stage opportunities. Signal that matters: founder caliber, co-investor quality, and directional commercial traction.",
    tags: ["startups", "checks"],
  },
  {
    id: "geography",
    q: "Is there a geographic focus?",
    a: "ATIN reviews companies in the United States and Canada.",
    tags: ["startups", "investors"],
  },
  {
    id: "fees",
    q: "Do you charge fees?",
    a: "There are no fees for startups. Angels pay an annual membership fee, and there are additional fees associated with each investment for SPV administration, management, and carry. Fee treatment on each deal is elected when the SPV is formed.",
    tags: ["investors", "membership"],
  },
  {
    id: "open-startups",
    q: "Is this open to all startups?",
    a: "ATIN sources from six channels, including The AgeTech Collaborative by AARP, partner networks, the Selection Committee, events, inbound applications, and referrals. The bar is sector fit, stage, and a company the committee is willing to put in front of the network.",
    tags: ["startups"],
  },
  {
    id: "accredited",
    q: "What is an accredited investor?",
    a: "Under SEC guidelines, individuals may qualify based on wealth and income, or professional criteria. Financial criteria include net worth over $1 million excluding primary residence, or income over $200,000 ($300,000 with a spouse or partner) in each of the prior two years with a reasonable expectation of the same this year. Professional criteria include Series 7, 65, or 82 licenses, certain directors and officers, qualifying family-office clients, and knowledgeable employees of a private fund. See SEC.gov for the full definition.",
    tags: ["investors", "legal"],
  },
  {
    id: "selection",
    q: "How will startups be selected?",
    a: "AgeTech Capital runs an initial filter and a preliminary memo. The Expert Selection Committee then scores the company. Up to three companies are selected per batch. All funding decisions are made directly by participating accredited investors. ATIN is not a fund. Angels commit deal by deal.",
    tags: ["startups", "process"],
  },
  {
    id: "spv",
    q: "How do the investments work?",
    a: "Angels commit through the investment portal. If total commitments exceed $100K, ATIN forms an SPV. ATIN handles investment operations and keeps the company's cap table to a single line, no matter how many angels invest.",
    tags: ["investors", "process"],
  },
  {
    id: "nda",
    q: "What do members see that the public site does not?",
    a: "Signed members who have completed the NDA see full deal detail: metrics, named customers, round terms, Q&A recordings, and a direct commit link. This public site describes the platform and the portfolio at a high level only.",
    tags: ["investors", "legal"],
  },
] as const;

export const EVENTS = [
  {
    id: "meet-the-founder",
    title: "Meet the Founder",
    date: "2026-09-01",
    displayDate: "During each commitment window",
    time: "Typically 60 minutes",
    place: "Virtual",
    type: "Founder Q&A",
    audience: "Members",
    summary:
      "A live session with the founding team while the company is open to members. Committee members join when relevant. Recordings go to signed members afterward.",
  },
  {
    id: "regular-founder-calls",
    title: "Regular founder calls",
    date: "2026-09-15",
    displayDate: "On the membership calendar",
    time: "Published for members",
    place: "Virtual",
    type: "Member briefing",
    audience: "Members",
    summary:
      "A standing cadence of founder conversations for members who want more than a memo.",
  },
  {
    id: "content-hub",
    title: "Member content hub",
    date: "2026-09-20",
    displayDate: "Always on",
    time: "On demand",
    place: "Members",
    type: "Research",
    audience: "Members",
    summary:
      "Articles, podcasts, and events for members, sitting next to open opportunities and portfolio companies.",
  },
];

export const MARKET_SPEND = [
  { year: "2022", value: 77 },
  { year: "2024", value: 88 },
  { year: "2026", value: 99 },
  { year: "2028", value: 110 },
  { year: "2030", value: 120 },
];

export const MARKET_ECONOMY = [
  { year: "Now", us: 8.3, global: 20 },
  { year: "2030", us: 12, global: 35 },
  { year: "2050", us: 28, global: 96 },
];

export type SearchItem = {
  id: string;
  title: string;
  hint: string;
  to: string;
  group: "Pages" | "Portfolio" | "Questions" | "Events";
};

export const SEARCH_INDEX: SearchItem[] = [
  {
    id: "p-home",
    title: "Home",
    hint: "Platform overview",
    to: "/",
    group: "Pages",
  },
  {
    id: "p-opp",
    title: "Portfolio",
    hint: "Companies the network has featured",
    to: "/opportunities",
    group: "Pages",
  },
  {
    id: "p-inv",
    title: "For angels",
    hint: "Membership, how to join",
    to: "/investors",
    group: "Pages",
  },
  {
    id: "p-st",
    title: "For startups",
    hint: "How it works, apply, selection",
    to: "/startups",
    group: "Pages",
  },
  {
    id: "p-committee",
    title: "Expert Selection Committee",
    hint: "Five lenses, current members",
    to: "/committee",
    group: "Pages",
  },
  {
    id: "p-mkt",
    title: "Market",
    hint: "50+ economy and sector map",
    to: "/market",
    group: "Pages",
  },
  {
    id: "p-about",
    title: "About",
    hint: "AgeTech Capital and AARP collaboration",
    to: "/about",
    group: "Pages",
  },
  {
    id: "p-events",
    title: "Events",
    hint: "Meet the Founder and member briefings",
    to: "/events",
    group: "Pages",
  },
  {
    id: "p-faq",
    title: "FAQ",
    hint: "Fees, accreditation, geography",
    to: "/faq",
    group: "Pages",
  },
  {
    id: "p-apply",
    title: "Apply",
    hint: "Join as angel or founder",
    to: "/apply",
    group: "Pages",
  },
  {
    id: "p-contact",
    title: "Contact",
    hint: "Write the team",
    to: "/contact",
    group: "Pages",
  },
  ...DEALS.map((d) => ({
    id: `d-${d.slug}`,
    title: d.name,
    hint: `${d.sector} · ${d.status}`,
    to: `/opportunities/${d.slug}`,
    group: "Portfolio" as const,
  })),
  ...FAQS.map((f) => ({
    id: `f-${f.id}`,
    title: f.q,
    hint: f.a.slice(0, 90) + "…",
    to: `/faq#${f.id}`,
    group: "Questions" as const,
  })),
  ...EVENTS.map((e) => ({
    id: `e-${e.id}`,
    title: e.title,
    hint: `${e.displayDate} · ${e.place}`,
    to: `/events#${e.id}`,
    group: "Events" as const,
  })),
];

export function getDeal(slug: string) {
  return DEALS.find((d) => d.slug === slug);
}
