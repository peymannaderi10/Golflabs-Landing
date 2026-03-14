"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const reviewsRow1 = [
  {
    name: "Dante R.",
    timeAgo: "2 weeks ago",
    content:
      "Love having a private room to myself. No one watching, no pressure, just me and the simulator. The Uneekor data is spot on.",
    rating: 5,
  },
  {
    name: "Priya M.",
    timeAgo: "1 month ago",
    content:
      "Booked a session at 11pm after a long day. Smart lock worked perfectly, walked right in, no staff needed. This is how golf should be.",
    rating: 5,
  },
  {
    name: "Tomás G.",
    timeAgo: "3 weeks ago",
    content:
      "The private room setup is great for serious practice. I can work on my swing without distractions. Uneekor shot data is pro-level accurate.",
    rating: 5,
  },
  {
    name: "Jin W.",
    timeAgo: "1 week ago",
    content:
      "Brought my son here on a rainy Saturday. Having our own private room made it feel like our personal golf studio. He loved it.",
    rating: 5,
  },
  {
    name: "Aisha T.",
    timeAgo: "2 months ago",
    content:
      "As a beginner, practicing in a private room takes all the intimidation away. The booking system is dead simple. Pick a time, get a code, play.",
    rating: 5,
  },
];

const reviewsRow2 = [
  {
    name: "Marcus L.",
    timeAgo: "5 days ago",
    content:
      "We licensed the GolfLabs platform for our facility and it transformed our operations. Fully automated bookings, smart lock integration, zero front desk needed.",
    rating: 5,
  },
  {
    name: "Yuki S.",
    timeAgo: "3 weeks ago",
    content:
      "The GolfLabs booking software paid for itself in the first month. Our customers love the self-service experience and we cut staffing costs significantly.",
    rating: 5,
  },
  {
    name: "Carlos V.",
    timeAgo: "1 month ago",
    content:
      "Setting up the GolfLabs platform at our sim studio was seamless. Their team helped with smart lock config and the whole system just works. Highly recommend for operators.",
    rating: 5,
  },
  {
    name: "Keisha D.",
    timeAgo: "2 weeks ago",
    content:
      "We run a 24/7 sim facility using the GolfLabs platform. The automated access codes and payment processing handle everything. We barely need to touch it.",
    rating: 5,
  },
  {
    name: "Raj P.",
    timeAgo: "6 days ago",
    content:
      "Looked at a dozen booking platforms before choosing GolfLabs. Nothing else offered the smart lock integration and self-service model we needed. Game changer for our business.",
    rating: 5,
  },
];

const GoogleIcon = () => (
  <svg
    className="w-5 h-5 flex-shrink-0"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

function ReviewCard({ review }: { review: (typeof reviewsRow1)[0] }) {
  return (
    <div className="w-[240px] sm:w-[380px] flex-shrink-0 bg-white border border-slate-200/80 rounded-sm p-4 sm:p-7 shadow-sm">
      <div className="flex items-start justify-between mb-2 sm:mb-3">
        <div>
          <p className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
            {review.name}
          </p>
          <p className="text-[10px] sm:text-[11px] text-slate-400">{review.timeAgo}</p>
        </div>
        <GoogleIcon />
      </div>
      <div className="flex gap-0.5 mb-2 sm:mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-3 w-3 sm:h-4 sm:w-4 ${
              i < review.rating
                ? "text-amber-400 fill-amber-400"
                : "text-slate-200 fill-slate-200"
            }`}
          />
        ))}
      </div>
      <p className="text-slate-600 text-[13px] sm:text-[15px] leading-relaxed">
        {review.content}
      </p>
    </div>
  );
}

function useMarquee(direction: "left" | "right", speed = 0.2) {
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
  const row1Ref = useMarquee("left");
  const row2Ref = useMarquee("right");

  return (
    <section className="relative bg-slate-50 overflow-hidden py-0">
      <div className="relative">
        <div className="py-12 space-y-6">
          {/* Row 1 */}
          <div className="overflow-hidden">
            <div
              ref={row1Ref}
              className="flex gap-6 w-max"
              style={{ willChange: "transform" }}
            >
              {[...reviewsRow1, ...reviewsRow1].map((review, i) => (
                <ReviewCard key={`r1-${i}`} review={review} />
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden">
            <div
              ref={row2Ref}
              className="flex gap-6 w-max"
              style={{ willChange: "transform" }}
            >
              {[...reviewsRow2, ...reviewsRow2].map((review, i) => (
                <ReviewCard key={`r2-${i}`} review={review} />
              ))}
            </div>
          </div>
        </div>

        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-40 md:w-72 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 md:w-72 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent z-10 pointer-events-none" />

        {/* Center title */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none -translate-y-2.5 lg:translate-y-0">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 tracking-tight uppercase leading-tight">
            What Golfers <span className="text-primary">Say</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
