"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Karam A.",
    content:
      "I have been to quite a few of the larger 24/7 simulators and I have to say I really enjoyed my time here. They use the same top of the line simulators and sensors from Uneekor I am used to from other franchises.",
  },
  {
    name: "Frank F.",
    content:
      "Great indoor golfing simulator spot. The technology is incredibly accurate. Perfect place for practicing your game or just having fun with friends. Booking a time slot was fast and easy!",
  },
  {
    name: "Angel V.",
    content:
      "Been trying to get into golf but wanted to practice before heading out with friends to a real course. I looked into a spot where I could feel comfortable practicing and found this little gem, even has a fridge with BYOB.",
  },
  {
    name: "Miraly C.",
    content:
      "Saw an ad for their simulator and decided to book it for my boyfriend. He really liked the setup and it was super easy to get into too. Bonus points it's BYOB, so I get to sip my wine while he's practicing :)",
  },
  {
    name: "Mengtieng C.",
    content:
      "Had a great time playing the sim with a group of friends. The pricing is fair for a session because even though I came in with a group of 5, I still felt like I had enough time to enjoy the game and practice my swings.",
  },
  {
    name: "Erson G.",
    content:
      "Had an amazing experience at the golf simulator honestly money well spent! The whole experience from start to finish was incredible. The setup was great, the atmosphere was awesome.",
  },
  {
    name: "Alpha",
    content:
      "Something different for date night. Enjoyed my time and I don't even play golf. Would definitely recommend for an activity if you're tired of the regular nights out.",
  },
  {
    name: "Ryan M.",
    content:
      "Been looking for somewhere affordable to practice in the winter without paying $70+ an hour. This is exactly what I needed. Private bay, no rush, and the Uneekor data is legit.",
  },
  {
    name: "Talia S.",
    content:
      "Booked a session at 10pm on a weeknight because why not. Walked right in, door unlocked from my phone, everything was ready. Easiest experience I've ever had at a golf sim.",
  },
];

const GoogleIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="w-[300px] sm:w-[360px] flex-shrink-0 border-t border-border bg-gradient-to-b from-muted/50 to-muted/10 p-6 transition-colors duration-300 hover:from-muted/60 hover:to-muted/20">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-foreground">{review.name}</p>
        <GoogleIcon />
      </div>
      <div className="flex gap-0.5 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{review.content}</p>
    </div>
  );
}

function useMarquee(direction: "left" | "right", speed = 0.3) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const half = el.scrollWidth / 2;
    let pos = direction === "left" ? 0 : -half;
    let rafId: number;

    function animate() {
      if (direction === "left") {
        pos -= speed;
        if (pos <= -half) pos = 0;
      } else {
        pos += speed;
        if (pos >= 0) pos = -half;
      }
      el!.style.transform = `translateX(${pos}px)`;
      rafId = requestAnimationFrame(animate);
    }

    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [direction, speed]);

  return ref;
}

export function Testimonials() {
  const row1 = reviews.slice(0, 5);
  const row2 = reviews.slice(5);
  const row1Ref = useMarquee("left");
  const row2Ref = useMarquee("right");

  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          What golfers say.{" "}
          <a
            href="https://share.google/w6oDRCrUYfnvphWea"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            All reviews from Google &rarr;
          </a>
        </h2>
      </div>

      <div className="space-y-4">
        <div className="overflow-hidden">
          <div ref={row1Ref} className="flex gap-4 w-max" style={{ willChange: "transform" }}>
            {[...row1, ...row1].map((review, i) => (
              <ReviewCard key={`r1-${i}`} review={review} />
            ))}
          </div>
        </div>
        <div className="overflow-hidden">
          <div ref={row2Ref} className="flex gap-4 w-max" style={{ willChange: "transform" }}>
            {[...row2, ...row2].map((review, i) => (
              <ReviewCard key={`r2-${i}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
