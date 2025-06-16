import {
  RiBrainLine,
  RiCheckLine,
  RiGlobalLine,
  RiPresentationLine,
  RiStarLine,
  RiTeamLine
} from "@remixicon/react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../Button"

export function CallToAction() {
  return (
    <section aria-labelledby="cta-title" className="mx-auto max-w-6xl">
      <div className="grid items-center gap-12 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <h2
            id="cta-title"
            className="scroll-my-60 text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl"
          >
            Ready to transform your people?
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">
            As a Level-2 B-BBEE People Solutions company, we blend local South African pride with global intelligence to deliver sustainable, life-changing learning experiences across Africa.
          </p>

          {/* Key Differentiators */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start space-x-3">
              <RiCheckLine className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">80+ courses</span> across leadership, management, soft skills, and digital tools
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <RiCheckLine className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">HPCSA-compliant</span> psychometric assessments by registered professionals
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <RiCheckLine className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Flexible delivery</span> - in-person, virtual, or blended learning formats
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <RiCheckLine className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-semibold">Custom solutions</span> strategically aligned to your business goals
              </p>
            </div>
          </div>

          {/* Service Icons */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
              <RiPresentationLine className="w-6 h-6 text-orange-600" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">People Development</p>
                <p className="text-xs text-gray-600">Workshops & Training</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
              <RiTeamLine className="w-6 h-6 text-green-600" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Org Effectiveness</p>
                <p className="text-xs text-gray-600">Strategic Interventions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
              <RiBrainLine className="w-6 h-6 text-blue-600" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Psychometric Tests</p>
                <p className="text-xs text-gray-600">HPCSA Compliant</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
              <RiGlobalLine className="w-6 h-6 text-purple-600" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Custom Solutions</p>
                <p className="text-xs text-gray-600">Tailored Programs</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <RiStarLine className="w-5 h-5 text-yellow-500" />
              <p className="font-semibold text-gray-900">Why Choose Bonela Consulting?</p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Long-term, trust-based client relationships • Co-designed, practical interventions •
              Experienced facilitators focused on the <em>how</em>, not just the <em>what</em> •
              Continuous research and product innovation
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <Button asChild className="text-md">
              <Link href="/contact">Get in touch</Link>
            </Button>
            <Button asChild className="text-md" variant="secondary">
              <Link href="/services">Explore Services</Link>
            </Button>
          </div>

          <p className="mt-4 text-sm text-gray-500 italic">
            &ldquo;Where people and technology meet.&rdquo;
          </p>
        </div>

        <div className="relative isolate rounded-xl sm:col-span-3 sm:h-full">
          <Image
            aria-hidden
            alt="Professional team development session"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=1000&fit=crop&crop=entropy&auto=format&q=80"
            height={1000}
            width={1000}
            className="absolute inset-0 -z-10 rounded-2xl blur-xl"
          />
          <Image
            alt="Professional team development session"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&h=1000&fit=crop&crop=entropy&auto=format&q=80"
            height={1000}
            width={1000}
            className="relative z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  )
}

export default CallToAction
