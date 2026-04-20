"use client";
import Link from "next/link";
import { studCats } from "../../../../data/index";

export default function StudServicePage() {
  return (
    <>
      <section
        style={{
          paddingTop: "10rem",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "url('https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            filter: "brightness(0.15)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(10,9,8,0.5), var(--bg))",
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-label" style={{ marginBottom: "1.5rem" }}>
            Breeding Services
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
            Stud Service
          </h1>
          <div
            style={{
              width: 80,
              height: 1,
              background: "var(--gold-dim)",
              marginBottom: "2rem",
            }}
          />
          <p
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              maxWidth: 560,
              lineHeight: 1.9,
            }}
          >
            Our champion males are available to approved Persian queens. All
            studs are health-tested, DNA-certified, and FIV/FeLV negative.
          </p>
        </div>
      </section>

      {/* Stud cards */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
              gap: "3rem",
            }}
          >
            {studCats.map((s) => (
              <div
                key={s.id}
                style={{
                  background: "var(--bg3)",
                  border: "1px solid var(--border)",
                  overflow: "hidden",
                  transition: "border-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,168,76,0.4)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)")
                }
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={s.image}
                    alt={s.name}
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background:
                        "linear-gradient(to top, rgba(10,9,8,0.9), transparent)",
                      padding: "2rem 1.5rem 1rem",
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 32,
                        fontWeight: 400,
                        color: "var(--cream)",
                      }}
                    >
                      {s.name}
                    </h2>
                    <p
                      style={{
                        fontSize: 11,
                        color: "var(--gold)",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                      }}
                    >
                      {s.color} · {s.age}
                    </p>
                  </div>
                </div>
                <div style={{ padding: "2rem" }}>
                  <p
                    style={{
                      fontSize: 12,
                      color: "var(--gold-dim)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "1rem",
                    }}
                  >
                    {s.lineage}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.85,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {s.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {s.achievements.map((a) => (
                      <span
                        key={a}
                        style={{
                          fontSize: 10,
                          color: "var(--gold)",
                          border: "1px solid rgba(201,168,76,0.25)",
                          padding: "3px 10px",
                          letterSpacing: "0.12em",
                        }}
                      >
                        ✓ {a}
                      </span>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: "1px solid var(--border)",
                      paddingTop: "1.5rem",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: 10,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "var(--text-muted)",
                        }}
                      >
                        Service fee
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: 28,
                          color: "var(--gold)",
                        }}
                      >
                        PKR {s.servicePrice.toLocaleString()}
                      </p>
                    </div>
                    <Link
                      href={`https://wa.me/923001234567?text=Hi, I'd like to book stud service with ${s.name}`}
                      target="_blank"
                      className="btn-gold"
                    >
                      <span>Book Service</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process */}
          <div style={{ marginTop: "5rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 36,
                fontWeight: 300,
                color: "var(--cream)",
                marginBottom: "3rem",
                textAlign: "center",
              }}
            >
              How it works
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
              }}
            >
              {[
                {
                  step: "01",
                  title: "Contact Us",
                  desc: "Reach out via WhatsApp with your queen's breed, age, health status, and pedigree.",
                },
                {
                  step: "02",
                  title: "Health Screening",
                  desc: "Your queen must present current vaccinations and a clean FIV/FeLV test before pairing.",
                },
                {
                  step: "03",
                  title: "Schedule & Visit",
                  desc: "Arrange a date at our cattery in Rawalpindi. Book at least 2 weeks before expected heat.",
                },
                {
                  step: "04",
                  title: "The Pairing",
                  desc: "We supervise all pairings and keep your queen for 5–7 days for optimal results.",
                },
                {
                  step: "05",
                  title: "Follow Up",
                  desc: "We confirm pregnancy and remain available throughout gestation for any questions.",
                },
              ].map((p) => (
                <div
                  key={p.step}
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1.5rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 48,
                      color: "rgba(201,168,76,0.12)",
                      lineHeight: 1,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.step}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 20,
                      fontWeight: 400,
                      color: "var(--gold-light)",
                      marginBottom: 10,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            <Link
              href="https://wa.me/923001234567?text=Hi, I'm interested in stud service"
              target="_blank"
              className="btn-gold"
            >
              <span>Book via WhatsApp</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
