"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const towns = [
  { name: "Southampton", time: "Home base" },
  { name: "Lumberton", time: "~10 min" },
  { name: "Hainesport", time: "~12 min" },
  { name: "Tabernacle", time: "~12 min" },
  { name: "Mount Holly", time: "~15 min" },
  { name: "Pemberton", time: "~15 min" },
  { name: "Medford", time: "~15 min" },
  { name: "Vincentown", time: "~10 min" },
  { name: "Moorestown", time: "~20 min" },
  { name: "Marlton", time: "~20 min" },
  { name: "Burlington Twp", time: "~20 min" },
  { name: "Bordentown", time: "~25 min" },
];

export function LocalAreaSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            Serving golfers across Burlington County
          </h2>
          <p className="mt-3 text-muted-foreground">
            Conveniently located off Route 206 with free parking.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-4"
        >
          {towns.map((town, idx) => (
            <div key={town.name} className="flex items-center gap-3">
              <MapPin className={`size-3.5 flex-shrink-0 ${
                idx === 0 ? "text-primary" : "text-muted-foreground/30"
              }`} />
              <div>
                <p className={`text-sm font-medium ${
                  idx === 0 ? "text-primary" : "text-foreground"
                }`}>
                  {town.name}
                </p>
                <p className="text-xs text-muted-foreground">{town.time}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
