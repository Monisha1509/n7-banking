"use client";

const footerLinks = {
  Solutions: [
    "Core Banking CB7",
    "Digital Banking N7",
    "Open Banking",
    "Loan Origination System",
    "Loan Management System",
    "Digital Transformation",
  ],
  "N7 Banking": [
    "About Us",
    "Solutions",
    "Contact",
    "Company",
    "Careers",
    "Insights",
    "Core Team",
    "Brand Center",
  ],
  "Our Socials": ["LinkedIn", "X"],
};

const offices = [
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.",
  },
  {
    city: "Dubai",
    address:
      "Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates",
  },
  {
    city: "London",
    address:
      "Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India",
  },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--bg-dark)" }}>
      {/* CTA Banner */}
      <div
        className="relative overflow-hidden"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2
                className="font-bold text-white mb-4 leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}
              >
                Take the full advantage of going paper-less now.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem" }}>
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

      {/* Footer body */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* N7 Logo */}
          <div>
            <div
              className="font-black mb-6 leading-none select-none"
              style={{
                fontSize: "6rem",
                background:
                  "linear-gradient(135deg, #00aaff 0%, #0066ff 50%, #5533ff 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1,
              }}
            >
              N7
            </div>
          </div>

          {/* Offices */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
            {offices.map((office) => (
              <div key={office.city + office.address.slice(0, 10)}>
                <h5
                  className="font-semibold text-white mb-3"
                  style={{ fontSize: "0.9rem" }}
                >
                  {office.city}
                </h5>
                <p
                  className="leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontSize: "0.82rem" }}
                >
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <div /> {/* spacer */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h5
                className="font-semibold text-white mb-4"
                style={{ fontSize: "0.9rem" }}
              >
                {heading}
              </h5>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="flex items-center gap-2 transition-colors group"
                      style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "white")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color =
                          "var(--text-secondary)")
                      }
                    >
                      {link}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div
        className="max-w-6xl mx-auto px-6 py-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <p
          className="text-center"
          style={{ color: "var(--text-muted)", fontSize: "0.78rem" }}
        >
          Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as
          Commercial Brand] — [Registered under the Companies Act 2006 in
          England and Wales | Number of Incorporation 13100992]
        </p>
      </div>
    </footer>
  );
}
