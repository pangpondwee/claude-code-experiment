export default function Footer() {
  return (
    <footer className="relative py-10 bg-foreground overflow-hidden">
      <div className="absolute inset-0 grain opacity-30" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary-foreground/80">
                <path d="M12 3C12 3 8 7 8 11C8 13.2 9.8 15 12 15C14.2 15 16 13.2 16 11C16 7 12 3 12 3Z" fill="currentColor" opacity="0.3"/>
                <path d="M12 8C12 8 9 11 9 13.5C9 15.4 10.3 17 12 17C13.7 17 15 15.4 15 13.5C15 11 12 8 12 8Z" fill="currentColor"/>
                <path d="M12 17V21M10 19H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="text-primary-foreground/90 font-medium" style={{ fontFamily: "var(--font-cormorant), serif" }}>
              Bloom & Petal
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/40" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
            © {new Date().getFullYear()} Bloom & Petal. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex gap-6 text-sm" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Privacy</a>
            <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
