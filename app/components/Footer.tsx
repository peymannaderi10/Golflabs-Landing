"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface FooterProps {
  city?: string;
  state?: string;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export function Footer({ city = "New Jersey", state = "NJ" }: FooterProps) {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-foreground py-12"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid desk:grid-cols-5 gap-8"
        >
          <motion.div variants={fadeInUp}>
            <div className="text-2xl font-bold text-background mb-4">
              <span className="text-primary">GOLF</span>LABS
            </div>
            <p className="text-muted">
              Premium golf simulation experience with 24/7 access and cutting-edge technology.
            </p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="text-background font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted">
              <li>
                <a href="#home" className="hover:text-primary transition-colors">Home</a>
              </li>
              <li>
                <Link href="/getting-started" className="hover:text-primary transition-colors">Getting Started</Link>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition-colors">Features</a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">About</a>
              </li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="text-background font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-muted">
              <li>Golf Simulation</li>
              <li>Practice Facilities</li>
              <li>Course Play</li>
              <li>24/7 Access</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="text-background font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted">
              <li>{city}, {state}</li>
              <li>Available 24/7</li>
              <li>Self-Service</li>
            </ul>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h4 className="text-background font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted">
              <li>
                <Link href="/policy/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/policy/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/policy/waiver" className="hover:text-primary transition-colors">Liability Waiver</Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-muted/20 mt-8 pt-8 text-center text-muted"
        >
          <p>&copy; {new Date().getFullYear()} Golf Labs Technologies LLC. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
