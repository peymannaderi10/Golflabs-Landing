"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export default function LicensingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-foreground">
              <span className="text-primary">GOLF</span>
              <span className="text-foreground">LABS</span>
            </Link>
            <Link href="/">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                <ChevronLeft className="mr-0 desk:mr-2 h-4 w-4" />
                <span className="hidden desk:inline">Back to Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block text-primary text-sm font-semibold mb-6"
            >
              FOR ENTREPRENEURS & BUSINESS OWNERS
            </motion.div>
            <h1 className="text-3xl desk:text-6xl font-bold text-foreground mb-6">
              BUILD YOUR OWN <span className="text-primary">GOLF SIMULATOR</span> BUSINESS
            </h1>
            <p className="text-lg desk:text-xl text-muted-foreground mb-8 leading-relaxed">
              Looking to start your own affordable golf simulator business? We&apos;ve built the
              technology stack that powers our 24/7 self-service operations — and we&apos;re offering
              it to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 desk:py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid desk:grid-cols-2 gap-10 desk:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center desk:text-left"
            >
              <h2 className="text-2xl desk:text-4xl font-bold text-foreground mb-6 desk:mb-8">
                Everything You Need to
                <br className="desk:hidden" />{" "}
                <span className="text-primary">Get Started</span>
              </h2>
              <ul className="space-y-4 desk:space-y-5 mb-8 desk:mb-10 inline-block text-left">
                {[
                  "Complete booking platform with online payments",
                  "Kiosk software for self-service check-in",
                  "Smart lock integration for automated access",
                  "Customer management dashboard",
                  "Real-time availability & scheduling",
                  "Automated email confirmations & reminders",
                  "Revenue tracking & analytics",
                  "Ongoing support & updates",
                ].map((feature, index) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <Check className="h-5 w-5 desk:h-6 desk:w-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground text-base desk:text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex justify-center desk:justify-start"
              >
                <a href="mailto:info@golflabs.us?subject=Software Licensing Inquiry">
                  <Button
                    size="lg"
                    className="w-full desk:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 desk:py-6 text-base desk:text-lg"
                  >
                    Get a Free Quote
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative flex items-center"
            >
              <div className="relative w-full">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="w-full desk:w-[90%] ml-auto relative z-20"
                >
                  <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/bookingPage.png"
                      alt="Booking Interface"
                      className="w-full h-auto block"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="w-full desk:w-[90%] mr-auto -mt-8 desk:-mt-20 desk:-ml-8 relative z-30"
                >
                  <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/kioskLockPage.png"
                      alt="Kiosk Display"
                      className="w-full h-auto block"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute bottom-20 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Customer Experience Section */}
      <section className="py-12 desk:py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid desk:grid-cols-2 gap-10 desk:gap-16 items-center">
            {/* iPhone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center order-2 desk:order-1"
            >
              <div className="relative">
                <div className="relative w-[240px] h-[500px] desk:w-[280px] desk:h-[580px] bg-gray-900 rounded-[2.5rem] desk:rounded-[3rem] p-2.5 desk:p-3 shadow-2xl">
                  <div className="absolute inset-2 bg-gray-800 rounded-[2.5rem]" />
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20" />
                  <div className="relative w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 rounded-[2.3rem] overflow-hidden flex items-center justify-center p-4">
                    <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                      <div className="text-center pt-5 px-4">
                        <div className="flex justify-center mb-3">
                          <svg className="h-10 w-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                        </div>
                        <h4 className="text-lg font-semibold text-blue-600">Door Access</h4>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="bg-gray-50 rounded-lg p-3 text-sm">
                          <h5 className="font-medium text-gray-900 mb-2">Booking Details:</h5>
                          <div className="space-y-1 text-gray-600">
                            <p><strong>Start:</strong> 6:00 PM</p>
                            <p><strong>End:</strong> 7:30 PM</p>
                            <p><strong>Booking ID:</strong> a3f8b2c1</p>
                          </div>
                        </div>
                        <div className="w-full bg-primary text-white py-2.5 px-4 rounded-md font-medium text-sm flex items-center justify-center gap-2">
                          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                          </svg>
                          Unlock Door
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-4 bg-primary/20 rounded-[4rem] blur-3xl -z-10" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="order-1 desk:order-2 desk:pl-0 desk:pr-24 desk:-ml-32 text-center desk:text-left"
            >
              <span className="inline-block text-primary text-sm font-semibold mb-4">
                SEAMLESS EXPERIENCE
              </span>
              <h2 className="text-2xl desk:text-4xl font-bold text-foreground mb-4 desk:mb-6">
                Your Customers Will <span className="text-primary">Love It</span>
              </h2>
              <p className="text-base desk:text-xl text-muted-foreground mb-6 desk:mb-8 leading-relaxed">
                After booking online, your customers receive a confirmation email with a one-tap
                unlock link. When they arrive, they simply tap the button on their phone to unlock
                the door — no codes to remember, no keys to carry, no waiting around.
              </p>
              <ul className="space-y-4">
                {[
                  "Book online in under 2 minutes",
                  "Instant email confirmation with unlock link",
                  "One-tap door access from their phone",
                  "No staff needed — fully automated",
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center"
                  >
                    <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 desk:py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10 desk:mb-16"
          >
            <h2 className="text-2xl desk:text-4xl font-bold text-foreground mb-4">
              Why Partner With <span className="text-primary">GolfLabs</span>?
            </h2>
            <p className="text-base desk:text-xl text-muted-foreground max-w-2xl mx-auto">
              We&apos;ve already done the hard work. Our software is battle-tested and running in
              production.
            </p>
          </motion.div>

          <div className="grid desk:grid-cols-3 gap-6 desk:gap-8">
            {[
              {
                title: "Proven Technology",
                description:
                  "Our software powers real golf simulator businesses 24/7. It's been refined through actual customer usage and feedback.",
              },
              {
                title: "Quick Setup",
                description:
                  "Get your business running in days, not months. We handle the technical complexity so you can focus on your customers.",
              },
              {
                title: "Ongoing Support",
                description:
                  "We're invested in your success. Get continuous updates, new features, and dedicated support from our team.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-6 desk:p-8 rounded-2xl border border-border shadow-lg"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-12 desk:py-20 bg-gradient-to-r from-primary via-primary/90 to-primary"
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl desk:text-5xl font-bold text-primary-foreground mb-4 desk:mb-6"
          >
            Ready to Start Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base desk:text-xl text-primary-foreground/90 mb-6 desk:mb-8 max-w-2xl mx-auto"
          >
            Contact us today for a free consultation and quote. Let&apos;s build something great
            together.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="mailto:info@golflabs.us?subject=Software Licensing Inquiry">
              <Button
                size="lg"
                className="bg-background hover:bg-background/90 text-foreground font-semibold px-8 desk:px-12 py-4 desk:py-6 text-base desk:text-lg"
              >
                Contact Us Today
              </Button>
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-foreground py-8">
        <div className="container mx-auto px-6 text-center">
          <Link href="/" className="text-xl font-bold text-background mb-4 inline-block">
            <span className="text-primary">GOLF</span>LABS
          </Link>
          <p className="text-muted">
            &copy; {new Date().getFullYear()} Golf Labs Technologies LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
