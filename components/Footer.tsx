export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: 13,
          color: "var(--muted)",
          fontFamily: "var(--font-geist-mono)",
        }}
      >
        © {new Date().getFullYear()} Om Patel
      </p>
    </footer>
  );
}
