"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

const ARRIVAL_STEPS = [
  {
    step: 1,
    title: "Check your email",
    description:
      "After booking, you'll receive a confirmation email with your session details and an unlock link.",
    image: "/images/iPhoneEmailMobile.png",
    portrait: true,
    imgClass: "w-56 sm:w-64",
  },
  {
    step: 2,
    title: "Unlock the door",
    description:
      "15 minutes before your session, tap the unlock button in your email. The front door unlocks instantly — no keys, no codes.",
    image: "/images/unlockPage.png",
    portrait: true,
    imgClass: "w-72 sm:w-80",
  },
  {
    step: 3,
    title: "The kiosk unlocks",
    description:
      "Once you're settled in the bay, the kiosk screen will automatically unlock and show the launch panel.",
    image: "/images/kioskLockPage.png",
    portrait: false,
  },
  {
    step: 4,
    title: "Pick Practice or Play",
    description:
      "Choose Practice for the driving range with full shot metrics, or Play to start a round on any of 50+ world-famous courses.",
    image: "/images/uneekorLauncher.png",
    portrait: false,
  },
];

const TROUBLESHOOTING_STEPS = [
  {
    id: "device-not-found",
    title: "Uneekor shows \"Device Not Found\"",
    image: "/images/getting-started/devicenotfound.png",
    whatToDo:
      "Make sure the launch monitor is turned on, then click the Retry Now button at the top of the screen. You are now ready to launch Game Day for playing rounds against friends or practice if you'd like to just hit the range with detailed metrics!",
  },
];

export function GettingStartedContent() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <div className="pt-[72px]">
      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 cursor-pointer"
            onClick={() => setLightbox(false)}
          >
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="size-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src="/images/clubStickerGuide.png"
              alt="How to place reflective stickers on irons, woods, and drivers"
              className="max-w-full max-h-[90vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Hero + Video */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-10">
            {/* Text — left side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <span className="text-sm font-semibold text-primary tracking-widest uppercase">
                Getting Started
              </span>
              <h1 className="mt-3 text-3xl md:text-4xl font-semibold text-foreground">
                How to use the simulator
              </h1>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A 3-minute walkthrough covering everything from booking to your
                first swing. Scroll down for a step-by-step guide with screenshots.
              </p>
              <p className="mt-6 text-sm text-muted-foreground">
                Video length: ~3 minutes
              </p>
            </motion.div>

            {/* Video — right side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="w-full max-w-xs overflow-hidden rounded-lg border border-border shadow-sm">
                <video
                  className="w-full aspect-[9/16] bg-black object-contain"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                >
                  <source src="/videos/gettingStarted.webm" type="video/webm" />
                  <p className="p-4 text-muted-foreground">
                    Your browser does not support the video tag.
                  </p>
                </video>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* After you book — step by step */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 md:text-center"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              After you book
            </h2>
            <p className="mt-2 text-muted-foreground md:max-w-lg md:mx-auto">
              Here's exactly what happens from booking to your first swing.
            </p>
          </motion.div>

          {/* Steps with connecting line */}
          <div className="relative">
            {/* Vertical connecting line — desktop only */}
            <div
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"
              aria-hidden="true"
            />

            <div className="space-y-20 md:space-y-28">
              {ARRIVAL_STEPS.map((step, index) => {
                const isEven = index % 2 === 0;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative"
                  >
                    {/* Step number on the center line — desktop */}
                    <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 z-10 items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                      {step.step}
                    </div>

                    {/* Alternating layout */}
                    <div
                      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                        isEven ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      {/* Image side */}
                      <div className="w-full md:w-1/2 flex justify-center">
                        <div
                          className={`overflow-hidden ${
                            step.imgClass ? step.imgClass : step.portrait ? "w-44 sm:w-52" : "w-full max-w-md rounded-lg border border-border bg-muted/20 shadow-sm"
                          }`}
                        >
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      </div>

                      {/* Text side */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isEven ? "md:pr-16" : "md:pl-16"
                        }`}
                      >
                        {/* Mobile step number */}
                        <div className="flex md:hidden items-center gap-3 mb-3">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                            {step.step}
                          </span>
                          <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                            Step {step.step}
                          </span>
                        </div>

                        {/* Desktop step label */}
                        <p className="hidden md:block text-xs font-semibold text-primary tracking-widest uppercase mb-2">
                          Step {step.step}
                        </p>

                        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Practice vs Play */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Practice vs Play
            </h2>
            <p className="mt-2 text-muted-foreground">
              Two modes, two different experiences on the projector.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Practice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="border border-border"
            >
              <div className="overflow-hidden bg-muted/30">
                <img
                  src="/images/practice.webp"
                  alt="Uneekor View practice mode on the projector"
                  className="w-full aspect-video object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Practice
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  Uneekor View
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Driving range with full shot data</li>
                  <li>Ball speed, launch angle, spin rate, carry distance</li>
                  <li>Shot tracer and dispersion on the projector</li>
                  <li>Best for warming up or working on your swing</li>
                </ul>
              </div>
            </motion.div>

            {/* Play */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="border border-border"
            >
              <div className="overflow-hidden bg-muted/30">
                <img
                  src="/images/Play.png"
                  alt="GameDay course simulation on the projector"
                  className="w-full aspect-video object-cover object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">
                  Play
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  GameDay
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Play full rounds on 50+ world-famous courses</li>
                  <li>Pebble Beach, St Andrews, Bethpage Black, and more</li>
                  <li>Realistic course visuals on the projector</li>
                  <li>Play solo or compete with up to 4 players</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Club Data */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:gap-16 gap-10">
            {/* Text — left side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Want club data?
              </h2>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                The Uneekor EYE Mini can track club metrics too — club speed,
                club path, angle of attack, and smash factor. All you need is a
                reflective sticker on your club face.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We provide the stickers in the bay. They're super easy to stick
                on before your session and peel off after — no residue, no damage
                to your clubs.
              </p>

              <div className="mt-6">
                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
                  Metrics you'll get
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li>Club speed</li>
                  <li>Club path</li>
                  <li>Angle of attack</li>
                  <li>Smash factor</li>
                  <li>Face angle</li>
                  <li>Dynamic loft</li>
                </ul>
              </div>
            </motion.div>

            {/* Image — right side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <button
                onClick={() => setLightbox(true)}
                className="overflow-hidden rounded-lg border border-border bg-muted/20 shadow-sm cursor-pointer hover:shadow-md transition-shadow duration-200 block w-full"
              >
                <img
                  src="/images/clubStickerGuide.png"
                  alt="How to place reflective stickers on irons, woods, and drivers"
                  className="w-full object-contain"
                  loading="lazy"
                />
              </button>
              <p className="mt-3 text-xs text-muted-foreground text-center">
                Sticker placement for irons, woods, and drivers — tap to enlarge
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Troubleshooting
            </h2>
            <p className="mt-2 text-muted-foreground">
              If something in the bay isn&apos;t working, find the situation below
              and follow the steps.
            </p>
          </motion.div>

          <div className="space-y-10">
            {TROUBLESHOOTING_STEPS.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-border"
              >
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>

                  <div className="overflow-hidden border border-border bg-muted/30">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full aspect-video object-cover object-center"
                    />
                  </div>

                  <div className="flex gap-3 mt-4 p-4 bg-primary/5 border border-primary/20">
                    <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-foreground text-sm mb-1">
                        What to do
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {step.whatToDo}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
