import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CTASection } from "@/app/components/CTASection";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About GolfLabs | Affordable Golf Simulator in Southampton NJ",
  description:
    "GolfLabs was founded by two locals in Southampton, NJ who built a 24/7 self-service golf simulator at half the price. No membership, no staff, $25–$35/hr. Learn our story.",
  alternates: { canonical: "https://golflabs.us/about" },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <AboutContent />
      <CTASection />
      <Footer />
    </main>
  );
}
