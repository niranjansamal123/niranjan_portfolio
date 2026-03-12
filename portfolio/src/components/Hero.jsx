import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function ParticleCanvas() {
  const ref = useRef();
  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = document.documentElement.clientWidth;
    let H = canvas.height = window.innerHeight;
    const resize = () => {
      W = canvas.width = document.documentElement.clientWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 70 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      a: Math.random(),
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(107,163,248,${p.a * 0.6})`;
        ctx.fill();
      });
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,142,247,${(1 - dist / 120) * 0.12})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return (
    <canvas
      ref={ref}
      style={{
        position: "absolute", top: 0, left: 0,
        width: "100%", height: "100%",
        zIndex: 0, pointerEvents: "none",
        display: "block",
      }}
    />
  );
}

const stag = i => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] },
});

const socials = [
  { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/niranjan-samal/", color: "#0a66c2" },
  { icon: "fab fa-github", href: "https://github.com/niranjansamal123", color: "#fff" },
  { icon: "fas fa-envelope", href: "mailto:niranjansamal1999@gmail.com", color: "#ea4335" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/de_coder07/", color: "#e1306c" },
];

const badges = [
  { t: "10+ Projects", icon: "fas fa-code", c: "#06d6a0", top: "2%", right: "-38%", dur: 3.5 },
  { t: "8 Certs", icon: "fas fa-certificate", c: "#4f8ef7", btm: "18%", left: "-38%", dur: 4 },
  { t: "2+ Yrs Exp", icon: "fas fa-star", c: "#9b72f2", btm: "38%", right: "-40%", dur: 4.5 },
  { t: "B2World", icon: "fas fa-building", c: "#fbbf24", top: "40%", left: "-34%", dur: 3 },
];

export default function Hero() {
  return (
    <>
      <style>{`
        html, body {
          overflow-x: hidden;
          max-width: 100%;
        }

        .hero-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 90px 8% 60px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
          max-width: 100vw;
        }

        .hero-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          gap: 4rem;
          box-sizing: border-box;
        }

        .hero-left {
          flex: 1;
          min-width: 0;
          overflow: hidden;
        }

        .hero-right {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .avatar-wrap {
          width: 280px;
          height: 280px;
          position: relative;
        }

        .hero-socials {
          display: flex;
          gap: 0.7rem;
          margin-bottom: 0;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(26,40,68,0.6);
        }

        .float-badge {
          position: absolute;
          background: rgba(15,26,48,0.95);
          border-radius: 10px;
          padding: 0.45rem 0.85rem;
          font-size: 0.74rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          z-index: 10;
          white-space: nowrap;
          backdrop-filter: blur(12px);
        }

        /* ── TABLET ── */
        @media (max-width: 1024px) {
          .hero-inner { gap: 2.5rem; }
          .avatar-wrap { width: 230px; height: 230px; }
        }

        /* ── MOBILE ── */
        @media (max-width: 768px) {
          .hero-section {
            padding: 90px 5% 50px;
            min-height: auto;
          }
          .hero-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 2rem;
          }
          .hero-right {
            order: -1;
            width: 100%;
            overflow: visible;
          }
          .avatar-wrap { width: 190px; height: 190px; }
          .hero-socials { justify-content: center; }
          .hero-actions { justify-content: center !important; }
          .float-badge  { display: none !important; }
        }

        @media (max-width: 480px) {
          .hero-section { padding: 80px 4% 40px; }
          .avatar-wrap  { width: 160px; height: 160px; }
        }
      `}</style>

      <section id="hero" className="hero-section">
        <ParticleCanvas />

        {/* Gradient blobs — clipped inside section */}
        {[
          { w: 400, h: 400, top: "-10%", left: "55%", c: "rgba(79,142,247,0.07)" },
          { w: 300, h: 300, top: "60%", left: "5%", c: "rgba(155,114,242,0.07)" },
          { w: 200, h: 200, top: "20%", left: "30%", c: "rgba(6,214,160,0.04)" },
        ].map((b, i) => (
          <motion.div key={i}
            style={{
              position: "absolute", width: b.w, height: b.h,
              borderRadius: "50%", background: b.c,
              top: b.top, left: b.left,
              filter: "blur(80px)", zIndex: 0, pointerEvents: "none",
            }}
            animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
            transition={{ duration: 10 + i * 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        <div className="hero-inner">

          {/* ── LEFT ── */}
          <div className="hero-left">

            <motion.div {...stag(0)} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(6,214,160,0.08)", border: "1px solid rgba(6,214,160,0.25)", color: "#06d6a0", padding: "0.35rem 1rem", borderRadius: 50, fontSize: "0.78rem", fontWeight: 700, marginBottom: "1.5rem", letterSpacing: "0.06em", fontFamily: "Fira Code, monospace" }}>
              <motion.span style={{ width: 7, height: 7, background: "#06d6a0", borderRadius: "50%", display: "inline-block" }}
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.4, 1] }} transition={{ duration: 2, repeat: Infinity }} />
              Open to opportunities
            </motion.div>

            <motion.h1 {...stag(1)} style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "0.5rem", color: "#f0f6ff" }}>
              Hi, I&#39;m
            </motion.h1>
            <motion.h1 {...stag(2)} style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: "1.2rem" }}>
              <span style={{ background: "linear-gradient(135deg,#4f8ef7,#9b72f2)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Niranjan Samal</span>
            </motion.h1>

            <motion.div {...stag(3)} style={{ fontSize: "clamp(1rem, 2.2vw, 1.4rem)", fontWeight: 600, marginBottom: "1.3rem", minHeight: "2rem", color: "#dde6f0" }}>
              <TypeAnimation sequence={[
                "Full Stack .NET Developer", 2200,
                "ASP.NET Core Specialist", 2000,
                "C# & SQL Server Expert", 2000,
                "React Frontend Dev", 2000,
                "Enterprise App Builder", 2000,
              ]} speed={55} repeat={Infinity} wrapper="span"
                style={{ borderRight: "2px solid #4f8ef7", paddingRight: "4px" }} />
            </motion.div>

            <motion.p {...stag(4)} style={{ fontSize: "0.98rem", color: "#8899b4", maxWidth: 490, marginBottom: "1.8rem", lineHeight: 1.85 }}>
              2+ years crafting scalable enterprise applications at{" "}
              <span style={{ color: "#4f8ef7", fontWeight: 600 }}>B2World</span>.
              Passionate about clean architecture, real-time systems, and pixel-perfect UIs.
            </motion.p>

            <motion.div {...stag(5)} style={{ fontFamily: "Fira Code, monospace", fontSize: "0.8rem", background: "rgba(15,26,48,0.9)", border: "1px solid #1a2844", borderLeft: "3px solid #4f8ef7", borderRadius: "0 10px 10px 0", padding: "0.9rem 1.2rem", marginBottom: "2rem", lineHeight: 2, backdropFilter: "blur(8px)" }}>
              <span style={{ color: "#8899b4" }}>// 2026</span><br />
              <span style={{ color: "#9b72f2" }}>var</span> <span style={{ color: "#6ba3f8" }}>dev</span> = <span style={{ color: "#9b72f2" }}>new</span> <span style={{ color: "#06d6a0" }}>Developer</span>() {"{"}<br />
              &nbsp;&nbsp;<span style={{ color: "#dde6f0" }}>Name</span>    = <span style={{ color: "#fbbf24" }}>"Niranjan Samal"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "#dde6f0" }}>Company</span> = <span style={{ color: "#fbbf24" }}>"B2World"</span>,<br />
              &nbsp;&nbsp;<span style={{ color: "#dde6f0" }}>Stack</span>   = <span style={{ color: "#fbbf24" }}>"ASP.NET Core · C# · React · SQL"</span>,<br />
              {"}"};
            </motion.div>

            <motion.div {...stag(6)} className="hero-actions" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "2rem" }}>
              <motion.a href="#projects" className="btn-p" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                <i className="fas fa-rocket" /> View Projects
              </motion.a>
              <motion.a href="#contact" className="btn-o" whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
                <i className="fas fa-paper-plane" /> Get In Touch
              </motion.a>
            </motion.div>

            <motion.div {...stag(7)} className="hero-socials">
              {socials.map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noreferrer"
                  style={{ width: 42, height: 42, borderRadius: 10, border: "1px solid #1a2844", display: "flex", alignItems: "center", justifyContent: "center", color: "#8899b4", textDecoration: "none", fontSize: "0.95rem", transition: "color 0.3s" }}
                  whileHover={{ scale: 1.2, color: s.color, borderColor: "#243556", background: "rgba(79,142,247,0.07)", rotate: [-5, 5, 0] }}
                  whileTap={{ scale: 0.9 }}>
                  <i className={s.icon} />
                </motion.a>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT ── */}
          <motion.div className="hero-right"
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>

            <div className="avatar-wrap">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "conic-gradient(#4f8ef7, #9b72f2, #06d6a0, #4f8ef7)", zIndex: 0 }} />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                style={{ position: "absolute", inset: -12, borderRadius: "50%", background: "conic-gradient(rgba(79,142,247,0.3), transparent, rgba(155,114,242,0.3), transparent)", zIndex: 0, filter: "blur(6px)" }} />
              <div style={{ position: "absolute", inset: 2, background: "#050914", borderRadius: "50%", zIndex: 1 }} />
              <div style={{ position: "absolute", inset: 8, borderRadius: "50%", background: "linear-gradient(135deg,#0f1a30,#080e1d)", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "4rem", color: "#4f8ef7", overflow: "hidden" }}>
                {/* Replace with your photo: */}
                <img src="/images/profile.png" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }} />
                {/* <i className="fas fa-user-astronaut" /> */}
              </div>

              {badges.map((b, i) => (
                <motion.div key={i} className="float-badge"
                  style={{ top: b.top, right: b.right, bottom: b.btm, left: b.left, border: `1px solid ${b.c}33`, color: b.c, boxShadow: `0 4px 24px ${b.c}22` }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}>
                  <i className={b.icon} />{b.t}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          style={{ position: "absolute", bottom: "1.8rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem" }}>
          <span style={{ fontSize: "0.68rem", color: "#8899b4", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "Fira Code, monospace" }}>scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 22, height: 36, border: "2px solid #1a2844", borderRadius: 20, display: "flex", justifyContent: "center", paddingTop: 5 }}>
            <motion.div animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
              style={{ width: 4, height: 7, background: "#4f8ef7", borderRadius: 4 }} />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
