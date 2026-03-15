import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CTASection } from "@/app/components/CTASection";
import { FAQPageContent } from "./FAQPageContent";

export const metadata: Metadata = {
  title: "FAQ | GolfLabs Golf Simulator Southampton NJ — Pricing, Hours, Access",
  description:
    "Answers about GolfLabs golf simulator: pricing ($25–$35/hr), 24/7 hours, smart lock access, BYOB policy, Uneekor technology, and booking. No membership required.",
  alternates: { canonical: "https://golflabs.us/faq" },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <div className="pt-[72px]">
        <FAQPageContent />
      </div>
      <CTASection />
      <Footer />

      {/* FAQ JSON-LD for rich snippets */}
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
                name: "How does the smart lock work at GolfLabs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "15 minutes before your booking, you'll get an email with an unlock button. Tap it, and the front door unlocks. No keys, no codes, no apps to download.",
                },
              },
              {
                "@type": "Question",
                name: "What simulator technology does GolfLabs use?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We use the Uneekor EYE Mini SimKit with GameDay simulation software. It tracks ball speed, launch angle, spin rate, carry distance, and more.",
                },
              },
              {
                "@type": "Question",
                name: "Is GolfLabs staffed?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No, and that's by design. Fully self-service means no staffing costs, which is how we keep prices at $25–35/hr instead of $60–75.",
                },
              },
              {
                "@type": "Question",
                name: "What are GolfLabs' hours?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "24/7, 365 days a year. Early morning, late night, holidays — we're always open.",
                },
              },
              {
                "@type": "Question",
                name: "What is the minimum booking time at GolfLabs?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "15 minutes. You don't need to commit to a full hour. A quick practice session is just $8.75.",
                },
              },
              {
                "@type": "Question",
                name: "Where is GolfLabs located?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "133 Eayrestown Rd, Southampton, NJ 08088. Free parking right outside, conveniently located off Route 206.",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
