import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
    title: "Loan Management System",
    stack: ["ASP.NET Core", "C#", "SQL Server", "EF Core", "SignalR"],
    desc: "Enterprise system managing loans, repayments, attendance, salary, and leave with role-based access control.",
    github: "https://github.com/niranjansamal123",
    live: "https://nidhi.marindrive.in/",
    cat: "Enterprise", color: "#4f8ef7",
  },
  {
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    title: "School Management System",
    stack: ["ASP.NET Core", "Multi-Tenant", "SQL Server", "Bootstrap"],
    desc: "Multi-tenant platform for student management, exam scheduling, teacher management, fee tracking, and admin dashboard.",
    github: "https://github.com/niranjansamal123",
    live: "https://school.marindrive.in/",
    cat: "Enterprise", color: "#9b72f2",
  },
  {
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
    title: "Election Tracking App",
    stack: ["ASP.NET Core", "React", "SignalR", "SQL Server"],
    desc: "Real-time election & voting app with live result updates, constituency management, and voter surveys via SignalR.",
    github: "https://github.com/niranjansamal123",
    live: "https://bihar.com.co/",
    cat: "React", color: "#06d6a0",
  },
  {
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80",
    title: "Hospital Management System",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "Bootstrap"],
    desc: "Admin, Doctor & Patient role-based system streamlining hospital operations and healthcare service quality.",
    github: "https://github.com/niranjansamal123/Hospital-Management-System",
    live: "",
    cat: "Enterprise", color: "#f472b6",
  },
  {
    img: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
    title: "Email Marketing App",
    stack: ["ASP.NET Core", "C#", "Email API", "Analytics"],
    desc: "Campaign management with recipient lists, email scheduling, delivery tracking, and analytics dashboard.",
    github: "https://github.com/niranjansamal123",
    live: "https://mailmarketing.b2world.info/",
    cat: "Enterprise", color: "#fbbf24",
  },
  {
    img: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=80",
    title: "AutoBackupGit",
    stack: ["WPF", "C#", "GitHub API", "Scheduler"],
    desc: "Windows desktop app for automated GitHub backups with task scheduling and configurable intervals.",
    github: "https://github.com/niranjansamal123",
    live: "",
    cat: "Desktop", color: "#4f8ef7",
  },
  {
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80",
    title: "Library Management System",
    stack: ["ASP.NET MVC", "C#", "SQL Server", "EF"],
    desc: "Comprehensive library resource management with book tracking, member management, and fine calculation.",
    github: "https://github.com/niranjansamal123/LibraryManagementMVC",
    live: "",
    cat: "Enterprise", color: "#9b72f2",
  },
  {
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    title: "E-Bill Management System",
    stack: ["ASP.NET MVC", "C#", "SQL Server"],
    desc: "Streamlined bill generation, payment tracking, and reporting with secure SQL Server storage.",
    github: "https://github.com/niranjansamal123/EBill",
    live: "https://ebill.marindrive.in/",
    cat: "Enterprise", color: "#06d6a0",
  },
  {
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "Inventory Management",
    stack: ["ASP.NET MVC", "ADO.NET", "SQL Server", "CRUD"],
    desc: "Full CRUD operations for products and customers with ADO.NET and efficient SQL data handling.",
    github: "https://github.com/niranjansamal123/Inventory",
    live: "",
    cat: "Enterprise", color: "#fbbf24",
  },
];

const filters = ["All", "Enterprise", "React", "Desktop"];

export default function Projects() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState(null);
  const filtered = active === "All" ? projects : projects.filter(p => p.cat === active);

  return (
    <section id="projects" style={{ background: "#050914" }}>
      <div className="sh">
        <div className="sh-tag"><i className="fas fa-folder-open" style={{ marginRight: 4 }} /> portfolio</div>
        <h2 className="sh-title">Featured <span>Projects</span></h2>
        <div className="sh-line" />
      </div>

      {/* Filter Pills */}
      <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3.5rem" }}>
        {filters.map(f => (
          <motion.button key={f} onClick={() => setActive(f)}
            whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.95 }}
            style={{
              padding: "0.45rem 1.3rem", borderRadius: 50, border: "1px solid", cursor: "pointer",
              fontWeight: 700, fontSize: "0.83rem", fontFamily: "Fira Code, monospace", transition: "all 0.3s",
              borderColor: active === f ? "#4f8ef7" : "#1a2844",
              background: active === f ? "rgba(79,142,247,0.12)" : "transparent",
              color: active === f ? "#6ba3f8" : "#8899b4",
              boxShadow: active === f ? "0 0 20px rgba(79,142,247,0.15)" : "none",
            }}>
            {active === f && <span style={{ marginRight: 4 }}>▸</span>}{f}
          </motion.button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div layout style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "1.75rem" }}>
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout
                initial={{ opacity: 0, scale: 0.88, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 20 }}
                transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -10 }}
                onHoverStart={() => setHovered(p.title)}
                onHoverEnd={() => setHovered(null)}
                style={{
                  background: "#0c1428", borderRadius: 16, overflow: "hidden",
                  border: `1px solid ${hovered === p.title ? p.color + "77" : "#1a2844"}`,
                  boxShadow: hovered === p.title ? `0 24px 50px rgba(0,0,0,0.6), 0 0 0 1px ${p.color}33` : "none",
                  display: "flex", flexDirection: "column", cursor: "pointer",
                  transition: "border-color 0.3s, box-shadow 0.35s",
                }}>

                {/* ── Image with overlay ── */}
                <div style={{ height: 190, position: "relative", overflow: "hidden" }}>
                  <motion.img
                    src={p.img}
                    alt={p.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    animate={{ scale: hovered === p.title ? 1.08 : 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    loading="lazy"
                  />
                  {/* Dark overlay always */}
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(5,9,20,0.15) 0%, rgba(5,9,20,0.75) 100%)" }} />
                  {/* Color tint on hover */}
                  <motion.div style={{ position: "absolute", inset: 0, background: `${p.color}22` }}
                    animate={{ opacity: hovered === p.title ? 1 : 0 }} transition={{ duration: 0.35 }} />
                  {/* Category badge */}
                  <span style={{ position: "absolute", top: "0.7rem", right: "0.8rem", fontFamily: "Fira Code, monospace", fontSize: "0.65rem", color: p.color, background: `rgba(5,9,20,0.85)`, border: `1px solid ${p.color}44`, padding: "0.2rem 0.6rem", borderRadius: 50, backdropFilter: "blur(6px)" }}>
                    {p.cat}
                  </span>
                  {/* Live / GitHub icons on hover */}
                  <motion.div style={{ position: "absolute", bottom: "0.8rem", right: "0.8rem", display: "flex", gap: "0.5rem" }}
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: hovered === p.title ? 1 : 0, y: hovered === p.title ? 0 : 10 }} transition={{ duration: 0.3 }}>
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noreferrer"
                        style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(5,9,20,0.9)", border: `1px solid ${p.color}55`, display: "flex", alignItems: "center", justifyContent: "center", color: p.color, textDecoration: "none", fontSize: "0.85rem", backdropFilter: "blur(6px)", cursor: "pointer" }}
                        title="Live Demo">
                        <i className="fas fa-external-link-alt" />
                      </a>
                    )}
                    <a href={p.github} target="_blank" rel="noreferrer"
                      style={{ width: 34, height: 34, borderRadius: 8, background: "rgba(5,9,20,0.9)", border: "1px solid #243556", display: "flex", alignItems: "center", justifyContent: "center", color: "#dde6f0", textDecoration: "none", fontSize: "0.85rem", backdropFilter: "blur(6px)", cursor: "pointer" }}
                      title="GitHub">
                      <i className="fab fa-github" />
                    </a>
                  </motion.div>
                </div>

                {/* ── Body ── */}
                <div style={{ padding: "1.35rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "0.8rem" }}>
                    {p.stack.map(s => <span key={s} className="pstack">{s}</span>)}
                  </div>
                  <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 800, color: "#f0f6ff", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.86rem", color: "#8899b4", lineHeight: 1.75, flex: 1 }}>{p.desc}</p>

                  {/* Footer links */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1.2rem", paddingTop: "1rem", borderTop: "1px solid #1a2844" }}>
                    <motion.a href={p.github} target="_blank" rel="noreferrer"
                      style={{ color: "#8899b4", textDecoration: "none", fontSize: "0.84rem", display: "flex", alignItems: "center", gap: "0.4rem", cursor: "pointer" }}
                      whileHover={{ color: "#6ba3f8", x: 3 }}>
                      <i className="fab fa-github" /> Source Code
                    </motion.a>
                    {p.live ? (
                      <motion.a href={p.live} target="_blank" rel="noreferrer"
                        style={{ color: p.color, textDecoration: "none", fontSize: "0.84rem", display: "flex", alignItems: "center", gap: "0.4rem", cursor: "pointer", fontWeight: 600 }}
                        whileHover={{ x: 3 }}>
                        Live Demo <i className="fas fa-arrow-right" style={{ fontSize: "0.72rem" }} />
                      </motion.a>
                    ) : (
                      <span style={{ fontSize: "0.75rem", color: "#4a5e7a", fontFamily: "Fira Code, monospace", background: "#0c1428", border: "1px solid #1a2844", padding: "0.2rem 0.6rem", borderRadius: 6 }}>
                        Private / Internal
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ textAlign: "center", marginTop: "3rem" }}>
        <motion.a href="https://github.com/niranjansamal123" target="_blank" rel="noreferrer"
          className="btn-o" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }} style={{ cursor: "pointer" }}>
          <i className="fab fa-github" /> View All on GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}
