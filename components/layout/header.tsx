"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems: { key: keyof typeof t.nav; href: string }[] = [
    { key: "home", href: "#home" },
    { key: "services", href: "#services" },
    { key: "about", href: "#about" },
    { key: "portfolio", href: "#portfolio" },
    { key: "blog", href: "#blog" },
    { key: "contact", href: "#contact" },
    { key: "faq", href: "#faq" },
  ]

  const t = translations[language]

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">C&C</span>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Chris&co
              </h1>
              <p className="text-xs text-gray-600">{t.tagline}</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {t.nav[item.key]}
              </motion.a>
            ))}
          </nav>

          {/* Language Switcher & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
              className="flex items-center space-x-1 hover:bg-pink-100"
            >
              <Globe className="w-4 h-4" />
              <span className="uppercase font-medium">{language}</span>
            </Button>

            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {t.cta.contact}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-200"
            >
              <nav className="flex flex-col space-y-4 mt-4">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="text-gray-700 hover:text-pink-600 transition-colors duration-200 font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t.nav[item.key]}
                  </a>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setLanguage(language === "fr" ? "en" : "fr")}
                    className="flex items-center space-x-1"
                  >
                    <Globe className="w-4 h-4" />
                    <span className="uppercase font-medium">{language}</span>
                  </Button>

                  <Button
                    className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full"
                    onClick={() => {
                      setIsMenuOpen(false)
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }}
                  >
                    {t.cta.contact}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
