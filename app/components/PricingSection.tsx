"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock3, Sun, Check } from "lucide-react";
import type { PricingRule } from "@/lib/api";

interface PricingSectionProps {
  pricingRules: PricingRule[];
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5 },
};

export function PricingSection({ pricingRules }: PricingSectionProps) {
  const pricingTiers = pricingRules.map((rule, idx) => ({
    name: rule.name,
    price: rule.hourlyRate,
    period: "per hour",
    description:
      rule.startTime && rule.endTime
        ? `${rule.startTime.substring(0, 5)} - ${rule.endTime.substring(0, 5)}`
        : "All hours",
    features: [
      "Full bay access",
      "All courses available",
      "Practice facilities",
      "Smart lock access",
    ],
    highlight: idx === pricingRules.length - 1,
    icon: idx === 0 ? Clock3 : Sun,
  }));

  if (pricingTiers.length === 0) return null;

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl desk:text-5xl font-bold mb-4 tracking-wide text-foreground">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-xl text-muted-foreground">Pay by the hour, no membership required.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid desk:grid-cols-2 gap-8 max-w-3xl mx-auto"
        >
          {pricingTiers.map((tier) => (
            <motion.div
              key={tier.name}
              variants={scaleIn}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              <Card
                className={`h-full flex flex-col ${
                  tier.highlight
                    ? "border-primary bg-card shadow-xl"
                    : "border-border bg-card shadow-lg"
                } hover:shadow-2xl transition-shadow duration-300`}
              >
                {tier.highlight && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring" }}
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold"
                  >
                    POPULAR
                  </motion.div>
                )}
                <CardHeader className="items-center text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="p-3 bg-primary/10 rounded-full mb-3"
                  >
                    <tier.icon className="h-8 w-8 text-primary" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-card-foreground">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {tier.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <div className="mb-6 text-center">
                    <span className="text-4xl font-bold text-primary">${tier.price}</span>
                    <span className="text-muted-foreground ml-1">{tier.period}</span>
                  </div>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {tier.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start"
                      >
                        <Check className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
