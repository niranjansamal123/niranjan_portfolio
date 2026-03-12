import { motion } from "framer-motion";

const skills = [
  { name: "C#",                    pct: 95, c: "#4f8ef7" },
  { name: "ASP.NET Core",          pct: 90, c: "#9b72f2" },
  { name: "ASP.NET MVC / Web API", pct: 85, c: "#06d6a0" },
  { name: "SQL Server / EF Core",  pct: 80, c: "#fbbf24" },
  { name: "React.js",              pct: 75, c: "#f472b6" },
  { name: "HTML / CSS / JS",       pct: 85, c: "#4f8ef7" },
  { name: "SignalR",               pct: 78, c: "#9b72f2" },
];

const tags = ["ASP.NET Core","C#","Entity Framework","Web API","ADO.NET","SQL Server","React.js","SignalR","Bootstrap","jQuery","AJAX","Git","LINQ","WPF","Angular","REST API","VS 2022"];

const info = [
  ["Name","Niranjan Samal"],["Role",".NET Developer"],
  ["Email","niranjansamal1999@gmail.com"],["Location","Odisha, India"],
  ["Experience","2+ Years"],["Education","MCA"],
];

export default function About() {
  return (
    <section id="about" style={{ background: "#050914" }}>
      <div className="sh">
        <div className="sh-tag"><i className="fas fa-user-code" style={{ marginRight: 4 }} />about me</div>
        <h2 className="sh-title">Who Am <span>I?</span></h2>
        <div className="sh-line" />
      </div>

      <div className="two-col">
        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(1.2rem,2.5vw,1.5rem)", fontWeight: 800, color: "#f0f6ff", marginBottom: "1rem" }}>
            Passionate Developer &amp; Problem Solver
          </h3>
          <p style={{ color: "#8899b4", lineHeight: 1.9, marginBottom: "1rem", fontSize: "clamp(0.85rem,1.8vw,0.97rem)" }}>
            I&#39;m a motivated <span style={{ color: "#4f8ef7", fontWeight: 600 }}>MCA graduate</span> and Full Stack .NET Developer
            with 2+ years at <span style={{ color: "#4f8ef7", fontWeight: 600 }}>B2World (BTOW Pvt. Ltd.)</span>.
            I specialize in enterprise-grade web applications — from loan management systems to real-time election tracking apps.
          </p>
          <p style={{ color: "#8899b4", lineHeight: 1.9, marginBottom: "2rem", fontSize: "clamp(0.85rem,1.8vw,0.97rem)" }}>
            I love clean architecture, efficient database design, and turning complex business requirements into elegant, maintainable code.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.85rem 1.2rem", marginBottom: "2rem" }}>
            {info.map(([l, v]) => (
              <div key={l} style={{ borderLeft: "2px solid #1a2844", paddingLeft: "0.7rem" }}>
                <div style={{ fontSize: "0.7rem", color: "#4f8ef7", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "Fira Code, monospace" }}>{l}</div>
                <div style={{ color: "#f0f6ff", fontWeight: 600, marginTop: "0.12rem", fontSize: "0.85rem", wordBreak: "break-word" }}>{v}</div>
              </div>
            ))}
          </div>

          <motion.a href="resume/Niranjan-samal-Resume.pdf" download className="btn-p"
            whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
            style={{ cursor: "pointer", display: "inline-flex" }}>
            <i className="fas fa-download" /> Download Resume
          </motion.a>
        </motion.div>

        {/* Right */}
        <motion.div initial={{ opacity: 0, x: 36 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#f0f6ff", marginBottom: "1.4rem" }}>Technical Proficiency</h3>
          {skills.map((s, i) => (
            <div key={s.name} style={{ marginBottom: "1.2rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.86rem", marginBottom: "0.45rem" }}>
                <span style={{ color: "#dde6f0", fontWeight: 600 }}>{s.name}</span>
                <span style={{ color: s.c, fontFamily: "Fira Code, monospace", fontSize: "0.78rem" }}>{s.pct}%</span>
              </div>
              <div style={{ height: 5, background: "#1a2844", borderRadius: 10, overflow: "hidden" }}>
                <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.pct}%` }} viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%", borderRadius: 10, background: `linear-gradient(90deg,${s.c},${s.c}aa)`, boxShadow: `0 0 8px ${s.c}55` }} />
              </div>
            </div>
          ))}

          <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#f0f6ff", marginTop: "2rem", marginBottom: "1rem" }}>Technologies</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {tags.map((t, i) => (
              <motion.span key={t} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}
                whileHover={{ scale: 1.1, background: "rgba(79,142,247,0.2)", borderColor: "#4f8ef7" }}
                style={{ background: "rgba(79,142,247,0.07)", border: "1px solid rgba(79,142,247,0.2)", color: "#6ba3f8", padding: "0.28rem 0.75rem", borderRadius: 50, fontSize: "0.76rem", fontWeight: 600, cursor: "pointer", transition: "all 0.3s" }}>
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
