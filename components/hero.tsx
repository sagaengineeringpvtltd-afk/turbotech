'use client'

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden rounded rounded-b-[5%] border-white/20" id="home">
      
      {/* Background Image */}
      <Image
        src="/hero.svg" // put your image in /public
        alt="Industrial Machinery"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pt-36 pb-20 max-w-4xl z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 mt-10">
          Powering Productivity with Quality Machinery & Custom Engineering
        </h1>

        <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          TurboTech is a trusted importer and distributor of high-quality machinery and industrial tools. We also specialize in custom lorry body design and manufacturing to support transportation and industrial operations.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a className="bg-[#B6FF00] text-black px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0B110B] transition-all" href="#services">
            Explore Our Services
          </a>

          <a className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all" href="#contact">
            Contact Us
          </a>
        </div>
      </div>

    </section>
  )
}


