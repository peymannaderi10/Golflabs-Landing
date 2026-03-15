"use client";

import { MapPin, Clock3, Phone, ArrowUpRight } from "lucide-react";
import type { Location } from "@/lib/api";

interface LocationSectionProps {
  location: Location | null;
}

export function LocationSection({ location }: LocationSectionProps) {
  const city = location?.city || "Southampton";
  const state = location?.state || "NJ";
  const address = location?.address
    ? `${location.address}, ${city}, ${state} ${location.zipCode || ""}`
    : "133 Eayrestown Rd, Southampton, NJ 08088";
  const mapsQuery = encodeURIComponent(address);

  return (
    <section className="relative bg-background border-t border-border min-h-[450px] flex items-center py-16 md:py-24">
      {/* Background map (desktop) */}
      <div className="absolute inset-0 z-0">
        <div className="hidden lg:block w-full h-full bg-muted/30">
          <iframe
            title={`Map of GolfLabs in ${city}, ${state}`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background via-background to-transparent" />
      </div>

      <div className="mx-auto max-w-5xl w-full px-6 sm:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-background/95 backdrop-blur-sm p-8 border border-border max-w-md">
          <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Visit Us
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6">
            {city}, {state}
          </h2>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="size-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{address}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Clock3 className="size-4 text-primary flex-shrink-0" />
              <span>Open 24/7 — Self-Service</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <Phone className="size-4 text-primary flex-shrink-0" />
              <a href="tel:8567451025" className="hover:text-primary transition-colors duration-200">
                (856) 745-1025
              </a>
            </div>
          </div>

          {/* Mobile map */}
          <div className="lg:hidden mb-6 h-48 overflow-hidden border border-border bg-muted/30">
            <iframe
              title={`Map of GolfLabs in ${city}, ${state}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            />
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            Get Directions
            <ArrowUpRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
