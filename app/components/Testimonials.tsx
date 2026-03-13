"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonialsData = [
  {
    name: "Mike Johnson",
    role: "Weekend Warrior",
    content: "The 24/7 access is a game changer. I can practice after work without rushing.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Golf Enthusiast",
    content: "Best simulators in the area. The Uneekor system is incredibly accurate.",
    rating: 5,
  },
  {
    name: "Tom Williams",
    role: "Local Pro",
    content: "I use this for off-season training. The data and analytics are top-notch.",
    rating: 5,
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl desk:text-5xl font-bold text-foreground mb-6">
            WHAT GOLFERS <span className="text-primary">SAY</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid desk:grid-cols-3 gap-8"
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full bg-card border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    viewport={{ once: true }}
                    className="flex mb-4"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </motion.div>
                  <p className="text-muted-foreground mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
