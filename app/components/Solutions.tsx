"use client";

const solutions = [
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M20 4C11.16 4 4 11.16 4 20s7.16 16 16 16 16-7.16 16-16S28.84 4 20 4z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <path d="M4 20h8M28 20h8M20 4v8M20 28v8" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Core Banking CB7",
    tag: null,
    description:
      "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 8l8 8-8 8M20 32h12" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="30" cy="12" r="6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <circle cx="10" cy="30" r="4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Digital Banking N7",
    tag: null,
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <circle cx="20" cy="20" r="15" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
        <path d="M8 14h24M8 26h24M20 5C16 10 14 15 14 20s2 10 6 15M20 5c4 5 6 10 6 15s-2 10-6 15" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Open Banking",
    tag: null,
    description:
      "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M6 12h28M6 20h28M6 28h28M12 6v28M20 6v28M28 6v28" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="6" y="6" width="28" height="28" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Loan Origination System",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8">
        <path d="M8 20l4-8 4 4 4-10 4 6 4-2 4 10" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Loan Management System",
    tag: "NBFC",
    description:
      "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients",
  },
];

export default function Solutions() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--bg-dark)" }}
      id="solutions"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Left heading */}
          <div>
            <h2
              className="font-bold text-white mb-8 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)" }}
            >
              All of our solutions are tailor-made to your needs
            </h2>
            <button className="btn-outline">REQUEST DEMO</button>
          </div>

          {/* Solutions grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {solutions.map((sol) => (
              <div key={sol.title} className="group">
                <div className="flex items-start justify-between mb-4">
                  <div>{sol.icon}</div>
                  {sol.tag && (
                    <span
                      className="text-xs tracking-widest"
                      style={{ color: "var(--text-muted)", fontSize: "10px" }}
                    >
                      {sol.tag}
                    </span>
                  )}
                </div>
                <h3
                  className="font-semibold text-white mb-3"
                  style={{ fontSize: "1rem" }}
                >
                  {sol.title}
                </h3>
                <p
                  className="leading-relaxed mb-4"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                  }}
                >
                  {sol.description}
                </p>
                <a
                  href="#"
                  className="flex items-center gap-2 text-xs font-semibold tracking-widest transition-colors"
                  style={{
                    color: "var(--blue-light)",
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    letterSpacing: "0.1em",
                  }}
                >
                  LEARN MORE →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
