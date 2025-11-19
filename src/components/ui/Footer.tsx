import {
  RiCupFill,
  RiFacebookFill,
  RiHeartFill,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterXFill,
} from "@remixicon/react"
import Link from "next/link"
import { BonelaLogo } from "../../../public/BonelaLogo"
const CURRENT_YEAR = new Date().getFullYear()

const Footer = () => {
  const sections = {
    services: {
      title: "Our Services",
      items: [
        { label: "People Development Workshops", href: "/services#people-development" },
        { label: "Organisational Effectiveness", href: "/services#organisational-effectiveness" },
        { label: "Psychometric Assessments", href: "/services#psychometric-assessments" },
        { label: "Custom Solutions", href: "/services#custom-solutions" },
        { label: "Leadership Development", href: "/services" },
        { label: "Team Building", href: "/services" },
      ],
    },
    company: {
      title: "Company",
      items: [
        { label: "About Us", href: "/about" },
        { label: "Our Approach", href: "/about#approach" },
        { label: "B-BBEE Certification", href: "/about#bbee" },
        { label: "Mission & Values", href: "/about#mission" },
        { label: "What Sets Us Apart", href: "/about#differentiators" },
      ],
    },
    resources: {
      title: "Resources",
      items: [
        { label: "Contact Us", href: "/contact" },
        { label: "Get a Consultation", href: "/contact" },
        { label: "Service Inquiry", href: "/contact" },
        { label: "Support", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "#" },
      ],
    },
    solutions: {
      title: "Solutions",
      items: [
        { label: "Coaching & Mentoring", href: "/services" },
        { label: "Emotional Intelligence", href: "/services" },
        { label: "Diversity & Inclusion", href: "/services" },
        { label: "Digital Citizenship", href: "/services" },
        { label: "Microsoft Office Training", href: "/services" },
        { label: "Self-Leadership", href: "/services" },
      ],
    },
  }

  return (
    <footer id="footer" className="w-full bg-gray-50">
      {/* Decorative Pattern */}
      <div className="w-full px-4 xl:px-0">
        <div className="mx-auto max-w-6xl">
          <svg className="mb-10 h-20 w-full border-y border-dashed border-gray-300 stroke-gray-300">
            <defs>
              <pattern
                id="diagonal-footer-pattern"
                patternUnits="userSpaceOnUse"
                width="64"
                height="64"
              >
                {Array.from({ length: 17 }, (_, i) => {
                  const offset = i * 8
                  return (
                    <path
                      key={i}
                      d={`M${-106 + offset} 110L${22 + offset} -18`}
                      stroke=""
                      strokeWidth="1"
                    />
                  )
                })}
              </pattern>
            </defs>
            <rect
              stroke="none"
              width="100%"
              height="100%"
              fill="url(#diagonal-footer-pattern)"
            />
          </svg>
        </div>
      </div>

      {/* Footer Content */}
      <div className="w-full px-4 xl:px-0 pb-8">
        <div className="mx-auto max-w-6xl">
          {/* Footer Sections Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {Object.entries(sections).map(([key, section]) => (
              <div key={key} className="space-y-4">
                <h3 className="font-medium text-gray-900 text-sm">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.label} className="text-sm">
                      <Link
                        href={item.href}
                        className="text-gray-600 transition-colors duration-200 hover:text-orange-600"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Company Information - Bottom Section */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              {/* Logo and Description */}
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                <Link
                  href="/"
                  className="flex items-center gap-3 font-medium text-gray-700 select-none"
                >
                  <BonelaLogo className="h-12 w-12" />
                  <div className="flex flex-col">
                    <span className="text-xl font-semibold text-gray-900 leading-tight">Bonela</span>
                    <span className="text-base text-gray-600 leading-tight">Consulting</span>
                  </div>
                  <span className="sr-only">Bonela Consulting Logo (go home)</span>
                </Link>

                <div className="lg:max-w-md">
                  <p className="text-sm text-gray-600 mb-3">
                    A truly South African company transforming individuals and teams across Africa through life-changing learning experiences and evidence-based people solutions.
                  </p>

                  {/* Social Links */}
                  <div className="flex items-center gap-1">
                    <Link
                      href="mailto:info@bonelaconsulting.com"
                      className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                      title="Email us"
                    >
                      <RiMailFill className="size-4" />
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                      title="LinkedIn"
                    >
                      <RiLinkedinFill className="size-4" />
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                      title="Twitter"
                    >
                      <RiTwitterXFill className="size-4" />
                    </Link>
                    <Link
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-sm p-2 text-gray-700 transition-colors duration-200 hover:bg-gray-200 hover:text-gray-900"
                      title="Facebook"
                    >
                      <RiFacebookFill className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Copyright and Contact Info */}
              <div className="text-sm text-gray-700 lg:text-right">
                <div className="font-medium">&copy; {CURRENT_YEAR} Bonela Consulting</div>
                <div className="text-xs text-gray-500 mt-1">Level-2 B-BBEE People Solutions Company</div>
                <div className="text-xs text-gray-500 mt-1 italic">&ldquo;Where people and technology meet.&rdquo;</div>
              </div>
            </div>

            {/* Developer Credit - Full Width */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <div className="text-sm text-gray-400 flex items-center justify-center gap-1">
                <span className="font-medium">Crafted with</span>
                <RiHeartFill className="size-3 text-gray-900" />
                <span className="font-medium">and</span>
                <RiCupFill className="size-3 text-gray-900" />
                <span className="font-medium">by</span>
                <Link
                  href="https://inventixx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium"
                >
                  Inventixx
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer