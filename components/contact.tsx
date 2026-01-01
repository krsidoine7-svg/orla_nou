"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Send, MapPin, Phone, Mail, Calendar, CheckCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useLanguage } from "@/hooks/use-language"
import { getCalApi } from "@calcom/embed-react"

export function Contact() {
  const { language } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    newsletter: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  useEffect(() => {
    ; (async () => {
      const cal = await getCalApi({ namespace: "agenda-rdv" })
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" })
    })()
  }, [])

  const content = {
    fr: {
      title: "Contactez-nous",
      subtitle: "Prêt à automatiser votre entreprise ? Parlons de votre projet !",
      form: {
        name: "Nom complet",
        email: "Email professionnel",
        company: "Entreprise",
        phone: "Téléphone",
        service: "Service souhaité",
        budget: "Budget estimé",
        message: "Décrivez votre projet",
        newsletter: "Je souhaite recevoir la newsletter",
        submit: "Envoyer le message",
        submitting: "Envoi en cours...",
        success: "Message envoyé avec succès !",
      },
      services: [
        "Facturation automatisée",
        "Notifications & rappels",
        "Automatisation réseaux sociaux",
        "Rapports automatisés",
        "Intégration CRM",
        "Tri de mails",
        "Scraping de leads",
        "Solution personnalisée",
      ],
      budgets: [
        "Moins de 100.000FCFA",
        "200.000FCFA - 500.000FCFA",
        "800.000FCFA - 1.500.000FCFA",
        "Plus de 3.000.000FCFA",
      ],
      contact: {
        title: "Informations de contact",
        address: "Abidjan, Côte d'Ivoire",
        phone: "+225 0503681588",
        email: "krsidoine7@gmail.com",
        hours: "Lun - Ven: 8h - 18h",
      },
      appointment: {
        title: "Réserver un rendez-vous",
        description: "Planifiez une consultation gratuite de 30 minutes",
        button: "Réserver maintenant",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "Ready to automate your business? Let's talk about your project!",
      form: {
        name: "Full name",
        email: "Professional email",
        company: "Company",
        phone: "Phone",
        service: "Desired service",
        budget: "Estimated budget",
        message: "Describe your project",
        newsletter: "I want to receive the newsletter",
        submit: "Send message",
        submitting: "Sending...",
        success: "Message sent successfully!",
      },
      services: [
        "Automated invoicing",
        "Notifications & reminders",
        "Social media automation",
        "Automated reports",
        "CRM integration",
        "Email sorting",
        "Lead scraping",
        "Custom solution",
      ],
      budgets: [
        "Less than 100.000FCFA",
        "200.000FCFA - 500.000FCFA",
        "800.000FCFA - 1.500.000FCFA",
        "More than 3.000.000FCFA",
      ],
      contact: {
        title: "Contact Information",
        address: "Abidjan, Côte d'Ivoire",
        phone: "+225 0503681588",
        email: "krsidoine7@gmail.com",
        hours: "Mon - Fri: 8am - 6pm",
      },
      appointment: {
        title: "Book an appointment",
        description: "Schedule a free 30-minute consultation",
        button: "Book now",
      },
    },
  }

  const t = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Prepare data for webhook
      const webhookData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        newsletter: formData.newsletter,
        language: language,
        timestamp: new Date().toISOString(),
        source: "CHRISANDCO_FORM",
      }

      // Send to webhook
      const response = await fetch("https://hook.eu2.make.com/e3kp4t8mqudv5i87g72q2epv9jkv1b69", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(webhookData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          service: "",
          budget: "",
          message: "",
          newsletter: false,
        })
      }, 3000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      // You could add error state handling here if needed
      alert(
        language === "fr"
          ? "Erreur lors de l'envoi du formulaire. Veuillez réessayer."
          : "Error submitting form. Please try again.",
      )
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-20 bg-white">
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

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <MessageSquare className="w-6 h-6 mr-3 text-purple-600" />
                  {language === "fr" ? "Formulaire de contact" : "Contact Form"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{t.form.success}</h3>
                    <p className="text-gray-600">
                      {language === "fr"
                        ? "Nous vous répondrons dans les plus brefs délais."
                        : "We will get back to you as soon as possible."}
                    </p>
                  </motion.div>
                ) : submitError ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-red-500 text-2xl">⚠️</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {language === "fr" ? "Erreur d'envoi" : "Submission Error"}
                    </h3>
                    <p className="text-gray-600 mb-4">{submitError}</p>
                    <Button
                      onClick={() => setSubmitError(null)}
                      className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white"
                    >
                      {language === "fr" ? "Réessayer" : "Try Again"}
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.name} *</label>
                        <Input
                          required
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="border-gray-300 focus:border-purple-500"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.email} *</label>
                        <Input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="border-gray-300 focus:border-purple-500"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.company}</label>
                        <Input
                          value={formData.company}
                          onChange={(e) => handleInputChange("company", e.target.value)}
                          className="border-gray-300 focus:border-purple-500"
                          placeholder="Mon Entreprise"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.phone}</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="border-gray-300 focus:border-purple-500"
                          placeholder="+2250707070707"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.service} *</label>
                        <Select required onValueChange={(value) => handleInputChange("service", value)}>
                          <SelectTrigger className="border-gray-300 focus:border-purple-500">
                            <SelectValue
                              placeholder={language === "fr" ? "Sélectionnez un service" : "Select a service"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {t.services.map((service, index) => (
                              <SelectItem key={index} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.budget}</label>
                        <Select onValueChange={(value) => handleInputChange("budget", value)}>
                          <SelectTrigger className="border-gray-300 focus:border-purple-500">
                            <SelectValue
                              placeholder={language === "fr" ? "Sélectionnez un budget" : "Select a budget"}
                            />
                          </SelectTrigger>
                          <SelectContent>
                            {t.budgets.map((budget, index) => (
                              <SelectItem key={index} value={budget}>
                                {budget}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t.form.message} *</label>
                      <Textarea
                        required
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        className="border-gray-300 focus:border-purple-500 min-h-[120px]"
                        placeholder={
                          language === "fr"
                            ? "Décrivez votre projet et vos besoins en automatisation..."
                            : "Describe your project and automation needs..."
                        }
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <label htmlFor="newsletter" className="text-sm text-gray-600">
                        {t.form.newsletter}
                      </label>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          {t.form.submitting}
                        </div>
                      ) : (
                        <>
                          {t.form.submit}
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info & Appointment */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Information */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                  {t.contact.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Adresse</p>
                    <p className="text-gray-600">{t.contact.address}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Téléphone</p>
                    <p className="text-gray-600">{t.contact.phone}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">{t.contact.email}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Calendar className="w-5 h-5 text-gray-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-800">Horaires</p>
                    <p className="text-gray-600">{t.contact.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Booking */}
            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                  {t.appointment.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{t.appointment.description}</p>
                <button
                  data-cal-namespace="agenda-rdv"
                  data-cal-link="krsidoine7/agenda-rdv"
                  data-cal-config='{"layout":"month_view"}'
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center py-3 px-6 font-medium"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {t.appointment.button}
                </button>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-purple-600">24h</div>
                    <div className="text-sm text-gray-600">
                      {language === "fr" ? "Réponse rapide" : "Quick response"}
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-pink-600">100%</div>
                    <div className="text-sm text-gray-600">{language === "fr" ? "Satisfaction" : "Satisfaction"}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
