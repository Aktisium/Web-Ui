"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ThemeToggle from "../ThemeToggle";

export default function ExamplesShell({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)", transition: "background 0.35s ease" }}>
      <header style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        borderBottom: "1px solid var(--border)",
        background: "var(--header-bg)",
        backdropFilter: "blur(20px)",
        padding: "0 2rem",
      }}>
        <div style={{
          maxWidth: 1280,
          margin: "0 auto",
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}>
          <Link
            href="/#work"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              color: "var(--muted)",
              textDecoration: "none",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <ArrowLeft size={14} />
            Back to samples
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 10,
              color: "var(--accent)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 10px",
              borderRadius: 4,
              border: "1px solid color-mix(in srgb, var(--accent) 35%, transparent)",
              background: "var(--accent-soft)",
            }}>
              Live demo
            </span>
            <ThemeToggle size="sm" />
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
