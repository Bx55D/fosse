import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy | Fosse Creative - Web Design Melksham",
  description: "Cookie policy for Fosse Creative website. Learn about cookies we use for web design services in Melksham, Wiltshire and how to manage them.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function CookiesPolicyPage() {
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
						<h1 className="text-3xl md:text-4xl font-bold mb-4">Cookies Policy</h1>
						<p className="text-muted-foreground">
							Last updated: {new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })}
						</p>
					</div>

					<div className="prose prose-gray dark:prose-invert max-w-none">
						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
							<p className="mb-4">
								Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
								They are widely used to make websites work more efficiently and to provide information to website owners 
								about how users interact with their sites.
							</p>
							<p className="mb-4">
								This Cookies Policy explains how Fosse Creative ("we", "our", or "us") uses cookies and similar 
								technologies on our website fossecreative.com.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
							<p className="mb-4">We use cookies for several purposes:</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>To ensure our website functions properly</li>
								<li>To improve your browsing experience</li>
								<li>To analyze how our website is used</li>
								<li>To remember your preferences</li>
								<li>To provide relevant content and advertisements</li>
								<li>To measure the effectiveness of our marketing campaigns</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
							
							<h3 className="text-xl font-medium mb-3">Essential Cookies</h3>
							<p className="mb-4">
								These cookies are necessary for the website to function properly. They enable basic functions like page 
								navigation, access to secure areas, and form submissions. The website cannot function properly without 
								these cookies.
							</p>
							<div className="bg-muted p-4 rounded-lg mb-4">
								<p><strong>Examples:</strong></p>
								<ul className="list-disc pl-6 mt-2 space-y-1">
									<li>Session management cookies</li>
									<li>Authentication cookies</li>
									<li>Security cookies</li>
									<li>Load balancing cookies</li>
								</ul>
							</div>

							<h3 className="text-xl font-medium mb-3">Performance Cookies</h3>
							<p className="mb-4">
								These cookies collect information about how visitors use our website, such as which pages are visited 
								most often and if users encounter error messages. This information helps us improve how our website works.
							</p>
							<div className="bg-muted p-4 rounded-lg mb-4">
								<p><strong>Examples:</strong></p>
								<ul className="list-disc pl-6 mt-2 space-y-1">
									<li>Google Analytics cookies</li>
									<li>Page load time tracking</li>
									<li>Error tracking cookies</li>
									<li>Website usage statistics</li>
								</ul>
							</div>

							<h3 className="text-xl font-medium mb-3">Functionality Cookies</h3>
							<p className="mb-4">
								These cookies allow our website to remember choices you make and provide enhanced, more personal features. 
								They may be set by us or by third-party providers whose services we have added to our pages.
							</p>
							<div className="bg-muted p-4 rounded-lg mb-4">
								<p><strong>Examples:</strong></p>
								<ul className="list-disc pl-6 mt-2 space-y-1">
									<li>Language preference cookies</li>
									<li>Theme selection (light/dark mode)</li>
									<li>Form field memory</li>
									<li>User interface preferences</li>
								</ul>
							</div>

							<h3 className="text-xl font-medium mb-3">Marketing Cookies</h3>
							<p className="mb-4">
								These cookies track your online activity to help advertisers deliver more relevant advertising or to limit 
								how many times you see an advertisement. They may also be used to measure the effectiveness of advertising 
								campaigns.
							</p>
							<div className="bg-muted p-4 rounded-lg mb-4">
								<p><strong>Examples:</strong></p>
								<ul className="list-disc pl-6 mt-2 space-y-1">
									<li>Advertising tracking cookies</li>
									<li>Social media integration cookies</li>
									<li>Conversion tracking cookies</li>
									<li>Retargeting cookies</li>
								</ul>
							</div>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
							<p className="mb-4">
								We may use third-party services that set cookies on your device. These services include:
							</p>

							<h3 className="text-xl font-medium mb-3">Google Analytics</h3>
							<p className="mb-4">
								We use Google Analytics to analyze website traffic and user behavior. Google Analytics uses cookies to 
								collect information about how you use our website.
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li><strong>Purpose:</strong> Website analytics and performance monitoring</li>
								<li><strong>Data collected:</strong> Page views, session duration, bounce rate, user demographics</li>
								<li><strong>Retention:</strong> Up to 26 months</li>
								<li><strong>Opt-out:</strong> <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
							</ul>

							<h3 className="text-xl font-medium mb-3">Social Media Platforms</h3>
							<p className="mb-4">
								If we embed social media content or buttons, the respective social media platforms may set cookies:
			</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li><strong>Facebook:</strong> Social plugins and advertising</li>
								<li><strong>LinkedIn:</strong> Professional networking features</li>
								<li><strong>Twitter:</strong> Tweet embedding and social sharing</li>
								<li><strong>Instagram:</strong> Photo and video content embedding</li>
							</ul>
						</section>

						<section className="mb-8">
			<h2 className="text-2xl font-semibold mb-4">Cookie Duration</h2>
							<p className="mb-4">Cookies can be categorized by how long they remain on your device:</p>
							
							<h3 className="text-xl font-medium mb-3">Session Cookies</h3>
							<p className="mb-4">
								These are temporary cookies that are deleted when you close your browser. They are used to maintain 
								your session as you navigate through our website.
							</p>

							<h3 className="text-xl font-medium mb-3">Persistent Cookies</h3>
							<p className="mb-4">
								These cookies remain on your device for a set period of time or until you delete them. They are used 
								to remember your preferences and settings for future visits.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Managing Your Cookie Preferences</h2>
							
							<h3 className="text-xl font-medium mb-3">Browser Settings</h3>
							<p className="mb-4">
								Most web browsers allow you to control cookies through their settings. You can:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>View what cookies are stored on your device</li>
								<li>Delete cookies individually or all at once</li>
								<li>Block cookies from specific websites</li>
								<li>Block all cookies (not recommended as it may affect website functionality)</li>
								<li>Set your browser to notify you when cookies are being set</li>
							</ul>

							<h3 className="text-xl font-medium mb-3">Browser-Specific Instructions</h3>
							<div className="bg-muted p-4 rounded-lg mb-4">
								<p className="mb-2"><strong>Popular browsers and their cookie settings:</strong></p>
								<ul className="list-disc pl-6 space-y-1">
									<li><strong>Chrome:</strong> Settings > Privacy and security > Cookies and other site data</li>
									<li><strong>Firefox:</strong> Settings > Privacy & Security > Cookies and Site Data</li>
									<li><strong>Safari:</strong> Preferences > Privacy > Cookies and website data</li>
									<li><strong>Edge:</strong> Settings > Cookies and site permissions > Cookies and site data</li>
								</ul>
							</div>

							<h3 className="text-xl font-medium mb-3">Mobile Devices</h3>
							<p className="mb-4">
								For mobile devices, cookie settings are typically found in your browser's settings menu. The exact 
								location may vary depending on your device and browser.
			</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Impact of Disabling Cookies</h2>
							<p className="mb-4">
								While you can choose to disable cookies, please note that doing so may affect your experience on our 
				website. Some features may not work properly, including:
							</p>
							<ul className="list-disc pl-6 mb-4 space-y-1">
								<li>Contact form functionality</li>
								<li>Newsletter subscription</li>
								<li>Theme preferences (light/dark mode)</li>
								<li>Website navigation and performance</li>
								<li>Personalized content and recommendations</li>
							</ul>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Your Consent</h2>
							<p className="mb-4">
								By using our website, you consent to our use of cookies as described in this policy. We may display 
								a cookie banner or notification when you first visit our website to inform you about our use of cookies.
							</p>
							<p className="mb-4">
								You can withdraw your consent at any time by adjusting your browser settings or contacting us directly.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
							<p className="mb-4">
								We may update this Cookies Policy from time to time to reflect changes in our practices or applicable 
								laws. We will notify you of any material changes by posting the updated policy on our website and 
								updating the "Last updated" date.
							</p>
						</section>

						<section className="mb-8">
							<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
							<p className="mb-4">
								If you have any questions about our use of cookies or this Cookies Policy, please contact us at:
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