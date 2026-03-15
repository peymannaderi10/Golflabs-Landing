import { fetchLocations, fetchPricingRules } from "@/lib/api";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { CompetitorComparisonSection } from "./components/CompetitorComparisonSection";
import { HowItWorks } from "./components/HowItWorks";
import { FeaturesSection } from "./components/FeaturesSection";
import { FounderStorySection } from "./components/FounderStorySection";
import { FAQSection } from "./components/FAQSection";
import { LocalAreaSection } from "./components/LocalAreaSection";
import { LocationSection } from "./components/LocationSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default async function Home() {
  const locations = await fetchLocations();
  const defaultLocation = locations[0] || null;

  const pricingRules = defaultLocation
    ? await fetchPricingRules(defaultLocation.id)
    : [];

  const city = defaultLocation?.city || "Southampton";
  const state = defaultLocation?.state || "NJ";

  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <HeroSection city={city} state={state} />
      <HowItWorks />
      <PricingSection pricingRules={pricingRules} />
      <FeaturesSection />
      <FounderStorySection />
      <CompetitorComparisonSection />
      <FAQSection />
      <LocalAreaSection />
      <LocationSection location={defaultLocation} />
      <CTASection />
      <Footer city={city} state={state} />

      {/* JSON-LD: LocalBusiness + SportsActivityLocation */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["LocalBusiness", "SportsActivityLocation"],
            name: "GolfLabs",
            description:
              "24/7 self-service golf simulator in Southampton, NJ. No membership required. Book online from $25–$35/hr.",
            url: "https://golflabs.us",
            telephone: "+18567451025",
            address: {
              "@type": "PostalAddress",
              streetAddress: defaultLocation?.address || "133 Eayrestown Rd",
              addressLocality: city,
              addressRegion: state,
              postalCode: defaultLocation?.zipCode || "08088",
              addressCountry: "US",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 39.9526,
              longitude: -74.7141,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday",
                "Friday", "Saturday", "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            priceRange: "$25-$35",
            paymentAccepted: "Credit Card, Debit Card",
            currenciesAccepted: "USD",
            image: "https://golflabs.us/images/bay1.jpg",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "11",
              bestRating: "5",
            },
            areaServed: [
              { "@type": "City", name: "Southampton, NJ" },
              { "@type": "City", name: "Mount Holly, NJ" },
              { "@type": "City", name: "Medford, NJ" },
              { "@type": "City", name: "Lumberton, NJ" },
              { "@type": "City", name: "Pemberton, NJ" },
              { "@type": "City", name: "Marlton, NJ" },
              { "@type": "City", name: "Moorestown, NJ" },
              { "@type": "City", name: "Burlington Township, NJ" },
              { "@type": "City", name: "Eastampton, NJ" },
              { "@type": "City", name: "Hainesport, NJ" },
              { "@type": "City", name: "Shamong, NJ" },
              { "@type": "City", name: "Tabernacle, NJ" },
              { "@type": "City", name: "Vincentown, NJ" },
              { "@type": "City", name: "Browns Mills, NJ" },
              { "@type": "City", name: "Bordentown, NJ" },
              { "@type": "City", name: "Willingboro, NJ" },
              { "@type": "City", name: "Cherry Hill, NJ" },
              { "@type": "City", name: "Evesham, NJ" },
              { "@type": "City", name: "Mount Laurel, NJ" },
            ],
            sameAs: [
              "https://instagram.com/golflabs.us",
              "https://share.google/w6oDRCrUYfnvphWea",
            ],
            ...(pricingRules.length > 0 && {
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Golf Simulator Sessions",
                itemListElement: pricingRules.map((rule) => ({
                  "@type": "Offer",
                  name: rule.name,
                  price: rule.hourlyRate,
                  priceCurrency: "USD",
                  description: `${rule.startTime?.substring(0, 5)} — ${rule.endTime?.substring(0, 5)}`,
                })),
              },
            }),
          }),
        }}
      />

      {/* JSON-LD: FAQPage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "Do I need a membership to play at GolfLabs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. There's no membership, no monthly fee, and no commitment. Just pick a time, pay for your session, and show up.",
                },
              },
              {
                "@type": "Question",
                name: "How much does GolfLabs cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Off-peak hours (2am–9am) are $25/hr. Peak hours (9am–2am) are $35/hr. 15-minute minimum booking. No membership fees.",
                },
              },
              {
                "@type": "Question",
                name: "Is GolfLabs open 24/7?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, 24/7, 365 days a year. Book any time that works for you.",
                },
              },
              {
                "@type": "Question",
                name: "Can I bring friends to GolfLabs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes — up to 4 people per session at the same price.",
                },
              },
              {
                "@type": "Question",
                name: "Does GolfLabs have a membership?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. GolfLabs has no membership, no monthly fees, and no commitment. Just book and play.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
