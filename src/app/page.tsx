"use client";
import Link from "next/link";
import { kittens } from "../../data/kittens";
import { testimonials, faqs } from "../../data/index";
import KittenCard from "../../components/KittenCard";

export default function HomePage() {
  const featured = kittens.filter((k) => k.status === "Available").slice(0, 3);

  return (
    <>
      {/* ─── HERO ─── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            filter: "brightness(0.25)",
          }}
        />
        {/* Gradient vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(10,9,8,0.95) 45%, rgba(10,9,8,0.3) 100%)",
          }}
        />

        {/* Gold corner ornament */}
        <div
          style={{
            position: "absolute",
            top: 100,
            right: 60,
            width: 180,
            height: 180,
            border: "1px solid rgba(201,168,76,0.15)",
            borderRadius: 0,
            transform: "rotate(15deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 120,
            right: 80,
            width: 140,
            height: 140,
            border: "1px solid rgba(201,168,76,0.08)",
            transform: "rotate(15deg)",
          }}
        />

        <div
          className="container"
          style={{
            position: "relative",
            zIndex: 1,
            paddingTop: "6rem",
            paddingBottom: "4rem",
          }}
        >
          <p className="section-label fade-up" style={{ marginBottom: "2rem" }}>
            Rawalpindi, Pakistan
          </p>
          <h1
            className="delay-1 fade-up"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "var(--cream)",
              maxWidth: 700,
              marginBottom: "1.5rem",
            }}
          >
            Where Persian
            <br />
            <em style={{ color: "var(--gold-light)", fontStyle: "italic" }}>
              royalty
            </em>
            <br />
            is born.
          </h1>

          <div
            style={{
              width: 80,
              height: 1,
              background: "var(--gold-dim)",
              margin: "2rem 0",
            }}
            className="delay-2 fade-up"
          />

          <p
            className="delay-2 fade-up"
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              lineHeight: 1.85,
              maxWidth: 480,
              marginBottom: "3rem",
            }}
          >
            Pakistan's premier Persian cat cattery. Championship bloodlines,
            health-tested kittens, and meticulous care — raised in Rawalpindi,
            delivered across the nation.
          </p>

          <div
            className="delay-3 fade-up"
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <Link href="/store/kittens" className="btn-gold">
              <span>View Available Kittens</span>
            </Link>
            <Link href="/about" className="btn-ghost">
              Our Story
            </Link>
          </div>

          {/* Stats row */}
          <div
            className="delay-4 fade-up"
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "100%", label: "Purebred Persian" },
              { num: "12+", label: "Colour variants" },
              { num: "PKR", label: "Transparent pricing" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 36,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}
        >
          <p
            style={{
              fontSize: 9,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            Scroll
          </p>
          <div
            style={{
              width: 1,
              height: 40,
              background:
                "linear-gradient(to bottom, var(--gold-dim), transparent)",
              animation: "scrollPulse 2s ease-in-out infinite",
            }}
          />
        </div>
        <style>{`@keyframes scrollPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }`}</style>
      </section>

      {/* ─── ABOUT SNIPPET ─── */}
      <section style={{ padding: "7rem 0", background: "var(--bg2)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
            className="about-grid"
          >
            <div>
              <p className="section-label" style={{ marginBottom: "1.5rem" }}>
                Our Cattery
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  fontWeight: 300,
                  color: "var(--cream)",
                  marginBottom: "1.5rem",
                }}
              >
                More than a breeder.
                <br />
                <em style={{ color: "var(--gold-light)" }}>
                  A lifelong promise.
                </em>
              </h2>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                  fontSize: 14,
                }}
              >
                Paws of Persia was founded out of a deep respect for the Persian
                breed — its grace, its quiet dignity, its extraordinary coat.
                Every kitten we raise is treated as a member of our family until
                the moment they join yours.
              </p>
              <p
                style={{
                  color: "var(--text-muted)",
                  lineHeight: 1.9,
                  marginBottom: "2.5rem",
                  fontSize: 14,
                }}
              >
                We breed exclusively for health, temperament, and conformation
                to breed standard. No shortcuts, no compromises.
              </p>
              <Link href="/about" className="btn-ghost">
                Read Our Full Story →
              </Link>
            </div>
            <div style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: -20,
                  left: -20,
                  right: 20,
                  bottom: 20,
                  border: "1px solid var(--border)",
                }}
              />
              <img
                src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=700&q=80"
                alt="Our cattery"
                style={{
                  width: "100%",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  position: "relative",
                  zIndex: 1,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -16,
                  right: -16,
                  zIndex: 2,
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  padding: "1.2rem 1.5rem",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 28,
                    color: "var(--gold)",
                    lineHeight: 1,
                  }}
                >
                  4.9★
                </p>
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.15em",
                    color: "var(--text-muted)",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  Avg. rating
                </p>
              </div>
            </div>
          </div>
        </div>
        <style>{`.about-grid { @media (max-width:768px) { grid-template-columns:1fr !important; } }`}</style>
      </section>

      {/* ─── FEATURED KITTENS ─── */}
      <section style={{ padding: "7rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "1.5rem" }}
            >
              Currently Available
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              Featured Kittens
            </h2>
            <div
              style={{
                width: 60,
                height: 1,
                background: "var(--gold-dim)",
                margin: "1.5rem auto",
              }}
            />
            <p
              style={{
                color: "var(--text-muted)",
                maxWidth: 500,
                margin: "0 auto",
                fontSize: 14,
              }}
            >
              Each kitten is health-screened, vaccinated, and ready for their
              forever home.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {featured.map((k) => (
              <KittenCard key={k.id} kitten={k} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/store/kittens" className="btn-gold">
              <span>View All Kittens</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section style={{ padding: "7rem 0", background: "var(--bg2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "1.5rem" }}
            >
              What We Offer
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              Our Services
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "◈",
                title: "Persian Kittens",
                desc: "Hand-raised, pedigree Persian kittens available year-round. All colour variants. Health certificates included.",
                href: "/store/kittens",
                live: true,
              },
              {
                icon: "◆",
                title: "Stud Service",
                desc: "Our champion males available for approved Persian queens. DNA tested, FIV/FeLV negative. Book in advance.",
                href: "/store/stud-service",
                live: true,
              },
              {
                icon: "✦",
                title: "Cat Food",
                desc: "Curated premium nutrition for Persian cats — wet, dry, and supplement ranges coming soon.",
                href: "/store/food",
                live: false,
              },
              {
                icon: "◉",
                title: "Accessories",
                desc: "Luxury grooming tools, beds, and cattery essentials. Launching soon.",
                href: "/store/accessories",
                live: false,
              },
            ].map((s) => (
              <Link
                key={s.title}
                href={s.href}
                style={{
                  display: "block",
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  padding: "2.5rem",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,168,76,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    color: "var(--gold-dim)",
                    marginBottom: "1.2rem",
                  }}
                >
                  {s.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 24,
                    fontWeight: 400,
                    color: "var(--cream)",
                    marginBottom: 10,
                  }}
                >
                  {s.title}
                </h3>
                {!s.live && (
                  <span
                    className="badge badge-coming"
                    style={{ marginBottom: 12 }}
                  >
                    Coming Soon
                  </span>
                )}
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY PERSIAN ─── */}
      <section style={{ padding: "7rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "1.5rem" }}
            >
              The Breed
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              Why Persian Cats?
            </h2>
            <div
              style={{
                width: 60,
                height: 1,
                background: "var(--gold-dim)",
                margin: "1.5rem auto",
              }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {[
              {
                title: "Calm & Gentle",
                desc: "Persians are famously placid. They thrive in peaceful homes and are wonderful with children and the elderly.",
              },
              {
                title: "Deeply Affectionate",
                desc: "They bond closely with their families — not a breed that ignores you. Expect a loyal companion for 12–17 years.",
              },
              {
                title: "Quiet & Dignified",
                desc: "Unlike many breeds, Persians rarely vocalise unnecessarily. They communicate softly and selectively.",
              },
              {
                title: "Indoor Perfection",
                desc: "Content with indoor life, low hunting drive, and minimal destructive behaviour make them the ideal apartment cat.",
              },
              {
                title: "Extraordinary Coats",
                desc: "No other breed matches the Persian's long, silky coat — a living work of art that rewards regular grooming.",
              },
              {
                title: "Adaptable Companions",
                desc: "They adjust well to new environments when introduced gently — making them excellent for families and singles alike.",
              },
            ].map((w) => (
              <div
                key={w.title}
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "1.5rem",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "var(--gold-light)",
                    marginBottom: 10,
                  }}
                >
                  {w.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                  }}
                >
                  {w.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section style={{ padding: "7rem 0", background: "var(--bg2)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "1.5rem" }}
            >
              Client Voices
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              What Our Families Say
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2rem",
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  padding: "2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 20,
                    fontFamily: "var(--font-display)",
                    fontSize: 80,
                    color: "rgba(201,168,76,0.06)",
                    lineHeight: 1,
                  }}
                >
                  "
                </div>
                <div
                  style={{ display: "flex", gap: 2, marginBottom: "1.2rem" }}
                >
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span
                      key={i}
                      style={{ color: "var(--gold)", fontSize: 12 }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--text-muted)",
                    lineHeight: 1.85,
                    marginBottom: "1.5rem",
                    fontStyle: "italic",
                  }}
                >
                  "{t.text}"
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--cream)",
                      fontWeight: 500,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: 11,
                      color: "var(--gold-dim)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {t.city}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section style={{ padding: "7rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p
              className="section-label"
              style={{ justifyContent: "center", marginBottom: "1.5rem" }}
            >
              Common Questions
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 300,
                color: "var(--cream)",
              }}
            >
              Frequently Asked
            </h2>
          </div>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {faqs.map((f, i) => (
              <details
                key={i}
                style={{ borderBottom: "1px solid var(--border)" }}
              >
                <summary
                  style={{
                    padding: "1.5rem 0",
                    fontFamily: "var(--font-display)",
                    fontSize: 20,
                    fontWeight: 400,
                    color: "var(--cream)",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    listStyle: "none",
                  }}
                >
                  {f.question}
                  <span
                    style={{
                      color: "var(--gold)",
                      fontSize: 18,
                      flexShrink: 0,
                      marginLeft: 16,
                    }}
                  >
                    +
                  </span>
                </summary>
                <p
                  style={{
                    fontSize: 14,
                    color: "var(--text-muted)",
                    lineHeight: 1.85,
                    paddingBottom: "1.5rem",
                  }}
                >
                  {f.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section
        style={{
          padding: "7rem 0",
          background: "var(--bg2)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            border: "1px solid rgba(201,168,76,0.06)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            border: "1px solid rgba(201,168,76,0.03)",
            borderRadius: "50%",
          }}
        />
        <div
          className="container"
          style={{ textAlign: "center", position: "relative", zIndex: 1 }}
        >
          <p className="ornament">— ✦ —</p>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 300,
              color: "var(--cream)",
              marginBottom: "1.5rem",
            }}
          >
            Ready to welcome a<br />
            <em style={{ color: "var(--gold-light)" }}>
              Persian into your home?
            </em>
          </h2>
          <p
            style={{
              color: "var(--text-muted)",
              maxWidth: 480,
              margin: "0 auto 3rem",
              fontSize: 14,
            }}
          >
            Browse our available kittens or contact us to discuss your
            requirements. We are always happy to guide first-time Persian
            owners.
          </p>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/store/kittens" className="btn-gold">
              <span>Browse Kittens</span>
            </Link>
            <Link href="/contact" className="btn-ghost">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
