"use client"

import { motion } from "framer-motion"
import { useLanguage } from "@/hooks/use-language"
import { Search, Cog, Rocket } from "lucide-react"

export function Process() {
    const { language } = useLanguage()

    const content = {
        fr: {
            title: "Comment ça marche ?",
            subtitle: "Un processus simple et transparent en 3 étapes pour automatiser votre activité.",
            steps: [
                {
                    id: "01",
                    title: "Audit & Stratégie",
                    description: "Nous échangeons sur vos processus actuels pour identifier les goulots d'étranglement et les opportunités d'automatisation.",
                    icon: Search,
                    color: "from-blue-500 to-cyan-400"
                },
                {
                    id: "02",
                    title: "Conception & Développement",
                    description: "Nous créons vos workflows sur mesure en connectant vos outils (Make, n8n, IA) sans perturber votre activité en cours.",
                    icon: Cog,
                    color: "from-purple-500 to-pink-500"
                },
                {
                    id: "03",
                    title: "Lancement & Suivi",
                    description: "Après une phase de test rigoureuse, nous déployons la solution, formons votre équipe, et assurons une maintenance continue.",
                    icon: Rocket,
                    color: "from-orange-500 to-yellow-400"
                }
            ]
        },
        en: {
            title: "How It Works",
            subtitle: "A simple and transparent 3-step process to automate your business.",
            steps: [
                {
                    id: "01",
                    title: "Audit & Strategy",
                    description: "We discuss your current processes to identify bottlenecks and automation opportunities.",
                    icon: Search,
                    color: "from-blue-500 to-cyan-400"
                },
                {
                    id: "02",
                    title: "Design & Development",
                    description: "We build your custom workflows by connecting your tools (Make, n8n, AI) without disrupting your ongoing business.",
                    icon: Cog,
                    color: "from-purple-500 to-pink-500"
                },
                {
                    id: "03",
                    title: "Launch & Monitoring",
                    description: "After rigorous testing, we deploy the solution, train your team, and provide ongoing maintenance.",
                    icon: Rocket,
                    color: "from-orange-500 to-yellow-400"
                }
            ]
        }
    }

    const t = content[language]

    return (
        <section id="process" className="py-24 bg-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-purple-50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-50 rounded-full blur-3xl opacity-50 z-0 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 w-full max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16 md:mb-24"
                >
                    <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 mb-6 font-medium text-purple-700 text-sm tracking-wide">
                        PROCESSUS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 tracking-tight">
                        {t.title}
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        {t.subtitle}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">

                    {/* Timeline connecting line (Desktop only) */}
                    <div className="hidden md:block absolute top-[50px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />

                    {t.steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative z-10 flex flex-col items-center text-center group"
                        >
                            {/* Icon / Number Container */}
                            <div className={`w-24 h-24 rounded-3xl bg-white shadow-xl flex items-center justify-center mb-8 relative border border-gray-100 group-hover:-translate-y-2 transition-transform duration-300`}>
                                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 rounded-3xl group-hover:opacity-20 transition-opacity`} />
                                <step.icon className={`w-10 h-10 bg-gradient-to-br ${step.color} text-transparent bg-clip-text drop-shadow-sm`} style={{ stroke: "url(#gradient-" + step.id + ")" }} />

                                {/* SVG defined gradients for Lucide icons */}
                                <svg width="0" height="0">
                                    <linearGradient id={"gradient-" + step.id} x1="100%" y1="100%" x2="0%" y2="0%">
                                        {step.id === "01" && <><stop stopColor="#3b82f6" offset="0%" /><stop stopColor="#22d3ee" offset="100%" /></>}
                                        {step.id === "02" && <><stop stopColor="#a855f7" offset="0%" /><stop stopColor="#ec4899" offset="100%" /></>}
                                        {step.id === "03" && <><stop stopColor="#f97316" offset="0%" /><stop stopColor="#facc15" offset="100%" /></>}
                                    </linearGradient>
                                </svg>

                                {/* Number Badge */}
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold shadow-lg">
                                    {step.id}
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
