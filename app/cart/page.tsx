"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { LoginModal } from "@/components/login-modal"

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Madagascar Centella Ampoule", price: 24.0, quantity: 1, image: "/centella-ampoule.jpg" },
    { id: 2, name: "Centella Toning Toner", price: 24.0, quantity: 1, image: "/centella-toner.jpg" },
  ])
  const [showLoginModal, setShowLoginModal] = useState(false)

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const total = subtotal + shipping

  const handleCheckout = () => {
    setShowLoginModal(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-light mb-8">Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-card rounded-lg p-4 flex gap-4 items-center shadow-sm">
                <div className="w-20 h-20 bg-muted rounded-md overflow-hidden flex-shrink-0">
                  <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium mb-1">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.quantity}x</p>
                  <p className="font-semibold text-primary mt-1">${item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground p-2">
                  <X size={20} />
                </button>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-12 text-muted-foreground">Your cart is empty</div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-lg p-6 shadow-sm sticky top-4">
              <h2 className="text-xl font-medium mb-4">Order Summary</h2>

              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t border-border pt-3 flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold text-lg">${total.toFixed(2)}</span>
                </div>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={cartItems.length === 0}
              >
                Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <LoginModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </div>
  )
}
