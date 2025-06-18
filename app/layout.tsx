import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Inter as FontHeading } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Fosse Creative | Web Design & Development",
  description: "Modern web design and development solutions inspired by the historic Fosse Way.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
