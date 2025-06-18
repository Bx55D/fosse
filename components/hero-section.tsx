"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Code, Compass, Layers, Navigation, Zap } from "lucide-react"
import { useState, useEffect, useRef } from "react"

export function HeroSection() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const compassRef = useRef<HTMLDivElement>(null)
	const currentAngleRef = useRef<number>(0)
	const targetAngleRef = useRef<number>(0)
	const animationFrameRef = useRef<number>()

	useEffect(() => {
		const lerp = (start: number, end: number, factor: number) => {
			return start + (end - start) * factor
		}

		const animate = () => {
			if (compassRef.current) {
				const diff = targetAngleRef.current - currentAngleRef.current
				currentAngleRef.current = lerp(currentAngleRef.current, targetAngleRef.current, 0.1)

				// Only continue animating if there's a meaningful difference
				if (Math.abs(diff) > 0.1) {
					compassRef.current.style.transform = `rotate(${currentAngleRef.current}deg)`
					animationFrameRef.current = requestAnimationFrame(animate)
				} else {
					// Snap to final position
					currentAngleRef.current = targetAngleRef.current
					compassRef.current.style.transform = `rotate(${currentAngleRef.current}deg)`
					// Clear the animation frame reference so it can be restarted
					animationFrameRef.current = undefined
				}
			}
		}

		const handleMouseMove = (e: MouseEvent) => {
			if (compassRef.current) {
				const rect = compassRef.current.getBoundingClientRect()
				const centerX = rect.left + rect.width / 2
				const centerY = rect.top + rect.height / 2

				const deltaX = e.clientX - centerX
				const deltaY = e.clientY - centerY
				let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)

				// Adjust angle so the arrow tip points at the mouse
				angle += 45

				// Calculate the shortest rotation path
				let angleDiff = angle - targetAngleRef.current

				// Normalize the angle difference to be between -180 and 180
				while (angleDiff > 180) angleDiff -= 360
				while (angleDiff < -180) angleDiff += 360

				// Update target angle
				targetAngleRef.current = targetAngleRef.current + angleDiff

				// Start animation if not already running
				if (!animationFrameRef.current) {
					animationFrameRef.current = requestAnimationFrame(animate)
				}
			}
		}

		window.addEventListener('mousemove', handleMouseMove)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			if (animationFrameRef.current) {
				cancelAnimationFrame(animationFrameRef.current)
			}
		}
	}, [])
	return (
		<section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">

			{/* Floating geometric shapes */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<motion.div
					className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full"
					animate={{ y: [0, -20, 0] }}
					transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute top-40 right-16 w-6 h-6 bg-secondary/20 rotate-45"
					animate={{ y: [0, 15, 0], rotate: [45, 90, 45] }}
					transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
				/>
				<motion.div
					className="absolute bottom-32 left-20 w-3 h-3 bg-primary/30 rounded-full"
					animate={{ y: [0, -15, 0] }}
					transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
				/>
				<motion.div
					className="absolute bottom-40 right-32 w-5 h-5 bg-secondary/25 rounded-sm"
					animate={{ y: [0, 20, 0], rotate: [0, 180, 360] }}
					transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
				/>

				{/* Additional floating elements */}
				<motion.div
					className="absolute top-32 left-32 w-3 h-3 bg-primary/15 rounded-full"
					animate={{ y: [0, -25, 0], x: [0, 10, 0] }}
					transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
				/>
				<motion.div
					className="absolute top-16 right-40 w-2 h-2 bg-secondary/30 rounded-full"
					animate={{ y: [0, 18, 0] }}
					transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
				/>
				<motion.div
					className="absolute top-60 left-16 w-4 h-4 bg-primary/25 rounded-full"
					animate={{ y: [0, -12, 0], scale: [1, 1.1, 1] }}
					transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
				/>
				<motion.div
					className="absolute bottom-20 right-20 w-3 h-3 bg-secondary/20 rounded-full"
					animate={{ y: [0, -18, 0], x: [0, -8, 0] }}
					transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 4 }}
				/>
				<motion.div
					className="absolute top-24 left-40 w-2 h-2 bg-primary/35 rounded-full"
					animate={{ y: [0, 22, 0] }}
					transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
				/>
				<motion.div
					className="absolute bottom-16 left-8 w-5 h-5 bg-secondary/15 rounded-full"
					animate={{ y: [0, -16, 0], scale: [1, 0.8, 1] }}
					transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
				/>
				<motion.div
					className="absolute top-52 right-8 w-3 h-3 bg-primary/20 rounded-full"
					animate={{ y: [0, 14, 0], x: [0, 6, 0] }}
					transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
				/>
				<motion.div
					className="absolute bottom-24 right-48 w-2 h-2 bg-secondary/25 rounded-full"
					animate={{ y: [0, -20, 0] }}
					transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 2.8 }}
				/>

				{/* More scattered elements across the full hero */}
				<motion.div
					className="absolute top-28 left-1/4 w-2 h-2 bg-primary/25 rounded-full"
					animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
					transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
				/>
				<motion.div
					className="absolute top-44 right-1/4 w-3 h-3 bg-secondary/20 rounded-full"
					animate={{ y: [0, 12, 0] }}
					transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 3.8 }}
				/>
				<motion.div
					className="absolute bottom-28 left-1/3 w-4 h-4 bg-primary/15 rounded-full"
					animate={{ y: [0, -18, 0], scale: [1, 1.2, 1] }}
					transition={{ duration: 8.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
				/>
				<motion.div
					className="absolute top-36 right-1/3 w-2 h-2 bg-secondary/30 rounded-full"
					animate={{ y: [0, 20, 0], x: [0, -4, 0] }}
					transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 4.2 }}
				/>
				<motion.div
					className="absolute bottom-36 right-1/2 w-3 h-3 bg-primary/20 rounded-full"
					animate={{ y: [0, -14, 0] }}
					transition={{ duration: 6.8, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
				/>
				<motion.div
					className="absolute top-48 left-1/2 w-2 h-2 bg-secondary/25 rounded-full"
					animate={{ y: [0, 16, 0], scale: [1, 0.9, 1] }}
					transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
				/>
				<motion.div
					className="absolute bottom-44 left-3/4 w-3 h-3 bg-primary/18 rounded-full"
					animate={{ y: [0, -22, 0], x: [0, 8, 0] }}
					transition={{ duration: 9.5, repeat: Infinity, ease: "easeInOut", delay: 3.2 }}
				/>
				<motion.div
					className="absolute top-20 right-3/4 w-4 h-4 bg-secondary/15 rounded-full"
					animate={{ y: [0, 18, 0] }}
					transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
				/>
				<motion.div
					className="absolute top-56 left-2/3 w-2 h-2 bg-primary/28 rounded-full"
					animate={{ y: [0, -10, 0], x: [0, -6, 0] }}
					transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
				/>
				<motion.div
					className="absolute bottom-20 right-2/3 w-3 h-3 bg-secondary/22 rounded-full"
					animate={{ y: [0, 15, 0], scale: [1, 1.15, 1] }}
					transition={{ duration: 7.8, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
				/>
				<motion.div
					className="absolute top-32 left-3/5 w-2 h-2 bg-primary/32 rounded-full"
					animate={{ y: [0, -20, 0] }}
					transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 2.9 }}
				/>
				<motion.div
					className="absolute bottom-32 right-3/5 w-4 h-4 bg-secondary/18 rounded-full"
					animate={{ y: [0, 24, 0], x: [0, 12, 0] }}
					transition={{ duration: 8.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
				/>
				<motion.div
					className="absolute top-40 left-4/5 w-3 h-3 bg-primary/22 rounded-full"
					animate={{ y: [0, -16, 0], scale: [1, 0.85, 1] }}
					transition={{ duration: 6.3, repeat: Infinity, ease: "easeInOut", delay: 3.6 }}
				/>
				<motion.div
					className="absolute bottom-48 right-4/5 w-2 h-2 bg-secondary/28 rounded-full"
					animate={{ y: [0, 14, 0] }}
					transition={{ duration: 5.9, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
				/>
				<motion.div
					className="absolute top-24 left-1/5 w-3 h-3 bg-primary/26 rounded-full"
					animate={{ y: [0, 19, 0], x: [0, -7, 0] }}
					transition={{ duration: 7.6, repeat: Infinity, ease: "easeInOut", delay: 4.8 }}
				/>
				<motion.div
					className="absolute bottom-26 right-1/5 w-2 h-2 bg-secondary/24 rounded-full"
					animate={{ y: [0, -12, 0], scale: [1, 1.3, 1] }}
					transition={{ duration: 6.1, repeat: Infinity, ease: "easeInOut", delay: 2.4 }}
				/>
			</div>

			<div className="container relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						className="flex flex-col gap-6"
					>
						<h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
							<strong>You've Got The <span className="text-primary relative">
								Wheel
							</span></strong><br /> We've Got The <span className="text-primary relative">
								Map
								<motion.div
									className="absolute -bottom-1 left-0 h-1 bg-secondary rounded-full"
									initial={{ width: 0 }}
									animate={{ width: "100%" }}
									transition={{ duration: 0.8, delay: 1.2 }}
								/>
							</span>
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
							{/* Central hub with radiating connections */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="relative w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-xl">
									<div
										ref={compassRef}
										className="transition-transform duration-100 ease-out"
									>
										<Navigation className="h-8 w-8 text-primary-foreground" />
									</div>
								</div>
							</div>

							{/* Floating cards positioned around the circle */}
							<motion.div
								className="absolute top-8 left-8 bg-card border shadow-lg p-4 rounded-xl w-28 h-24 flex flex-col items-center justify-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.8 }}
							>
								<Code className="h-6 w-6 text-primary mb-2" />
								<h3 className="font-medium text-xs text-center">Bespoke</h3>
							</motion.div>

							<motion.div
								className="absolute top-8 right-8 bg-card border shadow-lg p-4 rounded-xl w-28 h-24 flex flex-col items-center justify-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.0 }}
							>
								<Zap className="h-6 w-6 text-secondary mb-2" />
								<h3 className="font-medium text-xs text-center">Fast</h3>
							</motion.div>

							<motion.div
								className="absolute bottom-8 left-8 bg-card border shadow-lg p-4 rounded-xl w-24 h-20 flex flex-col items-center justify-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.2 }}
							>
								<Layers className="h-6 w-6 text-accent mb-2" />
								<h3 className="font-medium text-xs text-center">Comprehensive</h3>
							</motion.div>

							<motion.div
								className="absolute bottom-8 right-8 bg-card border shadow-lg p-4 rounded-xl w-24 h-20 flex flex-col items-center justify-center"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.4 }}
							>
								<Compass className="h-6 w-6 text-primary mb-2" />
								<h3 className="font-medium text-xs text-center">Expert</h3>
							</motion.div>

						</div>
					</motion.div>
				</div>
			</div>

		</section>
	)
}
