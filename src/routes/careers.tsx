import { createFileRoute } from "@tanstack/react-router";
import { PageHero, FadeIn } from "@/components/Section";
import cornImg from "@/assets/crops-corn.jpg";
import harvestImg from "@/assets/harvest.jpg";
import aerialImg from "@/assets/aerial-fields.jpg";
import researchImg from "@/assets/research.jpg";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — X3 Crop" },
      { name: "description", content: "Join our team and help us grow the future of sustainable agriculture." },
    ],
  }),
  component: Careers,
});

const products = [
  { img: cornImg, name: "Heritage Corn", tag: "Grain", desc: "Drought-tolerant, non-GMO seed corn bred for richness and yield." },
  { img: harvestImg, name: "Organic Greens", tag: "Vegetable", desc: "A rotating selection of certified-organic leafy greens and herbs." },
  { img: aerialImg, name: "Premium Wheat", tag: "Grain", desc: "Hard red and soft white wheat varieties from our own fields." },
  { img: researchImg, name: "Seedling Trays", tag: "Starter", desc: "Lab-validated seedlings ready for transplant to your fields." },
];

function Careers() {
  return (
    <>
      <PageHero title="Careers" subtitle="Join our team and help us grow the future of sustainable agriculture." image={cornImg} />
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-(--shadow-lift) transition-all hover:-translate-y-1">
                <div className="aspect-square overflow-hidden">
                  <img src={p.img} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-accent uppercase tracking-widest">{p.tag}</span>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
