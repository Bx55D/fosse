"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"

export function Navbar() {
	const [isScrolled, setIsScrolled] = React.useState(false)

	React.useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			className={cn(
				"fixed top-0 w-full z-50 transition-all duration-200",
				isScrolled ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-2" : "bg-transparent py-4",
			)}
		>
			<div className="container flex items-center justify-between">
				<Logo />

				<div className="hidden md:flex items-center gap-6">
					<NavigationMenu>
						<NavigationMenuList>
							<NavigationMenuItem>
								<Link href="/#services" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>Services</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							{/*<NavigationMenuItem>
                <Link href="/#work" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Work</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>*/}
							<NavigationMenuItem>
								<Link href="/#about" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>About</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>
							<NavigationMenuItem>
								<Link href="/#pricing" legacyBehavior passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
								</Link>
							</NavigationMenuItem>

						</NavigationMenuList>
					</NavigationMenu>

					<div className="flex items-center gap-2">
						<Link href="/#contact">
							<Button>Get In Touch</Button>
						</Link>
					</div>
				</div>

				<div className="md:hidden flex items-center gap-2">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="right">
							<div className="flex flex-col gap-6 mt-10">
								<Link
									href="/#services"
									className="text-lg font-medium hover:text-primary transition-colors"
									onClick={() => document.querySelector("[data-radix-collection-item]")?.click()}
								>
									Services
								</Link>
								<Link
									href="/#work"
									className="text-lg font-medium hover:text-primary transition-colors"
									onClick={() => document.querySelector("[data-radix-collection-item]")?.click()}
								>
									Work
								</Link>
								<Link
									href="/#about"
									className="text-lg font-medium hover:text-primary transition-colors"
									onClick={() => document.querySelector("[data-radix-collection-item]")?.click()}
								>
									About
								</Link>
								<Link
									href="/#contact"
									className="text-lg font-medium hover:text-primary transition-colors"
									onClick={() => document.querySelector("[data-radix-collection-item]")?.click()}
								>
									Contact
								</Link>
								<Link href="/#contact">
									<Button className="mt-4 w-full">Get a Quote</Button>
								</Link>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
