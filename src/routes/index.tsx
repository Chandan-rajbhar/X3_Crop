import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GiPlantSeed, GiFarmer, GiGreenhouse, GiWaterDrop } from "react-icons/gi";
import { FaArrowRight, FaLeaf } from "react-icons/fa";
import heroField from "@/assets/hero-field.jpg";
import cornImg from "@/assets/crops-corn.jpg";
import harvestImg from "@/assets/harvest.jpg";
import aerialImg from "@/assets/aerial-fields.jpg";
import { FadeIn } from "@/components/Section";
import { ArrowUpRight } from "lucide-react";

import hero_img from "../../public/images/HomePage _img/hero_img_1.png";
import worker_img from "../../public/images/HomePage _img/Worker_img.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "X3 Crop — Cultivating Tomorrow's Harvest" },
      {
        name: "description",
        content: "Sustainable, high-yield crop solutions for modern farms worldwide.",
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    icon: GiPlantSeed,
    title: "Premium Seeds",
    desc: "Carefully selected, lab-tested seeds engineered for resilience and yield.",
  },
  {
    icon: GiWaterDrop,
    title: "Smart Irrigation",
    desc: "Precision water systems that conserve resources while boosting growth.",
  },
  {
    icon: GiGreenhouse,
    title: "Greenhouse Tech",
    desc: "Climate-controlled environments for year-round, consistent harvests.",
  },
  {
    icon: GiFarmer,
    title: "Expert Agronomy",
    desc: "Decades of field expertise guiding every crop, every season.",
  },
];

const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "500K", label: "Acres Cultivated" },
  { value: "98%", label: "Yield Quality" },
  { value: "40+", label: "Crop Varieties" },
];

function Home() {
  return (
    <>
      <section className="relative bg-[#f5f5f5] min-h-[92vh] flex items-center overflow-hidden pt-8 pb-14 lg:pt-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          {/* Right Image Section - Mobile First */}
          <div className="relative flex justify-center lg:justify-end w-full order-1 lg:order-2">
            {/* Main Parent Frame Wrapper */}
            <div className="relative w-full max-w-130 p-2 sm:p-4">
              {/* Main Image */}
              <div className="relative w-full rounded-[35px] sm:rounded-[45px] rounded-tl-[90px] sm:rounded-tl-[120px] rounded-br-[90px] sm:rounded-br-[110px] overflow-hidden">
                <img
                  src={worker_img}
                  alt="Construction Team Working"
                  className="w-full h-87.5 sm:h-125 md:h-120 object-cover"
                />
              </div>

              {/* Top Left Logo Card */}
              <div className="absolute top-0 left-0 w-24 h-24 sm:w-35 sm:h-35 bg-[#f5f5f5] rounded-br-[35px] sm:rounded-br-[45px] flex items-start justify-start p-2 sm:p-3">
                <div className="w-full h-full bg-[#ff4b3e] rounded-4xl sm:rounded-[28px] flex items-center justify-center p-3 sm:p-4 shadow-md">
                  <img
                    src={hero_img}
                    alt="X3 Logo"
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
              </div>

              {/* Bottom Right Button */}
              <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-27.5 sm:h-27.5 bg-[#f5f5f5]  sm:rounded-tl-[40px] flex items-end justify-end p-2 sm:p-3">
                <button className="bg-black hover:bg-[#ff4b3e] text-white w-full h-full rounded-3xl sm:rounded-4xl flex items-center justify-center transition-all duration-300 shadow-md group">
                  <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Left Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold leading-tight text-black">
              Building Excellence
              <br />
              <span className="text-[#ff4b3e]">In Every Construction</span>
            </h1>

            <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
              A self-sustaining, valuable telecommunications contractor which positively impacts the
              lives of others today and in the future.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-5 mt-8">
              <button className="bg-[#ff4b3e] cursor-pointer hover:bg-[#e64034] transition-all duration-300 text-white px-7 py-4 rounded-full font-medium flex items-center gap-2 shadow-lg">
                Start project
                <ArrowUpRight size={18} />
              </button>

              <a href="/" className="text-[#ff4b3e] underline font-medium">
                Get a free consultation
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 text-center lg:text-left">
              <div className="p-5 border border-gray-200 rounded-2xl bg-white">
                <h2 className="text-4xl md:text-5xl font-bold text-[#ff4b3e]">500+</h2>
                <p className="text-gray-700 mt-2 text-sm">Project completed</p>
              </div>

              <div className="p-5 border border-gray-200 rounded-2xl bg-white">
                <h2 className="text-4xl md:text-5xl font-bold text-[#ff4b3e]">100+</h2>
                <p className="text-gray-700 mt-2 text-sm">Professionals</p>
              </div>

              <div className="p-5 border border-gray-200 rounded-2xl bg-white">
                <h2 className="text-4xl md:text-5xl font-bold text-[#ff4b3e]">2M+</h2>
                <p className="text-gray-700 mt-2 text-sm">Sq Ft built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70 uppercase tracking-wider">
                {s.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn className="text-center max-w-2xl mx-auto">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            What we do
          </span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
            Everything your fields need
          </h2>
          <p className="mt-4 text-muted-foreground">
            From seed to harvest, we provide end-to-end agricultural solutions tailored for the land
            you work.
          </p>
        </FadeIn>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-(--shadow-soft) transition-all hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-3xl text-primary">
                  <f.icon />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <img
              src={aerialImg}
              alt="Aerial view of farm fields"
              className="rounded-3xl shadow-(--shadow-lift)"
              loading="lazy"
              width={1920}
              height={1080}
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Precision farming
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">
              Data-driven fields, hand-crafted care
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Our agronomists combine satellite imagery, soil sensors, and decades of field
              experience to make every acre more productive — while protecting the soil for
              generations to come.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Real-time soil & weather analytics",
                "Customized nutrient programs",
                "Sustainable pest management",
                "Yield forecasting & planning",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground">
                  <FaLeaf className="text-primary mt-1 shrink-0" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-primary hover:gap-3 transition-all"
            >
              Learn more <FaArrowRight />
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <FadeIn className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              From the field
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-bold text-foreground">Where we grow</h2>
          </div>
          <Link
            to="/products"
            className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all"
          >
            View our crops <FaArrowRight />
          </Link>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { img: cornImg, title: "Healthy Crops", tag: "Vitality" },
            { img: harvestImg, title: "Honest Harvests", tag: "Quality" },
          ].map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl aspect-4/3">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                    {c.tag}
                  </span>
                  <h3 className="text-2xl font-bold">{c.title}</h3>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <FadeIn>
          <div
            className="relative overflow-hidden rounded-3xl p-12 md:p-16 text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to grow with us?</h2>
              <p className="mt-4 text-primary-foreground/85 text-lg">
                Tell us about your land and goals. Our agronomy team will craft a tailored plan for
                your next season.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-4 font-semibold hover:opacity-90 transition"
              >
                Start a conversation <FaArrowRight />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
