import Image from "next/image";

const stats = [
  { value: "12+", label: "Years of craft" },
  { value: "500+", label: "Weddings styled" },
  { value: "10k+", label: "Bouquets delivered" },
];

export default function About() {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image composition */}
          <div className="relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative w-full aspect-[4/5] max-w-lg rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <Image
                  src="https://images.unsplash.com/photo-1567696911980-2eed69a46042?w=800&q=80"
                  alt="Florist arranging flowers"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping secondary image */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.1)] border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&q=80"
                  alt="Beautiful bouquet close-up"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Award badge */}
              <div className="absolute top-6 -right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-accent/30 flex items-center justify-center text-lg">
                  🏆
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">Award Winning</p>
                  <p className="text-muted-foreground text-xs" style={{ fontFamily: "var(--font-jost), sans-serif" }}>Best Florist 2023 & 2024</p>
                </div>
              </div>

              {/* Decorative blob */}
              <div className="absolute -z-10 top-8 -left-8 w-3/4 h-3/4 bg-secondary/10 rounded-[2rem] -rotate-6" />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
              Our Story
            </p>
            <h2 className="text-4xl sm:text-5xl font-light text-foreground mb-8 leading-tight">
              Rooted in Passion,
              <br />
              <span className="italic font-medium text-primary">Grown with Care</span>
            </h2>

            <div className="space-y-4 mb-12" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Founded in 2012, Bloom & Petal started as a small corner shop with a big dream — to make beautiful flowers accessible to everyone. Today, we&apos;re proud to be the city&apos;s most beloved artisan florist.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every arrangement is crafted by hand by our team of passionate florists, using seasonal blooms sourced from local growers and trusted sustainable farms.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="relative">
                  <p className="text-4xl lg:text-5xl font-light text-primary mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
