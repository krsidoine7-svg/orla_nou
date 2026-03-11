"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Facebook, MessageCircle, Linkedin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { language } = useLanguage()

  const content = {
    fr: {
      company: {
        title: "Orlan-ou",
        description:
          "Spécialiste en automatisation pour PME et indépendants. Basés à Abidjan, nous transformons vos processus métier grâce à l'IA et l'automatisation.",
        slogan: "Simplifiez vos échanges, augmentez vos gains",
      },
      links: {
        services: "Services",
        about: "À propos",
        portfolio: "Portfolio",
        blog: "Blog",
        contact: "Contact",
        faq: "FAQ",
      },
      services: {
        title: "Nos Services",
        items: [
          "Facturation automatisée",
          "Notifications & rappels",
          "Automatisation réseaux sociaux",
          "Rapports automatisés",
          "Intégration CRM",
          "Solutions personnalisées",
        ],
      },
      contact: {
        title: "Contact",
        address: "Abidjan, Côte d'Ivoire",
        phone: "+225 0503681588",
        email: "Krsidoine7@gmail.com",
      },
      legal: {
        title: "Légal",
        items: ["Mentions légales", "Politique de confidentialité", "Conditions d'utilisation", "RGPD"],
      },
      social: {
        title: "Suivez-nous",
        description: "Restez connecté pour les dernières actualités",
      },
      newsletter: {
        title: "Newsletter",
        description: "Recevez nos conseils en automatisation",
        placeholder: "Votre email",
        button: "S'abonner",
      },
      copyright: "© 2024 Orlan-ou. Tous droits réservés.",
      backToTop: "Retour en haut",
    },
    en: {
      company: {
        title: "Orlan-ou",
        description:
          "Automation specialist for SMEs and freelancers. Based in Abidjan, we transform your business processes through AI and automation.",
        slogan: "Simplify your exchanges, increase your gains",
      },
      links: {
        services: "Services",
        about: "About",
        portfolio: "Portfolio",
        blog: "Blog",
        contact: "Contact",
        faq: "FAQ",
      },
      services: {
        title: "Our Services",
        items: [
          "Automated invoicing",
          "Notifications & reminders",
          "Social media automation",
          "Automated reports",
          "CRM integration",
          "Custom solutions",
        ],
      },
      contact: {
        title: "Contact",
        address: "Abidjan, Côte d'Ivoire",
        phone: "+225 0503681588",
        email: "Krsidoine7@gmail.com",
      },
      legal: {
        title: "Legal",
        items: ["Legal notice", "Privacy policy", "Terms of use", "GDPR"],
      },
      social: {
        title: "Follow us",
        description: "Stay connected for the latest news",
      },
      newsletter: {
        title: "Newsletter",
        description: "Receive our automation tips",
        placeholder: "Your email",
        button: "Subscribe",
      },
      copyright: "© 2024 Orlan-ou. All rights reserved.",
      backToTop: "Back to top",
    },
  }

  const t = content[language]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/automatisation%20image/Fichier%204Orlanou.webp"
                alt="Orlan-ou Logo"
                className="h-7 md:h-8 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">{t.company.description}</p>
            <p className="text-pink-400 font-medium italic">"{t.company.slogan}"</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {Object.entries(t.links).map(([key, value]) => (
                <li key={key}>
                  <a href={`#${key}`} className="text-gray-300 hover:text-pink-400 transition-colors duration-200">
                    {value}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">{t.services.title}</h4>
            <ul className="space-y-2">
              {t.services.items.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">{t.contact.title}</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 text-sm">{t.contact.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 text-sm">{t.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-pink-400" />
                <span className="text-gray-300 text-sm">{t.contact.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="font-medium mb-3">{t.social.title}</h5>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, href: "https://www.facebook.com/share/19WxB2S3BD/" },
                  { icon: MessageCircle, href: "https://wa.me/2250503681588?text=Bonjour%20Orlan-ou,%20je%20vous%20contacte%20depuis%20votre%20site%20web." },
                  { icon: Linkedin, href: "https://www.linkedin.com/company/chris-co/?viewAsMember=true" },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200"
                  >
                    <social.icon className="w-4 h-4 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">{t.copyright}</p>

          <div className="flex flex-col items-center space-y-6 md:space-y-0 md:flex-row md:space-x-8">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {t.legal.items.map((item, index) => (
                <a key={index} href="#" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
                  {item}
                </a>
              ))}
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-gray-400 hover:text-pink-400 hover:bg-gray-800"
            >
              <ArrowUp className="w-4 h-4 mr-1" />
              {t.backToTop}
            </Button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
