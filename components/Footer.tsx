"use client";

import { Fragment } from "react";
import styles from "./Footer.module.css";

const links = ["Services", "Work", "Process", "About", "Contact"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.plank}>
        <div className={styles.plankTop}>
          <div className={styles.topRow}>
            <div className={styles.brand}>
              <span className={styles.nameplate}>Aktisium</span>
              <p className={styles.tagline}>Thoughtful technology, built to last.</p>
            </div>

            <nav className={styles.navLinks} aria-label="Footer">
              {links.map((l, i) => (
                <Fragment key={l}>
                  {i > 0 && (
                    <span className={styles.navDot} aria-hidden>
                      ·
                    </span>
                  )}
                  <a href={`#${l.toLowerCase()}`} className={styles.navLink}>
                    {l}
                  </a>
                </Fragment>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.plankBottom}>
          <p className={styles.copyright}>© {new Date().getFullYear()} Aktisium Technology</p>
          <p className={styles.closing}>Thanks for stopping by.</p>
          <a href="mailto:hello@aktisium.com" className={styles.email}>
            hello@aktisium.com
          </a>
        </div>
      </div>
    </footer>
  );
}
