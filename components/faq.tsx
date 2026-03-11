"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"

export function FAQ() {
  const { language } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const content = {
    fr: {
      title: "Questions Fréquentes",
      subtitle: "Trouvez rapidement les réponses à vos questions sur nos services d'automatisation",
      faqs: [
        {
          question: "Qu'est-ce que l'automatisation et comment peut-elle aider mon entreprise ?",
          answer:
            "L'automatisation consiste à utiliser la technologie pour exécuter des tâches répétitives sans intervention humaine. Elle peut considérablement améliorer votre productivité, réduire les erreurs, économiser du temps et des coûts, et permettre à votre équipe de se concentrer sur des tâches à plus forte valeur ajoutée.",
        },
        {
          question: "Combien de temps faut-il pour mettre en place une automatisation ?",
          answer:
            "Le délai varie selon la complexité du projet. Les automatisations simples (comme l'envoi automatique d'emails) peuvent être mises en place en quelques jours, tandis que les solutions plus complexes (intégration CRM complète) peuvent prendre 2-4 semaines. Nous vous fournirons un calendrier détaillé après l'analyse de vos besoins.",
        },
        {
          question: "Quels sont vos tarifs pour les services d'automatisation ?",
          answer:
            "Nos tarifs varient selon la complexité et l'étendue du projet. Nous proposons des forfaits à partir de 500€ pour les automatisations simples, et des solutions sur mesure pour les projets plus complexes. Contactez-nous pour un devis personnalisé gratuit.",
        },
        {
          question: "Mes données sont-elles sécurisées avec vos solutions ?",
          answer:
            "Absolument. Nous prenons la sécurité très au sérieux. Toutes nos solutions respectent les standards de sécurité internationaux et le RGPD. Nous utilisons des connexions chiffrées, des accès sécurisés et ne stockons jamais vos données sensibles sans votre autorisation explicite.",
        },
        {
          question: "Proposez-vous une formation pour utiliser les automatisations ?",
          answer:
            "Oui, nous incluons systématiquement une formation dans nos prestations. Nous formons votre équipe à l'utilisation et à la maintenance des automatisations mises en place. Nous fournissons également une documentation complète et un support technique continu.",
        },
        {
          question: "Que se passe-t-il si une automatisation ne fonctionne plus ?",
          answer:
            "Nous offrons un support technique et une maintenance continue. En cas de dysfonctionnement, nous intervenons rapidement pour résoudre le problème. Nous proposons également des contrats de maintenance pour assurer le bon fonctionnement de vos automatisations sur le long terme.",
        },
      ],
    },
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Quickly find answers to your questions about our automation services",
      faqs: [
        {
          question: "What is automation and how can it help my business?",
          answer:
            "Automation involves using technology to perform repetitive tasks without human intervention. It can significantly improve your productivity, reduce errors, save time and costs, and allow your team to focus on higher value-added tasks.",
        },
        {
          question: "How long does it take to implement automation?",
          answer:
            "The timeline varies depending on project complexity. Simple automations (like automatic email sending) can be set up in a few days, while more complex solutions (complete CRM integration) may take 2-4 weeks. We'll provide a detailed timeline after analyzing your needs.",
        },
        {
          question: "What are your rates for automation services?",
          answer:
            "Our rates vary according to project complexity and scope. We offer packages starting from €500 for simple automations, and custom solutions for more complex projects. Contact us for a free personalized quote.",
        },
        {
          question: "Is my data secure with your solutions?",
          answer:
            "Absolutely. We take security very seriously. All our solutions comply with international security standards and GDPR. We use encrypted connections, secure access, and never store your sensitive data without your explicit authorization.",
        },
        {
          question: "Do you provide training to use the automations?",
          answer:
            "Yes, we systematically include training in our services. We train your team on using and maintaining the implemented automations. We also provide complete documentation and ongoing technical support.",
        },
        {
          question: "What happens if an automation stops working?",
          answer:
            "We offer ongoing technical support and maintenance. In case of malfunction, we intervene quickly to resolve the issue. We also offer maintenance contracts to ensure the long-term proper functioning of your automations.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">{t.title}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {t.faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-gray-200 pt-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
