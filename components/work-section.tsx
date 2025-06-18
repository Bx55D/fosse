"use client"

import { motion } from "framer-motion"
import { ArrowRight, Briefcase } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ["All", "Web Design", "Mobile Apps", "E-commerce", "Branding"]

const projects = [
  {
    title: "Eco Marketplace",
    category: "E-commerce",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["E-commerce", "UI/UX", "Web Development"],
  },
  {
    title: "Finance Dashboard",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Web Design", "Dashboard", "Analytics"],
  },
  {
    title: "Travel Companion App",
    category: "Mobile Apps",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Mobile App", "UI/UX", "React Native"],
  },
  {
    title: "Artisan Bakery",
    category: "Branding",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Branding", "Logo Design", "Identity"],
  },
  {
    title: "Fitness Tracker",
    category: "Mobile Apps",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Mobile App", "Health", "UI/UX"],
  },
  {
    title: "Tech Blog",
    category: "Web Design",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Web Design", "Content", "CMS"],
  },
]

export function WorkSection() {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border w-fit mx-auto mb-4">
            <Briefcase className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Our Portfolio</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent <span className="text-primary">Projects</span> We're Proud Of
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest work and see how we've helped businesses like yours achieve their digital goals.
          </p>
        </motion.div>

        <Tabs defaultValue="All" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 h-auto gap-2">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="overflow-hidden border-0 shadow-lg">
                        <div className="relative h-64 w-full overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <Button variant="ghost" size="sm" className="group">
                            View Project
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
