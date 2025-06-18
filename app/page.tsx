import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<HeroSection />
			<ServicesSection />
			{/*<WorkSection />*/}
			<AboutSection />
			{/*<TestimonialsSection />*/}
			<PricingSection />
			<ContactSection />
		</div>
	)
}
