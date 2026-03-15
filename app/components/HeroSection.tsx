"use client";

import { motion, type Variants } from "framer-motion";
import { Star, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/config";

const GoogleIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const statsVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

interface HeroSectionProps {
  city: string;
  state: string;
}

export function HeroSection({ city, state }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-white"
    >
      {/* Background images */}
      <img
        src="/images/heroBanner.webp"
        alt="GolfLabs indoor golf simulator bay with Uneekor EYE Mini in Southampton NJ"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none hidden md:block"
      />
      <img
        src="/images/mobileHero.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none md:hidden"
      />

      {/* Desktop bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none hidden md:block" />
      {/* Mobile fades */}
      <div
        className="absolute inset-0 pointer-events-none md:hidden"
        style={{ backgroundImage: "linear-gradient(to bottom, white 0%, white 10%, transparent 50%)" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none md:hidden" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-32 text-center md:py-40 sm:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full flex flex-col items-center"
        >
          {/* Location pill */}
          <motion.div
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/50 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70 backdrop-blur-sm"
          >
            <MapPin className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
            {city}, {state} &mdash; Open 24/7
          </motion.div>

          {/* Headline — no animation to avoid LCP delay */}
          <h1
            className="mb-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl leading-[1.1] max-w-3xl"
          >
            Your private golf simulator.{" "}
            <span className="bg-gradient-to-r from-primary via-primary/70 to-foreground/80 bg-clip-text text-transparent">
              No membership required.
            </span>
          </h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mb-10 max-w-xl text-lg text-foreground/70 leading-relaxed"
          >
            Every golf simulator in Jersey wants $75/hr and a monthly membership.
            We charge $25–$35/hr. Book online, unlock the door with your phone, play whenever you want.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="mb-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/85 text-white hover:text-white font-semibold px-8 py-6 text-base rounded-full transition-colors duration-200"
              asChild
            >
              <a href={`${APP_URL}/dashboard?tab=book`}>
                Book Now
              </a>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full border border-border/60 bg-white/70 px-8 py-6 text-base text-foreground/80 backdrop-blur-sm hover:bg-white hover:border-border hover:text-foreground transition-all duration-200"
              asChild
            >
              <a href="#how-it-works">
                How It Works
              </a>
            </Button>
          </motion.div>

          {/* Stats card */}
          <motion.div
            variants={statsVariants}
            className="w-full max-w-lg grid grid-cols-3 gap-4 rounded-2xl border border-border/40 bg-white/70 p-6 backdrop-blur-sm"
          >
            {[
              { value: "24/7", label: "Always Open" },
              { value: "50+", label: "Courses" },
              { value: "15 min", label: "Min. Booking" },
            ].map((stat) => (
              <motion.div key={stat.label} variants={itemVariants} className="space-y-1">
                <p className="text-2xl font-semibold text-foreground">{stat.value}</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Google reviews */}
          <motion.div variants={itemVariants} className="mt-6">
            <a
              href="https://share.google/w6oDRCrUYfnvphWea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <GoogleIcon />
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-foreground/70">11 Five-Star Reviews</span>
              <span className="text-sm text-foreground/40 group-hover:text-primary transition-colors duration-200">
                &rarr;
              </span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
