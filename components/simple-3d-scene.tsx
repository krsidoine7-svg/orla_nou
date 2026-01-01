"use client"

import { useEffect, useRef } from "react"

export function Simple3DScene() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Create animated gradient background
    const container = containerRef.current
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    canvas.width = container.offsetWidth
    canvas.height = container.offsetHeight
    canvas.style.position = "absolute"
    canvas.style.top = "0"
    canvas.style.left = "0"
    canvas.style.width = "100%"
    canvas.style.height = "100%"

    container.appendChild(canvas)

    let animationId: number
    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create animated gradient
      const gradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 100,
        canvas.height / 2 + Math.cos(time) * 50,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height),
      )

      gradient.addColorStop(0, `rgba(236, 72, 153, ${0.3 + Math.sin(time) * 0.1})`)
      gradient.addColorStop(0.5, `rgba(168, 85, 247, ${0.2 + Math.cos(time * 1.5) * 0.1})`)
      gradient.addColorStop(1, `rgba(249, 115, 22, ${0.1 + Math.sin(time * 0.8) * 0.05})`)

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw floating circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width / 2 + Math.sin(time + i) * (100 + i * 20)
        const y = canvas.height / 2 + Math.cos(time * 1.2 + i) * (80 + i * 15)
        const radius = 20 + Math.sin(time * 2 + i) * 10

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`
        ctx.fill()
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = container.offsetWidth
      canvas.height = container.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", handleResize)
      if (canvas.parentNode) {
        canvas.parentNode.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden">
      {/* Fallback content */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-purple-100 to-orange-100 opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <span className="text-4xl font-bold text-white">AI</span>
          </div>
          <div className="flex space-x-4 justify-center">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-8 h-8 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
