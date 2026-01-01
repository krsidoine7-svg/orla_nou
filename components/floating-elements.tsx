"use client"

import { motion } from "framer-motion"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Circles */}
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "10%" }}
      />

      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-orange-200/15 to-pink-200/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ top: "50%", right: "10%" }}
      />

      <motion.div
        className="absolute w-48 h-48 bg-gradient-to-r from-purple-200/25 to-pink-200/25 rounded-full blur-2xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{ bottom: "20%", left: "20%" }}
      />

      {/* Floating Particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 15}%`,
          }}
        />
      ))}
    </div>
  )
}
