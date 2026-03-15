import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CTASection } from "@/app/components/CTASection";
import { APP_URL } from "@/lib/config";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Uneekor EYE Mini Golf Simulator in NJ | GolfLabs Southampton",
  description:
    "Play on a Uneekor EYE Mini SimKit with GameDay software at GolfLabs. Ball speed, launch angle, spin rate, carry distance tracking. 50+ courses. Southampton, NJ.",
  alternates: { canonical: "https://golflabs.us/uneekor-golf-simulator-nj" },
};

const ballMetrics = [
  { name: "Ball Speed", desc: "How fast the ball leaves the clubface. The primary driver of distance." },
  { name: "Launch Angle", desc: "The vertical angle at launch. Optimize trajectory for distance or control." },
  { name: "Side Angle", desc: "Horizontal direction relative to target. Identifies pushes and pulls." },
  { name: "Backspin", desc: "Spin on the horizontal axis. More backspin = higher flight, more stopping power." },
  { name: "Sidespin", desc: "Spin on the vertical axis. Causes draws and fades. Monitor to straighten your ball flight." },
  { name: "Total Spin", desc: "Combined spin rate. A single number showing overall ball rotation." },
];

const clubMetrics = [
  { name: "Club Speed", desc: "Clubhead speed at impact. The foundation of distance." },
  { name: "Club Path", desc: "Direction the club travels at impact. In-to-out promotes a draw, out-to-in a fade." },
  { name: "Angle of Attack", desc: "Whether the club is moving up or down at impact. Positive for drivers, negative for irons." },
  { name: "Smash Factor", desc: "Ball speed ÷ club speed. Near 1.50 with a driver means efficient contact." },
  { name: "Face Angle", desc: "Where the face points at impact. The biggest factor in initial ball direction." },
  { name: "Dynamic Loft", desc: "Actual loft at impact vs. static loft. Affects launch and spin." },
];

export default function UneekorGolfSimulatorNJPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px]">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase">
              Technology
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Uneekor EYE Mini Golf Simulator
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Camera-based overhead launch monitor with GameDay simulation software.
              Accurate ball and club data on every shot — no radar guesswork.
            </p>
            <div className="mt-8">
              <a
                href={`${APP_URL}/dashboard?tab=book`}
                className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-transparent hover:text-primary transition-colors cursor-pointer"
              >
                Book a Session
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ball Data */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Ball data — no stickers required
            </h2>
            <p className="mt-2 text-muted-foreground">
              The EYE Mini tracks every ball metric using high-speed cameras. No dots,
              no stickers, no special balls. Just tee up and swing.
            </p>
          </div>

          <div className="border border-border">
            {ballMetrics.map((m, idx) => (
              <div
                key={m.name}
                className={`flex flex-col sm:flex-row ${
                  idx < ballMetrics.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/40 transition-colors duration-200`}
              >
                <div className="sm:w-48 px-6 py-4 text-sm font-semibold text-foreground sm:border-r border-border bg-muted/20">
                  {m.name}
                </div>
                <div className="px-6 py-4 text-sm text-muted-foreground flex-1">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Club Data */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Club data — with reflective sticker
            </h2>
            <p className="mt-2 text-muted-foreground">
              Place a small reflective sticker on the club face for full club analytics.
              We provide stickers free of charge in the bay — easy on, easy off, no residue.
            </p>
          </div>

          <div className="border border-border">
            {clubMetrics.map((m, idx) => (
              <div
                key={m.name}
                className={`flex flex-col sm:flex-row ${
                  idx < clubMetrics.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/40 transition-colors duration-200`}
              >
                <div className="sm:w-48 px-6 py-4 text-sm font-semibold text-foreground sm:border-r border-border bg-muted/20">
                  {m.name}
                </div>
                <div className="px-6 py-4 text-sm text-muted-foreground flex-1">
                  {m.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GameDay + Modes */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Practice mode vs Play mode
            </h2>
            <p className="mt-2 text-muted-foreground">
              Two ways to use the simulator, depending on your goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
            {/* Practice */}
            <div className="p-8 md:border-r border-border">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
                Uneekor View
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Practice & Range
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Full ball and club data on every shot</li>
                <li>Shot tracer and dispersion on the projector</li>
                <li>Driving range and target practice</li>
                <li>Best for warmups, club fitting, and swing work</li>
              </ul>
            </div>

            {/* Play */}
            <div className="p-8 border-t border-border md:border-t-0">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-3">
                GameDay
              </p>
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Course Play — 50+ Courses
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Pebble Beach, St Andrews, Bethpage Black & more</li>
                <li>Realistic course visuals on the projector</li>
                <li>Solo or multiplayer — up to 4 players</li>
                <li>Stroke play, match play, closest-to-the-pin</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://golflabs.us" },
              { "@type": "ListItem", position: 2, name: "Uneekor Golf Simulator NJ", item: "https://golflabs.us/uneekor-golf-simulator-nj" },
            ],
          }),
        }}
      />
    </main>
  );
}
