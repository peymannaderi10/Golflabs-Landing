"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Rocket } from "lucide-react";
import Link from "next/link";
import { APP_URL } from "@/lib/config";

interface HeroSectionProps {
  city: string;
  state: string;
}

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

export function HeroSection({ city, state }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-background bg-[url('/images/mobileHero.png')] desk:bg-[url('/images/heroBanner.png')] bg-cover bg-center"
    >
      {/* Top fade for mobile */}
      <div className="absolute top-0 left-0 right-0 h-3/4 bg-gradient-to-b from-background via-background/80 to-transparent desk:hidden" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl desk:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">ELEVATE YOUR</span>
            <br />
            <span className="text-primary">GOLF GAME</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl desk:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            24/7 Self-Service Golf Simulators in {city}, {state}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <a href={`${APP_URL}/booking`}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg btn-hover"
              >
                Book Your Bay
              </Button>
            </a>
            <Link href="/getting-started">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg btn-hover"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Getting Started
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-1 desk:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "Private", text: "Premium Bays" },
              { number: "24/7", text: "Access Available" },
              { number: "50+", text: "Golf Courses" },
            ].map((stat) => (
              <motion.div
                key={stat.text}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
