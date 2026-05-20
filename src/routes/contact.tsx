import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FadeIn } from "@/components/Section";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import researchImg from "@/assets/research.jpg";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — X3 Crop" },
      { name: "description", content: "Get in touch with the X3 Crop team about services, partnerships, and orders." },
    ],
  }),
  component: Contact,
});

const info = [
  { icon: FaMapMarkerAlt, label: "Visit", value: "123 Farmland Road, Greenfield, CA 94203" },
  { icon: FaPhone, label: "Call", value: "+1 (555) 012-3456" },
  { icon: FaEnvelope, label: "Email", value: "hello@x3crop.com" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero title="Let's talk" subtitle="Questions, orders, partnerships — we'd love to hear from you." image={researchImg} />
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12">
        <FadeIn>
          <h2 className="text-3xl font-bold text-foreground">Reach out</h2>
          <p className="mt-3 text-muted-foreground">Our team typically responds within one business day.</p>
          <ul className="mt-10 space-y-6">
            {info.map((i) => (
              <li key={i.label} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary text-primary flex items-center justify-center text-lg flex-shrink-0">
                  <i.icon />
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary uppercase tracking-widest">{i.label}</div>
                  <div className="mt-1 text-foreground">{i.value}</div>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn delay={0.1}>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-sm font-medium text-foreground">Name</span>
                <input required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-foreground">Email</span>
                <input type="email" required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
              </label>
            </div>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Subject</span>
              <input className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-foreground">Message</span>
              <textarea rows={5} required className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-ring" />
            </label>
            <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3.5 font-semibold hover:bg-primary/90 transition shadow-[var(--shadow-soft)]">
              {sent ? "Thanks — we'll be in touch!" : "Send message"}
            </button>
          </form>
        </FadeIn>
      </section>
    </>
  );
}
