"use client";

import { motion } from "framer-motion";
import { FaqAccordion } from "@/components/ui/faq-chat-accordion";

const faqData = [
  {
    id: 1,
    question: "Do I need a membership to play?",
    answer:
      "No. There's no membership, no monthly fee, and no commitment. Just pick a time, pay for your session, and show up. That's it.",
  },
  {
    id: 2,
    question: "What are your hours?",
    answer:
      "24/7, 365 days a year. Early morning, late night, holidays — we're always open. Book any time that works for you.",
  },
  {
    id: 3,
    question: "What's the minimum booking time?",
    answer:
      "15 minutes. You don't need to commit to a full hour. Quick practice session before picking up the kids? That's $8.75.",
  },
  {
    id: 4,
    question: "How does the smart lock work?",
    answer:
      "15 minutes before your booking, you'll get an email with an unlock button. Tap it, and the front door unlocks. No keys, no codes, no apps to download.",
    icon: "🔓",
    iconPosition: "right" as const,
  },
  {
    id: 5,
    question: "Can I bring friends?",
    answer:
      "Yes — up to 4 people per session. Same price whether it's just you or a group. Great for date nights, practice sessions with friends, or just hanging out.",
  },
  {
    id: 6,
    question: "What should I bring?",
    answer:
      "We have a set of right-handed clubs in the bay, but bring your own if you prefer. Wear comfortable shoes (golf shoes or clean sneakers). It's BYOB — there's a fridge to keep your drinks cold.",
  },
  {
    id: 7,
    question: "What courses can I play?",
    answer:
      "50+ world-famous courses including Pebble Beach, St Andrews, Bethpage Black, and more through Uneekor GameDay. You can also use the driving range and practice modes.",
    icon: "⛳",
    iconPosition: "right" as const,
  },
  {
    id: 8,
    question: "Where are you located?",
    answer:
      "133 Eayrestown Rd, Southampton, NJ 08088. Free parking right outside. We're near Pivotal Training gym off Route 206.",
    icon: "📍",
    iconPosition: "left" as const,
  },
  {
    id: 9,
    question: "What simulator technology do you use?",
    answer:
      "We use the Uneekor EYE Mini SimKit with GameDay simulation software. It tracks ball speed, launch angle, spin rate, carry distance, and more — solid data to help you improve.",
  },
  {
    id: 10,
    question: "Is the facility staffed?",
    answer:
      "No, and that's by design. Fully self-service means no staffing costs, which is how we keep prices at $25–35/hr instead of $60–75.",
  },
];

// Keep exporting faqItems for use in the FAQ page JSON-LD
export const faqItems = faqData.map(({ question, answer }) => ({ question, answer }));

export function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Frequently asked questions
          </h2>
        </motion.div>

        <FaqAccordion
          data={faqData}
          className="mx-auto max-w-2xl p-0"
        />
      </div>
    </section>
  );
}
