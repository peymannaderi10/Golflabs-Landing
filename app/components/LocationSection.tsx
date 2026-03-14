"use client";

import { MapPin, Clock3, ArrowUpRight } from "lucide-react";
import type { Location } from "@/lib/api";

interface LocationSectionProps {
  location: Location | null;
}

export function LocationSection({ location }: LocationSectionProps) {
  const city = location?.city || "Southampton";
  const state = location?.state || "NJ";
  const address = location?.address
    ? `${location.address}, ${city}, ${state} ${location.zipCode || ""}`
    : `${city} Township, ${state}`;
  const mapsQuery = encodeURIComponent(address);

  return (
    <section
      id="about"
      className="relative bg-white min-h-[500px] flex items-center border-t border-slate-100"
    >
      {/* Background map (desktop) */}
      <div className="absolute inset-0 z-0">
        <div className="hidden lg:block w-full h-full bg-slate-100">
          {location ? (
            <iframe
              title={`Map of ${city}`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300">
              <MapPin className="w-16 h-16" />
            </div>
          )}
        </div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 py-20">
        <div className="bg-white/90 backdrop-blur-xl p-6 sm:p-10 border-l-4 border-primary text-slate-900 shadow-xl max-w-lg">
          <div className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Visit Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-6">
            {city}, {state}
          </h2>
          <p className="text-slate-500 mb-8 text-sm leading-relaxed border-b border-slate-200 pb-6">
            Easy access from major highways. Free parking available. Our
            facility is fully self-service, open 24 hours a day, 7 days a week.
          </p>
          <div className="space-y-3 mb-8">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MapPin className="w-[18px] h-[18px] text-primary flex-shrink-0" />
              {location?.address
                ? `${location.address}, ${city}, ${state}`
                : `${city} Township, ${state}`}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <Clock3 className="w-[18px] h-[18px] text-primary flex-shrink-0" />
              Open 24/7 - Self-Service
            </div>
          </div>

          {/* Mobile map */}
          <div className="lg:hidden mb-6 h-48 overflow-hidden border border-slate-200 bg-slate-100">
            {location ? (
              <iframe
                title={`Map of ${city}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-slate-300">
                <MapPin className="w-10 h-10" />
              </div>
            )}
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs py-4 hover:bg-primary transition-colors flex items-center justify-center gap-2 group"
          >
            Get Directions
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
