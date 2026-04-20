"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (field: string, val: string) => setForm(p => ({ ...p, [field]: val }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'm ${form.name}. Interest: ${form.interest}. ${form.message} | Email: ${form.email} | Phone: ${form.phone}`;
    window.open(`https://wa.me/923001234567?text=${encodeURIComponent(msg)}`, "_blank");
    setSent(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", background: "var(--bg3)", border: "1px solid var(--border)",
    color: "var(--text)", fontFamily: "var(--font-body)", fontSize: 14,
    padding: "14px 16px", outline: "none", transition: "border-color 0.25s",
    borderRadius: 0,
  };

  const labelStyle: React.CSSProperties = {
    display: "block", fontSize: 10, fontWeight: 500, letterSpacing: "0.25em",
    textTransform: "uppercase", color: "var(--gold-dim)", marginBottom: 8,
  };

  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container">
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>Get in Touch</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 300, color: "var(--cream)", marginBottom: "1.5rem" }}>
            Contact Us
          </h1>
          <div style={{ width: 80, height: 1, background: "var(--gold-dim)", marginBottom: "2rem" }} />
          <p style={{ fontSize: 15, color: "var(--text-muted)", maxWidth: 520, lineHeight: 1.9 }}>
            Whether you're enquiring about a kitten, stud service, or just want to learn more about our Persians —
            we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: "0 0 7rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }} className="contact-grid">

            {/* Form */}
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 300, color: "var(--cream)", marginBottom: "2rem" }}>
                Send us a message
              </h2>

              {sent ? (
                <div style={{ background: "var(--bg3)", border: "1px solid rgba(201,168,76,0.3)", padding: "3rem", textAlign: "center" }}>
                  <p style={{ fontSize: 40, color: "var(--gold)", marginBottom: "1rem" }}>✓</p>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--cream)", marginBottom: "1rem" }}>Message sent!</h3>
                  <p style={{ color: "var(--text-muted)", fontSize: 14 }}>We've opened WhatsApp with your message. We'll respond as soon as possible.</p>
                  <button onClick={() => setSent(false)} className="btn-ghost" style={{ marginTop: "2rem" }}>Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input
                        required type="text" placeholder="Your name"
                        value={form.name} onChange={e => update("name", e.target.value)}
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(201,168,76,0.5)"}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>Phone / WhatsApp</label>
                      <input
                        type="tel" placeholder="+92 300 000 0000"
                        value={form.phone} onChange={e => update("phone", e.target.value)}
                        style={inputStyle}
                        onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(201,168,76,0.5)"}
                        onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email" placeholder="your@email.com"
                      value={form.email} onChange={e => update("email", e.target.value)}
                      style={inputStyle}
                      onFocus={e => (e.target as HTMLInputElement).style.borderColor = "rgba(201,168,76,0.5)"}
                      onBlur={e => (e.target as HTMLInputElement).style.borderColor = "var(--border)"}
                    />
                  </div>

                  <div>
                    <label style={labelStyle}>I'm interested in *</label>
                    <select
                      required value={form.interest} onChange={e => update("interest", e.target.value)}
                      style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                      onFocus={e => (e.target as HTMLSelectElement).style.borderColor = "rgba(201,168,76,0.5)"}
                      onBlur={e => (e.target as HTMLSelectElement).style.borderColor = "var(--border)"}
                    >
                      <option value="">Select an option</option>
                      <option value="A Persian kitten">A Persian kitten</option>
                      <option value="Stud service">Stud service</option>
                      <option value="General enquiry">General enquiry</option>
                      <option value="Visiting the cattery">Visiting the cattery</option>
                      <option value="Future litter waitlist">Future litter waitlist</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea
                      required rows={5} placeholder="Tell us what you're looking for..."
                      value={form.message} onChange={e => update("message", e.target.value)}
                      style={{ ...inputStyle, resize: "vertical" }}
                      onFocus={e => (e.target as HTMLTextAreaElement).style.borderColor = "rgba(201,168,76,0.5)"}
                      onBlur={e => (e.target as HTMLTextAreaElement).style.borderColor = "var(--border)"}
                    />
                  </div>

                  <button type="submit" className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>
                    <span>Send via WhatsApp</span>
                  </button>
                  <p style={{ fontSize: 11, color: "var(--text-muted)", textAlign: "center" }}>
                    This opens WhatsApp with your message pre-filled.
                  </p>
                </form>
              )}
            </div>

            {/* Map + info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 300, color: "var(--cream)" }}>
                Find us
              </h2>

              {/* Google Maps embed — Rawalpindi */}
              <div style={{ border: "1px solid var(--border)", overflow: "hidden" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106585.27744965408!2d73.00698!3d33.59717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95e4c0ffffc5%3A0x4e14015b09536c3d!2sRawalpindi%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000"
                  width="100%" height="300" style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Paws of Persia location — Rawalpindi"
                />
              </div>

              {/* Contact details */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { label: "Location", value: "Rawalpindi, Punjab, Pakistan" },
                  { label: "WhatsApp", value: "+92 300 123 4567", href: "https://wa.me/923001234567" },
                  { label: "Email", value: "hello@pawsofpersia.pk", href: "mailto:hello@pawsofpersia.pk" },
                  { label: "Visits", value: "By appointment only — contact us to schedule" },
                ].map(c => (
                  <div key={c.label} style={{ display: "flex", gap: "1.5rem", borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem" }}>
                    <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold-dim)", minWidth: 80, paddingTop: 2 }}>{c.label}</p>
                    {c.href ? (
                      <a href={c.href} style={{ fontSize: 14, color: "var(--cream)", transition: "color 0.25s" }}
                         onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--gold)"}
                         onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--cream)"}>
                        {c.value}
                      </a>
                    ) : (
                      <p style={{ fontSize: 14, color: "var(--text-muted)" }}>{c.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/923001234567"
                target="_blank"
                className="btn-gold"
                style={{ textAlign: "center", justifyContent: "center" }}
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
        input::placeholder, textarea::placeholder, select option[value=""] { color: var(--text-muted); }
      `}</style>
    </>
  );
}
