"use client";

import Link from "next/link";
import { Instagram } from "lucide-react";

interface FooterProps {
  city?: string;
  state?: string;
}

export function Footer({ city = "Southampton", state = "NJ" }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold tracking-tight mb-3">
              <span className="text-primary">GOLF</span>
              <span className="text-foreground">LABS</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              24/7 self-service golf simulator in {city}, {state}. No membership required.
            </p>
            <a
              href="https://instagram.com/golflabs.us"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
            >
              <Instagram className="size-4" />
              @golflabs.us
            </a>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Pages</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-primary transition-colors duration-200">Home</Link></li>
              <li><a href="/#pricing" className="hover:text-primary transition-colors duration-200">Pricing</a></li>
              <li><Link href="/about" className="hover:text-primary transition-colors duration-200">About</Link></li>
              <li><Link href="/getting-started" className="hover:text-primary transition-colors duration-200">Getting Started</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors duration-200">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>133 Eayrestown Rd</li>
              <li>{city}, {state} 08088</li>
              <li>
                <a href="tel:8567451025" className="hover:text-primary transition-colors duration-200">
                  (856) 745-1025
                </a>
              </li>
              <li>Open 24/7</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/policy/terms" className="hover:text-primary transition-colors duration-200">Terms of Service</Link></li>
              <li><Link href="/policy/privacy" className="hover:text-primary transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link href="/policy/waiver" className="hover:text-primary transition-colors duration-200">Liability Waiver</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Golf Labs Technologies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
