"use client";

import { useMemo, useState } from "react";
import { CheckCircle2, Circle, Plus, Trash2, Users } from "lucide-react";

type TaskStatus = "Todo" | "In progress" | "Done";
type Priority = "Low" | "Medium" | "High";

type Task = {
  id: string;
  title: string;
  assignee: string;
  status: TaskStatus;
  priority: Priority;
};

const NAV = ["Overview", "Team", "Projects", "Tasks", "Settings"] as const;
const ASSIGNEES = ["Alex M.", "Sam K.", "Jordan L.", "Riley P.", "Casey T."];

const INITIAL_TASKS: Task[] = [
  { id: "1", title: "Onboard new client workspace", assignee: "Alex M.", status: "In progress", priority: "High" },
  { id: "2", title: "Q2 roadmap review", assignee: "Sam K.", status: "Done", priority: "Medium" },
  { id: "3", title: "Update billing integrations", assignee: "Jordan L.", status: "Todo", priority: "High" },
  { id: "4", title: "Security audit checklist", assignee: "Riley P.", status: "In progress", priority: "Low" },
];

const STATUS_CYCLE: TaskStatus[] = ["Todo", "In progress", "Done"];

export default function ManagementDemo() {
  const [activeNav, setActiveNav] = useState<(typeof NAV)[number]>("Tasks");
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [newTitle, setNewTitle] = useState("");
  const [filterStatus, setFilterStatus] = useState<TaskStatus | "All">("All");

  const stats = useMemo(() => ({
    active: tasks.filter((t) => t.status !== "Done").length,
    team: ASSIGNEES.length,
    completed: tasks.filter((t) => t.status === "Done").length,
  }), [tasks]);

  const visibleTasks = useMemo(
    () => (filterStatus === "All" ? tasks : tasks.filter((t) => t.status === filterStatus)),
    [tasks, filterStatus]
  );

  function addTask() {
    const title = newTitle.trim();
    if (!title) return;
    setTasks((prev) => [
      {
        id: String(Date.now()),
        title,
        assignee: ASSIGNEES[prev.length % ASSIGNEES.length],
        status: "Todo",
        priority: "Medium",
      },
      ...prev,
    ]);
    setNewTitle("");
  }

  function cycleStatus(id: string) {
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== id) return t;
        const idx = STATUS_CYCLE.indexOf(t.status);
        return { ...t, status: STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length] };
      })
    );
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  function statusColor(status: TaskStatus) {
    if (status === "Done") return "var(--accent3)";
    if (status === "In progress") return "var(--accent)";
    return "var(--muted)";
  }

  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "32px 2rem 80px" }}>
      <div className="management-demo-grid" style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 24, alignItems: "start" }}>
        <aside className="demo-panel" style={{ padding: 24 }}>
          <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: "var(--accent2)", marginBottom: 24 }}>
            OpsHub
          </div>
          <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setActiveNav(item)}
                style={{
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "none",
                  textAlign: "left",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 12,
                  color: activeNav === item ? "var(--accent2)" : "var(--muted)",
                  background: activeNav === item ? "var(--accent2-soft)" : "transparent",
                  letterSpacing: "0.04em",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <div>
          <div style={{ marginBottom: 28 }}>
            <h1 style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 40px)",
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: 8,
            }}>
              {activeNav}
            </h1>
            <p style={{ color: "var(--muted)", fontSize: 14 }}>
              {activeNav === "Tasks"
                ? "Add tasks, update status, and filter your workflow — fully interactive."
                : `${activeNav} view — switch to Tasks to manage your board.`}
            </p>
          </div>

          {activeNav !== "Tasks" ? (
            <div className="demo-panel" style={{ padding: 48, textAlign: "center" }}>
              <p style={{ color: "var(--muted)", marginBottom: 16 }}>This section is a preview panel.</p>
              <button type="button" className="demo-btn demo-btn-primary" onClick={() => setActiveNav("Tasks")}>
                Open task board
              </button>
            </div>
          ) : (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16, marginBottom: 28 }}>
                {[
                  { label: "Active tasks", value: stats.active, icon: Circle },
                  { label: "Team members", value: stats.team, icon: Users },
                  { label: "Completed", value: stats.completed, icon: CheckCircle2 },
                ].map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <div key={stat.label} className="demo-panel" style={{ padding: 20 }}>
                      <Icon size={18} color="var(--accent2)" style={{ marginBottom: 12 }} />
                      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 28, color: "var(--text)" }}>{stat.value}</div>
                      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: 10, color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.06em", marginTop: 4 }}>{stat.label}</div>
                    </div>
                  );
                })}
              </div>

              <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                {(["All", ...STATUS_CYCLE] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setFilterStatus(s)}
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: 10,
                      padding: "6px 12px",
                      borderRadius: 6,
                      border: "1px solid var(--border)",
                      background: filterStatus === s ? "var(--accent2-soft)" : "var(--surface)",
                      color: filterStatus === s ? "var(--accent2)" : "var(--muted)",
                      cursor: "pointer",
                      textTransform: "uppercase",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>

              <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                <input
                  className="demo-input"
                  placeholder="New task title..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && addTask()}
                />
                <button type="button" className="demo-btn demo-btn-primary" onClick={addTask} style={{ display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
                  <Plus size={16} /> Add
                </button>
              </div>

              <div className="demo-panel" style={{ overflow: "hidden" }}>
                <div className="management-table-header" style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 110px 110px 70px 40px",
                  gap: 12,
                  padding: "14px 20px",
                  borderBottom: "1px solid var(--border)",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 10,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}>
                  <span>Task</span>
                  <span>Assignee</span>
                  <span>Status</span>
                  <span>Priority</span>
                  <span />
                </div>
                {visibleTasks.length === 0 ? (
                  <p style={{ padding: 32, textAlign: "center", color: "var(--muted)" }}>No tasks in this filter.</p>
                ) : (
                  visibleTasks.map((t) => (
                    <div
                      key={t.id}
                      className="management-table-row"
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 110px 110px 70px 40px",
                        gap: 12,
                        padding: "14px 20px",
                        borderBottom: "1px solid var(--border)",
                        alignItems: "center",
                        fontSize: 14,
                      }}
                    >
                      <span style={{ color: "var(--text)", fontWeight: 500 }}>{t.title}</span>
                      <span style={{ color: "var(--muted)", fontFamily: "'Space Mono', monospace", fontSize: 11 }}>{t.assignee}</span>
                      <button
                        type="button"
                        onClick={() => cycleStatus(t.id)}
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: 10,
                          color: statusColor(t.status),
                          background: "var(--surface2)",
                          border: "1px solid var(--border)",
                          borderRadius: 4,
                          padding: "6px 8px",
                          cursor: "pointer",
                          textTransform: "uppercase",
                        }}
                      >
                        {t.status}
                      </button>
                      <span style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: 10,
                        color: t.priority === "High" ? "var(--accent2)" : "var(--muted)",
                      }}>
                        {t.priority}
                      </span>
                      <button type="button" onClick={() => deleteTask(t.id)} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer" }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .management-demo-grid { grid-template-columns: 1fr !important; }
          .management-table-header,
          .management-table-row {
            grid-template-columns: 1fr 80px 40px !important;
          }
          .management-table-header span:nth-child(2),
          .management-table-header span:nth-child(4),
          .management-table-row span:nth-child(2),
          .management-table-row button:nth-child(3),
          .management-table-row span:nth-child(4) { display: none; }
        }
      `}</style>
    </main>
  );
}
