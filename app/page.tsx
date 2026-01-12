import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { products as bestsellers } from "@/lib/products";
import HeroSection from "@/components/Beranda/HeroSection";
import BestSeller from "@/components/Beranda/BestSeller";
import SkinSection from "@/components/Beranda/SkinSection"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection/>
      <BestSeller/>
      

{/* Our Story (Updated: 3-Step Journey) */}
      <section id="our-story" className="py-24 px-4 bg-linear-to-b from-background to-muted/20">
        <div className="max-w-6xl mx-auto text-center">
          
          {/* Header Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <h4 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Our Philosophy</h4>
            <h2 className="text-3xl md:text-5xl font-serif mt-3 mb-6 text-[#3E2723]">From Madagascar to Your Skin</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Kami percaya kulit berhak mendapatkan kemurnian alam tanpa mengorbankan presisi sains. 
              Sebuah perjalanan dari tanah vulkanik Madagascar hingga ke rutinitas harian Anda.
            </p>
          </div>

          {/* Grid 3 Kolom (The Journey) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Card 1: Sourcing */}
            <div className="group cursor-pointer text-left">
              <div className="overflow-hidden rounded-xl mb-6 relative aspect-[4/5] shadow-sm">
                <img 
                  src="/foto petani.jpg" 
                  alt="Harvesting" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">1. Ethically Sourced</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Bermitra langsung dengan komunitas petani lokal untuk panen yang berkelanjutan dan adil.
              </p>
            </div>

            {/* Card 2: Extraction */}
            <div className="group cursor-pointer text-left">
              <div className="overflow-hidden rounded-xl mb-6 relative aspect-[4/5] shadow-sm">
                <img 
                  src="/foto satu.png" 
                  alt="Extraction Process" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">2. Pure Extraction</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Teknologi ekstraksi suhu rendah menjaga potensi penuh bahan aktif tanpa merusak nutrisi.
              </p>
            </div>

            {/* Card 3: Result */}
            <div className="group cursor-pointer text-left">
              <div className="overflow-hidden rounded-xl mb-6 relative aspect-[4/5] shadow-sm">
                <img 
                  src="/foto dua.png" 
                  alt="Skin Result" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">3. Clinically Proven</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Aman untuk kulit sensitif. Teruji secara dermatologis untuk memperbaiki <i>skin barrier</i>.
              </p>
            </div>

          </div>

          {/* Button */}
          <Link href="/our-story">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
              Read Full Story
            </Button>
          </Link>

        </div>
      </section>

      {/* Ingredients (Updated: Visual & Interactive) */}
      <section id="ingredients" className="py-24 px-4 bg-secondary/10"> {/* Menambahkan sedikit background warna agar section terpisah */}
        <div className="max-w-6xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif mt-3 mb-6 text-[#3E2723]">Key Ingredients</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Diformulasikan dengan bahan aktif alami terbaik yang dipilih secara selektif dari kekayaan hayati Madagascar.
            </p>
          </div>

          {/* Grid Ingredients */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Madagascar Centella Asiatica",
                desc: "Soothes inflammation and supports the skin barrier with powerful triterpenoids.",
                benefit: "Calming",
                img: "/Ingredients satu.jpg"
              },
              {
                title: "Madagascar Sea Moss",
                desc: "Hydrating polysaccharides to lock moisture and improve skin texture.",
                benefit: "Hydrating",
                img: "/foto satu.png"
              },
              {
                title: "Natural Antioxidants",
                desc: "Protects against environmental stressors while promoting radiance.",
                benefit: "Protecting",
                img: "Ingredients dua.png"
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group bg-card p-8 rounded-2xl text-center border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image Circle with Hover Effect */}
                <div className="relative w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-4 border-background shadow-sm group-hover:border-primary/20 transition-colors">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>

                {/* Badge/Label Manfaat */}
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                  {item.benefit}
                </span>

                {/* Content */}
                <h4 className="text-xl font-medium mb-3">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD

=======
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
>>>>>>> ca2686083336ae42667a5c9e410f99902c216002

      <SkinSection/>
      <Footer />
    </div>
  );
}

// `bestsellers` imported from `lib/products`
