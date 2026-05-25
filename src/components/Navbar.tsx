import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../public/images/HomePage _img/logo.png";
import { MdArrowDropDown } from "react-icons/md";

type NavLink = {
  to: string;
  label: string;
  href?: string;
};

const links: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  {
    to: "/careers",
    label: "Careers",
    href: "https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=456b64aa-c155-4840-99e9-a9ead9d02ac0&ccId=19000101_000001&lang=en_US",
  },
];

const servicesMenu = [
  { title: "Project Management", to: "/ProjectManagement" },
  { title: "Construction Services", to: "/ConstructionServices" },
  { title: "RF Services", to: "/Rf-Services" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Desktop dropdown
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

  // Mobile / Tablet dropdown
  const [mobileServicesOpen, setMobileServicesOpen] =
    useState(false);

  // Outside click ref
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  // Close dropdown outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopServicesOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between gap-4 lg:gap-8">

        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex flex-1 justify-end items-center gap-6 lg:gap-8">
          {links.map((l) => {
            if (l.to === "/services") {
              return (
                <li
                  className="relative"
                  key={l.to}
                  ref={dropdownRef}
                >
                  {/* Services Button */}
                  <button
                    onClick={() =>
                      setDesktopServicesOpen(
                        !desktopServicesOpen
                      )
                    }
                    className="flex items-center text-sm font-medium text-gray-600 hover:text-[#ff5a4a] transition-colors cursor-pointer"
                  >
                    {l.label}

                    <MdArrowDropDown
                      size={20}
                      className={`transition-transform duration-300 ${
                        desktopServicesOpen
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown */}
                  <AnimatePresence>
                    {desktopServicesOpen && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          y: 10,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        exit={{
                          opacity: 0,
                          y: 10,
                        }}
                        transition={{
                          duration: 0.2,
                        }}
                        className="absolute left-0 top-full z-40 mt-6 min-w-56 rounded-md border border-gray-200 bg-white p-4 shadow-xl"
                      >
                        <div className="space-y-1">
                          {servicesMenu.map((item) => (
                            <Link
                              key={item.to}
                              to={item.to}
                              onClick={() =>
                                setDesktopServicesOpen(
                                  false
                                )
                              }
                              className="block rounded-md px-2 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            >
                              {item.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={l.to}>
                {l.href ? (
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-medium text-gray-600 hover:text-[#ff5a4a] transition-colors"
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    to={l.to}
                    className="text-sm font-medium text-gray-600 hover:text-[#ff5a4a] transition-colors"
                    activeProps={{
                      className:
                        "text-[#ff5a4a] font-semibold",
                    }}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Contact Button */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-full bg-[#ff5446] text-white px-4 sm:px-5 py-2 text-sm font-medium hover:bg-[#ff4333] transition-colors shadow-lg"
          >
            Contact
          </Link>

          {/* Mobile / Tablet Menu Button */}
          <button
            className="lg:hidden text-2xl text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile / Tablet Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <ul className="flex flex-col p-6 gap-4">

              {/* Normal Links */}
              {links.map((l) =>
                l.to !== "/services" ? (
                  <li key={l.to}>
                    {l.href ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-gray-700 hover:text-[#ff5a4a]"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.to}
                        onClick={() => setOpen(false)}
                        className="text-base font-medium text-gray-700 hover:text-[#ff5a4a]"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ) : null
              )}

              {/* Mobile / Tablet Services */}
              <li>
                <button
                  onClick={() =>
                    setMobileServicesOpen(
                      !mobileServicesOpen
                    )
                  }
                  className="w-full flex items-center justify-between text-base font-semibold text-gray-800"
                >
                  Services

                  <MdArrowDropDown
                    size={24}
                    className={`transition-transform duration-300 ${
                      mobileServicesOpen
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.ul
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden mt-3 space-y-2 border-l border-gray-200 pl-4"
                    >
                      {servicesMenu.map((item) => (
                        <li key={item.to}>
                          <Link
                            to={item.to}
                            onClick={() => {
                              setOpen(false);
                              setMobileServicesOpen(
                                false
                              );
                            }}
                            className="block text-sm text-gray-600 hover:text-[#ff5a4a]"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>

              {/* Mobile Contact Button */}
              <li>
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#ff5446] text-white px-5 py-3 text-sm font-medium hover:bg-[#ff4333] transition-colors shadow-lg"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}