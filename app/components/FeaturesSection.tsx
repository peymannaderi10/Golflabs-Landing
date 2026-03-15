"use client";

import { motion } from "framer-motion";
import { Target, Shield, Monitor, Clock3, DollarSign, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: <Target className="size-5" />,
    title: "Ball & Club Tracking",
    description:
      "See your launch angle, spin rate, ball speed, carry distance, and club path after every shot. Know exactly what to fix.",
  },
  {
    icon: <Monitor className="size-5" />,
    title: "50+ Courses on GameDay",
    description:
      "Pebble Beach, St Andrews, Bethpage Black — play them all on Uneekor's GameDay software.",
  },
  {
    icon: <Clock3 className="size-5" />,
    title: "Open 24/7",
    description:
      "6am before work. 11pm after the kids are asleep. Sunday morning. Christmas Day. We never close.",
  },
  {
    icon: <DollarSign className="size-5" />,
    title: "No Membership",
    description:
      "Pay by the session. No monthly fees, no initiation costs, no commitments. Book 15 minutes or 4 hours.",
  },
  {
    icon: <Users className="size-5" />,
    title: "BYOB & Private",
    description:
      "Your own room with a couch, a fridge for your drinks, and clubs in the bay. Bring friends — up to 4 people, same price.",
  },
  {
    icon: <Shield className="size-5" />,
    title: "Walk In, Start Playing",
    description:
      "You'll get an unlock link before your booking. Tap it, walk in, and the simulator is ready. No waiting, no check-in.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 overflow-hidden">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Why GolfLabs.{" "}
            <span className="text-muted-foreground">
              We cut the overhead so you don't pay for it.
            </span>
          </h2>
        </motion.div>

        {/* Perspective bay image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative -mx-4 rounded-3xl p-3 md:-mx-12 mb-12"
        >
          <div className="[perspective:800px]">
            <div className="[transform:skewY(-2deg)skewX(-2deg)rotateX(6deg)]">
              <div className="aspect-[88/36] relative">
                <img
                  src="/images/bookingPage.webp"
                  className="absolute inset-0 z-10 w-full h-full object-cover object-top rounded-2xl shadow-2xl"
                  alt="GolfLabs online booking platform showing available golf simulator time slots"
                  width={2797}
                  height={1137}
                />
                <div className="absolute -inset-[4.25rem] z-20 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_75%)] pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature grid — same pattern as business FeaturesSectionWithHoverEffects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col lg:border-r py-10 relative group/feature border-border",
                (index === 0 || index === 3) && "lg:border-l",
                index < 3 && "lg:border-b",
                "border-b"
              )}
            >
              {index < 3 ? (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted to-transparent pointer-events-none" />
              ) : (
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-muted to-transparent pointer-events-none" />
              )}
              <div className="mb-4 relative z-10 px-8 text-muted-foreground">
                {feature.icon}
              </div>
              <div className="text-lg font-semibold mb-2 relative z-10 px-8">
                <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-border group-hover/feature:bg-primary transition-all duration-200 origin-center" />
                <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
                  {feature.title}
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-8">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
