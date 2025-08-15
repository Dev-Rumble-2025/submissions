import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rupak Gadtaula - AI Software Engineer & Researcher",
  description:
    "Portfolio of Rupak Gadtaula - Master's in Computer Science student, aspiring AI Software Engineer, and Programming Teacher specializing in Ethical AI and XAI research.",
  keywords:
    "Rupak Gadtaula, AI Software Engineer, Computer Science, Ethical AI, XAI, Programming Teacher, Nepal, Portfolio",
  authors: [{ name: "Rupak Gadtaula" }],
  creator: "Rupak Gadtaula",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rupakgadtaula.com",
    title: "Rupak Gadtaula - AI Software Engineer & Researcher",
    description:
      "Portfolio of Rupak Gadtaula - Master's in Computer Science student, aspiring AI Software Engineer, and Programming Teacher specializing in Ethical AI and XAI research.",
    siteName: "Rupak Gadtaula Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rupak Gadtaula - AI Software Engineer & Researcher",
    description:
      "Portfolio of Rupak Gadtaula - Master's in Computer Science student, aspiring AI Software Engineer, and Programming Teacher specializing in Ethical AI and XAI research.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
