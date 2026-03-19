'use client'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | TurboTech Sri Lanka",

  description:
    "TurboTech supports multiple industries including logistics, manufacturing, engineering, and industrial operations by providing reliable power tools and customized engineering solutions.",

  keywords:
    "industries we serve TurboTech, logistics tools Sri Lanka, manufacturing equipment suppliers, engineering tools Sri Lanka, industrial operations tools, import and distribution Sri Lanka",

  openGraph: {
    title: "Industries We Serve - TurboTech",
    description:
      "Discover how TurboTech supports logistics, manufacturing, engineering, and industrial sectors with reliable tools and solutions.",
    url: "https://www.turbotech.lk/#industries",
    siteName: "TurboTech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve - TurboTech",
    description:
      "TurboTech delivers power tools and engineering solutions across multiple industries in Sri Lanka.",
  },

  alternates: {
    canonical: "https://www.turbotech.lk/#industries",
  },
};
export default function Industries() {
  const industries = [
    { name: 'Logistics & Transportation', icon: '🚛' },
    { name: 'Import', icon: '📦' },
    { name: 'Manufacturing', icon: '🏭' },
    { name: 'Engineering', icon: '⚙️' },
    { name: 'Industrial Operations', icon: '🛠️' }
  ]

  return (
    <section className="py-24 bg-white px-0 md:px-8" id="industries">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="bg-[#B6FF00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"># Markets</span>
          <h2 className="text-4xl font-bold mt-4">Industries We Serve</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-[#F3F4F6] p-8 rounded-2xl text-center group hover:bg-[#B6FF00] transition-all">
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h5 className="font-bold text-sm group-hover:text-black transition-colors">{industry.name}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
