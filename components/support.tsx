"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Activity, Wrench, HeadphonesIcon } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Support() {
    const { language } = useLanguage()

    const content = {
        fr: {
            tag: "SUPPORT & MAINTENANCE",
            title: "Ne vous souciez plus jamais de la technique",
            subtitle: "Parce qu'une automatisation n'est performante que si elle est maintenue. Nous gérons 100% de la technique en coulisses pour que vous restiez concentré sur votre métier.",
            cards: [
                {
                    title: "Surveillance Active 24/7",
                    description: "Nos systèmes surveillent l'état de vos scénarios en temps réel. En cas de problème d'API (Google, Make, Stripe), nous agissons avant même que vous ne le remarquiez.",
                    icon: Activity,
                    color: "text-blue-500",
                    bg: "bg-blue-500/10"
                },
                {
                    title: "Maintenance & Évolutions",
                    description: "Vos processus évoluent ? Vos automatisations aussi. Nous mettons à jour et optimisons vos workflows existants sans frais cachés.",
                    icon: Wrench,
                    color: "text-orange-500",
                    bg: "bg-orange-500/10"
                },
                {
                    title: "Assistance Technique Rapide",
                    description: "Un interlocuteur dédié et réactif pour répondre à toutes vos questions techniques sur un canal privilégié (WhatsApp / Mail).",
                    icon: HeadphonesIcon,
                    color: "text-pink-500",
                    bg: "bg-pink-500/10"
                }
            ]
        },
        en: {
            tag: "SUPPORT & MAINTENANCE",
            title: "Never worry about the tech again",
            subtitle: "Because an automation is only as good as its maintenance. We handle 100% of the tech behind the scenes so you can stay focused on your business.",
            cards: [
                {
                    title: "24/7 Active Monitoring",
                    description: "Our systems monitor the health of your scenarios in real-time. If an API (Google, Make, Stripe) fails, we act before you even notice.",
                    icon: Activity,
                    color: "text-blue-500",
                    bg: "bg-blue-500/10"
                },
                {
                    title: "Maintenance & Upgrades",
                    description: "Your processes evolve? So do your automations. We update and optimize your existing workflows with no hidden fees.",
                    icon: Wrench,
                    color: "text-orange-500",
                    bg: "bg-orange-500/10"
                },
                {
                    title: "Fast Technical Support",
                    description: "A dedicated and responsive contact point to answer all your technical questions via a direct channel (WhatsApp / Email).",
                    icon: HeadphonesIcon,
                    color: "text-pink-500",
                    bg: "bg-pink-500/10"
                }
            ]
        }
    }

    const t = content[language]

    return (
        <section className="py-24 relative bg-gray-50 border-y border-gray-100 overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-100/50 to-transparent pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-pink-200/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content (Text) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-left"
                    >
                        <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 mb-8 font-bold text-blue-700 text-xs tracking-wider uppercase">
                            <ShieldCheck className="w-4 h-4" />
                            {t.tag}
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-black mb-8 text-gray-900 leading-tight">
                            {t.title}
                        </h2>

                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            {t.subtitle}
                        </p>

                        {/* Visual metric logic */}
                        <div className="flex gap-6 items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mt-10">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-green-200">
                                <span className="text-white font-black text-2xl">99%</span>
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold text-lg">Uptime Garanti</p>
                                <p className="text-gray-500 text-sm">Disponibilité optimale de vos systèmes</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content (Cards) */}
                    <div className="space-y-6 relative">
                        {/* Connection line behind cards */}
                        <div className="absolute top-10 bottom-10 left-8 border-l-2 border-dashed border-gray-200 z-0 hidden sm:block" />

                        {t.cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className="relative z-10 flex gap-6 items-start bg-white p-6 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 ${card.bg} group-hover:scale-110 transition-transform duration-300`}>
                                    <card.icon className={`w-8 h-8 ${card.color}`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-sm">
                                        {card.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
