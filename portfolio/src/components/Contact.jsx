import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─────────────────────────────────────────────
//  ✅ REPLACE THESE 3 VALUES with your EmailJS credentials
//  1. Go to https://www.emailjs.com → Sign up free
//  2. Add a Gmail service → copy SERVICE_ID
//  3. Create email template → copy TEMPLATE_ID
//  4. Go to Account → copy PUBLIC_KEY
// ─────────────────────────────────────────────
//  For security, these should be stored in a .env file and accessed via import.meta.env
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const socials = [
  { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/in/niranjan-samal/", c: "#0a66c2", label: "LinkedIn" },
  { icon: "fab fa-github", href: "https://github.com/niranjansamal123", c: "#f0f6ff", label: "GitHub" },
  { icon: "fab fa-twitter", href: "https://twitter.com/De_Coder07", c: "#1da1f2", label: "Twitter" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/de_coder07/", c: "#e1306c", label: "Instagram" },
  { icon: "fab fa-facebook-f", href: "https://www.facebook.com/De.Coder123", c: "#1877f2", label: "Facebook" },
];

const contacts = [
  { icon: "fas fa-phone", label: "Phone", val: "+91 9337162929", href: "tel:+919337162929", c: "#06d6a0" },
  { icon: "fas fa-envelope", label: "Email", val: "niranjansamal1999@gmail.com", href: "mailto:niranjansamal1999@gmail.com", c: "#4f8ef7" },
  { icon: "fas fa-map-marker-alt", label: "Location", val: "Odisha, India", href: "#", c: "#9b72f2" },
];

const inp = {
  width: "100%", background: "rgba(8,14,29,0.8)", border: "1px solid #1a2844",
  borderRadius: 10, padding: "0.8rem 1.1rem", color: "#dde6f0", fontSize: "0.9rem",
  fontFamily: "Inter, sans-serif", outline: "none", transition: "border-color 0.3s, box-shadow 0.3s",
};

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ fn: "", ln: "", email: "", subject: "", msg: "" });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errMsg, setErrMsg] = useState("");

  const ch = e => setForm({ ...form, [e.target.name]: e.target.value });

  const sub = async e => {
    e.preventDefault();
    if (!form.fn || !form.email || !form.msg) return;
    setStatus("loading");

    try {
      // EmailJS sends using the <form> ref — field names must match your template variables
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ fn: "", ln: "", email: "", subject: "", msg: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setErrMsg("Something went wrong. Please try again or email me directly.");
      setStatus("error");
      setTimeout(() => setStatus("idle"), 6000);
    }
  };

  return (
    <section id="contact" style={{ background: "#050914" }}>
      <div className="sh">
        <div className="sh-tag"><i className="fas fa-satellite-dish" style={{ marginRight: 4 }} /> contact</div>
        <h2 className="sh-title">Get In <span>Touch</span></h2>
        <div className="sh-line" />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "4rem", alignItems: "start" }}>

        {/* ── LEFT INFO ── */}
        <motion.div initial={{ opacity: 0, x: -35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}>
          <h3 style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "1.6rem", fontWeight: 800, color: "#f0f6ff", marginBottom: "1rem", lineHeight: 1.3 }}>
            Let&#39;s Build Something<br />
            <span style={{ color: "#4f8ef7" }}>Amazing Together</span>
          </h3>
          <p style={{ color: "#8899b4", lineHeight: 1.9, marginBottom: "2rem", fontSize: "0.95rem" }}>
            I&#39;m open to full-time roles, freelance projects, and exciting collaborations. Drop me a message and I&#39;ll get back to you within 24 hours!
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginBottom: "2rem" }}>
            {contacts.map((c, i) => (
              <motion.a key={i} href={c.href}
                whileHover={{ x: 8, borderColor: c.c }}
                style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.3rem", background: "#0c1428", border: "1px solid #1a2844", borderRadius: 14, textDecoration: "none", transition: "border-color 0.3s", cursor: "pointer" }}>
                <motion.div style={{ width: 42, height: 42, borderRadius: 10, background: `${c.c}15`, border: `1px solid ${c.c}33`, display: "flex", alignItems: "center", justifyContent: "center", color: c.c, fontSize: "1rem", flexShrink: 0 }}
                  whileHover={{ scale: 1.15 }}>
                  <i className={c.icon} />
                </motion.div>
                <div>
                  <div style={{ fontSize: "0.72rem", color: "#8899b4", textTransform: "uppercase", letterSpacing: "0.08em", fontFamily: "Fira Code, monospace" }}>{c.label}</div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f0f6ff" }}>{c.val}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <div style={{ marginBottom: "0.75rem", fontSize: "0.8rem", color: "#8899b4", fontFamily: "Fira Code, monospace", letterSpacing: "0.08em", textTransform: "uppercase" }}>Find me on</div>
          <div style={{ display: "flex", gap: "0.7rem", flexWrap: "wrap" }}>
            {socials.map((s, i) => (
              <motion.a key={i} href={s.href} target="_blank" rel="noreferrer" title={s.label}
                style={{ width: 46, height: 46, borderRadius: 10, border: "1px solid #1a2844", display: "flex", alignItems: "center", justifyContent: "center", color: "#8899b4", textDecoration: "none", fontSize: "1rem", transition: "color 0.3s" }}
                whileHover={{ scale: 1.18, color: s.c, borderColor: `${s.c}66`, background: `${s.c}12`, y: -3 }}
                whileTap={{ scale: 0.93 }}>
                <i className={s.icon} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* ── FORM ── */}
        <motion.form
          ref={formRef}
          onSubmit={sub}
          initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ background: "#0c1428", border: "1px solid #1a2844", borderRadius: 18, padding: "2.2rem", position: "relative", overflow: "hidden" }}>

          {/* Top glow line */}
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg,transparent,#4f8ef7,transparent)" }} />

          {/* ── Success overlay ── */}
          <AnimatePresence>
            {status === "success" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ position: "absolute", inset: 0, background: "rgba(12,20,40,0.97)", borderRadius: 18, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", zIndex: 10 }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                  style={{ width: 70, height: 70, borderRadius: "50%", background: "rgba(6,214,160,0.12)", border: "2px solid #06d6a0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "#06d6a0" }}>
                  <i className="fas fa-check" />
                </motion.div>
                <p style={{ color: "#f0f6ff", fontWeight: 800, fontSize: "1.2rem" }}>Message Sent! 🎉</p>
                <p style={{ color: "#8899b4", fontSize: "0.88rem", textAlign: "center", maxWidth: 260 }}>
                  Thanks for reaching out! I&#39;ll reply to <span style={{ color: "#4f8ef7" }}>{form.email || "your email"}</span> within 24 hours.
                </p>
              </motion.div>
            )}

            {/* ── Error overlay ── */}
            {status === "error" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                style={{ position: "absolute", inset: 0, background: "rgba(12,20,40,0.97)", borderRadius: 18, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem", zIndex: 10, padding: "2rem" }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                  style={{ width: 70, height: 70, borderRadius: "50%", background: "rgba(244,114,182,0.12)", border: "2px solid #f472b6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", color: "#f472b6" }}>
                  <i className="fas fa-exclamation" />
                </motion.div>
                <p style={{ color: "#f0f6ff", fontWeight: 800, fontSize: "1.1rem" }}>Oops! Something went wrong</p>
                <p style={{ color: "#8899b4", fontSize: "0.85rem", textAlign: "center" }}>{errMsg}</p>
                <motion.button type="button" onClick={() => setStatus("idle")} whileHover={{ scale: 1.04 }}
                  style={{ background: "rgba(244,114,182,0.1)", border: "1px solid #f472b6", color: "#f472b6", padding: "0.5rem 1.5rem", borderRadius: 8, cursor: "pointer", fontWeight: 700 }}>
                  Try Again
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Name row */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
            {[["fn", "First Name *", "Niranjan", "text"], ["ln", "Last Name", "Samal", "text"]].map(([name, label, ph, type]) => (
              <div key={name}>
                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#8899b4", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{label}</label>
                <input type={type} name={name} value={form[name]} onChange={ch} placeholder={ph}
                  required={name === "fn"} style={inp}
                  onFocus={e => { e.target.style.borderColor = "#4f8ef7"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.12)"; }}
                  onBlur={e => { e.target.style.borderColor = "#1a2844"; e.target.style.boxShadow = "none"; }} />
              </div>
            ))}
          </div>

          {/* Email & Subject */}
          {[
            ["email", "Email *", "your@email.com", "email"],
            ["subject", "Subject", "Job Opportunity / Project Inquiry", "text"],
          ].map(([n, l, ph, t]) => (
            <div key={n} style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#8899b4", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>{l}</label>
              <input type={t} name={n} value={form[n]} onChange={ch} placeholder={ph}
                required={n === "email"} style={inp}
                onFocus={e => { e.target.style.borderColor = "#4f8ef7"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.12)"; }}
                onBlur={e => { e.target.style.borderColor = "#1a2844"; e.target.style.boxShadow = "none"; }} />
            </div>
          ))}

          {/* Message */}
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#8899b4", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>Message *</label>
            <textarea name="msg" value={form.msg} onChange={ch}
              placeholder="Hi Niranjan, I&#39;d love to discuss..." rows={5} required
              style={{ ...inp, resize: "vertical" }}
              onFocus={e => { e.target.style.borderColor = "#4f8ef7"; e.target.style.boxShadow = "0 0 0 3px rgba(79,142,247,0.12)"; }}
              onBlur={e => { e.target.style.borderColor = "#1a2844"; e.target.style.boxShadow = "none"; }} />
          </div>

          {/* Submit */}
          <motion.button type="submit" disabled={status === "loading"}
            whileHover={status !== "loading" ? { scale: 1.02, y: -2 } : {}}
            whileTap={status !== "loading" ? { scale: 0.98 } : {}}
            style={{ width: "100%", background: "linear-gradient(135deg,#4f8ef7,#9b72f2)", color: "#fff", border: "none", padding: "0.95rem", borderRadius: 10, fontWeight: 800, fontSize: "1rem", cursor: status === "loading" ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", boxShadow: "0 8px 30px rgba(79,142,247,0.3)", opacity: status === "loading" ? 0.8 : 1, transition: "opacity 0.3s", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.08),transparent)", transform: "skewX(-20deg)" }} />
            {status === "loading"
              ? <><i className="fas fa-spinner fa-spin" /> Sending...</>
              : <><i className="fas fa-paper-plane" /> Send Message</>}
          </motion.button>

          {/* Required note */}
          <p style={{ marginTop: "0.8rem", fontSize: "0.72rem", color: "#8899b4", textAlign: "center" }}>
            * Required fields
          </p>
        </motion.form>
      </div>
    </section>
  );
}
