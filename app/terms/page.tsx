import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Fosse Creative - Web Design Melksham",
  description: "Terms of service for Fosse Creative web design and development services in Melksham, Wiltshire. Professional web design terms and conditions.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsOfServicePage() {
	return (
		<div className="min-h-screen bg-background">
			<div className="container py-8 md:py-12">
				<div className="max-w-4xl mx-auto">
					<div className="mb-8">
						<Link href="/">
							<Button variant="ghost" className="mb-4">
								<ArrowLeft className="h-4 w-4 mr-2" />
								Back to Home
							</Button>
						</Link>
						<h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
						<p className="text-muted-foreground">
							Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>

					<div className="prose prose-gray dark:prose-invert max-w-none">
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Introduction</h2>
							<p className="mb-4">
								Welcome to Fosse Creative ("we", "our", or "us"). These Terms of Service ("Terms") govern your use of our 
								website fossecreative.com and our design and development services. By accessing our website or using our 
								services, you agree to be bound by these Terms.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
							<p className="mb-4">
								By accessing and using our website or services, you accept and agree to be bound by the terms and provision 
								of this agreement. If you do not agree to abide by the above, please do not use this service.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Services</h2>
							<p className="mb-4">
								Fosse Creative provides web design, development, branding, and digital strategy services. Our specific 
								services include but are not limited to:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Web design and development</li>
								<li>UI/UX design</li>
								<li>Mobile application development</li>
								<li>Branding and identity design</li>
								<li>Digital strategy and consulting</li>
								<li>Website maintenance and support</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Project Engagement</h2>
							
							<h3 className="text-xl font-medium mb-3">Project Scope</h3>
							<p className="mb-4">
								All projects begin with a detailed scope of work that outlines deliverables, timelines, and costs. 
								Any changes to the agreed scope may result in additional charges and timeline adjustments.
							</p>

							<h3 className="text-xl font-medium mb-3">Payment Terms</h3>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Payment schedules will be agreed upon before project commencement</li>
								<li>Invoices are payable within 30 days of receipt</li>
								<li>Late payments may incur interest charges</li>
								<li>Work may be suspended for overdue payments</li>
							</ul>

							<h3 className="text-xl font-medium mb-3">Client Responsibilities</h3>
							<p className="mb-4">Clients are responsible for:</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Providing accurate and complete project requirements</li>
								<li>Supplying necessary content, images, and materials</li>
								<li>Timely feedback and approvals</li>
								<li>Compliance with applicable laws and regulations</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
							
							<h3 className="text-xl font-medium mb-3">Client Content</h3>
							<p className="mb-4">
								You retain ownership of all content, data, and materials you provide to us. By providing content, 
								you grant us a license to use it for the purpose of delivering our services.
							</p>

							<h3 className="text-xl font-medium mb-3">Work Product</h3>
							<p className="mb-4">
								Upon full payment, you will own the final deliverables created specifically for your project. 
								We retain rights to our methodologies, processes, and any pre-existing intellectual property.
							</p>

							<h3 className="text-xl font-medium mb-3">Portfolio Rights</h3>
							<p className="mb-4">
								We reserve the right to showcase completed work in our portfolio and marketing materials unless 
								otherwise agreed in writing.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Website Use</h2>
							<p className="mb-4">You agree not to:</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Use our website for any unlawful purpose or activity</li>
								<li>Attempt to gain unauthorized access to our systems</li>
								<li>Upload or transmit malicious code or content</li>
								<li>Interfere with the proper functioning of our website</li>
								<li>Collect or harvest information about other users</li>
								<li>Violate any applicable laws or regulations</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
							<p className="mb-4">
								To the fullest extent permitted by law, Fosse Creative shall not be liable for any indirect, incidental, 
								special, consequential, or punitive damages, including without limitation, loss of profits, data, use, 
								goodwill, or other intangible losses, resulting from your use of our services.
							</p>
							<p className="mb-4">
								Our total liability for any claims arising from or related to our services shall not exceed the amount 
								paid by you for the specific service giving rise to the claim.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Warranties and Disclaimers</h2>
							<p className="mb-4">
								We provide our services "as is" and make no warranties, express or implied, regarding the services, 
								including but not limited to warranties of merchantability, fitness for a particular purpose, or 
								non-infringement.
							</p>
							<p className="mb-4">
								We do not warrant that our services will be uninterrupted, error-free, or completely secure.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
							<p className="mb-4">
								You agree to indemnify and hold harmless Fosse Creative from any claims, damages, losses, or expenses 
								arising from your use of our services, violation of these Terms, or infringement of any third-party rights.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Termination</h2>
							<p className="mb-4">
								Either party may terminate a project engagement with written notice. Upon termination:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>You will pay for all work completed up to the termination date</li>
								<li>We will deliver any completed work upon payment</li>
								<li>Both parties will return any confidential information</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Confidentiality</h2>
							<p className="mb-4">
								We respect the confidentiality of your business information and will not disclose confidential 
								information to third parties without your consent, except as required by law or necessary to 
								provide our services.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Force Majeure</h2>
							<p className="mb-4">
								Neither party shall be liable for any delay or failure to perform due to circumstances beyond their 
								reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, 
								or government actions.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
							<p className="mb-4">
								These Terms shall be governed by and construed in accordance with the laws of England and Wales. 
								Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts 
								of England and Wales.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
							<p className="mb-4">
								We reserve the right to modify these Terms at any time. We will notify users of any material changes 
								by posting the updated Terms on our website and updating the "Last updated" date.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Severability</h2>
							<p className="mb-4">
								If any provision of these Terms is found to be unenforceable or invalid, that provision will be 
								limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in 
								full force and effect.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
							<p className="mb-4">
								If you have any questions about these Terms of Service, please contact us at:
							</p>
							<div className="bg-muted p-4 rounded-lg">
								<p><strong>Fosse Creative</strong></p>
								<p>Email: <a href="mailto:hello@fossecreative.com" className="text-primary hover:underline">hello@fossecreative.com</a></p>
								<p>Phone: <a href="tel:+447555340022" className="text-primary hover:underline">+44 7555 340 022</a></p>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	)
}