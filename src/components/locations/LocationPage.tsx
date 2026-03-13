"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, ArrowRight, CheckCircle2, Leaf, Scissors, TreePine, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactForm } from "@/components/forms/ContactForm";
import { services } from "@/data/services";

const SERVICE_ICONS = [Scissors, TreePine, Leaf, CircleDot];

const PHONE_NUMBER = "0433804284";
const PHONE_DISPLAY = "0433 804 284";

export interface LocationPageProps {
  locationName: string;
  locationSlug: string;
  localDescription: string;
  /** Key suburbs / towns served in this area */
  suburbs: string[];
}

export function LocationPage({
  locationName,
  locationSlug: _locationSlug,
  localDescription,
  suburbs,
}: LocationPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-16 md:py-24 relative overflow-hidden bg-layered-gradient">
        <div className="absolute inset-0 pattern-organic opacity-40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-white/30 mx-auto rounded-full" />
            </div>
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Tree Services in {locationName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mb-8">
              Professional tree care for {locationName} homes and businesses — hedge trimming, tree
              pruning, tree removal, and stump grinding by qualified arborists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${PHONE_NUMBER}`}>
                <Button size="lg" className="text-lg px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call {PHONE_DISPLAY}
                </Button>
              </a>
              <a href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 bg-white/10 text-white border-white hover:bg-white/20"
                >
                  Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Local context */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #ffffff 0%, #fafbf9 100%)" }}
      >
        <div className="absolute inset-0 pattern-organic opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Serving {locationName}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{localDescription}</p>
              <div className="flex flex-wrap gap-2">
                {suburbs.map((suburb) => (
                  <span
                    key={suburb}
                    className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                    {suburb}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f9f7 0%, #f0f4ed 50%, #e8ede5 100%)" }}
      >
        <div className="absolute inset-0 pattern-wood opacity-15" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Services in {locationName}
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = SERVICE_ICONS[index] ?? Leaf;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="p-2 bg-primary/10 rounded-lg w-fit mb-2">
                        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-lg">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <p className="text-gray-600 text-sm flex-1">{service.shortDescription}</p>
                      {service.pricingFrom && (
                        <p className="text-sm font-semibold text-primary">{service.pricingFrom}</p>
                      )}
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" aria-hidden="true" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact"
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #ffffff 0%, #fafbf9 100%)" }}
      >
        <div className="absolute inset-0 pattern-organic opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="h-1 w-16 bg-primary mx-auto rounded-full mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Get a Free Quote in {locationName}
              </h2>
              <p className="mt-3 text-gray-600">
                Fill in the form below or call us directly on{" "}
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  {PHONE_DISPLAY}
                </a>
              </p>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
