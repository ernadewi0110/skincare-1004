"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/login-modal";
import { products } from "@/lib/products";

export function Header() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialIsLogin, setInitialIsLogin] = useState(true);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link href="/" className="text-sm hover:text-primary transition-colors">
            Beranda
            </Link>
          <Link href="/shop" className="text-sm hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="#our-story" className="text-sm hover:text-primary transition-colors">
            Our Story
          </Link>
          <Link href="#ingredients" className="text-sm hover:text-primary transition-colors">
            Ingredients
          </Link>
          <Link href="#skin-iq" className="text-sm hover:text-primary transition-colors">
            Skin IQ
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-light tracking-[0.3em]">BEAUTYFEST</h1>
        </Link>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <Search size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-72 p-4">
              <SearchBox onNavigate={() => { }} />
            </PopoverContent>
          </Popover>
          <Popover>
            <PopoverTrigger asChild>
              <button className="text-muted-foreground hover:text-foreground transition-colors">
                <User size={20} />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-44">
              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => {
                    setInitialIsLogin(true);
                    setModalOpen(true);
                  }}
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    setInitialIsLogin(false);
                    setModalOpen(true);
                  }}
                  variant="outline"
                >
                  Register
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          <Link href="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart size={20} />
          </Link>
        </div>
        <LoginModal open={modalOpen} onClose={() => setModalOpen(false)} initialIsLogin={initialIsLogin} />
      </div>
    </header>
  );
}

function SearchBox({ onNavigate }: { onNavigate?: () => void }) {
  const [query, setQuery] = useState("");

  const filtered = products.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <label className="sr-only">Search products</label>
      <input
        autoFocus
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="w-full px-3 py-2 rounded-md border bg-background text-foreground mb-3"
      />

      <div className="max-h-48 overflow-auto">
        {query === "" ? (
          <div className="text-sm text-muted-foreground">Try searching: Centella, Ampoule, Cream</div>
        ) : filtered.length === 0 ? (
          <div className="text-sm text-muted-foreground">No products found.</div>
        ) : (
          <ul className="space-y-2">
            {filtered.map((p) => (
              <li key={p.id}>
                <Link href={`/shop/${p.id}`} onClick={onNavigate} className="block p-2 rounded hover:bg-muted/50">
                  <div className="flex items-center gap-3">
                    <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded" />
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">${p.price}</div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
