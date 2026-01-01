"use client"

import { useEffect, useState, useCallback } from "react"
import { Users, MousePointer2 } from "lucide-react"

export default function VisitorCounter() {
  const [visitors, setVisitors] = useState<number>(0)
  const [clicks, setClicks] = useState<number>(0)

  const sendToMake = useCallback(async (type: "VISIT" | "CLICK", data: any) => {
    try {
      await fetch("https://hook.eu2.make.com/e3kp4t8mqudv5i87g72q2epv9jkv1b69", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source: "CHRISANDCO_ANALYTICS", // Le tag pour différentier dans Make
          type: type,
          timestamp: new Date().toISOString(),
          pixel_id: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "1629075541792603",
          ...data
        }),
      })
    } catch (error) {
      console.error("Analytics Error:", error)
    }
  }, [])

  useEffect(() => {
    // --- Logique Visiteurs ---
    const alreadyVisited = localStorage.getItem("hasVisited")
    const totalVisitors = localStorage.getItem("totalVisitors")
    let currentVisitors = parseInt(totalVisitors || "0", 10)

    if (!alreadyVisited) {
      currentVisitors += 1
      localStorage.setItem("totalVisitors", currentVisitors.toString())
      localStorage.setItem("hasVisited", "true")

      // Envoyer la nouvelle visite à Make
      sendToMake("VISIT", { count: currentVisitors })
    }
    setVisitors(currentVisitors || 1)

    // --- Logique Clics ---
    const storedClicks = localStorage.getItem("totalClicks")
    let currentClicks = parseInt(storedClicks || "0", 10)
    setClicks(currentClicks)

    const handleGlobalClick = () => {
      currentClicks += 1
      setClicks(currentClicks)
      localStorage.setItem("totalClicks", currentClicks.toString())

      // On envoie à Make tous les 5 clics pour ne pas surcharger
      if (currentClicks % 5 === 0) {
        sendToMake("CLICK", { total_clicks: currentClicks, session_milestone: true })
      }
    }

    window.addEventListener("click", handleGlobalClick)
    return () => window.removeEventListener("click", handleGlobalClick)
  }, [sendToMake])

  return (
    <div className="fixed bottom-6 left-6 bg-white/80 backdrop-blur-md border border-purple-100 rounded-2xl px-4 py-3 shadow-xl z-50 hidden md:flex flex-col gap-2 min-w-[160px] hover:scale-105 transition-transform duration-300 pointer-events-auto">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-gray-500">
          <Users className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Visiteurs</span>
        </div>
        <span className="text-xs font-black text-purple-600 bg-purple-50 px-2 py-0.5 rounded-lg">{visitors}</span>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-purple-50 pt-2">
        <div className="flex items-center gap-2 text-gray-500">
          <MousePointer2 className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-wider">Activités</span>
        </div>
        <span className="text-xs font-black text-pink-600 bg-pink-50 px-2 py-0.5 rounded-lg">{clicks}</span>
      </div>
    </div>
  )
}