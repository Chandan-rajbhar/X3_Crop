import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/Section";
import josue_isai_ramos from "../../public/images/abouts_img/josue-isai-ramos.jpg";
import zoe_richardson from "../../public/images/abouts_img/zoe-richardson.jpg";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About X3 Crop — Our Story & Mission" },
      {
        name: "description",
        content:
          "Learn how X3 Crop is reshaping agriculture through sustainable practices, innovation, and craftsmanship.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-black text-white w-full px-0 py-0 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        {/* Left Image Wrapper */}
        <FadeIn className="w-full">
          <div className="relative h-45 sm:h-60 lg:h-75 w-full overflow-hidden">
            <img
              src={josue_isai_ramos}
              alt="Farmer holding harvest"
              className="absolute inset-0 w-full h-full object-cover shadow-(--shadow-lift)"
              loading="lazy"
            />
          </div>
        </FadeIn>

        {/* Right Content Wrapper */}
        <FadeIn delay={0.1} className="w-full px-6 py-6">
          <div className="space-y-3">
            <div>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                Veteran-Owned Small Business.
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-gray-300">
                X3 is a veteran-owned construction and engineering firm in the wireless
                telecommunications industry since 2005. Headquartered in San Diego, California we
                service much of the Southwest.
              </p>
            </div>

            <div className="pt-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">
                Mission and Purpose
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-gray-300">
                A self-sustaining, valuable telecommunications contractor which positively impacts
                the lives of others today and in the future.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Values Section */}
      <section className="bg-[#f8f8f8] max-auto py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <FadeIn className="text-center max-w-3xl mx-auto">
            <div className="mb-16">
              <span className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm font-medium">
                Our Foundation
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
                Our Values & Vision
              </h2>

              <p className="mt-5 text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                Building trust through leadership, integrity, transparency, and sustainable growth.
              </p>
            </div>
          </FadeIn>
          {/* Cards */}
          <FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
              {/* Core Values */}
              <div className="group h-full bg-white rounded-2xl border border-gray-200 p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mb-5">
                  ⭐
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Core Values</h3>

                <ul className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <li>• Our Employees come first</li>
                  <li>• Selflessly helping others</li>
                  <li>• Never compromising ethics for pride</li>
                  <li>• Empowering leaders to operate as owners</li>
                  <li>• Commitment to working safely and building quality projects</li>
                </ul>
              </div>

              {/* Operating Principles */}
              <div className="group h-full bg-white rounded-2xl border border-gray-200 p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mb-5">
                  ⚙️
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  Operating Principles
                </h3>

                <ul className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                  <li>• Transparency with complete visibility into business growth</li>
                  <li>• Always do the right thing, even when no one is watching</li>
                  <li>• Build leaders through service, trust, and accountability</li>
                  <li>• Deliver exceptional execution and outstanding outcomes</li>
                </ul>
              </div>

              {/* Green Commitment */}
              <div className="group h-full bg-white rounded-2xl border border-gray-200 p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center text-2xl mb-5">
                  🌱
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                  Green Commitment
                </h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  X3 Management Services, Inc. aims to halve absolute emissions by 2030 and achieve
                  Net Zero emissions by 2050 in alignment with the 1.5°C Climate Ambition.
                </p>
              </div>

              {/* Vision */}
              <div className="group h-full bg-white rounded-2xl border border-gray-200 p-6 lg:p-7 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl mb-5">
                  🚀
                </div>

                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4">Vision</h3>

                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  To build a long-standing reputation based on professionalism, trust, and integrity
                  while creating a best-in-class workplace where culture, morale, transparency, and
                  employee retention lead the way.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-45 lg:min-h-85">
          {/* Left Image */}
          <FadeIn delay={0.1}>
            <div className="relative h-50 sm:h-75 lg:h-full w-full overflow-hidden">
              <img
                src={zoe_richardson}
                alt="Culture"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Right Content */}
          <FadeIn delay={0.2}>
            <div className="bg-black text-white flex items-center justify-center px-4 sm:px-6 lg:px-10 py-8 lg:py-12 h-full w-full">
              <div className="max-w-md text-center">
                <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide">
                  Culture
                </h2>

                <div className="w-14 h-0.5 bg-white mx-auto mt-3 mb-4 rounded-full" />

                <p className="text-xs sm:text-sm leading-6 text-gray-300">
                  As our name implies, we are a management company first. Having served carrier,
                  Turf, and Tower companies for over 15 years, we not only know schedule, cost,
                  quality, and safety stand to be key components to any successful build plan.
                </p>

                <p className="mt-3 text-xs sm:text-sm leading-6 text-gray-300">
                  By investing in our employees, X3 maintains a very high retention rate and
                  employee satisfaction.
                </p>

                <p className="mt-3 text-xs sm:text-sm leading-6 text-gray-300">
                  X3 employees are provided a work-life balance comparable to any construction
                  company.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="w-full bg-[#f3f3f3] py-16 lg:py-24 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-sm uppercase tracking-[4px] text-gray-500 font-semibold">
              Company Legacy
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold text-black mt-3">HISTORY</h2>

            <div className="w-24 h-1 bg-black mt-5 rounded-full"></div>
          </motion.div>

          {/* Content Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-200"
          >
            <div className="space-y-8 text-gray-700 leading-loose text-[15px] md:text-[17px]">
              <p>
                Following four years of service where David served two tours of duty oversees
                onboard the USS Okinawa and USS Reid as a Radioman performing teletype repair, he
                opted out of the service to pursue his education and a career in wireless
                telecommunications in the private sector. During six years of employment beginning
                with Pacific Bell Mobile Services until the merger with AT&T Wireless, David managed
                over a hundred cell sites throughout northern California before transitioning into
                switches where he contributed to the buildouts of dozens of MSC/BSC/HLR platforms
                prior to focusing solely on E911 which at the time was the first federal mandate
                enforced onto the wireless sector. His time here as a regional SME working to ensure
                the markets remained E911 compliant developed the backbone to what would soon be
                discovered – the inception of X3.
              </p>
              <p>
                From the beginning of our company through strategy realignment by way of the great
                recession and carrier mergers, we are prepared for the emergence of 5G and the
                continued advancements of Internet of Things (IoT), augmented reality (AR),
                artificial intelligence (AI) and FirstNet and the construction these technologies
                demand on the wireless sector.
              </p>

              <p>
                X3 can deliver our clients’ Right-of-Way (RoW) Small Cell Deployments, oDAS/iDAS
                solutions for privatized networks as well as continue to build New Cell Deployment’s
                (NCD) / New Site Build’s (NSB) for existing coverage and capacity constraints. So,
                if your business desires change or your resources have become a challenge, I invite
                you to see what we can do for you. Please contact our office and introduce yourself.
                We would like to hear from you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
