import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ProjectManagement from "../../public/images/Services_img/ProjectManagement.jpg";
export const Route = createFileRoute("/ProjectManagement")({
  head: () => ({
    meta: [
      { title: "Project Management — X3 Crop" },
      {
        name: "description",
        content:
          "Learn more about our project management services and how we can help bring your ideas to life.",
      },
    ],
  }),

  component: RouteComponent,
});

const features = [
  "Use of Project Management Lifecycle",
  "Develop project initiation & planning",
  "Prepare budget and cost analytics",
  "Complete bid process (RFP, RFQ)",
  "Safety management and control",
  "Risk Mitigation",
  "Contract administration",
  "Project flow and close-outs (COPs)",
  "Quality Control Assurance",
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
            className="relative h-62.5 sm:h-87.5 lg:h-137.5"
          >
            <img
              src={ProjectManagement}
              alt="Project Management"
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
            <div className="max-w-lg">
              {/* Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-wide text-black leading-tight">
                Project Management
              </h2>

              {/* Paragraph - Reduced top margin */}
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-6">
                Much of our management staff have worked in client and provider positions, and have
                intimate knowledge of client tools, procedures and expectations. This allows X3 to
                streamline methods, and provide transparent reporting, that not only builds
                confidence in our clients, but allows for more efficient project delivery solutions.
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
