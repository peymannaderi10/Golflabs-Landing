"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { APP_URL } from "@/lib/config";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl desk:text-5xl font-bold text-primary-foreground mb-6"
        >
          READY TO PLAY?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto"
        >
          Book your bay now and experience the future of golf simulation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href={`${APP_URL}/booking`}>
            <Button
              size="lg"
              className="bg-background hover:bg-background/90 text-foreground font-semibold px-12 py-4 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Session
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
