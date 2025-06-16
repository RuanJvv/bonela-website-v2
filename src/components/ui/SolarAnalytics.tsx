import {
  RiBrainLine,
  RiGlobalLine,
  RiPresentationLine,
  RiTeamLine,
} from "@remixicon/react"
import { Divider } from "../Divider"
import AnalyticsIllustration from "./AnalyticsIllustration"
import { StickerCard } from "./StickerCard"

export function SolarAnalytics() {
  return (
    <section
      aria-labelledby="bonela-services"
      className="relative mx-auto w-full max-w-6xl overflow-hidden"
    >
      <div>
        <h2
          id="bonela-services"
          className="relative scroll-my-24 text-lg font-semibold tracking-tight text-orange-500"
        >
          Our Services
          <div className="absolute top-1 -left-[8px] h-5 w-[3px] rounded-r-sm bg-orange-500" />
        </h2>
        <p className="mt-2 max-w-lg text-3xl font-semibold tracking-tighter text-balance text-gray-900 md:text-4xl">
          Comprehensive people solutions designed for lasting impact
        </p>
      </div>
      <div className="*:pointer-events-none">
        <AnalyticsIllustration />
      </div>
      <Divider className="mt-0"></Divider>
      <div className="grid grid-cols-1 grid-rows-2 gap-6 md:grid-cols-4 md:grid-rows-1">
        <StickerCard
          Icon={RiPresentationLine}
          title="People Development Workshops"
          description="Over 80 courses across leadership, management, soft skills, and digital tools delivered in-person, virtual, or blended formats."
        />
        <StickerCard
          Icon={RiTeamLine}
          title="Organisational Effectiveness"
          description="Strategic interventions to realign people practices, build team dynamics, and transform organizational culture."
        />
        <StickerCard
          Icon={RiBrainLine}
          title="Psychometric Assessments"
          description="HPCSA-compliant assessments including personality profiles, cognitive evaluations, and job-fit diagnostics."
        />
        <StickerCard
          Icon={RiGlobalLine}
          title="Custom Solutions"
          description="Tailor-made organizational and talent development programs designed for your unique business needs."
        />
      </div>
    </section>
  )
}
