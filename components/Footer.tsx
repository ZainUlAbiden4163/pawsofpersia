"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg2)",
      borderTop: "1px solid var(--border)",
      padding: "4rem 0 2rem",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem",
          paddingBottom: "3rem",
          borderBottom: "1px solid var(--border)",
        }}>
          {/* Brand */}
          <div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--gold-light)", marginBottom: 8 }}>
              Paws of Persia
            </p>
            <p style={{ fontSize: 9, letterSpacing: "0.35em", color: "var(--gold-dim)", textTransform: "uppercase", marginBottom: 16 }}>
              Rawalpindi · Pakistan
            </p>
            <p style={{ fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8 }}>
              Premium Persian cat breeder dedicated to health, temperament, and the finest bloodlines.
            </p>
          </div>

          {/* Store */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
              Store
            </p>
            {[
              { href: "/store/kittens", label: "Available Kittens" },
              { href: "/store/stud-service", label: "Stud Service" },
              { href: "/store/food", label: "Cat Food (Soon)" },
              { href: "/store/accessories", label: "Accessories (Soon)" },
              { href: "/store/toys", label: "Toys (Soon)" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: "block", fontSize: 12, color: "var(--text-muted)",
                marginBottom: 10, letterSpacing: "0.05em",
                transition: "color 0.25s",
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--gold)"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--text-muted)"}
              >{l.label}</Link>
            ))}
          </div>

          {/* Info */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
              Information
            </p>
            {[
              { href: "/about", label: "About Us" },
              { href: "/care-guide", label: "Care Guide" },
              { href: "/contact", label: "Contact" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{
                display: "block", fontSize: 12, color: "var(--text-muted)",
                marginBottom: 10, letterSpacing: "0.05em",
                transition: "color 0.25s",
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--gold)"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--text-muted)"}
              >{l.label}</Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>
              Contact
            </p>
            <p style={{ fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }}>Rawalpindi, Punjab, Pakistan</p>
            <a href="https://wa.me/923001234567" style={{ fontSize: 12, color: "var(--text-muted)", display: "block", marginBottom: 8 }}>
              WhatsApp: +92 300 123 4567
            </a>
            <a href="mailto:hello@pawsofpersia.pk" style={{ fontSize: 12, color: "var(--text-muted)", display: "block" }}>
              hello@pawsofpersia.pk
            </a>
          </div>
        </div>

        <div style={{
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <p style={{ fontSize: 11, color: "var(--text-muted)", letterSpacing: "0.08em" }}>
            © {new Date().getFullYear()} Paws of Persia. All rights reserved.
          </p>
          <p style={{ fontSize: 11, color: "var(--gold-dim)", fontFamily: "var(--font-display)", fontStyle: "italic" }}>
            Bred with love. Raised with honour.
          </p>
        </div>
      </div>
    </footer>
  );
}
