"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, MapPin, Phone, Mail, Calendar, CheckCircle2, MessageSquare, AlertCircle, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
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
      subtitle: "Prêt à automatiser votre entreprise ? Parlons de votre projet en détail.",
      form: {
        name: "Nom complet",
        email: "Email professionnel",
        company: "Entreprise",
        phone: "Téléphone",
        service: "Service souhaité",
        budget: "Budget estimé",
        message: "Décrivez votre projet",
        newsletter: "Je souhaite recevoir la newsletter pour des conseils d'automatisation",
        submit: "Envoyer ma demande",
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
        "Solution personnalisée",
      ],
      budgets: [
        "Moins de 100.000FCFA",
        "200.000FCFA - 500.000FCFA",
        "800.000FCFA - 1.500.000FCFA",
        "Plus de 3.000.000FCFA",
      ],
      contact: {
        title: "Nos Coordonnées",
        address: "Abidjan, Côte d'Ivoire",
        phone: "+225 0503681588",
        email: "krsidoine7@gmail.com",
        hours: "Lun - Ven: 8h00 - 18h00",
      },
      appointment: {
        title: "Discutons de vive voix",
        description: "Planifiez une consultation gratuite de 30 minutes avec nos experts pour évaluer vos besoins.",
        button: "Réserver un appel vidéo",
      },
    },
    en: {
      title: "Contact Us",
      subtitle: "Ready to automate your business? Let's talk about your project in detail.",
      form: {
        name: "Full name",
        email: "Professional email",
        company: "Company",
        phone: "Phone",
        service: "Desired service",
        budget: "Estimated budget",
        message: "Describe your project",
        newsletter: "I want to receive the newsletter for automation tips",
        submit: "Send my request",
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
        "Custom solution",
      ],
      budgets: [
        "Less than 100.000FCFA",
        "200.000FCFA - 500.000FCFA",
        "800.000FCFA - 1.500.000FCFA",
        "More than 3.000.000FCFA",
      ],
      contact: {
        title: "Our Contact Info",
        address: "Abidjan, Côte d'Ivoire",
        phone: "+225 0503681588",
        email: "krsidoine7@gmail.com",
        hours: "Mon - Fri: 8:00 AM - 6:00 PM",
      },
      appointment: {
        title: "Let's Talk",
        description: "Schedule a free 30-minute consultation with our experts to assess your needs.",
        button: "Book a video call",
      },
    },
  }

  const t = content[language]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    try {
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

      const response = await fetch("https://hook.eu2.make.com/e3kp4t8mqudv5i87g72q2epv9jkv1b69", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookData),
      })

      if (!response.ok) throw new Error("Failed to submit form")

      setIsSubmitting(false)
      setIsSubmitted(true)

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
      }, 4000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setIsSubmitting(false)
      setSubmitError(
        language === "fr"
          ? "Erreur lors de l'envoi du formulaire. Veuillez réessayer ou nous contacter sur WhatsApp."
          : "Error submitting the form. Please try again or contact us on WhatsApp."
      )
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Light Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-pink-200/50 rounded-full blur-3xl opacity-60 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 w-full max-w-7xl">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-sm border border-purple-100 mb-6 font-medium text-purple-700 text-sm tracking-wide shadow-purple-100/50">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            CONTACT
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

          {/* Left Column: Contact Info & Appointment Booking (30-40% width) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4 xl:col-span-4 flex flex-col gap-6"
          >
            {/* Appointment Booking Card (Primary CTA on left) */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-3xl p-8 lg:p-10 text-white shadow-xl shadow-purple-200 relative overflow-hidden group">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-2xl group-hover:bg-white/30 transition-all duration-500" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-white/20">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 leading-tight">{t.appointment.title}</h3>
                <p className="text-purple-100 mb-8 leading-relaxed text-sm lg:text-base">
                  {t.appointment.description}
                </p>

                <button
                  data-cal-namespace="agenda-rdv"
                  data-cal-link="krsidoine7/agenda-rdv"
                  data-cal-config='{"layout":"month_view"}'
                  className="w-full inline-flex items-center justify-center gap-3 bg-white text-purple-700 hover:text-pink-600 hover:bg-gray-50 font-bold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 transform active:scale-95"
                >
                  <Calendar className="w-5 h-5" />
                  {t.appointment.button}
                </button>
              </div>
            </div>

            {/* Quick Contact Info Card */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 lg:p-10 shadow-lg shadow-gray-200/50 flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="bg-purple-100 text-purple-600 p-2 rounded-lg mr-3">
                  <MapPin className="w-5 h-5" />
                </span>
                {t.contact.title}
              </h3>

              <div className="space-y-6">
                <a href="https://wa.me/2250503681588" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0 border border-green-100 group-hover:bg-green-100 group-hover:scale-110 transition-all">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-gray-400 mb-0.5">Téléphone / WhatsApp</p>
                    <p className="text-base font-bold text-gray-800 group-hover:text-green-600 transition-colors">{t.contact.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${t.contact.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center shrink-0 border border-pink-100 group-hover:bg-pink-100 group-hover:scale-110 transition-all">
                    <Mail className="w-4 h-4 text-pink-600" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-gray-400 mb-0.5">Email</p>
                    <p className="text-base font-bold text-gray-800 group-hover:text-pink-600 transition-colors">{t.contact.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0 border border-purple-100">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-gray-400 mb-0.5">Horaires</p>
                    <p className="text-base font-bold text-gray-800">{t.contact.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-medium text-gray-400 mb-0.5">Localisation</p>
                    <p className="text-base font-bold text-gray-800">{t.contact.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Large Form (60-70% width) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-8 xl:col-span-8 w-full h-full"
          >
            <div className="bg-white border border-gray-100 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl shadow-purple-100/50 relative overflow-hidden h-full flex flex-col">

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {language === "fr" ? "Laissez-nous un message" : "Drop us a message"}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {language === "fr" ? "Nous revenons vers vous sous 24h." : "We will get back to you within 24h."}
                  </p>
                </div>
              </div>

              <div className="flex-grow flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-6 border border-green-100 shadow-inner">
                        <CheckCircle2 className="w-12 h-12 text-green-500" />
                      </div>
                      <h3 className="text-3xl font-black text-gray-900 mb-3">{t.form.success}</h3>
                      <p className="text-gray-600 text-lg max-w-md mx-auto">
                        {language === "fr"
                          ? "Merci de nous avoir contactés. L'un de nos experts analysera votre demande et reviendra vers vous très vite."
                          : "Thank you for contacting us. One of our experts will review your request and get back to you soon."}
                      </p>
                    </motion.div>
                  ) : submitError ? (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="flex flex-col items-center justify-center text-center py-16"
                    >
                      <div className="w-24 h-24 bg-red-50 rounded-full flex items-center justify-center mb-6 border border-red-100 shadow-inner">
                        <AlertCircle className="w-12 h-12 text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {language === "fr" ? "Erreur d'envoi" : "Submission Error"}
                      </h3>
                      <p className="text-gray-600 mb-8 max-w-md mx-auto">{submitError}</p>
                      <Button
                        onClick={() => setSubmitError(null)}
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-8 py-6 text-lg shadow-lg"
                      >
                        {language === "fr" ? "Réessayer l'envoi" : "Try Sending Again"}
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 block">{t.form.name} *</label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-400 focus:ring-purple-400/30 transition-all rounded-xl h-14 px-4 shadow-sm"
                            placeholder="Ex: John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 block">{t.form.email} *</label>
                          <Input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-400 focus:ring-purple-400/30 transition-all rounded-xl h-14 px-4 shadow-sm"
                            placeholder="john@entreprise.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 block">{t.form.company}</label>
                          <Input
                            value={formData.company}
                            onChange={(e) => handleInputChange("company", e.target.value)}
                            className="bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-400 focus:ring-purple-400/30 transition-all rounded-xl h-14 px-4 shadow-sm"
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 block">{t.form.phone}</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                            className="bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-400 focus:ring-purple-400/30 transition-all rounded-xl h-14 px-4 shadow-sm"
                            placeholder="+225 00 00 00 00"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 block">{t.form.service} *</label>
                          <Select required onValueChange={(value) => handleInputChange("service", value)}>
                            <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-400 focus:ring-purple-400/30 transition-all rounded-xl h-14 px-4 shadow-sm">
                              <SelectValue placeholder={language === "fr" ? "Quel est votre besoin principal ?" : "Main need?"} />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200 text-gray-800 rounded-xl shadow-xl">
                              {t.services.map((service, index) => (
                                <SelectItem key={index} value={service} className="cursor-pointer hover:bg-purple-50 focus:bg-purple-50">
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold text-gray-700 block">{t.form.budget}</label>
                          <Select onValueChange={(value) => handleInputChange("budget", value)}>
                            <SelectTrigger className="bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-400 focus:ring-purple-400/30 transition-all rounded-xl h-14 px-4 shadow-sm">
                              <SelectValue placeholder={language === "fr" ? "Sélectionnez une tranche" : "Select a range"} />
                            </SelectTrigger>
                            <SelectContent className="bg-white border-gray-200 text-gray-800 rounded-xl shadow-xl">
                              {t.budgets.map((budget, index) => (
                                <SelectItem key={index} value={budget} className="cursor-pointer hover:bg-purple-50 focus:bg-purple-50">
                                  {budget}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-700 block">{t.form.message} *</label>
                        <Textarea
                          required
                          value={formData.message}
                          onChange={(e) => handleInputChange("message", e.target.value)}
                          className="bg-gray-50 border-gray-200 text-gray-900 focus:bg-white focus:border-purple-400 focus:ring-purple-400/30 transition-all rounded-xl min-h-[150px] p-4 shadow-sm resize-y"
                          placeholder={
                            language === "fr"
                              ? "Détaillez vos défis actuels, les processus que vous aimeriez automatiser, vos outils en place..."
                              : "Detail your current challenges, processes you want to automate, tools you use..."
                          }
                        />
                      </div>

                      <div className="flex items-start md:items-center space-x-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                          className="mt-1 md:mt-0 border-gray-300 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 rounded-md"
                        />
                        <label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer select-none leading-relaxed">
                          {t.form.newsletter}
                        </label>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 group mt-4 overflow-hidden relative"
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                        <span className="relative flex items-center justify-center w-full">
                          {isSubmitting ? (
                            <>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3" />
                              {t.form.submitting}
                            </>
                          ) : (
                            <>
                              {t.form.submit}
                              <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </span>
                      </Button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
