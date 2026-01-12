"use client";

import { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown, ChevronRight } from "lucide-react";
import { shops } from "@/lib/shop";

export default function ShopPage() {
  const [openFilters, setOpenFilters] = useState<string[]>(["collection", "productType"]);

  // state untuk filter product
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setOpenFilters((prev) => (prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]));
  };

  // filtering shops
  const filteredShops = shops.filter((product) => {
    // jika belum pilih filter → tampil semua
    if (selectedProducts.length === 0) return true;

    return selectedProducts.some((tag) => product.name.toLowerCase().includes(tag.toLowerCase()));
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="w-64 flex-shrink-0">
            <div className="sticky top-4">
              <h2 className="text-2xl font-light mb-6">Filters</h2>

              {/* Product Filter */}
              <div className="mb-6">
                <button onClick={() => toggleFilter("Product")} className="flex items-center justify-between w-full mb-3">
                  <span className="font-medium">Product</span>
                  {openFilters.includes("Product") ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                </button>

                {openFilters.includes("Product") && (
                  <div className="space-y-2 ml-2">
                    {["Centella", "Hyalu-Cica", "Tone Brightening", "Poremizing", "Tea-Trica", "Probio-Cica"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer">
                        <Checkbox
                          checked={selectedProducts.includes(item)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedProducts([...selectedProducts, item]);
                            } else {
                              setSelectedProducts(selectedProducts.filter((i) => i !== item));
                            }
                          }}
                        />
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
              <button className="text-sm text-muted-foreground hover:text-foreground">Show results: {filteredShops.length}</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShops.map((product) => (
                <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-muted">
                    <Link href={`/shop/${product.id}`}>
                      <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover cursor-pointertransition-transform" />
                    </Link>
                  </div>
                  <div className="p-4">
                    <Link href={`/shop/${product.id}`}>
                      <h3 className="font-serif mb-2 cursor-pointer">{product.name}</h3>
                    </Link>
                    <p className="text-lg font-semibold text-foreground mb-3">Rp. {product.price}</p>
                    <Button className="w-full hover:bg-primary/90 text-primary-foreground">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
