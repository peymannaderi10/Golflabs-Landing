import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CTASection } from "@/app/components/CTASection";
import { GettingStartedContent } from "./GettingStartedContent";

export const metadata: Metadata = {
  title: "Getting Started | How to Use GolfLabs Golf Simulator in Southampton NJ",
  description:
    "Step-by-step guide to using the GolfLabs golf simulator. Watch a 3-minute walkthrough video, learn how the smart lock works, and troubleshoot common issues.",
  alternates: { canonical: "https://golflabs.us/getting-started" },
};

export default function GettingStartedPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <GettingStartedContent />
      <CTASection />
      <Footer />

      {/* JSON-LD: VideoObject */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "How to Use the GolfLabs Golf Simulator",
            "description": "A 3-minute walkthrough covering booking, arrival, smart lock access, and starting your round at GolfLabs in Southampton, NJ.",
            "thumbnailUrl": "https://golflabs.us/images/bay1.jpg",
            "uploadDate": "2024-01-01",
            "contentUrl": "https://golflabs.us/videos/gettingStarted.webm",
          }),
        }}
      />
    </main>
  );
}
