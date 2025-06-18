import Link from "next/link"
import { cn } from "@/lib/utils"

interface LogoProps {
	className?: string
}

export function Logo({ className }: LogoProps) {
	return (
		<Link href="/" className={cn("flex items-center gap-2", className)}>
			<img src={"/logo.png"} width={32} height={32}></img>
			<span className="font-heading text-xl">
				<span className="text-primary">Fosse</span> Creative
			</span>
		</Link>
	)
}
