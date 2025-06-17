import { RiBarChartLine, RiGlobalLine, RiHandHeartLine, RiLinkedinFill, RiMailFill } from "@remixicon/react"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
    title: "Our Team",
    description: "Meet the founding team behind Bonela Consulting - experienced professionals passionate about transforming individuals and teams across Africa through innovative people solutions.",
    keywords: [
        ...siteConfig.keywords,
        "Bonela Consulting team",
        "founders",
        "leadership team",
        "consulting experts",
        "people development specialists",
        "African consultants"
    ],
    openGraph: {
        title: "Meet Our Team - Bonela Consulting",
        description: "Meet the founding team behind Bonela Consulting - experienced professionals passionate about transforming people and organizations.",
        url: `${siteConfig.url}/team`,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Bonela Consulting Team - Meet Our Founders"
            }
        ]
    },
    twitter: {
        title: "Meet Our Team - Bonela Consulting",
        description: "Meet the founding team behind Bonela Consulting - experienced professionals passionate about transforming people and organizations."
    },
    alternates: {
        canonical: `${siteConfig.url}/team`
    }
}

const founders = [
    {
        name: "Eugene Viljoen",
        title: "Co-Founder & CEO",
        bio: "With over 15 years of experience in organizational psychology and people development, Dr. Mbeki brings deep expertise in transformational leadership and evidence-based consulting. She holds a PhD in Industrial Psychology from the University of Cape Town and is passionate about bridging the gap between human potential and organizational excellence across Africa.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
        linkedin: "#",
        email: "eugene.viljoen@bonelaconsulting.com"
    },
    {
        name: "Petro Viljoen",
        title: "Co-Founder & CTO",
        bio: "Marcus combines his background in technology and business strategy to create innovative solutions that meet modern workplace challenges. With 12+ years in digital transformation and people analytics, he ensures our methodologies are backed by cutting-edge research and practical application for sustainable organizational change.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
        linkedin: "#",
        email: "petro@bonelaconsulting.com"
    },
    {
        name: "Ettiene Viljoen",
        title: "Co-Founder & Head of Operations",
        bio: "Nomsa brings extensive experience in project management and client relationship building, ensuring every engagement delivers exceptional value. Her expertise in B-BBEE compliance and stakeholder management has been instrumental in establishing Bonela as a trusted Level-2 B-BBEE partner across various industries.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face&auto=format&q=80",
        linkedin: "#",
        email: "ettiene@bonelaconsulting.com"
    }
]

export default function TeamPage() {
    return (
        <main className="relative mx-auto flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl text-center">
                    <div className="mb-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                            Meet Our Founding Team
                        </span>
                    </div>
                    <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl">
                        Our Team
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
                        Meet the passionate professionals behind Bonela Consulting - a diverse team of experts committed to transforming individuals and organizations across Africa.
                    </p>
                </div>
            </section>

            {/* Team Members */}
            <section className="py-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl">
                    <div className="grid gap-16">
                        {founders.map((founder, index) => (
                            <div key={founder.name} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                                    <div className="relative">
                                        <Image
                                            src={founder.image}
                                            alt={`${founder.name} - ${founder.title}`}
                                            width={400}
                                            height={400}
                                            className="rounded-xl shadow-lg w-full max-w-md mx-auto"
                                        />
                                        <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                </div>
                                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                                    <div className="mb-4">
                                        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                                            {founder.name}
                                        </h2>
                                        <p className="text-xl text-orange-600 font-medium mb-6">
                                            {founder.title}
                                        </p>
                                    </div>
                                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                        {founder.bio}
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Link
                                            href={`mailto:${founder.email}`}
                                            className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-800 rounded-lg hover:bg-orange-200 transition-colors"
                                        >
                                            <RiMailFill className="size-4" />
                                            <span className="text-sm font-medium">Email</span>
                                        </Link>
                                        <Link
                                            href={founder.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-800 rounded-lg hover:bg-blue-200 transition-colors"
                                        >
                                            <RiLinkedinFill className="size-4" />
                                            <span className="text-sm font-medium">LinkedIn</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Values */}
            <section className="py-16 px-4 xl:px-0 bg-gradient-to-r from-orange-50 to-blue-50">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Our Shared Values
                    </h2>
                    <blockquote className="text-2xl text-gray-700 font-medium mb-8">
                        &ldquo;Where people and technology meet.&rdquo;
                    </blockquote>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                        Our founding team shares a common vision: to create sustainable transformation that empowers individuals and organizations to thrive in an ever-evolving world. We believe in the power of evidence-based solutions, authentic relationships, and continuous innovation.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                                <RiGlobalLine className="size-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">African Excellence</h3>
                            <p className="text-gray-600 text-sm">Proudly South African, globally intelligent - we understand local contexts while applying international best practices.</p>
                        </div>
                        <div className="text-center">
                            <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                                <RiHandHeartLine className="size-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Authentic Partnership</h3>
                            <p className="text-gray-600 text-sm">We build genuine, long-term relationships based on trust, transparency, and mutual respect.</p>
                        </div>
                        <div className="text-center">
                            <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                                <RiBarChartLine className="size-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Measurable Impact</h3>
                            <p className="text-gray-600 text-sm">Every solution we deliver is designed to create tangible, sustainable change and measurable results.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 px-4 xl:px-0">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Connect with our team to discuss how we can help transform your organization through evidence-based people solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="inline-flex justify-center items-center px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
                        >
                            Get a Consultation
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex justify-center items-center px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
} 