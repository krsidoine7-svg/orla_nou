"use client"

import { motion } from "framer-motion"
import { Users, Target, Rocket, Sparkles, HeartHandshake, TrendingUp } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function About() {
  const { language } = useLanguage()

  const content = {
    fr: {
      badge: "NOTRE ADN",
      title: "À propos d'Orlan-ou",
      subtitle: "Plus qu'une agence, votre partenaire stratégique en automatisation basé à Abidjan.",
      values: [
        {
          icon: Rocket,
          title: "Innovation",
          description: "Nous ne nous contentons pas de suivre les tendances. Nous intégrons les dernières avancées en IA et les outils No-Code les plus puissants pour construire des systèmes fiables et évolutifs.",
          color: "from-purple-500 to-pink-500",
          shadow: "shadow-purple-500/20"
        },
        {
          icon: HeartHandshake,
          title: "Proximité",
          description: "Chaque entreprise est unique. Nous prenons le temps d'auditer vos processus en profondeur et restons à vos côtés à chaque étape, avec un accompagnement humain sur mesure.",
          color: "from-blue-500 to-cyan-400",
          shadow: "shadow-blue-500/20"
        },
        {
          icon: TrendingUp,
          title: "Résultats",
          description: "Nous ne vendons pas de la technique, mais du temps et de la croissance. Nos solutions sont conçues dans un seul but : maximiser votre rentabilité et éliminer les tâches chronophages.",
          color: "from-orange-500 to-yellow-500",
          shadow: "shadow-orange-500/20"
        },
      ],
      missionTitle: "Notre Mission : Démocratiser l'automatisation en Afrique",
      missionText: "Notre mission est simple : permettre aux entreprises de se recentrer sur leur cœur de métier. Nous construisons l'infrastructure invisible qui fait tourner votre activité 24h/24, sans erreur, pour libérer votre plein potentiel."
    },
    en: {
      badge: "OUR DNA",
      title: "About Orlan-ou",
      subtitle: "More than an agency, your strategic automation partner based in Abidjan.",
      values: [
        {
          icon: Rocket,
          title: "Innovation",
          description: "We don't just follow trends. We integrate the latest AI advancements and the most powerful No-Code tools to build reliable and scalable systems.",
          color: "from-purple-500 to-pink-500",
          shadow: "shadow-purple-500/20"
        },
        {
          icon: HeartHandshake,
          title: "Proximity",
          description: "Every business is unique. We take the time to audit your processes in depth and stay by your side at every step, offering human and tailored support.",
          color: "from-blue-500 to-cyan-400",
          shadow: "shadow-blue-500/20"
        },
        {
          icon: TrendingUp,
          title: "Results",
          description: "We don't sell tech, we sell time and growth. Our solutions are designed with one goal: maximizing your profitability and eliminating time-consuming tasks.",
          color: "from-orange-500 to-yellow-500",
          shadow: "shadow-orange-500/20"
        },
      ],
      missionTitle: "Our Mission: Democratizing automation in Africa",
      missionText: "Our mission is simple: allow businesses to refocus on their core value. We build the invisible infrastructure that runs your operations 24/7, error-free, unleashing your full potential."
    },
  }

  const t = content[language]

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Dynamic Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-pink-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-6 font-bold text-purple-700 text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 3 Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24">
          {t.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="h-full bg-white p-8 rounded-3xl border border-gray-100 shadow-xl shadow-gray-100/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden z-10">
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${value.color} opacity-0 group-hover:opacity-5 rounded-full blur-2xl transition-opacity duration-500`} />

                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} p-0.5 mb-8 shadow-lg ${value.shadow} group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-gray-900 group-hover:to-gray-600 transition-all" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Big Mission Statement Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative rounded-[3rem] overflow-hidden border border-gray-100 shadow-2xl shadow-purple-100/30"
        >
          {/* Mission Background (Light/Premium) */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-50/50 to-purple-50/50 z-0" />

          {/* Colorful glowing orbs inside the mission box */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-200/50 rounded-full blur-[100px] z-0 pointer-events-none mix-blend-multiply" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-200/50 rounded-full blur-[100px] z-0 pointer-events-none mix-blend-multiply" />

          <div className="relative z-10 p-10 sm:p-16 lg:p-24 text-center flex flex-col items-center justify-center">
            <div className="w-20 h-20 bg-white border border-purple-100 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-purple-100/50">
              <Target className="w-10 h-10 text-purple-600" />
            </div>

            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight max-w-4xl mx-auto tracking-tight">
              {t.missionTitle}
            </h3>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-normal">
              "{t.missionText}"
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
