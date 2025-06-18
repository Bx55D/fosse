"use client"

import { motion } from "framer-motion"
import { MessageSquareQuote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "Fosse Creative transformed our online presence. Their strategic approach and attention to detail resulted in a website that perfectly represents our brand and has significantly increased our conversions.",
    author: "Sarah Johnson",
    position: "CEO, EcoLiving",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Working with Fosse Creative was a game-changer for our business. They understood our vision and created a digital experience that our customers love. The results speak for themselves.",
    author: "Michael Chen",
    position: "Marketing Director, TechSolutions",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The team at Fosse Creative are true professionals. They delivered our project on time and on budget, and the quality of their work exceeded our expectations. Highly recommended!",
    author: "Emma Williams",
    position: "Founder, Artisan Bakery",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "From concept to completion, Fosse Creative guided us through the process with expertise and patience. Our new website has received countless compliments and has helped us reach new customers.",
    author: "David Thompson",
    position: "Owner, Fitness First",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border w-fit mx-auto mb-4">
            <MessageSquareQuote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with Fosse Creative.
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <blockquote className="text-lg mb-6 flex-grow">"{testimonial.quote}"</blockquote>
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.author} />
                          <AvatarFallback>
                            {testimonial.author
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{testimonial.author}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  )
}
