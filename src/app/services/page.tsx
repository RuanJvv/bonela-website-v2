import { RiBrainLine, RiCheckLine, RiGlobalLine, RiHeartLine, RiPresentationLine, RiShieldCheckLine, RiTeamLine, RiTrophyLine } from "@remixicon/react"
import { Metadata } from "next"
import Image from "next/image"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore Bonela Consulting's comprehensive services: 80+ People Development Workshops, Organisational Effectiveness Interventions, and HPCSA-compliant Psychometric Assessments. Professional, competitively priced solutions across Africa.",
    keywords: [
        ...siteConfig.keywords,
        "consulting services",
        "80+ courses",
        "workshop delivery",
        "virtual training",
        "blended learning",
        "leadership development",
        "management training",
        "Microsoft Office training",
        "team effectiveness",
        "personality assessments",
        "cognitive ability testing",
        "job fit analysis",
        "custom solutions"
    ],
    openGraph: {
        title: "Professional Consulting Services - Bonela Consulting",
        description: "80+ People Development Workshops, Organisational Effectiveness Interventions, and HPCSA-compliant Psychometric Assessments delivered across Africa.",
        url: `${siteConfig.url}/services`,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "Bonela Consulting Services - Professional Development Solutions"
            }
        ]
    },
    twitter: {
        title: "Professional Consulting Services - Bonela Consulting",
        description: "80+ People Development Workshops, Organisational Effectiveness Interventions, and HPCSA-compliant Psychometric Assessments."
    },
    alternates: {
        canonical: `${siteConfig.url}/services`
    }
}

export default function ServicesPage() {
    return (
        <main className="relative mx-auto flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl text-center">
                    <div className="mb-6">
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                            Level-2 B-BBEE People Solutions Company
                        </span>
                    </div>
                    <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl">
                        Our Services
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600">
                        A truly South African company blending local pride with global intelligence to deliver sustainable people solutions that transform individuals and teams across Africa through life-changing learning experiences.
                    </p>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-16 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            What Sets Bonela Apart
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We don't just deliver training – we create transformation through strategic, research-backed solutions.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: RiGlobalLine,
                                title: "Business-Aligned Solutions",
                                description: "We translate business needs into impactful development solutions with strategic alignment to client business goals."
                            },
                            {
                                icon: RiHeartLine,
                                title: "Trust-Based Relationships",
                                description: "Long-term, trust-based client relationships built on consistent delivery and genuine partnership."
                            },
                            {
                                icon: RiPresentationLine,
                                title: "Co-Designed Interventions",
                                description: "Practical, co-designed interventions tailored to your specific organizational context and challenges."
                            },
                            {
                                icon: RiTrophyLine,
                                title: "Experienced Facilitators",
                                description: "Expert facilitators focused on the 'how', not just the 'what' – ensuring practical application and lasting change."
                            },
                            {
                                icon: RiBrainLine,
                                title: "Continuous Innovation",
                                description: "Ongoing research and product innovation to stay ahead of industry trends and emerging needs."
                            },
                            {
                                icon: RiShieldCheckLine,
                                title: "Professional Standards",
                                description: "HPCSA-compliant assessments conducted by registered Psychologists and Psychometrists."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                                    <item.icon className="size-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-semibold text-gray-900 mb-4">
                            Our Core Services
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive, competitively priced solutions across three key areas of people development.
                        </p>
                    </div>

                    <div className="grid gap-16">

                        {/* People Development Workshops */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <RiPresentationLine className="size-6 text-orange-600" />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-gray-900">
                                        People Development Workshops
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-600 mb-6">
                                    Over 80 comprehensive courses across leadership, management, soft skills, digital tools, and personal development – designed to create lasting behavioral change and skill enhancement.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Leadership & Management:</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {[
                                                "Coaching & Mentoring",
                                                "Self-Leadership",
                                                "Team Building",
                                                "Leadership Development"
                                            ].map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <RiCheckLine className="size-4 text-green-600" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Soft Skills & Personal Development:</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {[
                                                "Emotional Intelligence (EQ)",
                                                "Diversity & Inclusion",
                                                "Digital Citizenship",
                                                "Communication Skills"
                                            ].map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <RiCheckLine className="size-4 text-green-600" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Digital Tools Mastery:</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {[
                                                "Microsoft Excel",
                                                "Microsoft Word",
                                                "Microsoft Outlook",
                                                "Microsoft PowerPoint"
                                            ].map((item) => (
                                                <div key={item} className="flex items-center gap-2">
                                                    <RiCheckLine className="size-4 text-green-600" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Flexible Delivery Formats:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {[
                                            "In-person workshops",
                                            "Virtual sessions (MS Teams, Zoom)",
                                            "Blended learning programs"
                                        ].map((format) => (
                                            <span key={format} className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border">
                                                {format}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                                    alt="Professional workshop session"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Organisational Effectiveness */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                                    alt="Team collaboration session"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-blue-100 rounded-lg">
                                        <RiTeamLine className="size-6 text-blue-600" />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-gray-900">
                                        Organisational Effectiveness Interventions
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-600 mb-6">
                                    Strategic, holistic interventions designed to create sustainable organizational transformation. We work with businesses to build effective systems, structures, and cultures that drive performance excellence.
                                </p>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900">Strategic Transformation Areas:</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Realign strategy and people practices for maximum impact",
                                            "Build effective team dynamics and collaboration",
                                            "Re-engineer organizational structures and improve performance",
                                            "Create holistic transformation across systems and culture",
                                            "Develop leadership capabilities at all organizational levels",
                                            "Enhance communication and change management processes"
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-2">
                                                <RiCheckLine className="size-4 text-green-600 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                                    <p className="text-sm text-blue-800">
                                        <strong>Our Approach:</strong> We don't just identify problems – we partner with you to implement sustainable solutions that create lasting organizational change.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Psychometric Assessments */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-purple-100 rounded-lg">
                                        <RiBrainLine className="size-6 text-purple-600" />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-gray-900">
                                        Occupational Psychometric Assessments
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-600 mb-6">
                                    Scientifically-backed, HPCSA-compliant assessments conducted by registered Psychologists and Psychometrists. Our tailored assessment batteries provide deep insights for informed decision-making.
                                </p>

                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-3">Comprehensive Assessment Types:</h3>
                                        <div className="space-y-3">
                                            {[
                                                "Personality profiles and behavioral analysis",
                                                "Cognitive ability and intellectual evaluations",
                                                "Job-fit competency diagnostics",
                                                "Leadership potential assessments",
                                                "Team dynamics and culture fit analysis"
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <RiCheckLine className="size-4 text-green-600 mt-1" />
                                                    <span className="text-gray-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="bg-purple-50 p-4 rounded-lg">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Professional Standards & Features:</h3>
                                        <div className="space-y-2">
                                            {[
                                                "Custom assessment batteries tailored to specific roles",
                                                "Full HPCSA standards compliance and certification",
                                                "Conducted by registered Psychologists/Psychometrists",
                                                "Individualized Development Plans (IDPs) provided",
                                                "Updated and evolving tools aligned to job levels",
                                                "Comprehensive reporting with actionable insights"
                                            ].map((item) => (
                                                <div key={item} className="flex items-start gap-2">
                                                    <RiCheckLine className="size-3 text-purple-600 mt-1 flex-shrink-0" />
                                                    <span className="text-gray-700 text-sm">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                                    alt="Assessment and evaluation process"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>
                        </div>

                        {/* Custom Solutions */}
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="order-2 md:order-1 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                                    alt="Custom business solutions"
                                    width={600}
                                    height={400}
                                    className="rounded-xl shadow-lg"
                                />
                            </div>

                            <div className="order-1 md:order-2">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="p-2 bg-green-100 rounded-lg">
                                        <RiGlobalLine className="size-6 text-green-600" />
                                    </div>
                                    <h2 className="text-3xl font-semibold text-gray-900">
                                        Custom Solutions & Consulting
                                    </h2>
                                </div>
                                <p className="text-lg text-gray-600 mb-6">
                                    When off-the-shelf solutions aren't enough, we create bespoke organizational and talent development programs designed specifically for your unique business context, challenges, and strategic objectives.
                                </p>

                                <div className="space-y-4">
                                    <h3 className="text-xl font-semibold text-gray-900">Tailored Solutions Include:</h3>
                                    <div className="space-y-3">
                                        {[
                                            "Tailor-made Organisational Development programs",
                                            "Custom Talent Development and succession planning",
                                            "Team-specific interventions matched to unique needs",
                                            "Ongoing trend analysis and development tracking",
                                            "Culture transformation and change management",
                                            "Leadership pipeline development programs"
                                        ].map((item) => (
                                            <div key={item} className="flex items-start gap-2">
                                                <RiCheckLine className="size-4 text-green-600 mt-1 flex-shrink-0" />
                                                <span className="text-gray-700">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                                    <p className="text-sm text-green-800">
                                        <strong>Our Promise:</strong> Every custom solution is co-designed with your team, ensuring practical application and measurable results that align with your business goals.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credentials & Compliance */}
            <section className="py-16 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Professional Standards & Credentials
                        </h2>
                        <p className="text-lg text-gray-600">
                            Committed to the highest standards of professional excellence and regulatory compliance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="p-3 bg-orange-100 rounded-lg w-fit mx-auto mb-4">
                                <RiShieldCheckLine className="size-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Level-2 B-BBEE</h3>
                            <p className="text-gray-600">Certified Level-2 B-BBEE People Solutions company committed to transformation and empowerment.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-4">
                                <RiBrainLine className="size-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">HPCSA Compliant</h3>
                            <p className="text-gray-600">All psychometric assessments conducted by registered Psychologists and Psychometrists.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm text-center">
                            <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-4">
                                <RiTrophyLine className="size-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                            <p className="text-gray-600">Transforming individuals and teams across Africa through evidence-based solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 xl:px-0">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                        Ready to Transform Your Organization?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Contact us today to discuss your specific needs and discover how our comprehensive people solutions can create lasting change and drive sustainable growth in your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                        >
                            Get a Consultation
                        </a>
                        <a
                            href="mailto:info@bonelaconsulting.com"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                        >
                            Email Us Directly
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        📧 info@bonelaconsulting.com • 🌐 www.bonelaconsulting.com
                    </p>
                </div>
            </section>
        </main>
    )
} 