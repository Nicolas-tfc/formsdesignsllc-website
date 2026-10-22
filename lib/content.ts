import { media } from "./site";

export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Residential",
    href: "/flooring-services/residential-flooring/",
    children: [
      { label: "Garage Floors", href: "/garage-floor-epoxy-company/" },
      { label: "Basement Floors", href: "/basement-floor-contractors/" },
    ],
  },
  { label: "Commercial", href: "/commercial-flooring-contractors/" },
  { label: "Industrial", href: "/#industrial" },
  { label: "Flooring Solutions", href: "/flooring-services/concrete-coating/" },
  { label: "Service Areas", href: "/new-jersey/" },
  { label: "Past Work", href: "/media-gallery/" },
  { label: "About", href: "/about/" },
];

export const HERO = {
  badge: "Based on +50 Google reviews",
  titleBefore: "Epoxy Garage Floors & ",
  titleEm: "Concrete Coatings",
  titleAfter: " in Summit",
  text: "Forms Designs LLC coats garage floors, basements, and commercial concrete from our home base in Summit, across Northern and Central New Jersey. Diamond-ground prep, moisture testing, clear pricing, and 5-star reviews from NJ homeowners.",
};

export const STATS = [
  { value: "+50", label: "Google reviews" },
  { value: "15", suffix: "-Year", label: "Warranty" },
  { value: "6", label: "NJ counties served" },
  { value: "5", suffix: "★", label: "Rated by NJ homeowners" },
];

export const MARQUEE = [
  "Flake System",
  "Metallic & Marble Epoxy",
  "Quartz Flooring",
  "Polished Concrete",
  "Microtopping",
  "Self-Leveling Concrete",
  "Urethane Cement",
  "Grind & Seal",
  "Concrete Sealer Coatings",
];

export const WHY = {
  eyebrow: "Why Forms Designs",
  titleBefore: "Why homeowners and businesses trust ",
  titleEm: "Forms Designs LLC",
  titleAfter: " in Summit, NJ",
  text: "Not every epoxy contractor preps, communicates, or prices the same way. Here is how we are different.",
  others: "Other contractors",
  us: "Forms Designs LLC",
  rows: [
    {
      other: "Skipped or rushed surface prep",
      us: "Mechanical diamond grinding so the coating bonds and lasts",
    },
    {
      other: "Unlicensed or underinsured",
      us: "Licensed, bonded and insured. NJ License #13VH09407200",
    },
    {
      other: "Vague timelines and no follow-up",
      us: "A clear schedule from the first estimate to the final walkthrough",
    },
    {
      other: "Poor communication and no-shows",
      us: "An owner-led Summit team that shows up on time and respects your property",
    },
    {
      other: "Hidden fees and surprise add-ons",
      us: "One clear, upfront quote with no hidden fees",
    },
    {
      other: "Residential only or commercial only",
      us: "Residential and commercial, from garages to warehouses",
    },
  ],
};

export const SPACES = {
  eyebrow: "What We Coat",
  titleBefore: "Any floor. ",
  titleEm: "Any finish.",
  text: "Garages, basements, showrooms, warehouses. If it is concrete, we coat it, polish it, or resurface it. Flake, metallic, quartz, polished, or heavy-duty industrial. The right system for your space.",
  cta: { label: "Browse all services", href: "/flooring-services/concrete-coating/" },
  items: [
    {
      id: "residential",
      title: "Residential Flooring",
      text: "Durable floors for the spaces you use most. We turn your garage and basement into surfaces you are proud of, built for everyday family life.",
      href: "/flooring-services/residential-flooring/",
      image: media("2024/09/garage-2-pj.webp"),
      alt: "Residential garage floor coating finished by Forms Designs LLC in New Jersey",
    },
    {
      id: "commercial",
      title: "Commercial Flooring",
      text: "Epoxy, polished concrete and microtopping for retail stores, showrooms, restaurants, and offices. A professional finish that handles heavy traffic.",
      href: "/commercial-flooring-contractors/",
      image: media("2024/09/commercial-1-pj.webp"),
      alt: "Commercial concrete floor finished by Forms Designs LLC in New Jersey",
    },
    {
      id: "industrial",
      title: "Industrial Flooring",
      text: "Heavy-duty epoxy and urethane cement for warehouses, manufacturing, food processing, and auto shops. Chemical-resistant and impact-resistant.",
      href: "/flooring-services/concrete-coating/urethane-cement-flooring/",
      image: media("2024/09/commercial-3-pj.webp"),
      alt: "Heavy-duty industrial floor coating installed by Forms Designs LLC",
    },
  ],
};

export const CURE = { walk: "24 hours", furniture: "48 hours", park: "72 hours" };

export const PROCESS = {
  eyebrow: "Our Process",
  titleBefore: "Our ",
  titleEm: "process",
  steps: [
    {
      number: "01",
      title: "We evaluate your space.",
      text: "Tell us about your project and we come to you. We look at the concrete, measure the space, and give you a tailored quote covering prep, coating system, and price before any work starts.",
    },
    {
      number: "02",
      title: "We grind, repair, and prep the surface.",
      text: "This step separates floors that last from floors that peel. We diamond-grind the concrete, repair cracks and joints, remove old coatings, and test for moisture. The right primer goes down based on what we find.",
    },
    {
      number: "03",
      title: "Your floor is ready, and you know when to use it.",
      text: `We clean up and leave you with simple care instructions. You walk on it in ${CURE.walk}, move furniture back in ${CURE.furniture}, and park on it in ${CURE.park}. Commercial jobs are phased so your business keeps running.`,
    },
  ],
  cta: "Get a Free Estimate",
};

export const REVIEWS = {
  eyebrow: "Client Reviews",
  title: "What our customers are saying",
  footnote: "Based on +50 Google reviews.",
  cta: { label: "Get in touch", href: "/free-estimate/" },
  items: [
    { quote: "My garage looks great!", name: "Renato Mattos" },
    {
      quote: "I’m extremely happy with the microcement floor in my basement.",
      name: "Matt Henry",
    },
    {
      quote: "No sloppiness or mysterious charges towards projects end.",
      name: "Nicole Shealey",
    },
    { quote: "We have a beautiful new floor in our garage.", name: "Sara Bordeleau Park" },
  ],
};

export const COATINGS = {
  eyebrow: "Floor Coating Systems",
  title: "Floor coating options",
  text: "Professional floor coating systems: flake, metallic, quartz, polished concrete, microtopping, and urethane cement for any environment.",
  cta: { label: "View all coating options", href: "/flooring-services/concrete-coating/" },
  items: [
    {
      title: "Flake System",
      text: "Decorative flakes in epoxy for a durable, slip-resistant, easy-to-clean finish.",
      href: "/flooring-services/concrete-coating/epoxy-floor-flakes/",
    },
    {
      title: "Metallic & Marble Epoxy",
      text: "High-gloss pigments for a deep, custom, showroom-quality look.",
      href: "/flooring-services/concrete-coating/metallic-marble-epoxy-flooring/",
    },
    {
      title: "Quartz Flooring System",
      text: "Quartz aggregates in epoxy for a slip-resistant surface, ideal for commercial and healthcare spaces.",
      href: "/flooring-services/concrete-coating/quartz-flooring-system/",
    },
    {
      title: "Polished Concrete",
      text: "Grinding and polishing existing concrete for a sleek, low-maintenance finish.",
      href: "/polished-concrete-contractors/",
    },
    {
      title: "Microtopping",
      text: "Thin, seamless overlays that modernize floors without heavy demolition.",
      href: "/flooring-services/microtopping-flooring/",
    },
    {
      title: "Self-Leveling Concrete",
      text: "Smooth, flat overlays that fix uneven or damaged slabs.",
      href: "/flooring-services/concrete-coating/self-leveling-concrete/",
    },
    {
      title: "Urethane Cement",
      text: "Seamless, industrial-grade flooring for heavy impact and chemical exposure.",
      href: "/flooring-services/concrete-coating/urethane-cement-flooring/",
    },
    {
      title: "Grind & Seal",
      text: "Diamond-ground concrete sealed for a clean, natural look. Budget-friendly with fast turnaround.",
      href: "/flooring-services/grind-and-seal/",
    },
    {
      title: "Concrete Sealer Coatings",
      text: "A protective finish that keeps concrete cleaner and easier to maintain.",
      href: "/flooring-services/concrete-coating/concrete-sealer-coatings/",
    },
  ],
};

export const TRANSPARENCY = {
  eyebrow: "Follow Along",
  title: "Transparency at every step",
  text: "Follow our journey on Instagram to see real floors, real projects, and real results:",
  handle: "@formsdesigns",
  href: "https://www.instagram.com/formsdesigns/",
};

export const PROJECTS = {
  eyebrow: "Our Work",
  title: "Featured projects",
  text: "See real results from our portfolio of completed floor installations.",
  cta: { label: "View all projects", href: "/media-gallery/" },
  items: [
    {
      space: "Garage",
      title: "Garage Floor Coating",
      image: media("2024/09/garage-2-pj.webp"),
      alt: "Garage floor coating by Forms Designs LLC in New Jersey",
    },
    {
      space: "Basement",
      title: "Basement Floor Coating",
      image: media("2024/09/basement-1-pj.webp"),
      alt: "Basement floor coating by Forms Designs LLC in New Jersey",
    },
    {
      space: "Commercial",
      title: "Commercial Floor Coating",
      image: media("2024/09/commercial-1-pj.webp"),
      alt: "Commercial floor coating by Forms Designs LLC in New Jersey",
    },
    {
      space: "Garage",
      title: "Garage Floor Coating",
      image: media("2024/09/garage-3-pj.webp"),
      alt: "Epoxy garage floor installed by Forms Designs LLC in New Jersey",
    },
    {
      space: "Basement",
      title: "Basement Floor Coating",
      image: media("2024/09/basement-2-pj.webp"),
      alt: "Finished basement floor by Forms Designs LLC in New Jersey",
    },
    {
      space: "Commercial",
      title: "Commercial Floor Coating",
      image: media("2024/09/commercial-2-pj.webp"),
      alt: "Commercial concrete floor by Forms Designs LLC in New Jersey",
    },
  ] as {
    space: string;
    title: string;
    image: string;
    alt: string;
    system?: string;
    colors?: string;
    location?: string;
    size?: string;
  }[],
};

export const FAQ = {
  eyebrow: "FAQ",
  title: "Common questions",
  text: "Everything you need to know before starting your epoxy floor project in Summit and across New Jersey.",
  items: [
    {
      q: "How do I get started?",
      a: "Call (908) 644-9819 or request a free estimate online. We schedule a visit, measure the space, discuss coating options, and give you a clear quote at no cost.",
    },
    {
      q: "What types of projects do you do?",
      a: "Residential garages and basements, commercial spaces like showrooms and retail, and industrial floors like warehouses and shops. We install epoxy, flake, metallic, urethane cement, polished concrete, and related systems.",
    },
    {
      q: "Why choose Forms Designs LLC over other contractors?",
      a: "Quality surface preparation, professional-grade materials, clear pricing, and an experienced team. We are licensed, bonded and insured, and we back our work with a 15-year warranty. No hidden fees, just durable, attractive floors.",
    },
    {
      q: "Do I need to handle permits or approvals myself?",
      a: "For most floor coating projects, permits are not required. Requirements can vary by town, HOA or building, so tell us about your property and we will confirm what applies.",
    },
    {
      q: "What does a free on-site consultation include?",
      a: "We visit the site, evaluate the condition of the concrete, and discuss systems, colors and finishes. You receive a clear quote with no obligation.",
    },
    {
      q: "What areas do you serve?",
      a: "Forms Designs LLC is based in Summit, NJ, and serves Morris, Essex, Union, Somerset, Middlesex and Monmouth Counties. Contact us to confirm we cover your town.",
    },
    {
      q: "Are you licensed and insured in New Jersey?",
      a: "Yes. Forms Designs LLC is licensed, bonded and insured in New Jersey. NJ License #13VH09407200. Certificates are available on request.",
    },
  ],
  cta: {
    title: "Ready to transform your floor?",
    text: "We make floor projects straightforward. Free estimate, clear timeline, quality results.",
    label: "Get a Free Estimate",
  },
};

export const CLOSING = {
  title: "Floors that perform and impress",
  text: "From garages to showrooms, Forms Designs LLC delivers seamless, durable coatings that protect your investment and elevate your space.",
};

export const FOOTER = {
  residential: [
    { label: "Garage Floors", href: "/garage-floor-epoxy-company/" },
    { label: "Basement Floors", href: "/basement-floor-contractors/" },
  ],
  commercial: [
    { label: "Polished Concrete", href: "/polished-concrete-contractors/" },
    { label: "Grind and Seal", href: "/flooring-services/grind-and-seal/" },
    { label: "Microtopping", href: "/flooring-services/microtopping-flooring/" },
  ],
  industrial: [
    { label: "Epoxy Systems", href: "/epoxy-flooring-contractors/" },
    {
      label: "Urethane Cement",
      href: "/flooring-services/concrete-coating/urethane-cement-flooring/",
    },
  ],
  solutions: [
    { label: "Flake System", href: "/flooring-services/concrete-coating/epoxy-floor-flakes/" },
    {
      label: "Metallic & Marble Epoxy",
      href: "/flooring-services/concrete-coating/metallic-marble-epoxy-flooring/",
    },
    {
      label: "Quartz",
      href: "/flooring-services/concrete-coating/quartz-flooring-system/",
    },
    { label: "Polished Concrete", href: "/polished-concrete-contractors/" },
    { label: "Microtopping", href: "/flooring-services/microtopping-flooring/" },
    {
      label: "Self-Leveling",
      href: "/flooring-services/concrete-coating/self-leveling-concrete/",
    },
    {
      label: "Urethane Cement",
      href: "/flooring-services/concrete-coating/urethane-cement-flooring/",
    },
    { label: "Grind & Seal", href: "/flooring-services/grind-and-seal/" },
  ],
  areas: [
    { label: "Summit", href: "/polished-concrete-summit-nj/" },
    { label: "Chatham" },
    { label: "Basking Ridge", href: "/garage-floor-coating-basking-ridge-nj/" },
    { label: "Warren", href: "/garage-floor-coating-warren-nj/" },
    { label: "Randolph" },
    { label: "Morristown" },
    { label: "Livingston" },
    { label: "Cranford" },
    { label: "Edison" },
    { label: "Bridgewater" },
    { label: "Montclair" },
    { label: "Colts Neck" },
  ] as { label: string; href?: string }[],
};

export const SERVICE_OPTIONS = [
  "Garage floor epoxy",
  "Basement floor",
  "Polished concrete",
  "Grind & seal",
  "Metallic / marble epoxy",
  "Microtopping",
  "Commercial flooring",
  "Industrial flooring",
  "Not sure, need advice",
];

export const COUNTIES = [
  "Morris",
  "Essex",
  "Union",
  "Somerset",
  "Middlesex",
  "Monmouth",
];
