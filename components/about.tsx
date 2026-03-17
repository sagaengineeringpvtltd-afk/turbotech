'use client'

export default function About() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <span className="bg-[#22C55E]/10 text-[#22C55E] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"># Who We Are</span>
            <h2 className="text-4xl font-bold mt-6 mb-8">Empowering a Sustainable <br/>Future With <span className="text-[#22C55E]">TurboTech</span></h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>TurboTech is a reliable supplier of premium machinery and industrial tools designed to improve productivity and efficiency across multiple industries. By partnering with trusted international manufacturers, we ensure that our customers receive durable and high-performance equipment.</p>
              <p>In addition to machinery distribution, TurboTech provides custom lorry body design and manufacturing services, creating practical and durable vehicle body solutions for transportation, logistics, and industrial use. Our team focuses on quality engineering, innovation, and customer satisfaction, delivering solutions that support business growth and operational efficiency.</p>
            </div>
          </div>
          <div className="lg:w-1/2">
            <img alt="Turbine Machinery and Engineering" className="rounded-3xl shadow-2xl object-cover w-full h-[450px]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG6VaA-vUI-zQPiHujeHDLeRpjiszQ2_nRemty5xrPRdmOvd43ZoYDbzFnYYOVfMt89g6c8-pO9vf-jXiq2h4tn8wTHOAWbFGm27Y2PbdC0ue2EUUc3FRknUxG6Urly5EBbh7ZNasYZYyXe3ahEppP2rYdUC_o2WY_e0lRTLkj6TotjKtqKCo709ZQ3pT80t7EO6RGPOye5jsFNmoofqzd1GOV3xbtJzJbatwa9ltWEgCD7m6l6mEUkgz9R5nCAS3Kzk6zfVk38m8"/>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          <div className="bg-[#0B110B] p-12 rounded-3xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <svg className="h-10 w-10 text-[#22C55E] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <p className="text-gray-400 leading-relaxed">To become a leading provider of industrial machinery and customized transport solutions through innovation, quality, and reliable service.</p>
            </div>
          </div>
          <div className="bg-[#F3F4F6] p-12 rounded-3xl text-[#0B110B] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <svg className="h-10 w-10 text-[#22C55E] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </div>
              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li className="flex items-start"><span className="text-[#22C55E] mr-2">✔</span> Deliver high-quality machinery and tools that enhance productivity.</li>
                <li className="flex items-start"><span className="text-[#22C55E] mr-2">✔</span> Provide innovative and durable custom lorry body solutions.</li>
                <li className="flex items-start"><span className="text-[#22C55E] mr-2">✔</span> Build long-term relationships with customers through trust and reliability.</li>
                <li className="flex items-start"><span className="text-[#22C55E] mr-2">✔</span> Continuously improve technology and engineering solutions.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
