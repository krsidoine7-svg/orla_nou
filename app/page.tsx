"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { Hero } from "@/components/hero"
import { VideoShowcase } from "@/components/video-showcase"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Portfolio } from "@/components/portfolio"
import { Blog } from "@/components/blog"
import { Contact } from "@/components/contact"
import { FAQ } from "@/components/faq"
import { VirtualAssistant } from "@/components/virtual-assistant"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FloatingElements } from "@/components/floating-elements"
// pour compter les visiteur du site
import VisitorCounter from "@/components/VisitorCounter"

// reactbits Curseur Splash
import SplashCursor from "@/components/SplashCursor"





export default function HomePage() {
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50 to-purple-50">
      {mounted && window.innerWidth > 768 && <SplashCursor />}
      <FloatingElements />

      <main className="relative overflow-hidden">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Hero />

          <Services />
          <About />
          <Portfolio />
          <Blog />
          <Contact />
          <FAQ />
        </motion.div>
        {/* 👇  AJOUTÉ ICI */}
        <VisitorCounter />

      </main>

      <VideoShowcase
        videoUrl="/automation-demo.mp4"
        tiktokUrl="https://www.tiktok.com/@chris_co_"
        title={language === "fr" ? "L'Automatisation en action" : "Automation in Action"}
      />
      <VirtualAssistant />
      <WhatsAppButton />
    </div>
  )
}






