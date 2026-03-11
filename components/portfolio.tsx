"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Play, ArrowRight, CheckCircle2, Cpu, ArrowUpRight, Sparkles } from "lucide-react"
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
      badge: "ÉTUDES DE CAS",
      title: "Nos Réalisations",
      subtitle:
        "Découvrez comment nos architectures d'automatisation ont catalysé la croissance globale de nos clients.",
      viewAll: "Explorer l'ensemble des projets",
      close: "Fermer",
      detailsTitle: "Le Challenge & La Solution",
      resultsTitle: "Impact Direct",
      techTitle: "Stack Technologique",
      projects: [
        {
          title: "Architecture Cloud : Tri Automatique",
          description:
            "Extraction intelligente des pièces jointes Gmail, classement Drive dynamique et système d'alertes temps réel sur Slack.",
          fullDetails: "Ce système d'automatisation agit comme un véritable assistant administratif instantané. Dès réception d'un email avec pièces jointes importantes, l'automatisation analyse le contenu de l'email.\n\nS'il s'agit d'un nouveau client ou d'un nouveau dossier, l'automation crée dynamiquement un dossier Google Drive à son nom s'il n'existe pas déjà. Elle y classe ensuite les pièces jointes, puis envoie immédiatement une notification formatée aux équipes sur Slack pour les notifier du nouveau document. Cela sécurise vos données et garantit qu'aucun fichier ne se perd dans une boîte mail.",
          image:
            "/automatisation image/Capture d'écran 2026-03-08 191829.png",
          tags: ["Make", "Google Workspace", "Slack API"],
          results: "Fiabilité 100% sur le traitement documentaire.",
          impact: ["Classement Cloud automatisé", "Notification équipe instantanée", "Gain de 2h/semaine de tri"],
          metric: "100%",
          metricLabel: "Fichiers sécurisés",
        },
        {
          title: "Moteur de Rédaction Mistral AI",
          description:
            "Intégration d'un LLM customisé pour la génération de réponses commerciales et le traitement sémantique des requêtes.",
          fullDetails: "Ce projet utilise l'intelligence artificielle pour automatiser la création de contenus écrits (emails de vente, relances, réponses types). Contrairement à un simple modèle, il est configuré pour respecter le ton et l'expertise de votre entreprise.\n\nEn automatisant la rédaction, l'entreprise économise sur les coûts de production de contenu et permet aux commerciaux de se concentrer sur la négociation plutôt que sur le clavier. C'est un levier direct pour augmenter le volume de prospection sans perdre en qualité.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20013652-16mXhYQHvSlFUAYZdZhsSrg1kFtwrA.png",
          tags: ["Mistral AI", "Prompt Engineering", "OpenAI"],
          results: "Temps de rédaction divisé par 4.",
          impact: ["Standardisation de la qualité", "Volume de prospection décuplé", "Baisse des coûts de création"],
          metric: "4x",
          metricLabel: "Plus rapide",
        },
        {
          title: "Synchronisation Éditoriale Omnicanal",
          description:
            "Pipeline de diffusion autonome depuis une base de connaissances (Notion) vers LinkedIn et Facebook.",
          fullDetails: "Ce système lie vos idées de contenu à une chaîne de production automatisée. Une fois un sujet validé dans votre outil (comme Notion), le workflow s'occupe de la mise en forme, de l'optimisation des hashtags et de la publication programmée sur LinkedIn et Facebook.\n\nCela permet à l'entreprise de maintenir une croissance organique de son audience sans que personne n'ait à s'en occuper chaque jour. Le gain de temps est directement réinvesti dans la stratégie et la création de nouveaux produits.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-07%20005829-PBfTmnQhCtQVXdlaq7ManZe0gFo8Dd.png",
          tags: ["Notion API", "LinkedIn AP", "Make"],
          results: "Croissance d'audience continue sans action manuelle.",
          impact: ["Présence digitale 365j/an", "Zéro oubli de publication", "Curation de contenu optimisée"],
          metric: "365j",
          metricLabel: "Présence active",
        },
        {
          title: "Écosystème CRM & Facturation",
          description:
            "Workflow transactionnel complet liant Stripe, la facturation et l'onboarding client dans CRM.",
          fullDetails: "Cette architecture connecte vos outils isolés (Stripe, Drive, CRM) pour créer une pipeline de vente sans friction. Dès qu'un client paie, ses fichiers sont créés, ses accès sont accordés et sa facture est envoyée automatiquement.\n\nL'aide concrète pour l'entreprise réside dans la fiabilité : aucune erreur humaine dans la livraison, aucun retard de facturation, et une expérience client fluide qui favorise la recommandation et donc la croissance du chiffre d'affaires.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20014101-lP5mxymmj4yeTL4JjLC7u39NkGrMY9.png",
          tags: ["Stripe", "HubSpot", "Zendesk"],
          results: "Scalabilité totale des transactions entrantes.",
          impact: ["Fiabilisation des paiements", "Expérience client premium", "Réduction des litiges"],
          metric: "0%",
          metricLabel: "Erreur humaine",
        },
      ],
    },
    en: {
      badge: "CASE STUDIES",
      title: "Our Portfolio",
      subtitle: "Discover how our automation architectures have catalyzed our clients' global growth.",
      viewAll: "Explore all projects",
      close: "Close",
      detailsTitle: "Challenge & Solution",
      resultsTitle: "Direct Impact",
      techTitle: "Tech Stack",
      projects: [
        {
          title: "Cloud Architecture: Auto-Sorting",
          description:
            "Intelligent extraction of Gmail attachments, dynamic Drive sorting, and real-time Slack alerting.",
          fullDetails: "This automation system acts as a true instant administrative assistant. Upon receiving an email with important attachments, the automation analyzes its content.\n\nIf it's a new client or project, the automation dynamically creates a Google Drive folder if it doesn't already exist. It then categorizes and stores the attachments there, and instantly sends a formatted Slack notification to alert the team. This secures your data and ensures no file gets lost in an inbox.",
          image:
            "/automatisation image/Capture d'écran 2026-03-08 191829.png",
          tags: ["Make", "Workspace", "Slack API"],
          results: "100% reliability on document processing.",
          impact: ["Automated Cloud sorting", "Instant team notification", "Saves 2h/week of sorting"],
          metric: "100%",
          metricLabel: "Secured files",
        },
        {
          title: "Mistral AI Drafting Engine",
          description:
            "Integration of a customized LLM for generating sales responses and semantic query processing.",
          fullDetails: "This project uses AI to automate written communication (sales emails, follow-ups). It is configured to maintain your brand voice and expertise.\n\nBy automating drafting, companies save on content production costs and allow sales teams to focus on negotiation rather than typing. It's a direct lever to increase outreach volume without sacrificing quality.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20013652-16mXhYQHvSlFUAYZdZhsSrg1kFtwrA.png",
          tags: ["Mistral AI", "Prompt", "OpenAI"],
          results: "Drafting time divided by 4.",
          impact: ["Standardized quality", "Increased outreach volume", "Reduced drafting time"],
          metric: "4x",
          metricLabel: "Faster",
        },
        {
          title: "Omnichannel Sync",
          description:
            "Autonomous publishing pipeline from a knowledge base (Notion) to LinkedIn and Facebook.",
          fullDetails: "This system links your ideas to an automated production line. Once a topic is validated in Notion, the workflow handles formatting, hashtag optimization, and scheduled posting across LinkedIn and Facebook.\n\nIt allows businesses to grow their audience organically without daily manual tasks. Saved time is reinvested into strategy and product development.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-07%20005829-PBfTmnQhCtQVXdlaq7ManZe0gFo8Dd.png",
          tags: ["Notion API", "LinkedIn", "Make"],
          results: "Constant audience growth without manual action.",
          impact: ["365-day digital presence", "Zero posting errors", "Optimized content curation"],
          metric: "365d",
          metricLabel: "Active presence",
        },
        {
          title: "CRM & Billing Ecosystem",
          description:
            "Complete transactional workflow linking Stripe, invoicing, and client onboarding in CRM.",
          fullDetails: "This architecture connects isolated tools (Stripe, Drive, CRM) to create a frictionless sales pipeline. From payment to file delivery and invoicing, everything is automated.\n\nThe concrete value lies in reliability: zero human error in delivery, no invoicing delays, and a smooth customer experience that drives growth through referrals.",
          image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Capture%20d%27%C3%A9cran%202025-05-19%20014101-lP5mxymmj4yeTL4JjLC7u39NkGrMY9.png",
          tags: ["Stripe", "HubSpot", "Zendesk"],
          results: "Total scalability of inbound transactions.",
          impact: ["Secured transactions", "Premium experience", "Reduced disputes"],
          metric: "0%",
          metricLabel: "Human errors",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="portfolio" className="py-24 bg-gray-50/50 relative overflow-hidden">
      {/* Refined subtle background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] mix-blend-multiply opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-100/30 rounded-full blur-[120px] mix-blend-multiply opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 shadow-sm mb-6 font-semibold text-gray-700 text-xs tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-orange-500" />
            {t.badge}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-light">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Bento-style Grid (Modern 2026 Layout) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {t.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group cursor-pointer relative ${index === 0 || index === 3 ? 'md:row-span-2' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {/* Card Container - Very sleek, minimal borders */}
              <div className="h-full bg-white rounded-3xl p-2 border border-black/[0.04] shadow-xl shadow-black/[0.02] hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col">

                {/* Image Wrapper */}
                <div className={`relative overflow-hidden rounded-[1.25rem] bg-gray-100 ${index === 0 || index === 3 ? 'h-64 sm:h-80' : 'h-48'} shrink-0`}>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-in-out"
                  />
                  {/* Subtle glass overlay on hover */}
                  <div className="absolute inset-0 bg-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-bold text-gray-900 flex items-center shadow-xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Explorer <ArrowUpRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow relative">
                  {/* Metric Floating Badge */}
                  <div className="absolute -top-12 right-6 bg-white/90 backdrop-blur-xl border border-white p-3 rounded-2xl shadow-lg flex flex-col items-center justify-center min-w-[5rem]">
                    <span className="text-xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-pink-500 leading-none mb-1">
                      {project.metric}
                    </span>
                    <span className="text-[0.65rem] font-bold text-gray-500 uppercase tracking-wider text-center leading-tight">
                      {project.metricLabel}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 pr-20">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[0.7rem] font-bold tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-md uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 transition-all leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-gray-500 mb-6 leading-relaxed text-sm font-light flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-900 flex items-center group-hover:text-orange-600 transition-colors">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Étude de cas
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-gray-900/20 transition-all duration-300 group font-bold text-sm tracking-wide"
          >
            {t.viewAll}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 opacity-70 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Modern Pop-up Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-gray-50 p-0 rounded-[2rem] border-0 shadow-2xl">

          {/* Header Image Full Width */}
          <div className="relative w-full h-72 sm:h-96 bg-gray-200 shrink-0 object-cover">
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-full h-full object-cover"
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
              <div className="flex gap-2 mb-4">
                {selectedProject?.tags.map((tag: string, i: number) => (
                  <span key={i} className="text-[0.65rem] font-bold tracking-wider text-white bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1.5 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
              <DialogTitle className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
                {selectedProject?.title}
              </DialogTitle>
            </div>
          </div>

          <div className="p-8 sm:p-12">
            <div className="grid lg:grid-cols-12 gap-10">

              {/* Main Content */}
              <div className="lg:col-span-8 space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center tracking-tight">
                    <span className="w-8 h-px bg-orange-500 mr-4" />
                    {t.detailsTitle}
                  </h3>
                  <div className="prose prose-lg text-gray-600 font-light leading-relaxed">
                    {selectedProject?.fullDetails.split('\n\n').map((paragraph: string, idx: number) => (
                      <p key={idx} className="mb-6">{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center tracking-tight">
                    <span className="w-8 h-px bg-pink-500 mr-4" />
                    {t.resultsTitle}
                  </h3>
                  <div className="space-y-3">
                    {selectedProject?.impact.map((item: string, i: number) => (
                      <div key={i} className="flex items-center space-x-4 text-gray-700 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-5 h-5 text-green-500" />
                        </div>
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-4 space-y-6">

                {/* Highlight Metric Card */}
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <p className="text-sm font-medium text-gray-400 mb-2 uppercase tracking-widest">Résultat Clé</p>
                  <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400 mb-2">
                    {selectedProject?.metric}
                  </p>
                  <p className="text-lg font-medium text-gray-200">{selectedProject?.results}</p>
                </div>

                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
                    {t.techTitle}
                  </h3>
                  <div className="flex flex-col gap-3">
                    {selectedProject?.tags.map((tag: string, i: number) => (
                      <div key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                        <div className="w-2 h-2 rounded-full bg-gray-200" />
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button
                onClick={() => setSelectedProject(null)}
                className="bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 px-8 rounded-full font-bold shadow-sm"
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
