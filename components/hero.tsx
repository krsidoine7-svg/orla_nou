"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Zap, TrendingUp, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"
import { Simple3DScene } from "@/components/simple-3d-scene"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-purple-50" />

      {/* 3D Background */}
      <div className="absolute inset-0 opacity-60">
        <Simple3DScene />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full border border-pink-200"
            >
              <Zap className="w-4 h-4 text-pink-600" />
              <span className="text-sm font-medium text-pink-800">{t.hero.badge}</span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight"
              >
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-orange-500 bg-clip-text text-transparent">
                  {t.hero.title.split(" ")[0]}
                </span>
                <br />
                <span className="text-gray-800">{t.hero.title.split(" ").slice(1).join(" ")}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                {t.hero.subtitle}
              </motion.p>
            </div>


            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.cta.getStarted}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10 px-8 py-4 rounded-full transition-all duration-300 group bg-transparent"
                onClick={() => {
                  const message = language === "fr"
                    ? "Bonjour Chris&co, je souhaiterais avoir des informations sur vos services d'automatisation."
                    : "Hello Chris&co, I would like to have information about your automation services.";
                  window.open(`https://wa.me/2250503681588?text=${encodeURIComponent(message)}`, "_blank");
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 mr-2 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.675 1.438 5.662 1.439h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-2 border-pink-200 hover:border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-full transition-all duration-300 group bg-transparent"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                {t.cta.watchDemo}
              </Button>
            </motion.div>

            {/* Slogan */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 border-t border-gray-200"
            >
              <p className="text-lg font-medium text-gray-700 italic">"{t.hero.slogan}"</p>
              <p className="text-sm text-gray-500 mt-1">— Chris&co, Abidjan</p>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-64 sm:h-96 lg:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl opacity-50" />
            <div className="relative h-full">
              <Simple3DScene />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="w-6 h-10 border-2 border-pink-300 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="w-1 h-3 bg-pink-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
