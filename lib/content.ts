export const company = {
  name: "ZBE",
  legalName: "ZBE Power Engineering",
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
  label: "Trusted by hotels, broadcasters, and growing industry",
  marks: ["Westin Addis", "MultiChoice", "Hospitality", "Broadcast", "Industry"],
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

export const caseStudies = {
  label: "Case studies",
  headline: "Our most important system is yours",
  items: [
    {
      slug: "westin-addis",
      title: "Electrical and ICT buildout for a landmark Addis Ababa hotel",
      client: "Westin Addis Ababa",
      industry: "Hospitality",
      body: "A large hospitality programme needs power, lighting, and low-current systems that disappear into the guest experience. ZBE supported electrical installation and ICT infrastructure so the building could open on a hotel-grade standard.",
      image: "/images/work/westin.jpg",
    },
    {
      slug: "multichoice",
      title: "Broadcast-grade ICT infrastructure for a regional media operator",
      client: "MultiChoice",
      industry: "Broadcast",
      body: "Media operations cannot tolerate noisy power or fragile cabling. ZBE delivered structured ICT infrastructure built for uptime, service access, and clean signal paths.",
      image: "/images/work/panel-2.jpg",
    },
    {
      slug: "industrial-panels",
      title: "Control panel design, assembly, and commissioning for industrial plant",
      client: "Confidential",
      industry: "Industrial",
      body: "From schematic to live panel: labelled trunks, orderly DIN-rail layouts, and point-to-point checks so operators can maintain the system without guesswork.",
      image: "/images/work/panel-1.jpg",
    },
    {
      slug: "pcb-lab",
      title: "Custom PCB design and prototype builds for specialised electronics",
      client: "Confidential",
      industry: "Electronics",
      body: "Concept, layout, fabrication, and lab testing under one roof — so hardware teams are not bouncing between a designer, a board house, and a test bench.",
      image: "/images/work/panel-3.jpg",
    },
    {
      slug: "commercial-power",
      title: "Site electrical installation for a multi-building commercial campus",
      client: "Confidential",
      industry: "Commercial",
      body: "Distribution, containment, and termination coordinated with other trades so energisation happens on the construction programme — not after it.",
      image: "/images/work/site-1.jpg",
    },
    {
      slug: "emergency-response",
      title: "Standby electrical support for critical facilities",
      client: "Confidential",
      industry: "Facilities",
      body: "When a fault hits after hours, the response has to be technical, not theatrical. ZBE keeps a 24/7 path from call-out to a documented fix.",
      image: "/images/work/hero.jpg",
    },
  ],
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
    title: "Services",
    body: "Electrical installation, ICT infrastructure, and custom electronics — designed, built, and supported by one team in Addis Ababa.",
  },
  blocks: [
    {
      title: "Design & engineering",
      body: "Decades of field sense, applied on paper first. We design to the actual site, the actual load, and the standards that will be inspected — then we install what we drew.",
    },
    {
      title: "Electrical installation",
      items: [
        { title: "Power systems", body: "Distribution, containment, termination, and commissioning for commercial and industrial sites." },
        { title: "Control panels", body: "Schematics, assembly, labelling, and testing so the panel in the field matches the drawing in your folder." },
        { title: "Maintenance & emergency", body: "Planned service plus 24/7 call-out when a fault cannot wait for Monday." },
      ],
    },
    {
      title: "Electronics & ICT",
      items: [
        { title: "Custom PCB design", body: "Layout, fabrication, and prototype testing in our electronics laboratory." },
        { title: "ICT infrastructure", body: "Structured cabling, racks, and low-current systems for buildings that have to stay online." },
        { title: "Prototyping", body: "From concept to a working board and a documented test, without a chain of subcontractors." },
      ],
    },
  ],
  industries: [
    { title: "Hospitality", body: "Guest-facing buildings that cannot look like a job site after opening night." },
    { title: "Broadcast & media", body: "Clean power and structured ICT for signal-critical rooms." },
    { title: "Industrial plant", body: "Panels and installation that maintenance teams can actually work on." },
    { title: "Commercial campuses", body: "Coordinated electrical packages that keep pace with other trades." },
    { title: "Electronics OEMs", body: "PCB design and lab support from first layout to a tested prototype." },
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
