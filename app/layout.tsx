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
    default: "GolfLabs - 24/7 Self-Service Golf Simulators",
    template: "%s | GolfLabs",
  },
  description:
    "Experience premium 24/7 self-service golf simulators with Uneekor technology, smart lock access, and 50+ courses. Book online and play anytime.",
  keywords: [
    "golf simulator",
    "indoor golf",
    "24/7 golf",
    "self-service golf",
    "Uneekor simulator",
    "golf practice",
    "golf simulator booking",
    "indoor golf near me",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://golflabs.us",
    siteName: "GolfLabs",
    title: "GolfLabs - 24/7 Self-Service Golf Simulators",
    description:
      "Premium 24/7 self-service golf simulators with Uneekor technology. Book online, unlock with your phone, and play anytime.",
    images: [
      {
        url: "/images/heroBanner.png",
        width: 1200,
        height: 630,
        alt: "GolfLabs - Premium Golf Simulator Bays",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GolfLabs - 24/7 Self-Service Golf Simulators",
    description:
      "Premium 24/7 self-service golf simulators with Uneekor technology. Book online and play anytime.",
    images: ["/images/heroBanner.png"],
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
      </body>
    </html>
  );
}
