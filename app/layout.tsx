import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { FloatingChatbot } from "@/components/floating-chatbot"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cantinho da Luci | Restaurante & Pousada",
  description: "Um refúgio verde com o melhor da comida mineira e hospedagem aconchegante.",
  generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&family=Playfair+Display:wght@400..900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <FloatingChatbot />
        <Analytics />
      </body>
    </html>
  )
}
