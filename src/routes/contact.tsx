import { createFileRoute } from "@tanstack/react-router";
import { FadeIn } from "@/components/Section";
import researchImg from "@/assets/research.jpg";
import { useState } from "react";
import { Briefcase, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — X3 Crop" },
      {
        name: "description",
        content: "Get in touch with the X3 Crop team about services, partnerships, and orders.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <section className="w-full bg-[#f5f5f5] overflow-hidden">
        {/* Layout ki overall height ko 85vh se kam karke 65vh kiya */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[65vh]">
          {/* Left Image - Responsive height ko adjust kiya */}
          <FadeIn delay={0.1}>
            <div className="relative h-50 sm:h-75 lg:h-[75vh]">
              <img
                src={researchImg}
                alt="Telecom Tower"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          {/* Right Content - Padding ko py-10/py-14 se kam karke py-6/py-8 kiya */}
          <FadeIn delay={0.1}>
            <div className="flex items-center justify-center bg-[#f8f8f8] px-4 sm:px-6 lg:px-10 py-6 lg:py-8 h-full">
              <div className="w-full max-w-120">
                {" "}
                {/* Width ko 560px se 480px kiya */}
                {/* Heading - Margin bottom kam kiya */}
                <h2 className="text-xl sm:text-2xl font-bold tracking-[0.18em] uppercase text-black mb-4">
                  Contact Us
                </h2>
                {/* Contact Info - Spacing ko space-y-5 se space-y-3 kiya */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2.5">
                    <Phone size={16} className="text-red-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="uppercase text-[10px] tracking-[0.18em] font-semibold text-black">
                        Call Us
                      </p>
                      <p className="text-xs text-gray-600">(702) 555-0123</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail size={16} className="text-red-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="uppercase text-[10px] tracking-[0.18em] font-semibold text-black">
                        Email Us
                      </p>
                      <p className="text-xs text-gray-600">info@example.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-red-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="uppercase text-[10px] tracking-[0.18em] font-semibold text-black">
                        Mailing Address
                      </p>
                      <p className="text-xs text-gray-600 leading-5">
                        157 W Mission Ave #250 <br />
                        Escondido, CA 92025
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Briefcase size={16} className="text-red-700 mt-0.5 shrink-0" />
                    <div>
                      <p className="uppercase text-[10px] tracking-[0.18em] font-semibold text-black">
                        Apply For Employment
                      </p>
                    </div>
                  </div>
                </div>
                {/* Text */}
                <p className="text-xs text-gray-500 mb-3">
                  Or fill out this form below and we’ll get back to you.
                </p>
                {/* Form - Inputs ki vertical padding py-2.5 se py-2 ki */}
                <form className="space-y-2.5">
                  {/* Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <input
                      type="text"
                      placeholder="* First Name"
                      className="w-full border border-gray-300 bg-transparent px-3 py-2 text-xs outline-none focus:border-black"
                    />

                    <input
                      type="text"
                      placeholder="* Last Name"
                      className="w-full border border-gray-300 bg-transparent px-3 py-2 text-xs outline-none focus:border-black"
                    />
                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="* Email"
                    className="w-full border border-gray-300 bg-transparent px-3 py-2 text-xs outline-none focus:border-black"
                  />

                  {/* Phone */}
                  <input
                    type="text"
                    placeholder="Phone"
                    className="w-full border border-gray-300 bg-transparent px-3 py-2 text-xs outline-none focus:border-black"
                  />

                  {/* Message - Rows 4 se 3 kiya */}
                  <textarea
                    rows={3}
                    placeholder="* Please tell us how we can help you."
                    className="w-full border border-gray-300 bg-transparent px-3 py-2 text-xs outline-none focus:border-black resize-none"
                  />

                  {/* Button */}
                  <button
                    type="submit"
                    className="border border-gray-400 px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-black hover:bg-black hover:text-white transition"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
