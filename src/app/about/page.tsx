"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "6rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            filter: "brightness(0.18)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,9,8,0.6), var(--bg))",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <p
            className="section-label"
            style={{ justifyContent: "center", marginBottom: "2rem" }}
          >
            Our Story
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "1.5rem",
            }}
          >
            About Paws of Persia
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
            A breeder built on conviction, care, and a deep love for one of the
            world's most majestic cat breeds.
          </p>
        </div>
      </section>

      {/* ─── MISSION + VISION ─── */}
      <section style={{ padding: "6rem 0", background: "var(--bg2)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "4rem",
            }}
            className="two-col"
          >
            <div
              style={{
                borderLeft: "1px solid var(--border)",
                paddingLeft: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1.2rem",
                }}
              >
                Our Mission
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  marginBottom: "1.2rem",
                }}
              >
                Raise healthier, happier Persians.
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                }}
              >
                Our mission is to raise Persian cats that are not only visually
                extraordinary but genuinely healthy, socialised, and prepared
                for long, fulfilling lives with their families. We reject the
                practice of breeding purely for appearance at the expense of
                wellbeing. Health testing, temperament, and ethical care come
                first — always.
              </p>
            </div>
            <div
              style={{
                borderLeft: "1px solid var(--border)",
                paddingLeft: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "1.2rem",
                }}
              >
                Our Vision
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  marginBottom: "1.2rem",
                }}
              >
                The standard for Persian breeding in Pakistan.
              </h2>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                }}
              >
                We envision Paws of Persia becoming the benchmark for Persian
                cat breeding across Pakistan — a name synonymous with trust,
                quality, and genuine expertise. A cattery that future breeders
                look to as the model for how it should be done.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ORIGIN STORY ─── */}
      <section style={{ padding: "7rem 0" }}>
        <div className="container" style={{ maxWidth: 820 }}>
          <p className="section-label" style={{ marginBottom: "2rem" }}>
            The Origin
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "3rem",
            }}
          >
            How it all began
          </h2>

          <div
            style={{
              borderLeft: "2px solid var(--border)",
              paddingLeft: "2.5rem",
            }}
          >
            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 2,
                marginBottom: "1.5rem",
              }}
            >
              It started, as most meaningful things do, with a single cat.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 2,
                marginBottom: "1.5rem",
              }}
            >
              Growing up in Rawalpindi, cats were always part of our household —
              but it wasn't until our family brought home our first Persian that
              something shifted. That cat had a presence unlike anything we had
              experienced. Quiet, dignified, impossibly soft. A creature that
              seemed to elevate the atmosphere of a room simply by existing in
              it.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 2,
                marginBottom: "1.5rem",
              }}
            >
              What followed was years of research, networking with serious
              breeders, studying Persian genetics, health conditions, coat
              types, and bloodlines. I quickly discovered a troubling reality:
              the majority of "Persian" cats being sold in Pakistan were either
              mixed breeds, poorly bred, or sourced from operations that
              prioritised profit over welfare.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 2,
                marginBottom: "1.5rem",
              }}
            >
              There was a gap. A significant one. Pakistan had a growing
              appetite for purebred Persians — but almost no trustworthy,
              transparent, professional cattery to meet that demand.
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--gold-light)",
                lineHeight: 2,
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
              }}
            >
              "I did not set out to start a business. I set out to fix something
              that was broken."
            </p>
            <p
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                lineHeight: 2,
                marginTop: "1.5rem",
              }}
            >
              Paws of Persia was founded with that purpose. Self-funded from the
              ground up, with every decision made on principle rather than speed
              — building a foundation that will last decades, not seasons.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS STRATEGY ─── */}
      <section style={{ padding: "7rem 0", background: "var(--bg2)" }}>
        <div className="container">
          <p className="section-label" style={{ marginBottom: "2rem" }}>
            Strategic Direction
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "3rem",
              maxWidth: 600,
            }}
          >
            How we are building this business
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                phase: "Phase I — Now",
                title: "Kittens & Stud Service",
                desc: "Our core offering: health-tested, pedigree Persian kittens and stud services for approved queens. Building reputation before expanding.",
              },
              {
                phase: "Phase II — 2025–26",
                title: "Product Expansion",
                desc: "Curated cat food, premium accessories, grooming tools, and Persian-specific toys. All tested on our own cats first.",
              },
              {
                phase: "Phase III — 2026+",
                title: "Pakistan's Top Cattery",
                desc: "A full-service Persian centre: boarding, grooming, vet partnerships, and a breeding mentorship programme for new breeders.",
              },
              {
                phase: "Philosophy",
                title: "Self-Funded, Self-Directed",
                desc: "No investors, no shortcuts. Every decision is ours. That freedom allows us to prioritise what matters: the cats, then the customers, then the business.",
              },
            ].map((s) => (
              <div
                key={s.title}
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  padding: "2rem",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "1rem",
                  }}
                >
                  {s.phase}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 400,
                    color: "var(--cream)",
                    marginBottom: "1rem",
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── OWNER PROFILE ─── */}
      <section style={{ padding: "7rem 0" }}>
        <div className="container">
          <p className="section-label" style={{ marginBottom: "2rem" }}>
            Meet the Team
          </p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "4rem",
            }}
          >
            The people behind the paws
          </h2>

          {/* Owner card */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "280px 1fr",
              gap: "4rem",
              alignItems: "start",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              padding: "3rem",
            }}
            className="owner-card"
          >
            <div>
              <div
                style={{
                  width: "100%",
                  aspectRatio: "3/4",
                  background: "var(--bg4)",
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 64,
                    color: "rgba(201,168,76,0.15)",
                  }}
                >
                  P
                </p>
              </div>
              <p
                style={{
                  fontSize: 10,
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: 8,
                }}
              >
                Founder & Head Breeder
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 26,
                  fontWeight: 400,
                  color: "var(--cream)",
                }}
              >
                Your Name Here
              </h3>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--text-muted)",
                  marginTop: 6,
                }}
              >
                Rawalpindi, Pakistan
              </p>
            </div>
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontStyle: "italic",
                  color: "var(--gold-light)",
                  marginBottom: "1.5rem",
                  lineHeight: 1.4,
                }}
              >
                "I believe every cat deserves to be raised with love, and every
                owner deserves complete transparency."
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  marginBottom: "1.2rem",
                }}
              >
                A lifelong cat lover and self-taught Persian breeder based in
                Rawalpindi. The journey began years before Paws of Persia — with
                research, mentorship from established breeders, and an obsessive
                commitment to understanding the Persian breed at a genetic and
                behavioural level.
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  marginBottom: "1.2rem",
                }}
              >
                Today, I personally oversee every aspect of our cattery — from
                health testing and breeding decisions to kitten socialisation
                and post-adoption support. Every cat that leaves Paws of Persia
                has been cared for by my own hands.
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  marginBottom: "2rem",
                }}
              >
                As a frontend developer by profession, I also build and maintain
                this website — a project that combines both of my passions:
                technology and Persian cats.
              </p>
              <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
                {[
                  "Persian Genetics",
                  "Animal Welfare",
                  "Responsible Breeding",
                  "Cat Nutrition",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: 10,
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--text-muted)",
                      border: "1px solid var(--border)",
                      padding: "4px 12px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Partners — Coming Soon */}
          <div
            style={{
              marginTop: "4rem",
              background: "var(--bg3)",
              border: "1px solid var(--border)",
              padding: "3rem",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--gold-dim)",
                marginBottom: "1rem",
              }}
            >
              Partners & Collaborators
            </p>
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 28,
                fontWeight: 300,
                color: "var(--text-muted)",
                fontStyle: "italic",
              }}
            >
              Growing soon
            </h3>
            <p
              style={{
                fontSize: 13,
                color: "var(--text-muted)",
                maxWidth: 480,
                margin: "1rem auto 0",
                lineHeight: 1.8,
              }}
            >
              Paws of Persia is currently self-funded and owner-operated. As we
              grow, we look forward to collaborating with veterinary partners,
              cat food brands, and fellow breeders who share our values.
            </p>
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section style={{ padding: "7rem 0", background: "var(--bg2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "1.5rem" }}
            >
              What Drives Us
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              Our Values
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                v: "Transparency",
                d: "No hidden fees, no misleading descriptions. You always know exactly what you're getting.",
              },
              {
                v: "Health First",
                d: "We DNA-test our breeding cats for PKD and other heritable conditions. No exceptions.",
              },
              {
                v: "Lifelong Support",
                d: "We remain available to every family that adopts from us — for the life of the cat.",
              },
              {
                v: "Ethical Breeding",
                d: "Queens are never over-bred. Every litter is planned with purpose, not profit.",
              },
            ].map((v) => (
              <div key={v.v} style={{ textAlign: "center", padding: "2rem" }}>
                <div
                  style={{
                    width: 40,
                    height: 1,
                    background: "var(--gold-dim)",
                    margin: "0 auto 1.5rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 400,
                    color: "var(--gold-light)",
                    marginBottom: 12,
                  }}
                >
                  {v.v}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  {v.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ padding: "6rem 0", textAlign: "center" }}>
        <div className="container">
          <p className="ornament">— ✦ —</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "2rem",
            }}
          >
            Ready to meet your Persian?
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/store/kittens" className="btn-gold">
              <span>See Available Kittens</span>
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .owner-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
