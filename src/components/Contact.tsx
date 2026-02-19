import { Phone, MapPin, Clock, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      {/* Warm background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream via-blush/20 to-cream" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
              Get in Touch
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-6 leading-tight">
              Let&apos;s Create Something
              <br />
              <span className="italic font-medium text-primary">Beautiful</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md text-lg" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
              Whether you&apos;re planning a wedding, need a same-day gift, or simply want to brighten someone&apos;s day — we&apos;re here to help.
            </p>

            <div className="space-y-5" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
              {[
                { icon: MapPin, text: "42 Rose Garden Lane, Melbourne VIC 3000" },
                { icon: Phone, text: "+61 3 9000 1234" },
                { icon: Clock, text: "Mon–Sat 8 AM – 6 PM · Sun 9 AM – 4 PM" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/80 border border-border/50 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-10">
              {[Instagram, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/80 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/70 backdrop-blur-md border border-white/50 shadow-[0_12px_40px_rgba(0,0,0,0.04)] rounded-3xl p-8 lg:p-10">
            <h3 className="text-2xl font-medium text-foreground mb-8">
              Send an Enquiry
            </h3>

            <form className="space-y-5" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">First Name</label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full bg-white/80 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Last Name</label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full bg-white/80 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Email</label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full bg-white/80 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Occasion</label>
                <select className="w-full bg-white/80 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all">
                  <option value="">Select an occasion</option>
                  <option value="wedding">Wedding</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="corporate">Corporate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2 tracking-wide uppercase">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="w-full bg-white/80 border border-border/60 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-sm font-medium hover:brightness-110 transition-all shadow-[0_4px_16px_rgba(0,0,0,0.08)] flex items-center justify-center gap-2"
              >
                Send Enquiry <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
