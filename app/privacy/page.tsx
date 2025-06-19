import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Fosse Creative - Web Design Melksham",
  description: "Privacy policy for Fosse Creative web design services in Melksham, Wiltshire. Learn how we protect your personal data and privacy.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPolicyPage() {
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
						<h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
						<p className="text-muted-foreground">
							Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>

					<div className="prose prose-gray dark:prose-invert max-w-none">
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Introduction</h2>
							<p className="mb-4">
								At Fosse Creative ("we", "our", or "us"), we are committed to protecting your privacy and personal data. 
								This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
								our website fossecreative.com or use our services.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
							
							<h3 className="text-xl font-medium mb-3">Personal Information</h3>
							<p className="mb-4">We may collect personal information that you voluntarily provide to us, including:</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Name and contact information (email address, phone number)</li>
								<li>Business information (company name, job title)</li>
								<li>Project details and requirements</li>
								<li>Communications with us (emails, messages, feedback)</li>
							</ul>

							<h3 className="text-xl font-medium mb-3">Automatically Collected Information</h3>
							<p className="mb-4">We may automatically collect certain information about your device and usage, including:</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>IP address and location information</li>
								<li>Browser type and version</li>
								<li>Device information and operating system</li>
								<li>Pages visited and time spent on our website</li>
								<li>Referral source and exit pages</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
							<p className="mb-4">We use the information we collect for the following purposes:</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>To provide and maintain our services</li>
								<li>To respond to your inquiries and communicate with you</li>
								<li>To send you newsletters and marketing communications (with your consent)</li>
								<li>To improve our website and services</li>
								<li>To analyze usage patterns and optimize user experience</li>
								<li>To comply with legal obligations</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Information Sharing and Disclosure</h2>
							<p className="mb-4">
								We do not sell, trade, or otherwise transfer your personal information to third parties except in the 
								following circumstances:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>With your explicit consent</li>
								<li>To trusted service providers who assist us in operating our website and services</li>
								<li>When required by law or to protect our rights and safety</li>
								<li>In connection with a business transfer or merger</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
							<p className="mb-4">
								We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small 
								files stored on your device that help us:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Remember your preferences</li>
								<li>Understand how you use our website</li>
								<li>Improve our services</li>
								<li>Provide relevant content and advertisements</li>
							</ul>
							<p className="mb-4">
								You can control cookies through your browser settings, but disabling them may affect website functionality.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Data Security</h2>
							<p className="mb-4">
								We implement appropriate technical and organizational security measures to protect your personal information 
								against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
								the internet is 100% secure.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
							<p className="mb-4">Under applicable data protection laws, you may have the following rights:</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Access to your personal data</li>
								<li>Correction of inaccurate data</li>
								<li>Deletion of your data</li>
								<li>Restriction of processing</li>
								<li>Data portability</li>
								<li>Objection to processing</li>
								<li>Withdrawal of consent</li>
							</ul>
							<p className="mb-4">
								To exercise these rights, please contact us at{" "}
								<a href="mailto:hello@fossecreative.com" className="text-primary hover:underline">
									hello@fossecreative.com
								</a>
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
							<p className="mb-4">
								We retain your personal information only for as long as necessary to fulfill the purposes outlined in this 
								Privacy Policy, unless a longer retention period is required by law.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
							<p className="mb-4">
								Our services are not intended for individuals under the age of 16. We do not knowingly collect personal 
								information from children under 16. If we become aware that we have collected such information, we will 
								take steps to delete it.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
							<p className="mb-4">
								We may update this Privacy Policy from time to time. We will notify you of any material changes by posting 
								the new Privacy Policy on this page and updating the "Last updated" date.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
							<p className="mb-4">
								If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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