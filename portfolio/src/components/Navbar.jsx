import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Experience", "Projects", "Freelance", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 60);
      document.querySelectorAll("section[id]").forEach(s => {
        if (window.scrollY >= s.offsetTop - 130) setActive(s.id);
      });
    };
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // close menu on resize to desktop
  useEffect(() => {
    const fn = () => { if (window.innerWidth > 768) setOpen(false); };
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -90, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, width: "100%", zIndex: 1000,
          background: scrolled ? "rgba(5,9,20,0.97)" : "rgba(5,9,20,0.65)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled ? "1px solid rgba(26,40,68,0.9)" : "1px solid transparent",
          padding: "0 5%", display: "flex", alignItems: "center",
          justifyContent: "space-between", height: 64,
          transition: "background 0.4s, border 0.4s",
        }}>

        {/* Logo */}
        <motion.a href="#hero" whileHover={{ scale: 1.04 }}
          style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 800, fontSize: "1.2rem", color: "#f0f6ff", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.45rem", cursor: "pointer", flexShrink: 0 }}>
          {/* <span style={{ display: "inline-flex", width: 30, height: 30, borderRadius: 8, background: "linear-gradient(135deg,#4f8ef7,#9b72f2)", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: 800, color: "#fff", flexShrink: 0 }}>N</span> */}
          <span>Niranjan<span style={{ color: "#4f8ef7" }}>.</span></span>
        </motion.a>

        {/* Desktop links */}
        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0 }} className="desk-links">
          {links.map((l, i) => (
            <motion.li key={l} initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 * i + 0.3 }}>
              <a href={`#${l.toLowerCase()}`}
                style={{ color: active === l.toLowerCase() ? "#f0f6ff" : "#8899b4", textDecoration: "none", fontSize: "0.86rem", fontWeight: 600, position: "relative", paddingBottom: 4, transition: "color 0.3s", cursor: "pointer" }}>
                <span style={{ color: "#4f8ef7", fontFamily: "Fira Code, monospace", fontSize: "0.68rem", marginRight: "0.2rem" }}>0{i + 1}.</span>{l}
                {active === l.toLowerCase() && (
                  <motion.span layoutId="ul" style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg,#4f8ef7,#9b72f2)", borderRadius: 2 }} />
                )}
              </a>
            </motion.li>
          ))}
        </ul>

        <motion.a href="resume/Niranjan-samal-Resume.pdf" download className="desk-links"
          style={{ background: "transparent", border: "1px solid #4f8ef7", color: "#4f8ef7", padding: "0.4rem 1rem", borderRadius: 8, fontSize: "0.82rem", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "0.4rem", cursor: "pointer", whiteSpace: "nowrap" }}
          whileHover={{ background: "rgba(79,142,247,0.1)", scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <i className="fas fa-download" />Resume
        </motion.a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)}
          style={{ cursor: "pointer", display: "none", flexDirection: "column", gap: 5, padding: "6px 4px", background: "transparent", border: "none", outline: "none" }}
          className="mob-btn" aria-label="Toggle menu">
          {[0, 1, 2].map(i => (
            <motion.span key={i} style={{ width: 22, height: 2, background: "#dde6f0", borderRadius: 2, display: "block" }}
              animate={{ rotate: open && i === 0 ? 45 : open && i === 2 ? -45 : 0, y: open && i === 0 ? 7 : open && i === 2 ? -7 : 0, opacity: open && i === 1 ? 0 : 1 }} />
          ))}
        </button>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{ position: "fixed", top: 64, left: 0, right: 0, background: "rgba(5,9,20,0.99)", borderBottom: "1px solid #1a2844", padding: "1.25rem 5% 1.5rem", zIndex: 999, backdropFilter: "blur(20px)" }}>
            {links.map((l, i) => (
              <motion.a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 }}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", padding: "0.85rem 0", color: active === l.toLowerCase() ? "#4f8ef7" : "#dde6f0", textDecoration: "none", fontWeight: 700, fontSize: "1rem", borderBottom: "1px solid #0c1428", cursor: "pointer" }}>
                <span style={{ color: "#4f8ef7", fontFamily: "Fira Code, monospace", fontSize: "0.7rem", minWidth: 20 }}>0{i + 1}.</span>{l}
              </motion.a>
            ))}
            <motion.a href="resume/Niranjan-samal-Resume.pdf" download
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginTop: "1.1rem", color: "#4f8ef7", fontWeight: 700, fontSize: "0.9rem", textDecoration: "none", cursor: "pointer" }}>
              <i className="fas fa-download" /> Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desk-links { display: none !important; }
          .mob-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mob-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
