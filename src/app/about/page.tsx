import { RiAwardLine, RiBrainLine, RiFocusLine, RiGlobalLine, RiHeartLine, RiLightbulbLine, RiPresentationLine, RiShieldCheckLine, RiStarLine, RiTeamLine, RiTrophyLine } from "@remixicon/react"
import { Metadata } from "next"
import Image from "next/image"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
    title: "Bonela |About Us",
    description: "Learn about Bonela Consulting - a Level-2 B-BBEE People Solutions company with local pride and global intelligence. Discover our mission, philosophy, and what sets us apart in transforming individuals and teams worldwide.",
    keywords: [
        ...siteConfig.keywords,
        "about Bonela Consulting",
        "company mission",
        "South African consulting",
        "people transformation",
        "business philosophy",
        "professional standards",
        "company values"
    ],
    openGraph: {
        title: "About Bonela Consulting - People Solutions Company",
        description: "A truly South African company blending local pride with global intelligence to deliver sustainable people solutions that create lasting transformation.",
        url: `${siteConfig.url}/about`,
        images: [
            {
                url: siteConfig.ogImage,
                width: 1200,
                height: 630,
                alt: "About Bonela Consulting - Our Mission and Values"
            }
        ]
    },
    twitter: {
        title: "About Bonela Consulting - People Solutions Company",
        description: "A truly South African company blending local pride with global intelligence to deliver sustainable people solutions."
    },
    alternates: {
        canonical: `${siteConfig.url}/about`
    }
}

export default function AboutPage() {
    return (
        <main className="relative mx-auto flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="mb-6">
                                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                                    Level-2 B-BBEE People Solutions Company
                                </span>
                            </div>
                            <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl mb-6">
                                About Bonela Consulting
                            </h1>
                            <p className="text-xl text-gray-600 mb-6">
                                A truly South African company blending local pride with global intelligence to deliver sustainable people solutions that create lasting transformation.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                We specialize in transforming individuals and teams worldwide through life-changing learning experiences, delivering competitively priced solutions designed to create measurable impact and sustainable growth.
                            </p>
                            <div className="flex flex-wrap gap-3">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                    People-Skills Development
                                </span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                                    Organisational Effectiveness
                                </span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                                    Psychometric Assessments
                                </span>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop&crop=entropy&auto=format&q=80"
                                alt="Bonela Consulting team collaboration"
                                width={600}
                                height={500}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Philosophy */}
            <section className="py-16 px-4 xl:px-0 bg-gradient-to-r from-orange-50 to-blue-50">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                        Our Mission & Philosophy
                    </h2>
                    <blockquote className="text-2xl text-gray-700 font-medium mb-8">
                        &ldquo;Where people and technology meet.&rdquo;
                    </blockquote>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                        We exist to bridge the gap between human potential and technological advancement, creating solutions that empower people to thrive in an ever-evolving world. Our mission is to transform individuals and teams worldwide through evidence-based, practical solutions that create lasting behavioral change and organizational excellence.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-12">
                        <div className="text-center">
                            <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                                <RiFocusLine className="size-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Purpose-Driven</h3>
                            <p className="text-gray-600 text-sm">Every solution is strategically aligned to your business goals and organizational objectives.</p>
                        </div>
                        <div className="text-center">
                            <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                                <RiGlobalLine className="size-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Locally Rooted</h3>
                            <p className="text-gray-600 text-sm">South African expertise combined with global intelligence and best practices.</p>
                        </div>
                        <div className="text-center">
                            <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                                <RiStarLine className="size-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold text-gray-900 mb-2">Impact-Focused</h3>
                            <p className="text-gray-600 text-sm">Measurable transformation through practical, sustainable people development solutions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            What Sets Bonela Apart
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            We don&rsquo;t just deliver training – we create transformation. Our unique approach combines strategic thinking, research-backed methodologies, and deep understanding of local contexts to deliver solutions that create lasting change.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: RiLightbulbLine,
                                title: "Business-Aligned Solutions",
                                description: "We translate business needs into impactful development solutions with strategic alignment to client business goals, ensuring every intervention drives measurable results."
                            },
                            {
                                icon: RiHeartLine,
                                title: "Trust-Based Relationships",
                                description: "Long-term, trust-based client relationships built on consistent delivery, transparency, and genuine partnership that extends beyond project completion."
                            },
                            {
                                icon: RiTeamLine,
                                title: "Co-Designed Interventions",
                                description: "Practical, co-designed interventions tailored to your specific organizational context, challenges, and culture – not one-size-fits-all solutions."
                            },
                            {
                                icon: RiTrophyLine,
                                title: "Experienced Facilitators",
                                description: "Expert facilitators focused on the &lsquo;how&rsquo;, not just the &lsquo;what&rsquo; – ensuring practical application, skill transfer, and lasting behavioral change."
                            },
                            {
                                icon: RiBrainLine,
                                title: "Continuous Innovation",
                                description: "Ongoing research and product innovation to stay ahead of industry trends, emerging needs, and evolving workplace dynamics."
                            },
                            {
                                icon: RiAwardLine,
                                title: "Strategic Alignment",
                                description: "All solutions are strategically aligned to client business goals, with clear ROI measurement and performance tracking for maximum organizational impact."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                                <div className="p-3 bg-orange-100 rounded-lg w-fit mb-4">
                                    <item.icon className="size-6 text-orange-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Expertise Areas */}
            <section className="py-16 px-4 xl:px-0 bg-gray-50">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Our Core Expertise Areas
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Three comprehensive service areas that form the foundation of our people development solutions, each delivered with professional excellence and measurable outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="p-3 bg-blue-100 rounded-lg w-fit mb-6">
                                <RiPresentationLine className="size-8 text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                People-Skills Development
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Over 80 comprehensive courses across leadership, management, soft skills, digital tools, and personal development.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Leadership & Management Excellence</li>
                                <li>• Emotional Intelligence & Communication</li>
                                <li>• Digital Tools Mastery (Microsoft Suite)</li>
                                <li>• Diversity, Inclusion & Cultural Competence</li>
                                <li>• Team Building & Collaboration</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="p-3 bg-green-100 rounded-lg w-fit mb-6">
                                <RiTeamLine className="size-8 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Organisational Effectiveness
                            </h3>
                            <p className="text-gray-600 mb-4">
                                Strategic interventions to realign strategy and people practices, building effective team dynamics and driving organizational transformation.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Strategic Alignment & Culture Change</li>
                                <li>• Team Dynamics & Performance</li>
                                <li>• Structure Re-engineering & Process Improvement</li>
                                <li>• Leadership Development & Succession Planning</li>
                                <li>• Change Management & Communication</li>
                            </ul>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="p-3 bg-purple-100 rounded-lg w-fit mb-6">
                                <RiBrainLine className="size-8 text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Psychometric Assessments
                            </h3>
                            <p className="text-gray-600 mb-4">
                                HPCSA-compliant assessments conducted by registered Psychologists and Psychometrists, providing scientifically-backed insights.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li>• Personality Profiles & Behavioral Analysis</li>
                                <li>• Cognitive Ability & Intellectual Assessments</li>
                                <li>• Job-Fit & Competency Diagnostics</li>
                                <li>• Leadership Potential & Team Dynamics</li>
                                <li>• Individualized Development Plans (IDPs)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <Image
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80"
                                alt="Professional development session"
                                width={600}
                                height={400}
                                className="rounded-xl shadow-lg"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
                                Our Professional Approach
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                At Bonela Consulting, we believe that sustainable transformation happens when people are at the center of every solution. Our methodology is built on proven frameworks, cultural understanding, and strategic business alignment.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "People-Centric Philosophy",
                                        description: "Every solution is designed with people at the heart, ensuring sustainable change that respects individual potential while driving organizational goals."
                                    },
                                    {
                                        title: "Evidence-Based Methodology",
                                        description: "We leverage continuous research, proven frameworks, and data-driven insights to ensure our interventions deliver measurable results."
                                    },
                                    {
                                        title: "Cultural Intelligence",
                                        description: "Our South African roots combined with global intelligence help us navigate local contexts while applying international best practices."
                                    },
                                    {
                                        title: "Partnership Approach",
                                        description: "We work as true partners, co-designing solutions with your team to ensure relevance, buy-in, and long-term sustainability."
                                    },
                                    {
                                        title: "Measurable Impact",
                                        description: "We track progress, measure impact, and provide ongoing support to ensure lasting transformation and continuous improvement."
                                    }
                                ].map((item, index) => (
                                    <div key={index} className="border-l-4 border-orange-500 pl-6 py-2">
                                        <h3 className="font-semibold text-gray-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Standards & Credentials */}
            <section className="py-16 px-4 xl:px-0 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="mx-auto max-w-6xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-semibold text-gray-900 mb-4">
                            Professional Standards & Credentials
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Our commitment to excellence is reflected in our professional certifications, regulatory compliance, and adherence to the highest industry standards.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                                <RiAwardLine className="size-8 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Level-2 B-BBEE</h3>
                            <p className="text-gray-600 text-sm">Certified Level-2 B-BBEE People Solutions company committed to transformation and empowerment.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                                <RiShieldCheckLine className="size-8 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">HPCSA Compliant</h3>
                            <p className="text-gray-600 text-sm">All psychometric assessments conducted by registered Psychologists and Psychometrists.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                                <RiTrophyLine className="size-8 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Excellence</h3>
                            <p className="text-gray-600 text-sm">Track record of transforming individuals and teams worldwide through evidence-based solutions.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                                <RiBrainLine className="size-8 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Research-Backed</h3>
                            <p className="text-gray-600 text-sm">Continuous research and innovation to stay ahead of industry trends and emerging needs.</p>
                        </div>
                    </div>

                    <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
                        <div className="text-center">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                                Why Our Credentials Matter
                            </h3>
                            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-6">
                                Our Level-2 B-BBEE certification enables clients to benefit from preferential procurement while accessing world-class people development solutions. Combined with HPCSA compliance and professional standards, we deliver transformation you can trust.
                            </p>
                            <div className="grid md:grid-cols-2 gap-6 mt-8">
                                <div className="text-left">
                                    <h4 className="font-semibold text-gray-900 mb-2">For Your Business:</h4>
                                    <ul className="text-gray-600 space-y-1 text-sm">
                                        <li>• B-BBEE procurement benefits</li>
                                        <li>• Professional risk mitigation</li>
                                        <li>• Regulatory compliance assurance</li>
                                        <li>• Quality guarantee through certification</li>
                                    </ul>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-gray-900 mb-2">For Your People:</h4>
                                    <ul className="text-gray-600 space-y-1 text-sm">
                                        <li>• Scientifically-backed assessments</li>
                                        <li>• Ethical professional practices</li>
                                        <li>• Culturally sensitive approaches</li>
                                        <li>• Measurable development outcomes</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 xl:px-0 bg-gray-900 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold mb-4">
                        Ready to Transform Your Organization?
                    </h2>
                    <p className="text-lg text-gray-300 mb-8">
                        Let&rsquo;s discuss how our comprehensive people solutions, professional expertise, and strategic approach can create lasting transformation in your organization.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-colors"
                        >
                            Schedule a Consultation
                        </a>
                        <a
                            href="/services"
                            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-colors"
                        >
                            Explore Our Services
                        </a>
                    </div>
                    <div className="text-gray-400 text-sm">
                        <p>📧 info@bonelaconsulting.com • 🌐 www.bonelaconsulting.com</p>
                        <p className="mt-2">&ldquo;Where people and technology meet.&rdquo;</p>
                    </div>
                </div>
            </section>
        </main>
    )
} 