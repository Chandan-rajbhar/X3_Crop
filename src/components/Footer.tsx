import { Link } from "@tanstack/react-router";
import { GiWheat } from "react-icons/gi";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-bold text-xl">
            <GiWheat className="text-2xl text-accent" />
            X3 Crop
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed">
            Cultivating the future of agriculture through innovation, sustainability, and care for the land.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/products" className="hover:text-accent">Products</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>123 Farmland Road</li>
            <li>Greenfield, CA 94203</li>
            <li>hello@x3crop.com</li>
            <li>+1 (555) 012-3456</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow</h4>
          <div className="flex gap-3">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground transition-colors flex items-center justify-center">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} X3 Crop. All rights reserved.
      </div>
    </footer>
  );
}
