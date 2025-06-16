"use client"
import {
    RiBarChartLine,
    RiBrainLine,
    RiFileTextLine,
    RiUser3Line,
} from "@remixicon/react"

export const PsychometricWorkflow = () => {
    const stages = [
        {
            id: 1,
            title: "Candidate Input",
            description: "Data collection from candidates through digital forms and interfaces",
            icon: RiUser3Line,
            color: "blue",
        },
        {
            id: 2,
            title: "Assessment Process",
            description: "AI-powered cognitive and personality evaluation using advanced algorithms",
            icon: RiBrainLine,
            color: "purple",
        },
        {
            id: 3,
            title: "Data Analysis",
            description: "Advanced analytics and pattern recognition for comprehensive insights",
            icon: RiBarChartLine,
            color: "orange",
        },
        {
            id: 4,
            title: "Insight Delivery",
            description: "Comprehensive reports and actionable recommendations for decision-making",
            icon: RiFileTextLine,
            color: "emerald",
        },
    ]

    const getColorClasses = (color: string) => {
        const colorMap = {
            blue: {
                bg: "bg-blue-400/10",
                border: "border-blue-400/20",
                ring: "ring-blue-400/30",
                text: "text-blue-400",
                icon: "text-blue-400",
            },
            purple: {
                bg: "bg-purple-400/10",
                border: "border-purple-400/20",
                ring: "ring-purple-400/30",
                text: "text-purple-400",
                icon: "text-purple-400",
            },
            orange: {
                bg: "bg-orange-400/10",
                border: "border-orange-400/20",
                ring: "ring-orange-400/30",
                text: "text-orange-400",
                icon: "text-orange-400",
            },
            emerald: {
                bg: "bg-emerald-400/10",
                border: "border-emerald-400/20",
                ring: "ring-emerald-400/30",
                text: "text-emerald-400",
                icon: "text-emerald-400",
            },
        }
        return colorMap[color as keyof typeof colorMap]
    }

    return (
        <section
            id="psychometric-workflow"
            aria-labelledby="workflow-title"
            className="relative flex w-full max-w-6xl scroll-my-24 flex-col items-center justify-center rounded-2xl bg-gray-950 px-10 py-16 shadow-2xl shadow-black/50 sm:px-16 md:px-28 lg:mx-auto"
        >
            <div className="text-base font-semibold tracking-tight text-orange-400 sm:text-lg">
                Assessment Workflow
            </div>
            <h2
                id="workflow-title"
                className="mt-6 max-w-[700px] text-center text-2xl font-semibold tracking-tight text-balance text-white md:text-5xl"
            >
                Psychometric Assessment Pipeline
            </h2>
            <p className="mt-4 max-w-2xl text-center text-base text-balance text-gray-400 sm:mt-8 sm:text-xl">
                Streamlined workflow from candidate input to actionable insights, powered by advanced analytics and AI-driven assessment algorithms.
            </p>

            {/* Workflow Steps */}
            <div className="mt-16 w-full max-w-5xl">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {stages.map((stage, index) => {
                        const colors = getColorClasses(stage.color)
                        const Icon = stage.icon

                        return (
                            <div key={stage.id} className="relative">
                                {/* Connection line to next stage */}
                                {index < stages.length - 1 && (
                                    <div className="absolute top-8 left-full z-0 hidden h-0.5 w-8 bg-gradient-to-r from-gray-600 to-transparent lg:block" />
                                )}

                                <div className={`relative rounded-xl border ${colors.border} ${colors.bg} p-6 backdrop-blur-sm`}>
                                    {/* Stage number */}
                                    <div className={`absolute -top-3 -left-3 flex size-8 items-center justify-center rounded-full ${colors.bg} ring-2 ${colors.ring} backdrop-blur-md`}>
                                        <span className={`text-sm font-bold ${colors.text}`}>
                                            {stage.id}
                                        </span>
                                    </div>

                                    {/* Icon */}
                                    <div className={`mb-4 flex size-12 items-center justify-center rounded-lg ${colors.bg} ring-1 ${colors.ring}`}>
                                        <Icon className={`size-6 ${colors.icon}`} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-2 text-lg font-semibold text-white">
                                        {stage.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {stage.description}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Process Flow Indicator */}
                <div className="mt-12 flex items-center justify-center">
                    <div className="flex items-center space-x-2">
                        <div className="text-sm font-medium text-gray-400">Process Flow</div>
                        <div className="flex items-center space-x-1">
                            {stages.map((_, index) => (
                                <div key={index} className="flex items-center">
                                    <div className="size-2 rounded-full bg-gray-600" />
                                    {index < stages.length - 1 && (
                                        <div className="h-0.5 w-8 bg-gradient-to-r from-gray-600 to-gray-700" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 