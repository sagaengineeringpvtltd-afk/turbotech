'use client'

export default function Services() {
  return (
    <section className="py-24 bg-[#F3F4F6]" id="services">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="md:w-1/2">
            <p className="text-gray-500 max-w-md">At TurboTech, we are committed to delivering reliable machinery solutions and innovative engineering services that help businesses improve efficiency and productivity.</p>
          </div>
          <div className="md:w-1/2 text-right">
            <span className="bg-[#22C55E]/10 text-[#22C55E] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"># Core Services</span>
            <h2 className="text-4xl font-bold mt-4">Our Core Services</h2>
          </div>
        </div>
        <div className="service-bg rounded-[3rem] overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-12 border-b border-r border-white/10 group hover:bg-[#22C55E]/10 transition-colors">
            <h4 className="text-white text-xl font-bold mb-4">Machinery & Tools Importing</h4>
            <p className="text-gray-400 text-sm">TurboTech imports high-quality machinery and industrial tools from trusted global manufacturers to support businesses that require reliable equipment for their operations.</p>
          </div>
          <div className="p-12 border-b border-white/10 group hover:bg-[#22C55E]/10 transition-colors">
            <h4 className="text-white text-xl font-bold mb-4">Machinery & Tools Distribution</h4>
            <p className="text-gray-400 text-sm">We provide efficient distribution of machinery and tools, ensuring that businesses receive the equipment they need quickly and reliably.</p>
          </div>
          <div className="p-12 border-r border-white/10 group hover:bg-[#22C55E]/10 transition-colors">
            <h4 className="text-white text-xl font-bold mb-4">Custom Lorry Body Design</h4>
            <p className="text-gray-400 text-sm">Our engineering team designs custom lorry bodies tailored to the specific requirements of transportation and logistics companies.</p>
          </div>
          <div className="p-12 group hover:bg-[#22C55E]/10 transition-colors">
            <h4 className="text-white text-xl font-bold mb-4">Lorry Body Manufacturing</h4>
            <p className="text-gray-400 text-sm">TurboTech manufactures strong and durable lorry bodies using quality materials and precision engineering to ensure long-lasting performance.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
