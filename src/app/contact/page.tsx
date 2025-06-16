'use client'

import { RiGlobalLine, RiMailLine, RiMapPinLine, RiSendPlaneLine } from "@remixicon/react"
import { Metadata } from "next"
import { useState } from "react"
import { siteConfig } from "../siteConfig"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Bonela Consulting for professional people solutions. Request a consultation, quote, or discuss your specific training and development needs. We're here to help transform your organization.",
    keywords: [
        ...siteConfig.keywords,
        "contact Bonela Consulting",
        "get quote",
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
    twitter: {
        title: "Contact Bonela Consulting - Get Professional Consultation",
        description: "Ready to transform your people and organization? Contact us for professional consultation and discover how we can help."
    },
    alternates: {
        canonical: `${siteConfig.url}/contact`
    }
}

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 1000))
            setSubmitStatus('success')
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: ''
            })
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="relative mx-auto flex flex-col">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl text-center">
                    <h1 className="text-5xl font-semibold tracking-tighter text-gray-900 sm:text-6xl mb-6">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ready to transform your people and organization? Get in touch with us
                        to discuss your specific needs and discover how we can help.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-16 px-4 xl:px-0">
                <div className="mx-auto max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-12">

                        {/* Contact Form */}
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                Get a Quote
                            </h2>

                            {submitStatus === 'success' && (
                                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <p className="text-green-800">
                                        Thank you for your message! We'll get back to you within 24 hours.
                                    </p>
                                </div>
                            )}

                            {submitStatus === 'error' && (
                                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <p className="text-red-800">
                                        There was an error sending your message. Please try again or contact us directly.
                                    </p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                        Service of Interest
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="people-development">People Development Workshops</option>
                                        <option value="organisational-effectiveness">Organisational Effectiveness</option>
                                        <option value="psychometric-assessments">Psychometric Assessments</option>
                                        <option value="custom-solutions">Custom Solutions</option>
                                        <option value="consultation">General Consultation</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your specific needs and how we can help..."
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <RiSendPlaneLine className="size-4" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                                    Get in Touch
                                </h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    We're here to help you transform your people and organization.
                                    Reach out to us through any of the following channels:
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <RiMailLine className="size-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                                        <a
                                            href="mailto:info@bonelaconsulting.com"
                                            className="text-orange-600 hover:text-orange-700 transition-colors"
                                        >
                                            info@bonelaconsulting.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <RiGlobalLine className="size-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Website</h3>
                                        <a
                                            href="https://www.bonelaconsulting.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-orange-600 hover:text-orange-700 transition-colors"
                                        >
                                            www.bonelaconsulting.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-orange-100 rounded-lg">
                                        <RiMapPinLine className="size-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                                        <p className="text-gray-600">
                                            South Africa<br />
                                            Serving clients across Africa
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Why Choose Us */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                    Why Choose Bonela Consulting?
                                </h3>
                                <ul className="space-y-3 text-gray-600">
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Level-2 B-BBEE certified company</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Over 80 development courses available</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>HPCSA-compliant psychometric assessments</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Flexible delivery formats (in-person, virtual, blended)</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                                        <span>Custom solutions tailored to your needs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
} 