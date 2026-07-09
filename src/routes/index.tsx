import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Info, Briefcase, Mail, Globe, Search, Code2, Smartphone, Workflow, Megaphone, Target, LifeBuoy, ArrowUpRight, Instagram, Linkedin, MessageCircle, Phone } from "lucide-react";
import { PropelLogo } from "@/components/PropelLogo";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

/* Contact constants — keep in sync with ContactSection */
const WHATSAPP_NUMBER = "+91 9063856159";
const CONTACT_EMAIL = "contact@propelstrategies.net";

const pillars = [
  {
    n: "01",
    title: "Acquire",
    desc: "Drive targeted traffic through SEO, paid campaigns, social media, and growth-focused digital strategies.",
  },
  {
    n: "02",
    title: "Build",
    desc: "Create modern brands, websites, and digital experiences designed to establish trust and authority.",
  },
  {
    n: "03",
    title: "Convert",
    desc: "Optimize user journeys and landing pages to turn visitors into qualified leads and customers.",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Implement scalable systems, automation, and performance strategies that support long-term growth.",
  },
];

const services = [
  {
    metric: "24/7",
    note: "Modern websites built to attract customers, build trust, and generate consistent inquiries.",
    title: "Web Development",
  },
  {
    metric: "↑ Reach",
    note: "SEO strategies that improve visibility, rankings, and long-term organic growth.",
    title: "SEO Optimization",
  },
  {
    metric: "Daily",
    note: "Consistent social media management that keeps your brand active, modern, and visible.",
    title: "Social Media Presence",
  },
  {
    metric: "↓ Manual",
    note: "Automated workflows and systems that reduce repetitive work and improve efficiency.",
    title: "Business Automation",
  },
  {
    metric: "100%",
    note: "Custom-built software solutions designed around your operations and business goals.",
    title: "Custom Software",
  },
  {
    metric: "ROI",
    note: "Performance marketing campaigns focused on leads, conversions, and measurable growth.",
    title: "Growth Marketing",
  },
];

const testimonials = [
  {
    client: "PERCYBOARDING",
    quote:
      "Propel rebuilt our entire digital backbone. The new website plus the boarding management platform replaced **3 disconnected tools** and saved our team hours every single day.",
    author: "Muqthar Baig",
    role: "Founder, Percyboarding",
    metric: "2 Systems",
  },
];

const process = [
  { n: "01", title: "Discovery", desc: "We listen, audit and map the real problem." },
  { n: "02", title: "Strategy", desc: "A pointed plan with measurable outcomes." },
  { n: "03", title: "Build", desc: "Design, code and systems — shipped fast." },
  { n: "04", title: "Launch", desc: "Go-to-market with momentum, not noise." },
  { n: "05", title: "Grow", desc: "Iterate, optimise, compound the wins." },
];

const cases = [
  {
    client: "PERCYBOARDING",
    result: "2 Systems",
    label: "Website + boarding management platform",
    sub: "Custom software for customer, pet, booking, and payment management",
  },
];

/* Footer link maps — every link points to a real section id */
const companyLinks = [
  { label: "About", href: "#about", Icon: Info },
  { label: "Case Studies", href: "#work", Icon: Briefcase },
  { label: "Contact", href: "#contact", Icon: Mail },
];

const socialLinks = [
  {
    label: "WhatsApp",
    href: `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`,
    Icon: MessageCircle,
  },
  {
    label: "Call now",
    href: `tel:+${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`,
    Icon: Phone,
  },
  {
    label: "Email",
    href: `mailto:${CONTACT_EMAIL}`,
    Icon: Mail,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/propelstrategies",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/propel-strategies/posts/?feedView=all",
    Icon: Linkedin,
  },
];

const footerServiceGroups = [
  {
    title: "Digital Presence",
    items: [
      { label: "Website / Landing Page", href: "#services", Icon: Globe },
      { label: "SEO Optimization", href: "#services", Icon: Search },
    ],
  },
  {
    title: "Software Solutions",
    items: [
      { label: "Web Applications", href: "#services", Icon: Code2 },
      { label: "Mobile App Development", href: "#services", Icon: Smartphone },
    ],
  },
  {
    title: "Marketing",
    items: [
      { label: "Social Media Marketing", href: "#services", Icon: Megaphone },
      { label: "Paid Ad Campaigns (Meta / Google)", href: "#services", Icon: Target },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Business Automation Systems", href: "#services", Icon: Workflow },
      { label: "Maintenance & Support", href: "#services", Icon: LifeBuoy },
    ],
  },
];


function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const els = document.querySelectorAll<HTMLElement>(".reveal-on-scroll");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10">
          <PropelLogo className="h-6" />
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#pillars" className="link-underline hover:text-[var(--orange)]">Approach</a>
            <a href="#services" className="link-underline hover:text-[var(--orange)]">Services</a>
            <a href="#work" className="link-underline hover:text-[var(--orange)]">Work</a>
            <a href="#process" className="link-underline hover:text-[var(--orange)]">Process</a>
            <a href="#contact" className="link-underline hover:text-[var(--orange)]">Contact</a>
          </nav>
          <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition hover:bg-[var(--orange)] hover:shadow-lg">
            Get in touch <span className="transition group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto max-w-[1400px] px-6 pb-20 pt-4 md:px-10 md:pb-32 md:pt-1">
          <h1 className="text-display mt-8 text-[12vw] font-bold leading-[0.9] md:text-[7.5rem] fade-up">
            Propel your
            <br />
            business into its
            <br />
            <span className="italic font-medium text-[var(--orange)]">
              next chapter.
            </span>
          </h1>
          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <p className="md:col-span-5 md:col-start-7 text-lg text-muted-foreground md:text-xl">
              Propel combines design, development, and digital strategy to help businesses
              grow smarter, faster, and more efficiently.
            </p>
          </div>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-30">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-foreground px-9 py-4 text-base font-medium text-background shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--orange)] hover:shadow-xl"
            >
              Get in touch
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
            <a
              href="#work"
              className="group inline-flex items-center justify-center gap-3 rounded-full border border-foreground bg-foreground/5 px-9 py-4 text-base font-medium text-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-foreground hover:text-background hover:shadow-xl"
            >
              View work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Marquee */}
        <div className="overflow-hidden border-y border-border/60 bg-[var(--beige)] py-5">
          <div className="marquee flex w-max gap-12 whitespace-nowrap text-2xl font-medium tracking-tight">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12">
                {["Websites", "Custom Software", "SEO", "Branding", "Ads", "Lead Gen", "Business Tools", "Growth Systems"].map((w) => (
                  <span key={w} className="flex items-center gap-12">
                    <span>{w}</span>
                    <span className="text-[var(--orange)]">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-10 md:grid-cols-12 reveal-on-scroll">
          <div className="md:col-span-5">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Four pillars</p>
            <h2 className="text-display mt-4 text-5xl md:text-7xl">
              The growth
              <br /> equation.
            </h2>
          </div>
          <p className="md:col-span-5 md:col-start-8 self-end text-lg text-muted-foreground">
            Propel brings strategy, design, marketing, and technology together to build a growth system that actually scales.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 reveal-on-scroll">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={`group relative flex min-h-[280px] flex-col justify-between bg-card p-8 transition-all duration-300 hover:bg-foreground hover:text-background md:p-12 ${
                i === 0 || i === 3 ? "md:bg-[var(--beige)]" : ""
              }`}
            >
              <div className="flex items-start justify-between">
                <span className="text-sm font-medium tracking-widest text-muted-foreground group-hover:text-background/60">{p.n}</span>
                <span className="text-2xl transition group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </div>
              <div>
                <h3 className="text-display text-5xl md:text-6xl">{p.title}</h3>
                <p className="mt-4 max-w-md text-base opacity-80">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-foreground text-background">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 reveal-on-scroll">
            <h2 className="text-display md:col-span-7 text-5xl md:text-7xl">
              Services that <span className="text-[var(--lime)]"> accelerate business</span>
            </h2>
            <p className="md:col-span-4 md:col-start-9 self-end text-lg text-background/70">
              Helping businesses scale through modern, software, automation, and marketing to help businesses operate smarter, grow faster, and build long-term business growth.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="group reveal-on-scroll relative overflow-hidden rounded-2xl border border-background/15 bg-background/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--lime)]/40 hover:bg-background/[0.07] hover:shadow-2xl">
                <div className="flex items-baseline justify-between">
                  <span className="text-display text-5xl md:text-6xl text-[var(--lime)]">{s.metric}</span>
                  <span className="text-xl text-background/60 transition group-hover:translate-x-1">↗</span>
                </div>
                <p className="mt-2 text-sm text-background/60">{s.note}</p>
                <h3 className="text-display mt-10 text-2xl md:text-3xl">{s.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work / Case Studies */}
<section id="work" className="bg-background">
  <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
    <div className="grid gap-10 md:grid-cols-12 md:items-end reveal-on-scroll">
      <h2 className="text-display text-6xl leading-none md:col-span-8 md:text-8xl">
  Selected
  <span
    className="mt-2 block italic font-light"
    style={{ color: "var(--orange)" }}
  >
    work
  </span>
</h2>
      <p className="text-lg leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9 md:self-end md:text-left">
  A handful of recent engagements where strategy, design, and engineering
  compounded into measurable growth.
</p>
    </div>

    {/* Fixed 2-column grid on both mobile and desktop */}
    <div className="mt-16 grid grid-cols-2 gap-3 md:gap-6">
      {cases.map((c, i) => (
        <article
          key={c.client}
          className="reveal-on-scroll relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[var(--orange)]/40 hover:shadow-xl md:p-10"
        >
          <header className="relative flex items-start justify-between gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground md:text-xs">
              {String(i + 1).padStart(2, "0")} — Case
            </span>
          </header>

          <div className="relative mt-8 md:mt-16">
            <h3 className="text-display text-xl font-bold leading-none tracking-tight md:text-3xl">
              {c.client}
            </h3>
            <div className="mt-5 md:mt-8">
              <div
                className="text-display text-4xl font-bold leading-none tracking-tight md:text-6xl"
                style={{ color: "var(--orange)" }}
              >
                {c.result}
              </div>
              <p className="mt-3 text-sm font-medium text-foreground md:mt-4 md:text-base">
                {c.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground md:text-sm">
                {c.sub}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      {/* Process */}
      <section id="process" className="border-y border-border bg-[var(--beige)]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 reveal-on-scroll">
            <p className="md:col-span-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Process</p>
            <h2 className="text-display md:col-span-9 text-5xl md:text-7xl">
              Five moves. <br />
              <span className="italic font-medium">One trajectory.</span>
            </h2>
          </div>

          <ol className="mt-16 divide-y divide-foreground/15 border-y border-foreground/15">
            {process.map((p, i) => (
              <li key={p.n} className="group grid grid-cols-12 items-center gap-6 py-8 transition hover:bg-foreground hover:text-background md:py-10">
                <span className="col-span-2 text-display text-4xl md:text-6xl text-[var(--orange)]">{p.n}</span>
                <h3 className="col-span-10 md:col-span-4 text-display text-3xl md:text-5xl" style={{ transform: `translateX(${i * 6}px)` }}>{p.title}</h3>
                <p className="col-span-12 md:col-span-5 md:col-start-8 text-base md:text-lg opacity-80">{p.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section id="about" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-center reveal-on-scroll">
          <div className="md:col-span-2">
            <div className="relative h-32 w-32">
              <div className="absolute inset-0 rounded-full bg-[var(--lime)]" />
              <div className="absolute inset-6 rounded-full bg-[var(--orange)] mix-blend-multiply" />
            </div>
          </div>
          <div className="md:col-span-10">
            <h2 className="text-display text-4xl md:text-7xl">
              We turn websites, software, and marketing into scalable growth engines.<span className="text-[var(--orange)]">growth systems</span> for real businesses.
            </h2>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
              Tools, websites, and campaigns are just means — not the outcome.
Every Propel engagement is measured by what it improves: qualified leads, lower acquisition costs, stronger retention, and scalable operations.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-y border-border bg-foreground text-background overflow-hidden">
        <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-10 md:grid-cols-12 md:items-end reveal-on-scroll">
            <h2 className="text-display md:col-span-8 text-5xl leading-none md:text-7xl">
              Reviews that'll make you{" "}
              <span className="italic font-medium text-[var(--lime)]">cartwheel.</span>
            </h2>
            <p className="md:col-span-4 self-end text-base leading-relaxed text-background/60">
              Real outcomes from teams we've partnered with — built, shipped, and measured.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:gap-6 md:grid-cols-2">
            {testimonials.map((t, i) => (
              <figure
                key={t.client}
                style={{ animationDelay: `${i * 120}ms` }}
                className="testimonial-card group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-background/15 bg-background/[0.03] p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[var(--orange)]/40 hover:bg-background/[0.06] md:p-10"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--orange)]/0 blur-3xl transition-all duration-700 group-hover:bg-[var(--orange)]/30" />

                <header className="relative flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-background/50 md:text-xs">
                    {t.client}
                  </span>
                  <div className="flex gap-0.5 text-[var(--lime)] text-sm">★★★★★</div>
                </header>

                <blockquote className="relative mt-6 text-lg leading-snug md:mt-8 md:text-2xl">
                  <span className="absolute -left-1 -top-4 text-5xl leading-none text-[var(--orange)]/60 md:text-6xl">
                    "
                  </span>
                  {t.quote.split("**").map((part, idx) =>
                    idx % 2 === 1 ? (
                      <span key={idx} className="text-[var(--lime)] font-medium">
                        {part}
                      </span>
                    ) : (
                      <span key={idx}>{part}</span>
                    ),
                  )}
                </blockquote>

                <figcaption className="relative mt-8 flex items-center justify-between border-t border-background/15 pt-5 md:mt-10">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-full bg-[var(--orange)] text-sm font-bold text-foreground">
                      {t.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{t.author}</p>
                      <p className="text-xs text-background/50">{t.role}</p>
                    </div>
                  </div>
                  <span className="text-display text-2xl font-bold text-[var(--lime)] md:text-3xl">
                    {t.metric}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
<footer className="border-t border-border bg-foreground text-background">
  <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-10">
    <div className="grid gap-12 md:grid-cols-12">

      {/* Brand Section */}
      <div className="md:col-span-4">
        <PropelLogo className="h-8" color="var(--lime)" />
        <p className="mt-6 max-w-sm text-background/70 leading-relaxed">
          We help businesses grow faster by creating digital systems that combine design, technology, and marketing into a single scalable growth engine.
        </p>

        {/* Contact + social links */}
        <div className="mt-6 flex flex-wrap gap-2">
          {socialLinks.map(({ label, href, Icon }) => {
            const isExternal = href.startsWith("http");
            return (
              <a
                key={label}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="group inline-flex items-center gap-2 rounded-full border border-background/15 bg-background/5 px-4 py-2 text-xs font-medium text-background/80 transition-all duration-300 hover:border-[var(--lime)] hover:bg-background/10 hover:text-[var(--lime)]"
              >
                <Icon className="size-3.5 shrink-0 opacity-70 transition group-hover:opacity-100" />
                <span>{label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Company */}
      <div className="md:col-span-2 text-sm">
        <p className="text-xs uppercase tracking-widest text-background/50">Company</p>
        <ul className="mt-4 space-y-2.5">
          {companyLinks.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href} className="link-underline group inline-flex items-center gap-2 text-background/70 hover:text-[var(--lime)]">
                <Icon className="size-3.5 shrink-0 opacity-70 transition group-hover:opacity-100 group-hover:text-[var(--orange)]" />
                <span>{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Services — now fills the right side, split into 2 columns */}
      <div className="md:col-span-6 text-sm">
        <p className="text-xs uppercase tracking-widest text-background/50">Services</p>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
          {footerServiceGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[11px] uppercase tracking-wider text-background/40 mb-2">
                {group.title}
              </p>
              <ul className="space-y-1.5">
                {group.items.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} className="link-underline group inline-flex items-center gap-2 text-background/70 hover:text-[var(--lime)]">
                      <Icon className="size-3.5 shrink-0 opacity-70 transition group-hover:opacity-100 group-hover:text-[var(--orange)]" />
                      <span>{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-background/15 pt-8 text-sm text-background/60">
      <p>© {new Date().getFullYear()} Propel. All rights reserved.</p>
      <p className="text-background/50">Built for growth. Designed for impact.</p>
    </div>
  </div>
</footer>
    </div>
  );
}