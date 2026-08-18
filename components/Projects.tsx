type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  status: "past" | "current";
};

const projects: Project[] = [
  {
    title: "Systolic Array Matrix Multiplier",
    description:
      "Designed and implemented a 4×4 output-stationary systolic array in Verilog for matrix multiplication, verified bit-exact against a numpy golden reference. Built a tiled inference pipeline classifying 8×8 handwritten digit images using int8-quantized weights, achieving 95.83% accuracy with zero degradation from quantization. Optimized tile scheduling with double-buffered loading, reducing inference latency from 1,548 to 890 cycles (42.5% improvement).",
    tags: ["Verilog", "Python", "Icarus Verilog"],
    status: "current",
  },
  {
    title: "RISC-V Pipelined Processor",
    description:
      "Designed a 5-stage pipelined 32-bit RISC-V processor in Verilog (IF → ID → EX → MEM → WB) supporting the RV32I base integer instruction set. Implemented data forwarding and pipeline stall/flush logic to resolve data and control hazards. Achieved 100 MHz clock frequency post-synthesis on a Basys3 Artix-7 FPGA, a 54% improvement over the single-cycle baseline of 65 MHz.",
    tags: ["Verilog", "RISC-V", "Vivado"],
    status: "current",
  },
  {
    title: "Autonomous RC Car",
    description:
      "Built an autonomous navigation system with real-time line-following and waypoint control. Designed adaptive ADC polling for IR sensors, reducing power consumption while maintaining <50 ms response latency. Coordinated concurrent sensor polling, motor control, and Wi-Fi communication.",
    tags: ["C", "MSP430", "UART", "IoT"],
    status: "past",
  },
  {
    title: "LLM-Guided Cache Optimization",
    description:
      "Built an LLM-driven framework combining FunSearch and Graph of Thought reasoning to evolve CPU cache replacement policies. Achieved a 22% improvement in mean IPC vs. baseline SRRIP and SHiP algorithms, placing 5th among 50 undergrad and grad students.",
    tags: ["Python", "C++", "SQLite3", "JSON"],
    status: "past",
  },
  {
    title: "RISC-V Single Cycle Core Processor",
    description:
      "Implemented a 32-bit RISC-V single-cycle processor in Verilog following a reference microarchitecture (datapath, ALU, control, memory). Synthesized and validated on a Basys3 FPGA board using Vivado test benches.",
    tags: ["Verilog", "RISC-V", "Vivado", "FPGA"],
    status: "past",
  },
  {
    title: "ARoS Lab — Research Assistant",
    description:
      "Explored AI-based classification of health metrics using embedded neural network acceleration on the MAX78000. Interfaced sensors via I²C, developed C-based firmware for real-time data acquisition, and verified signal integrity using oscilloscopes and signal analyzers.",
    tags: ["C", "MAX78000", "I2C", "Embedded AI"],
    status: "past",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
        <h3 style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.02em" }}>
          {project.title}
        </h3>
        {project.github && project.github !== "#" && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-gh-link"
          >
            GitHub ↗
          </a>
        )}
      </div>
      <p style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.7 }}>
        {project.description}
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: "auto" }}>
        {project.tags.map((tag) => (
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

const gridStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
  gap: 20,
};

export default function Projects() {
  const past = projects.filter((p) => p.status === "past");
  const current = projects.filter((p) => p.status === "current");

  return (
    <section
      id="projects"
      style={{
        padding: "100px 24px",
        maxWidth: 960,
        margin: "0 auto",
        borderTop: "1px solid var(--border)",
      }}
    >
      <SectionLabel>Projects</SectionLabel>

      {current.length > 0 && (
        <div style={{ marginBottom: 60 }}>
          <SubLabel>Current</SubLabel>
          <div style={gridStyle}>
            {current.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      )}

      {past.length > 0 && (
        <div>
          <SubLabel>Past</SubLabel>
          <div style={gridStyle}>
            {past.map((p) => <ProjectCard key={p.title} project={p} />)}
          </div>
        </div>
      )}
    </section>
  );
}
