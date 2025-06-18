"use client"

import { motion } from "framer-motion"
import { Code, Laptop, Layers, LineChart, Palette, Smartphone, Wand2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Palette className="h-10 w-10" />,
    title: "UI/UX Design",
    description: "Creating intuitive and engaging user experiences that delight your customers.",
  },
  {
    icon: <Code className="h-10 w-10" />,
    title: "Web Development",
    description: "Building fast, responsive, and accessible websites using modern technologies.",
  },
  {
    icon: <Smartphone className="h-10 w-10" />,
    title: "Mobile Apps",
    description: "Developing cross-platform mobile applications that work seamlessly on all devices.",
  },
  {
    icon: <LineChart className="h-10 w-10" />,
    title: "Digital Strategy",
    description: "Crafting comprehensive digital strategies to achieve your business objectives.",
  },
  {
    icon: <Wand2 className="h-10 w-10" />,
    title: "Branding",
    description: "Developing unique brand identities that resonate with your target audience.",
  },
  {
    icon: <Laptop className="h-10 w-10" />,
    title: "E-commerce",
    description: "Building online stores that drive sales and provide excellent customer experiences.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border w-fit mx-auto mb-4">
            <Layers className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Digital Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of services to help your business succeed in the digital landscape. From design to
            development, we've got you covered.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-2 hover:border-primary/50 transition-all duration-300 h-full">
                <CardHeader>
                  <div className="p-2 w-fit rounded-lg bg-primary/10 text-primary mb-4">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
