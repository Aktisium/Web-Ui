"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

type ThemeToggleProps = {
  size?: "sm" | "md";
};

export default function ThemeToggle({ size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const dim = size === "sm" ? 36 : 40;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className="theme-toggle"
      style={{
        width: dim,
        height: dim,
        borderRadius: 8,
        border: "1px solid var(--border)",
        background: "var(--surface)",
        color: "var(--text)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "border-color 0.2s, background 0.2s, transform 0.2s",
        flexShrink: 0,
      }}
    >
      {theme === "dark" ? <Sun size={size === "sm" ? 16 : 18} /> : <Moon size={size === "sm" ? 16 : 18} />}
    </button>
  );
}
