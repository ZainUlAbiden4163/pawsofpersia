"use client";
import { Kitten } from "../data/kittens";
import Link from "next/link";

export default function KittenCard({
  kitten,
  compact = false,
}: {
  kitten: Kitten;
  compact?: boolean;
}) {
  const statusClass =
    kitten.status === "Available"
      ? "badge-available"
      : kitten.status === "Reserved"
      ? "badge-reserved"
      : "badge-sold";

  return (
    <div
      style={{
        background: "var(--bg3)",
        border: "1px solid var(--border)",
        transition: "border-color 0.3s, transform 0.3s",
        overflow: "hidden",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor =
          "rgba(201,168,76,0.4)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
      }}
    >
      {/* Image */}
      <div
        style={{ position: "relative", overflow: "hidden", aspectRatio: "4/3" }}
      >
        <img
          src={kitten.image}
          alt={kitten.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.transform = "scale(1.06)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.transform = "scale(1)")
          }
        />
        <div
          style={{
            position: "absolute",
            top: 12,
            right: 12,
          }}
        >
          <span className={`badge ${statusClass}`}>{kitten.status}</span>
        </div>
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            fontSize: 9,
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--gold-dim)",
            background: "rgba(10,9,8,0.7)",
            padding: "4px 8px",
          }}
        >
          {kitten.gender}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: compact ? "1rem" : "1.4rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline",
            marginBottom: 6,
          }}
        >
          <h3
            style={{
              fontFamily: "var(--font-display)",
              fontSize: compact ? 20 : 24,
              fontWeight: 400,
              color: "var(--cream)",
            }}
          >
            {kitten.name}
          </h3>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: compact ? 16 : 18,
              color: "var(--gold)",
            }}
          >
            PKR {kitten.price.toLocaleString()}
          </span>
        </div>

        <p
          style={{
            fontSize: 11,
            color: "var(--gold-dim)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 10,
          }}
        >
          {kitten.color} · {kitten.age}
        </p>

        {!compact && (
          <p
            style={{
              fontSize: 13,
              color: "var(--text-muted)",
              lineHeight: 1.75,
              marginBottom: 16,
            }}
          >
            {kitten.description}
          </p>
        )}

        {/* Traits */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 16,
          }}
        >
          {kitten.traits.map((t) => (
            <span
              key={t}
              style={{
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                border: "1px solid var(--border)",
                padding: "3px 8px",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Health */}
        <div style={{ display: "flex", gap: 16, marginBottom: 16 }}>
          <span
            style={{
              fontSize: 11,
              color: kitten.vaccinated ? "var(--gold)" : "var(--text-muted)",
            }}
          >
            {kitten.vaccinated ? "✓" : "✗"} Vaccinated
          </span>
          <span
            style={{
              fontSize: 11,
              color: kitten.dewormed ? "var(--gold)" : "var(--text-muted)",
            }}
          >
            {kitten.dewormed ? "✓" : "✗"} Dewormed
          </span>
        </div>

        <Link
          href={`https://wa.me/923001234567?text=Hi, I'm interested in ${kitten.name} (${kitten.color} Persian)`}
          target="_blank"
          className="btn-gold"
          style={{ width: "100%", justifyContent: "center" }}
        >
          <span>
            {kitten.status === "Available" ? "Enquire Now" : "Join Waitlist"}
          </span>
        </Link>
      </div>
    </div>
  );
}
