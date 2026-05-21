import type { Metadata } from "next";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { CTASection } from "@/app/components/CTASection";
import { MembershipsContent } from "./MembershipsContent";

export const metadata: Metadata = {
  title: "Memberships | GolfLabs Golf Simulator Southampton NJ",
  description:
    "GolfLabs memberships in Southampton, NJ. Monthly bay hours, priority booking, 24/7 Pivotal Training Gym access, and exclusive Founding Member perks. Month-to-month, no penalty.",
  alternates: { canonical: "https://golflabs.us/memberships" },
};

export default function MembershipsPage() {
  return (
    <main className="min-h-screen bg-white text-foreground">
      <Navbar />
      <div className="pt-[72px]">
        <MembershipsContent />
      </div>
      <CTASection />
      <Footer />
    </main>
  );
}
