"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Compass, Layers } from "lucide-react"

export function HeroSection() {
	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
			<div className="container relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col gap-6"
					>
						<h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
							You've Got The <span className="gradient-text">Wheel</span><br /> We've Got The <span className="gradient-text">Map</span>
						</h1>

						<p className="text-lg text-muted-foreground max-w-lg">
							Do what you do best. We'll take care of everything else.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 mt-4">
							<Button size="lg" className="group">
								Get Started
								<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
							</Button>
							<Button size="lg" variant="outline">
								View Our Work
							</Button>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="relative"
					>
						<div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg mx-auto">
							<div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-3xl" />
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="grid grid-cols-2 gap-4 w-full max-w-md">
									<div className="flex flex-col gap-4">
										<div className="bg-card border shadow-lg p-4 rounded-xl animate-float">
											<Code className="h-8 w-8 text-primary mb-2" />
											<h3 className="font-medium">Bespoke</h3>
										</div>
										<div
											className="bg-card border shadow-lg p-4 rounded-xl animate-float"
											style={{ animationDelay: "1s" }}
										>
											<Layers className="h-8 w-8 text-accent mb-2" />
											<h3 className="font-medium">Comprehensive</h3>
										</div>
									</div>
									<div className="flex flex-col gap-4 mt-8">
										<div
											className="bg-card border shadow-lg p-4 rounded-xl animate-float"
											style={{ animationDelay: "0.5s" }}
										>
											<Compass className="h-8 w-8 text-secondary mb-2" />
											<h3 className="font-medium">Knowledgeable</h3>
										</div>

									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-full max-h-6xl">
				<div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
			</div>
		</section>
	)
}
