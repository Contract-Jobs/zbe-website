export const company = {
  name: "ZBE",
  legalName: "ZBE Power Engineering and Trading",
  tagline: "Power done right.",
  email: "sales@zbepowereng.com",
  phone: "+251 911 488 066",
  mobile: "+251 988 488 066",
  phoneHref: "tel:+251911488066",
  mobileHref: "tel:+251988488066",
  addressLine1: "Bole Sub City",
  addressLine2: "Addis Ababa, Ethiopia",
  mapsHref: "https://maps.google.com/?q=Bole+Addis+Ababa",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About us" },
  { href: "/contact", label: "Contact us" },
];

export const hero = {
  headline: "Power done right.",
  body: "Higher-quality electrical systems with shorter lead times. ZBE is your design-build partner for installation, ICT infrastructure, and custom electronics.",
  panelTitle: "Your electrical design and build partners",
  panelItems: [
    "Survey to commissioning, one team",
    "Custom PCB and electronics in-house",
    "ICT infrastructure that scales",
    "24/7 emergency response",
  ],
};

export const trust = {
  label: "Trusted by hospitals, hotels, banks, and high-rise offices",
  marks: [
    { name: "Westin Addis", initials: "W", word: "WESTIN", line: "ADDIS" },
    { name: "Minaye", initials: "M", word: "MINAYE" },
    { name: "Dashen Bank", initials: "D", word: "DASHEN", line: "BANK" },
    { name: "MultiChoice", initials: "MC", word: "MULTICHOICE" },
    { name: "Sheraton Addis", initials: "S", word: "SHERATON", line: "ADDIS" },
    { name: "Midroc", initials: "MD", word: "MIDROC" },
  ],
};

export const difference = {
  kicker: "Reliability is just\nthe beginning.",
  photos: [
    { src: "/images/work/panel-1.jpg", alt: "ZBE technicians assembling a dense electrical control panel." },
    { src: "/images/work/site-1.jpg", alt: "ZBE engineers reviewing an installation on a live project site." },
  ],
  label: "The ZBE difference",
  intro:
    "Our engineering process finds issues before they become delays — more precision, more transparency, and a cleaner handover.",
  cards: [
    {
      title: "Speed",
      subtitle: "Faster is better",
      body: "For us, speed and quality go hand-in-hand. Tight drawings, sequenced procurement, and a crew that shows up ready means less waiting and fewer surprises.",
      icon: "diode" as const,
    },
    {
      title: "Quality",
      subtitle: "Engineered. Then verified.",
      body: "From PCB layout to field termination, we take variability out of the equation. Every system is checked against drawings and tested before we call it done.",
      icon: "resistor" as const,
    },
    {
      title: "Transparency",
      subtitle: "More delivery. Fewer surprises.",
      body: "You always know where the work stands — design status, materials, and site progress — so commissioning is a milestone, not a scramble.",
      icon: "capacitor" as const,
    },
  ],
};

export const howWeWork = {
  label: "How we work",
  body: "We’ve got your electrical system covered. Our engineers and technicians have years in the field. We help you avoid delays, tackle inefficiencies, and keep a smooth process from enquiry to handover.",
  steps: [
    {
      title: "Get a quote in about a day",
      body: "Send drawings, a scope, or a site brief. We come back with a clear price and a practical plan.",
      icon: "intake" as const,
    },
    {
      title: "We get right to work",
      body: "Once the order is placed, design, procurement, and fabrication start immediately.",
      icon: "design" as const,
    },
    {
      title: "Installed and commissioned",
      body: "We cut time, not corners — tested, labelled, and ready for the operator.",
      icon: "ship" as const,
    },
  ],
};

export const testimonial = {
  quote:
    "The team at ZBE provided outstanding electrical installation systems. Their professionalism and attention to detail were evident throughout the project.",
  name: "Project client",
  role: "Hospitality & commercial fit-out",
  image: "/images/work/hero.jpg",
  imageAlt:
    "ZBE technicians working on an open electrical panel with labelled wiring and DIN-rail components.",
};

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  status: "Complete" | "Ongoing";
  scopes: string[];
  body: string;
  image?: string;
  featured?: boolean;
};

export const projects: {
  hero: { title: string; body: string };
  items: Project[];
} = {
  hero: {
    title: "Work we can put a name to.",
    body: "Hospitals, hotels, banks, and high-rise offices — electrical, fire, and data systems installed and commissioned.",
  },
  items: [
    {
      slug: "adama-referral-hospital",
      title: "Adama Referral Hospital",
      client: "CDC",
      industry: "Healthcare",
      status: "Complete",
      scopes: ["Electrical installation", "450 kVA generator", "Mechanical control board"],
      body: "Electrical installation, a 450 kVA generator, and a control board for the mechanical system on a CDC hospital programme.",
      image: "/images/projects/adama-hospital.jpg",
      featured: true,
    },
    {
      slug: "nekemte-regional-laboratory",
      title: "Nekemte Regional Laboratory",
      client: "CDC",
      industry: "Healthcare",
      status: "Complete",
      scopes: ["Electrical installation", "Electrical board assembly", "350 kVA generator"],
      body: "Electrical installation, board assembly, and a 350 kVA generator installed and commissioned for a CDC laboratory.",
    },
    {
      slug: "minaye-corporate",
      title: "Minaye Corporate Office",
      client: "Minaye",
      industry: "High-rise",
      status: "Complete",
      scopes: ["Electrical installation", "Data system", "Two 550 kVA generators with synchronisation"],
      body: "Full electrical and data installation for a 2B+G+19 office, including two 550 kVA generators installed and synchronised.",
      image: "/images/projects/minaye-corporate.jpg",
      featured: true,
    },
    {
      slug: "minaye-parking",
      title: "Minaye Corporate Parking",
      client: "Minaye",
      industry: "High-rise",
      status: "Complete",
      scopes: ["Electrical installation", "Fire alarm", "2,000 kVA transformer", "CCTV"],
      body: "Electrical, fire alarm, and CCTV for a B+G+20 parking structure, plus a 2,000 kVA transformer installation.",
    },
    {
      slug: "ethiopian-blood-bank",
      title: "Ethiopian Blood Bank",
      client: "Ethiopian Blood Bank",
      industry: "Healthcare",
      status: "Complete",
      scopes: ["Partial electrical installation", "Fire alarm interfaced with fire pump"],
      body: "Partial electrical installation and fire-alarm interfacing with the fire pump.",
    },
    {
      slug: "multichoice-apartments",
      title: "MultiChoice Ethiopia Apartments",
      client: "MultiChoice Ethiopia",
      industry: "Residential",
      status: "Complete",
      scopes: ["Electrical installation", "450 kVA generator"],
      body: "Electrical installation and a 450 kVA generator for the MultiChoice Ethiopia apartments.",
    },
    {
      slug: "mohammedian-village",
      title: "Mohammedian Village Sales Office",
      client: "Midroc Mechare",
      industry: "Real estate",
      status: "Complete",
      scopes: ["Electrical installation", "Fire alarm", "Data system"],
      body: "Electrical, fire alarm, and data installation for the Midroc Mechare sales office.",
    },
    {
      slug: "loli-luxury-penthouses",
      title: "Loli Luxury Penthouses",
      client: "Midroc",
      industry: "Residential",
      status: "Complete",
      scopes: ["Electrical installation", "Fire alarm", "Data system"],
      body: "Electrical, fire alarm, and data installation for the Midroc penthouse programme.",
    },
    {
      slug: "sheraton-steak-house",
      title: "Sheraton Addis Steak House",
      client: "Sheraton Addis",
      industry: "Hospitality",
      status: "Complete",
      scopes: ["Electrical installation"],
      body: "Electrical installation for the Sheraton Addis steak house.",
    },
    {
      slug: "minaye-luxury-apartment",
      title: "Minaye Luxury Apartment",
      client: "Minaye",
      industry: "Residential",
      status: "Complete",
      scopes: ["Electrical maintenance & inspection", "Generator maintenance & inspection"],
      body: "Electrical and generator maintenance and inspection for the luxury apartment.",
    },
    {
      slug: "minaye-furnished-apartment",
      title: "Minaye Furnished Apartment",
      client: "Minaye",
      industry: "Residential",
      status: "Complete",
      scopes: ["Electrical maintenance & inspection", "Generator maintenance & inspection"],
      body: "Electrical and generator maintenance and inspection for the furnished apartment.",
    },
    {
      slug: "century-real-estate",
      title: "Century Real Estate",
      client: "Century Real Estate",
      industry: "Real estate",
      status: "Complete",
      scopes: ["450 kVA and 700 kVA generators", "Active maintenance for six generators across four sites"],
      body: "Generator installation and commissioning, plus ongoing maintenance for six generators on four sites.",
    },
    {
      slug: "dashen-smart-banking",
      title: "Dashen Smart Banking",
      client: "Dashen Bank",
      industry: "Banking",
      status: "Complete",
      scopes: ["Electrical installation", "Fire alarm", "Data system"],
      body: "Electrical, fire alarm, and data installation for a Dashen smart-banking branch.",
      image: "/images/projects/dashen-smart-banking.jpg",
      featured: true,
    },
    {
      slug: "westin-addis",
      title: "Westin Addis Marriott Hotel",
      client: "Westin Addis Ababa",
      industry: "Hospitality",
      status: "Ongoing",
      scopes: ["Electrical installation", "Fire alarm", "Data system"],
      body: "Ongoing electrical, fire alarm, and data installation for the Westin Addis Marriott Hotel.",
      image: "/images/projects/westin-addis.jpg",
      featured: true,
    },
    {
      slug: "sheraton-office-bar",
      title: "Sheraton Office Bar",
      client: "Sheraton Addis",
      industry: "Hospitality",
      status: "Ongoing",
      scopes: ["Electrical installation", "Fire alarm", "Data system"],
      body: "Ongoing electrical, fire alarm, and data installation for the Sheraton office bar.",
    },
    {
      slug: "finland-embassy-minaye",
      title: "Finland Embassy — Minaye 13th Floor",
      client: "Finland Embassy / Minaye",
      industry: "Diplomatic",
      status: "Ongoing",
      scopes: ["Electrical installation", "Fire alarm", "Data system"],
      body: "Ongoing electrical, fire alarm, and data installation for the Finland Embassy fit-out on the 13th floor of the Minaye building.",
    },
  ],
};

export const featuredProjects = [
  ...projects.items.filter((item) => item.featured && item.slug === "dashen-smart-banking"),
  ...projects.items.filter((item) => item.featured && item.slug !== "dashen-smart-banking"),
];

export const caseStudies = {
  label: "Projects",
  headline: "Work we can put a name to.",
  items: featuredProjects,
};

export const faqs = {
  label: "FAQs",
  headline: "Answers to (almost) all your electrical questions",
  items: [
    {
      q: "How does ordering work?",
      a: "Use the quote form or email sales@zbepowereng.com with a scope, drawings, or a site address. Once the proposal is accepted, we start design or installation immediately.",
    },
    {
      q: "Where are you based?",
      a: "ZBE Power Engineering is based in Bole Sub City, Addis Ababa, Ethiopia. We work across hospitality, broadcast, industrial, and commercial projects in the region.",
    },
    {
      q: "What information do I need to send to get a quote?",
      a: "A brief of the application, load estimates if you have them, and any drawings or photos of the existing installation. After that we can schedule a site visit or a technical call.",
    },
    {
      q: "Do you design as well as install?",
      a: "Yes. We cover electrical design, ICT infrastructure, custom PCB work, prototyping, and installation — from first sketch through testing.",
    },
    {
      q: "Who owns the drawings once complete?",
      a: "Approved project drawings are yours. You can have ZBE build and install, or take the package to an in-house team.",
    },
    {
      q: "How does pricing work?",
      a: "Design and supply are quoted as a clear package. Installation is priced from the approved scope. You will not get a moving target after we start.",
    },
    {
      q: "How are systems tested?",
      a: "We check continuity, labelling against drawings, insulation where required, and a controlled power-on test before handover.",
    },
    {
      q: "What are your standard payment terms?",
      a: "Design fees are due on order confirmation. For supply and install we typically take a mobilisation payment with the balance against milestones and handover. We will confirm terms on each quote.",
    },
  ],
};

export const services = {
  hero: {
    title: "Electrical and fire protection.",
    body: "Complete supply and installation — drawings, containment, and commissioning — for power systems and fire fighting.",
  },
  offerings: [
    {
      id: "electrical",
      title: "Electrical service",
      intro:
        "Complete supply and installation of electrical systems, from first drawing through testing and as-builts.",
      groups: [
        {
          title: "Drawings",
          items: [
            "Builder-work drawings",
            "Shop drawings",
            "Coordination drawings",
            "Construction drawings",
          ],
        },
        {
          title: "Installation",
          items: [
            "Containments — PVC & GI",
            "Cable management systems",
            "Wiring and cabling",
            "Earthing system",
            "Busbar trunking",
            "Switchgear system",
            "Metering & instrumentation",
            "Emergency power supply",
            "Wiring accessories",
            "Disconnecting switches",
            "Light fitting installation",
            "Lightning protection system",
          ],
        },
        {
          title: "Handover",
          items: ["Testing and commissioning", "As-built drawings"],
        },
      ],
    },
    {
      id: "fire-protection",
      title: "Fire protection service",
      intro:
        "Supply and installation of fire-fighting systems, from drawings through pressure testing and commissioning.",
      groups: [
        {
          title: "Drawings",
          items: [
            "Builder-work drawings",
            "Shop drawings",
            "Coordination drawings",
            "Construction drawings",
          ],
        },
        {
          title: "Installation",
          items: [
            "Sprinkler pipes",
            "Zone control valves",
            "Wet riser pipes",
            "Sprinkler heads",
            "Breeching inlets",
            "Fire extinguishers",
            "Fire blankets",
            "Fire hose-reel cabinets",
            "PRVs, isolation valves, and related fittings",
            "Landing valves & fire hose reels",
            "Suppression systems — clean agent, deluge, pre-action",
            "Fire pump rooms — networks, valves, accessories, control panel, alarm check valves, NRVs",
          ],
        },
        {
          title: "Handover",
          items: [
            "Pressure testing for fire-fighting pipes",
            "Labelling and identification",
            "Testing and commissioning",
            "As-built drawings",
          ],
        },
      ],
    },
  ],
  industries: [
    { title: "Hospitality", body: "Guest-facing buildings that cannot look like a job site after opening night." },
    { title: "Broadcast & media", body: "Clean power and life-safety systems for signal-critical rooms." },
    { title: "Industrial plant", body: "Electrical and fire packages that maintenance teams can actually work on." },
    { title: "Commercial campuses", body: "Coordinated electrical and fire packages that keep pace with other trades." },
    { title: "High-rise & mixed-use", body: "Wet risers, sprinklers, and switchgear sequenced with the construction programme." },
    { title: "Critical facilities", body: "Documented systems and a crew that answers the phone." },
  ],
};

export const about = {
  heroTitle: "Meet ZBE.",
  intro:
    "We started ZBE to be the electrical partner we always wished we had. We are working toward a future where power, electronics, and ICT are delivered more cleanly, more transparently, and without compromising quality.",
  storyLabel: "Our story",
  storyHeadline:
    "We’re a team of electricians, electronics engineers, and ICT specialists based in Addis Ababa.",
  storyBody:
    "ZBE Power Engineering designs and installs electrical systems, builds custom PCB boards, and stands up ICT infrastructure — from first concept through prototype testing and live commissioning.",
  values: [
    { title: "Win for the customer", body: "We sit on the same side of the table — their uptime is our reputation." },
    { title: "Default to transparency", body: "Honesty about scope, schedule, and what the site will actually take." },
    { title: "Speed is a feature", body: "We move. Don’t let perfect become an excuse for a dark building." },
    { title: "Win and lose as a team", body: "Individuals drive inputs. Crews deliver outputs. We own both." },
  ],
};

export const footer = {
  copyright: "Electrical design, installation & electronics.",
  credit: "Addis Ababa",
};
