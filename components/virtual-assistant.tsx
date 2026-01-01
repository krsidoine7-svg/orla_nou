"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
  action?: {
    label: string
    href: string
  }
}

export function VirtualAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      const welcomeMessage: Message = {
        id: "1",
        text: t.assistant.welcome,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, t.assistant.welcome])

  const getBotResponse = (userMessage: string): { text: string; action?: { label: string; href: string } } => {
    const message = userMessage.toLowerCase()

    // Services related
    if (message.includes("service") || message.includes("automatisation") || message.includes("automation")) {
      return {
        text: t.assistant.responses.services,
        action: { label: language === "fr" ? "Voir Services" : "View Services", href: "#services" },
      }
    }

    // Pricing related
    if (message.includes("prix") || message.includes("price") || message.includes("coût") || message.includes("cost")) {
      return { text: t.assistant.responses.pricing }
    }

    // Contact / Formulaire related
    if (
      message.includes("contact") ||
      message.includes("formulaire") ||
      message.includes("form") ||
      message.includes("message") ||
      message.includes("rendez-vous") ||
      message.includes("appointment")
    ) {
      return {
        text: t.assistant.responses.contact,
        action: { label: language === "fr" ? "Aller au Formulaire" : "Go to Form", href: "#contact" },
      }
    }

    // Portfolio related
    if (message.includes("portfolio") || message.includes("réalisation") || message.includes("projet") || message.includes("work")) {
      return {
        text: language === "fr" ? "Découvrez nos dernières réalisations dans notre portfolio." : "Check out our latest work in our portfolio.",
        action: { label: language === "fr" ? "Voir Portfolio" : "View Portfolio", href: "#portfolio" },
      }
    }

    // About related
    if (message.includes("qui") || message.includes("who") || message.includes("équipe") || message.includes("team")) {
      return { text: t.assistant.responses.about }
    }

    // Time/availability
    if (
      message.includes("temps") ||
      message.includes("time") ||
      message.includes("délai") ||
      message.includes("delay")
    ) {
      return { text: t.assistant.responses.time }
    }

    // WhatsApp related
    if (message.includes("whatsapp") || message.includes("wa.me") || message.includes("discuter")) {
      return {
        text: language === "fr"
          ? "Vous pouvez me contacter directement sur WhatsApp pour une réponse plus rapide !"
          : "You can contact me directly on WhatsApp for a faster response!",
        action: {
          label: language === "fr" ? "Ouvrir WhatsApp" : "Open WhatsApp",
          href: `https://wa.me/2250503681588?text=${encodeURIComponent(language === "fr" ? "Bonjour, je viens de votre site web et j'aimerais plus d'informations." : "Hello, I'm coming from your website and I'd like more information.")}`
        },
      }
    }

    // Default response
    return { text: t.assistant.responses.default }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(inputValue)
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: "bot",
        timestamp: new Date(),
        action: response.action,
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  const quickActions = [
    { text: t.assistant.quickActions.services, action: () => setInputValue(t.assistant.quickActions.services) },
    { text: t.assistant.quickActions.pricing, action: () => setInputValue(t.assistant.quickActions.pricing) },
    { text: t.assistant.quickActions.contact, action: () => setInputValue(t.assistant.quickActions.contact) },
  ]

  return (
    <>
      {/* Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 group"
        >
          <MessageCircle className="w-8 h-8 text-white group-hover:scale-110 transition-transform" />
        </Button>

        {/* Notification Badge */}
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
          className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center"
        >
          <span className="text-xs text-white font-bold">!</span>
        </motion.div>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-4 sm:bottom-24 right-4 sm:right-6 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">TOTO Asist</h3>
                  <p className="text-white/80 text-sm">{t.assistant.status}</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`flex items-start space-x-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${message.sender === "user" ? "bg-pink-500" : "bg-purple-500"}`}
                    >
                      {message.sender === "user" ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div
                      className={`p-3 rounded-2xl ${message.sender === "user" ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-800"}`}
                    >
                      <p className="text-sm">{message.text}</p>
                      {message.action && (
                        <Button
                          size="sm"
                          className="mt-2 w-full bg-white text-purple-600 hover:bg-purple-50 border border-purple-200"
                          onClick={() => {
                            if (message.action!.href.startsWith("http")) {
                              window.open(message.action!.href, "_blank")
                            } else {
                              const element = document.getElementById(message.action!.href.replace("#", ""))
                              element?.scrollIntoView({ behavior: "smooth" })
                            }
                            if (window.innerWidth < 1024) setIsOpen(false)
                          }}
                        >
                          {message.action.label}
                        </Button>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        />
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Actions */}
            {messages.length === 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickActions.map((action, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={action.action}
                      className="text-xs border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent"
                    >
                      {action.text}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={t.assistant.placeholder}
                  className="flex-1 border-gray-300 focus:border-pink-500"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim() || isTyping}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
