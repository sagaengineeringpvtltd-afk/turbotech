'use client'

import Image from 'next/image'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TurboTech | About Us - Power Tools, Industrial Equipment & Interior Design",
  
  description:
    "Learn about TurboTech, a trusted supplier of power tools and industrial equipment in Sri Lanka, also specializing in professional interior design and build solutions.",

  keywords:
    "about TurboTech, power tools Sri Lanka, industrial equipment suppliers, interior design Sri Lanka, commercial design solutions, interior build services",

  openGraph: {
    title: "About TurboTech",
    description:
      "TurboTech delivers reliable power tools and professional interior design solutions for industrial and commercial needs.",
    url: "https://www.turbotech.lk/#about",
    siteName: "TurboTech",
    type: "website",
  },

  alternates: {
    canonical: "https://www.turbotech.lk/#about",
  },
};

export default function About() {
  return (
    <section className="py-24 px-0 md:px-8 bg-white" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* TEXT SIDE */}
          <div className="lg:w-1/2">
            <span className="inline-block bg-[#B6FF00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-soft-bounce">
  # Who We Are
</span>

            <h2 className="text-4xl font-bold mt-6 mb-8">
              Empowering a Sustainable <br />
              Future With Turbo
              <span className="text-[#B6FF00]">Tech</span>
            </h2>

            <div className="space-y-6 text-gray-600 leading-relaxed max-md:text-justify">
              <p>
                TurboTech is a trusted importer and distributor of high-quality machineries, accessories and industrial tools. TurboTech also provide comprehensive engineering solutions for both industrial & commercial projects from design stage till completion.
              </p>
              <p>
                We partner with reliable international manufacturers to deliver products that meet high standards of performance and durability. In addition to this, TurboTech provides comprehensive engineering solutions, including product design, machinery installation, maintenance support, and undertaking all interior design & furniture manufacturing to deliver complete, end-to-end solutions to meet customer expectation
              </p>
            </div>
          </div>
            <div className="relative w-full md:w-[52%] h-[450px] rounded-3xl overflow-hidden shadow-2xl ">
              <Image
                src="/About TurboTech.svg"
                alt="TurboTech machinery and engineering"
                fill
                className="object-cover"
                priority
              />
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
              <p className="text-gray-400 leading-relaxed max-md:text-justify">
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

              <ul className="space-y-4 text-gray-600 leading-relaxed ">
                <li className="flex items-start">
                  <span className="text-[#B6FF00] mr-2">✔</span>
                   Provide innovative engineering solutions and interior design services to deliver complete, end-to-end project support.
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