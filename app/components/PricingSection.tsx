"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { PricingRule } from "@/lib/api";

interface PricingSectionProps {
  pricingRules: PricingRule[];
}

function formatTime(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const hour = h % 12 === 0 ? 12 : h % 12;
  const suffix = h < 12 ? "am" : "pm";
  return m === 0 ? `${hour}${suffix}` : `${hour}:${m.toString().padStart(2, "0")}${suffix}`;
}

const FALLBACK_TIERS = [
  {
    name: "Off-Peak",
    price: 25,
    hours: "2am – 9am",
  },
  {
    name: "Peak",
    price: 35,
    hours: "9am – 2am",
  },
];

const SHARED_FEATURES = [
  "Private bay — up to 4 people",
  "50+ courses on Uneekor GameDay",
  "Clubs provided (right-handed)",
  "BYOB welcome",
  "15-minute minimum booking",
];

export function PricingSection({ pricingRules }: PricingSectionProps) {
  const pricingTiers =
    pricingRules.length > 0
      ? pricingRules.map((rule) => ({
          name: rule.name,
          price: rule.hourlyRate,
          hours:
            rule.startTime && rule.endTime
              ? `${formatTime(rule.startTime)} – ${formatTime(rule.endTime)}`
              : "All hours",
        }))
      : FALLBACK_TIERS;

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Simple pricing.{" "}
            <span className="text-muted-foreground">
              No membership. No hidden fees. Other indoor golf nearby charges $60–75/hr.
            </span>
          </h2>
        </motion.div>

        <div className="mt-12 border border-border">
          {/* Pricing tiers */}
          <div className="flex flex-col md:flex-row">
            {pricingTiers.map((tier, idx) => (
              <div
                key={tier.name}
                className={`flex-1 px-6 py-8 md:py-12 xl:px-10 ${
                  idx !== 0 ? "border-t border-border md:border-t-0 md:border-l md:border-border" : ""
                }`}
              >
                <p className="text-sm text-muted-foreground">{tier.hours}</p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">{tier.name}</h3>
                <p className="mt-6">
                  <span className="text-4xl font-semibold text-foreground">${tier.price}</span>
                  <span className="text-muted-foreground ml-1">/hr</span>
                </p>
              </div>
            ))}
          </div>

          {/* Shared features — applies to both */}
          <div className="border-t border-border px-6 py-6 xl:px-10">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
              Every session includes
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {SHARED_FEATURES.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
