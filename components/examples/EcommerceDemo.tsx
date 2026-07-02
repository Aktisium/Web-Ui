"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, Search, ShoppingCart, Star, Trash2, X } from "lucide-react";

type Product = {
  id: string;
  name: string;
  price: number;
  rating: number;
  category: string;
  emoji: string;
};

const PRODUCTS: Product[] = [
  { id: "1", name: "Aurora Headphones", price: 189, rating: 4.9, category: "Audio", emoji: "🎧" },
  { id: "2", name: "Nexus Smart Watch", price: 299, rating: 4.7, category: "Wearables", emoji: "⌚" },
  { id: "3", name: "Lumen Desk Lamp", price: 79, rating: 4.8, category: "Home", emoji: "💡" },
  { id: "4", name: "Pulse Fitness Band", price: 129, rating: 4.6, category: "Fitness", emoji: "⌛" },
  { id: "5", name: "Echo Portable Speaker", price: 149, rating: 4.5, category: "Audio", emoji: "🔊" },
  { id: "6", name: "Zen Yoga Mat", price: 59, rating: 4.8, category: "Fitness", emoji: "🧘" },
];

const CATEGORIES = ["All", "Audio", "Wearables", "Home", "Fitness"] as const;

type CartLine = { product: Product; qty: number };

export default function EcommerceDemo() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartLine[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutDone, setCheckoutDone] = useState(false);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const catOk = category === "All" || p.category === category;
      const searchOk = !q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
      return catOk && searchOk;
    });
  }, [category, search]);

  const cartCount = cart.reduce((n, l) => n + l.qty, 0);
  const subtotal = cart.reduce((n, l) => n + l.qty * l.product.price, 0);

  function addToCart(product: Product) {
    setCheckoutDone(false);
    setCart((prev) => {
      const existing = prev.find((l) => l.product.id === product.id);
      if (existing) {
        return prev.map((l) =>
          l.product.id === product.id ? { ...l, qty: l.qty + 1 } : l
        );
      }
      return [...prev, { product, qty: 1 }];
    });
  }

  function updateQty(id: string, delta: number) {
    setCart((prev) =>
      prev
        .map((l) =>
          l.product.id === id ? { ...l, qty: l.qty + delta } : l
        )
        .filter((l) => l.qty > 0)
    );
  }

  function removeLine(id: string) {
    setCart((prev) => prev.filter((l) => l.product.id !== id));
  }

  function checkout() {
    if (cart.length === 0) return;
    setCheckoutDone(true);
    setCart([]);
    setTimeout(() => setCheckoutDone(false), 4000);
  }

  return (
    <main style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 2rem 80px" }}>
      <div style={{ marginBottom: 36, display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 20 }}>
        <div>
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 4vw, 48px)",
            letterSpacing: "-0.03em",
            color: "var(--text)",
            marginBottom: 8,
          }}>
            Nexa<span style={{ color: "var(--accent)" }}>Store</span>
          </h1>
          <p style={{ color: "var(--muted)", maxWidth: 480, lineHeight: 1.7, fontSize: 15 }}>
            Full storefront demo — filter products, manage cart, and complete checkout.
          </p>
        </div>
        {checkoutDone && (
          <div style={{
            padding: "12px 20px",
            borderRadius: 10,
            background: "var(--success-bg)",
            border: "1px solid color-mix(in srgb, var(--accent3) 40%, transparent)",
            color: "var(--accent3)",
            fontFamily: "'Space Mono', monospace",
            fontSize: 12,
            animation: "fade-in 0.3s ease",
          }}>
            Order placed successfully
          </div>
        )}
      </div>

      <div className="store-toolbar">
        <div className="store-search-wrap">
          <Search size={18} aria-hidden />
          <input
            className="demo-input store-search-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search products"
          />
        </div>
        <button
          type="button"
          className="demo-btn demo-btn-ghost store-cart-btn"
          onClick={() => setCartOpen(true)}
        >
          <ShoppingCart size={18} color="var(--accent)" />
          Cart ({cartCount})
        </button>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setCategory(cat)}
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: 11,
              padding: "8px 14px",
              borderRadius: 6,
              border: "1px solid var(--border)",
              background: category === cat ? "var(--accent-soft)" : "var(--surface)",
              color: category === cat ? "var(--accent)" : "var(--muted)",
              cursor: "pointer",
              letterSpacing: "0.04em",
              transition: "all 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="demo-panel" style={{ padding: 48, textAlign: "center", color: "var(--muted)" }}>
          No products match your search.
        </div>
      ) : (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 20,
        }}>
          {filtered.map((p) => (
            <article key={p.id} className="demo-panel card-hover" style={{ overflow: "hidden", padding: 0 }}>
              <div style={{
                height: 140,
                background: "linear-gradient(135deg, var(--accent-soft), var(--accent2-soft))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 48,
              }}>
                {p.emoji}
              </div>
              <div style={{ padding: 20 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
                  <Star size={12} fill="#f9ca24" color="#f9ca24" />
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 11, color: "var(--muted)" }}>{p.rating}</span>
                  <span className="demo-tag" style={{ marginLeft: "auto", background: "var(--surface2)", color: "var(--muted)" }}>{p.category}</span>
                </div>
                <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 17, color: "var(--text)", marginBottom: 12 }}>
                  {p.name}
                </h2>
                <div className="store-card-footer">
                  <span className="store-card-price">${p.price}</span>
                  <button type="button" className="demo-btn demo-btn-primary store-add-btn" onClick={() => addToCart(p)}>
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {cartOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 60,
            background: "var(--overlay)",
            display: "flex",
            justifyContent: "flex-end",
          }}
          onClick={() => setCartOpen(false)}
          onKeyDown={(e) => e.key === "Escape" && setCartOpen(false)}
          role="presentation"
        >
          <aside
            className="demo-panel"
            style={{
              width: "min(420px, 100%)",
              height: "100%",
              borderRadius: 0,
              borderLeft: "1px solid var(--border)",
              display: "flex",
              flexDirection: "column",
              animation: "slide-in-right 0.3s ease",
              boxShadow: "var(--shadow-soft)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 20, color: "var(--text)" }}>Your cart</h2>
              <button type="button" onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer" }}>
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, overflow: "auto", padding: 24 }}>
              {cart.length === 0 ? (
                <p style={{ color: "var(--muted)", textAlign: "center", marginTop: 40 }}>Cart is empty</p>
              ) : (
                cart.map((line) => (
                  <div key={line.product.id} style={{ display: "flex", gap: 14, marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
                    <span style={{ fontSize: 32 }}>{line.product.emoji}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, color: "var(--text)", marginBottom: 4 }}>{line.product.name}</div>
                      <div style={{ color: "var(--accent)", fontWeight: 700 }}>${line.product.price}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10 }}>
                        <button type="button" className="demo-btn demo-btn-ghost" style={{ padding: "4px 8px" }} onClick={() => updateQty(line.product.id, -1)}>
                          <Minus size={14} />
                        </button>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: 13, minWidth: 24, textAlign: "center" }}>{line.qty}</span>
                        <button type="button" className="demo-btn demo-btn-ghost" style={{ padding: "4px 8px" }} onClick={() => updateQty(line.product.id, 1)}>
                          <Plus size={14} />
                        </button>
                        <button type="button" onClick={() => removeLine(line.product.id)} style={{ marginLeft: "auto", background: "none", border: "none", color: "var(--accent2)", cursor: "pointer" }}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div style={{ padding: 24, borderTop: "1px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16, fontSize: 15 }}>
                <span style={{ color: "var(--muted)" }}>Subtotal</span>
                <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "var(--text)" }}>${subtotal.toFixed(2)}</span>
              </div>
              <button
                type="button"
                className="demo-btn demo-btn-primary"
                style={{ width: "100%" }}
                disabled={cart.length === 0}
                onClick={() => { checkout(); setCartOpen(false); }}
              >
                Checkout
              </button>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
