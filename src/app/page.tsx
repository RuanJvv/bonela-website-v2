import { CallToAction } from "@/components/ui/CallToAction"
import FeatureDivider from "@/components/ui/FeatureDivider"
import Features from "@/components/ui/Features"
import { Hero } from "@/components/ui/Hero"
import { PsychometricWorkflow } from "@/components/ui/PsychometricWorkflow"
import { SolarAnalytics } from "@/components/ui/SolarAnalytics"
import { Metadata } from "next"
import { siteConfig } from "./siteConfig"

export const metadata: Metadata = {
  title: "Bonela | Home",
  description: "Bonela Consulting - Level-2 B-BBEE People Solutions company transforming individuals and teams across Africa through People-Skills Development, Organisational Effectiveness Interventions, and HPCSA-compliant Psychometric Assessments.",
  keywords: [
    ...siteConfig.keywords,
    "home page",
    "people solutions Africa",
    "transformation consulting",
    "life-changing learning experiences"
  ],
  openGraph: {
    title: `${siteConfig.name} - Transforming People Across Africa`,
    description: "Level-2 B-BBEE People Solutions company specializing in People-Skills Development, Organisational Effectiveness, and Psychometric Assessments.",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Bonela Consulting - People Solutions Company"
      }
    ]
  },
  twitter: {
    title: `${siteConfig.name} - Transforming People Across Africa`,
    description: "Level-2 B-BBEE People Solutions company specializing in People-Skills Development, Organisational Effectiveness, and Psychometric Assessments."
  },
  alternates: {
    canonical: siteConfig.url
  }
}

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col">
      <div className="pt-56">
        <Hero />
      </div>
      <div className="mt-52 px-4 xl:px-0">
        <Features />
      </div>
      {/* <div className="mt-32 px-4 xl:px-0">
        <Testimonial />
      </div> */}
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="px-4 xl:px-0">
        <PsychometricWorkflow />
      </div>
      <FeatureDivider className="my-16 max-w-6xl" />
      <div className="mt-12 mb-40 px-4 xl:px-0">
        <SolarAnalytics />
      </div>
      <div className="mt-10 mb-40 px-4 xl:px-0">
        <CallToAction />
      </div>
    </main>
  )
}
