"use client";

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#0066ff" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-sm font-medium" style={{ color: "#222" }}>{text}</p>
    </div>
  );
}

export default function DigitalBanking() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg-light)" }}>
      <div className="absolute pointer-events-none" style={{ left: "-100px", top: "10%", width: "400px", height: "400px", border: "1px solid rgba(0,0,0,0.06)", borderRadius: "50%" }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-24">
          <div>
            <h2 className="font-bold leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 3vw, 2.4rem)", color: "#111" }}>
              Digital banking out-of-the-box
            </h2>
            <p className="mb-8" style={{ color: "#666", fontSize: "0.9rem" }}>
              N7 helps your financial institution improve the client experience, automate and optimize procedures
            </p>
            <button className="btn-primary mb-4">REQUEST DEMO</button><br />
            <a href="#" className="text-xs font-semibold tracking-widest" style={{ color: "#0066ff", textDecoration: "underline", textUnderlineOffset: "3px", letterSpacing: "0.1em" }}>
              LEARN MORE →
            </a>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/iphone-home.png" alt="N7 Banking Home Screen" style={{ maxHeight: "520px", width: "auto", objectFit: "contain" }} />
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontSize: "1rem", color: "#111" }}>Fully compliant with regulatory requirement</h4>
            <p className="mb-6" style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.7 }}>
              The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank&apos;s operational-risk protocols and procedures.
            </p>
            <div className="space-y-3">
              {["Pre-integrated Security System", "Fully Compliant With Regulatory Requirement", "Digitally Connected Core"].map((item) => <CheckItem key={item} text={item} />)}
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-24">
          <div>
            <h4 className="font-bold mb-4" style={{ fontSize: "1rem", color: "#111" }}>No legacy IT systems</h4>
            <p className="mb-6" style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.7 }}>
              Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
            </p>
            <div className="space-y-3">
              {["Adaptive & Intelligent API monetization", "Ambient User Experience", "Cloud-native With lower TCO"].map((item) => <CheckItem key={item} text={item} />)}
            </div>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/iphone-card.png" alt="N7 Banking Card Screen" style={{ maxHeight: "520px", width: "auto", objectFit: "contain" }} />
          </div>
          <div>
            <h4 className="font-bold mb-4" style={{ fontSize: "1rem", color: "#111" }}>No traditional branches</h4>
            <p className="mb-6" style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.7 }}>
              Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
            </p>
            <div className="space-y-3">
              {["Branchless & Paperless Banking", "Digital Transformation Capability", "Optimized, Adoptable and Scalable"].map((item) => <CheckItem key={item} text={item} />)}
            </div>
          </div>
        </div>

        {/* Dark CTA */}
        <div className="rounded-2xl p-10 relative overflow-hidden" style={{ background: "var(--bg-dark)" }}>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 pointer-events-none overflow-hidden">
            <svg className="absolute right-0 top-0 h-full" viewBox="0 0 400 300" fill="none">
              <line x1="200" y1="0" x2="400" y2="150" stroke="#0044aa" strokeWidth="1" opacity="0.4" />
              <line x1="150" y1="0" x2="400" y2="200" stroke="#0044aa" strokeWidth="1" opacity="0.3" />
              <text x="300" y="220" fill="#0066ff" fontSize="130" fontWeight="900" opacity="0.07">7</text>
            </svg>
          </div>
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-bold text-white mb-4 leading-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}>
                Take the full advantage of going paper-less now.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem" }}>
                CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
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
