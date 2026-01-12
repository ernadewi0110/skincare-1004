"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { shops } from "@/lib/shop";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  const product = shops.find((item) => item.id === Number(params.id));

  const handleAddToCart = () => {
    // In a real app, this would add to cart state/context
    router.push("/cart");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-muted rounded-lg overflow-hidden aspect-square flex items-center justify-center">
            <img src={product?.image || "/placeholder.svg"} alt={product?.name} className="w-full h-full object-contain p-8" />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-light mb-2">{product?.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-semibold">${product?.price}</span>
              
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              A concentrated ampoule enriched with Centella Asiatica extract from Madagascar to intensively soothe irritated skin, reduce redness, restore optimal moisture balance, and reveal your natural glow.
            </p>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted">
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-md border border-border flex items-center justify-center hover:bg-muted">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button onClick={handleAddToCart} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mb-8">
              Add to Cart
            </Button>

            {/* Product Tabs */}
            <div>
              <div className="flex gap-6 border-b border-border mb-4">
                {["What it Is", "Product Benefit", "Key Ingredients"].map((tab) => (
                  <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-2 text-sm font-medium capitalize ${activeTab === tab ? "border-b-2 border-primary text-primary" : "text-muted-foreground hover:text-foreground"}`}>
                    {tab === "Skin Type" ? "Skin Type" : tab}
                  </button>
                ))}
              </div>

              <div className="text-sm text-muted-foreground leading-relaxed">
                {activeTab === "What it Is" && (
                  <p>{product?.whatitis}</p>
                )}
                {activeTab === "Product Benefit" && <p>{product?.Benefits}</p>}
                {activeTab === "Key Ingredients" && <p>{product?.ingreditions}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
