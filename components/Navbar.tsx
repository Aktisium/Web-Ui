"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import styles from "./Navbar.module.css";

const links = ["Services", "Work", "Process", "About", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.brand}>
          <span className={styles.nameplate}>Aktisium</span>
        </a>

        <div className={styles.links}>
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className={styles.link}>
              {l}
            </a>
          ))}
        </div>

        <div className={styles.actions}>
          <ThemeToggle size="sm" />
          <a href="#contact" className={styles.cta}>
            Ring the counter
          </a>
        </div>

        <div className={styles.mobileBar}>
          <ThemeToggle size="sm" />
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className={styles.menuBtn}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className={styles.mobileLink}
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className={`${styles.cta} ${styles.mobileCta}`}
          >
            Ring the counter
          </a>
        </div>
      )}
    </nav>
  );
}
