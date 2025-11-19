"use client"

import { RiArrowUpLine } from "@remixicon/react"
import { useEffect, useState } from "react"

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            // Show button when page is scrolled down 300px
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    aria-label="Back to top"
                >
                    <RiArrowUpLine className="size-6" />
                </button>
            )}
        </>
    )
}
