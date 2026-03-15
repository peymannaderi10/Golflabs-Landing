"use client";

import { motion } from "framer-motion";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

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

export function FounderStorySection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 relative">

        {/* iPhone image — desktop: absolute background; mobile: inline below content */}
        <img
          src="/images/iPhoneEmail.png"
          alt="GolfLabs smart lock unlock email on iPhone"
          aria-hidden="true"
          className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[32rem] xl:w-[38rem] object-contain pointer-events-none opacity-90 z-0"
        />

        {/* Story text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-xl"
        >
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-6">
            Our Story
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground leading-tight">
            Built by two locals who thought golf simulators cost too much.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative z-10 mt-10 max-w-xl space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            Peyman is a software engineer who moved to New Jersey from Canada. Phil was his
            banker who helped him open his first American bank accounts. One day Phil asked
            if he played golf — and a spontaneous birthday trip to West Palm Beach turned a
            banking relationship into a friendship, and eventually a business.
          </p>
          <p>
            We kept running into the same problem: golf simulators in Jersey are either
            $60–75 an hour, membership-only for 24/7 access, or both. The biggest cost
            wasn't the equipment — it was all the software. Booking platforms, smart lock
            subscriptions, kiosk systems — hundreds of dollars a month in integrations
            before you even open the doors.
          </p>
          <p>
            So Peyman built the entire platform from scratch. The booking system, the
            smart lock integration, the kiosk app, all of it — one codebase, zero monthly
            software fees. That's how we keep our price at $25–35/hr while everyone else
            charges double.
          </p>
          <p className="text-foreground font-medium">
            GolfLabs is a small operation and that's the point. Low overhead means lower
            prices. We believe everyone should be able to afford to play golf — not just
            people who can swing $170/month memberships.
          </p>
        </motion.div>

        {/* Founders avatars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10 mt-10 border-t border-border pt-8 flex items-center gap-4"
        >
          <AnimatedTooltip items={founders} />
          <div>
            <p className="text-sm font-semibold text-foreground">Peyman & Phil</p>
            <p className="text-sm text-muted-foreground">Co-Founders, GolfLabs</p>
          </div>
        </motion.div>

        {/* Mobile iPhone image — shown below content on mobile only */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:hidden mt-12"
        >
          <img
            src="/images/iphoneEmailMobile.png"
            alt="GolfLabs unlock email on iPhone"
            className="w-80 mx-auto object-contain"
          />
        </motion.div>

      </div>
    </section>
  );
}
