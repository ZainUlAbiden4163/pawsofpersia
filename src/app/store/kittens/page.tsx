"use client";
import { kittens } from "../../../../data/kittens";
import KittenCard from "../../../../components/KittenCard";

export default function KittensPage() {
  const available = kittens.filter((k) => k.status === "Available");
  const other = kittens.filter((k) => k.status !== "Available");

  return (
    <>
      <section style={{ paddingTop: "10rem", paddingBottom: "4rem" }}>
        <div className="container">
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            Currently Available
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "1.5rem",
            }}
          >
            Persian Kittens
          </h1>
          <div
            style={{
              width: 80,
              height: 1,
              background: "var(--gold-dim)",
              marginBottom: "2rem",
            }}
          />
          <div style={{ display: "flex", gap: "3rem", flexWrap: "wrap" }}>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {available.length}
              </p>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                Available now
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 36,
                  color: "var(--gold)",
                  lineHeight: 1,
                }}
              >
                {kittens.length}
              </p>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginTop: 4,
                }}
              >
                Total listings
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="container">
          {/* Available */}
          <div style={{ marginBottom: "4rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 400,
                color: "var(--gold-light)",
                marginBottom: "2rem",
                paddingBottom: "1rem",
                borderBottom: "1px solid var(--border)",
              }}
            >
              Available Kittens
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "2rem",
              }}
            >
              {available.map((k) => (
                <KittenCard key={k.id} kitten={k} />
              ))}
            </div>
          </div>

          {/* Reserved / Sold */}
          {other.length > 0 && (
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "var(--text-muted)",
                  marginBottom: "2rem",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                Reserved & Sold
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "2rem",
                  opacity: 0.6,
                }}
              >
                {other.map((k) => (
                  <KittenCard key={k.id} kitten={k} compact />
                ))}
              </div>
            </div>
          )}

          {/* Info box */}
          <div
            style={{
              marginTop: "5rem",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              padding: "3rem",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                fontWeight: 400,
                color: "var(--cream)",
                marginBottom: "1.5rem",
              }}
            >
              Before You Enquire
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  title: "Age of leaving",
                  body: "All kittens leave at a minimum of 12 weeks.",
                },
                {
                  title: "What's included",
                  body: "Health cert, vaccination record, deworming cert, pedigree, care guide.",
                },
                {
                  title: "Visits welcome",
                  body: "By appointment in Rawalpindi. Meet the parents too.",
                },
                {
                  title: "Delivery available",
                  body: "Safe transport to Lahore, Karachi, Islamabad & more.",
                },
              ].map((i) => (
                <div key={i.title}>
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: 8,
                    }}
                  >
                    {i.title}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {i.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
