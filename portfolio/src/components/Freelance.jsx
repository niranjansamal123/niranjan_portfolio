import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: "fas fa-globe",
    title: "Web Application Development",
    color: "#4f8ef7",
    desc: "Full-stack web apps using ASP.NET Core, C#, SQL Server with clean architecture, REST APIs, and responsive UI.",
    features: ["ASP.NET Core MVC / Web API", "SQL Server + EF Core", "React.js Frontend", "Role-based Auth", "Payment Integration"],
  },
  {
    icon: "fas fa-database",
    title: "Database Design & Optimization",
    color: "#9b72f2",
    desc: "Normalized schema design, stored procedures, query optimization and EF Core migrations for enterprise-scale apps.",
    features: ["SQL Server Schema Design", "Stored Procedures", "Query Optimization", "EF Core Migrations", "Data Reporting"],
  },
  {
    icon: "fas fa-bolt",
    title: "Real-Time Features",
    color: "#06d6a0",
    desc: "Live dashboards, real-time notifications, chat, and tracking systems using SignalR.",
    features: ["SignalR Integration", "Live Dashboards", "Real-Time Notifications", "WebSocket APIs", "Chat Systems"],
  },
  {
    icon: "fas fa-mobile-alt",
    title: "Responsive UI / Frontend",
    color: "#fbbf24",
    desc: "Pixel-perfect, mobile-first responsive UIs using React, Bootstrap, and modern CSS animations.",
    features: ["React.js / Bootstrap", "Framer Motion Animations", "Mobile Responsive", "Cross-browser Compatible", "Performance Optimized"],
  },
  {
    icon: "fas fa-envelope-open-text",
    title: "Email & SMS Integration",
    color: "#f472b6",
    desc: "Email campaign systems, SMTP integration, OTP SMS, and notification pipelines for your business.",
    features: ["Email Campaign System", "SMTP / Email API", "OTP via SMS", "Template Management", "Delivery Tracking"],
  },
  {
    icon: "fas fa-tools",
    title: "Bug Fixing & Code Review",
    color: "#4f8ef7",
    desc: "Debugging, refactoring, and reviewing existing .NET / React codebases for performance and maintainability.",
    features: ["ASP.NET Core Debugging", "React Bug Fixes", "Code Refactoring", "Performance Review", "Security Audit"],
  },
];

const pricing = [
  {
    plan: "Starter",
    price: "₹5,000",
    usd: "$60",
    color: "#4f8ef7",
    period: "/ project",
    best: false,
    features: [
      "Single page / module",
      "Basic CRUD operations",
      "SQL Server database",
      "Responsive UI",
      "1 revision",
      "5-day delivery",
    ],
    cta: "Get Started",
  },
  {
    plan: "Professional",
    price: "₹15,000",
    usd: "$180",
    color: "#9b72f2",
    period: "/ project",
    best: true,
    features: [
      "Full web application",
      "REST API development",
      "Role-based auth",
      "React frontend",
      "Payment integration",
      "3 revisions",
      "15-day delivery",
    ],
    cta: "Most Popular",
  },
  {
    plan: "Enterprise",
    price: "Custom",
    usd: "Custom",
    color: "#06d6a0",
    period: "/ project",
    best: false,
    features: [
      "Large-scale systems",
      "Multi-tenant apps",
      "SignalR real-time",
      "Advanced reporting",
      "CI/CD setup",
      "Unlimited revisions",
      "Priority support",
    ],
    cta: "Contact Me",
  },
];

const platforms = [
  // { name: "Fiverr",    icon: "fas fa-tag",            color: "#1dbf73", href: "https://www.fiverr.com/"   },
  // { name: "Upwork",    icon: "fas fa-briefcase",       color: "#14a800", href: "https://www.upwork.com/"  },
  { name: "LinkedIn", icon: "fab fa-linkedin-in", color: "#0a66c2", href: "https://www.linkedin.com/in/niranjan-samal/" },
  { name: "Direct", icon: "fas fa-envelope", color: "#4f8ef7", href: "mailto:niranjansamal1999@gmail.com" },
];

const stag = (i) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
});

export default function Freelance() {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <section id="freelance" style={{ background: "#080e1d" }}>
      <div className="sh">
        <div className="sh-tag"><i className="fas fa-handshake" style={{ marginRight: 4 }} /> freelancing</div>
        <h2 className="sh-title">Hire Me for Your <span>Next Project</span></h2>
        <div className="sh-line" />
        <p style={{ color: "#8899b4", marginTop: "1rem", fontSize: "0.95rem", maxWidth: 560, margin: "1rem auto 0" }}>
          Available for freelance projects, remote contracts, and consulting. Let&#39;s turn your idea into a production-ready app.
        </p>
      </div>

      {/* Tab switcher */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginBottom: "3.5rem", flexWrap: "wrap" }}>
        {["services", "pricing"].map(tab => (
          <motion.button key={tab} onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
            style={{
              padding: "0.5rem 1.6rem", borderRadius: 50, border: "1px solid",
              fontWeight: 700, fontSize: "0.85rem", fontFamily: "Fira Code, monospace",
              cursor: "pointer", textTransform: "capitalize", transition: "all 0.3s",
              borderColor: activeTab === tab ? "#4f8ef7" : "#1a2844",
              background: activeTab === tab ? "rgba(79,142,247,0.12)" : "transparent",
              color: activeTab === tab ? "#6ba3f8" : "#8899b4",
              boxShadow: activeTab === tab ? "0 0 20px rgba(79,142,247,0.15)" : "none",
            }}>
            <i className={`fas fa-${tab === "services" ? "cogs" : "tags"}`} style={{ marginRight: 6 }} />
            {tab}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">

        {/* ── SERVICES TAB ── */}
        {activeTab === "services" && (
          <motion.div key="services"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: "1.5rem" }}>
              {services.map((s, i) => (
                <motion.div key={i} {...stag(i)}
                  whileHover={{ y: -8, boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px ${s.color}44` }}
                  style={{ background: "#0c1428", border: "1px solid #1a2844", borderRadius: 16, padding: "1.75rem", transition: "border-color 0.3s, box-shadow 0.35s", cursor: "default" }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = `${s.color}77`}
                  onMouseLeave={e => e.currentTarget.style.borderColor = "#1a2844"}>

                  <motion.div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}15`, border: `1px solid ${s.color}33`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, fontSize: "1.3rem", marginBottom: "1.1rem" }}
                    whileHover={{ scale: 1.15, rotate: [0, -8, 8, 0] }} transition={{ duration: 0.4 }}>
                    <i className={s.icon} />
                  </motion.div>

                  <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "#f0f6ff", marginBottom: "0.6rem" }}>{s.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "#8899b4", lineHeight: 1.75, marginBottom: "1.2rem" }}>{s.desc}</p>

                  <ul style={{ listStyle: "none", padding: 0 }}>
                    {s.features.map((f, j) => (
                      <li key={j} style={{ fontSize: "0.82rem", color: "#8899b4", padding: "0.2rem 0", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <i className="fas fa-check" style={{ color: s.color, fontSize: "0.65rem" }} />{f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── PRICING TAB ── */}
        {activeTab === "pricing" && (
          <motion.div key="pricing"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.75rem", maxWidth: 960, margin: "0 auto" }}>
              {pricing.map((p, i) => (
                <motion.div key={i} {...stag(i)}
                  whileHover={{ y: -10 }}
                  style={{ background: p.best ? "linear-gradient(135deg,rgba(79,142,247,0.1),rgba(155,114,242,0.1))" : "#0c1428", border: `1px solid ${p.best ? p.color + "88" : "#1a2844"}`, borderRadius: 18, padding: "2rem", position: "relative", overflow: "hidden", transition: "box-shadow 0.35s", boxShadow: p.best ? `0 0 40px ${p.color}22` : "none" }}>

                  {p.best && (
                    <div style={{ position: "absolute", top: 16, right: 16, background: "linear-gradient(135deg,#4f8ef7,#9b72f2)", color: "#fff", fontSize: "0.68rem", fontWeight: 800, padding: "0.2rem 0.75rem", borderRadius: 50, fontFamily: "Fira Code, monospace" }}>
                      ⭐ POPULAR
                    </div>
                  )}

                  {/* Glow blob */}
                  <motion.div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: `${p.color}18`, filter: "blur(30px)", pointerEvents: "none" }}
                    animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 3, repeat: Infinity }} />

                  <div style={{ fontFamily: "Fira Code, monospace", fontSize: "0.75rem", color: p.color, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>{p.plan}</div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.8rem", fontWeight: 900, color: "#f0f6ff" }}>{p.price}</span>
                    <span style={{ color: "#8899b4", fontSize: "0.85rem", marginLeft: "0.3rem" }}>{p.period}</span>
                    <div style={{ fontSize: "0.78rem", color: "#8899b4", fontFamily: "Fira Code, monospace", marginTop: "0.2rem" }}>≈ {p.usd} USD</div>
                  </div>

                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.75rem" }}>
                    {p.features.map((f, j) => (
                      <li key={j} style={{ fontSize: "0.88rem", color: "#8899b4", padding: "0.4rem 0", display: "flex", alignItems: "center", gap: "0.6rem", borderBottom: "1px solid #1a2844" }}>
                        <i className="fas fa-check-circle" style={{ color: p.color, fontSize: "0.75rem", flexShrink: 0 }} />{f}
                      </li>
                    ))}
                  </ul>

                  <motion.a href="#contact"
                    whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                    style={{
                      display: "block", textAlign: "center", padding: "0.85rem", borderRadius: 10, fontWeight: 800, fontSize: "0.9rem", textDecoration: "none", transition: "all 0.3s", cursor: "pointer",
                      background: p.best ? `linear-gradient(135deg, #4f8ef7, #9b72f2)` : "transparent",
                      border: p.best ? "none" : `1px solid ${p.color}`,
                      color: p.best ? "#fff" : p.color,
                      boxShadow: p.best ? "0 8px 30px rgba(79,142,247,0.3)" : "none",
                    }}>
                    {p.cta} <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem", marginLeft: 4 }} />
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Available on platforms ── */}
      <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ marginTop: "5rem", textAlign: "center" }}>
        <p style={{ color: "#8899b4", fontSize: "0.82rem", fontFamily: "Fira Code, monospace", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
          Available on
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          {platforms.map((p, i) => (
            <motion.a key={i} href={p.href} target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.08, y: -4, borderColor: p.color, boxShadow: `0 8px 24px ${p.color}22` }}
              whileTap={{ scale: 0.96 }}
              style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.65rem 1.4rem", background: "#0c1428", border: "1px solid #1a2844", borderRadius: 12, textDecoration: "none", color: "#dde6f0", fontWeight: 700, fontSize: "0.88rem", transition: "all 0.3s", cursor: "pointer" }}>
              <i className={p.icon} style={{ color: p.color, fontSize: "1rem" }} />{p.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* ── CTA banner ── */}
      <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
        style={{ marginTop: "4rem", background: "linear-gradient(135deg,rgba(79,142,247,0.08),rgba(155,114,242,0.08))", border: "1px solid rgba(79,142,247,0.2)", borderRadius: 20, padding: "3rem 2rem", textAlign: "center", position: "relative", overflow: "hidden" }}>

        <motion.div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 50%, rgba(79,142,247,0.06) 0%, transparent 70%)", pointerEvents: "none" }}
          animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 5, repeat: Infinity }} />

        <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#f0f6ff", marginBottom: "0.75rem" }}>
          Have a project in mind? 🚀
        </h3>
        <p style={{ color: "#8899b4", maxWidth: 500, margin: "0 auto 2rem", lineHeight: 1.85, fontSize: "0.95rem" }}>
          I&#39;m available for freelance work and open to exciting opportunities. Let&#39;s discuss your project!
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
          <motion.a href="#contact" className="btn-p" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }} style={{ cursor: "pointer" }}>
            <i className="fas fa-paper-plane" /> Start a Project
          </motion.a>
          <motion.a href="mailto:niranjansamal1999@gmail.com" className="btn-o" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }} style={{ cursor: "pointer" }}>
            <i className="fas fa-envelope" /> Email Directly
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
