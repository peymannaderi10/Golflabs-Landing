import type { Metadata } from "next";
import { Lexend, Inter } from "next/font/google";
import "./globals.css";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Golf Simulator Southampton NJ | 24/7 No Membership | GolfLabs",
    template: "%s | GolfLabs",
  },
  description:
    "24/7 self-service golf simulator in Southampton, NJ. No membership required. Uneekor EYE Mini, 50+ courses. $25–$35/hr — half the price of other indoor golf in Burlington County. Book online, unlock with your phone.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://golflabs.us",
    siteName: "GolfLabs",
    title: "GolfLabs — 24/7 Golf Simulator in Southampton NJ | No Membership",
    description:
      "Book a private golf simulator 24/7 in Southampton, NJ. No membership required. Uneekor technology, 50+ courses, smart lock access. From $25/hr.",
    images: [
      {
        url: "/images/bay1.jpg",
        width: 1200,
        height: 630,
        alt: "GolfLabs golf simulator bay in Southampton, NJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GolfLabs — 24/7 Golf Simulator in Southampton NJ",
    description:
      "No membership. No staff. From $25/hr. Book online, unlock with your phone, play anytime. Southampton, NJ.",
    images: ["/images/bay1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://golflabs.us"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${lexend.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GolfLabs",
              "url": "https://golflabs.us",
              "logo": "https://golflabs.us/images/bay1.jpg",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+18567451025",
                "contactType": "customer service",
              },
              "sameAs": [
                "https://instagram.com/golflabs.us",
                "https://share.google/w6oDRCrUYfnvphWea",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
