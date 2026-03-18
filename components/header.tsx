'use client'

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu if resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Scroll to section and update URL hash
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });

      // Update URL hash without reloading
      window.history.replaceState(null, "", `/#${id}`);

      setIsOpen(false); // close mobile menu
    }
  };

  // Scroll to hash on page load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => handleScroll("home")} className="flex items-center gap-2 cursor-pointer">
          <Image src="/TurboTech.svg" alt="PD Engineering" width={150} height={150} />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <button onClick={() => handleScroll("about")} className="hover:text-[#B6FF00] transition-colors cursor-pointer ">About Us</button>
          <button onClick={() => handleScroll("services")} className="hover:text-[#B6FF00] transition-colors cursor-pointer">Services</button>
          <button onClick={() => handleScroll("industries")} className="hover:text-[#B6FF00] transition-colors cursor-pointer">Industries</button>
                    {/* <button onClick={() => handleScroll("projects")} className="hover:text-[#B6FF00] transition-colors cursor-pointer">Projects</button> */}
                              <button onClick={() => handleScroll("news")} className="hover:text-[#B6FF00] transition-colors cursor-pointer">News</button>


        </nav>

        {/* Contact Button (desktop) */}
        <button
          onClick={() => handleScroll("contact")}
          className="hidden md:flex bg-white text-[#0B110B] px-6 py-2 rounded-full font-bold items-center group hover:bg-[#B6FF00] hover:text-black transition-all"
        >
          Contact Us
          <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </button>

        {/* Mobile Hamburger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/70 z-30 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
<div
  className={`fixed top-0 mt-15 right-0 w-full bg-black/90 h-96 text-white z-40 flex flex-col justify-center items-center space-y-6 transform transition-transform duration-300 ease-in-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
        <button className="text-xl hover:text-[#B6FF00] cursor-nwse-resize" onClick={() => handleScroll("about")}>About Us</button>
        <button className="text-xl hover:text-[#B6FF00] cursor-nwse-resize" onClick={() => handleScroll("services")}>Services</button>
        <button className="text-xl hover:text-[#B6FF00] cursor-nwse-resize" onClick={() => handleScroll("industries")}>Industries</button>
        {/* <button className="text-xl hover:text-[#B6FF00] cursor-nwse-resize" onClick={() => handleScroll("projects")}>Projects</button> */}
                <button className="text-xl hover:text-[#B6FF00] cursor-nwse-resize" onClick={() => handleScroll("news")}>News</button>

        <button
          className="bg-[#B6FF00] text-black px-8 py-3 rounded-full font-bold mt-4 text-center"
          onClick={() => handleScroll("contact")}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
}