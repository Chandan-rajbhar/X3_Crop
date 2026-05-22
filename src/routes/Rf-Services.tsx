import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import RF_Services from "../../public/images/Services_img/RF_Services.jpg";

export const Route = createFileRoute("/Rf-Services")({
  head: () => ({
    meta: [
      { title: "RF Services — X3 Crop" },
      {
        name: "description",
        content: "Learn more about our RF services and how we can help bring your ideas to life.",
      },
    ],
  }),
  component: RouteComponent,
});

const features = [
  "CRAN & Small Cells",
  "AWS, LTE, 4G, FNET, 5G",
  "Structural upgrades and Retrofits",
  "Fiber Placement, scoping and testing",
  "PIM, CPRI, RSSI and Sweeps",
  "RF trouble shooting and optimization",
  "Power Outage repair and diagnosis",
  "RET install, troubleshooting and tuning",
  "Carrier adds",
  "Integration Support",
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
            <img src={RF_Services} alt="RF Services" className="h-full w-full object-cover" />
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
                RF Services
              </h2>

              {/* Paragraph - Reduced top margin */}
              <p className="mt-3  text-gray-600 text-sm sm:text-base leading-6">
                With over 20 RF crews, X3 has the expert field knowledge and technical skills to
                construct new installations, perform upgrades, modifications and trouble-shooting of
                all RF infrastructure.
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
