"use client"

import { motion } from "framer-motion"
import { Users, Target, Lightbulb, Award, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export function About() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: "À propos de Chris&co",
      subtitle: "Une équipe passionnée d'automatisation basée à Abidjan",
      founder: {
        name: "Koffi Renaud",
        role: "Fondateur & Expert en Automatisation",
        description:
          "Passionné par l'innovation technologique, Renaud a créé Chris&co pour aider les entreprises africaines à optimiser leurs processus grâce à l'automatisation intelligente.",
      },
      stats: [
        { icon: Users, value: "20+", label: "Clients satisfaits" },
        { icon: Target, value: "30+", label: "Projets réalisés" },
        { icon: Award, value: "2025", label: "Depuis" },
        { icon: MapPin, value: "Abidjan", label: "Côte d'Ivoire" },
      ],
      values: [
        {
          icon: Lightbulb,
          title: "Innovation",
          description:
            "Nous utilisons les dernières technologies pour créer des solutions d'automatisation révolutionnaires.",
        },
        {
          icon: Users,
          title: "Proximité",
          description:
            "Une approche personnalisée pour comprendre et répondre aux besoins spécifiques de chaque client.",
        },
        {
          icon: Target,
          title: "Résultats",
          description: "Notre objectif : maximiser votre productivité et votre rentabilité grâce à l'automatisation.",
        },
      ],
      mission:
        "Notre mission est de démocratiser l'automatisation en Afrique et d'aider les entreprises à se concentrer sur leur cœur de métier.",
    },
    en: {
      title: "About Chris&co",
      subtitle: "A passionate automation team based in Abidjan",
      founder: {
        name: "Koffi Renaud",
        role: "Founder & Automation Expert",
        description:
          "Passionate about technological innovation, Toto created Chris&co to help African businesses optimize their processes through intelligent automation.",
      },
      stats: [
        { icon: Users, value: "20+", label: "Satisfied clients" },
        { icon: Target, value: "30+", label: "Projects completed" },
        { icon: Award, value: "2025", label: "Since" },
        { icon: MapPin, value: "Abidjan", label: "Côte d'Ivoire" },
      ],
      values: [
        {
          icon: Lightbulb,
          title: "Innovation",
          description: "We use the latest technologies to create revolutionary automation solutions.",
        },
        {
          icon: Users,
          title: "Proximity",
          description: "A personalized approach to understand and meet the specific needs of each client.",
        },
        {
          icon: Target,
          title: "Results",
          description: "Our goal: maximize your productivity and profitability through automation.",
        },
      ],
      mission: "Our mission is to democratize automation in Africa and help businesses focus on their core business.",
    },
  }

  const t = content[language]

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {t.stats.map((stat, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-6">
                <span className="text-4xl font-bold text-white">T</span>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.founder.name}</h3>
              <p className="text-purple-600 font-medium mb-4">{t.founder.role}</p>
              <p className="text-gray-600 leading-relaxed">{t.founder.description}</p>
            </div>
          </div>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {t.values.map((value, index) => (
            <motion.div key={index} whileHover={{ y: -5 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 lg:p-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">Notre Mission</h3>
          <p className="text-lg lg:text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">{t.mission}</p>
        </motion.div>
      </div>
    </section>
  )
}
