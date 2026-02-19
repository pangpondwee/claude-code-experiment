import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie M.",
    role: "Bride, Spring 2024",
    text: "Bloom & Petal did all the florals for our wedding and every arrangement was absolutely stunning. Guests are still talking about it!",
    rating: 5,
  },
  {
    name: "James T.",
    role: "Loyal Customer",
    text: "I order from here every week for my partner. The flowers are always fresh and the arrangements are so thoughtful.",
    rating: 5,
  },
  {
    name: "Rina K.",
    role: "Birthday Gift",
    text: "The custom bouquet they made for my mother's birthday brought her to tears — in the best way. Truly magical.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-cream/30 to-white" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
            Kind Words
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
            What Our Customers <span className="italic font-medium">Say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`relative bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-border/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] ${
                i === 1 ? "md:-translate-y-4" : ""
              }`}
            >
              {/* Decorative quote mark */}
              <div className="absolute top-6 right-8 text-6xl font-serif text-primary/10 leading-none select-none">
                &ldquo;
              </div>

              <div className="relative">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary/70 text-primary/70" />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed mb-8 text-lg italic font-light" style={{ fontFamily: "var(--font-cormorant), serif" }}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/8 flex items-center justify-center text-sm font-medium text-primary" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm" style={{ fontFamily: "var(--font-jost), sans-serif" }}>{t.name}</p>
                    <p className="text-muted-foreground text-xs" style={{ fontFamily: "var(--font-jost), sans-serif" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
