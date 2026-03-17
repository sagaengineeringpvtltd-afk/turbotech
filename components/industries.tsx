'use client'

export default function Industries() {
  const industries = [
    { name: 'Logistics & Transportation', icon: '🚛' },
    { name: 'Construction', icon: '🏗️' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Engineering', icon: '⚙️' },
    { name: 'Industrial Operations', icon: '🛠️' }
  ]

  return (
    <section className="py-24 bg-white" id="industries">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-[#22C55E]/10 text-[#22C55E] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"># Markets</span>
          <h2 className="text-4xl font-bold mt-4">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-[#F3F4F6] p-8 rounded-2xl text-center group hover:bg-[#22C55E] transition-all">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h5 className="font-bold text-sm group-hover:text-white transition-colors">{industry.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
