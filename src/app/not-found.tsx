import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      justifyContent: "center", textAlign: "center", padding: "2rem",
    }}>
      <div>
        <p style={{
          fontFamily: "var(--font-display)", fontSize: 160, fontWeight: 300,
          color: "rgba(201,168,76,0.06)", lineHeight: 1, userSelect: "none",
        }}>404</p>
        <div style={{ marginTop: "-2rem" }}>
          <p className="section-label" style={{ justifyContent: "center", marginBottom: "1.5rem" }}>Page Not Found</p>
          <h1 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 300, color: "var(--cream)", marginBottom: "1.5rem",
          }}>
            This page has<br />
            <em style={{ color: "var(--gold-light)" }}>wandered off.</em>
          </h1>
          <p style={{ color: "var(--text-muted)", marginBottom: "3rem", fontSize: 14 }}>
            Like a Persian exploring a new room — it'll turn up eventually.
          </p>
          <Link href="/" className="btn-gold"><span>Return Home</span></Link>
        </div>
      </div>
    </div>
  );
}
