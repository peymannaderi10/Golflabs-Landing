"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BusinessCTA() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col desk:flex-row items-center justify-between gap-8 bg-card rounded-2xl border border-border p-8 desk:p-12 shadow-lg"
        >
          <div className="text-center desk:text-left">
            <span className="inline-block text-primary text-sm font-semibold mb-4">
              FOR ENTREPRENEURS
            </span>
            <h3 className="text-2xl desk:text-3xl font-bold text-foreground mb-2">
              Want to Build Your Own Golf Simulator Business?
            </h3>
            <p className="text-muted-foreground text-lg">
              License our proven booking & kiosk software. Get a free quote today.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link href="/licensing">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg"
              >
                Learn More
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
