"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import Link from "next/link";

interface ContactStripProps {
  title?: string;
  description?: string;
  showPhone?: boolean;
  showEmail?: boolean;
}

export function ContactStrip({
  title = "Ready to Get Started?",
  description = "Contact us today for a free quote on all your tree service needs in Hobart",
  showPhone = true,
  showEmail = true,
}: ContactStripProps) {
  return (
    <section className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
            <p className="text-lg text-gray-100">{description}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {showPhone && (
              <Link href="tel:0433804284">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </Link>
            )}
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                {showEmail ? (
                  <>
                    <Mail className="mr-2 h-5 w-5" />
                    Get Quote
                  </>
                ) : (
                  "Get Free Quote"
                )}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

