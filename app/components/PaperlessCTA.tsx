"use client";

export default function PaperlessCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className="rounded-2xl p-10 relative overflow-hidden"
          style={{
            background: "var(--bg-dark-3)",
            border: "1px solid rgba(0,100,255,0.15)",
          }}
        >
          {/* Geometric lines */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
            <svg
              className="absolute right-0 top-0 h-full"
              viewBox="0 0 400 300"
              fill="none"
            >
              <line
                x1="200"
                y1="0"
                x2="400"
                y2="150"
                stroke="#0044aa"
                strokeWidth="1"
                opacity="0.4"
              />
              <line
                x1="150"
                y1="0"
                x2="400"
                y2="200"
                stroke="#0044aa"
                strokeWidth="1"
                opacity="0.3"
              />
              <line
                x1="250"
                y1="0"
                x2="400"
                y2="100"
                stroke="#0044aa"
                strokeWidth="1"
                opacity="0.2"
              />
              <line
                x1="280"
                y1="300"
                x2="400"
                y2="80"
                stroke="#0044aa"
                strokeWidth="1"
                opacity="0.3"
              />
              <text
                x="320"
                y="200"
                fill="#0066ff"
                fontSize="120"
                fontWeight="900"
                opacity="0.08"
              >
                7
              </text>
            </svg>
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                className="font-bold text-white mb-4 leading-tight"
                style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}
              >
                Take the full advantage of going paper-less now.
              </h2>
              <p
                className="mb-2"
                style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}
              >
                CB7 helps your financial institution improve the client
                experience, automate and optimize procedures, simplify banking
                operations
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <button className="btn-outline">CONTACT US</button>
              <button className="btn-primary">REQUEST DEMO</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
