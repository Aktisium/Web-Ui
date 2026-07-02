"use client";
import { Globe, Smartphone, Brain, ShieldCheck, Rocket, Database } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./Services.module.css";

type Service = {
  icon: LucideIcon;
  title: string;
  desc: string;
  tags: string[];
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "Beautiful, fast websites and web apps — from landing pages to full platforms, built with modern tools and a focus on craft.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    desc: "Native and cross-platform experiences for iOS and Android — thoughtful UX, reliable performance, built to scale.",
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "Practical AI that fits your product — chatbots, automation, and ML pipelines integrated with care, not hype.",
    tags: ["LLMs", "RAG", "Automation", "ML"],
  },
  {
    icon: Database,
    title: "Backend & APIs",
    desc: "Solid server architecture, databases, and APIs designed to grow with your business without unnecessary complexity.",
    tags: ["PostgreSQL", "AWS", "Docker", "GraphQL"],
  },
  {
    icon: ShieldCheck,
    title: "Security & DevOps",
    desc: "Reliable deployments, monitoring, and security practices so you can ship confidently and sleep well at night.",
    tags: ["CI/CD", "Audits", "Kubernetes", "Monitoring"],
  },
  {
    icon: Rocket,
    title: "Product Strategy",
    desc: "From idea to roadmap — we help you define scope, prioritize what matters, and build products people actually use.",
    tags: ["UX Research", "Wireframes", "Roadmaps", "MVPs"],
  },
];

function MenuItem({ item }: { item: Service }) {
  const Icon = item.icon;
  return (
    <article className={styles.item}>
      <span className={styles.itemIcon} aria-hidden>
        <Icon size={22} strokeWidth={1.6} />
      </span>
      <h3 className={styles.itemTitle}>{item.title}</h3>
      <p className={styles.itemDesc}>{item.desc}</p>
      <div className={styles.itemTags}>
        {item.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.board}>
        <div className={styles.boardInner}>
          <header className={styles.boardHeader}>
            <span className={styles.eyebrow}>What we do</span>
            <h2 className={styles.boardTitle}>Our Services</h2>
            <div className={styles.ornament} aria-hidden>
              <span /><span>✦</span><span />
            </div>
            <p className={styles.boardLead}>
              End-to-end technology services — from first sketch to a polished, scalable product.
            </p>
          </header>

          <div className={styles.menuList}>
            {services.map((item) => (
              <MenuItem key={item.title} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
