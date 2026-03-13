"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Wrench, ChevronLeft } from "lucide-react";
import { APP_URL } from "@/lib/config";

const TROUBLESHOOTING_STEPS = [
  {
    id: "device-not-found",
    title: 'Uneekor shows "Device Not Found"',
    image: "/images/getting-started/devicenotfound.png",
    whatToDo:
      "Make sure the launch monitor is turned on, then click the Retry Now button at the top of the screen. You are now ready to launch Game Day for playing rounds against friends or practice if you'd like to just hit the range with detailed metrics!",
  },
];

export default function GettingStartedPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
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
            <div className="flex items-center gap-4">
              <a href={`${APP_URL}/dashboard`}>
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                >
                  Login
                </Button>
              </a>
              <a href={`${APP_URL}/booking`} className="hidden md:inline-flex">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      <div className="pt-[72px]">
        <div className="container mx-auto px-6 py-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <Link href="/">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground -ml-2"
                >
                  <ChevronLeft className="mr-1 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
            <h1 className="text-4xl desk:text-5xl font-bold text-foreground mb-2">
              Getting <span className="text-primary">Started</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-10">
              Watch the walkthrough below, then use the troubleshooting steps if something
              doesn&apos;t work as expected.
            </p>

            {/* Video Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                How to start playing on the <span className="text-primary">simulator</span>
              </h2>
              <div className="flex justify-center">
                <div className="w-full max-w-sm rounded-xl overflow-hidden border border-border bg-card shadow-lg">
                  <video
                    className="w-full aspect-[9/16] bg-black object-contain"
                    controls
                    muted
                    playsInline
                    preload="metadata"
                  >
                    <source src="/videos/gettingStarted.webm" type="video/webm" />
                    <p className="p-4 text-muted-foreground">
                      Your browser does not support the video tag.
                    </p>
                  </video>
                  <p className="p-3 text-sm text-muted-foreground border-t border-border">
                    Video length: ~3 minutes. Covers booking, arrival, bay access, and starting
                    your round.
                  </p>
                </div>
              </div>
            </section>

            {/* Troubleshooting Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2 text-foreground">
                <Wrench className="h-7 w-7 text-primary flex-shrink-0" />
                <span className="text-primary">Troubleshooting</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                If something in the bay isn&apos;t working, find the situation below that matches
                what you see and follow the steps.
              </p>

              <div className="space-y-10">
                {TROUBLESHOOTING_STEPS.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    <Card className="overflow-hidden border-border bg-card text-card-foreground">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-semibold text-card-foreground">
                          {step.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="rounded-lg overflow-hidden border border-border bg-muted/30">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full aspect-video object-cover object-center"
                          />
                        </div>
                        <div className="flex gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                          <AlertCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium text-card-foreground text-sm mb-1">
                              What to do
                            </p>
                            <p className="text-sm text-muted-foreground">{step.whatToDo}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
