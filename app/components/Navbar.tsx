"use client";
import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6, 13, 22, 0.95)"
          : "rgba(6, 13, 22, 0.85)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span
            className="text-white font-bold text-xl tracking-wide"
            style={{ letterSpacing: "0.05em" }}
          >
            N7
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <NavItem label="SOLUTIONS" hasDropdown />
          <NavItem label="RESOURCES" hasDropdown />
          <NavItem label="ABOUT US" />
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="btn-outline text-xs">REQUEST DEMO</button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4"
          style={{ background: "rgba(6, 13, 22, 0.98)" }}
        >
          {["SOLUTIONS", "RESOURCES", "ABOUT US"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm text-gray-300 hover:text-white tracking-widest transition-colors"
            >
              {item}
            </a>
          ))}
          <button className="btn-outline text-xs mt-2 w-fit">
            REQUEST DEMO
          </button>
        </div>
      )}
    </nav>
  );
}

function NavItem({
  label,
  hasDropdown,
}: {
  label: string;
  hasDropdown?: boolean;
}) {
  return (
    <a
      href="#"
      className="flex items-center gap-1 text-xs font-medium tracking-widest transition-colors"
      style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.1em" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = "white")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color =
          "rgba(255,255,255,0.75)")
      }
    >
      {label}
      {hasDropdown && <ChevronDown size={14} className="opacity-60" />}
    </a>
  );
}
