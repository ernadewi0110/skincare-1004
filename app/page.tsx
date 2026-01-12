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
      <SkinSection/>
      <Footer />
    </div>
  );
}

// `bestsellers` imported from `lib/products`
