"use client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const articles = [
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
  {
    tag: "GETTING STARTED",
    title: "How to transition from a traditional to a digital bank",
    author: "David Grohl",
    date: "17/08/24",
  },
];

const caseStudies = [
  {
    tag: "GETTING STARTED",
    title: "How we help brand reach out to more people",
    company: "Zoomerr",
  },
  {
    tag: "GETTING STARTED",
    title: "How we modernized core banking infrastructure",
    company: "SmartFinder",
  },
  {
    tag: "GETTING STARTED",
    title: "Digital transformation journey in financial sector",
    company: "ArtVenue",
  },
];

function N7Logo() {
  return (
    <div className="flex items-center gap-1">
      <div
        className="w-5 h-5 rounded flex items-center justify-center"
        style={{ background: "rgba(0,150,255,0.2)" }}
      >
        <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
          <path
            d="M10 2L18 18H2L10 2Z"
            stroke="#0099ff"
            strokeWidth="1.5"
            fill="none"
            opacity="0.6"
          />
          <path
            d="M6 10h8M10 6v8"
            stroke="#0099ff"
            strokeWidth="1"
            opacity="0.4"
          />
        </svg>
      </div>
      <span className="text-xs font-semibold text-white opacity-70">
        Zoomerr
      </span>
    </div>
  );
}

export default function Insights() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section
      className="py-24"
      style={{ background: "var(--bg-dark-2)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-24">
          <div>
            <h2
              className="font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
            >
              Get yourself up-to-speed on all the things happening in fintech
            </h2>
            <button className="btn-outline">INSIGHTS</button>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <div
                key={i}
                className="card-hover rounded-xl p-5"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="aspect-video rounded-lg mb-4 flex items-center justify-center"
                  style={{ background: "#0a1e38" }}
                >
                  <div className="grid grid-cols-2 gap-2 p-4 opacity-60">
                    {[0, 1, 2, 3].map((j) => (
                      <svg key={j} viewBox="0 0 40 40" fill="none" className="w-8 h-8">
                        <path
                          d="M10 20l5-8 5 5 5-10 5 8"
                          stroke="#0099ff"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 28h20"
                          stroke="#0099ff"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    ))}
                  </div>
                </div>
                <p
                  className="text-xs mb-2 tracking-widest"
                  style={{ color: "#0099ff", letterSpacing: "0.1em" }}
                >
                  {article.tag}
                </p>
                <h4
                  className="font-semibold text-white mb-3 leading-snug"
                  style={{ fontSize: "0.9rem" }}
                >
                  {article.title}
                </h4>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs" style={{ color: "#0099ff" }}>
                    {article.author}
                  </span>
                  <span className="text-xs" style={{ color: "var(--text-muted)" }}>
                    {article.date}
                  </span>
                </div>
                <button
                  className="w-full text-xs font-semibold tracking-widest py-2 rounded"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                  }}
                >
                  READ MORE
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mb-12">
          <a
            href="#"
            className="text-xs font-semibold tracking-widest"
            style={{
              color: "var(--blue-light)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              letterSpacing: "0.1em",
            }}
          >
            READ ALL INSIGHTS →
          </a>
        </div>

        {/* Case Studies */}
        <div className="mb-12 text-center">
          <h2
            className="font-bold text-white"
            style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
          >
            Our Case Studies
          </h2>
        </div>

        <div
          className="rounded-2xl overflow-hidden relative"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div
              className="aspect-video lg:aspect-auto flex items-center justify-center"
              style={{ background: "#071428", minHeight: "280px" }}
            >
              <div className="grid grid-cols-2 gap-4 p-8">
                {[0, 1, 2, 3].map((j) => (
                  <svg key={j} viewBox="0 0 60 60" fill="none" className="w-16 h-16">
                    <path
                      d="M10 30l10-15 10 10 10-20 10 15"
                      stroke="#0099ff"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 42h40"
                      stroke="#0099ff"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                ))}
              </div>
            </div>
            {/* Content */}
            <div className="p-8 flex flex-col justify-center">
              <p
                className="text-xs mb-3 tracking-widest"
                style={{ color: "#0099ff", letterSpacing: "0.1em" }}
              >
                {caseStudies[activeSlide].tag}
              </p>
              <h3
                className="font-bold text-white mb-6 leading-tight"
                style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)" }}
              >
                {caseStudies[activeSlide].title}
              </h3>
              <N7Logo />
              <div className="mt-6">
                <button
                  className="text-xs font-semibold tracking-widest py-2.5 px-8 rounded"
                  style={{
                    border: "1px solid rgba(255,255,255,0.2)",
                    background: "transparent",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.1em",
                    cursor: "pointer",
                  }}
                >
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* Carousel controls */}
          <div
            className="flex items-center justify-between px-8 py-4"
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
          >
            <div className="flex items-center gap-4">
              <button
                onClick={() =>
                  setActiveSlide((p) =>
                    p === 0 ? caseStudies.length - 1 : p - 1
                  )
                }
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <div className="flex gap-2">
                {caseStudies.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className="transition-all"
                    style={{
                      width: i === activeSlide ? "28px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background:
                        i === activeSlide
                          ? "var(--blue-light)"
                          : "rgba(255,255,255,0.2)",
                      border: "none",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setActiveSlide((p) => (p + 1) % caseStudies.length)
                }
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  background: "transparent",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
            <a
              href="#"
              className="text-xs font-semibold tracking-widest"
              style={{
                color: "var(--blue-light)",
                textDecoration: "underline",
                textUnderlineOffset: "3px",
                letterSpacing: "0.1em",
              }}
            >
              VIEW ALL →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
