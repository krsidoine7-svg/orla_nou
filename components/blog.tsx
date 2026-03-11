"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock, CheckCircle2 } from "lucide-react"
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

export function Blog() {
  const { language } = useLanguage()
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const content = {
    fr: {
      title: "Blog & Actualités",
      subtitle: "Restez informé des dernières tendances en automatisation et découvrez nos conseils d'experts",
      readMore: "Lire la suite",
      viewAllPosts: "Voir tous les articles",
      author: "Par",
      readTime: "min de lecture",
      posts: [
        {
          id: "ia-2024",
          title: "L'IA au service de l'automatisation en 2024 : La révolution silencieuse",
          excerpt:
            "Découvrez comment l'intelligence artificielle révolutionne les processus d'automatisation et transforme la façon dont les entreprises opèrent.",
          body: `
            En 2024, l'automatisation n'est plus une simple question de scripts répétitifs. Elle est devenue "cognitive". L'arrivée massive des LLM (Large Language Models) comme Mistral AI et OpenAI a transformé des workflows rigides en systèmes capables de raisonnement contextuel. Pour une entreprise à Abidjan, cela signifie passer de la simple survie numérique à une domination opérationnelle.

            ### 1. La fin de l'automatisation "Si... Alors..."
            L'automatisation traditionnelle (RPA) fonctionnait sur des règles strictes. Si une donnée manquait, le processus s'arrêtait. Aujourd'hui, l'IA agit comme une "glue" intelligente. Elle est capable de combler les lacunes, de corriger des erreurs de saisie et de comprendre l'intention derrière un message client. Par exemple, au lieu de rejeter un formulaire mal rempli, l'IA peut déduire l'information manquante à partir des documents attachés.

            ### 2. L'IA Générative : Votre nouveau collaborateur
            L'IA ne se contente plus de traiter des données ; elle crée. Dans le cadre de l'automatisation marketing, cela permet de générer des réponses ultra-personnalisées qui ne ressemblent pas à des messages de bots. Chez Orlan-ou, nous intégrons ces modèles pour que vos communications WhatsApp et Email conservent une chaleur humaine tout en étant déclenchées automatiquement.

            ### 3. Impact sur la Croissance et le Chiffre d'Affaire
            Le gain de temps (environ 15 à 20 heures par semaine pour un responsable PME) n'est que la partie visible de l'iceberg. Le vrai bénéfice réside dans la **réduction du coût d'opportunité**. Chaque heure passée à trier des factures est une heure de moins passée à prospecter ou à innover. L'automatisation intelligente permet de multiplier votre capacité de traitement par 5 sans augmenter votre masse salariale.

            ### 4. La résilience opérationnelle
            Une entreprise automatisée est une entreprise résiliente. En cas de pic d'activité ou d'absence d'un collaborateur, vos systèmes continuent de servir vos clients avec la même qualité. C'est ce que nous appelons la "Scalabilité Silencieuse".

            En conclusion, l'IA en 2024 n'est pas une tendance à observer, c'est une infrastructure à bâtir. Les entreprises ivoiriennes qui adoptent ces outils aujourd'hui seront les leaders de demain dans une économie de plus en plus compétitive.
          `,
          image: "/blog/ai-2024.png",
          author: "Koffi Renaud",
          date: "15 Mars 2024",
          readTime: 12,
          category: "IA & Technologie",
        },
        {
          id: "10-tasks",
          title: "10 tâches à automatiser pour booster votre rentabilité",
          excerpt:
            "Identifiez les processus qui vous feront gagner le plus de temps et d'argent grâce à l'automatisation.",
          body: `
            L'automatisation est un marathon, pas un sprint. Pour réussir, il faut identifier les "Quick Wins" : des tâches simples à automatiser mais avec un impact massif. Voici notre analyse détaillée des 10 priorités pour votre PME.

            ### 1. La Gestion des Factures et des Paiements
            Le suivi manuel des paiements est le premier frein à la croissance. Un système automatisé peut :
            - Générer la facture dès la validation de commande.
            - Envoyer des rappels WhatsApp 3 jours avant et le jour J du paiement.
            - Mettre à jour votre comptabilité dès réception du virement.
            *Bénéfice : Réduction du besoin en fonds de roulement et sérénité financière.*

            ### 2. Le Tri et la Qualification des Leads
            Ne perdez plus de temps avec des curieux. Un chatbot intelligent peut demander le budget et le besoin de votre prospect avant même que vous ne décrochiez le téléphone. Seuls les prospects qualifiés arrivent dans votre agenda.

            ### 3. La Prise de Rendez-vous (Self-Service)
            Éliminez le ping-pong par email. En proposant un lien Cal.com, vous laissez le client choisir son créneau. Le système envoie automatiquement le lien de réunion et les rappels.

            ### 4. Le Support Client (Niveau 1)
            80% des questions concernent vos horaires, vos tarifs ou le suivi de commande. L'automatisation permet de répondre instantanément à ces questions, libérant vos équipes pour les cas complexes qui méritent une attention humaine.

            ### 5. La Synchronisation des Stocks et des Commandes
            Si vous vendez sur plusieurs plateformes, l'erreur de stock est votre pire ennemie. L'automatisation garantit qu'une vente sur WhatsApp est immédiatement décomptée de votre inventaire central.

            ### 6. Le Reporting et les Tableaux de Bord
            Arrêtez de passer vos lundis matins sur Excel. Automatisez la collecte de vos chiffres pour recevoir chaque semaine un rapport clair sur votre téléphone.

            ### 7. L'Onboarding (Accueil) des Nouveaux Clients
            Dès qu'un contrat est signé, le client reçoit automatiquement son kit de bienvenue, ses accès et ses premières consignes. Une première impression parfaite sans lever le petit doigt.

            ### 8. La Gestion des Notes de Frais
            Prenez une photo, l'IA extrait les montants et les envoie au service comptable. Fini les reçus perdus.

            ### 9. La Veille Concurrentielle
            Laissez des scripts surveiller les prix de vos concurrents et vous alerter dès qu'un changement significatif survient.

            ### 10. La Publication Sociale Stratégique
            Ne publiez pas pour publier. Utilisez des outils qui automatisent la diffusion de vos messages au moment où votre audience est la plus active.

            **Le coût de l'inaction :** Chaque jour sans automatisation est une fuite de revenus. En automatisant ces 10 tâches, vous ne gagnez pas seulement du temps, vous achetez la capacité de faire croître votre entreprise de manière saine.
          `,
          image: "/blog/10-tasks.png",
          author: "Koffi Renaud",
          date: "8 Mars 2024",
          readTime: 15,
          category: "Conseils Business",
        },
        {
          id: "whatsapp-guide",
          title: "Guide Expert : L'Automatisation WhatsApp pour le Business",
          excerpt: "Apprenez à automatiser vos communications WhatsApp Business pour améliorer votre service client.",
          body: `
            Le saviez-vous ? En Afrique, WhatsApp est devenu le véritable système d'exploitation du commerce. L'époque où l'on répondait manuellement à chaque "C'est combien ?" est révolue. Voici comment passer à l'étape supérieure.

            ### 1. Pourquoi l'API WhatsApp est indispensable
            L'application "Business" standard a ses limites : un seul utilisateur à la fois, pas d'intégration possible, et des risques de bannissement en cas d'envois groupés. L'API (proposée via Orlan-ou) permet :
            - De connecter votre WhatsApp à votre CRM (Notion, HubSpot).
            - D'avoir plusieurs agents qui répondent sur le même numéro.
            - D'automatiser des flux de vente complets.

            ### 2. Créer un Tunnel de Vente WhatsApp
            Contrairement à un site web où le client peut se perdre, WhatsApp est un tunnel linéaire. 
            - **Étape 1 :** Le message d'accueil qui propose des options claires (Boutons).
            - **Étape 2 :** La qualification par l'IA (Comprendre le besoin).
            - **Étape 3 :** La présentation du catalogue ou du service.
            - **Étape 4 :** Le paiement (via lien intégré).
            Tout cela peut se faire en moins de 2 minutes de manière 100% automatisée.

            ### 3. Les Modèles de Messages (Templates)
            Pour envoyer des messages après 24 heures de silence, il faut utiliser des modèles validés par Meta. L'art de l'automatisation WhatsApp réside dans la rédaction de ces modèles pour qu'ils ne soient pas perçus comme du spam, mais comme un service (ex: relance de panier abandonné, rappel de rendez-vous).

            ### 4. L'IA Mistral au service de vos échanges
            En connectant un modèle de langage comme Mistral, votre bot WhatsApp devient capable de gérer des questions complexes, de négocier poliment et de rassurer le client. Il devient un véritable assistant de vente disponible 24h/24.

            ### Précautions et Bonnes Pratiques
            - Ne jamais spammer : L'automatisation doit apporter de la valeur.
            - Gardez toujours une option "Parler à un humain" accessible rapidement.
            - Analysez vos métriques : Quel est le taux de conversion de vos messages automatiques ?

            L'automatisation WhatsApp n'est plus une option pour qui veut dominer le marché local. C'est le canal le plus direct, le plus intime et le plus efficace pour transformer un prospect en client fidèle.
          `,
          image: "/blog/whatsapp.png",
          author: "Koffi Renaud",
          date: "1 Mars 2024",
          readTime: 14,
          category: "Tutoriels",
        },
      ],
    },
    en: {
      title: "Blog & News",
      subtitle: "Stay informed about the latest automation trends and discover our expert advice",
      readMore: "Read more",
      viewAllPosts: "View all posts",
      author: "By",
      readTime: "min read",
      posts: [
        {
          id: "ia-2024",
          title: "AI in Automation Services 2024",
          excerpt:
            "Discover how artificial intelligence is revolutionizing automation processes and transforming the way businesses operate.",
          body: `
            In 2024, automation is no longer limited to simple machine logic. The massive arrival of Artificial Intelligence (AI) has changed everything. For companies in Abidjan and throughout the region, this is an unprecedented opportunity to gain productivity.

            ### 1. From rigid automation to "intelligent" automation
            Before, a software robot could only do what it was precisely told: "If A then B". Today, thanks to AI, our automations can analyze, understand, and decide. For example, instead of simply sorting emails, AI can read the content of a client message, understand the urgency, and propose an appropriate response before submitting it for your validation.

            ### 2. CRM and Client Management: The heart of the revolution
            Gone are the days when you had to manually note every lead coming from WhatsApp or Instagram. With the solutions we develop at Orlan-ou, AI captures information, qualifies the prospect according to their budget or need, and inserts it directly into your CRM (like Notion or HubSpot). This allows Ivorian entrepreneurs to focus on sales rather than data entry.

            ### 3. Why take the step now?
            Ivory Coast is experiencing lightning-fast digitalization. Companies that use AI to automate their invoices, appointment reminders, or inventory management save an average of 15 hours of work per week. 

            In summary: AI is no longer a luxury reserved for Silicon Valley giants. It is a field tool, accessible and powerful, that allowed Ivorian SMEs to scale up.
          `,
          image: "/blog/ai-2024.png",
          author: "Koffi Renaud",
          date: "March 15, 2024",
          readTime: 5,
          category: "AI & Technology",
        },
        {
          id: "10-tasks",
          title: "10 Priority Tasks to Automate in Your SME",
          excerpt: "Identify the processes that will save you the most time and money through automation.",
          image: "/blog/10-tasks.png",
          author: "Koffi Renaud",
          date: "March 8, 2024",
          readTime: 7,
          category: "Business Tips",
        },
        {
          id: "whatsapp-guide",
          title: "WhatsApp Automation: Complete 2024 Guide",
          excerpt: "Learn how to automate your WhatsApp Business communications to improve your customer service.",
          image: "/blog/whatsapp.png",
          author: "Koffi Renaud",
          date: "March 1, 2024",
          readTime: 6,
          category: "Tutorials",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="blog" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50">
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-orange-200/40 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-pink-200/40 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 mb-6 font-semibold text-orange-700 text-sm tracking-wide">
            NOS ARTICLES
          </div>
          <h2 className="text-4xl lg:text-5xl font-black mb-6 text-gray-900 tracking-tight">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 3-Column Grid for ALL POSTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {t.posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group h-full"
            >
              <Card
                className="h-full border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden bg-white flex flex-col cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                {/* Image Section */}
                <div className="relative overflow-hidden h-56 shrink-0 border-b border-gray-100">
                  <div className="absolute inset-0 bg-gray-100 animate-pulse" /> {/* Show while loading */}
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out relative z-10"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

                  {/* Category Badge Floating on Image */}
                  <div className="absolute top-4 left-4 z-30">
                    <Badge className="bg-white/95 text-orange-600 hover:bg-white font-bold px-3 py-1 shadow-sm backdrop-blur-sm border-0">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className="p-8 flex flex-col flex-grow relative bg-white">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3 text-sm flex-grow">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    {/* Meta Info */}
                    <div className="flex flex-col gap-3 pt-6 border-t border-gray-100 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                          <User className="w-3.5 h-3.5 text-orange-600" />
                        </div>
                        <span className="font-medium text-gray-700">
                          {post.author}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>
                            {post.readTime} {t.readTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Read More Link */}
                    <div className="flex items-center text-orange-600 font-bold text-sm uppercase tracking-wider group-hover:text-orange-700 relative">
                      {t.readMore}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </CardContent>
              </Card>
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
            className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group font-bold"
          >
            {t.viewAllPosts}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 text-orange-500 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Article Dialog Pop-up */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="w-[95vw] sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-0 rounded-3xl border-0 shadow-2xl">

          {/* Header Image Full Width */}
          <div className="relative w-full h-80 bg-gray-100">
            <img
              src={selectedPost?.image || "/placeholder.svg"}
              alt={selectedPost?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 sm:p-12 w-full">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-bold border-0 shadow-sm">
                  {selectedPost?.category}
                </Badge>
                <span className="text-white/80 text-sm font-medium flex items-center gap-1.5 shadow-sm">
                  <Calendar className="w-4 h-4" />
                  {selectedPost?.date}
                </span>
              </div>
              <DialogTitle className="text-2xl sm:text-4xl font-black text-white leading-tight">
                {selectedPost?.title}
              </DialogTitle>
            </div>
          </div>

          {/* Article Body */}
          <div className="p-8 sm:p-12 pb-16 bg-white">
            <DialogDescription className="text-xl text-orange-600 font-semibold italic mb-10 leading-relaxed border-l-4 border-orange-500 pl-6 bg-orange-50 py-4 pr-4 rounded-r-2xl">
              {selectedPost?.excerpt}
            </DialogDescription>

            <div className="prose prose-lg prose-orange max-w-none text-gray-700 space-y-6">
              {selectedPost?.body.split('\n').map((line: string, index: number) => {
                const trimmedLine = line.trim();
                if (trimmedLine.startsWith('###')) {
                  return (
                    <h3 key={index} className="text-2xl sm:text-3xl font-black text-gray-900 mt-12 mb-6 tracking-tight flex items-center gap-3">
                      <span className="w-8 h-1 bg-orange-500 rounded-full inline-block" />
                      {trimmedLine.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (trimmedLine.startsWith('-')) {
                  return (
                    <div key={index} className="flex items-start gap-4 ml-6 mb-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                      <CheckCircle2 className="mt-1 w-5 h-5 text-orange-500 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed m-0 font-medium">
                        {trimmedLine.replace('-', '').trim()}
                      </p>
                    </div>
                  );
                }
                if (trimmedLine.startsWith('*')) {
                  return (
                    <p key={index} className="italic text-gray-600 p-6 rounded-2xl bg-gray-50 border border-gray-200 my-8 text-center shadow-sm">
                      {trimmedLine.replace(/\*/g, '').trim()}
                    </p>
                  );
                }
                if (trimmedLine === '') {
                  return <div key={index} className="h-4" />;
                }

                // Handle bold text **...**
                const parts = trimmedLine.split(/(\*\*.*?\*\*)/g);
                return (
                  <p key={index} className="leading-relaxed text-lg text-gray-600">
                    {parts.map((part, i) => {
                      if (part.startsWith('**') && part.endsWith('**')) {
                        return <strong key={i} className="text-gray-900 font-bold bg-orange-50 px-1 rounded">{part.slice(2, -2)}</strong>;
                      }
                      return part;
                    })}
                  </p>
                );
              }) || (
                  <p>
                    {language === "fr"
                      ? "L'article complet arrive bientôt. Restez connectés pour découvrir nos prochains conseils d'experts sur l'automatisation."
                      : "The full article is coming soon. Stay tuned to discover our next expert tips on automation."}
                  </p>
                )}
            </div>

            {/* Author Footer */}
            <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white shadow-lg text-2xl font-bold">
                  {selectedPost?.author.charAt(0)}
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t.author}</p>
                  <p className="text-xl font-bold text-gray-900">{selectedPost?.author}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200">
                <Clock className="w-5 h-5 text-orange-500" />
                <span className="font-bold text-gray-700">{selectedPost?.readTime} {t.readTime}</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
