"use client";

import { Timeline } from "@/components/ui/timeline";

const imgShadow = "rounded-lg object-cover w-full max-w-lg aspect-video bg-muted shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]";

const data = [
  {
    title: "Pick a Day",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md">
          Open the booking page and choose the day that works for you. Available up to a month in advance.
        </p>
        <img
          src="/images/bookingPage.webp"
          alt="Selecting a day on the GolfLabs booking calendar"
          className={imgShadow}
        />
      </div>
    ),
  },
  {
    title: "Pick a Time",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md">
          Select your start time and how long you want to play. Book as little as 15 minutes — no minimum hour commitment.
        </p>
        <img
          src="/images/bookingPage2.webp"
          alt="Selecting a time slot on the GolfLabs booking page"
          className={imgShadow}
        />
      </div>
    ),
  },
  {
    title: "Checkout",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md">
          Pay securely via Stripe. You'll get a confirmation email right away, and an unlock link 15 minutes before your session.
        </p>
        <img
          src="/images/checkout.webp"
          alt="GolfLabs secure checkout via Stripe payment screen"
          className={imgShadow}
        />
      </div>
    ),
  },
  {
    title: "Play",
    content: (
      <div>
        <p className="text-muted-foreground text-sm md:text-base mb-6 max-w-md">
          Tap the unlock link, walk in, and the bay is yours. Pick a course, grab the clubs, and start swinging.
        </p>
        <img
          src="/images/gameday_card.webp"
          alt="Playing a round on GolfLabs Uneekor golf simulator with GameDay"
          className={imgShadow}
        />
      </div>
    ),
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
      <Timeline
        data={data}
        title="Book to tee-off in 4 steps"
        subtitle="No membership, no check-in. Pick a time, pay online, and walk right in."
      />
      </div>
    </section>
  );
}
