"use client";
import { useState } from "react";
import { Send, CheckCircle2, Mail, Clock } from "lucide-react";
import { ReceptionistCharacter } from "./CafeCharacters";
import styles from "./Contact.module.css";

const services = [
  "Web Development",
  "Mobile App",
  "AI Solution",
  "Backend / API",
  "Full Product Build",
  "Other",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Contact</span>
          <h2 className={styles.title}>
            Ring the counter —
            <span className={styles.titleAccent}> we&apos;re listening.</span>
          </h2>
          <p className={styles.lead}>
            No pitch decks, no pressure. Step up to the desk, leave your details, and we&apos;ll
            get back to you for a friendly conversation.
          </p>
        </header>

        <div className={styles.desk}>
          <div className={styles.hostRow}>
            <ReceptionistCharacter className={styles.receptionist} />
            <div className={styles.greetingBubble}>
              <span className={styles.bubbleTail} aria-hidden />
              <span className={styles.bubbleEyebrow}>Good to see you</span>
              <p className={styles.bubbleLead}>
                Pull up a stool and sign the guest book — we&apos;ll reply within a day to set up
                a free discovery call.
              </p>
              <div className={styles.bubbleMeta}>
                <a href="mailto:hello@aktisium.com" className={styles.metaItem}>
                  <Mail size={14} strokeWidth={1.6} aria-hidden />
                  hello@aktisium.com
                </a>
                <span className={styles.metaItem}>
                  <Clock size={14} strokeWidth={1.6} aria-hidden />
                  Reply within 24 hours
                </span>
              </div>
              <span className={styles.discoveryPill}>Free 30-min discovery call</span>
            </div>
          </div>

          <div className={styles.deskBody}>
            <div className={styles.deskTop}>
              <div className={styles.ledger}>
                {submitted ? (
                  <div className={styles.success}>
                    <div className={styles.successIcon}>
                      <CheckCircle2 size={32} strokeWidth={1.6} />
                    </div>
                    <h3 className={styles.successTitle}>Message at the desk</h3>
                    <p className={styles.successText}>
                      We&apos;ve got your note. Expect a reply within 24 hours to schedule your
                      discovery call.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className={styles.ledgerHeader}>
                      <h3 className={styles.ledgerTitle}>Guest book</h3>
                      <p className={styles.ledgerSubtitle}>
                        Tell us what you&apos;re building — we&apos;ll take it from here.
                      </p>
                    </div>
                    <form className={styles.form} onSubmit={submit}>
                      <div className={styles.row}>
                        <div>
                          <label className={styles.label} htmlFor="name">
                            Your name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            className={styles.input}
                            value={form.name}
                            onChange={handle}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className={styles.label} htmlFor="email">
                            Email *
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className={styles.input}
                            value={form.email}
                            onChange={handle}
                            required
                            placeholder="you@company.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className={styles.label} htmlFor="company">
                          Company / project
                        </label>
                        <input
                          id="company"
                          name="company"
                          className={styles.input}
                          value={form.company}
                          onChange={handle}
                          placeholder="Acme Inc."
                        />
                      </div>

                      <div>
                        <label className={styles.label} htmlFor="service">
                          Service interested in
                        </label>
                        <select
                          id="service"
                          name="service"
                          className={styles.select}
                          value={form.service}
                          onChange={handle}
                        >
                          <option value="">Select a service…</option>
                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className={styles.label} htmlFor="message">
                          Your message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          className={styles.textarea}
                          value={form.message}
                          onChange={handle}
                          required
                          placeholder="Share your vision, goals, timeline, and any technical requirements…"
                        />
                      </div>

                      <button type="submit" className={styles.submit} disabled={loading}>
                        {loading ? (
                          <>
                            <span className={styles.spinner} />
                            Sending…
                          </>
                        ) : (
                          <>
                            Leave message at desk
                            <Send size={16} />
                          </>
                        )}
                      </button>

                      <p className={styles.finePrint}>No commitment. No spam. Just a conversation.</p>
                    </form>
                  </>
                )}
              </div>
            </div>

            <div className={styles.deskFront} aria-hidden>
              <span className={styles.nameplate}>Aktisium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
