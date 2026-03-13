"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const PHONE_NUMBER = "0433804284";
const PHONE_DISPLAY = "0433 804 284";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services/hedge-trimming", label: "Hedge Trimming" },
    { href: "/services/tree-pruning", label: "Tree Pruning & Reductions" },
    { href: "/services/tree-removal", label: "Tree Removal" },
    { href: "/services/stump-grinding", label: "Stump Grinding" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 md:h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group" aria-label="The Green Barber — Home">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="flex items-center"
              suppressHydrationWarning
            >
              <Image
                src="/logo.jpg"
                alt="The Green Barber"
                width={180}
                height={72}
                className="h-12 md:h-14 lg:h-16 w-auto object-contain"
                priority
                suppressHydrationWarning
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary relative group block"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.div>
            ))}

            {/* Fix 7: Phone number visible in desktop nav — highest-converting CTA for tree services */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="hidden lg:flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary/80 transition-colors ml-2"
              aria-label={`Call us on ${PHONE_DISPLAY}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>

            <Link href="/contact">
              <Button className="ml-2 hover:scale-105 transition-transform">
                <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile right-side controls: click-to-call + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            {/* Fix 7: Click-to-call button on mobile — always visible, no menu needed */}
            <a
              href={`tel:${PHONE_NUMBER}`}
              aria-label={`Call us on ${PHONE_DISPLAY}`}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white shadow-md hover:bg-primary/90 transition-colors"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="h-6 w-6" aria-hidden="true" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <div className="mt-4 border-t pt-4">
                  <p className="px-3 py-2 text-sm font-semibold text-foreground">Services</p>
                  {serviceLinks.map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: (navLinks.length + index) * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile menu CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (navLinks.length + serviceLinks.length) * 0.1 }}
                  className="mt-4 flex flex-col gap-2"
                >
                  <a
                    href={`tel:${PHONE_NUMBER}`}
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label={`Call us on ${PHONE_DISPLAY}`}
                  >
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      Call {PHONE_DISPLAY}
                    </Button>
                  </a>
                  <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full">
                      <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                      Get Free Quote
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
