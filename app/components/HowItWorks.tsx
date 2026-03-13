"use client";

import { motion } from "framer-motion";
import { Calendar, Smartphone, LockOpen } from "lucide-react";
import { GolferIcon } from "./GolferIcon";

const steps = [
  {
    icon: Calendar,
    title: "Book Online",
    description:
      "Select your preferred time slot and bay. Pay securely online with our integrated booking system.",
  },
  {
    icon: Smartphone,
    title: "Get Access Code",
    description:
      "Receive your access code and arrive at your scheduled time. Our smart locks grant you secure entry.",
  },
  {
    icon: LockOpen,
    title: "Enter Facility",
    description: "Use your code to unlock the door - no staff needed",
  },
  {
    icon: GolferIcon,
    title: "Start Playing",
    description:
      "Step into your bay and start playing. Everything is set up and ready for your session.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl desk:text-5xl font-bold mb-4 tracking-wide text-foreground">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground">Get on the course in 4 simple steps</p>
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
          className="grid desk:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
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
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-center group p-6 rounded-lg shadow-xl transition-shadow duration-300 bg-muted/30"
            >
              <div className="mb-6 relative">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center shadow-md"
                >
                  <step.icon className="h-10 w-10 text-primary-foreground" />
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="hidden desk:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent opacity-50" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
