"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Clock3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Uneekor",
    description:
      "Professional-grade launch monitors with unparalleled accuracy and ball tracking technology.",
  },
  {
    icon: Shield,
    title: "Smart Lock Access",
    description:
      "Secure, automated bay access through our smart lock system. No staff required.",
  },
  {
    icon: Users,
    title: "Uneekor GameDay",
    description:
      "Play on 50+ world-famous golf courses with stunning graphics and realistic physics.",
  },
  {
    icon: Clock3,
    title: "24/7 Availability",
    description: "Practice and play whenever it suits you. Our facility never closes.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl desk:text-5xl font-bold text-foreground mb-6">
            STATE-OF-THE-ART <span className="text-primary">TECHNOLOGY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of golf with our cutting-edge simulator technology and seamless
            automation.
          </p>
        </motion.div>

        <motion.div
          variants={{
            animate: {
              transition: { staggerChildren: 0.2 },
            },
          }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid desk:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={{
                initial: { opacity: 0, y: 30 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    delay: 0.2 + index * 0.2,
                  },
                },
              }}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-card p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 shadow-[0_0_20px_rgba(0,163,108,0.3)] hover:shadow-[0_0_40px_rgba(0,163,108,0.5)]"
            >
              <div className="flex items-center gap-4 mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold text-card-foreground">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
