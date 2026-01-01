import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { LanguageProvider } from "@/hooks/use-language"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chris&co - Automatisation pour PME | Abidjan, Côte d'Ivoire",
  description:
    "Spécialiste en automatisation de tâches répétitives pour PME et indépendants. Facturation automatisée, CRM, notifications, réseaux sociaux. Basé à Abidjan.",
  keywords:
    "automatisation, digital, AI, chatbot, gain de temps, tâches, AI agent, AIAA, agence d'automatisation, WhatsApp, Abidjan, Côte d'Ivoire, PME",
  authors: [{ name: "Toto", url: "https://chrisandco.ci" }],
  creator: "Chris&co",
  publisher: "Chris&co",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://chrisandco.ci",
    siteName: "Chris&co",
    title: "Chris&co - Automatisation pour PME | Abidjan",
    description: "Simplifiez vos échanges, augmentez vos gains avec nos solutions d'automatisation sur mesure.",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&co+automation+company+Abidjan=",
        width: 1200,
        height: 630,
        alt: "Chris&co - Automatisation Abidjan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris&co - Automatisation pour PME",
    description: "Simplifiez vos échanges, augmentez vos gains",
    images: ["/placeholder.svg?height=630&width=1200&co+automation="],
  },
  alternates: {
    canonical: "https://chrisandco.ci",
    languages: {
      fr: "https://chrisandco.ci/fr",
      en: "https://chrisandco.ci/en",
    },
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ec4899" />

        {/* Meta Pixel Code */}
        {process.env.NEXT_PUBLIC_FB_PIXEL_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', '${process.env.NEXT_PUBLIC_FB_PIXEL_ID}');
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FB_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
        {/* End Meta Pixel Code */}
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}


