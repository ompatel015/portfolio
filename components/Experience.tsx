type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
  tags: string[];
};

const professional: Experience[] = [
  {
    role: "FPGA Engineer Intern",
    org: "Lockheed Martin (previously Ultra Maritime)",
    period: "May 2026 – Present",
    bullets: [
      "Implemented a bidirectional SPI controller in VHDL (master and slave modes), enabling full-duplex communication between an FPGA and microcontroller at 460.8 kbps, supporting GUI-driven configuration and data exchange.",
      "Utilized asynchronous FIFOs to handle clock domain crossing between the FPGA system clock and ADC sampling clock domains in SystemVerilog, preventing metastability and ensuring reliable data transfer across asynchronous boundaries.",
      "Optimized statistical post-processing (mean, standard deviation) and scaling operations on FFT output for real-time signal analysis on FPGA hardware.",
      "Wrote testbenches and performed functional simulation across SPI, CDC, and DSP modules to verify correctness prior to hardware integration, catching timing and logic issues early.",
    ],
    tags: ["VHDL", "SystemVerilog", "SPI", "FPGA"],
  },
];

const experience: Experience[] = [
  {
    role: "Research Assistant",
    org: "ARoS Lab",
    period: "Jan 2025 – May 2025",
    bullets: [
      "Collaborated with a research team to explore AI-based classification of health metrics using embedded neural network acceleration, evaluating multiple physiological and environmental sensors.",
      "Interfaced sensors with the MAX78000 microcontroller using the I²C communication protocol for real-time data acquisition and preprocessing.",
      "Developed C-based embedded firmware to collect, visualize, and analyze sensor data for pattern consistency and noise reduction.",
      "Constructed test environments and verified accuracy using oscilloscopes and signal analyzers, following lab protocols, reading and creating new schematics.",
    ],
    tags: ["C", "MAX78000", "I2C", "Embedded AI"],
  },
];

const volunteering: Experience[] = [
  {
    role: "Robotics Team Engineering Mentor",
    org: "",
    period: "Aug 2024 – Present",
    bullets: [
      "Mentoring students through robot design, controls integration, testing, and strategy across the build season.",
      "Teaching high-school students the theory behind mechanical and electrical design, preparing them for an engineering future.",
    ],
    tags: [],
  },
  {
    role: "Youth Activities Coordinator",
    org: "BAPS",
    period: "Jan 2022 – Present",
    bullets: [
      "Directing a team of 35 to organize weekly assemblies and large-scale events, impacting 800–1000 kids annually.",
      "Developed and implemented new curriculum and retention processes that led to a 100% increase in average attendance over 2 years.",
    ],
    tags: [],
  },
];

function ExperienceCard({ item }: { item: Experience }) {
  return (
    <div className="project-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>
            {item.role}
            {item.org && (
              <span style={{ color: "var(--accent)" }}> · {item.org}</span>
            )}
          </h3>
        </div>
        <span
          style={{
            fontSize: 12,
            color: "var(--muted)",
            fontFamily: "var(--font-geist-mono)",
            whiteSpace: "nowrap",
          }}
        >
          {item.period}
        </span>
      </div>
      <ul style={{ display: "flex", flexDirection: "column", gap: 8, paddingLeft: 18 }}>
        {item.bullets.map((bullet, i) => (
          <li key={i} style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
            {bullet}
          </li>
        ))}
      </ul>
      {item.tags.length > 0 && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontSize: 12,
                padding: "4px 10px",
                background: "rgba(124,106,245,0.1)",
                color: "var(--accent)",
                borderRadius: 999,
                fontFamily: "var(--font-geist-mono)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2
        style={{
          fontSize: "clamp(28px, 5vw, 40px)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          marginBottom: 8,
        }}
      >
        {children}
      </h2>
      <div style={{ width: 40, height: 3, background: "var(--accent)", borderRadius: 2 }} />
    </div>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3
      style={{
        fontSize: 13,
        color: "var(--muted)",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        fontFamily: "var(--font-geist-mono)",
        marginBottom: 20,
      }}
    >
      {children}
    </h3>
  );
}

const stackStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 20,
};

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 24px",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Experience</SectionLabel>

      <div style={{ marginBottom: 60 }}>
        <SubLabel>Professional</SubLabel>
        <div style={stackStyle}>
          {professional.map((item) => (
            <ExperienceCard key={item.role} item={item} />
          ))}
        </div>
      </div>

      <div style={{ marginBottom: 60 }}>
        <SubLabel>Research</SubLabel>
        <div style={stackStyle}>
          {experience.map((item) => (
            <ExperienceCard key={item.role} item={item} />
          ))}
        </div>
      </div>

      <div>
        <SubLabel>Volunteering</SubLabel>
        <div style={stackStyle}>
          {volunteering.map((item) => (
            <ExperienceCard key={item.role} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
