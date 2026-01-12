import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'

const HeroSection = () => {
  return (
    <section className='relative h-150 flex items-center justify-center overflow-hidden'>
        <img src="/Beranda.jpg" alt="Madagascar Landscape" className="absolute inset-0 w-full h-full object-cover" />
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
  )
}

export default HeroSection
