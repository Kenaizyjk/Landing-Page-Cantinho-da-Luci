import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Cantinho da Luci | Restaurante & Pousada",
  description: "Um refúgio verde com o melhor da comida mineira e hospedagem aconchegante.",
  generator: 'v0.app',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#D4AF37',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans antialiased overflow-x-hidden bg-stone-50 m-0 p-0">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
