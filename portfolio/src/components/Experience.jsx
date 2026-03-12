import { motion } from "framer-motion";

const exp = [
  {
    role: ".NET Developer",
    company: "B2World — BTOW Pvt. Ltd.",
    date: "Dec 2023 – Present",
    location: "Hyderabad, India",
    color: "#4f8ef7",
    points: [
      "Architected and delivered 5+ full-stack enterprise web applications using ASP.NET Core, C#, and SQL Server.",
      "Built RESTful APIs for loan management, school management, email marketing, and election tracking systems.",
      "Implemented real-time features with SignalR for live dashboards and notifications.",
      "Integrated payment gateways, email/SMS APIs, and third-party services for client apps.",
      "Designed normalized SQL Server schemas, stored procedures, EF Core migrations, and optimized complex queries.",
      "Collaborated on frontend improvements (React.js, Bootstrap) — boosting user engagement by 20%.",
      "Developed WPF desktop tool (AutoBackupGit) for automated GitHub backups with task scheduling.",
    ],
    tags: ["ASP.NET Core","C#","React","SQL Server","SignalR","EF Core","WPF"],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ background:"#080e1d" }}>
      <div className="sh">
        <div className="sh-tag"><i className="fas fa-briefcase" style={{marginRight:4}}/> work history</div>
        <h2 className="sh-title">My <span>Experience</span></h2>
        <div className="sh-line" />
      </div>

      <div style={{ position:"relative", paddingLeft:"2rem", maxWidth:860, margin:"0 auto" }}>
        {/* Timeline line */}
        <motion.div initial={{ height:0 }} whileInView={{ height:"100%" }} viewport={{ once:true }} transition={{ duration:1.2, ease:"easeOut" }}
          style={{ position:"absolute", left:0, top:0, width:2, background:"linear-gradient(to bottom,#4f8ef7,#9b72f2,transparent)", borderRadius:2, originY:0 }} />

        {exp.map((e,i)=>(
          <motion.div key={i} initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.75, delay:0.2, ease:[0.22,1,0.36,1] }}
            style={{ position:"relative", marginBottom:"2rem" }}>

            {/* Dot */}
            <motion.div initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }} transition={{ delay:0.4, type:"spring", stiffness:200 }}
              style={{ position:"absolute", left:"-2.85rem", top:"1.2rem", width:16, height:16, background:"linear-gradient(135deg,#4f8ef7,#9b72f2)", border:"3px solid #080e1d", borderRadius:"50%", boxShadow:"0 0 16px rgba(79,142,247,0.6), 0 0 32px rgba(79,142,247,0.2)" }} />

            <motion.div whileHover={{ x:6 }} transition={{ type:"spring", stiffness:300 }}
              style={{ background:"#0c1428", border:"1px solid #1a2844", borderRadius:16, padding:"2rem", transition:"border-color 0.3s, box-shadow 0.3s" }}
              onMouseEnter={el=>{ el.currentTarget.style.borderColor="#4f8ef7"; el.currentTarget.style.boxShadow="0 0 40px rgba(79,142,247,0.12)"; }}
              onMouseLeave={el=>{ el.currentTarget.style.borderColor="#1a2844"; el.currentTarget.style.boxShadow="none"; }}>

              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", flexWrap:"wrap", gap:"0.75rem", marginBottom:"0.5rem" }}>
                <div>
                  <h3 style={{ fontFamily:"Space Grotesk, sans-serif", fontSize:"1.3rem", fontWeight:800, color:"#f0f6ff" }}>{e.role}</h3>
                  <div style={{ color:"#4f8ef7", fontWeight:600, marginTop:"0.2rem", display:"flex", alignItems:"center", gap:"0.5rem", fontSize:"0.92rem" }}>
                    <i className="fas fa-building" style={{ fontSize:"0.8rem" }} />{e.company}
                    <span style={{ color:"#8899b4", fontSize:"0.8rem" }}><i className="fas fa-map-marker-alt" style={{ marginRight:3 }} />{e.location}</span>
                  </div>
                </div>
                <motion.span initial={{ scale:0 }} whileInView={{ scale:1 }} viewport={{ once:true }} transition={{ delay:0.6, type:"spring" }}
                  style={{ fontFamily:"Fira Code, monospace", fontSize:"0.76rem", color:"#06d6a0", background:"rgba(6,214,160,0.08)", border:"1px solid rgba(6,214,160,0.25)", padding:"0.25rem 0.85rem", borderRadius:50, whiteSpace:"nowrap", display:"flex", alignItems:"center", gap:"0.35rem" }}>
                  <span style={{ width:6, height:6, background:"#06d6a0", borderRadius:"50%", display:"inline-block" }} />{e.date}
                </motion.span>
              </div>

              <ul style={{ listStyle:"none", padding:0, margin:"1.2rem 0" }}>
                {e.points.map((p,j)=>(
                  <motion.li key={j} initial={{ opacity:0, x:-12 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:j*0.08+0.4 }}
                    style={{ color:"#8899b4", fontSize:"0.9rem", lineHeight:1.8, paddingLeft:"1.2rem", position:"relative", marginBottom:"0.5rem" }}>
                    <span style={{ position:"absolute", left:0, color:"#4f8ef7", fontWeight:700 }}>▹</span>{p}
                  </motion.li>
                ))}
              </ul>

              <div style={{ display:"flex", flexWrap:"wrap", gap:"0.45rem", paddingTop:"1rem", borderTop:"1px solid #1a2844" }}>
                {e.tags.map(t=><span key={t} className="pstack">{t}</span>)}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
