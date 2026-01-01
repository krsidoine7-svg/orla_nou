"use client"

import { motion } from "framer-motion"
import {
  CreditCard,
  Bell,
  Share2,
  FileText,
  Users,
  Mail,
  Search,
  Settings,
  ArrowRight,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

export function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      icon: CreditCard,
      title: t.services.items.invoicing.title,
      description: t.services.items.invoicing.description,
      features: t.services.items.invoicing.features,
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Bell,
      title: t.services.items.notifications.title,
      description: t.services.items.notifications.description,
      features: t.services.items.notifications.features,
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Share2,
      title: t.services.items.social.title,
      description: t.services.items.social.description,
      features: t.services.items.social.features,
      color: "from-orange-500 to-red-500",
    },
    {
      icon: FileText,
      title: t.services.items.reports.title,
      description: t.services.items.reports.description,
      features: t.services.items.reports.features,
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      title: t.services.items.crm.title,
      description: t.services.items.crm.description,
      features: t.services.items.crm.features,
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Mail,
      title: t.services.items.email.title,
      description: t.services.items.email.description,
      features: t.services.items.email.features,
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Search,
      title: t.services.items.scraping.title,
      description: t.services.items.scraping.description,
      features: t.services.items.scraping.features,
      color: "from-teal-500 to-green-500",
    },
    {
      icon: Settings,
      title: t.services.items.custom.title,
      description: t.services.items.custom.description,
      features: t.services.items.custom.features,
      color: "from-pink-500 to-purple-500",
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
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
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.services.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t.services.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 group-hover:from-gray-50 group-hover:to-white">
                <CardHeader className="pb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-pink-50 group-hover:text-pink-600 transition-colors"
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    {t.cta.learnMore}
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">{t.services.cta.title}</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">{t.services.cta.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.cta.getQuote}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-pink-200 hover:border-pink-300 text-pink-700 hover:bg-pink-50 px-8 py-4 rounded-full transition-all duration-300 bg-transparent"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t.cta.viewWork}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
