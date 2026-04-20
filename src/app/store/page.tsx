"use client";
import Link from "next/link";

const sections = [
  { href: "/store/kittens",     title: "Persian Kittens",  sub: "Available now",    icon: "◈", live: true },
  { href: "/store/stud-service",title: "Stud Service",     sub: "Available now",    icon: "◆", live: true },
  { href: "/store/food",        title: "Cat Food",         sub: "Coming soon",      icon: "✦", live: false },
  { href: "/store/accessories", title: "Accessories",      sub: "Coming soon",      icon: "◉", live: false },
  { href: "/store/toys",        title: "Toys",             sub: "Coming soon",      icon: "◇", live: false },
];

export default function StorePage() {
  return (
    <>
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem", textAlign: "center" }}>
        <div className="container">
          <p className="section-label" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>Paws of Persia</p>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 300, color: "var(--cream)", marginBottom: "1.5rem" }}>
            The Store
          </h1>
          <div style={{ width: 60, height: 1, background: "var(--gold-dim)", margin: "0 auto 2rem" }} />
          <p style={{ color: "var(--text-muted)", maxWidth: 500, margin: "0 auto", fontSize: 14 }}>
            Everything a Persian cat owner needs — kittens, stud services, and curated products.
          </p>
        </div>
      </section>

      <section style={{ padding: "3rem 0 7rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {sections.map(s => (
              <Link key={s.href} href={s.href} style={{
                display: "flex", flexDirection: "column",
                background: s.live ? "var(--bg3)" : "var(--bg2)",
                border: `1px solid ${s.live ? "var(--border)" : "rgba(201,168,76,0.08)"}`,
                padding: "3rem 2.5rem",
                transition: "all 0.3s",
                opacity: s.live ? 1 : 0.6,
              }}
              onMouseEnter={e => { if (s.live) (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = s.live ? "var(--border)" : "rgba(201,168,76,0.08)"; }}>
                <div style={{ fontSize: 32, color: s.live ? "var(--gold)" : "var(--text-muted)", marginBottom: "1.5rem" }}>{s.icon}</div>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: 30, fontWeight: 400, color: s.live ? "var(--cream)" : "var(--text-muted)", marginBottom: 8 }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: s.live ? "var(--gold)" : "var(--text-muted)" }}>
                  {s.sub}
                </p>
                {!s.live && (
                  <p style={{
                    marginTop: "auto", paddingTop: "2rem",
                    fontFamily: "var(--font-display)", fontSize: 52, fontStyle: "italic",
                    color: "rgba(201,168,76,0.07)",
                  }}>Coming Soon</p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
