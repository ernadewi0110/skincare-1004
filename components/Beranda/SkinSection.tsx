import React from 'react';
import Link from 'next/link'; // Pastikan import ini ada
import { ArrowRight } from 'lucide-react'; // Jika Anda pakai Lucide icon, atau hapus jika pakai SVG manual di bawah

const SkinIQ = () => {
  return (
    <section id="skin-iq" className="py-24 px-4 bg-[#F5F5F0]"> {/* Warna background sedikit berbeda (sage/greyish) */}
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <span className="text-xs font-bold tracking-[0.2em] text-[#8D6E63] uppercase">
            Dermatology Insights
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mt-3 mb-6 text-[#3E2723]">
            Skin IQ
          </h2>
          <p className="text-lg text-stone-500 max-w-2xl mx-auto leading-relaxed">
            Pahami bahasa kulit Anda. Temukan solusi yang tepat berdasarkan permasalahan kulit yang paling umum dialami.
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Dryness */}
          <div className="group bg-white p-8 rounded-2xl text-left shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-stone-100 relative overflow-hidden">
             {/* Dekorasi Background Halus */}
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon Wrapper */}
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 relative z-10">
              {/* Icon Droplet (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>
            </div>
            
            <h5 className="text-xl font-serif font-medium mb-3 text-[#3E2723]">Dryness</h5>
            <p className="text-sm text-stone-500 mb-6 leading-relaxed">
              Fokus pada humektan dan oklusif. Tumpuk hidrator ringan dengan krim yang lebih kaya di malam hari untuk mengunci kelembapan.
            </p>

            <Link href="/shop?category=moisturizer" className="inline-flex items-center text-sm font-semibold text-[#8D6E63] group-hover:text-[#3E2723] transition-colors">
              Find Hydration Routine <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Card 2: Sensitivity */}
          <div className="group bg-white p-8 rounded-2xl text-left shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-stone-100 relative overflow-hidden">
            {/* Dekorasi Background Halus */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-rose-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon Wrapper */}
            <div className="w-14 h-14 bg-rose-50 text-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300 relative z-10">
              {/* Icon Shield/Feather (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>

            <h5 className="text-xl font-serif font-medium mb-3 text-[#3E2723]">Sensitivity</h5>
            <p className="text-sm text-stone-500 mb-6 leading-relaxed">
              Gunakan formulasi minim bahan dan bebas pewangi. Selalu lakukan <i>patch test</i> sebelum mencoba produk baru.
            </p>

            <Link href="/shop?category=calming" className="inline-flex items-center text-sm font-semibold text-[#8D6E63] group-hover:text-[#3E2723] transition-colors">
              Shop Calming Series <span className="ml-2">→</span>
            </Link>
          </div>

          {/* Card 3: Dullness */}
          <div className="group bg-white p-8 rounded-2xl text-left shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-stone-100 relative overflow-hidden">
             {/* Dekorasi Background Halus */}
             <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon Wrapper */}
            <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 relative z-10">
              {/* Icon Sun/Sparkle (SVG) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
            </div>

            <h5 className="text-xl font-serif font-medium mb-3 text-[#3E2723]">Dullness</h5>
            <p className="text-sm text-stone-500 mb-6 leading-relaxed">
              Gabungkan eksfoliasi lembut dan serum antioksidan (seperti Vitamin C) untuk mengembalikan kecerahan alami kulit.
            </p>

            <Link href="/shop?category=brightening" className="inline-flex items-center text-sm font-semibold text-[#8D6E63] group-hover:text-[#3E2723] transition-colors">
              Restore Radiance <span className="ml-2">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SkinIQ;