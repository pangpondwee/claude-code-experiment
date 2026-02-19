"use client";

import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 pt-4">
        <nav className="relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
                <path d="M12 3C12 3 8 7 8 11C8 13.2 9.8 15 12 15C14.2 15 16 13.2 16 11C16 7 12 3 12 3Z" fill="currentColor" opacity="0.3"/>
                <path d="M12 8C12 8 9 11 9 13.5C9 15.4 10.3 17 12 17C13.7 17 15 15.4 15 13.5C15 11 12 8 12 8Z" fill="currentColor"/>
                <path d="M12 17V21M10 19H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight text-foreground" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Bloom <span className="text-primary">&</span> Petal
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {["Services", "Shop", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-primary/5"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all shadow-[0_2px_12px_rgba(0,0,0,0.08)]"
          >
            Order Now <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-full hover:bg-primary/5 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl shadow-xl p-4 md:hidden animate-scale-in">
              {["Services", "Shop", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm px-5 py-3 rounded-xl hover:brightness-110 transition-all"
              >
                Order Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
