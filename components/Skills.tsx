const skillGroups = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "Verilog", "SystemVerilog", "VHDL", "Java", "MATLAB", "Assembly", "SQLite"],
  },
  {
    category: "Technologies",
    skills: ["FPGA", "RISC-V", "SPI", "OpenMP", "I2C", "UART", "CAN", "HPC", "MAX78000", "MSP430"],
  },
  {
    category: "Tools",
    skills: ["AMD Vivado", "Icarus Verilog", "Git / GitHub", "KiCAD", "GTKWave", "PyTorch", "Linux", "Docker", "CCStudio"],
  },
  {
    category: "Lab Equipment",
    skills: ["Oscilloscopes", "Multimeters", "Function Generators", "Signal Analyzers"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
        </h2>
        <div
          style={{
            width: 40,
            height: 3,
            background: "var(--accent)",
            borderRadius: 2,
          }}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: 32,
        }}
      >
        {skillGroups.map((group) => (
          <div key={group.category}>
            <p
              style={{
                fontSize: 12,
                color: "var(--accent)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontFamily: "var(--font-geist-mono)",
                marginBottom: 14,
              }}
            >
              {group.category}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  style={{
                    fontSize: 15,
                    color: "var(--foreground)",
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: "var(--border)",
                      flexShrink: 0,
                    }}
                  />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
