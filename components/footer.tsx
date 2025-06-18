"use client"

import Link from "next/link"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Facebook, Instagram, Linkedin, Twitter, Loader2, CheckCircle } from "lucide-react"
import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

const newsletterSchema = z.object({
	email: z.string().email("Invalid email address"),
})

type NewsletterFormData = z.infer<typeof newsletterSchema>

export function Footer() {
	const { toast } = useToast()
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSubscribed, setIsSubscribed] = useState(false)

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors }
	} = useForm<NewsletterFormData>({
		resolver: zodResolver(newsletterSchema)
	})

	const onSubmit = async (data: NewsletterFormData) => {
		setIsSubmitting(true)

		try {
			const response = await fetch('/api/newsletter', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			})

			if (!response.ok) {
				const error = await response.json()
				throw new Error(error.error || 'Failed to subscribe')
			}

			toast({
				title: "Successfully subscribed!",
				description: "Check your email for a confirmation message.",
			})

			setIsSubscribed(true)
			reset()
		} catch (error) {
			console.error('Newsletter subscription error:', error)
			toast({
				title: "Failed to subscribe",
				description: error instanceof Error ? error.message : "Please try again later.",
				variant: "destructive",
			})
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<footer className="bg-muted/50 border-t">
			<div className="container py-12 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					<div className="space-y-4">
						<Logo />
						<p className="text-muted-foreground">
							Creating digital experiences that drive results, inspired by the historic Fosse Way.
						</p>
						{/*<div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>*/}
					</div>

					<div>
						<h3 className="font-medium text-lg mb-4">Quick Links</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
									Services
								</Link>
							</li>
							<li>
								<Link href="/#work" className="text-muted-foreground hover:text-primary transition-colors">
									Work
								</Link>
							</li>
							<li>
								<Link href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
									About
								</Link>
							</li>
							<li>
								<Link href="/#contact" className="text-muted-foreground hover:text-primary transition-colors">
									Contact
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									Blog
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-medium text-lg mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									UI/UX Design
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									Web Development
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									Mobile Apps
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									Digital Strategy
								</Link>
							</li>
							<li>
								<Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
									Branding
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="font-medium text-lg mb-4">Newsletter</h3>
						<p className="text-muted-foreground mb-4">
							Subscribe to our newsletter for the latest updates and insights.
						</p>
						{isSubscribed ? (
							<div className="text-center space-y-2">
								<div className="w-8 h-8 mx-auto bg-green-100 rounded-full flex items-center justify-center">
									<CheckCircle className="h-5 w-5 text-green-600" />
								</div>
								<p className="text-sm text-muted-foreground">
									You're subscribed! Check your email.
								</p>
								<Button
									variant="outline"
									size="sm"
									onClick={() => setIsSubscribed(false)}
									className="text-xs"
								>
									Subscribe another email
								</Button>
							</div>
						) : (
							<form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
								<Input 
									placeholder="Your email address" 
									type="email" 
									{...register("email")}
									className={errors.email ? "border-destructive" : ""}
								/>
								{errors.email && (
									<p className="text-xs text-destructive">{errors.email.message}</p>
								)}
								<Button 
									type="submit" 
									className="w-full" 
									disabled={isSubmitting}
								>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-3 w-3 animate-spin" />
											Subscribing...
										</>
									) : (
										'Subscribe'
									)}
								</Button>
							</form>
						)}
					</div>
				</div>

				<Separator className="my-8" />

				<div className="flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Fosse Creative. All rights reserved.
					</p>
					<div className="flex gap-4 text-sm">
						<Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
							Privacy Policy
						</Link>
						<Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
							Terms of Service
						</Link>
						<Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
							Cookies Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	)
}
