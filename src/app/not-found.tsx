import { Button } from "@/components/Button"
import Link from "next/link"
import { BonelaLogo } from "../../public/BonelaLogo"
import { siteConfig } from "./siteConfig"

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <Link href={siteConfig.baseLinks.home} className="flex items-center gap-3">
        <BonelaLogo className="h-12 w-12" />
        <div className="flex flex-col">
          <span className="text-xl font-semibold text-gray-900 leading-tight">Bonela</span>
          <span className="text-base text-gray-600 leading-tight">Consulting</span>
        </div>
      </Link>
      <p className="mt-8 text-4xl font-semibold text-orange-600 sm:text-5xl">
        Error 404
      </p>
      <h1 className="mt-4 text-2xl font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <Button asChild className="group mt-8" variant="secondary">
        <Link href={siteConfig.baseLinks.home}>Go to the home page</Link>
      </Button>
    </div>
  )
}