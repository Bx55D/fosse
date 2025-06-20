"use client"

import { motion } from "framer-motion"
import { ArrowRight, Clock, Compass, Map, Users } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function AboutSection() {
	return (
		<section id="about" className="py-20 md:py-32 bg-muted/30">
			<div className="container">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="relative"
					>
						<div className="relative aspect-square md:aspect-[4/3] w-full max-w-lg mx-auto lg:mx-0">
							<div className="absolute inset-0 bg-primary/20 rounded-2xl blur-3xl" />
							<div className="absolute -right-4 -bottom-4 w-2/3 h-2/3 bg-primary rounded-2xl" />
							<div className="relative h-full w-full rounded-2xl overflow-hidden border-8 border-background shadow-xl">
								<Image
									src="/cc.webp?height=800&width=800"
									alt="Fosse Creative web design team in Melksham, Wiltshire - professional web developers"
									fill
									className="object-cover"
								/>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="flex flex-col gap-6"
					>
						<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border w-fit">
							<Users className="h-4 w-4 text-primary" />
							<span className="text-sm font-medium">About Us</span>
						</div>

						<h2 className="text-3xl md:text-4xl font-bold">
							Inspired by <span className="text-primary fosse-path">History</span>, Driven by Innovation
						</h2>

						<p className="text-muted-foreground">
							<strong>Fosse Creative</strong> takes its name from the historic Fosse Way, one of Britain's most important Roman roads
							that connected Exeter to Lincoln and runs right through our home county of Wiltshire. Just as this ancient 
							route provided a direct path through the heart of Britain, we create direct pathways to digital success 
							for businesses in Melksham and beyond.
						</p>

						<p className="text-muted-foreground">
							Based in Melksham, we serve local businesses across Wiltshire and the South West, creating digital 
							experiences that stand the test of time, just like the road that inspired our name.
						</p>

						<div className="grid grid-cols-1 min-[340px]:grid-cols-2 gap-6 mt-4">
							<div className="flex items-start gap-3">
								<div className="p-2 rounded-lg bg-primary/10 text-primary">
									<Compass className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-medium">Strategic Direction</h3>
									<p className="text-sm text-muted-foreground">Guiding your digital journey</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="p-2 rounded-lg bg-primary/10 text-primary">
									<Map className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-medium">Clear Path Forward</h3>
									<p className="text-sm text-muted-foreground">Straightforward solutions</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="p-2 rounded-lg bg-accent/10 text-accent">
									<Clock className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-medium">Lasting Results</h3>
									<p className="text-sm text-muted-foreground">Built to stand the test of time</p>
								</div>
							</div>

							<div className="flex items-start gap-3">
								<div className="p-2 rounded-lg bg-primary/10 text-primary">
									<Users className="h-5 w-5" />
								</div>
								<div>
									<h3 className="font-medium">Expert Team</h3>
									<p className="text-sm text-muted-foreground">Skilled professionals</p>
								</div>
							</div>
						</div>

					</motion.div>
				</div>
			</div>
		</section>
	)
}
