import { fetchLocations, fetchPricingRules } from "@/lib/api";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PricingSection } from "./components/PricingSection";
import { HowItWorks } from "./components/HowItWorks";
import { FeaturesSection } from "./components/FeaturesSection";
import { BusinessCTA } from "./components/BusinessCTA";
import { Testimonials } from "./components/Testimonials";
import { LocationSection } from "./components/LocationSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";

export default async function Home() {
  const locations = await fetchLocations();
  const defaultLocation = locations[0] || null;

  const pricingRules = defaultLocation
    ? await fetchPricingRules(defaultLocation.id)
    : [];

  const city = defaultLocation?.city || "New Jersey";
  const state = defaultLocation?.state || "NJ";

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection city={city} state={state} />
      <PricingSection pricingRules={pricingRules} />
      <HowItWorks />
      <FeaturesSection />
      <BusinessCTA />
      <Testimonials />
      <LocationSection location={defaultLocation} />
      <CTASection />
      <Footer city={city} state={state} />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "GolfLabs",
            description:
              "Premium 24/7 self-service golf simulators with Uneekor technology and smart lock access.",
            url: "https://golflabs.us",
            ...(defaultLocation && {
              address: {
                "@type": "PostalAddress",
                streetAddress: defaultLocation.address,
                addressLocality: defaultLocation.city,
                addressRegion: defaultLocation.state,
                postalCode: defaultLocation.zipCode,
                addressCountry: "US",
              },
              ...(defaultLocation.phone && { telephone: defaultLocation.phone }),
            }),
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            priceRange: "$$",
            image: "https://golflabs.us/images/heroBanner.png",
          }),
        }}
      />
    </main>
  );
}
