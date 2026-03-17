'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import About from '@/components/about'
import Services from '@/components/services'
import Industries from '@/components/industries'
import WhyChoose from '@/components/why-choose'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChoose />
      <Contact />
      <Footer />
    </main>
  )
}
