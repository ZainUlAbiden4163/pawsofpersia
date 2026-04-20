import Link from "next/link";

export default function ComingSoon({ title, description }: { title: string; description?: string }) {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "6rem 2rem" }}>
      <div style={{ textAlign: "center", maxWidth: 520 }}>
        <p className="section-label" style={{ justifyContent: "center", marginBottom: "2rem" }}>
          Expanding Soon
        </p>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 300, color: "var(--cream)", marginBottom: "1.5rem" }}>
          {title}
        </h1>
        <div style={{ width: 60, height: 1, background: "var(--gold-dim)", margin: "0 auto 2rem" }} />
        <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.85, marginBottom: "3rem" }}>
          {description ?? `We are carefully curating our ${title.toLowerCase()} selection to meet the discerning standards of Persian cat owners. This section will be available soon.`}
        </p>
        <p style={{
          fontFamily: "var(--font-display)", fontSize: 48, fontStyle: "italic",
          color: "rgba(201,168,76,0.12)", letterSpacing: "0.1em",
          margin: "0 0 3rem",
        }}>
          Coming Soon
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/store/kittens" className="btn-gold"><span>View Kittens</span></Link>
          <Link href="/contact" className="btn-ghost">Get Notified</Link>
        </div>
      </div>
    </div>
  );
}
