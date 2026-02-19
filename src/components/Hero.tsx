import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.96_0.02_10)] via-[oklch(0.97_0.01_75)] to-[oklch(0.94_0.03_150)]" />

      {/* Decorative blobs */}
      <div className="absolute top-32 -right-20 w-[500px] h-[500px] bg-primary/8 animate-blob" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-secondary/15 animate-blob" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-lavender/10 animate-blob" style={{ animationDelay: "-2s" }} />

      {/* Grain */}
      <div className="absolute inset-0 grain" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-6 items-center">
        {/* Text */}
        <div className="max-w-xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium text-primary bg-primary/8 border border-primary/15 px-4 py-1.5 rounded-full mb-8 animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Artisan Florist · Est. 2012
          </span>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-foreground leading-[1.1] mb-6 animate-fade-up delay-100">
            Flowers That
            <br />
            <span className="font-semibold italic text-primary">Tell Your Story</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-md animate-fade-up delay-200" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
            Handcrafted floral arrangements for weddings, celebrations, and everyday moments. Locally sourced, lovingly made.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
            <a
              href="#shop"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:brightness-110 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)]"
            >
              Shop Arrangements
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-foreground/15 text-foreground px-7 py-3.5 rounded-full text-sm font-medium hover:bg-foreground/5 transition-colors backdrop-blur-sm"
            >
              Our Services
            </a>
          </div>

          <div className="flex items-center gap-5 mt-12 animate-fade-up delay-400" style={{ fontFamily: "var(--font-jost), sans-serif" }}>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary/80 text-primary/80" />
              ))}
              <span className="ml-1.5 text-sm font-semibold text-foreground">4.9</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className="text-sm text-muted-foreground">500+ happy customers</span>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <span className="text-sm text-muted-foreground hidden sm:block">Same-day delivery</span>
          </div>
        </div>

        {/* Image composition */}
        <div className="relative flex justify-center lg:justify-end animate-fade-in delay-300">
          <div className="relative">
            {/* Main image */}
            <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] rotate-2">
              <Image
                src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80"
                alt="Beautiful floral arrangement"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating card - top */}
            <div className="absolute -top-4 -left-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-secondary-foreground">
                  <path d="M12 3L13.5 8H19L14.5 11.5L16 17L12 13.5L8 17L9.5 11.5L5 8H10.5L12 3Z" fill="currentColor" opacity="0.5"/>
                </svg>
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Fresh Daily</p>
                <p className="text-muted-foreground text-xs">Locally sourced blooms</p>
              </div>
            </div>

            {/* Floating card - bottom */}
            <div className="absolute -bottom-4 -right-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-4 flex items-center gap-3 animate-float" style={{ animationDelay: "-3s" }}>
              <div className="w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center text-lg">
                🚚
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Same-Day</p>
                <p className="text-muted-foreground text-xs">City-wide delivery</p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-full h-full rounded-[2rem] bg-primary/8 -rotate-3" />
          </div>
        </div>
      </div>
    </section>
  );
}
