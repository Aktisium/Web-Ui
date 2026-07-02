"use client";
import styles from "./About.module.css";
import ChalkTechDoodles from "./ChalkTechDoodles";

const values = [
  "We treat your product like our own — obsessing over details that users feel.",
  "No bloated teams. Every person on your project owns their craft.",
  "Transparent communication throughout — no jargon, no black boxes.",
  "We ship fast without cutting corners on code quality or security.",
];

const philosophy = [
  { label: "Mission", value: "Deliver technology that outlasts trends." },
  { label: "Vision", value: "Every ambitious team deserves access to excellent craft." },
  { label: "Approach", value: "Senior talent, clear communication, outcome-focused." },
  { label: "Principle", value: "The right tool for the job — always." },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.frame}>
          <div className={styles.board}>
            <ChalkTechDoodles />

            <div className={styles.boardContent}>
              <div className={styles.grid}>
                <div>
                  <span className={styles.eyebrow}>About us</span>
                  <h2 className={styles.title}>
                    Built by makers,
                    <span className={styles.titleAccent}>for ambitious teams.</span>
                  </h2>
                  <p className={styles.lead}>
                    Aktisium was founded on a simple belief: most agencies over-promise and
                    under-deliver. We&apos;re the alternative — a lean, senior team that moves with
                    intention, communicates clearly, and ships work that lasts.
                  </p>
                  <p className={styles.lead}>
                    Whether you&apos;re a startup finding your footing or a growing company that
                    needs a reliable partner, we tailor our approach to where you are today.
                  </p>
                  <ul className={styles.values}>
                    {values.map((v) => (
                      <li key={v} className={styles.valueItem}>
                        <span className={styles.valueMark} aria-hidden>
                          ✓
                        </span>
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>

                <aside className={styles.sidePanel}>
                  <h3 className={styles.sideTitle}>Our philosophy</h3>
                  {philosophy.map((item) => (
                    <div key={item.label} className={styles.philosophyItem}>
                      <div className={styles.philosophyLabel}>{item.label}</div>
                      <div className={styles.philosophyValue}>{item.value}</div>
                    </div>
                  ))}
                  <div className={styles.available}>
                    <span className={styles.availableDot} aria-hidden />
                    Available for new projects
                  </div>
                </aside>
              </div>
            </div>

            <div className={styles.tray} aria-hidden>
              <span className={`${styles.chalkStick} ${styles.chalkWhite}`} />
              <span className={`${styles.chalkStick} ${styles.chalkTerracotta}`} />
              <span className={`${styles.chalkStick} ${styles.chalkSage}`} />
              <span className={styles.eraser} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
