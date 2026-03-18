'use client'
import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10 rounded ">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
         <div>
  <Image src="/TurboTech.svg" alt="PD Engineering" width={150} height={150} />

  <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-2/4">
    Delivering high-quality machinery, industrial solutions, and custom lorry body designs across Sri Lanka with reliability and precision.
  </p>
</div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#B6FF00]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
               <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
                                          <li><a href="#news" className="hover:text-white transition-colors">News</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#B6FF00]">Core Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors">Machinery Importing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Distribution</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Manufacturing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#B6FF00]">Contact Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">

  {/* Phone → WhatsApp */}
  <li>
    <a
      href="https://wa.me/94743022963"
      target="_blank"
      className="flex items-center gap-3 hover:text-white transition-colors"
    >
      <FaPhoneAlt className="text-[#B6FF00]" />
      +94-74-302-2963
    </a>
  </li>

  {/* Email → Gmail / Mail App */}
  <li>
    <a
      href="mailto:info@turbotech.lk"
      className="flex items-center gap-3 hover:text-white transition-colors"
    >
      <FaEnvelope className="text-[#B6FF00]" />
      info@turbotech.lk
    </a>
  </li>

  {/* Location → Google Maps */}
  <li>
    <a
      href="https://www.google.com/maps?q=8/A, Kahathuduwa, Polgasowita, Sri Lanka"
      target="_blank"
      className="flex items-center gap-3 hover:text-white transition-colors"
    >
      <FaMapMarkerAlt className="text-[#B6FF00]" />
      8/A, Kahathuduwa, Polgasowita, Sri Lanka
    </a>
  </li>

</ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
<a
  href="https://verlixtech.com"
  target="_blank"
  rel="noopener noreferrer"
  className="hover:text-white transition-colors"
>
  © 2026 VERLIXTECH (PVT) LTD. All rights reserved.
</a>          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
