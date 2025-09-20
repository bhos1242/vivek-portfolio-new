import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Vivek Bhos – Full-Stack Web Developer & Co-Founder",
    template: "%s | Vivek Bhos"
  },
  description:
    "Portfolio of Vivek Bhos, MCA student at Modern College of Engineering, Pune, and Co-Founder of Navibyte Innovations Pvt. Ltd. Building scalable full-stack web solutions and delivering engaging tech talks.",
  keywords: [
    "Vivek Bhos",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Co-Founder",
    "Navibyte Innovations",
    "Modern College Pune",
    "MCA Student",
    "Portfolio",
    "Software Engineer",
    "Tech Talks",
    "Industry Expert",
    "Board of Studies"
  ],
  authors: [{ name: "Vivek Bhos", url: "https://github.com/bhos1242" }],
  creator: "Vivek Bhos",
  publisher: "Vivek Bhos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://vivek-bhos.vercel.app/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Vivek Bhos – Full-Stack Web Developer & Co-Founder',
    description: 'Portfolio of Vivek Bhos, Full-Stack Developer and Co-Founder of Navibyte Innovations. Building scalable web solutions and delivering tech talks.',
    siteName: 'Vivek Bhos Portfolio',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Vivek Bhos - Full-Stack Web Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Bhos – Full-Stack Web Developer & Co-Founder',
    description: 'Portfolio of Vivek Bhos, Full-Stack Developer and Co-Founder of Navibyte Innovations. Building scalable web solutions.',
    images: ['/hero.png'],
    creator: '@bhos1242',
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
    google: 'your-google-verification-code', // Add your actual Google verification code
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
