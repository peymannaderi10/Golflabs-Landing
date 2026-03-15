"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Hourly rate", us: "$25–$35/hr", them: "$60–75/hr" },
  { feature: "Membership required", us: false, them: true },
  { feature: "Open 24/7 for everyone", us: true, them: false },
  { feature: "15-minute minimum", us: true, them: false },
  { feature: "Book online instantly", us: true, them: false },
  { feature: "Self-service — no staff needed", us: true, them: false },
  { feature: "BYOB", us: true, them: false },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-foreground">{value}</span>;
  }
  return value ? (
    <Check className="h-4 w-4 text-primary" />
  ) : (
    <X className="h-4 w-4 text-muted-foreground/30" />
  );
}

export function CompetitorComparisonSection() {
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
            GolfLabs vs. other facilities
          </h2>
          <p className="mt-3 text-muted-foreground">
            How we compare to other indoor golf options in Burlington County.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-border bg-background"
        >
          {/* Header */}
          <div className="grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] border-b border-border">
            <div className="px-6 py-4" />
            <div className="px-4 py-4 text-center border-l border-border bg-primary/5">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">GolfLabs</span>
            </div>
            <div className="px-4 py-4 text-center border-l border-border">
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Others</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, idx) => (
            <div
              key={row.feature}
              className={`grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_160px_160px] items-center ${
                idx < rows.length - 1 ? "border-b border-border" : ""
              } hover:bg-muted/40 transition-colors duration-200`}
            >
              <div className="px-6 py-4">
                <span className="text-sm text-foreground">{row.feature}</span>
              </div>
              <div className="px-4 py-4 flex justify-center border-l border-border bg-primary/5">
                <CellValue value={row.us} />
              </div>
              <div className="px-4 py-4 flex justify-center border-l border-border">
                <CellValue value={row.them} />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
