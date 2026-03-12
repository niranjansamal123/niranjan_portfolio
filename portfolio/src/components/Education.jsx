import { motion } from "framer-motion";

const edu = [
  { icon:"🎓", degree:"Master of Computer Application", inst:"Krupajal Computer Academy, Bhubaneswar", year:"2020 – 2022", grade:"CGPA: 8.14", color:"#4f8ef7" },
  { icon:"📐", degree:"B.Sc. (Mathematics)",            inst:"Chitalo Degree Mahavidyalaya, Jajpur",   year:"2016 – 2019", grade:"CGPA: 6.72", color:"#9b72f2" },
  { icon:"📗", degree:"12th — Science",                 inst:"B.S.H.S. School, Saydpur",               year:"2014 – 2016", grade:"56%",        color:"#06d6a0" },
  { icon:"📘", degree:"10th Board",                     inst:"Prahallad High School, Ranapur",          year:"2014",        grade:"71%",        color:"#fbbf24" },
];

export default function Education() {
  return (
    <section id="education" style={{ background:"#080e1d" }}>
      <div className="sh">
        <div className="sh-tag"><i className="fas fa-graduation-cap" style={{marginRight:4}}/> academics</div>
        <h2 className="sh-title">My <span>Education</span></h2>
        <div className="sh-line" />
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))", gap:"1.5rem" }}>
        {edu.map((e,i)=>(
          <motion.div key={i}
            initial={{ opacity:0, y:30, rotateX:15 }} whileInView={{ opacity:1, y:0, rotateX:0 }}
            viewport={{ once:true }} transition={{ delay:i*0.12, duration:0.65, ease:[0.22,1,0.36,1] }}
            whileHover={{ y:-8, boxShadow:`0 20px 40px rgba(0,0,0,0.5), 0 0 0 1px ${e.color}44` }}
            style={{ background:"#0c1428", border:"1px solid #1a2844", borderRadius:16, padding:"1.75rem", transition:"border-color 0.35s, box-shadow 0.35s", cursor:"none", overflow:"hidden", position:"relative" }}
            onMouseEnter={el=>el.currentTarget.style.borderColor=`${e.color}77`}
            onMouseLeave={el=>el.currentTarget.style.borderColor="#1a2844"}>

            <motion.div style={{ position:"absolute", top:0, right:0, width:80, height:80, background:`radial-gradient(circle, ${e.color}18 0%, transparent 70%)`, pointerEvents:"none" }}
              animate={{ scale:[1,1.4,1] }} transition={{ duration:3, repeat:Infinity, delay:i*0.5 }} />

            <div style={{ fontSize:"2rem", marginBottom:"1.1rem" }}>{e.icon}</div>
            <div style={{ fontFamily:"Space Grotesk, sans-serif", fontSize:"1.05rem", fontWeight:800, color:"#f0f6ff", marginBottom:"0.35rem", lineHeight:1.3 }}>{e.degree}</div>
            <div style={{ fontSize:"0.85rem", color:e.color, fontWeight:600, marginBottom:"1rem" }}>{e.inst}</div>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
              <span style={{ fontSize:"0.78rem", color:"#8899b4", fontFamily:"Fira Code, monospace" }}>{e.year}</span>
              <span style={{ fontSize:"0.82rem", color:e.color, fontFamily:"Fira Code, monospace", fontWeight:700, background:`${e.color}15`, border:`1px solid ${e.color}33`, padding:"0.2rem 0.6rem", borderRadius:50 }}>{e.grade}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
