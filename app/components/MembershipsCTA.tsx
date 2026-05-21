"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MembershipsCTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl border border-primary bg-background p-8 md:p-12"
        >
          <div
            aria-hidden
            className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Optional Memberships now available.
              </h2>
              <p className="mt-3 text-muted-foreground">
                Pay-by-the-hour still works the same. But if you're here every week,
                a membership gets you bay hours, 15% off extra time, priority
                booking, and 24/7 Pivotal Training Gym access.
              </p>
            </div>
            <Link href="/memberships" className="shrink-0">
              <Button size="lg" className="font-semibold px-6 cursor-pointer">
                See plans
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
