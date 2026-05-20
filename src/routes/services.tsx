import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FadeIn } from "@/components/Section";
import { GiPlantSeed, GiWaterDrop, GiGreenhouse, GiFarmer, GiChemicalDrop, GiBarn } from "react-icons/gi";
import tractorImg from "@/assets/tractor.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — X3 Crop" },
      { name: "description", content: "End-to-end agricultural services: seed selection, irrigation, agronomy, and harvest support." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: GiPlantSeed, title: "Seed Selection", desc: "Tailored seed varieties matched to your soil, climate, and goals." },
  { icon: GiWaterDrop, title: "Smart Irrigation", desc: "Precision drip and sprinkler systems with remote monitoring." },
  { icon: GiChemicalDrop, title: "Soil Health", desc: "Organic amendments and nutrient programs that build long-term fertility." },
  { icon: GiGreenhouse, title: "Greenhouse Builds", desc: "Custom climate-controlled greenhouses for year-round production." },
  { icon: GiFarmer, title: "Agronomy Consulting", desc: "One-on-one guidance from certified agronomists, season after season." },
  { icon: GiBarn, title: "Harvest Logistics", desc: "Modern equipment and crews to bring in your crop on schedule." },
];

function Services() {
  return (
    <>
      <PageHero title="Services" subtitle="Comprehensive solutions for every stage of the growing cycle." image={tractorImg} />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-accent/20 text-primary flex items-center justify-center text-3xl">
                  <s.icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
