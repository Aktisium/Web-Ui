import {
  siReact,
  siLinux,
  siNodedotjs,
  siTypescript,
  siNextdotjs,
  siDocker,
  siPostgresql,
  siPython,
  siGit,
  type SimpleIcon,
} from "simple-icons";
import { DiJava } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import type { IconType } from "react-icons";
import styles from "./ChalkTechDoodles.module.css";

type DoodleProps = {
  className?: string;
};

function SimpleIconMark({ icon }: { icon: SimpleIcon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      role="img"
      aria-label={icon.title}
    >
      <path d={icon.path} />
    </svg>
  );
}

function ReactIconMark({ icon: Icon }: { icon: IconType }) {
  return <Icon aria-hidden />;
}

type Placement =
  | { id: string; kind: "simple"; icon: SimpleIcon; className: string }
  | { id: string; kind: "react-icon"; icon: IconType; className: string };

const placements: Placement[] = [
  { id: "react", kind: "simple", icon: siReact, className: styles.react },
  { id: "java", kind: "react-icon", icon: DiJava, className: styles.java },
  { id: "linux", kind: "simple", icon: siLinux, className: styles.linux },
  { id: "node", kind: "simple", icon: siNodedotjs, className: styles.node },
  { id: "typescript", kind: "simple", icon: siTypescript, className: styles.typescript },
  { id: "nextjs", kind: "simple", icon: siNextdotjs, className: styles.nextjs },
  { id: "docker", kind: "simple", icon: siDocker, className: styles.docker },
  { id: "aws", kind: "react-icon", icon: FaAws, className: styles.aws },
  { id: "postgres", kind: "simple", icon: siPostgresql, className: styles.postgres },
  { id: "python", kind: "simple", icon: siPython, className: styles.python },
  { id: "git", kind: "simple", icon: siGit, className: styles.git },
];

function Spark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M8 2 L9 7 L14 8 L9 9 L8 14 L7 9 L2 8 L7 7 Z"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Dot({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 8 8" aria-hidden>
      <circle cx="4" cy="4" r="2" fill="currentColor" />
    </svg>
  );
}

export default function ChalkTechDoodles({ className }: DoodleProps) {
  return (
    <div className={`${styles.layer} ${className ?? ""}`} aria-hidden>
      {placements.map((item) => (
        <div key={item.id} className={`${styles.icon} ${item.className}`}>
          {item.kind === "simple" ? (
            <SimpleIconMark icon={item.icon} />
          ) : (
            <ReactIconMark icon={item.icon} />
          )}
        </div>
      ))}
      <Spark className={`${styles.accent} ${styles.spark1}`} />
      <Spark className={`${styles.accent} ${styles.spark2}`} />
      <Spark className={`${styles.accent} ${styles.spark3}`} />
      <Dot className={`${styles.accent} ${styles.dot1}`} />
      <Dot className={`${styles.accent} ${styles.dot2}`} />
      <Dot className={`${styles.accent} ${styles.dot3}`} />
      <Dot className={`${styles.accent} ${styles.dot4}`} />
      <Dot className={`${styles.accent} ${styles.dot5}`} />
    </div>
  );
}
