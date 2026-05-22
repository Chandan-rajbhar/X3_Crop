import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ConstructionServices from "../../public/images/Services_img/ConstructionServices.jpg";

export const Route = createFileRoute("/ConstructionServices")({
  head: () => ({
    meta: [
      { title: "Construction Services — X3 Crop" },
      {
        name: "description",
        content:
          "Learn more about our construction services and how we can help bring your ideas to life.",
      },
    ],
  }),
  component: RouteComponent,
});

const features = [
  "Underground utility services",
  "Foundations – caissons, pad & pier, slabs on grade",
  "Fiber to the cell",
  "Equipment installation & testing",
  "Rooftops & Greenfield New Site Builds (NCD/NSB) and Collocation",
  "FRP installation",
  "Tower & steel erection and installation",
  "Compound construction modifications and additions",
  "Cabling and fiber installs",
  "Build-to-Suit",
  "Generator, battery & Fuel Cell Installation",
  "Demolition and decommissioning",
];

function RouteComponent() {
  return (
    <>
      <section className="w-full bg-[#f4f4f4] overflow-hidden">
        <div className="grid lg:grid-cols-2">
          {/* Left Image - Reduced heights */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative h-62.5 sm:h-87.5 lg:h-150"
          >
            <img
              src={ConstructionServices}
              alt="Construction Services"
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* Right Content - Reduced padding */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex items-center px-4 py-8 sm:px-8 lg:px-12 lg:py-12"
          >
            {/* Reduced max-width for tighter containment */}
            <div className="max-w-lg ml-8">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-black leading-tight">
                Construction Services
              </h2>

              {/* Paragraph - Reduced top margin */}
              <p className="mt-3  text-gray-600 text-sm sm:text-base leading-6">
                X3 Management Services staff has over 150 years combined experience of construction,
                equipment installation, modifications, upgrades and additions, and decommissioning
                of telecommunications facilities.
              </p>

              {/* Features List - Reduced top margin and item spacing */}
              <ul className="mt-4 space-y-1.5">
                {features.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-black shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
