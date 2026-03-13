"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { APP_URL } from "@/lib/config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold text-foreground"
          >
            <Link href="/">
              <span className="text-primary">GOLF</span>
              <span className="text-foreground">LABS</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="hidden desk:flex space-x-8"
          >
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <Link href="/getting-started" className="text-foreground hover:text-primary transition-colors">Getting Started</Link>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#features" className="text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
            <Link href="/licensing" className="text-foreground hover:text-primary transition-colors">Licensing</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center space-x-4"
          >
            <a href={`${APP_URL}/dashboard`}>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
              >
                Login
              </Button>
            </a>
            <a href={`${APP_URL}/booking`} className="hidden md:inline-flex">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold btn-hover">
                Book Now
              </Button>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="desk:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="desk:hidden mt-4 pb-4 space-y-3"
          >
            <a href="#home" onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors">Home</a>
            <Link href="/getting-started" onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors">Getting Started</Link>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors">Pricing</a>
            <a href="#how-it-works" onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors">How It Works</a>
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors">Features</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors">About</a>
            <Link href="/licensing" onClick={() => setIsMobileMenuOpen(false)} className="block text-foreground hover:text-primary transition-colors">Licensing</Link>
            <a href={`${APP_URL}/booking`} className="block">
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                Book Now
              </Button>
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
