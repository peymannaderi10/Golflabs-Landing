"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll";
import { ModernTimeline, ModernTimelineItem } from "@/components/ui/modern-timeline";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { FeatureWithImage } from "@/components/ui/feature-with-image";
import { ArrowRight, Check } from "lucide-react";

const founders = [
  {
    id: 1,
    name: "Peyman",
    designation: "Co-Founder & Software",
    image: "/images/peyman.png",
  },
  {
    id: 2,
    name: "Phil",
    designation: "Co-Founder & Operations",
    image: "/images/phil.png",
  },
];

const journeyItems: ModernTimelineItem[] = [
  {
    title: "Peyman Built the Platform",
    description:
      "The biggest cost of running a simulator isn't the hardware — it's all the monthly software bills. Booking platforms, smart lock subscriptions, kiosk systems, payment processors. Peyman built the entire stack from scratch: booking, payments, smart lock integration, kiosk app, and email system. Zero monthly software fees. That's how we keep prices at $25–35/hr.",
    date: "Early 2024",
    category: "Build",
    status: "completed",
  },
  {
    title: "GolfLabs Opens in Southampton, NJ",
    description:
      "We opened a 1-bay facility at 133 Eayrestown Rd — the first 24/7 no-membership golf simulator in Burlington County. Uneekor EYE Mini SimKit for ball tracking, GameDay software with 50+ world courses, a private bay with a couch and fridge. Book online, get an unlock link, walk in.",
    date: "2024",
    category: "Launch",
    status: "completed",
  },
  {
    title: "Growing & Listening",
    description:
      "11 five-star Google reviews and counting. We're refining the experience based on what golfers actually need — from the booking flow to the bay setup. Slowly building something Burlington County genuinely wants.",
    date: "2025",
    category: "Growth",
    status: "current",
  },
  {
    title: "Open a Full Multi-Bay Facility",
    description:
      "One bay is just the start. The goal is a proper multi-bay facility — more time slots, more golfers, same no-membership, no-commitment model. Affordable golf at scale.",
    date: "Future",
    category: "Expansion",
    status: "upcoming",
  },
  {
    title: "License the Software",
    description:
      "The platform that runs GolfLabs — booking, payments, smart lock control, kiosk — will be available to other sim operators. If you're running or starting a self-service simulator business, we want to help you do it without the monthly software overhead.",
    date: "Future",
    category: "Platform",
    status: "upcoming",
  },
];


export function AboutContent() {
  const originRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero */}
      <section className="pt-[72px] pb-16">
        <div className="mx-auto max-w-5xl px-6 sm:px-8 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-sm font-semibold text-primary tracking-widest uppercase">
              About Us
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground"
          >
            We built this because golf simulators in Jersey cost too much.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            GolfLabs is a 24/7 self-service golf simulator in Southampton, NJ.
            No membership. No minimums. No staff. Just book, unlock, and play.
          </motion.p>

          {/* Founders */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 flex items-center gap-4"
          >
            <AnimatedTooltip items={founders} />
            <div>
              <p className="text-sm font-semibold text-foreground">Peyman & Phil</p>
              <p className="text-sm text-muted-foreground">Co-Founders, GolfLabs</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scroll Story */}
      <section className="">
        <div ref={originRef} className="min-h-[250vh] w-full relative">
          <div className="sticky top-0 h-screen flex items-center">
            <div className="mx-auto max-w-5xl px-6 sm:px-8 w-full">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-6">
                How it started
              </p>
              <TextGradientScroll
                containerRef={originRef}
                scrollOffset={["start start", "end end"]}
                text="Phil was Peyman's banker when he first moved to New Jersey from Canada. When Peyman mentioned golf, Phil suggested a trip to West Palm Beach — a spontaneous week of golf that turned a banking relationship into a real friendship. Back home, every simulator we found charged $60–75 per hour with monthly memberships and minimum bookings. Coming from Canada where indoor golf is more accessible, this felt wrong. So we decided to build something different."
                className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-foreground"
                type="word"
                textOpacity="soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 ">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              The Journey
            </h2>
            <p className="mt-2 text-muted-foreground">
              From building the software to opening the doors — and what's next.
            </p>
          </motion.div>

          <ModernTimeline items={journeyItems} />
        </div>
      </section>

      {/* Platform Teaser */}
      <section className="py-24 ">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <FeatureWithImage
            badge="Coming Soon"
            title="The platform that runs GolfLabs — built for anyone who wants to do this."
            description="If you're running or thinking about starting a self-service golf simulator business, we're building affordable tools to make that easier. One platform — booking, payments, smart lock, kiosk — no monthly software overhead."
            image={
              <img
                src="/images/employeedash-macbook2.png"
                alt="GolfLabs operator dashboard on a MacBook"
                className="w-full h-full object-cover object-center"
              />
            }
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Online booking system", desc: "Customers book and pay directly. No phone calls, no back-and-forth." },
              { title: "Stripe payments built in", desc: "Secure checkout with automatic confirmation emails and receipts." },
              { title: "Smart lock integration", desc: "Customers get a one-tap unlock link 15 minutes before their session." },
              { title: "Kiosk app", desc: "Walk-in check-in screen for the bay — no staff required." },
              { title: "No monthly software fees", desc: "Pay once. No SaaS subscriptions eating into your margins." },
              { title: "Multi-bay ready", desc: "Built to scale from one bay to a full facility without rebuilding." },
            ].map(({ title, desc }) => (
              <div key={title} className="flex flex-row gap-4 items-start">
                <Check className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <p className="font-medium text-foreground text-sm">{title}</p>
                  <p className="text-muted-foreground text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <a
              href="mailto:peyman@golflabs.us"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors cursor-pointer"
            >
              Interested? Get in touch
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
