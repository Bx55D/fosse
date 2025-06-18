"use client"

import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { motion } from "framer-motion"
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, Loader2, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const contactFormSchema = z.object({
	name: z.string().min(1, "Name is required").max(100, "Name is too long"),
	email: z.string().email("Invalid email address"),
	subject: z.string().min(1, "Subject is required").max(200, "Subject is too long"),
	message: z.string().min(10, "Message must be at least 10 characters").max(2000, "Message is too long"),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactSection() {
	const { toast } = useToast()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isMessageSent, setIsMessageSent] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<ContactFormData>({
		resolver: zodResolver(contactFormSchema)
	})

	const onSubmit = async (data: ContactFormData) => {
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (!response.ok) {
				const error = await response.json()
				throw new Error(error.error || 'Failed to send message')
			}

			toast({
				title: "Message sent successfully!",
				description: "We'll get back to you as soon as possible.",
			})

			setIsMessageSent(true)
			reset()
		} catch (error) {
			console.error('Form submission error:', error)
			toast({
				title: "Failed to send message",
				description: error instanceof Error ? error.message : "Please try again later.",
				variant: "destructive",
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section id="contact" className="py-20 md:py-32 bg-muted/30">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border w-fit mx-auto mb-4">
						<MessageSquare className="h-4 w-4 text-primary" />
						<span className="text-sm font-medium">Get In Touch</span>
					</div>
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Ready to <span className="text-primary">Start Your Journey</span>?
					</h2>
					<p className="text-muted-foreground max-w-2xl mx-auto">
						Contact us today to discuss your project and discover how Fosse Creative can help you achieve your digital
						goals.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="lg:col-span-2"
					>
						<Card>
							<CardContent className="p-6">
								{isMessageSent ? (
									<motion.div
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.5 }}
										className="text-center space-y-6 py-8"
									>
										<div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
											<CheckCircle className="h-8 w-8 text-green-600" />
										</div>
										<div>
											<h3 className="font-semibold text-xl mb-2">Message sent successfully!</h3>
											<p className="text-muted-foreground">
												Thank you for reaching out. We'll get back to you as soon as possible, usually within 24 hours.
											</p>
										</div>
										<Button
											variant="outline"
											onClick={() => setIsMessageSent(false)}
										>
											Send another message
										</Button>
									</motion.div>
								) : (
									<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<Label htmlFor="name">Name</Label>
											<Input
												id="name"
												placeholder="Your name"
												{...register("name")}
												className={errors.name ? "border-destructive" : ""}
											/>
											{errors.name && (
												<p className="text-sm text-destructive">{errors.name.message}</p>
											)}
										</div>
										<div className="space-y-2">
											<Label htmlFor="email">Email</Label>
											<Input
												id="email"
												type="email"
												placeholder="Your email"
												{...register("email")}
												className={errors.email ? "border-destructive" : ""}
											/>
											{errors.email && (
												<p className="text-sm text-destructive">{errors.email.message}</p>
											)}
										</div>
									</div>
									<div className="space-y-2">
										<Label htmlFor="subject">Subject</Label>
										<Input
											id="subject"
											placeholder="Project inquiry"
											{...register("subject")}
											className={errors.subject ? "border-destructive" : ""}
										/>
										{errors.subject && (
											<p className="text-sm text-destructive">{errors.subject.message}</p>
										)}
									</div>
									<div className="space-y-2">
										<Label htmlFor="message">Message</Label>
										<Textarea
											id="message"
											placeholder="Tell us about your project..."
											className={`min-h-32 ${errors.message ? "border-destructive" : ""}`}
											{...register("message")}
										/>
										{errors.message && (
											<p className="text-sm text-destructive">{errors.message.message}</p>
										)}
									</div>
									<Button
										type="submit"
										className="w-full md:w-auto group"
										disabled={isSubmitting}
									>
										{isSubmitting ? (
											<>
												<Loader2 className="mr-2 h-4 w-4 animate-spin" />
												Sending...
											</>
										) : (
											<>
												Send Message
												<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
											</>
										)}
									</Button>
								</form>
							)}
							</CardContent>
						</Card>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<div className="space-y-6">
							<Card>
								<CardContent className="p-4 min-[340px]:p-6 flex items-start gap-3 min-[340px]:gap-4">
									<div className="p-2 min-[340px]:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
										<Mail className="h-5 w-5 min-[340px]:h-6 min-[340px]:w-6" />
									</div>
									<div className="min-w-0 flex-1">
										<h3 className="font-medium text-base min-[340px]:text-lg mb-1">Email Us</h3>
										<p className="text-muted-foreground mb-2 text-sm min-[340px]:text-base">We'll respond within 24 hours</p>
										<a href="mailto:hello@fossecreative.com" className="text-primary hover:underline text-sm min-[340px]:text-base break-all">
											hello@fossecreative.com
										</a>
									</div>
								</CardContent>
							</Card>
							<Card>
								<CardContent className="p-4 min-[340px]:p-6 flex items-start gap-3 min-[340px]:gap-4">
									<div className="p-2 min-[340px]:p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
										<Phone className="h-5 w-5 min-[340px]:h-6 min-[340px]:w-6" />
									</div>
									<div className="min-w-0 flex-1">
										<h3 className="font-medium text-base min-[340px]:text-lg mb-1">Call Us</h3>
										<p className="text-muted-foreground mb-2 text-sm min-[340px]:text-base">Mon-Sun from 9am to 5pm</p>
										<a href="tel:+447555340022" className="text-primary hover:underline text-sm min-[340px]:text-base">
											+44 7555 340 022
										</a>
									</div>
								</CardContent>
							</Card>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
