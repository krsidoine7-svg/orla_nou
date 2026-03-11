"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { ArrowRight, Sparkles, BarChart3, ExternalLink, QrCode } from "lucide-react"

export function OtherServices() {
    const { language } = useLanguage()

    const content = {
        fr: {
            tag: "Écosystème Orlan-ou",
            title: "Nos Produits SaaS",
            subtitle: "Découvrez nos solutions logicielles développées en interne pour propulser votre croissance.",
            products: [
                {
                    name: "Ofika",
                    description: "Solution avancée de carte de visite numérique. Créez votre page publique, partagez vos coordonnées via QR code ou technologie NFC instantanément.",
                    url: "https://ofika.vercel.app/",
                    icon: Sparkles,
                    color: "from-purple-500 to-indigo-500",
                    features: ["Technologie NFC", "QR Code", "Page Publique", "Partage Instantané"]
                },
                {
                    name: "Ofika Insight",
                    description: "Widget et plateforme de feedback client. Laissez vos utilisateurs suggérer des fonctionnalités et laissez notre IA les traiter, regrouper et prioriser pour votre roadmap.",
                    url: "https://ofika-insight.vercel.app/",
                    icon: BarChart3,
                    color: "from-pink-500 to-rose-500",
                    features: ["Widget Intégrable", "Votes Utilisateurs", "Analyse par IA", "Multi-Projets"]
                },
                {
                    name: "Menlyla CI",
                    description: "Votre Menu Digital Premium. Créez une expérience mémorable avec des QR Codes intelligents, la gestion des commandes et encaissez via Mobile Money.",
                    url: "https://manly-chi.vercel.app/",
                    icon: QrCode,
                    color: "from-orange-500 to-amber-500",
                    features: ["Menu QR Intelligent", "Paiements Mobiles", "Dashboard Cuisine", "Upselling"]
                }
            ],
            visit: "Visiter le site"
        },
        en: {
            tag: "Orlan-ou Ecosystem",
            title: "Our SaaS Products",
            subtitle: "Discover our internally developed software solutions to fuel your growth.",
            products: [
                {
                    name: "Ofika",
                    description: "Advanced digital business card solution. Create your public page and share your contact info via QR code or NFC technology instantly.",
                    url: "https://ofika.vercel.app/",
                    icon: Sparkles,
                    color: "from-purple-500 to-indigo-500",
                    features: ["NFC Technology", "QR Code", "Public Page", "Instant Sharing"]
                },
                {
                    name: "Ofika Insight",
                    description: "Customer feedback widget and platform. Let your users suggest features and let our AI process, group, and prioritize them for your product roadmap.",
                    url: "https://ofika-insight.vercel.app/",
                    icon: BarChart3,
                    color: "from-pink-500 to-rose-500",
                    features: ["Embeddable Widget", "User Voting", "AI Analysis", "Multi-Project"]
                },
                {
                    name: "Menlyla CI",
                    description: "Your Premium Digital Menu. Create a memorable experience with smart QR Codes, order management, and Mobile Money payments.",
                    url: "https://manly-chi.vercel.app/",
                    icon: QrCode,
                    color: "from-orange-500 to-amber-500",
                    features: ["Smart QR Menu", "Mobile Payments", "Kitchen Dashboard", "Upselling"]
                }
            ],
            visit: "Visit website"
        }
    }

    const t = content[language]

    return (
        <section className="py-24 bg-[#02040a] relative overflow-hidden ring-1 ring-white/5">
            {/* Background decorations matching the hero dark vibe but slightly distinct */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.08),transparent_50%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-[radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.08),transparent_50%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-purple-400 font-semibold uppercase tracking-[0.2em] text-sm mb-4 block">
                        {t.tag}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-7xl mx-auto">
                    {t.products.map((product, index) => (
                        <motion.div
                            key={product.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <a
                                href={product.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block h-full rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden relative backdrop-blur-sm"
                            >
                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                                <div className="p-8 sm:p-10">
                                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-8 shadow-lg shadow-black/50 group-hover:scale-110 transition-transform duration-500`}>
                                        <product.icon className="w-7 h-7 text-white" />
                                    </div>

                                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                                        {product.name}
                                    </h3>

                                    <p className="text-gray-400 mb-8 leading-relaxed min-h-[5rem]">
                                        {product.description}
                                    </p>

                                    <div className="grid grid-cols-2 gap-3 mb-10">
                                        {product.features.map((feature, i) => (
                                            <div key={i} className="flex items-center text-sm text-gray-500 font-medium">
                                                <div className={`w-1.5 h-1.5 rounded-full mr-3 bg-gradient-to-r ${product.color} shadow-[0_0_8px_rgba(255,255,255,0.5)]`} />
                                                {feature}
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-white/70 group-hover:text-white font-medium group-hover:translate-x-2 transition-all duration-300">
                                        {t.visit}
                                        <ExternalLink className="w-4 h-4 ml-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>

                                {/* Decorative border bottom */}
                                <div className={`h-1 w-full bg-gradient-to-r ${product.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
