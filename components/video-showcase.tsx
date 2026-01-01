"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Play, Pause, Volume2, VolumeX, Minimize2, Maximize2, X } from "lucide-react"
import { useState, useRef, useEffect } from "react"

interface VideoShowcaseProps {
    videoUrl?: string
    posterUrl?: string
    title?: string
    subtitle?: string
    tiktokUrl?: string
}

export function VideoShowcase({
    videoUrl = "/automation-demo.mp4",
    posterUrl = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    title = "L'Automatisation en action",
    subtitle = "Découvrez comment nous transformons votre business.",
    tiktokUrl = "https://www.tiktok.com/@renaud.koffi.0"
}: VideoShowcaseProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(true)
    const [isExpanded, setIsExpanded] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const [isMobilePopup, setIsMobilePopup] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    if (!isMounted) return null

    return (
        <>
            {/* MOBILE POPUP VERSION (STORY STYLE) */}
            <div className="fixed bottom-24 right-24 z-[60] sm:hidden">
                <motion.button
                    onClick={() => setIsMobilePopup(true)}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="relative w-16 h-16 rounded-full p-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-orange-500 overflow-hidden shadow-2xl"
                >
                    <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-black">
                        <video
                            src={videoUrl}
                            className="w-full h-full object-cover"
                            loop
                            muted
                            autoPlay
                            playsInline
                        />
                    </div>
                    <div className="absolute inset-0 bg-black/20" />
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="absolute inset-0 border-2 border-white rounded-full"
                    />
                </motion.button>
            </div>

            {/* MOBILE FULLSCREEN DIALOG */}
            <AnimatePresence>
                {isMobilePopup && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed inset-0 z-[100] bg-black sm:hidden"
                    >
                        <button
                            onClick={() => setIsMobilePopup(false)}
                            className="absolute top-6 right-6 z-[110] w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <video
                            src={videoUrl}
                            className="w-full h-full object-contain"
                            loop
                            autoPlay
                            playsInline
                            onClick={togglePlay}
                        />

                        <div className="absolute bottom-10 left-6 right-20 text-white space-y-2 pointer-events-none">
                            <h3 className="text-xl font-bold">{title}</h3>
                            <p className="text-white/80 text-sm">{subtitle}</p>
                        </div>

                        <div className="absolute bottom-24 right-6 flex flex-col gap-4">
                            <a
                                href={tiktokUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 bg-black rounded-full flex items-center justify-center border border-white/20 shadow-xl"
                            >
                                <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c0 2.1-.55 4.31-2.07 5.8s-3.79 2.37-5.9 2.18c-2.45-.23-4.73-1.92-5.69-4.21-.99-2.33-.49-5.18 1.25-7.05 1.4-1.5 3.51-2.28 5.61-2.12.04 1.41-.01 2.82-.03 4.24-1.01-.19-2.16-.08-2.99.58-.85.66-1.13 1.83-.8 2.86.34 1.05 1.39 1.85 2.49 1.84 1.34.02 2.53-1.07 2.63-2.41l.03-12.89z" />
                                </svg>
                            </a>
                        </div>

                        <button
                            onClick={toggleMute}
                            className="absolute bottom-10 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white"
                        >
                            {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* DESKTOP VERSION: Floating Bubble */}
            <div className="fixed bottom-24 right-6 z-[45] hidden sm:block">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{
                        opacity: 1,
                        scale: isExpanded ? 1 : 0.8,
                        y: 0,
                        width: isExpanded ? "300px" : "180px"
                    }}
                    className="relative group transition-all duration-500 ease-in-out"
                >
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="absolute -top-3 -right-3 w-8 h-8 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-purple-600 hover:text-purple-700 z-[60] transition-colors group/btn"
                    >
                        {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                    </button>

                    <div className="relative aspect-[9/19] bg-gray-900 rounded-[2rem] p-1.5 shadow-2xl border-4 border-gray-800 overflow-hidden">
                        <div className="relative w-full h-full rounded-[1.6rem] overflow-hidden bg-black">
                            <video
                                src={videoUrl}
                                poster={posterUrl}
                                className="w-full h-full object-cover cursor-pointer"
                                loop
                                muted={isMuted}
                                playsInline
                                autoPlay
                                onClick={togglePlay}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none" />

                            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/60 to-transparent">
                                <div className="flex items-center justify-between">
                                    <button onClick={(e) => { e.stopPropagation(); togglePlay(); }} className="text-white">
                                        {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white" />}
                                    </button>
                                    <a
                                        href={tiktokUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        className="w-8 h-8 bg-black/50 hover:bg-black rounded-full flex items-center justify-center text-white transition-colors"
                                    >
                                        <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                                            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.26v5.48c0 2.1-.55 4.31-2.07 5.8s-3.79 2.37-5.9 2.18c-2.45-.23-4.73-1.92-5.69-4.21-.99-2.33-.49-5.18 1.25-7.05 1.4-1.5 3.51-2.28 5.61-2.12.04 1.41-.01 2.82-.03 4.24-1.01-.19-2.16-.08-2.99.58-.85.66-1.13 1.83-.8 2.86.34 1.05 1.39 1.85 2.49 1.84 1.34.02 2.53-1.07 2.63-2.41l.03-12.89z" />
                                        </svg>
                                    </a>
                                    <button onClick={(e) => { e.stopPropagation(); toggleMute(); }} className="text-white">
                                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}
