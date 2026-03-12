import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer style={{ background:"#080e1d", borderTop:"1px solid #1a2844", padding:"2.5rem 8%", textAlign:"center" }}>
      <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
        <div style={{ fontFamily:"Space Grotesk, sans-serif", fontWeight:800, fontSize:"1.1rem", color:"#f0f6ff", marginBottom:"0.5rem" }}>
          Niranjan<span style={{ color:"#4f8ef7" }}>.</span>
        </div>
        <p style={{ color:"#8899b4", fontSize:"0.83rem" }}>
          Designed & Built with <span style={{ color:"#f472b6" }}>♥</span> by{" "}
          <a href="https://www.linkedin.com/in/niranjan-samal/" target="_blank" rel="noreferrer" style={{ color:"#4f8ef7", textDecoration:"none", fontWeight:700 }}>Niranjan Samal</a>
          {" "}© {new Date().getFullYear()} — All rights reserved
        </p>
      </motion.div>
    </footer>
  );
}
