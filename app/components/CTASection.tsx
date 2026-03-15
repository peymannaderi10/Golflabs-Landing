"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";

export function CTASection() {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="max-w-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Ready to tee off?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Book your session in under 60 seconds. Show up, unlock the door, and play.
            </p>
          </div>
          <a href={`${APP_URL}/dashboard?tab=book`}>
            <Button
              size="lg"
              className="font-semibold px-8 py-6 text-base cursor-pointer"
            >
              Book Now
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
