"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        maxWidth: 1100,
        margin: "0 auto",
        gap: 48,
      }}
    >
      {/* Left: text */}
      <div style={{ flex: "1 1 400px", maxWidth: 580 }}>
        <p
          style={{
            fontSize: 14,
            color: "var(--accent)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 20,
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Hello, I&apos;m
        </p>
        <h1
          style={{
            fontSize: "clamp(40px, 8vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            marginBottom: 24,
          }}
        >
          Om Patel
        </h1>
        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 20px)",
            color: "var(--muted)",
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 520,
          }}
        >
          Computer Engineering student at NC State specializing in computer
          architecture and digital design, working across the stack from RTL
          to FPGA/ASIC implementation.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a href="#projects" className="btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn-outline">
            Get in Touch
          </a>
          <a
            href="/OmResume.pdf"
            download
            className="btn-outline"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Resume
          </a>
        </div>
      </div>

      {/* Right: CPU graphic */}
      <div
        style={{
          flex: "1 1 340px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease",
        }}
      >
        <CpuGraphic />
      </div>
    </section>
  );
}

function CpuGraphic() {
  const accent = "var(--accent)";
  const dim = "rgba(99,102,241,0.25)";
  const size = 340;

  // Pin rows: [x, y] positions along chip edges
  const topPins = [100, 130, 160, 190, 210, 240];
  const bottomPins = [100, 130, 160, 190, 210, 240];
  const leftPins = [130, 155, 180, 205, 230];
  const rightPins = [130, 155, 180, 205, 230];

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 340 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ maxWidth: "100%", height: "auto" }}
    >
      <style>{`
        @keyframes trace {
          0%   { stroke-dashoffset: 200; opacity: 0.2; }
          50%  { opacity: 1; }
          100% { stroke-dashoffset: 0; opacity: 0.2; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 1; }
        }
        .trace1 { animation: trace 3s ease-in-out infinite; }
        .trace2 { animation: trace 3s ease-in-out 0.6s infinite; }
        .trace3 { animation: trace 3s ease-in-out 1.2s infinite; }
        .trace4 { animation: trace 3s ease-in-out 1.8s infinite; }
        .trace5 { animation: trace 3s ease-in-out 2.4s infinite; }
        .dot-pulse { animation: pulse 2s ease-in-out infinite; }
      `}</style>

      {/* Outer glow */}
      <rect x="80" y="80" width="180" height="180" rx="8"
        fill="none" stroke={dim} strokeWidth="1" />

      {/* Top pins & traces */}
      {topPins.map((x, i) => (
        <g key={`top-${i}`}>
          <line x1={x} y1={60} x2={x} y2={80} stroke={accent} strokeWidth="2"
            strokeDasharray="20" className={`trace${(i % 5) + 1}`} />
          <rect x={x - 4} y={54} width="8" height="6" rx="1" fill={dim} stroke={accent} strokeWidth="1" />
        </g>
      ))}

      {/* Bottom pins & traces */}
      {bottomPins.map((x, i) => (
        <g key={`bot-${i}`}>
          <line x1={x} y1={260} x2={x} y2={280} stroke={accent} strokeWidth="2"
            strokeDasharray="20" className={`trace${((i + 2) % 5) + 1}`} />
          <rect x={x - 4} y={280} width="8" height="6" rx="1" fill={dim} stroke={accent} strokeWidth="1" />
        </g>
      ))}

      {/* Left pins & traces */}
      {leftPins.map((y, i) => (
        <g key={`left-${i}`}>
          <line x1={60} y1={y} x2={80} y2={y} stroke={accent} strokeWidth="2"
            strokeDasharray="20" className={`trace${((i + 1) % 5) + 1}`} />
          <rect x={54} y={y - 4} width="6" height="8" rx="1" fill={dim} stroke={accent} strokeWidth="1" />
        </g>
      ))}

      {/* Right pins & traces */}
      {rightPins.map((y, i) => (
        <g key={`right-${i}`}>
          <line x1={260} y1={y} x2={280} y2={y} stroke={accent} strokeWidth="2"
            strokeDasharray="20" className={`trace${((i + 3) % 5) + 1}`} />
          <rect x={280} y={y - 4} width="6" height="8" rx="1" fill={dim} stroke={accent} strokeWidth="1" />
        </g>
      ))}

      {/* Chip body */}
      <rect x="80" y="80" width="180" height="180" rx="6"
        fill="#0d0d0d" stroke={accent} strokeWidth="1.5" />

      {/* Inner die */}
      <rect x="110" y="110" width="120" height="120" rx="4"
        fill="#111" stroke={dim} strokeWidth="1" />

      {/* Internal grid lines */}
      {[130, 150, 170, 190, 210].map((v, i) => (
        <g key={`grid-${i}`}>
          <line x1={v} y1={110} x2={v} y2={230} stroke={dim} strokeWidth="0.5" />
          <line x1={110} y1={v} x2={230} y2={v} stroke={dim} strokeWidth="0.5" />
        </g>
      ))}

      {/* Internal blocks */}
      <rect x="118" y="118" width="40" height="28" rx="2" fill={dim} />
      <rect x="166" y="118" width="48" height="28" rx="2" fill={dim} />
      <rect x="118" y="154" width="96" height="18" rx="2" fill={dim} />
      <rect x="118" y="180" width="44" height="40" rx="2" fill={dim} />
      <rect x="170" y="180" width="44" height="40" rx="2" fill={dim} />

      {/* Pulsing dots at intersections */}
      {[
        [138, 132], [185, 132], [170, 163],
        [140, 200], [192, 200], [170, 230],
      ].map(([cx, cy], i) => (
        <circle key={`dot-${i}`} cx={cx} cy={cy} r="3"
          fill={accent} className="dot-pulse"
          style={{ animationDelay: `${i * 0.4}s` }} />
      ))}

      {/* Corner notch (pin 1 indicator) */}
      <polygon points="80,80 96,80 80,96" fill={accent} opacity="0.6" />

      {/* Label */}
      <text x="170" y="252" textAnchor="middle"
        fill={accent} fontSize="8" fontFamily="monospace" letterSpacing="2" opacity="0.7">
        ECE · NCSU
      </text>
    </svg>
  );
}
