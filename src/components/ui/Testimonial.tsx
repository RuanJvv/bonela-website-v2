import Image from "next/image"

export default function Testimonial() {
  return (
    <section className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl shadow-2xl shadow-[#366A79]/70">
      <div className="absolute inset-0">
        <Image
          alt="professional training environment"
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop&crop=entropy&auto=format&q=80"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="absolute top-[19rem] -right-14 w-[19rem] sm:top-[12rem] sm:right-3 sm:w-[23rem] md:top-[12rem] md:right-0 md:w-[25rem] lg:top-[16rem] lg:right-12 lg:w-[34rem]">
        <Image
          alt="team development workshop"
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1583&h=554&fit=crop&crop=entropy&auto=format&q=80"
          width={1583}
          height={554}
          className="animate-hover rounded-lg shadow-2xl"
        />
      </div>
      <div className="relative z-20 mb-20 p-8 sm:p-14 lg:p-24">
        <div>
          <blockquote className="relative max-w-2xl text-xl leading-relaxed tracking-tight text-white md:text-2xl lg:text-3xl">
            <p className="before:absolute before:top-0 before:right-full before:content-['\201C'] after:text-white/70 after:content-['\201D']">
              <strong className="font-semibold">
                Bonela Consulting transformed our team dynamics and leadership capabilities.
              </strong>{" "}
              <span className="text-white/90">
                Their people-focused approach and practical interventions have created
                lasting change in our organization. The psychometric assessments and
                development programs were exactly what we needed to unlock our potential.
              </span>
            </p>
          </blockquote>
        </div>
        <div className="mt-14 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <div className="relative shrink-0 rounded-full bg-white/15 p-0.5 ring-1 ring-white/20 backdrop-blur-sm">
            <Image
              alt="Sarah Mthembu"
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=56&h=56&fit=crop&crop=face&auto=format&q=80"
              width={56}
              height={56}
              className="rounded-full border object-cover"
            />
          </div>
          <div>
            <div className="text-base font-medium text-white">
              Sarah Mthembu
            </div>
            <div className="text-sm text-orange-300">
              HR Director, African Mining Solutions
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
