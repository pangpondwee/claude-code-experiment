import { Flower2, Gift, Heart } from "lucide-react";

const services = [
  {
    icon: Flower2,
    title: "Wedding Flowers",
    description:
      "From bridal bouquets to ceremony arches, we bring your dream wedding to life with bespoke floral design.",
    accent: "bg-primary/8 text-primary",
    blob: "bg-primary/6",
  },
  {
    icon: Gift,
    title: "Same-Day Delivery",
    description:
      "Order before 2 PM and we'll deliver fresh blooms to your door across the city — same day, guaranteed.",
    accent: "bg-secondary/15 text-secondary-foreground",
    blob: "bg-secondary/10",
  },
  {
    icon: Heart,
    title: "Custom Arrangements",
    description:
      "Tell us the occasion, colours, and mood. Our florists will craft a one-of-a-kind arrangement just for you.",
    accent: "bg-lavender/15 text-foreground",
    blob: "bg-lavender/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
            What We Offer
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
            Every Bloom, a <span className="italic font-medium text-primary">Promise</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative p-8 lg:p-10 rounded-3xl border border-border/60 bg-white hover:border-primary/20 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Background blob on hover */}
              <div className={`absolute top-4 right-4 w-24 h-24 ${s.blob} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                <div className={`w-14 h-14 rounded-2xl ${s.accent} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <s.icon className="w-6 h-6" />
                </div>

                <h3 className="text-2xl font-medium text-foreground mb-3">
                  {s.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
