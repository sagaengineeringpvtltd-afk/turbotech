'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="py-24 px-8 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXT SIDE */}
          <div className="lg:w-1/2">
            <span className="bg-[#B6FF00] text-[#000000] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              # Who We Are
            </span>

            <h2 className="text-4xl font-bold mt-6 mb-8">
              Empowering a Sustainable <br />
              Future With Turbo
              <span className="text-[#B6FF00]">Tech</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                TurboTech is a trusted importer and distributor of high-quality power tools and industrial equipment, dedicated to enhancing productivity and efficiency in professional and industrial environments.
              </p>
              <p>
                We partner with reliable international manufacturers to deliver products that meet high standards of performance, durability, and reliability. In addition to power tools, TurboTech specializes in custom lorry body design and manufacturing, providing practical and durable solutions tailored to transportation and logistics needs.
              </p>
            </div>
          </div>

          {/* IMAGE SIDE */}
          <div className="lg:w-1/2">
            <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/About TurboTech.svg"
                alt="TurboTech machinery and engineering"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
          
          {/* VISION */}
          <div className="bg-[#0B110B] p-12 rounded-3xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Our Vision</h3>
                <svg className="h-10 w-10 text-[#B6FF00] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To become a leading and trusted provider of power tools and customized engineering solutions through quality, innovation, and reliability.
              </p>
            </div>
          </div>

          {/* MISSION */}
          <div className="bg-[#F3F4F6] p-12 rounded-3xl text-[#0B110B] relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">Our Mission</h3>
                <svg className="h-10 w-10 text-[#B6FF00] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </div>

              <ul className="space-y-4 text-gray-600 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#B6FF00] mr-2">✔</span>
                  Deliver high-quality power tools that enhance productivity.
                </li>
                <li className="flex items-start">
                  <span className="text-[#B6FF00] mr-2">✔</span>
                  Build long-term relationships with customers through trust and reliability.
                </li>
                <li className="flex items-start">
                  <span className="text-[#B6FF00] mr-2">✔</span>
                  Continuously improve service and engineering solutions.
                </li>
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}