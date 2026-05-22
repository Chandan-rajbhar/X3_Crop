import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../public/images/HomePage _img/logo.png";
import { MdArrowDropDown } from "react-icons/md";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/careers", label: "Careers" },
] as const;

const servicesMenu = [
  { title: "Project Management", to: "/ProjectManagement" },
  { title: "Construction Services", to: "/ConstructionServices" },
  { title: "RF Services", to: "/Rf-Services" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Logo" className="h-15 w-auto" />
          </Link>
        </div>
        <ul className="hidden md:flex flex-1 justify-end items-center gap-6 lg:gap-8">
          {links.map((l) => {
            if (l.to === "/services") {
              return (
                <li className="group relative" key={l.to}>
                  <button
                    className="flex justify-center justify-items-center text-sm font-medium text-gray-600 hover:text-[#ff5a4a] transition-colors cursor-pointer"
                  >
                    {l.label}
                    <span><MdArrowDropDown size={20}/></span>
                  </button>

                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 absolute left-0 top-full z-40 mt-6 min-w-50 rounded-md border border-gray-200 bg-white p-4 shadow-xl">
                    <div className="space-y-1">
                      {servicesMenu.map((item) => (
                        <a
                          key={item.to}
                          href={item.to}
                          className="block rounded-md px-1 py-1 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              );
            }

            return (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm font-medium text-gray-600 hover:text-[#ff5a4a] transition-colors"
                  activeProps={{ className: "text-[#ff5a4a] font-semibold" }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center gap-3 sm:gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-full bg-[#ff5446] text-white px-4 sm:px-5 py-2 text-sm font-medium hover:bg-[#ff4333] transition-colors shadow-lg"
          >
            Contact
          </Link>
          <button
            className="md:hidden text-2xl text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((l) =>
                l.to !== "/services" ? (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="text-base font-medium text-foreground/80"
                    >
                      {l.label}
                    </Link>
                  </li>
                ) : null,
              )}

              <li>
                <span className="text-base font-semibold text-foreground">Services</span>
                <ul className="mt-3 space-y-2 border-l border-gray-200 pl-4">
                  {servicesMenu.map((item) => (
                    <li key={item.to}>
                      <a
                        href={item.to}
                        onClick={() => setOpen(false)}
                        className="block text-sm text-foreground/80 hover:text-foreground"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
