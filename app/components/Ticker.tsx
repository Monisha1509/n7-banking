"use client";

const items = [
  { text: "N7", color: "#0066ff" },
  { text: "✦", color: "#aaa" },
  { text: "Say", color: "#111" },
  { text: "👋", color: "#111" },
  { text: "to the new way of banking", color: "#111" },
  { text: "✦", color: "#aaa" },
  { text: "CB7", color: "#0066ff" },
  { text: "✦", color: "#aaa" },
  { text: "Say", color: "#111" },
  { text: "👋", color: "#111" },
  { text: "to the new way of banking", color: "#111" },
  { text: "✦", color: "#aaa" },
];

export default function Ticker() {
  return (
    <div
      className="overflow-hidden py-5"
      style={{ background: "#fff", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}
    >
      <div className="ticker-track flex items-center gap-8 whitespace-nowrap" style={{ width: "max-content" }}>
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-2xl font-bold"
            style={{ color: item.color, fontSize: "clamp(1.1rem, 2vw, 1.5rem)" }}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
