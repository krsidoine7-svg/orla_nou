"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Github, Play, ArrowRight, CheckCircle2, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export function Portfolio() {
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const content = {
    fr: {
      title: "Nos Réalisations",
      subtitle:
        "Découvrez quelques-uns de nos projets d'automatisation qui ont transformé la productivité de nos clients",
      viewAll: "Voir tous les projets",
      close: "Fermer",
      detailsTitle: "Détails du projet",
      resultsTitle: "Résultats obtenus",
      techTitle: "Technologies utilisées",
      projects: [
        {
          title: "Automatisation IA Multi-Services",
          description:
            "Centralisation et traitement intelligent des flux entrants (emails, documents) pour éliminer les tâches de tri manuel.",
          fullDetails: "Ce système sert à centraliser la réception de demandes provenant de divers canaux. L'IA analyse l'objet et le contenu des documents pour les classer, extraire les informations clés et préparer des réponses ou des fiches clients. \n\nL'objectif est d'aider l'entreprise à traiter un volume plus important de demandes sans recruter, tout en garantissant que chaque message reçoit une réponse pertinente en quelques minutes. Cela transforme le rôle de vos équipes : elles passent du tri administratif au service client à haute valeur ajoutée.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20015632-UHM3EmQheFK6UDw086YGNU6RdcSfpy.png",
          tags: ["OpenAI", "Gmail", "IA", "Workflow complexe"],
          results: "Gain de réactivité immédiat et réduction des goulots administratifs",
          impact: ["Traitement 24h/24 des flux entrants", "Réduction des erreurs de saisie", "Accélération du cycle de réponse"],
        },
        {
          title: "Automatisation Mistral AI",
          description:
            "Moteur de rédaction assistée pour générer des communications professionnelles et cohérentes à grande échelle.",
          fullDetails: "Ce projet utilise l'intelligence artificielle pour automatiser la création de contenus écrits (emails de vente, relances, réponses types). Contrairement à un simple modèle, il est configuré pour respecter le ton et l'expertise de votre entreprise.\n\nEn automatisant la rédaction, l'entreprise économise sur les coûts de production de contenu et permet aux commerciaux de se concentrer sur la négociation plutôt que sur le clavier. C'est un levier direct pour augmenter le volume de prospection sans perdre en qualité.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20013652-16mXhYQHvSlFUAYZdZhsSrg1kFtwrA.png",
          tags: ["Mistral AI", "Email", "Communication", "Automatisation"],
          results: "Optimisation du temps de communication et baisse des coûts opérationnels",
          impact: ["Standardisation de la qualité", "Volume de prospection accru", "Réduction du temps de rédaction"],
        },
        {
          title: "Automatisation Réseaux Sociaux",
          description:
            "Publication et gestion autonome du calendrier éditorial pour maintenir une visibilité constante sans effort quotidien.",
          fullDetails: "Ce système lie vos idées de contenu à une chaîne de production automatisée. Une fois un sujet validé dans votre outil (comme Notion), le workflow s'occupe de la mise en forme, de l'optimisation des hashtags et de la publication programmée sur LinkedIn et Facebook.\n\nCela permet à l'entreprise de maintenir une croissance organique de son audience sans que personne n'ait à s'en occuper chaque jour. Le gain de temps est directement réinvesti dans la stratégie et la création de nouveaux produits.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-07%20005829-PBfTmnQhCtQVXdlaq7ManZe0gFo8Dd.png",
          tags: ["LinkedIn", "Facebook", "Notion", "Google Drive"],
          results: "Maintien d'une croissance continue sans intervention manuelle quotidienne",
          impact: ["Présence digitale 365j/an", "Zéro oubli de publication", "Curation de contenu optimisée"],
        },
        {
          title: "Système Multi-Workflow Avancé",
          description:
            "Liaison transparente entre systèmes de paiement, stockage et CRM pour sécuriser le parcours client.",
          fullDetails: "Cette architecture connecte vos outils isolés (Stripe, Drive, CRM) pour créer une pipeline de vente sans friction. Dès qu'un client paie, ses fichiers sont créés, ses accès sont accordés et sa facture est envoyée automatiquement.\n\nL'aide concrète pour l'entreprise réside dans la fiabilité : aucune erreur humaine dans la livraison, aucun retard de facturation, et une expérience client fluide qui favorise la recommandation et donc la croissance du chiffre d'affaires.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20014101-lP5mxymmj4yeTL4JjLC7u39NkGrMY9.png",
          tags: ["Multi-workflow", "Stripe", "Intégrations", "Architecture"],
          results: "Scalabilité des opérations sans augmentation des coûts fixes",
          impact: ["Fiabilisation des transactions", "Livraison client instantanée", "Réduction des litiges"],
        },
      ],
    },
    en: {
      title: "Our Achievements",
      subtitle: "Discover some of our automation projects that have transformed our clients' productivity",
      viewAll: "View all projects",
      close: "Close",
      detailsTitle: "Project Details",
      resultsTitle: "Achievements",
      techTitle: "Technologies",
      projects: [
        {
          title: "Multi-Service AI Automation",
          description:
            "Intelligent triage and processing of incoming flows (emails, documents) to eliminate manual sorting.",
          fullDetails: "This system centralizes incoming requests from various channels. AI analyzes the subject and content to classify them, extract key data, and prepare tailored updates or customer files.\n\nThe goal is to help businesses handle higher volumes without hiring more staff, while ensuring quick, professional responses. It shifts teams from administrative triage to high-value advisory roles.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20015632-UHM3EmQheFK6UDw086YGNU6RdcSfpy.png",
          tags: ["OpenAI", "Gmail", "AI", "Complex Workflow"],
          results: "Immediate responsiveness and removal of administrative bottlenecks",
          impact: ["24/7 processing", "Reduced input errors", "Faster response cycles"],
        },
        {
          title: "Mistral AI Automation",
          description:
            "AI-driven drafting engine to generate consistent, professional communications at scale.",
          fullDetails: "This project uses AI to automate written communication (sales emails, follow-ups). It is configured to maintain your brand voice and expertise.\n\nBy automating drafting, companies save on content production costs and allow sales teams to focus on negotiation rather than typing. It's a direct lever to increase outreach volume without sacrificing quality.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20013652-16mXhYQHvSlFUAYZdZhsSrg1kFtwrA.png",
          tags: ["Mistral AI", "Email", "Communication", "Automation"],
          results: "Optimized communication time and lower operational costs",
          impact: ["Standardized quality", "Increased outreach volume", "Reduced drafting time"],
        },
        {
          title: "Social Media Automation",
          description:
            "Autonomous publishing and editorial management to maintain constant visibility without daily effort.",
          fullDetails: "This system links your ideas to an automated production line. Once a topic is validated in Notion, the workflow handles formatting, hashtag optimization, and scheduled posting across LinkedIn and Facebook.\n\nIt allows businesses to grow their audience organically without daily manual tasks. Saved time is reinvested into strategy and product development.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-07%20005829-PBfTmnQhCtQVXdlaq7ManZe0gFo8Dd.png",
          tags: ["LinkedIn", "Facebook", "Notion", "Google Drive"],
          results: "Constant growth maintained without daily manual intervention",
          impact: ["365-day digital presence", "Zero posting errors", "Optimized content curation"],
        },
        {
          title: "Advanced Multi-Workflow System",
          description:
            "Seamless connection between payment, storage, and CRM systems to secure the customer journey.",
          fullDetails: "This architecture connects isolated tools (Stripe, Drive, CRM) to create a frictionless sales pipeline. From payment to file delivery and invoicing, everything is automated.\n\nThe concrete value lies in reliability: zero human error in delivery, no invoicing delays, and a smooth customer experience that drives growth through referrals.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20014101-lP5mxymmj4yeTL4JjLC7u39NkGrMY9.png",
          tags: ["Multi-workflow", "Stripe", "Integrations", "Architecture"],
          results: "Scalable operations without increasing fixed costs",
          impact: ["Secured transactions", "Instant delivery", "Reduced disputes"],
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="portfolio" className="py-20 bg-white">
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
            <span className="bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.subtitle}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {t.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30">
                      <Play className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="bg-orange-100 text-orange-700 hover:bg-orange-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors uppercase">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{project.description}</p>

                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium text-orange-700 font-bold">📈 {project.results}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-orange-200 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Explorer le projet
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            {t.viewAll}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Project Details Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-0">
          <div className="relative h-64 w-full">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <Badge className="mb-2 bg-orange-500">{selectedProject?.tags[0]}</Badge>
              <h2 className="text-xl sm:text-3xl font-bold uppercase line-clamp-2">{selectedProject?.title}</h2>
            </div>
          </div>

          <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <ArrowRight className="w-4 h-4 mr-2 text-orange-600" />
                    {t.detailsTitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                    {selectedProject?.fullDetails}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />
                    {t.resultsTitle}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject?.impact.map((item: string, i: number) => (
                      <div key={i} className="flex items-center space-x-2 text-gray-700 bg-green-50 p-3 rounded-lg border border-green-100 italic">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                        <span className="text-sm font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                    <Cpu className="w-4 h-4 mr-2 text-purple-600" />
                    {t.techTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject?.tags.map((tag: string, i: number) => (
                      <Badge key={i} variant="outline" className="border-gray-300 text-gray-600 font-bold uppercase">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg">
                  <p className="text-sm font-medium opacity-90 mb-1">Résumé Global</p>
                  <p className="text-xl font-bold">{selectedProject?.results}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-100">
              <Button
                onClick={() => setSelectedProject(null)}
                className="bg-gray-900 text-white hover:bg-gray-800"
              >
                {t.close}
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
