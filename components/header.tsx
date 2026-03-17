'use client'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B110B]/90 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold italic text-white">
            Turbo<span className="text-[#22C55E]">Tech</span>
          </span>
        </div>
        <nav className="hidden md:flex space-x-8 text-white font-medium">
          <a className="hover:text-[#22C55E] transition-colors" href="#about">About Us</a>
          <a className="hover:text-[#22C55E] transition-colors" href="#services">Services</a>
          <a className="hover:text-[#22C55E] transition-colors" href="#industries">Industries</a>
          <a className="hover:text-[#22C55E] transition-colors" href="#why-us">Why Us</a>
        </nav>
        <a className="bg-white text-[#0B110B] px-6 py-2 rounded-full font-bold flex items-center group hover:bg-[#22C55E] hover:text-white transition-all" href="#contact">
          Contact Us
          <svg className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
          </svg>
        </a>
      </div>
    </header>
  )
}
