"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function Partners() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: "Nos Partenaires",
      subtitle:
        "Nous collaborons avec les meilleures plateformes et outils pour vous offrir des solutions d'automatisation complètes",
      visitWebsite: "Visiter le site",
    },
    en: {
      title: "Our Partners",
      subtitle: "We collaborate with the best platforms and tools to offer you complete automation solutions",
      visitWebsite: "Visit website",
    },
  }

  const partners = [
    {
      name: "Zapier",
      description: language === "fr" ? "Plateforme d'automatisation no-code" : "No-code automation platform",
      logo: "/placeholder.svg?height=80&width=200",
      url: "https://zapier.com",
      category: "Automation",
    },
    {
      name: "Make",
      description: language === "fr" ? "Automatisation visuelle avancée" : "Advanced visual automation",
      logo: "/placeholder.svg?height=80&width=200",
      url: "https://make.com",
      category: "Automation",
    },
    {
      name: "Airtable",
      description: language === "fr" ? "Base de données collaborative" : "Collaborative database",
      logo: "/placeholder.svg?height=80&width=200",
      url: "https://airtable.com",
      category: "Database",
    },
    {
      name: "Notion",
      description: language === "fr" ? "Espace de travail tout-en-un" : "All-in-one workspace",
      logo: "/placeholder.svg?height=80&width=200",
      url: "https://notion.so",
      category: "Productivity",
    },
    {
      name: "Slack",
      description: language === "fr" ? "Communication d'équipe" : "Team communication",
      logo: "/placeholder.svg?height=80&width=200",
      url: "https://slack.com",
      category: "Communication",
    },
    {
      name: "HubSpot",
      description: language === "fr" ? "CRM et marketing automation" : "CRM and marketing automation",
      logo: "/placeholder.svg?height=80&width=200",
      url: "https://hubspot.com",
      category: "CRM",
    },
  ]

  const t = content[language]

  return (
    <section id="partners" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{t.title}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                <div className="flex-1">
                  <div className="h-20 flex items-center justify-center mb-6">
                    <img
                      src={partner.logo || "/placeholder.svg"}
                      alt={`${partner.name} logo`}
                      className="max-h-full max-w-full object-contain opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>

                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{partner.description}</p>
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                      {partner.category}
                    </span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  className="w-full border-gray-200 hover:border-purple-300 hover:bg-purple-50 group-hover:text-purple-600 transition-all duration-300 bg-transparent"
                  onClick={() => window.open(partner.url, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t.visitWebsite}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              {language === "fr" ? "Intégrations Personnalisées" : "Custom Integrations"}
            </h3>
            <p className="text-lg opacity-90 max-w-3xl mx-auto mb-8">
              {language === "fr"
                ? "Nous pouvons intégrer n'importe quel outil ou plateforme dans vos workflows d'automatisation. Contactez-nous pour discuter de vos besoins spécifiques."
                : "We can integrate any tool or platform into your automation workflows. Contact us to discuss your specific needs."}
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              {language === "fr" ? "Discuter de vos besoins" : "Discuss your needs"}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
