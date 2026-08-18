export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "100px 24px",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div style={{ marginBottom: 48 }}>
        <h2
          style={{
            fontSize: "clamp(28px, 5vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            marginBottom: 8,
          }}
        >
          Contact
        </h2>
        <div style={{ width: 40, height: 3, background: "var(--accent)", borderRadius: 2 }} />
      </div>

      <div style={{ maxWidth: 480 }}>
        <p
          style={{
            fontSize: 16,
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: 40,
          }}
        >
          I&apos;m always open to new opportunities, collaborations, or just a
          good conversation about hardware and systems. Feel free to reach out.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <a href="mailto:patelovp@gmail.com" className="contact-link">
            <span
              style={{
                fontSize: 12,
                color: "var(--accent)",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                width: 72,
                flexShrink: 0,
              }}
            >
              Email
            </span>
            <span style={{ fontSize: 14, color: "var(--foreground)" }}>
              patelovp@gmail.com
            </span>
          </a>
          <a href="tel:+19194341120" className="contact-link">
            <span
              style={{
                fontSize: 12,
                color: "var(--accent)",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                width: 72,
                flexShrink: 0,
              }}
            >
              Phone
            </span>
            <span style={{ fontSize: 14, color: "var(--foreground)" }}>
              (919) 434-1120
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/ovpatel/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
          >
            <span
              style={{
                fontSize: 12,
                color: "var(--accent)",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                width: 72,
                flexShrink: 0,
              }}
            >
              LinkedIn
            </span>
            <span style={{ fontSize: 14, color: "var(--foreground)" }}>
              linkedin.com/in/ovpatel
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
