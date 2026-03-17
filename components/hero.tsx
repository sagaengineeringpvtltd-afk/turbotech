'use client'

export default function Hero() {
  return (
    <section className="bg-hero-overlay min-h-screen pt-32 pb-20 flex flex-col items-center justify-center text-center text-white relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          Powering Productivity with Quality Machinery & Custom Engineering
        </h1>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          TurboTech is a trusted importer and distributor of high-quality machinery and industrial tools. We also specialize in custom lorry body design and manufacturing to support transportation and industrial operations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a className="bg-[#22C55E] text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0B110B] transition-all" href="#services">Explore Our Services</a>
          <a className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all" href="#contact">Contact Us</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mt-12">
          <div>
            <div className="text-4xl font-bold text-[#22C55E]">100%</div>
            <div className="text-gray-300 uppercase tracking-widest text-sm mt-2">Trusted</div>
          </div>
          <div className="border-x border-white/10 px-4">
            <div className="text-4xl font-bold text-[#22C55E]">25 +</div>
            <div className="text-gray-300 uppercase tracking-widest text-sm mt-2">Years Experiences</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-[#22C55E]">100 +</div>
            <div className="text-gray-300 uppercase tracking-widest text-sm mt-2">Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
