'use client'

import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TurboTech Services | Power Tools & Lorry Body Solutions",

  description:
    "Explore TurboTech services including power tools importing, distribution, custom lorry body design, and repair & modification solutions in Sri Lanka.",

  keywords:
    "TurboTech services, power tools importing Sri Lanka, tool distribution, lorry body design Sri Lanka, lorry body repair, industrial tools supplier Sri Lanka",

  openGraph: {
    title: "TurboTech Core Services",
    description:
      "TurboTech offers power tools importing, distribution, and custom lorry body engineering solutions tailored for industrial needs.",
    url: "https://www.turbotech.lk/#services",
    siteName: "TurboTech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TurboTech Services",
    description:
      "Reliable power tools and custom lorry body solutions for businesses in Sri Lanka.",
  },

  alternates: {
    canonical: "https://www.turbotech.lk/#services",
  },
};
export default function Services() {

  const services = [
    {
      title: "Power Tools Importing",
      desc: "TurboTech imports high-quality power tools from trusted global manufacturers, ensuring reliable performance and durability for professional use.",
      border: "border-b border-r border-white/10"
    },
    {
      title: "Power Tools Distribution",
      desc: "We provide efficient distribution of power tools, ensuring timely delivery to businesses, workshops, and industrial sectors.",
      border: "border-b border-white/10"
    },
    {
      title: "Custom Lorry Body Design",
      desc: "Our engineering team designs custom lorry bodies tailored to meet specific transportation and operational requirements.",
      border: "border-r border-white/10"
    },
    {
      title: "Lorry Body Repair & Modification",
      desc: "We provide repair and modification services for lorry bodies, ensuring improved functionality, durability, and extended service life based on operational needs.",
      border: ""
    }
  ]

  return (
    <section className="py-24 bg-[#F3F4F6] px-8" id="services">
      <div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-8 md:mb-16" >
  {/* Paragraph first on desktop, badge + heading second, but stacked on mobile */}
  <div className="order-2 md:order-1 md:w-1/2 text-left mb-6 md:mb-0">
    <p className="text-gray-500 max-w-md">
      At TurboTech, we are committed to delivering reliable power tools and engineering solutions that help businesses improve efficiency and productivity.
    </p>
  </div>

  {/* Badge + Heading */}
  <div className="order-1 md:order-2 md:w-1/2 text-left md:text-right mb-6 md:mb-0">
    <span className="bg-[#B6FF00] text-[#000000] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
      # Core Services
    </span>
    <h2 className="text-4xl font-bold mt-4">Our Core Services</h2>
  </div>
</div>

<div className="service-bg rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-3">
  
  <div className="flex flex-col">
    {services.slice(0, 2).map((service, index) => (
      <div
        key={index}
        className={`p-12 group hover:bg-[#B6FF00]/10 transition-colors ${service.border}`}
      >
        <h4 className="text-white text-xl font-bold mb-4">{service.title}</h4>
        <p className="text-gray-400 text-sm">{service.desc}</p>
      </div>
    ))}
  </div>

  <div className="hidden md:flex justify-center items-stretch">
    <div className="flex items-stretch">
      <Image
        src="/core services2.svg" 
        alt="Divider"
        width={500} 
        height={1000} 
        className="h-full object-cover grayscale"
      />
    </div>
  </div>

  <div className="flex flex-col">
    {services.slice(2).map((service, index) => (
      <div
        key={index}
        className={`p-12 group hover:bg-[#B6FF00]/10 transition-colors ${service.border}`}
      >
        <h4 className="text-white text-xl font-bold mb-4">{service.title}</h4>
        <p className="text-gray-400 text-sm">{service.desc}</p>
      </div>
    ))}
  </div>

</div>

      </div>
    </section>
  )
}