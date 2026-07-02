"use client";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-bg" aria-hidden />

      <div className="hero-inner">
        <div className="hero-panel">
          <h1 className="hero-title">
            Crafted software with the warmth of a place you <em>want to stay</em>.
          </h1>

          <p className="hero-sub">
            We build websites, apps, and AI tools with calm attention to detail — honest process, lasting quality, nothing rushed.
          </p>

          <div className="hero-cta-row">
            <a href="#contact" className="btn-primary">
              Schedule a meeting
              <ArrowRight size={16} />
            </a>
            <a href="#services" className="btn-secondary">
              View services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
