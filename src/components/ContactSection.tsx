import { useMemo, useState } from "react";
import emailjs from "@emailjs/browser";

type ServiceCategory = {
  category: string;
  items: string[];
};

const SERVICE_GROUPS: ServiceCategory[] = [
  {
    category: "Digital Presence",
    items: ["Website Development", "Landing Page Development", "SEO Optimization"],
  },
  {
    category: "Software Solutions",
    items: ["Web Applications", "Mobile App Development", "Business Automation Systems"],
  },
  {
    category: "Marketing",
    items: ["Social Media Marketing", "Paid Ad Campaigns (Meta / Google)"],
  },
  {
    category: "Support",
    items: ["Maintenance & Support"],
  },
];

const MAX = {
  firstName: 30,
  lastName: 30,
  email: 100,
  phone: 20,
  context: 500,
} as const;

function computeLeadPriority(count: number): "low" | "medium" | "high" {
  if (count >= 4) return "high";
  if (count >= 2) return "medium";
  return "low";
}

const CONTACT_METHODS = ["WhatsApp", "Phone Call", "Email"] as const;
type ContactMethod = (typeof CONTACT_METHODS)[number];

const WHATSAPP_NUMBER = "+14155550142";
const EMAIL = "hello@propel.studio";
const PHONE_DISPLAY = "+1 (415) 555-0142";

type Errors = Partial<Record<"firstName" | "email" | "phone" | "services", string>>;
type TouchedFields = "firstName" | "email" | "phone" | "services" | "__submit";

export function ContactSection() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [context, setContext] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod | "">("");

  const [touched, setTouched] = useState<Partial<Record<TouchedFields, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const errors: Errors = useMemo(() => {
    const e: Errors = {};
    if (!firstName.trim()) e.firstName = "First name is required";
    else if (firstName.trim().length > MAX.firstName)
      e.firstName = `Max ${MAX.firstName} characters`;
    if (!email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      e.email = "Enter a valid email";
    else if (email.trim().length > MAX.email) e.email = `Max ${MAX.email} characters`;
    if (!phone.trim()) e.phone = "Phone is required";
    else if (!/^\+?[0-9\s\-()]{7,20}$/.test(phone.trim()))
      e.phone = "Use international format e.g. +1 415 555 0142";
    if (services.length === 0) e.services = "Select at least one service";
    return e;
  }, [firstName, email, phone, services]);

  const isValid = Object.keys(errors).length === 0;

  const toggleService = (item: string) => {
    setServices((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item],
    );
  };

  const showError = (field: keyof Errors) =>
    (touched[field] || touched.__submit) && errors[field];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched((t) => ({ ...t, __submit: true }));
    setSubmitError(null);

    if (!isValid) return;

    setSubmitting(true);

    const templateParams = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      services: services.join(", "),
      businessNeeds: context.trim(),
      preferredContactMethod: contactMethod || "Not specified",
      leadPriority: computeLeadPriority(services.length),
      submittedAt: new Date().toISOString(),
    };

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// 🔍 DEBUG LOGS (TEMP - REMOVE LATER IF YOU WANT)
console.log("🔥 EMAILJS DEBUG START");
console.log("SERVICE ID:", serviceId);
console.log("TEMPLATE ID:", templateId);
console.log("PUBLIC KEY:", publicKey);
console.log("🔥 EMAILJS DEBUG END");

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS configuration is missing. Please check environment variables.");
      }

      console.log("📤 Sending EmailJS request with params:", templateParams);

await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitError("Failed to send message. Please try again or contact us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setServices([]);
    setContext("");
    setContactMethod("");
    setTouched({});
    setSubmitted(false);
    setSubmitError(null);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border bg-[var(--beige)]"
    >
      {/* Ambient gradient blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--orange), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-32 h-[32rem] w-[32rem] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--lime), transparent)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        {/* Heading */}
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contact — Start a project
            </p>
            <h2 className="text-display mt-4 text-5xl md:text-7xl">
              Start your business
              <br />
              <span className="italic font-medium text-[var(--orange)]">growth request.</span>
            </h2>
          </div>
          <p className="md:col-span-4 self-end text-lg text-muted-foreground">
            Tell us where you want to go. We&apos;ll respond within 24 hours with a tailored
            plan and the next steps.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* MAIN FORM — primary focus */}
          <div className="lg:col-span-8">
            <div
              className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-6 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.25)] backdrop-blur md:p-10"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} noValidate className="space-y-12">
                  {/* Section 1 — Basic info */}
                  <div>
                    <SectionLabel index="01" title="Your details" />
                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                      <Field
                        label="First name"
                        required
                        error={showError("firstName") ? errors.firstName : undefined}
                      >
                        <input
                          type="text"
                          value={firstName}
                          maxLength={MAX.firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
                          placeholder="Jane"
                          className={inputClass(!!showError("firstName"))}
                        />
                      </Field>
                      <Field label="Last name">
                        <input
                          type="text"
                          value={lastName}
                          maxLength={MAX.lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Doe"
                          className={inputClass(false)}
                        />
                      </Field>
                      <Field
                        label="Email"
                        required
                        error={showError("email") ? errors.email : undefined}
                      >
                        <input
                          type="email"
                          value={email}
                          maxLength={MAX.email}
                          onChange={(e) => setEmail(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, email: true }))}
                          placeholder="jane@company.com"
                          className={inputClass(!!showError("email"))}
                        />
                      </Field>
                      <Field
                        label="Phone"
                        required
                        hint="Include country code"
                        error={showError("phone") ? errors.phone : undefined}
                      >
                        <input
                          type="tel"
                          value={phone}
                          maxLength={MAX.phone}
                          onChange={(e) => setPhone(e.target.value)}
                          onBlur={() => setTouched((t) => ({ ...t, phone: true }))}
                          placeholder="+1 415 555 0142"
                          className={inputClass(!!showError("phone"))}
                        />
                      </Field>
                    </div>
                  </div>

                  {/* Section 2 — Services */}
                  <div>
                    <SectionLabel
                      index="02"
                      title="What do you need?"
                      hint="Select one or more"
                    />
                    {showError("services") && (
                      <p className="mt-2 text-xs font-medium text-destructive">
                        {errors.services}
                      </p>
                    )}
                    <div className="mt-6 space-y-6">
                      {SERVICE_GROUPS.map((group) => (
                        <div key={group.category}>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                            {group.category}
                          </p>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => {
                              const active = services.includes(item);
                              return (
                                <button
                                  type="button"
                                  key={item}
                                  onClick={() => {
                                    toggleService(item);
                                    setTouched((t) => ({ ...t, services: true }));
                                  }}
                                  className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                                    active
                                      ? "border-foreground bg-foreground text-background shadow-md"
                                      : "border-border bg-background/70 text-foreground hover:-translate-y-0.5 hover:border-foreground/50 hover:shadow-sm"
                                  }`}
                                >
                                  <span
                                    className={`flex size-4 items-center justify-center rounded-full border text-[10px] transition ${
                                      active
                                        ? "border-[var(--lime)] bg-[var(--lime)] text-foreground"
                                        : "border-border text-transparent"
                                    }`}
                                    aria-hidden
                                  >
                                    ✓
                                  </span>
                                  {item}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Section 3 — Context */}
                  <div>
                    <SectionLabel index="03" title="Tell us about your business needs" hint="Optional" />
                    <textarea
                      value={context}
                      onChange={(e) => setContext(e.target.value.slice(0, MAX.context))}
                      rows={4}
                      maxLength={MAX.context}
                      placeholder="Briefly describe your goals, challenges, or what you want to achieve…"
                      className="mt-6 w-full resize-none rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:border-foreground focus:outline-none focus:ring-4 focus:ring-foreground/10"
                    />
                    <div className="mt-1.5 flex justify-end text-[11px] text-muted-foreground">
                      {context.length} / {MAX.context}
                    </div>
                  </div>

                  {/* Section 4 — Preferred contact */}
                  <div>
                    <SectionLabel
                      index="04"
                      title="Preferred contact method"
                      hint="Optional"
                    />
                    <div className="mt-6 flex flex-wrap gap-2">
                      {CONTACT_METHODS.map((method) => {
                        const active = contactMethod === method;
                        return (
                          <button
                            type="button"
                            key={method}
                            onClick={() =>
                              setContactMethod((prev) => (prev === method ? "" : method))
                            }
                            className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                              active
                                ? "border-foreground bg-foreground text-background"
                                : "border-border bg-background/70 hover:border-foreground/50"
                            }`}
                          >
                            {method}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="flex flex-col items-stretch gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-xs text-muted-foreground">
                      We&apos;ll respond within 24 hours. No spam, ever.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-foreground px-8 py-4 text-base font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--orange)] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
                    >
                      {submitting ? (
                        <>
                          <span className="size-4 animate-spin rounded-full border-2 border-background/40 border-t-background" />
                          Sending request…
                        </>
                      ) : (
                        <>
                          Start Your Growth Journey
                          <span className="transition-transform duration-300 group-hover:translate-x-1">
                            ↗
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                  {submitError && (
                    <p className="text-center text-sm font-medium text-destructive">
                      {submitError}
                    </p>
                  )}
                </form>
              ) : (
                <SuccessState onReset={resetForm} />
              )}
            </div>
          </div>

          {/* SECONDARY — Quick contact */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">
              <div className="rounded-3xl border border-border bg-foreground p-6 text-background md:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background/60">
                  Need to talk now?
                </p>
                <h3 className="text-display mt-3 text-3xl md:text-4xl">
                  Skip the form.
                  <br />
                  <span className="italic font-medium text-[var(--lime)]">Reach us directly.</span>
                </h3>

                <div className="mt-6 space-y-2">
                  <QuickAction
                    href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`}
                    label="WhatsApp"
                    sub="Fastest reply"
                    icon="whatsapp"
                  />
                  <QuickAction
                    href={`tel:${WHATSAPP_NUMBER}`}
                    label="Call now"
                    sub={PHONE_DISPLAY}
                    icon="call"
                  />
                  <QuickAction
                    href={`mailto:${EMAIL}`}
                    label="Email"
                    sub={EMAIL}
                    icon="mail"
                  />
                </div>

                <div className="mt-8 border-t border-background/15 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background/60">
                    Follow
                  </p>
                  <div className="mt-3 flex gap-2">
                    <SocialPill href="https://instagram.com" label="Instagram" />
                    <SocialPill href="https://linkedin.com" label="LinkedIn" />
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card/70 p-6 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--lime)] opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-[var(--lime)]" />
                  </span>
                  <p className="text-sm font-medium">Currently accepting Q2 projects</p>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Avg. response time under 4 hours during business days.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function inputClass(invalid: boolean) {
  return `w-full rounded-2xl border bg-background/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition focus:outline-none focus:ring-4 ${
    invalid
      ? "border-destructive focus:border-destructive focus:ring-destructive/15"
      : "border-border focus:border-foreground focus:ring-foreground/10"
  }`;
}

function SectionLabel({
  index,
  title,
  hint,
}: {
  index: string;
  title: string;
  hint?: string;
}) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="text-display text-2xl text-[var(--orange)]">{index}</span>
      <div className="flex flex-1 items-baseline justify-between gap-3 border-b border-border pb-2">
        <h3 className="text-display text-xl md:text-2xl">{title}</h3>
        {hint && (
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  hint,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-xs font-medium text-foreground">
          {label}
          {required && <span className="ml-1 text-[var(--orange)]">*</span>}
        </span>
        {hint && !error && (
          <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
            {hint}
          </span>
        )}
      </div>
      {children}
      {error && <p className="mt-1.5 text-xs font-medium text-destructive">{error}</p>}
    </label>
  );
}

function QuickAction({
  href,
  label,
  sub,
  icon,
}: {
  href: string;
  label: string;
  sub: string;
  icon: "whatsapp" | "call" | "mail";
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-2xl border border-background/15 bg-background/[0.04] p-4 transition hover:border-[var(--orange)]/50 hover:bg-background/[0.08]"
    >
      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-background/10 text-[var(--lime)] transition group-hover:bg-[var(--orange)] group-hover:text-foreground">
        <Icon name={icon} />
      </span>
      <span className="flex-1">
        <span className="block text-sm font-medium text-background">{label}</span>
        <span className="block text-xs text-background/60">{sub}</span>
      </span>
      <span className="text-background/40 transition group-hover:translate-x-1 group-hover:text-background">
        ↗
      </span>
    </a>
  );
}

function SocialPill({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-full border border-background/20 px-4 py-2 text-xs font-medium text-background/80 transition hover:border-[var(--lime)] hover:text-[var(--lime)]"
    >
      {label}
    </a>
  );
}

function Icon({ name }: { name: "whatsapp" | "call" | "mail" }) {
  const stroke = "currentColor";
  if (name === "whatsapp")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    );
  if (name === "call")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center py-8 text-center md:py-12">
      <div className="relative">
        <div className="absolute inset-0 animate-ping rounded-full bg-[var(--lime)]/40" />
        <div className="relative flex size-20 items-center justify-center rounded-full bg-[var(--lime)] text-foreground">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>
      <h3 className="text-display mt-8 text-4xl md:text-5xl">
        We&apos;ve received
        <br />
        <span className="italic font-medium text-[var(--orange)]">your request.</span>
      </h3>
      <p className="mt-4 max-w-md text-base text-muted-foreground">
        Our team will respond within 24 hours with a tailored plan and the next steps.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition hover:-translate-y-0.5 hover:bg-[var(--orange)]"
        >
          Continue on WhatsApp
          <span className="transition group-hover:translate-x-1">↗</span>
        </a>
        
      </div>
    </div>
  );
}