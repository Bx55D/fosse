import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <div className="relative w-8 h-8 bg-primary rounded-md flex items-center justify-center overflow-hidden">
        <div className="absolute w-6 h-1 bg-secondary rotate-45 translate-y-0.5"></div>
        <div className="absolute w-6 h-1 bg-secondary -rotate-45 -translate-y-0.5"></div>
      </div>
      <span className="font-heading text-xl">
        <span className="text-primary">Fosse</span> Creative
      </span>
    </Link>
  )
}
