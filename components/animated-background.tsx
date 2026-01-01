"use client"

import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  className?: string
}

export function AnimatedBackground({ className = "" }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    const animate = () => {
      time += 0.005

      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      // Create multiple animated gradients
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createRadialGradient(
          width * (0.3 + i * 0.2) + Math.sin(time + i) * 50,
          height * (0.4 + i * 0.1) + Math.cos(time * 1.3 + i) * 30,
          0,
          width * 0.5,
          height * 0.5,
          Math.max(width, height) * 0.8,
        )

        const colors = [
          ["rgba(236, 72, 153, 0.1)", "rgba(168, 85, 247, 0.05)", "rgba(249, 115, 22, 0.02)"],
          ["rgba(168, 85, 247, 0.08)", "rgba(236, 72, 153, 0.04)", "rgba(249, 115, 22, 0.02)"],
          ["rgba(249, 115, 22, 0.06)", "rgba(236, 72, 153, 0.03)", "rgba(168, 85, 247, 0.01)"],
        ]

        gradient.addColorStop(0, colors[i][0])
        gradient.addColorStop(0.5, colors[i][1])
        gradient.addColorStop(1, colors[i][2])

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: "100%", height: "100%" }}
    />
  )
}
