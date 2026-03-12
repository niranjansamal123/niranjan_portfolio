import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Counter({ target, suffix="" }) {
  const [n, setN] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.max(1, Math.ceil(target / 50));
    const t = setInterval(() => {
      cur = Math.min(cur + step, target);
      setN(cur);
      if (cur >= target) clearInterval(t);
    }, 35);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{n}{suffix}</span>;
}

const stats = [
  { n: 2,  s: "+", label: "Years Experience", icon: "fas fa-briefcase",  c: "#4f8ef7" },
  { n: 10, s: "+", label: "Projects Built",   icon: "fas fa-code",       c: "#9b72f2" },
  { n: 8,  s: "",  label: "Certifications",   icon: "fas fa-award",      c: "#06d6a0" },
  { n: 1,  s: "",  label: "Company Worked",   icon: "fas fa-building",   c: "#fbbf24" },
];

export default function Stats() {
  return (
    <section style={{ padding: "50px 8%", background: "#080e1d", borderTop: "1px solid #1a2844", borderBottom: "1px solid #1a2844" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: "1.5rem" }}>
        {stats.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ y: -4 }}
            style={{ textAlign: "center", background: "#0c1428", border: "1px solid #1a2844", borderRadius: 14, padding: "1.5rem 1rem", transition: "border-color 0.3s, box-shadow 0.3s", cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = s.c; e.currentTarget.style.boxShadow = `0 0 24px ${s.c}22`; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#1a2844"; e.currentTarget.style.boxShadow = "none"; }}>
            <motion.i className={s.icon}
              style={{ fontSize: "1.5rem", color: s.c, marginBottom: "0.75rem", display: "block" }}
              animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }} />
            <div style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "2.2rem", fontWeight: 800, color: s.c }}>
              <Counter target={s.n} suffix={s.s} />
            </div>
            <div style={{ fontSize: "0.82rem", color: "#8899b4", marginTop: "0.3rem", fontWeight: 500 }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
