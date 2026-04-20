"use client";
import { careSections } from "../../../data/index";
import Link from "next/link";

export default function CareGuidePage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, var(--bg))",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <p
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "1.5rem" }}
          >
            Expert Guidance
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
            Persian Cat Care Guide
          </h1>
          <div
            style={{
              width: 80,
              height: 1,
              background: "var(--gold-dim)",
              margin: "0 auto 2rem",
            }}
          />
          <p
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              maxWidth: 580,
              margin: "0 auto",
              lineHeight: 1.9,
            }}
          >
            Everything you need to know to raise a healthy, happy, and gorgeous
            Persian cat. Written from years of hands-on experience at our
            cattery.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: "4rem 0", background: "var(--bg2)" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              lineHeight: 2,
              marginBottom: "1.5rem",
            }}
          >
            Persian cats are one of the most rewarding breeds to own — but they
            do require more care than the average domestic cat. Their long,
            luxurious coats, flat faces, and gentle temperaments all come with
            specific requirements that, once understood, become second nature.
          </p>
          <p
            style={{ fontSize: 15, color: "var(--text-muted)", lineHeight: 2 }}
          >
            Whether you have just adopted your first Persian or are an
            experienced owner, this guide covers everything from daily grooming
            routines to nutrition and health monitoring.
          </p>
        </div>
      </section>

      {/* Care sections */}
      <section style={{ padding: "5rem 0 7rem" }}>
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "5rem" }}
          >
            {careSections.map((section, i) => (
              <div
                key={section.title}
                style={{
                  display: "grid",
                  gridTemplateColumns: "280px 1fr",
                  gap: "4rem",
                  alignItems: "start",
                }}
                className="care-row"
              >
                {/* Section header */}
                <div style={{ position: "sticky", top: 100 }}>
                  <div
                    style={{
                      fontSize: 40,
                      color: "var(--gold-dim)",
                      marginBottom: "1rem",
                    }}
                  >
                    {section.icon}
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2rem, 4vw, 3rem)",
                      fontWeight: 300,
                      color: "var(--cream)",
                      marginBottom: "1rem",
                    }}
                  >
                    {section.title}
                  </h2>
                  <div
                    style={{
                      width: 40,
                      height: 1,
                      background: "var(--gold-dim)",
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                  }}
                >
                  {section.content.map((tip, j) => (
                    <div
                      key={j}
                      style={{
                        background: "var(--bg3)",
                        border: "1px solid var(--border)",
                        padding: "1.5rem 2rem",
                        display: "flex",
                        gap: "1.5rem",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 24,
                          color: "rgba(201,168,76,0.3)",
                          lineHeight: 1,
                          flexShrink: 0,
                          marginTop: 2,
                        }}
                      >
                        {String(j + 1).padStart(2, "0")}
                      </span>
                      <p
                        style={{
                          fontSize: 14,
                          color: "var(--text-muted)",
                          lineHeight: 1.85,
                        }}
                      >
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Health warning box */}
      <section style={{ padding: "2rem 0 6rem" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <div
            style={{
              background: "var(--bg3)",
              borderLeft: "3px solid var(--gold)",
              padding: "2rem 2.5rem",
            }}
          >
            <p
              style={{
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: "1rem",
              }}
            >
              Important health note
            </p>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-muted)",
                lineHeight: 1.85,
              }}
            >
              Persian cats carry a risk of Polycystic Kidney Disease (PKD) — a
              hereditary condition. Always purchase from a breeder who DNA-tests
              their breeding cats. At Paws of Persia, all our breeding cats are
              PKD-negative certified. Ask to see results before purchasing from
              any breeder.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "5rem 0",
          background: "var(--bg2)",
          textAlign: "center",
        }}
      >
        <div className="container">
          <p className="ornament">— ✦ —</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "1.5rem",
            }}
          >
            Have more questions?
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              maxWidth: 480,
              margin: "0 auto 3rem",
              fontSize: 14,
              lineHeight: 1.85,
            }}
          >
            We are always happy to advise Persian owners — whether you bought
            from us or not. A healthy Persian community is good for everyone.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/contact" className="btn-gold">
              <span>Ask Us Anything</span>
            </Link>
            <Link href="/store/kittens" className="btn-ghost">
              View Kittens
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .care-row { grid-template-columns: 1fr !important; }
          .care-row > div:first-child { position: static !important; }
        }
      `}</style>
    </>
  );
}
