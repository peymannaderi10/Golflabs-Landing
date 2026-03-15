import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CTASection } from "@/app/components/CTASection";
import { APP_URL } from "@/lib/config";
import { Check, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Golf Simulator Prices in NJ | Compare Indoor Golf Costs | GolfLabs",
  description:
    "Compare golf simulator prices across New Jersey. GolfLabs: $25–$35/hr with no membership. Most competitors charge $60–75/hr plus monthly fees.",
  alternates: { canonical: "https://golflabs.us/golf-simulator-prices-nj" },
};

const comparisonRows = [
  { feature: "Hourly rate", us: "$25–$35", them: "$60–$75" },
  { feature: "Membership required", us: false, them: true },
  { feature: "Open 24/7 for everyone", us: true, them: false },
  { feature: "15-minute minimum", us: true, them: false },
  { feature: "BYOB welcome", us: true, them: false },
  { feature: "Up to 4 people, same price", us: true, them: false },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  }
  return value ? (
    <Check className="h-4 w-4 text-primary" />
  ) : (
    <X className="h-4 w-4 text-muted-foreground/30" />
  );
}

export default function GolfSimulatorPricesNJPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="pt-[72px]">
        <div className="py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 sm:px-8">
            <p className="text-sm font-semibold text-primary tracking-widest uppercase">
              Pricing
            </p>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-tight">
              Golf Simulator Prices in New Jersey
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Indoor golf doesn&apos;t have to cost a fortune. Here&apos;s how GolfLabs
              compares to a typical NJ simulator facility.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table — matching CompetitorComparisonSection style */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Side-by-side comparison
            </h2>
          </div>

          <div className="border border-border bg-background">
            {/* Header */}
            <div className="grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] border-b border-border">
              <div className="px-6 py-4" />
              <div className="px-4 py-4 text-center border-l border-border bg-primary/5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">GolfLabs</span>
              </div>
              <div className="px-4 py-4 text-center border-l border-border">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Others</span>
              </div>
            </div>

            {/* Rows */}
            {comparisonRows.map((row, idx) => (
              <div
                key={row.feature}
                className={`grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] items-center ${
                  idx < comparisonRows.length - 1 ? "border-b border-border" : ""
                } hover:bg-muted/40 transition-colors duration-200`}
              >
                <div className="px-6 py-4">
                  <span className="text-sm text-foreground">{row.feature}</span>
                </div>
                <div className="px-4 py-4 flex justify-center border-l border-border bg-primary/5">
                  <CellValue value={row.us} />
                </div>
                <div className="px-4 py-4 flex justify-center border-l border-border">
                  <CellValue value={row.them} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Monthly Cost Breakdown */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Monthly cost if you play once a week
            </h2>
            <p className="mt-2 text-muted-foreground">
              A one-hour session, once per week, four weeks per month.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* GolfLabs */}
            <div className="border border-border">
              <div className="px-6 py-4 border-b border-border bg-primary/5">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">GolfLabs</span>
              </div>
              <div className="p-6 space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>1 hr/week at peak ($35)</span>
                  <span className="font-medium text-foreground">$140/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>1 hr/week at off-peak ($25)</span>
                  <span className="font-medium text-foreground">$100/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Membership fee</span>
                  <span className="font-medium text-foreground">$0</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-base">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-semibold text-foreground">$100–$140/mo</span>
                </div>
              </div>
            </div>

            {/* Competitor */}
            <div className="border border-border">
              <div className="px-6 py-4 border-b border-border">
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Typical NJ Facility</span>
              </div>
              <div className="p-6 space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>1 hr/week at $60–$75</span>
                  <span className="font-medium text-foreground">$240–$300/mo</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly membership</span>
                  <span className="font-medium text-foreground">$100–$200/mo</span>
                </div>
                <div className="flex justify-between border-t border-border pt-3 text-base">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-semibold text-foreground">$340–$500/mo</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 text-muted-foreground">
            That&apos;s a savings of <strong className="text-foreground">$200–$360 every month</strong> at
            GolfLabs — enough to pay for new clubs over the course of a year.
          </p>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Hidden costs at other facilities
            </h2>
            <p className="mt-2 text-muted-foreground">
              The hourly rate is only part of the picture.
            </p>
          </div>

          <div className="border border-border">
            {[
              {
                title: "Initiation fees",
                desc: "Some clubs charge $200–$500 upfront before you can even book your first session.",
              },
              {
                title: "Mandatory memberships for 24/7 access",
                desc: "Want to play at night or on weekends? You'll need a premium tier.",
              },
              {
                title: "Minimum hour commitments",
                desc: "Most facilities require 1–2 hour minimums, so a quick 30-minute warmup isn't an option.",
              },
              {
                title: "Food and drink markups",
                desc: "No outside food or drinks allowed, and on-site prices are typically 2–3x retail. At GolfLabs, BYOB is welcome.",
              },
            ].map((item, idx, arr) => (
              <div
                key={item.title}
                className={`px-6 py-5 ${
                  idx < arr.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 text-muted-foreground">
            At GolfLabs, the price you see is the price you pay. No membership, no minimums, no surprises.
          </p>
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
              { "@type": "ListItem", position: 2, name: "Golf Simulator Prices NJ", item: "https://golflabs.us/golf-simulator-prices-nj" },
            ],
          }),
        }}
      />
    </main>
  );
}
