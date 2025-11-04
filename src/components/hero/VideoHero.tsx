"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import Link from "next/link";

interface VideoHeroProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

export function VideoHero({
  title = "Professional Tree Services in Southern Tasmania",
  subtitle = "Expert arborists providing hedge trimming, tree pruning and reductions, tree removal, and stump grinding services throughout Southern Tasmania.",
  showCTA = true,
}: VideoHeroProps) {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image/Video Placeholder */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom right, #2d5016, #4a7c3a, #6b9f5a)'
        }}
      >
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <div 
            className="absolute inset-0" 
            style={{
              background: 'linear-gradient(to bottom right, rgba(107, 159, 90, 0.2), rgba(74, 124, 58, 0.2), rgba(45, 80, 22, 0.2))'
            }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        {/* Placeholder for background image - replace with actual image */}
        <div className="absolute inset-0 bg-[url('/tree-services-hero.jpg')] bg-cover bg-center opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-3xl mx-auto">
            {subtitle}
          </p>

          {showCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white/20"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

