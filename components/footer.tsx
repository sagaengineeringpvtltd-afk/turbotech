'use client'

export default function Footer() {
  return (
    <footer className="bg-[#0B110B] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#22C55E]">TurboTech</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#22C55E]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#22C55E]">Core Services</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Machinery Importing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Distribution</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Manufacturing</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#22C55E]">Contact Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>📞 +94-77-000-0000</li>
              <li>✉️ info@turbotech.com</li>
              <li>📍 Colombo, Sri Lanka</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 TurboTech. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
