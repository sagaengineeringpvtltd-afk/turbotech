// 'use client'

// import { useState } from 'react'

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: ''
//   })

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     console.log('Form submitted:', formData)
//     setFormData({
//       firstName: '',
//       lastName: '',
//       email: '',
//       phone: '',
//       message: ''
//     })
//   }

//   return (
//     <section className="py-24 bg-white px-8" id="contact">
//       <div className="container mx-auto px-6">
//         <div className="flex justify-between items-end mb-12">
//           <div className="max-w-xl">
//             <span className="bg-[#B6FF00] text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider"># Get In Touch</span>
//             <h2 className="text-4xl font-bold mt-4">Start Your Project</h2>
//             <p className="text-gray-500 mt-4">If you are looking for reliable machinery, industrial tools, or customized lorry body solutions, TurboTech is ready to support your business.</p>
//           </div>
//         </div>
//         <div className="flex flex-col lg:flex-row bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100">
//           <div className="lg:w-2/3 p-12">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-xs font-bold text-gray-400 uppercase mb-2">First Name</label>
//                   <input 
//                     type="text"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="w-full border-b border-gray-200 focus:border-[#22C55E] border-t-0 border-x-0 outline-none py-2 px-0 transition-colors"
//                     placeholder="First Name"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Last Name</label>
//                   <input 
//                     type="text"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="w-full border-b border-gray-200 focus:border-[#22C55E] border-t-0 border-x-0 outline-none py-2 px-0 transition-colors"
//                     placeholder="Last Name"
//                   />
//                 </div>
//               </div>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Email</label>
//                   <input 
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full border-b border-gray-200 focus:border-[#22C55E] border-t-0 border-x-0 outline-none py-2 px-0 transition-colors"
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Phone Number</label>
//                   <input 
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="w-full border-b border-gray-200 focus:border-[#22C55E] border-t-0 border-x-0 outline-none py-2 px-0 transition-colors"
//                     placeholder="Phone Number"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-xs font-bold text-gray-400 uppercase mb-2">Message</label>
//                 <textarea 
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="w-full border-b border-gray-200 focus:border-[#22C55E] border-t-0 border-x-0 outline-none py-2 px-0 transition-colors resize-none"
//                   placeholder="Write your message..."
//                   rows={3}
//                 ></textarea>
//               </div>
//               <button type="submit" className="w-full bg-[#0B110B] text-white font-bold py-4 rounded-xl hover:bg-[#22C55E] transition-colors">
//                 Send Message
//               </button>
//             </form>
//           </div>
//           <div className="lg:w-1/3 bg-[#0B110B] p-12 text-white">
//             <h3 className="text-xl font-bold mb-8">Contact Details</h3>
//             <div className="space-y-6 mb-12">
//               <div className="flex items-center space-x-4">
//                 <div className="bg-[#22C55E]/20 p-2 rounded-lg">
//                   <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
//                   </svg>
//                 </div>
//                 <span className="text-gray-300 text-sm">+94-77-000-0000</span>
//               </div>
//               <div className="flex items-center space-x-4">
//                 <div className="bg-[#22C55E]/20 p-2 rounded-lg">
//                   <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
//                   </svg>
//                 </div>
//                 <span className="text-gray-300 text-sm">info@turbotech.com</span>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="bg-[#22C55E]/20 p-2 rounded-lg">
//                   <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
//                     <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
//                   </svg>
//                 </div>
//                 <span className="text-gray-300 text-sm">Example, Colombo <br/> Sri Lanka</span>
//               </div>
//             </div>
//             <h3 className="text-xl font-bold mb-4">Our Location</h3>
//             <div className="w-full h-40 bg-gray-700 rounded-2xl overflow-hidden opacity-80">
//               <img alt="TurboTech Map Location" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2qMRKR_BdHiIFBMPk7BQ6AqlTMiQ6TBUEG_isAykEZ4Ce-m7yyWRA34_U5MFTnPmlijldoOSItPAWfTWFrC-ro0R0KsWG_bAJHL1WNMjyJWrL6gO3wMq3rPykMocYosm-uukwTXiW0fHQhHUMsseBdLsm2yMgzGbPBTAN2bQLQB_0JB487VpAY-ZazO-I_DWtZLXGDf2ecjanFRNB8_6VF3SmrReJ8NcwZYoFzPQwl5VIvv-JqW8ksq3bY17_pKWyWpwt_xyfLFU"/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact TurboTech | Power Tools & Engineering Solutions",

  description:
    "Get in touch with TurboTech for high-quality power tools, industrial equipment, and custom lorry body solutions in Sri Lanka. Contact us for reliable service and support.",

  keywords:
    "contact TurboTech, power tools Sri Lanka contact, industrial tools supplier contact, lorry body manufacturing Sri Lanka, TurboTech phone number, Kahathuduwa Polgasowita business",

  openGraph: {
    title: "Contact TurboTech",
    description:
      "Reach out to TurboTech for power tools and custom engineering solutions. We are ready to support your business needs.",
    url: "https://www.turbotech.lk/#contact",
    siteName: "TurboTech",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact TurboTech",
    description:
      "Contact TurboTech for reliable power tools and engineering services in Sri Lanka.",
  },

  alternates: {
    canonical: "https://www.turbotech.lk/#contact",
  },
};
export default function Contact() {
  return (
    <section className="py-24 bg-white px-0 md:px-8" id="contact">
      <div className="container mx-auto px-6">


        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
  {/* Left Side: Badge + Heading */}
  <div className="w-full md:w-1/2 text-left">
    <span className="bg-[#B6FF00] text-[#000000] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
      # Get In Touch
    </span>
    <h2 className="text-4xl font-bold mt-4">Start Your Project</h2>
  </div>

  {/* Right Side: Paragraph */}
  <div className="w-full md:w-1/2 lg:w-max text-left md:text-right mt-6 md:mt-0">
    <p className="text-gray-500 max-w-md">
If you are looking for reliable machinery, industrial tools, or customized lorry body solutions, TurboTech is ready to support your business.    </p>
  </div>
</div>

        <div className="flex flex-col lg:flex-row rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
          {/* Left Side: Full Map */}
          <div className="lg:w-2/3 w-full h-[600px] lg:h-auto relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31695.088556818424!2d79.95834581650371!3d6.783717162777164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24e64039273f7%3A0x451692d370fd2e51!2sKahathuduwa!5e0!3m2!1sen!2slk!4v1773833691562!5m2!1sen!2slk"
              className="w-full h-full object-cover"
              allowFullScreen
              loading="lazy"
              title="TurboTech Location"
            ></iframe>
          </div>

          {/* Right Side: Contact Text + Details */}
          <div className="lg:w-1/3 bg-[#0B110B] p-12 text-white flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-8">Contact Details</h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-center space-x-4">
                <div className="bg-[#B6FF00]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#B6FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">+94-74-302-2963</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-[#B6FF00]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#B6FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 012 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">info@turbotech.lk</span>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-[#B6FF00]/20 p-2 rounded-lg">
                  <svg className="w-5 h-5 text-[#B6FF00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                </div>
                <span className="text-gray-300 text-sm">8/A, Kahathuduwa, Polgasowita <br /> Sri Lanka</span>
              </div>
            </div>

            {/* Additional Text instead of map */}
            <p className="text-gray-300 text-sm">
              Our team is always ready to assist you with inquiries about our machinery, industrial solutions, or custom lorry body designs. Reach out to us, and we will respond promptly to support your business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}