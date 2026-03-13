"use client";

import { motion } from "framer-motion";
import { MapPin, Clock3 } from "lucide-react";
import type { Location } from "@/lib/api";

interface LocationSectionProps {
  location: Location | null;
}

export function LocationSection({ location }: LocationSectionProps) {
  const city = location?.city || "New Jersey";
  const state = location?.state || "NJ";

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid desk:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl desk:text-5xl font-bold text-foreground mb-6">
              VISIT US IN <span className="text-primary">{city.toUpperCase()}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Located in the heart of {city}, {state}. Easy access from major highways with ample
              parking available.
            </p>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-start text-muted-foreground"
              >
                <MapPin className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span>
                  {location?.address && `${location.address}, `}
                  {city}, {state} {location?.zipCode || ""}
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center text-muted-foreground"
              >
                <Clock3 className="w-6 h-6 text-primary mr-3" />
                <span>Open 24/7 - Self-Service</span>
              </motion.div>
              {location?.phone && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center text-muted-foreground"
                >
                  <svg
                    className="w-6 h-6 text-primary mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a
                    href={`tel:${location.phone}`}
                    className="hover:text-primary transition-colors"
                  >
                    {location.phone}
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-80 rounded-lg overflow-hidden border border-border shadow-lg"
          >
            {location ? (
              <iframe
                title={`Map of ${location.name}`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${location.address}, ${location.city}, ${location.state} ${location.zipCode}`
                )}&output=embed`}
              />
            ) : (
              <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <MapPin className="w-16 h-16 text-primary" />
                </motion.div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
