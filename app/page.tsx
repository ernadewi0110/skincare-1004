import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <img src="/madagascar-landscape-with-mountains-and-nature.jpg" alt="Madagascar Landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-light mb-6 text-balance">
            The Untouched Purity
            <br />
            of Madagascar.
          </h1>
          <Link href="/shop">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              Discover the Icon
            </Button>
          </Link>
        </div>
      </section>

      {/* Shop by Collection */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light mb-8">Shop by Collection</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {["Ampoule", "Toner", "Cream", "Ingredients", "Skin IQ"].map((category) => (
            <Link key={category} href="/shop" className="flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">{category}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Bestsellers */}
      <section className="py-16 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-light mb-8">Bestsellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((product) => (
              <div key={product.id} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-muted">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">{product.name}</h3>
                  <p className="text-lg font-semibold text-foreground mb-3">${product.price}</p>
                  <Link href={`/shop/${product.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Add to Cart</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="aspect-square bg-muted rounded-lg overflow-hidden">
            <img src="/madagascar-centella-ampoule-bottle-on-moss.jpg" alt="Featured Product" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-light mb-4">Madagascar Centella Ampoule</h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">Experience the pure essence of Madagascar with our signature Centella Ampoule. This lightweight serum soothes, hydrates, and strengthens your skin barrier.</p>
            <Link href="/shop/1">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                Shop Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

const bestsellers = [
  { id: 1, name: "Centella Toning Toner", price: 24.0, image: "/centella-toner-bottle.jpg" },
  { id: 2, name: "Centella Cream", price: 24.0, image: "/centella-cream-jar.jpg" },
  { id: 3, name: "Madagascar Centella Ampoule", price: 24.0, image: "/centella-ampoule-bottle.jpg" },
  { id: 4, name: "Hyalu-Cica Blue Serum", price: 34.0, image: "/blue-serum-bottle.jpg" },
];
