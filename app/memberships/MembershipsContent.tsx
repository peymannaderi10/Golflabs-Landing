"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { APP_URL } from "@/lib/config";

type BillingInterval = "monthly" | "annual";

interface Plan {
  id: string;
  name: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  highlights: string[];
}

const PLANS: Plan[] = [
  {
    id: "founding",
    name: "Founding Member",
    description:
      "Founding Members get priority access, 8 monthly bay hours, 24/7 Pivotal Training Gym access, rollover hours, exclusive perks, and first access to every future GolfLabs location, built for people serious about consistent, flexible training.",
    monthlyPrice: 149,
    annualPrice: 1430,
    highlights: [
      "8 bay hours/month (peak or off-peak)",
      "Full 24/7 access to Pivotal Training Gym",
      "15% off additional hours",
      "30-day priority booking (public gets 7)",
      "Rollover unused hours (up to 8hrs/month)",
      "Founding Member wall recognition",
      "First access to future GolfLabs locations",
      "Month-to-month, no penalty",
      "Annual option: $1,430 (save $359)",
    ],
  },
  {
    id: "player",
    name: "Player Membership",
    description:
      "A flexible entry-level membership for consistent reps, with monthly bay hours, booking priority, and core GolfLabs perks, built for golfers who want access without the full-time commitment.",
    monthlyPrice: 99,
    annualPrice: 950,
    highlights: [
      "4 bay hours/month (peak or off-peak)",
      "15% off additional hours",
      "14-day priority booking (public gets 7)",
      "Rollover unused hours (up to 2hrs/month)",
      "Second access to select GolfLabs locations",
      "Month-to-month, no penalty",
      "Optional annual: $950 (save $238)",
    ],
  },
];

const FAQS: { question: string; answer: string }[] = [
  {
    question: "How do I become a member?",
    answer:
      "Click Get Started on the plan you want. You'll create an account or log in, then complete checkout. Once confirmed, your membership is active and you can use member benefits right away.",
  },
  {
    question: "Can I change or cancel my plan?",
    answer:
      "Yes. You can switch plans or cancel any time from your dashboard under Membership. Cancellation can be at period end (keep access until then) or immediate with a prorated refund for unused time.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major cards (Visa, Mastercard, Amex) and other payment methods supported by our secure Stripe checkout. Billing is monthly or annual depending on the plan you choose.",
  },
  {
    question: "Do I get a discount on bay bookings?",
    answer:
      "Yes. Both plans include 15% off additional hours beyond your monthly bay hours, plus a priority booking window before the public. See each card above for the exact benefits.",
  },
];

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
  currencyDisplay: "narrowSymbol",
});

const MEMBERSHIPS_URL = `${APP_URL}/memberships`;

export function MembershipsContent() {
  const [billingInterval, setBillingInterval] = useState<BillingInterval>("monthly");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <div className="bg-background text-foreground">
      {/* Header */}
      <section className="px-4 md:px-6 pt-12 md:pt-16 pb-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-3">
            Membership Plans
          </h1>
          <p className="text-muted-foreground">
            Unlock discounts, monthly bay hours, and priority booking.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <span
            className={cn(
              "text-base font-medium transition-colors",
              billingInterval === "monthly" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() =>
              setBillingInterval(billingInterval === "monthly" ? "annual" : "monthly")
            }
            className="relative rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 cursor-pointer"
            aria-label="Toggle annual billing"
            aria-pressed={billingInterval === "annual"}
          >
            <div className="w-12 h-6 rounded-full bg-primary shadow-md transition" />
            <div
              className={cn(
                "absolute top-1 left-1 inline-flex items-center justify-center h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-300 ease-out",
                billingInterval === "annual" ? "translate-x-6" : "translate-x-0",
              )}
            />
          </button>
          <span
            className={cn(
              "text-base font-medium transition-colors",
              billingInterval === "annual" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Annual
          </span>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-4 md:px-6 pb-20">
        <div className="grid w-full gap-4 lg:gap-6 max-w-4xl mx-auto lg:grid-cols-2 pt-4">
          {PLANS.map((plan) => {
            const price =
              billingInterval === "annual" ? plan.annualPrice : plan.monthlyPrice;
            const suffix = billingInterval === "annual" ? "/yr" : "/mo";
            const annualSavings =
              billingInterval === "annual"
                ? Math.round(
                    ((plan.monthlyPrice * 12 - plan.annualPrice) /
                      (plan.monthlyPrice * 12)) *
                      100,
                  )
                : 0;

            return (
              <div
                key={plan.id}
                className="flex flex-col relative rounded-2xl lg:rounded-3xl transition-all items-start w-full overflow-hidden bg-background border border-primary"
              >
                <div className="p-4 md:p-8 flex flex-col items-start w-full relative">
                  <h3 className="font-medium text-xl text-foreground pt-2">
                    {plan.name}
                  </h3>
                  <h4 className="mt-3 text-3xl md:text-5xl font-bold">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={`${plan.id}-${billingInterval}`}
                        initial={{ y: 12, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -12, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="inline-block"
                      >
                        {usd.format(price)}
                        {suffix}
                      </motion.span>
                    </AnimatePresence>
                  </h4>
                  {billingInterval === "annual" && (
                    <div className="mt-2 flex items-center gap-2 text-sm">
                      <span className="line-through text-muted-foreground/70">
                        {usd.format(plan.monthlyPrice * 12)}/yr
                      </span>
                      {annualSavings > 0 && (
                        <span className="font-semibold text-primary">
                          {annualSavings}% OFF
                        </span>
                      )}
                    </div>
                  )}
                  <p className="text-sm md:text-base text-muted-foreground mt-4">
                    {plan.description}
                  </p>
                </div>

                <div className="flex flex-col items-start w-full px-5 md:px-8 pb-2 gap-y-2">
                  <span className="text-base text-left mb-2 font-medium text-foreground">
                    Includes:
                  </span>
                  {plan.highlights.map((benefit, i) => (
                    <div key={i} className="flex items-start justify-start gap-2">
                      <div className="flex items-center justify-center pt-0.5">
                        <CheckIcon
                          className="size-5 text-primary"
                          strokeWidth={2.5}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start w-full px-4 py-6 md:px-8 mt-auto">
                  <a href={MEMBERSHIPS_URL} className="w-full">
                    <Button size="lg" className="w-full cursor-pointer">
                      Get started
                    </Button>
                  </a>
                  <div className="h-8 overflow-hidden w-full mx-auto">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={billingInterval}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="text-sm text-center text-muted-foreground mt-3 mx-auto block"
                      >
                        {billingInterval === "monthly"
                          ? "Billed monthly"
                          : "Billed in one annual payment"}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 md:px-6 pb-20">
        <div className="mb-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">
            Common Questions
          </h2>
          <p className="text-muted-foreground">
            Everything you need to know about membership
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="space-y-0 border-b border-border">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className="border-t border-border first:border-t-0">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full flex justify-between items-center text-left py-4 hover:text-primary transition-colors gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-foreground pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 flex-shrink-0 text-muted-foreground transition-transform duration-200",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                  <div
                    className="overflow-hidden transition-[max-height] duration-200 ease-out"
                    style={{ maxHeight: isOpen ? 400 : 0 }}
                  >
                    <p className="text-muted-foreground pb-4 pr-8 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
