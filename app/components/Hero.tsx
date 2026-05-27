"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    let frame: number;
    let t = 0;
    const animate = () => {
      t += 0.01;
      el.style.opacity = String(0.35 + Math.sin(t) * 0.15);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--bg-dark)", paddingTop: "80px" }}
    >
      <div
        ref={glowRef}
        className="absolute pointer-events-none"
        style={{
          right: "5%", top: "15%",
          width: "700px", height: "600px",
          background: "radial-gradient(ellipse at center, #0055ff 0%, #0033aa 30%, transparent 70%)",
          filter: "blur(90px)", borderRadius: "50%",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-28">
          {/* Left */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s", opacity: 0 }}>
            <h1
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", lineHeight: 1.1 }}
            >
              The new foundation
              <br />of modern banking
            </h1>
            <p className="mb-10 leading-relaxed" style={{ color: "var(--text-secondary)", fontSize: "0.95rem", maxWidth: "360px" }}>
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">REQUEST DEMO</button>
              <button className="btn-outline">CONTACT US</button>
            </div>
          </div>

          {/* Right – hero image */}
          <div className="animate-fade-in-up flex justify-center" style={{ animationDelay: "0.3s", opacity: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hero-image.png"
              alt="Banking App"
              style={{ width: "100%", maxWidth: "560px", height: "auto", objectFit: "contain" }}
            />
          </div>
        </div>

        {/* Trusted By */}
        <div className="pb-16 animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <p className="text-xs mb-5 tracking-widest" style={{ color: "var(--text-secondary)" }}>Trusted By:</p>
          <div className="flex flex-wrap gap-6 items-center">
            {["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVESMARATHON"].map((brand) => (
              <span
                key={brand}
                className="text-xs font-medium tracking-widest transition-colors cursor-pointer"
                style={{ color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
