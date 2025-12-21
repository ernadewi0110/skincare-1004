"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronDown, ChevronRight } from "lucide-react"

export default function ShopPage() {
  const [openFilters, setOpenFilters] = useState<string[]>(["collection", "productType"])

  const toggleFilter = (filter: string) => {
    setOpenFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-4">
              <h2 className="text-2xl font-light mb-6">Filters</h2>

              {/* Collection Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("collection")}
                  className="flex items-center justify-between w-full mb-3"
                >
                  <span className="font-medium">Collection</span>
                  {openFilters.includes("collection") ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>
                {openFilters.includes("collection") && (
                  <div className="space-y-2 ml-2">
                    {["Centella", "Hyalu-Cica", "Madagascar Centella", "Skin IQ"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Type Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("productType")}
                  className="flex items-center justify-between w-full mb-3"
                >
                  <span className="font-medium">Product Type</span>
                  {openFilters.includes("productType") ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>
                {openFilters.includes("productType") && (
                  <div className="space-y-2 ml-2">
                    {["Ampoule", "Toner", "Cream", "Serum"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Concern Filter */}
              <div className="mb-6">
                <button
                  onClick={() => toggleFilter("concern")}
                  className="flex items-center justify-between w-full mb-3"
                >
                  <span className="font-medium">Concern</span>
                  {openFilters.includes("concern") ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>
                {openFilters.includes("concern") && (
                  <div className="space-y-2 ml-2">
                    {["Acne", "Hydration", "Anti-aging", "Brightening"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-3xl font-light">Shop All</h1>
              <button className="text-sm text-muted-foreground hover:text-foreground">Show results: 16</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="aspect-square bg-muted">
                    <Link href={`/shop/${product.id}`}>
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform"
                      />
                    </Link>
                  </div>
                  <div className="p-4">
                    <Link href={`/shop/${product.id}`}>
                      <h3 className="font-medium mb-2 hover:text-primary cursor-pointer">{product.name}</h3>
                    </Link>
                    <p className="text-lg font-semibold text-foreground mb-3">${product.price}</p>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center gap-2 mt-8">
              <button className="px-3 py-1 hover:bg-muted rounded">{"<"}</button>
              {[1, 2, 3, 4].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded ${page === 1 ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 hover:bg-muted rounded">{">"}</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

const products = [
  { id: 1, name: "Madagascar Centella Ampoule", price: 24.0, image: "/centella-ampoule-bottle.jpg" },
  { id: 2, name: "Centella Toning Toner", price: 24.0, image: "/centella-toner-bottle.jpg" },
  { id: 3, name: "Hyalu-Cica Blue Serum", price: 34.0, image: "/blue-serum-bottle.jpg" },
  { id: 4, name: "Hyalu-Cica Blue Serum", price: 34.0, image: "/blue-serum-dropper.jpg" },
  { id: 5, name: "Centella Cream", price: 24.0, image: "/centella-cream-jar.jpg" },
  { id: 6, name: "Centella Toning Toner", price: 24.0, image: "/toning-toner-beige.jpg" },
  { id: 7, name: "Centella Toning Toner", price: 24.0, image: "/centella-toner-green.jpg" },
  { id: 8, name: "Hyalu-Cica Summer Serum", price: 24.0, image: "/summer-serum-bottle.jpg" },
  { id: 9, name: "Centella Foaming Serum", price: 24.0, image: "/foaming-serum-bottle.jpg" },
]
