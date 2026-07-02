"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, DollarSign, TrendingUp, Users } from "lucide-react";

type Range = "7d" | "30d" | "90d";

const DATA: Record<Range, { revenue: number; users: number; conversion: number; bars: number[]; channels: { name: string; pct: number }[] }> = {
  "7d": {
    revenue: 12400,
    users: 892,
    conversion: 3.2,
    bars: [55, 72, 48, 80, 65, 90, 78],
    channels: [
      { name: "Organic search", pct: 38 },
      { name: "Paid ads", pct: 32 },
      { name: "Referral", pct: 20 },
      { name: "Direct", pct: 10 },
    ],
  },
  "30d": {
    revenue: 48200,
    users: 3842,
    conversion: 4.7,
    bars: [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88],
    channels: [
      { name: "Organic search", pct: 42 },
      { name: "Paid ads", pct: 28 },
      { name: "Referral", pct: 18 },
      { name: "Direct", pct: 12 },
    ],
  },
  "90d": {
    revenue: 128400,
    users: 11200,
    conversion: 5.1,
    bars: [35, 50, 60, 45, 70, 55, 80, 65, 90, 75, 85, 92],
    channels: [
      { name: "Organic search", pct: 45 },
      { name: "Paid ads", pct: 25 },
      { name: "Referral", pct: 20 },
      { name: "Direct", pct: 10 },
    ],
  },
};

const ACTIVITY = [
  "New signup from enterprise tier",
  "Deployment v2.4.1 completed",
  "Support ticket resolved #1842",
  "Weekly report exported",
  "API rate limit adjusted for partner",
];

function useCountUp(target: number, duration = 600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);
  return value;
}

export default function DashboardDemo() {
  const [range, setRange] = useState<Range>("30d");
  const [hoverBar, setHoverBar] = useState<number | null>(null);

  const data = DATA[range];
  const revenueDisplay = useCountUp(data.revenue);
  const usersDisplay = useCountUp(data.users);

  const kpis = useMemo(() => [
    { label: "Revenue", value: `$${(revenueDisplay / 1000).toFixed(1)}k`, change: range === "7d" ? "+4.2%" : range === "30d" ? "+12.4%" : "+18.1%", icon: DollarSign, color: "var(--accent)" },
    { label: "Active users", value: usersDisplay.toLocaleString(), change: range === "7d" ? "+2.1%" : "+8.1%", icon: Users, color: "var(--accent2)" },
    { label: "Conversion", value: `${data.conversion}%`, change: "+0.6%", icon: TrendingUp, color: "var(--accent3)" },
    { label: "Uptime", value: "99.98%", change: "Stable", icon: Activity, color: "#f9ca24" },
  ], [range, data.conversion, revenueDisplay, usersDisplay]);

  const rangeLabel = { "7d": "Last 7 days", "30d": "Last 30 days", "90d": "Last 90 days" }[range];

  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 2rem 80px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
        <div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 8,
          }}>
            Data<span style={{ color: "var(--accent3)" }}>Pulse</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 520, lineHeight: 1.7, fontSize: 15 }}>
            Interactive analytics — change time range and hover the chart to explore metrics.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          {(["7d", "30d", "90d"] as Range[]).map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: 11,
                padding: "8px 14px",
                borderRadius: 6,
                border: "1px solid var(--border)",
                background: range === r ? "var(--accent3-soft)" : "var(--surface)",
                color: range === r ? "var(--accent3)" : "var(--muted)",
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 28 }}>
        {kpis.map((k) => {
          const Icon = k.icon;
          return (
            <div key={k.label} className="demo-panel card-hover" style={{ padding: 24 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{k.label}</span>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `color-mix(in srgb, ${k.color} 15%, transparent)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon size={18} color={k.color} />
                </div>
              </div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "var(--text)", marginBottom: 6 }}>{k.value}</div>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: k.color }}>{k.change}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 20 }}>
        <div className="demo-panel" style={{ padding: 28, gridColumn: "1 / -1" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "var(--text)" }}>Performance</h2>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{rangeLabel}</span>
          </div>
          {hoverBar !== null && (
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 12, color: "var(--accent3)", marginBottom: 12 }}>
              Period {hoverBar + 1}: {data.bars[hoverBar]}% of target
            </div>
          )}
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 200 }}>
            {data.bars.map((h, i) => (
              <button
                key={i}
                type="button"
                onMouseEnter={() => setHoverBar(i)}
                onMouseLeave={() => setHoverBar(null)}
                onFocus={() => setHoverBar(i)}
                onBlur={() => setHoverBar(null)}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: "6px 6px 0 0",
                  border: "none",
                  cursor: "pointer",
                  background: hoverBar === i
                    ? "linear-gradient(180deg, var(--accent3), color-mix(in srgb, var(--accent3) 40%, transparent))"
                    : `linear-gradient(180deg, color-mix(in srgb, var(--accent3) ${h}%, transparent), var(--accent3-soft))`,
                  minWidth: 12,
                  transition: "transform 0.15s, opacity 0.15s",
                  transform: hoverBar === i ? "scaleY(1.02)" : "scaleY(1)",
                  transformOrigin: "bottom",
                }}
                aria-label={`Bar ${i + 1}, value ${h}`}
              />
            ))}
          </div>
        </div>

        <div className="demo-panel" style={{ padding: 28 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 20 }}>Top channels</h2>
          {data.channels.map((ch) => (
            <div key={ch.name} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13 }}>
                <span style={{ color: "var(--text)" }}>{ch.name}</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--accent3)" }}>{ch.pct}%</span>
              </div>
              <div style={{ height: 6, borderRadius: 3, background: "var(--border)", overflow: "hidden" }}>
                <div style={{
                  width: `${ch.pct}%`,
                  height: "100%",
                  background: "linear-gradient(90deg, var(--accent3), var(--accent))",
                  borderRadius: 3,
                  transition: "width 0.4s ease",
                }} />
              </div>
            </div>
          ))}
        </div>

        <div className="demo-panel" style={{ padding: 28 }}>
          <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "var(--text)", marginBottom: 20 }}>Recent activity</h2>
          {ACTIVITY.map((item, i) => (
            <div key={item} style={{
              padding: "12px 0",
              borderBottom: i < ACTIVITY.length - 1 ? "1px solid var(--border)" : "none",
              fontSize: 13,
              color: "var(--muted)",
              animation: `fade-in 0.3s ease ${i * 0.05}s both`,
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
