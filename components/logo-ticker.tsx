"use client"

import { useLanguage } from "@/hooks/use-language"

// ─── SVG Logos ────────────────────────────────────────────────────────────────

const MakeLogo = () => (
    <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="14" fill="#6D00CC" />
        <path d="M14 20 L20 12 L26 20 L20 28 Z" fill="white" opacity="0.9" />
        <text x="40" y="26" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="18" fill="white">make</text>
    </svg>
)

const AirtableLogo = () => (
    <svg viewBox="0 0 130 40" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Table icon */}
        <rect x="2" y="8" width="28" height="9" rx="2" fill="#FFBF00" />
        <rect x="2" y="20" width="13" height="9" rx="2" fill="#26B5F8" />
        <rect x="17" y="20" width="13" height="9" rx="2" fill="#ED3476" />
        <text x="38" y="27" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="17" fill="white">Airtable</text>
    </svg>
)

const N8nLogo = () => (
    <svg viewBox="0 0 90 40" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="4" width="32" height="32" rx="8" fill="#EA4B71" />
        <text x="5" y="26" fontFamily="monospace" fontWeight="900" fontSize="16" fill="white">n8n</text>
        <text x="38" y="27" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="17" fill="white">n8n</text>
    </svg>
)

const OfikaLogo = () => (
    <svg viewBox="0 0 100 40" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="12" fill="none" stroke="#7C3AED" strokeWidth="3" />
        <circle cx="18" cy="20" r="5" fill="#7C3AED" />
        <text x="36" y="27" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="17" fill="white">Ofika</text>
    </svg>
)

const MenlylaLogo = () => (
    <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="10" width="22" height="20" rx="4" fill="none" stroke="#F59E0B" strokeWidth="2.5" />
        <path d="M8 20 L13 14 L18 20" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="13" y1="14" x2="13" y2="26" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <text x="32" y="27" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="17" fill="white">Menlyla</text>
    </svg>
)

const HubSpotLogo = () => (
    <svg viewBox="0 0 120 40" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="14" r="5" fill="#FF7A59" />
        <circle cx="18" cy="27" r="4" fill="#FF7A59" />
        <circle cx="8" cy="20" r="3.5" fill="#FF7A59" />
        <circle cx="28" cy="20" r="3.5" fill="#FF7A59" />
        <text x="38" y="27" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="17" fill="white">HubSpot</text>
    </svg>
)

const NotionLogo = () => (
    <svg viewBox="0 0 100 40" className="h-7 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="26" height="32" rx="4" fill="white" />
        <path d="M9 10 L20 10 L25 16 L25 30 L9 30 Z" fill="#0F0F0F" />
        <text x="36" y="27" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="17" fill="white">Notion</text>
    </svg>
)

// ─── Logos list (duplicated for seamless loop) ─────────────────────────────────

const logos = [
    { id: "make", component: <MakeLogo /> },
    { id: "airtable", component: <AirtableLogo /> },
    { id: "n8n", component: <N8nLogo /> },
    { id: "ofika", component: <OfikaLogo /> },
    { id: "menlyla", component: <MenlylaLogo /> },
    { id: "hubspot", component: <HubSpotLogo /> },
    { id: "notion", component: <NotionLogo /> },
]

// ─── Component ────────────────────────────────────────────────────────────────

export function LogoTicker() {
    const { language } = useLanguage()
    const label = language === "fr" ? "Nos outils & intégrations" : "Our tools & integrations"

    // Duplicate logos for seamless infinite scroll
    const allLogos = [...logos, ...logos]

    return (
        <div className="relative bg-[#080d1a] border-y border-white/[0.06] py-10 overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080d1a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080d1a] to-transparent z-10 pointer-events-none" />

            {/* Label */}
            <p className="text-center text-white/30 text-xs uppercase tracking-[0.25em] mb-8 font-medium">
                {label}
            </p>

            {/* Ticker */}
            <div className="flex overflow-hidden">
                <div
                    className="flex gap-16 items-center animate-ticker"
                    style={{ width: "max-content" }}
                >
                    {allLogos.map((logo, i) => (
                        <div
                            key={`${logo.id}-${i}`}
                            className="flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 shrink-0"
                        >
                            {logo.component}
                        </div>
                    ))}
                    {/* Second copy for seamless loop */}
                    {allLogos.map((logo, i) => (
                        <div
                            key={`${logo.id}-dup-${i}`}
                            className="flex items-center opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 shrink-0"
                        >
                            {logo.component}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 22s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    )
}
