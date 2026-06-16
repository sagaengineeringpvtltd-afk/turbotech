'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TurboTech News | Latest Updates, Projects & Interior Design",

  description:
    "Stay updated with the latest news, projects, and announcements from TurboTech including interior design solutions, power tools innovations, and industry updates.",

  keywords:
    "TurboTech news, interior design Sri Lanka, power tools news, commercial design projects, TurboTech projects, industrial updates, TurboTech innovations",

  openGraph: {
    title: "TurboTech Latest News & Projects",
    description:
      "Explore the latest updates, completed interior design projects, and innovations from TurboTech.",
    url: "https://www.turbotech.lk/#news",
    siteName: "TurboTech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "TurboTech News & Projects",
    description:
      "Latest interior design projects and product updates from TurboTech.",
  },

  alternates: {
    canonical: "https://www.turbotech.lk/#news",
  },
};

type NewsItem = {
  title: string;
  image: string;
  content: string;
};

const newsData: NewsItem[] = [
//   {
//     title: "ශක්තිමත්කම, ආරක්ෂාව සහ නියම ප්‍රමිතිය එකම තැනකින්! 🛠️🚛",
//     image: "/news/lorry body custom design.svg",
//      content: `ඔබේ ව්‍යාපාරයට අවශ්‍ය විදියටම, නීත්‍යානුකූලව (DMT Compliant) සහ උසස්ම තත්ත්වයෙන් 
// ලොරි බොඩියක් (Lorry Body) සාදාගන්න අවශ්‍යද?

// ✅ ඔබට අවශ්‍ය පරිදිම වෙනස් කළ හැකි සැලසුම් (Custom Designs) 
// ✅ කල් පවතින උසස් අමුද්‍රව්‍ය 
// ✅ DMT අනුමැතිය සහිතයි

// පරණ විදියටම කොටු නොවී, ඔබේ වැඩේට හරියනම ලොරි බොඩිය හදාගන්න අපිට කතා කරන්න. 👇

//     `
//   },

  {
    title: "නවීන හා ක්‍රියාකාරී අභ්‍යන්තර සැලසුම් විසඳුම්! 🏢✨",
    image: "/news/interior-design.jpeg",
    content: `ඔබගේ කාර්යාලය, ව්‍යාපාරික ස්ථානය හෝ කර්මාන්තශාලා පරිසරය වඩාත් ආකර්ෂණීය හා කාර්යක්ෂම කිරීමට අවශ්‍යද?

✅ නවීන Interior Design & Build Solutions
✅ ව්‍යාපාරික සහ කාර්මික ව්‍යාපෘති සඳහා විශේෂිත සැලසුම්
✅ සැලසුමේ සිට නිමාව දක්වා සම්පූර්ණ සේවාව
✅ ගුණාත්මක නිමාව සහ වෘත්තීයමය ක්‍රියාත්මක කිරීම

ඔබගේ අවශ්‍යතාවයට ගැලපෙන අභ්‍යන්තර සැලසුම් විසඳුම් සඳහා අදම අප සමඟ සම්බන්ධ වන්න. 👇`
  },



];

export default function NewsSlider() {
  return (
    <section className=" bg-[#f8f8f8] py-24 px-0 md:px-8 mt-16 " id="news">
      <div className="container mx-auto max-w-4xl -mt-4">
<div className="flex justify-center mb-4">
  <span className="inline-block bg-[#B6FF00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider animate-soft-bounce">
    # NEWS
  </span>
</div>
        <h1 className="text-4xl font-bold mb-12 text-center">Latest News</h1>
        <Swiper
                modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
        >
          {newsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {item.image && (
                  <div className="relative w-full h-64 sm:h-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
                  <p className="whitespace-pre-line text-gray-800">{item.content}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}