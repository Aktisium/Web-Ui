"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WaiterMascot from "./WaiterMascot";
import styles from "./Work.module.css";

const coffees = [
  {
    href: "/examples/ecommerce",
    roast: "E-commerce",
    name: "The Merchant's Mocha",
    desc: "A sample shop with search, cart, and checkout — the kind of polished buying experience we build for clients.",
    color: "#6B4423",
  },
  {
    href: "/examples/management",
    roast: "Management",
    name: "The Daily Pour-Over",
    desc: "Tasks, teams, and workflows in one calm admin panel — built for clarity over clutter.",
    color: "#A66B47",
  },
  {
    href: "/examples/dashboard",
    roast: "Dashboard",
    name: "The House Cold Brew",
    desc: "KPIs and charts that make sense at a glance — data presented with intention, not noise.",
    color: "#4A3228",
  },
];

export default function Work() {
  return (
    <section id="work" className={styles.section}>
      <div className={styles.tableScene}>
        <div className={styles.hostRow}>
          <WaiterMascot className={styles.waiter} />

          <div className={styles.speechBubble}>
            <span className={styles.bubbleTail} aria-hidden />
            <span className={styles.eyebrow}>Selected work</span>
            <h2 className={styles.bubbleTitle}>What we&apos;ve built</h2>
            <p className={styles.bubbleLead}>
              Right this way — take a seat! Here&apos;s what&apos;s fresh from our kitchen. Each cup is a live demo you can explore.
            </p>
            <a href="#contact" className={styles.contactLink}>
              Start a project
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className={styles.tableAssembly}>
          <div className={styles.tableTop}>
            <div className={styles.cupsGrid}>
              {coffees.map((coffee) => (
                <Link
                  key={coffee.href}
                  href={coffee.href}
                  className={styles.coffeeCard}
                  style={{ "--coffee-color": coffee.color } as React.CSSProperties}
                >
                  <div className={styles.cupWrap}>
                    <div className={styles.steam} aria-hidden>
                      <span /><span /><span />
                    </div>
                    <div className={styles.cup}>
                      <div className={styles.cupLiquid} />
                      <div className={styles.cupHandle} aria-hidden />
                    </div>
                    <div className={styles.saucer} />
                  </div>

                  <span className={styles.roast}>{coffee.roast}</span>
                  <h3 className={styles.coffeeName}>{coffee.name}</h3>
                  <p className={styles.coffeeDesc}>{coffee.desc}</p>
                  <span className={styles.coffeeCta}>
                    Take a sip
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            <p className={styles.tableCaption}>
              Freshly brewed demos — tap any cup to taste the real thing.
            </p>
          </div>

          <div className={styles.tableLegs} aria-hidden>
            <div className={styles.tableLeg} />
            <div className={styles.tableLeg} />
          </div>
        </div>
      </div>
    </section>
  );
}
