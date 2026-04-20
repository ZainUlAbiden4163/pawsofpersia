"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/store/kittens", label: "Kittens" },
    { href: "/store/stud-service", label: "Stud Service" },
    { href: "/care-guide", label: "Care Guide" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,9,8,0.97)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
        transition: "all 0.4s ease",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "0 2rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: 72,
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <span style={{
              fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 400,
              color: "var(--gold-light)", letterSpacing: "0.08em", lineHeight: 1,
            }}>
              Paws of Persia
            </span>
            <span style={{
              fontSize: 9, fontWeight: 500, letterSpacing: "0.35em",
              color: "var(--gold-dim)", textTransform: "uppercase",
            }}>
              Est. Rawalpindi
            </span>
          </Link>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
               className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                fontFamily: "var(--font-body)",
                fontSize: 10, fontWeight: 500, letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: pathname === l.href ? "var(--gold)" : "var(--text-muted)",
                transition: "color 0.25s",
                borderBottom: pathname === l.href ? "1px solid var(--gold)" : "1px solid transparent",
                paddingBottom: 2,
              }}
              onMouseEnter={e => { if (pathname !== l.href) (e.target as HTMLElement).style.color = "var(--cream)"; }}
              onMouseLeave={e => { if (pathname !== l.href) (e.target as HTMLElement).style.color = "var(--text-muted)"; }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} style={{
            background: "none", border: "none", cursor: "pointer",
            display: "none", flexDirection: "column", gap: 5, padding: 4,
          }} className="hamburger" aria-label="Menu">
            {[0,1,2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 1,
                background: open ? "var(--gold)" : "var(--text-muted)",
                transition: "all 0.3s",
                transform: open && i === 0 ? "rotate(45deg) translate(4px,4px)"
                         : open && i === 2 ? "rotate(-45deg) translate(4px,-4px)"
                         : open && i === 1 ? "scaleX(0)" : "none",
              }}/>
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: "rgba(10,9,8,0.98)", borderTop: "1px solid var(--border)",
            padding: "1.5rem 2rem 2rem",
          }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                display: "block", padding: "0.85rem 0",
                fontSize: 11, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase",
                color: pathname === l.href ? "var(--gold)" : "var(--text-muted)",
                borderBottom: "1px solid var(--border)",
              }}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
