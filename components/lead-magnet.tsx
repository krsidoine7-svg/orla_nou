"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { Download, Mail, CheckCircle2, AlertCircle, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function LeadMagnet() {
    const { language } = useLanguage()
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const content = {
        fr: {
            badge: "GUIDE GRATUIT 2026",
            title: "Les 10 Automatisations Qui Vont Changer Votre Année",
            subtitle: "Découvrez les secrets des entreprises qui gagnent plus de 15 heures par semaine. Téléchargez notre guide exclusif en PDF pour automatiser les tâches les plus chronophages de votre activité.",
            placeholder: "Votre adresse email professionnelle...",
            button: "Obtenir mon guide",
            submitting: "Envoi...",
            successTitle: "C'est dans la boîte !",
            successDesc: "Vérifiez votre boîte mail (et vos spams), le lien de téléchargement vient de vous être envoyé.",
            errorMsg: "Erreur lors de l'envoi. Veuillez vérifier votre adresse mail ou réessayer.",
            features: [
                "15+ heures gagnées/semaine",
                "Méthodes pas-à-pas Make & n8n",
                "0 tracas technique",
            ]
        },
        en: {
            badge: "FREE 2026 GUIDE",
            title: "10 Automations That Will Change Your Year",
            subtitle: "Discover the secrets of businesses saving over 15 hours a week. Download our exclusive PDF guide to automate the most time-consuming tasks in your business.",
            placeholder: "Your professional email address...",
            button: "Get my guide",
            submitting: "Sending...",
            successTitle: "It's on its way!",
            successDesc: "Check your inbox (and spam folder), the download link has just been sent to you.",
            errorMsg: "Error sending. Please check your email address or try again.",
            features: [
                "15+ hours saved/week",
                "Step-by-step Make & n8n methods",
                "0 technical hassle",
            ]
        }
    }

    const t = content[language]

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!email) return

        setIsSubmitting(true)
        setError(null)

        try {
            const response = await fetch("https://hook.eu2.make.com/e3kp4t8mqudv5i87g72q2epv9jkv1b69", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    source: "LEAD_MAGNET_GUIDE",
                    language
                }),
            })

            if (!response.ok) throw new Error("Failed")

            setIsSubmitted(true)
            setEmail("")
            setTimeout(() => setIsSubmitted(false), 5000)
        } catch (err) {
            setError(t.errorMsg)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section id="ressources" className="py-24 relative overflow-hidden bg-[#030712]">
            {/* Dark Mode Background with glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-[-10%] w-[60%] h-[60%] bg-pink-600/10 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[150px] rounded-full" />
                <div className="absolute right-10 top-20 w-32 h-32 bg-orange-500/20 blur-[80px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-8 md:p-14 backdrop-blur-xl shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Top Glow */}
                    <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-80" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Left Column: Text & Features */}
                        <div className="text-left space-y-6">
                            <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 font-bold text-xs tracking-wider">
                                <FileText className="w-3.5 h-3.5" />
                                {t.badge}
                            </div>

                            <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                                {t.title}
                            </h2>

                            <p className="text-gray-400 text-lg leading-relaxed">
                                {t.subtitle}
                            </p>

                            <div className="flex flex-col gap-3 pt-2">
                                {t.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 text-sm font-medium text-gray-300">
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        {feature}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Form Box */}
                        <div className="bg-black/40 border border-white/10 rounded-3xl p-8 shadow-inner relative">
                            <div className="absolute -top-6 -right-6 text-7xl opacity-10 blur-[2px]">📄</div>

                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className="flex flex-col items-center justify-center text-center py-8"
                                    >
                                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                                            <CheckCircle2 className="w-8 h-8 text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">{t.successTitle}</h3>
                                        <p className="text-gray-400">{t.successDesc}</p>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-5"
                                    >
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-gray-300 ml-1">Où devons-nous vous l'envoyer ?</label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-pink-400 transition-colors" />
                                                </div>
                                                <Input
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="bg-white/5 border-white/10 text-white pl-12 h-14 rounded-2xl focus:border-pink-500 focus:ring-pink-500/20 shadow-inner"
                                                    placeholder={t.placeholder}
                                                />
                                            </div>
                                        </div>

                                        {error && (
                                            <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                                                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                                                {error}
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting || !email}
                                            className="w-full h-14 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 group overflow-hidden relative"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                                            <span className="relative flex items-center justify-center w-full">
                                                {isSubmitting ? (
                                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                                                ) : (
                                                    <>
                                                        {t.button}
                                                        <Download className="ml-3 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                                    </>
                                                )}
                                            </span>
                                        </Button>
                                        <p className="text-xs text-gray-500 text-center font-medium">
                                            100% Gratuit. 🔒
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>

                    </div>
                </motion.div>
            </div>
        </section>
    )
}
