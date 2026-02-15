"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle } from "lucide-react";
import Link from "next/link";

export function EmergencyCTA() {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4 text-center md:text-left">
            <div className="flex-shrink-0">
              <div className="bg-white/20 rounded-full p-3">
                <AlertTriangle className="h-8 w-8 md:h-10 md:w-10" />
              </div>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Emergency Tree Services Available 24/7
              </h2>
              <p className="text-lg text-red-100">
                Fallen trees, storm damage, or hazardous trees? We provide emergency tree removal services throughout Southern Tasmania. Available outside business hours for urgent situations.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="tel:0433804284">
              <Button
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency: 0433 804 284
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

