"use client";
import {
  MessageCircle,
  BookOpen,
  ClipboardPen,
  Coffee,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { ComponentType } from "react";
import {
  HostGreeterCharacter,
  CustomerCharacter,
  CustomerOrderingCharacter,
  BaristaCharacter,
  ServerCharacter,
} from "./CafeCharacters";
import styles from "./Process.module.css";

type CharacterComponent = ComponentType<{ className?: string }>;

type Step = {
  num: string;
  cafeLabel: string;
  title: string;
  desc: string;
  color: string;
  icon: LucideIcon;
  character: CharacterComponent;
  side: "left" | "right";
};

const steps: Step[] = [
  {
    num: "01",
    cafeLabel: "Greet at the counter",
    title: "Discovery call",
    desc: "We start with a relaxed conversation — your vision, goals, constraints, and what success looks like for you.",
    color: "var(--accent)",
    icon: MessageCircle,
    character: HostGreeterCharacter,
    side: "left",
  },
  {
    num: "02",
    cafeLabel: "Browse the menu",
    title: "Strategy & scope",
    desc: "We map the solution together — architecture, timeline, and milestones so everyone knows what to expect.",
    color: "var(--accent2)",
    icon: BookOpen,
    character: CustomerCharacter,
    side: "right",
  },
  {
    num: "03",
    cafeLabel: "Place your order",
    title: "Design & prototype",
    desc: "Wireframes to polished designs. You see and feel the product before we write production code.",
    color: "var(--accent3)",
    icon: ClipboardPen,
    character: CustomerOrderingCharacter,
    side: "left",
  },
  {
    num: "04",
    cafeLabel: "Freshly brewed",
    title: "Build & iterate",
    desc: "Steady development with regular check-ins. We ship, you review, we refine — no surprises.",
    color: "var(--accent4)",
    icon: Coffee,
    character: BaristaCharacter,
    side: "right",
  },
  {
    num: "05",
    cafeLabel: "Served with care",
    title: "Launch & scale",
    desc: "Careful deployment, optimization, and ongoing support. We stay with you after go-live.",
    color: "var(--accent)",
    icon: Sparkles,
    character: ServerCharacter,
    side: "left",
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className={styles.card}>
      <p className={styles.cafeLabel}>{step.cafeLabel}</p>
      <h3 className={styles.stationTitle}>{step.title}</h3>
      <p className={styles.stationDesc}>{step.desc}</p>
    </div>
  );
}

function Milestone({ step }: { step: Step }) {
  const Icon = step.icon;
  const Character = step.character;
  const characterFirst = step.side === "left";

  return (
    <article
      className={styles.milestone}
      style={{ "--step-color": step.color } as React.CSSProperties}
    >
      <div className={styles.sideLeft}>
        {characterFirst ? (
          <Character className={styles.character} />
        ) : (
          <StepCard step={step} />
        )}
      </div>

      <div className={styles.spineCol}>
        <div className={styles.node}>
          <Icon size={22} strokeWidth={1.6} />
          <span className={styles.nodeNum}>{step.num}</span>
        </div>
      </div>

      <div className={styles.sideRight}>
        {characterFirst ? (
          <StepCard step={step} />
        ) : (
          <Character className={styles.character} />
        )}
      </div>
    </article>
  );
}

export default function Process() {
  return (
    <section id="process" className={styles.section}>
      <div className={styles.wash} aria-hidden />

      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>How we work</span>
          <h2 className={styles.title}>Our Process</h2>
          <div className={styles.ornament} aria-hidden>
            <span /><span>☕</span><span />
          </div>
          <p className={styles.lead}>
            Follow the path from counter to cup — greet, choose, customize, brew, and enjoy.
            That&apos;s how we run every project.
          </p>
        </header>

        <div className={styles.roadmap} aria-label="Project process roadmap">
          <div className={styles.spine} aria-hidden />

          {steps.map((step) => (
            <Milestone key={step.num} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
