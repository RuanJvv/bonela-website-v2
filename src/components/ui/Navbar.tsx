"use client"

import { siteConfig } from "@/app/siteConfig"
import useScroll from "@/lib/useScroll"
import { cx } from "@/lib/utils"
import { RiCloseFill, RiMenuFill } from "@remixicon/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { BonelaLogo } from "../../../public/BonelaLogo"
import { Button } from "../Button"

export function NavBar() {
  const [open, setOpen] = React.useState(false)
  const scrolled = useScroll(15)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cx(
        "fixed inset-x-4 top-4 z-50 mx-auto flex max-w-6xl justify-center rounded-lg border border-transparent px-3 py-3 transition duration-300",
        scrolled || open
          ? "border-gray-200/50 bg-white/80 shadow-2xl shadow-black/5 backdrop-blur-sm"
          : "bg-white/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          <Link href={siteConfig.baseLinks.home} aria-label="Home" className="flex items-center gap-3">
            <span className="sr-only">Bonela Consulting Logo</span>
            <BonelaLogo className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-gray-900 leading-tight">Bonela Consulting</span>
            </div>
          </Link>
          <nav className="hidden sm:block md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-10 font-medium">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "px-2 py-1 transition-colors",
                    isActive(item.href)
                      ? "text-orange-600 font-semibold"
                      : "text-gray-900 hover:text-orange-600"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <Button
            asChild
            variant="secondary"
            className="hidden h-10 font-semibold sm:block"
          >
            <Link href="/contact">Get a Consultation</Link>
          </Button>
          <Button
            onClick={() => setOpen(!open)}
            variant="secondary"
            className="p-1.5 sm:hidden"
            aria-label={open ? "CloseNavigation Menu" : "Open Navigation Menu"}
          >
            {!open ? (
              <RiMenuFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            ) : (
              <RiCloseFill
                className="size-6 shrink-0 text-gray-900"
                aria-hidden
              />
            )}
          </Button>
        </div>
        <nav
          className={cx(
            "mt-6 flex flex-col gap-6 text-lg ease-in-out will-change-transform sm:hidden",
            open ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            {navItems.map((item) => (
              <li key={item.href} onClick={() => setOpen(false)}>
                <Link
                  href={item.href}
                  className={cx(
                    "transition-colors",
                    isActive(item.href)
                      ? "text-orange-600 font-semibold"
                      : "hover:text-orange-600"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button asChild variant="secondary" className="text-lg">
            <Link href="/contact">Get a Consultation</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
