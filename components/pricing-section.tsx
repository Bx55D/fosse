"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Check, ArrowRight, Star } from "lucide-react"

export function PricingSection() {
	return (
		<section id="pricing" className="py-20 md:py-32 bg-muted/50">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center max-w-3xl mx-auto mb-16"
				>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Simple, Transparent Pricing
					</h2>
					<p className="text-lg text-muted-foreground">
						No upfront costs. Pay as you go with everything included.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
					{/* Main Package */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
					>
						<Card className="relative h-full border-primary shadow-lg">
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 whitespace-nowrap">
									<Star className="h-4 w-4" />
									Most Popular
								</div>
							</div>
							<CardHeader className="text-center pb-8 pt-8">
								<CardTitle className="text-2xl mb-2">Complete Package</CardTitle>
								<CardDescription className="text-base">
									Everything you need for a professional online presence
								</CardDescription>
								<div className="mt-6">
									<div className="text-4xl font-bold">£100</div>
									<div className="text-muted-foreground">per month</div>
									<div className="text-sm text-muted-foreground mt-1">
										No upfront payment required
									</div>
								</div>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>Custom website design & development</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>Search Engine Optimization (SEO)</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>Google Business management</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>Domain management & hosting</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>Regular updates & maintenance</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>24/7 support & monitoring</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>Performance optimization</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-primary shrink-0" />
										<span>Analytics & reporting</span>
									</div>
								</div>
								<Button className="w-full group" size="lg">
									Get Started Today
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
								<p className="text-xs text-muted-foreground text-center">
									Cancel anytime. Only pay while your website is active.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* Premium Add-ons */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Card className="h-full">
							<CardHeader className="text-center pb-8">
								<CardTitle className="text-2xl mb-2">Premium Add-ons</CardTitle>
								<CardDescription className="text-base">
									Enhanced features for growing businesses
								</CardDescription>
								<div className="mt-6">
									<div className="text-3xl font-bold">Custom Quote</div>
									<div className="text-muted-foreground">Tailored to your needs</div>
								</div>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="space-y-3">
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>E-commerce functionality</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>Content Management Systems (CMS)</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>Custom dashboards & portals</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>Mobile applications (iOS/Android)</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>Advanced integrations & APIs</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>Multi-site management</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>Custom reporting & analytics</span>
									</div>
									<div className="flex items-center gap-3">
										<Check className="h-5 w-5 text-secondary shrink-0" />
										<span>Enterprise-level support</span>
									</div>
								</div>
								<Button variant="outline" className="w-full group" size="lg">
									Request Custom Quote
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
								<p className="text-xs text-muted-foreground text-center">
									Speak to our team about your specific requirements.
								</p>
							</CardContent>
						</Card>
					</motion.div>
				</div>

				{/* Trust indicators */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
					viewport={{ once: true }}
					className="text-center mt-16"
				>
					<div className="flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
						<div className="flex items-center gap-2">
							<Check className="h-4 w-4 text-primary" />
							<span>No long-term contracts</span>
						</div>
						<div className="flex items-center gap-2">
							<Check className="h-4 w-4 text-primary" />
							<span>Cancel anytime</span>
						</div>
						<div className="flex items-center gap-2">
							<Check className="h-4 w-4 text-primary" />
							<span>Full transparency</span>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	)
}
