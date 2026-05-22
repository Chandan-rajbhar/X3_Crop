import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FadeIn } from "@/components/Section";
import { GiPlantSeed, GiWaterDrop, GiGreenhouse, GiFarmer, GiChemicalDrop, GiBarn } from "react-icons/gi";
import tractorImg from "@/assets/tractor.jpg";
import blueprintRulerImg from "../../public/images/HomePage _img/blueprint-ruler.png";
import buildingModelImg from "../../public/images/HomePage _img/3d-building-model.png";
import RF_Services_Img from "../../public/images/HomePage _img/RF_Services.png";

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

const featuredServices = [
  {
    id: "project-management",
    title: "Project Management",
    desc: "Transparent planning, permitting, and delivery for every agricultural project.",
    image: blueprintRulerImg,
  },
  {
    id: "construction-services",
    title: "Construction Services",
    desc: "Expert installation of irrigation, greenhouse, and farm infrastructure systems.",
    image: buildingModelImg,
  },
  {
    id: "rf-services",
    title: "RF Services",
    desc: "Reliable RF and monitoring solutions for smarter, connected growing operations.",
    image: RF_Services_Img,
  },
];

function Services() {
  return (
    <>
      <PageHero title="Services" subtitle="Comprehensive solutions for every stage of the growing cycle." image={tractorImg} />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredServices.map((item, i) => (
            <FadeIn key={item.id} delay={i * 0.08}>
              <article id={item.id} className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.08}>
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all hover:-translate-y-1">
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
