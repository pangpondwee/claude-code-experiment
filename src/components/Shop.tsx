import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Garden Romance",
    price: "$65",
    description: "Soft pink peonies, white ranunculus, and blush garden roses.",
    tag: "Bestseller",
    image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=600&q=80",
  },
  {
    name: "Golden Sunrise",
    price: "$55",
    description: "Sunflowers, yellow tulips, and eucalyptus for a joyful arrangement.",
    tag: "Seasonal",
    image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=600&q=80",
  },
  {
    name: "Midnight Velvet",
    price: "$80",
    description: "Deep burgundy roses, anemones, and dark foliage for drama.",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=600&q=80",
  },
  {
    name: "Wild Meadow",
    price: "$50",
    description: "Lavender, chamomile, and wildflowers for a rustic charm.",
    tag: null,
    image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=600&q=80",
  },
];

export default function Shop() {
  return (
    <section id="shop" className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cream/40 to-background" />
      <div className="absolute inset-0 grain" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
              Our Collection
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-foreground">
              Featured <span className="italic font-medium">Arrangements</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all"
            style={{ fontFamily: "var(--font-jost), sans-serif" }}
          >
            View all <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Staggered grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div
              key={p.name}
              className={`group bg-white rounded-3xl overflow-hidden border border-border/50 hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] transition-all duration-500 ${
                i % 2 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                {p.tag && (
                  <span
                    className="absolute top-4 left-4 text-xs font-medium bg-white/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    {p.tag}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-medium text-foreground">{p.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
                  {p.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-foreground">{p.price}</span>
                  <button
                    className="text-sm bg-foreground text-background px-5 py-2 rounded-full hover:bg-primary transition-colors"
                    style={{ fontFamily: "var(--font-jost), sans-serif" }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
