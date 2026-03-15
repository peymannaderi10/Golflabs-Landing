"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    label: "Booking & Pricing",
    items: [
      {
        q: "Do I need a membership to play?",
        a: "No. There's no membership, no monthly fee, and no commitment. Just pick a time, pay for your session, and show up. That's it.",
      },
      {
        q: "What's the minimum booking time?",
        a: "15 minutes. You don't need to commit to a full hour. A quick practice session before picking up the kids? That's $8.75.",
      },
      {
        q: "How much does it cost?",
        a: "Off-peak hours (2am–9am) are $25/hr. Peak hours (9am–2am) are $35/hr. 15-minute minimum booking. No membership fees, no hidden charges.",
      },
      {
        q: "How do I pay?",
        a: "You pay securely online via Stripe when you book. You'll get a confirmation email right away, and an unlock link 15 minutes before your session.",
      },
    ],
  },
  {
    label: "Access & Hours",
    items: [
      {
        q: "What are your hours?",
        a: "24/7, 365 days a year. Early morning, late night, holidays — we're always open. Book any time that works for you.",
      },
      {
        q: "How does the smart lock work?",
        a: "15 minutes before your booking, you'll get an email with an unlock button. Tap it, and the front door unlocks. No keys, no codes, no apps to download.",
      },
      {
        q: "Is the facility staffed?",
        a: "No, and that's by design. Fully self-service means no staffing costs, which is how we keep prices at $25–35/hr instead of $60–75.",
      },
    ],
  },
  {
    label: "The Bay",
    items: [
      {
        q: "Can I bring friends?",
        a: "Yes — up to 4 people per session. Same price whether it's just you or a group. Great for date nights, practice sessions with friends, or just hanging out.",
      },
      {
        q: "What should I bring?",
        a: "We have a set of right-handed clubs in the bay, but bring your own if you prefer. Wear comfortable shoes (golf shoes or clean sneakers). It's BYOB — there's a fridge to keep your drinks cold.",
      },
      {
        q: "What courses can I play?",
        a: "50+ world-famous courses including Pebble Beach, St Andrews, Bethpage Black, and more through Uneekor GameDay. You can also use the driving range and practice modes.",
      },
      {
        q: "What simulator technology do you use?",
        a: "We use the Uneekor EYE Mini SimKit with GameDay simulation software. It tracks ball speed, launch angle, spin rate, carry distance, and more — solid data to help you improve.",
      },
    ],
  },
  {
    label: "Location",
    items: [
      {
        q: "Where are you located?",
        a: "133 Eayrestown Rd, Southampton, NJ 08088. Free parking right outside. We're near Pivotal Training gym off Route 206.",
      },
    ],
  },
];

export function FAQPageContent() {
  return (
    <div className="mx-auto max-w-5xl px-6 sm:px-8 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Left column */}
        <div className="md:w-2/5 md:sticky md:top-24">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Have questions?
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Everything you need to know about booking and playing at GolfLabs in
            Southampton, NJ.
          </p>
          <a
            href="tel:8567451025"
            className="inline-block mt-3 text-lg underline hover:text-primary transition-colors text-muted-foreground"
          >
            Give us a call.
          </a>
        </div>

        {/* Right column */}
        <div className="md:w-3/5 space-y-10">
          {faqCategories.map((category) => (
            <div key={category.label}>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                {category.label}
              </h2>
              <Accordion type="multiple" className="w-full">
                {category.items.map((item, i) => (
                  <AccordionItem key={i} value={`${category.label}-${i}`}>
                    <AccordionTrigger>{item.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
