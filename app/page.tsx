import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { products as bestsellers } from "@/lib/products";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-150 flex items-center justify-center overflow-hidden">
        <img src="/madagascar-landscape-with-mountains-and-nature.jpg" alt="Madagascar Landscape" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-linear-to-b from-black/20 to-black/40" />

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

      {/* Our Story (in-page template) */}
      <section id="our-story" className="py-20 px-4 bg-linear-to-b from-background to-muted/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-4">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-8">Born from a passion to bring Madagascar's purest botanicals to the world, our journey began with a small team of botanists and formulators. We combine traditional harvesting practices with modern, science-driven formulations.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img src="/madagascar-landscape-with-mountains-and-nature.jpg" alt="Our Story" className="w-full h-64 object-cover rounded-lg shadow-sm" />
            <div className="text-left">
              <h3 className="text-2xl font-medium mb-3">Sustainable sourcing</h3>
              <p className="text-muted-foreground mb-4">We partner with local communities to harvest ingredients ethically, ensuring fair compensation and regenerative practices.</p>
              <Link href="/our-story">
                <Button className="bg-primary text-primary-foreground">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients (in-page template) */}
      <section id="ingredients" className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-light mb-6 text-center">Key Ingredients</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg text-center">
              <h4 className="font-medium mb-2">Centella Asiatica</h4>
              <p className="text-sm text-muted-foreground">Soothes inflammation and supports the skin barrier with powerful triterpenoids.</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <h4 className="font-medium mb-2">Madagascar Sea Moss</h4>
              <p className="text-sm text-muted-foreground">Hydrating polysaccharides to lock moisture and improve skin texture.</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <h4 className="font-medium mb-2">Natural Antioxidants</h4>
              <p className="text-sm text-muted-foreground">Protects against environmental stressors while promoting radiance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skin IQ (in-page template) */}
      <section id="skin-iq" className="py-20 px-4 bg-secondary/10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-4">Skin IQ</h2>
          <p className="text-lg text-muted-foreground mb-6">Understand your skin better with simple tips and product matches tailored to common concerns.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-card rounded-lg">
              <h5 className="font-medium mb-2">Dryness</h5>
              <p className="text-sm text-muted-foreground">Focus on humectants and occlusives — layer lightweight hydrators with richer creams at night.</p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h5 className="font-medium mb-2">Sensitivity</h5>
              <p className="text-sm text-muted-foreground">Use fragrance-free, minimal-ingredient formulations and patch test new products.</p>
            </div>
            <div className="p-4 bg-card rounded-lg">
              <h5 className="font-medium mb-2">Dullness</h5>
              <p className="text-sm text-muted-foreground">Incorporate gentle exfoliants and antioxidant serums to restore brightness.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// `bestsellers` imported from `lib/products`
