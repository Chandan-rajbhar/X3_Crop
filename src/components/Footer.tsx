import footer_img from "../../public/images/footer_img.png";
import { FiGlobe, FiMapPin, FiPhone, FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export function Footer() {
  return (
  <footer className="mt-10 px-3 md:px-6">
  <div className="relative bg-black text-white rounded-[28px] rounded-tl-[27px] overflow-visible">
    {/* Main Content */}
    <div className="px-6 md:px-10 py-10 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Left Section */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <img
              src={footer_img}
              alt="logo"
              className="w-24 md:w-28 object-contain"
            />

            <p className="mt-6 text-[13px] leading-6 text-gray-300 max-w-60">
              Building the future with excellence
              <br />
              with Construction & Engineering.
            </p>
          </div>

          {/* Copyright */}
          <p className="hidden md:block text-[11px] text-gray-500 mt-14">
            Copyright © 2024 Elite Builders Inc. | All Rights Reserved
          </p>
        </div>

        {/* Center Nav */}
        <div className="md:col-span-4 flex md:justify-center">
          <div className="flex flex-wrap gap-8 text-sm text-gray-300">
            <a
              href="/about"
              className="hover:text-white transition-all duration-300"
            >
              About
            </a>

            <a
              href="/services"
              className="hover:text-white transition-all duration-300"
            >
              Services
            </a>

            <a
              href="/careers"
              className="hover:text-white transition-all duration-300"
            >
              Careers
            </a>

            <a
              href="/contact"
              className="hover:text-white transition-all duration-300"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right Contact */}
        <div className="md:col-span-4 md:ml-auto">
          <h3 className="text-lg font-medium mb-5">Reach Us</h3>

          <div className="space-y-4 text-sm text-gray-300">
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <FiMapPin className="text-gray-400 text-sm" />
              </div>

              <p className="leading-6">
                1157 W. Mission Ave #460669
                <br />
                Escondido, CA 92046–7028
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <FiPhone className="text-gray-400 text-sm" />
              <p>Ph: (760) 658–6455</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <FiGlobe className="text-gray-400 text-sm" />

              <a
                href="mailto:info@x3corp.net"
                className="hover:text-white underline underline-offset-4"
              >
                info@x3corp.net
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Copyright */}
      <p className="md:hidden text-[11px] text-gray-500 mt-10">
        Copyright © 2024 Elite Builders Inc. | All Rights Reserved
      </p>
    </div>

    {/* Floating Social Box */}
    <div className="absolute bottom-0 right-0 bg-black px-4 py-2 rounded-2xl flex items-center gap-3 shadow-xl">
      {/* YouTube */}
      <a
        href="#youtube"
        className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-all duration-300"
      >
        <FiYoutube className="text-sm" />
      </a>

      {/* Instagram */}
      <a
        href="#instagram"
        className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-all duration-300"
      >
        <FaInstagram className="text-sm" />
      </a>

      {/* X */}
      <a
        href="#x"
        className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 flex items-center justify-center transition-all duration-300"
      >
        <FaXTwitter className="text-sm" />
      </a>
    </div>
  </div>
</footer>
  );
}
