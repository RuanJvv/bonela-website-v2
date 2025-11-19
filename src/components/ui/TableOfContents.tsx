"use client"

import { RiFileListLine } from "@remixicon/react"
import { useEffect, useState } from "react"

const sections = [
    { number: "1", title: "Important information and who we are", href: "#section-1" },
    { number: "2", title: "The data we collect about you", href: "#section-2" },
    { number: "3", title: "How your personal data is collected", href: "#section-3" },
    { number: "4", title: "How we use your personal data", href: "#section-4" },
    { number: "5", title: "Disclosures of your personal data", href: "#section-5" },
    { number: "6", title: "International transfers", href: "#section-6" },
    { number: "7", title: "Data security", href: "#section-7" },
    { number: "8", title: "Data retention", href: "#section-8" },
    { number: "9", title: "Your legal rights", href: "#section-9" },
    { number: "10", title: "Glossary", href: "#section-10" }
]

export default function TableOfContents() {
    const [activeSection, setActiveSection] = useState<string>("")

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Trigger when section is in middle of viewport
            threshold: 0
        }

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(`#${entry.target.id}`)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)

        // Observe all sections
        sections.forEach((section) => {
            const element = document.querySelector(section.href)
            if (element) {
                observer.observe(element)
            }
        })

        return () => {
            observer.disconnect()
        }
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <RiFileListLine className="size-6 text-orange-600" />
                Table of Contents
            </h2>
            <nav className="grid md:grid-cols-2 gap-3">
                {sections.map((item) => {
                    const isActive = activeSection === item.href
                    return (
                        <a
                            key={item.number}
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 ${
                                isActive
                                    ? "bg-orange-100 border border-orange-300 shadow-sm"
                                    : "hover:bg-white"
                            }`}
                        >
                            <span
                                className={`flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full text-sm font-semibold transition-colors ${
                                    isActive
                                        ? "bg-orange-600 text-white"
                                        : "bg-orange-100 text-orange-600"
                                }`}
                            >
                                {item.number}
                            </span>
                            <span
                                className={`transition-colors ${
                                    isActive
                                        ? "text-orange-700 font-medium"
                                        : "text-gray-700 hover:text-orange-600"
                                }`}
                            >
                                {item.title}
                            </span>
                        </a>
                    )
                })}
            </nav>
        </div>
    )
}
