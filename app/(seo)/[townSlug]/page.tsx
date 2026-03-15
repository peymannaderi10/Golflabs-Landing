import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SEO_TOWNS, getTownBySlug, getNearbyTowns } from "@/lib/seo-towns";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CTASection } from "@/app/components/CTASection";
import { APP_URL } from "@/lib/config";
import { MapPin, Clock3, DollarSign, Users, Zap, Phone, ArrowRight } from "lucide-react";

interface PageProps {
  params: Promise<{ townSlug: string }>;
}

export function generateStaticParams() {
  return SEO_TOWNS.map((town) => ({ townSlug: town.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { townSlug } = await params;
  const town = getTownBySlug(townSlug);
  if (!town) return {};

  const title = `Golf Simulator Near ${town.town} NJ | 24/7 No Membership | GolfLabs`;
  const description = `Looking for a golf simulator near ${town.town}, NJ? GolfLabs is ${town.driveTime} away. $25–$35/hr, 24/7 access, no membership. Uneekor EYE Mini with 50+ courses.`;

  return {
    title,
    description,
    alternates: { canonical: `https://golflabs.us/${town.slug}` },
    openGraph: { title, description, url: `https://golflabs.us/${town.slug}` },
  };
}

const features = [
  {
    icon: DollarSign,
    title: "$25–$35/hr",
    description: "Half the price of other simulator facilities in South Jersey. No hidden fees.",
  },
  {
    icon: Clock3,
    title: "Open 24/7",
    description: "Book any time — morning, night, weekends, holidays. No restricted hours.",
  },
  {
    icon: Users,
    title: "No Membership",
    description: "Pay per session. No monthly fees, no initiation costs, no commitment.",
  },
  {
    icon: Zap,
    title: "15-Min Minimum",
    description: "Book as little as 15 minutes. Quick warmup before work? That's $6.25–$8.75.",
  },
];

export default async function TownPage({ params }: PageProps) {
  const { townSlug } = await params;
  const town = getTownBySlug(townSlug);
  if (!town) notFound();

  const nearbyTowns = getNearbyTowns(town);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://golflabs.us/#business",
        name: "GolfLabs",
        description: `Golf simulator near ${town.town}, NJ. $25–$35/hr, 24/7 access, no membership required.`,
        url: `https://golflabs.us/${town.slug}`,
        telephone: "+18567451025",
        address: {
          "@type": "PostalAddress",
          streetAddress: "133 Eayrestown Rd",
          addressLocality: "Southampton",
          addressRegion: "NJ",
          postalCode: "08088",
          addressCountry: "US",
        },
        areaServed: { "@type": "City", name: `${town.town}, NJ` },
        priceRange: "$25-$35",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://golflabs.us" },
          { "@type": "ListItem", position: 2, name: `Golf Simulator Near ${town.town}, NJ`, item: `https://golflabs.us/${town.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="pt-[72px]">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase">
              {town.driveTime} from {town.town}
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Golf Simulator Near {town.town}, NJ
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {town.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={`${APP_URL}/dashboard?tab=book`}
                className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-transparent hover:text-primary transition-colors cursor-pointer"
              >
                Book Now
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why GolfLabs — feature grid matching FeaturesSection style */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Why {town.town} golfers choose GolfLabs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 border border-border">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`relative px-8 py-10 ${
                    idx < 2 ? "border-b border-border" : ""
                  } ${idx % 2 === 0 ? "md:border-r border-border" : ""}`}
                >
                  <div className="absolute left-0 inset-y-0 w-1 bg-border" />
                  <div className="mb-4 text-muted-foreground">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice vs Play */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Practice or play a round
            </h2>
            <p className="mt-2 text-muted-foreground">
              Two modes, two different experiences on the projector.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-border">
              <div className="overflow-hidden bg-muted/20">
                <img
                  src="/images/practice.webp"
                  alt="Uneekor View practice mode showing shot data on the projector"
                  className="w-full aspect-video object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">Practice</h3>
                <p className="text-sm text-primary font-medium mb-3">Uneekor View</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Driving range with full shot data</li>
                  <li>Ball speed, launch angle, spin rate, carry distance</li>
                  <li>Shot tracer and dispersion on the projector</li>
                  <li>Best for warming up or working on your swing</li>
                </ul>
              </div>
            </div>

            <div className="border border-border">
              <div className="overflow-hidden bg-muted/20">
                <img
                  src="/images/Play.png"
                  alt="GameDay course simulation showing a golf hole on the projector"
                  className="w-full aspect-video object-cover object-center"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">Play</h3>
                <p className="text-sm text-primary font-medium mb-3">GameDay</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>Play full rounds on 50+ world-famous courses</li>
                  <li>Pebble Beach, St Andrews, Bethpage Black & more</li>
                  <li>Realistic course visuals on the projector</li>
                  <li>Play solo or compete with up to 4 players</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Inside — comparison-style table */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              What&apos;s inside the bay
            </h2>
            <p className="mt-2 text-muted-foreground">
              Everything you need for a session — nothing you don&apos;t.
            </p>
          </div>

          <div className="border border-border">
            {[
              { label: "Launch Monitor", value: "Uneekor EYE Mini SimKit" },
              { label: "Software", value: "GameDay — 50+ world-famous courses" },
              { label: "Courses", value: "Pebble Beach, St Andrews, Bethpage Black & more" },
              { label: "Bay", value: "Private room, fits up to 4 people" },
              { label: "Clubs", value: "Right-handed set provided (or bring your own)" },
              { label: "Drinks", value: "BYOB welcome — fridge outside the bay" },
              { label: "Parking", value: "Free, right outside" },
            ].map((row, idx, arr) => (
              <div
                key={row.label}
                className={`flex flex-col sm:flex-row ${
                  idx < arr.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/40 transition-colors duration-200`}
              >
                <div className="sm:w-48 px-6 py-4 text-sm font-medium text-foreground sm:border-r border-border bg-muted/20">
                  {row.label}
                </div>
                <div className="px-6 py-4 text-sm text-muted-foreground flex-1">
                  {row.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:gap-16 gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
                Getting here from {town.town}
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                {town.directions}
              </p>
            </div>

            <div className="md:w-1/2 border border-border p-8">
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
                Visit Us
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>133 Eayrestown Rd, Southampton, NJ 08088</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Clock3 className="size-4 text-primary flex-shrink-0" />
                  <span>Open 24/7 — Self-Service</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="size-4 text-primary flex-shrink-0" />
                  <a
                    href="tel:8567451025"
                    className="hover:text-primary transition-colors duration-200"
                  >
                    (856) 745-1025
                  </a>
                </div>
              </div>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("133 Eayrestown Rd, Southampton, NJ 08088")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Get Directions
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Towns */}
      {nearbyTowns.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Also serving nearby towns
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {nearbyTowns.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/${nearby.slug}`}
                  className="group border border-border p-6 hover:border-primary/30 transition-colors duration-200 cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {nearby.town}, NJ
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {nearby.driveTime} from GolfLabs
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap gap-6 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </Link>
              <Link href="/getting-started" className="text-muted-foreground hover:text-primary transition-colors">
                Getting Started
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </main>
  );
}
