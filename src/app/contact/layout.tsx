import { Metadata } from "next"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
    title: "Bonela | Contact Us",
    description: "Get in touch with Bonela Consulting for professional people solutions. Request a consultation or discuss your specific training and development needs. We're here to help transform your organization.",
    keywords: [
        ...siteConfig.keywords,
        "contact Bonela Consulting",
        "get consultation",
        "consultation request",
        "training inquiry",
        "assessment booking",
        "professional consultation",
        "business inquiry",
        "contact form"
    ],
    openGraph: {
        title: "Contact Bonela Consulting - Get Professional Consultation",
        description: "Ready to transform your people and organization? Contact us for professional consultation and discover how we can help with your specific needs.",
        url: `${siteConfig.url}/contact`,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Contact Bonela Consulting - Professional Consultation"
            }
        ]
    },
    alternates: {
        canonical: `${siteConfig.url}/contact`
    }
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
} 