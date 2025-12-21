"use client"

import Link from "next/link"
import { ShoppingCart, Search, User } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Navigation */}
        <nav className="flex items-center gap-8">
          <Link href="/shop" className="text-sm hover:text-primary transition-colors">
            Shop
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Our Story
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Ingredients
          </Link>
          <Link href="#" className="text-sm hover:text-primary transition-colors">
            Skin IQ
          </Link>
        </nav>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-xl font-light tracking-[0.3em]">SKIN1004</h1>
        </Link>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <User size={20} />
          </button>
          <Link href="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart size={20} />
            <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-primary text-primary-foreground text-xs">
              2
            </Badge>
          </Link>
        </div>
      </div>
    </header>
  )
}
