import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowUp, FaLeaf } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import hero_img from "../../public/images/HomePage _img/hero_img_1.png";
import worker_img from "../../public/images/HomePage _img/Worker_img.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import blueprint_ruler_img from "../../public/images/HomePage _img/blueprint-ruler.png";
import building_model_img from "../../public/images/HomePage _img/3d-building-model.png";
import RF_Services_Img from "../../public/images/HomePage _img/RF_Services.png";
import { useState, type ChangeEvent, type FormEvent } from "react";

import ApexTower from "../../public/images/CommercialConst_img/ApexTower.jpg";
import HarborPoint from "../../public/images/CommercialConst_img/HarborPoint.jpg";
import Oceanview_Plaza from "../../public/images/CommercialConst_img/Oceanview_Plaza.jpg";
import SkylineTower from "../../public/images/CommercialConst_img/SkylineTower.png";
import SummitPlaza from "../../public/images/CommercialConst_img/SummitPlaza.jpg";
import VertexCenter from "../../public/images/CommercialConst_img/VertexCenter.jpg";

import american_tower from "../../public/images/logos_img/american-tower.png";
import att from "../../public/images/logos_img/att.png";
import bremco from "../../public/images/logos_img/bremco.png";
import nv_energy from "../../public/images/logos_img/nv_energy.png";
import ParallelInfrastructur from "../../public/images/logos_img/Parallel-Infrastructur.png";

import HospitalityGaming_img from "../../public/images/HospitalityGaming_img/Hospitality.png";
import EmilyFoster from "../../public/images/HospitalityGaming_img/EmilyFoster.jpg";

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

// Mock data based on the provided image
const constructionFeatures = [
  {
    title: "Project Management",
    desc: "Our team streamline methods, and provide transparent reporting, that not only builds confidence in our clients, but allows for more efficient project delivery solutions.",
    logo: blueprint_ruler_img,
    isHighlighted: true,
  },
  {
    title: "Construction Services",
    desc: "With over 150 years combined experience of construction, equipment installation, modifications, upgrades and additions, and decommissioning of telecommunications facilities.",
    logo: building_model_img,
    isHighlighted: false,
  },
  {
    title: "RF Services",
    desc: "With over 20 RF crews, X3 has the expert field knowledge and technical skills to construct new installations, perform upgrades, modifications and troubleshooting of all RF infrastructure.",
    logo: RF_Services_Img,
    isHighlighted: false,
  },
];

const projects = [
  {
    title: "Oceanview Plaza",
    desc: "A coastal office complex space with glass exteriors and ocean views.",
    image: Oceanview_Plaza,
  },
  {
    title: "Skyline Tower",
    desc: "A 35-story business hub with modern workspaces and a rooftop garden.",
    image: SkylineTower,
  },
  {
    title: "Vertex Center",
    desc: "A 24-story smart office tower with panoramic city views for high-end enterprises.",
    image: VertexCenter,
  },
  {
    title: "Summit Plaza",
    desc: "A modern business hub with sleek architecture and open spaces.",
    image: SummitPlaza,
  },
  {
    title: "Harbor Point",
    desc: "A waterfront office complex with luxury interiors and smart systems.",
    image: HarborPoint,
  },
  {
    title: "Apex Tower",
    desc: "A high-rise office space with cutting-edge design and smart tech.",
    image: ApexTower,
  },
];

const logos = [
  {
    name: "American Tower",
    image: american_tower,
  },
  {
    name: "AT&T",
    image: att,
  },
  {
    name: "Parallel",
    image: ParallelInfrastructur,
  },
  {
    name: "Bremco Construction",
    image: bremco,
  },
  {
    name: "NV Energy",
    image: nv_energy,
  },
];

const features_data = [
  {
    title: "20+ Years of construction experience",
    content:
      "We bring over two decades of verified field experience to ensure your structural foundations are built to last.",
  },
  {
    title: "On-time & budget-friendly execution",
    content:
      "We prioritize efficient planning and cost-effective solutions to meet deadlines without exceeding budgets.",
  },
  {
    title: "Licensed, insured, and industry-certified",
    content:
      "Our team operates under strict compliance guidelines, full liability coverage, and top-tier safety certifications.",
  },
  {
    title: "Sustainable & modern building practices",
    content:
      "We utilize eco-friendly materials and cutting-edge engineering techniques to minimize environmental footprint.",
  },
];

function Home() {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      <section className="relative bg-[#FFFFFF] min-h-[75vh] flex items-center overflow-hidden pt-8 pb-5 lg:pt-0">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-5 grid lg:grid-cols-2 gap-14 items-center">
          {/* Right Image Section */}
          <div className="relative flex justify-center lg:justify-end w-full order-1 lg:order-2">
            {/* Main Wrapper */}
            <div className="relative w-full max-w-[520px] p-2">
              {/* Main Image */}
              <div className="relative w-full rounded-[35px] sm:rounded-[45px] rounded-tl-[90px] sm:rounded-tl-[120px] rounded-br-[45px] sm:rounded-br-[60px] overflow-hidden">
                <img
                  src={worker_img}
                  alt="Construction Team Working"
                  className="w-full h-[350px] sm:h-[500px] md:h-[480px] object-cover"
                />
              </div>

              {/* Top Left Logo Card */}
              <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-br-[40px] sm:rounded-br-[35px] flex items-start justify-start p-2">
                <div className="w-full h-full bg-[#ff4b3e] rounded-[24px] flex items-center justify-center p-3 shadow-md">
                  <img
                    src={hero_img}
                    alt="X3 Logo"
                    className="w-full h-full object-contain brightness-0 invert"
                  />
                </div>
              </div>

              {/* Bottom Right Arrow Button */}
              <div className="absolute bottom-0 right-0 w-14 h-14 sm:w-18 sm:h-18 bg-white rounded-tl-[27px] flex items-end justify-end p-0.5">
                <button className="bg-black text-white p-2.5 rounded-xl hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105 shadow-md group flex items-center justify-center">
                  <FaArrowUp className="w-7 h-7 rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

      <section className="mx-auto max-w-7xl px-6 pb-24 font-sans mt-6  ">
        <div className="relative">
          {/* Main Content Card Container */}
          <div className="relative bg-[#F5F5F5] rounded-[20px] sm:rounded-[5px] rounded-tl-[10px] sm:rounded-tl-[10px] rounded-br-[10px] sm:rounded-br-[20px] p-1 md:p-20 text-slate-900 min-h-70 flex items-center justify-center">
            {/* Top Left Logo Card */}
            <div className="absolute top-0 left-0 bg-white rounded-br-[120px] sm:rounded-br-[20px] p-1">
              <div className="rounded-full px-3 py-1 shadow-md flex items-center justify-center">
                <span className="text-red-500 font-semibold text-xs sm:text-sm whitespace-nowrap">
                  About us
                </span>
              </div>
            </div>

            {/* Main Typography content */}
            <div className="max-w-3xl text-center">
              <p className="text-base md:text-xl font-medium leading-relaxed tracking-wide text-neutral-800">
                X3 is a veteran-owned construction and engineering firm in the telecommunications
                industry since 2005. Headquartered in Escondido California, servicing much of the
                Southwest.
              </p>
            </div>

            {/* Bottom Right Round Action Button */}
            <div className="absolute bottom-0 right-0 w-14 h-14 sm:w-18 sm:h-18 bg-white rounded-tl-[35px] flex items-end justify-end p-0.5">
              <button className="bg-black text-white p-2.5 rounded-xl hover:bg-neutral-800 transition-all duration-300 transform hover:scale-105 shadow-md group flex items-center justify-center">
                <FaArrowUp className="w-7 h-7 rotate-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 bg-white select-none">
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Our Expertise in{" "}
            <span className="text-[#FF4E3A] block sm:inline">Commercial Construction</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {constructionFeatures.map((f) => (
            <div
              key={f.title}
              className={`relative flex flex-col justify-between p-8 pt-12 pb-6 rounded-[2rem] transition-all duration-300 ${
                f.isHighlighted ? "bg-[#FF4E3A] text-white" : "bg-[#F5F5F5] text-neutral-900"
              }`}
            >
              <div>
                {/* FIXED IMAGE */}
                <div className="mb-10">
                  <img src={f.logo} alt={f.title} className="w-14 h-14 object-contain" />
                </div>

                <h3 className="text-2xl font-bold tracking-tight mb-4">{f.title}</h3>

                <p
                  className={`text-base font-normal leading-relaxed mb-16 ${
                    f.isHighlighted ? "text-white/90" : "text-neutral-500"
                  }`}
                >
                  {f.desc}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                <a
                  href="#"
                  className={`text-sm font-semibold underline underline-offset-4 decoration-1 hover:opacity-80 transition-opacity ${
                    f.isHighlighted ? "text-white" : "text-neutral-900"
                  }`}
                >
                  Learn more
                </a>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-black text-white transition-transform hover:scale-105">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-15 bg-white select-none">
        <div className="max-w-7xl mx-auto bg-black rounded-[28px] p-6 md:p-8">
          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              <span className="text-[#FF4E3A]">Proven</span> Results in
              <br />
              Commercial <span className="text-[#FF4E3A]">Construction</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-2xl overflow-hidden border border-white/5 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image */}
                <div className="p-3 pb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[230px] object-cover rounded-xl"
                  />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col justify-between min-h-[180px]">
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-3">{project.title}</h3>

                    <p className="text-neutral-400 text-sm leading-relaxed">{project.desc}</p>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-6">
                    <a
                      href="#"
                      className="text-white text-sm underline underline-offset-4 hover:opacity-80"
                    >
                      Learn more
                    </a>

                    <button className="w-10 h-10 rounded-md bg-[#FF4E3A] text-white flex items-center justify-center hover:scale-105 transition-transform">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 bg-white">
        <div className="rounded-[22px] sm:rounded-[28px] bg-[#efefef] px-4 sm:px-6 md:px-8 py-5 sm:py-6">
          <div className="flex flex-wrap items-center justify-center lg:justify-between gap-y-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 w-1/2 sm:w-1/3 lg:w-auto"
              >
                {/* Divider */}
                {index !== 0 && (
                  <div className="hidden lg:block absolute left-0 top-1/2 h-12 w-px -translate-y-1/2 bg-[#d4d4d4]" />
                )}

                {/* Logo */}
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-12 sm:h-16 md:h-20 w-full object-contain transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 bg-white select-none">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Heading & CTA */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
              Why <span className="text-[#FF3B30]">Businesses</span> trust X3?
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-md text-sm md:text-base">
              With 20+ years of industry experience, we deliver high-quality, on-time, and
              cost-effective construction solutions. Our team is licensed, insured, and committed to
              excellence, ensuring every project meets the highest standards of safety and
              craftsmanship.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#FF3B30] text-white font-medium px-6 py-3 rounded-full hover:bg-red-600 transition-colors text-sm">
              Start project
              <span className="text-xs">
                <IoIosArrowRoundForward
                  size={20}
                  className="text-white flex items-center rotate-320"
                />
              </span>
            </button>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="space-y-4">
            {features_data.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-3xl overflow-hidden ${
                    isOpen
                      ? "bg-[#FF3B30] text-white p-6"
                      : "bg-[#F2F2F7] text-gray-900 p-5 hover:bg-gray-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between text-left font-semibold text-sm md:text-base transition-colors"
                  >
                    <span>{item.title}</span>
                    <span
                      className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-transform ${
                        isOpen ? "bg-black text-white" : "bg-black text-white"
                      }`}
                    >
                      {isOpen ? "✕" : "＋"}
                    </span>
                  </button>

                  {/* Expandable content area */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden text-xs md:text-sm leading-relaxed opacity-90">
                      {item.content}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 bg-white select-none">
        {/* Section Heading */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
            Real Results <br />
            <span className="text-[#FF3B30]">From Real People</span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="bg-[#FFF2F2] rounded-[32px] p-6 md:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden">
          {/* Left: Project Image */}
          <div className="lg:col-span-6 w-full h-full min-h-[240px] md:min-h-[320px] rounded-2xl overflow-hidden relative">
            <img
              src={HospitalityGaming_img}
              alt="Modern office building architectural project"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right: Testimonial Content */}
          <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-8 lg:pl-4 relative">
            {/* Top Row: Stars and Index Number */}
            <div className="flex justify-between items-center w-full">
              {/* 5-Star Rating */}
              <div className="flex gap-1 text-[#FF3B30] text-xl">★★★★★</div>
              {/* Slide Number */}
              <div className="text-[#FF3B30] font-bold text-2xl tracking-wider select-none">01</div>
            </div>

            {/* Middle: Review Text */}
            <div className="space-y-3 max-w-xl">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">
                Reliable, Efficient, and On-Time!
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                X3 exceeded our expectations! Their attention to detail and efficiency made our new
                headquarters a reality on time and within budget.
              </p>
            </div>

            {/* Bottom: Author Info */}
            <div className="flex items-center gap-3 pt-4">
              <img
                src={EmilyFoster}
                alt="Emily Foster profile portrait"
                className="w-12 h-12 rounded-full object-cover border border-gray-200"
              />
              <div>
                <h4 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                  Emily Foster
                </h4>
                <p className="text-gray-500 text-xs md:text-sm">Director, Bennett Retail Group</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white select-none py-10 sm:py-14 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-5 sm:space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight">
              Let’s build <span className="text-[#FF3B30]">something</span> <br />
              great <span className="text-[#FF3B30]">together!</span>
            </h2>

            <p className="text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
              Get in touch with us for a consultation or quote on your next commercial project.
            </p>

            {/* Map */}
            <div className="border-[3px] border-[#FF3B30] rounded-[24px] sm:rounded-[32px] overflow-hidden p-1.5 h-[240px] sm:h-[300px] md:h-[320px] w-full max-w-full lg:max-w-lg shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d14008.183520497134!2d77.37223800000001!3d28.628387!3m2!1i1024!2i768!4f13.1!2m1!1snoida%20electronic%20city!5e0!3m2!1sen!2sin!4v1779356083535!5m2!1sen!2sin"
                className="w-full h-full rounded-[24px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Project Location Map"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="bg-[#FFF2F2] rounded-[24px] sm:rounded-[32px] p-5 sm:p-8 lg:p-8 w-full max-w-full lg:max-w-xl lg:ml-auto">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium text-xs sm:text-sm mb-1.5"
                >
                  Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-white text-gray-900 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FF3B30] border border-transparent shadow-sm"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium text-xs sm:text-sm mb-1.5"
                >
                  Email
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white text-gray-900 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FF3B30] border border-transparent shadow-sm"
                  placeholder="name@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-medium text-xs sm:text-sm mb-1.5"
                >
                  Phone number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white text-gray-900 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FF3B30] border border-transparent shadow-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium text-xs sm:text-sm mb-1.5"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-white text-gray-900 rounded-xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#FF3B30] border border-transparent shadow-sm resize-none"
                  placeholder="Tell us about your project needs..."
                  required
                />
              </div>

              {/* Button */}
              <div className="pt-1 sm:pt-2">
                <button
                  type="submit"
                  className="w-full bg-black text-white font-semibold py-3 sm:py-3.5 px-6 rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  Submit <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
