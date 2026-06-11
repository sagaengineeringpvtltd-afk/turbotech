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

// ─── Data ──────

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  smallImages: { src: string; alt: string }[];
  largeImages: { src: string; alt: string }[];
}

const services: ServiceCard[] = [
  {
    id: "01",
    title: "Interior Design & Build Services for Industrial and Commercial Projects",
    description:
      "Our Interior design & build services for industrial and commercial projects. In prominent industrial commercial projects, and brand mable solutions design, and solution and creative professional use.",
    smallImages: [
      { src: "/Interior01.jpeg", alt: "Industrial interior design project" },
      { src: "/Interior02.jpeg", alt: "Commercial interior build" },
    ],
    largeImages: [
      { src: "/Interior03.jpeg", alt: "Industrial workspace interior" },
      { src: "/Interior04.jpeg", alt: "Commercial build showcase" },
    ],
  },
  {
    id: "02",
    title: "Power Tools Importing and Distribution",
    description:
      "TurboTech imports high-quality power tools from trusted global manufacturers, ensuring reliable performance and durability for professional use across workshops, businesses, and industrial sectors.",
    smallImages: [
      { src: "/core services2.svg", alt: "Power tools close-up" },
      { src: "/core services2.svg", alt: "Industrial power tool in use" },
    ],
    largeImages: [
      { src: "/power tool02.jpg", alt: "Power tool distribution showcase" },
      { src: "/power tool03.jpg", alt: "Power tools — drills, saws and more from TurboTech" },
    ],
  },
];

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Services() {

  function ServiceCard({ card }: { card: ServiceCard }) {
    return (
      <div className="relative bg-[#111111] rounded-3xl overflow-hidden flex flex-col p-7 sm:p-9 group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl">

        {/* Heading */}
        <div className="mb-5">
          <h3 className="text-white text-lg sm:text-xl font-bold leading-snug">
            {card.title}
          </h3>
        </div>

        {/* Description + small image grid */}
        <div className="flex flex-col sm:flex-row gap-6 mb-6">
          <div className="sm:w-1/2">
            <p className="text-gray-400 text-sm leading-relaxed text-justify">
              {card.description}
            </p>
          </div>

          <div className="sm:w-1/2 grid grid-cols-2 gap-2">
            {card.smallImages.map((img, index) => (
              <div key={`${img.src}-${index}`} className="rounded-xl overflow-hidden h-24 sm:h-28">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={200}
                  height={150}
                  className="w-full h-full object-cover "
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom large image strip */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 mt-auto">
          {card.largeImages.map((img, index) => (
            <div key={`${img.src}-${index}`} className="rounded-xl overflow-hidden h-24 sm:h-44">
              <Image
                src={img.src}
                alt={img.alt}
                width={400}
                height={250}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>

        {/* Subtle accent glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-[#B6FF00]/30 transition-all duration-300"
        />
      </div>
    );
  }

  return (
    <section
      className="py-20 bg-[#F3F4F6] px-4 sm:px-6 lg:px-8"
      id="services"
      aria-label="Core Services"
    >
      <div className="container mx-auto px-2 md:px-6">

        {/* Header Row */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10 md:mb-14 gap-6">
          <div className="md:w-1/2">
            <p className="text-gray-500 max-w-sm leading-relaxed text-sm md:text-base">
              At TurboTech, we are committed to delivering engineering
              solutions that help businesses improve efficiency and
              productivity.
            </p>
          </div>

          <div className="md:w-1/2 text-left md:text-right">
            <span className="inline-block bg-[#B6FF00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest animate-soft-bounce">
              # Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3 text-gray-900">
              Our Core Services
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {services.map((card) => (
            <ServiceCard key={card.id} card={card} />
          ))}
        </div>

      </div>
    </section>
  );
}