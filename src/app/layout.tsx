import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { siteConfig } from "./siteConfig"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.creator,
  publisher: siteConfig.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.company.registration}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: siteConfig.social.twitter,
    images: [siteConfig.ogImage],
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
  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Add actual verification code
    yandex: "your-yandex-verification-code", // Add actual verification code
    yahoo: "your-yahoo-verification-code", // Add actual verification code
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Business Consulting",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": siteConfig.company.name,
              "url": siteConfig.url,
              "logo": `${siteConfig.url}/images/bonela-logo.jpg`,
              "description": siteConfig.description,
              "email": siteConfig.company.email,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "ZA",
                "addressRegion": "Gauteng",
                "addressLocality": siteConfig.company.address
              },
              "sameAs": [
                `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`,
                `https://linkedin.com/company/${siteConfig.social.linkedin}`,
                `https://facebook.com/${siteConfig.social.facebook}`
              ],
              "serviceType": [
                "People-Skills Development",
                "Organisational Effectiveness Interventions",
                "Occupational Psychometric Assessments"
              ],
              "areaServed": "Africa",
              "knowsAbout": [
                "Leadership Training",
                "Management Development",
                "Team Building",
                "Psychometric Assessment",
                "Organizational Development",
                "Skills Training"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}
        suppressHydrationWarning
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
