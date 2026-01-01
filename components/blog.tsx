"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
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
            L'IA ne se contente plus de traiter des données ; elle crée. Dans le cadre de l'automatisation marketing, cela permet de générer des réponses ultra-personnalisées qui ne ressemblent pas à des messages de bots. Chez Chris&co, nous intégrons ces modèles pour que vos communications WhatsApp et Email conservent une chaleur humaine tout en étant déclenchées automatiquement.

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
          featured: true,
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
            L'application "Business" standard a ses limites : un seul utilisateur à la fois, pas d'intégration possible, et des risques de bannissement en cas d'envois groupés. L'API (proposée via Chris&co) permet :
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
          author: "N'Guéssan Chris",
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
            Gone are the days when you had to manually note every lead coming from WhatsApp or Instagram. With the solutions we develop at Chris&co, AI captures information, qualifies the prospect according to their budget or need, and inserts it directly into your CRM (like Notion or HubSpot). This allows Ivorian entrepreneurs to focus on sales rather than data entry.

            ### 3. Why take the step now?
            Ivory Coast is experiencing lightning-fast digitalization. Companies that use AI to automate their invoices, appointment reminders, or inventory management save an average of 15 hours of work per week. 

            In summary: AI is no longer a luxury reserved for Silicon Valley giants. It is a field tool, accessible and powerful, that allowed Ivorian SMEs to scale up.
          `,
          image: "/blog/ai-2024.png",
          author: "Koffi Renaud",
          date: "March 15, 2024",
          readTime: 5,
          category: "AI & Technology",
          featured: true,
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
          author: "N'Guéssan Chris",
          date: "March 1, 2024",
          readTime: 6,
          category: "Tutorials",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <section id="blog" className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
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

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {t.posts
            .filter((post) => post.featured)
            .map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 bg-white"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 lg:h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-orange-500 hover:bg-orange-600 text-white">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <Badge variant="secondary" className="w-fit mb-4 bg-orange-100 text-orange-700">
                      {post.category}
                    </Badge>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 hover:text-orange-600 transition-colors cursor-pointer" onClick={() => setSelectedPost(post)}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-6 text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="w-4 h-4" />
                          <span>
                            {t.author} {post.author}
                          </span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>
                            {post.readTime} {t.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      className="bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white group w-fit"
                      onClick={() => setSelectedPost(post)}
                    >
                      {t.readMore}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
        </motion.div>

        {/* Regular Posts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {t.posts
            .filter((post) => !post.featured)
            .map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-700">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors cursor-pointer line-clamp-2" onClick={() => setSelectedPost(post)}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>
                          {t.author} {post.author}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>
                          {post.readTime} {t.readTime}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-orange-600 hover:text-orange-700 hover:bg-orange-50 group"
                        onClick={() => setSelectedPost(post)}
                      >
                        {t.readMore}
                        <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
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
            variant="outline"
            className="border-2 border-orange-200 hover:border-orange-300 text-orange-700 hover:bg-orange-50 px-8 py-4 rounded-full transition-all duration-300 group bg-transparent"
          >
            {t.viewAllPosts}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>

      {/* Article Dialog */}
      <Dialog open={!!selectedPost} onOpenChange={() => setSelectedPost(null)}>
        <DialogContent className="w-[95vw] sm:max-w-3xl max-h-[90vh] overflow-y-auto bg-white">
          <DialogHeader>
            <div className="flex items-center space-x-2 mb-4">
              <Badge className="bg-orange-500 text-white">{selectedPost?.category}</Badge>
              <span className="text-sm text-gray-500">{selectedPost?.date}</span>
            </div>
            <DialogTitle className="text-xl sm:text-3xl font-bold text-gray-900 mb-4">{selectedPost?.title}</DialogTitle>
            <DialogDescription className="text-lg text-gray-600 font-medium italic mb-6">
              {selectedPost?.excerpt}
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full h-64 mb-8 overflow-hidden rounded-xl">
            <img
              src={selectedPost?.image || "/placeholder.svg"}
              alt={selectedPost?.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-orange max-w-none text-gray-700 space-y-6">
            {selectedPost?.body.split('\n').map((line: string, index: number) => {
              const trimmedLine = line.trim();
              if (trimmedLine.startsWith('###')) {
                return (
                  <h3 key={index} className="text-xl sm:text-2xl font-bold text-gray-900 mt-8 mb-4 border-b pb-2 border-orange-100">
                    {trimmedLine.replace('###', '').trim()}
                  </h3>
                );
              }
              if (trimmedLine.startsWith('-')) {
                return (
                  <div key={index} className="flex items-start space-x-3 ml-4">
                    <span className="mt-2 w-1.5 h-1.5 bg-orange-500 rounded-full flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      {trimmedLine.replace('-', '').trim()}
                    </p>
                  </div>
                );
              }
              if (trimmedLine.startsWith('*')) {
                return (
                  <p key={index} className="italic text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500 my-4">
                    {trimmedLine.replace(/\*/g, '').trim()}
                  </p>
                );
              }
              if (trimmedLine === '') {
                return <div key={index} className="h-2" />;
              }

              // Handle bold text **...**
              const parts = trimmedLine.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index} className="leading-relaxed text-lg">
                  {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return <strong key={i} className="text-gray-900 font-bold">{part.slice(2, -2)}</strong>;
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

          <div className="mt-12 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>{selectedPost?.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{selectedPost?.readTime} {t.readTime}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
