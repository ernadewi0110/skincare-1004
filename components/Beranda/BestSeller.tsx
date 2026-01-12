"use client";

import React, { useRef, useEffect, useState } from "react";
import { products as bestsellers } from "@/lib/products"; // Pastikan import data lain jika ada
import Link from "next/link";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils"; // Opsional: untuk penggabungan class jika pakai shadcn

const SCROLL_AMOUNT = 300;

// SAYA MEMBUAT DATA DUMMY UNTUK KATEGORI KEDUA (NEW ARRIVALS)
// Nanti Anda bisa mengganti ini dengan import data asli, misal: import { newArrivals } from "@/lib/products"
const newArrivals = [...bestsellers].reverse(); // Contoh: Membalik urutan bestsellers sebagai data dummy

const ProductSlider = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  
  // 1. State untuk melacak kategori yang aktif
  const [activeTab, setActiveTab] = useState<"bestsellers" | "new_arrivals">("bestsellers");

  // 2. Tentukan produk mana yang ditampilkan berdasarkan state
  const currentProducts = activeTab === "bestsellers" ? bestsellers : newArrivals;

  // 3. Duplikasi data untuk looping effect
  const loopProducts = [...currentProducts, ...currentProducts];

  // Reset scroll ke awal saat tab berubah
  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  const slideRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  const slideLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: -SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-[#F9F7F5] relative"> {/* Background beige muda */}
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER & SWITCHER */}
        <div className="flex flex-col items-center mb-10 space-y-4">
          <div className="flex gap-8 border-b border-stone-200 pb-2">
            <button
              onClick={() => setActiveTab("bestsellers")}
              className={`text-2xl font-light transition-colors duration-300 pb-2 ${
                activeTab === "bestsellers" 
                  ? "text-[#3E2723] border-b-2 border-[#3E2723]" 
                  : "text-stone-400 hover:text-stone-600"
              }`}
            >
              Bestsellers
            </button>
          </div>
        </div>

        {/* CONTAINER SLIDER */}
        <div className="relative group">
            {/* Tombol Kiri */}
            <button
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#3E2723] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm -ml-4"
            >
            ←
            </button>

            {/* Tombol Kanan */}
            <button
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-[#3E2723] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm -mr-4"
            >
            →
            </button>

            {/* PRODUCT LIST */}
            <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
            {loopProducts.map((product, index) => (
                <div
                key={`${product.id}-${index}-${activeTab}`} 
                className="min-w-[280px] md:min-w-[300px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group/card"
                >
                <div className="aspect-[4/5] relative overflow-hidden bg-stone-100">
                    {/* Badge BEST / NEW */}
                    <div className="absolute top-4 left-4 z-10">
                        <span className={`px-3 py-1 text-xs font-bold text-white uppercase tracking-wider ${activeTab === 'bestsellers' ? 'bg-[#8D6E63]' : 'bg-[#5D4037]'}`}>
                            {activeTab === 'bestsellers' ? 'Best' : 'New'}
                        </span>
                    </div>

                    <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                    />
                    
        
                </div>

                <div className="p-5 text-center">
                    <h3 className="font-serif text-lg text-[#3E2723] mb-2 truncate">{product.name}</h3>

                    <p className="text-stone-500 font-medium mb-4">
                    Rp {Number(product.price * 17000).toLocaleString("id-ID")}
                    </p>

                    <Link href={`/shop/${product.id}`}>
                    <Button variant="outline" className="w-full border-[#8D6E63]  bg-primary text-white transition-colors">
                        View Details
                    </Button>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;