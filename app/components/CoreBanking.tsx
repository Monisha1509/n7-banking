"use client";

const features = [
  "Customer-On Boarding", "CRM Activities",
  "Managing deposits and withdrawals", "Configuring New Banking Products",
  "Transaction management", "Loan disbursal and Loan management",
  "Interest Calculation", "Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.",
  "Payments processing (cash, cheques, mandates, NEFT, RTGS etc)",
];

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "#0066ff" }}>
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
          <path d="M5 13l4 4L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>{text}</p>
    </div>
  );
}

export default function CoreBanking() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-28">
          <div>
            <h2 className="font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)" }}>
              A complete cloud-based core banking.
            </h2>
            <p className="mb-8" style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
              Faster time to market with our cloud-based core banking services
            </p>
            <button className="btn-primary mb-6">REQUEST DEMO</button>
            <div className="mt-2">
              <a href="#" className="text-xs font-semibold tracking-widest" style={{ color: "var(--blue-light)", textDecoration: "underline", textUnderlineOffset: "3px", letterSpacing: "0.1em" }}>
                LEARN MORE →
              </a>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/macbook-aml.png" alt="AML Dashboard" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#fff", border: "1px solid rgba(0,100,255,0.2)" }}>
            <div className="px-4 py-3 flex items-center gap-2" style={{ background: "#f8faff", borderBottom: "1px solid #eee" }}>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <span className="text-xs font-medium ml-2 text-gray-600">KYC Dashboard</span>
            </div>
            <div className="p-4">
              <div className="grid grid-cols-3 gap-2 mb-4">
                {[{ label: "Total", val: "1115", color: "#0066ff" }, { label: "In Progress", val: "940", color: "#f59e0b" }, { label: "Failed", val: "105", color: "#ef4444" }].map((s) => (
                  <div key={s.label} className="p-2 rounded-lg text-center" style={{ background: "#f8faff" }}>
                    <p className="text-lg font-bold" style={{ color: s.color }}>{s.val}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {[["00056433", "Raghu Narayan", "Completed"], ["00056433", "Raghu Narayan", "Pending"], ["00056433", "Raghu Narayan", "Failed"], ["00056433", "Raghu Narayan", "Completed"]].map((row, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded" style={{ background: "#f9fafb" }}>
                    <span className="text-xs text-gray-500">{row[0]}</span>
                    <span className="text-xs font-medium text-gray-700">{row[1]}</span>
                    <span className="text-xs font-semibold" style={{ color: row[2] === "Completed" ? "#16a34a" : row[2] === "Failed" ? "#ef4444" : "#f59e0b" }}>{row[2]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-6 leading-tight" style={{ fontSize: "1.4rem" }}>
              Run a more efficient, flexible, and digitally connected corebanking system
            </h3>
            <p className="font-semibold text-white mb-4" style={{ fontSize: "0.9rem" }}>What you will get:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((item) => <CheckItem key={item} text={item} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
