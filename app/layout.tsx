import type React from "react"
import type { Metadata } from "next"
import { Mona_Sans as FontSans, Inter as FontHeading } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StructuredData } from "@/components/structured-data"
import { Analytics } from "@/components/analytics"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontHeading = FontHeading({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Fosse Creative | Web Design Melksham, Wiltshire | Professional Web Development",
  description: "Professional web design and development services in Melksham, Wiltshire. Modern, responsive websites for local businesses across Wiltshire and beyond.",
  keywords: "web design Melksham, web development Wiltshire, website design Melksham, responsive web design, Wiltshire web developer, local web design",
  authors: [{ name: "Fosse Creative" }],
  creator: "Fosse Creative",
  publisher: "Fosse Creative",
  metadataBase: new URL('https://fossecreative.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Fosse Creative | Web Design Melksham, Wiltshire",
    description: "Professional web design and development services in Melksham, Wiltshire. Modern, responsive websites for local businesses.",
    url: 'https://fossecreative.co.uk',
    siteName: 'Fosse Creative',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Fosse Creative - Web Design Melksham',
      },
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Fosse Creative | Web Design Melksham, Wiltshire",
    description: "Professional web design and development services in Melksham, Wiltshire.",
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", fontSans.variable, fontHeading.variable)}>
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
