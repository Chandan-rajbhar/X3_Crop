import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FadeIn } from "@/components/Section";
import { GiEarthAmerica, GiPlantRoots, GiHandTruck } from "react-icons/gi";
import aerialImg from "@/assets/aerial-fields.jpg";
import harvestImg from "@/assets/harvest.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About X3 Crop — Our Story & Mission" },
      { name: "description", content: "Learn how X3 Crop is reshaping agriculture through sustainable practices, innovation, and craftsmanship." },
    ],
  }),
  component: About,
});

const values = [
  { icon: GiEarthAmerica, title: "Sustainability First", desc: "Every decision is weighed against its impact on soil, water, and future seasons." },
  { icon: GiPlantRoots, title: "Rooted in Science", desc: "Our agronomy team blends research with the realities of working farms." },
  { icon: GiHandTruck, title: "Farm to Table", desc: "Transparent supply, ethical practices, and crops you can trust." },
];

function About() {
  return (
    <>
      <PageHero title="Rooted in the land" subtitle="A family-founded company growing better crops for a better tomorrow." image={aerialImg} />
      <section className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn>
          <img src={harvestImg} alt="Farmer holding harvest" className="rounded-3xl shadow-[var(--shadow-lift)]" loading="lazy" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Our story</span>
          <h2 className="mt-3 text-4xl font-bold text-foreground">Three generations. One mission.</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Founded in 1998, X3 Crop began as a single family farm with a stubborn belief: that great agriculture honors both yield and the earth that produces it. Today we partner with hundreds of growers across the country, sharing what we've learned and the seeds we've perfected.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            We're proud to be independent, farmer-owned, and obsessed with what comes out of the ground.
          </p>
        </FadeIn>
      </section>
      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <FadeIn className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Values</span>
            <h2 className="mt-3 text-4xl font-bold text-foreground">What guides our work</h2>
          </FadeIn>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.1}>
                <div className="h-full p-8 rounded-2xl bg-card border border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-3xl">
                    <v.icon />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
