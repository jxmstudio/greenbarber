"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Service } from "@/data/services";
import { useState } from "react";

interface ServicePageContentProps {
  service: Service;
}

export function ServicePageContent({ service }: ServicePageContentProps) {
  const [imageError, setImageError] = useState(false);
  
  // Helper to encode file paths with spaces and special characters
  const encodeImagePath = (path: string) => {
    return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
  };

  return (
    <>
      {/* Service Hero Image with Title */}
      <section className="relative h-[400px] md:h-[600px] overflow-hidden">
        {service.image && !imageError ? (
          <>
            <Image
              src={encodeImagePath(service.image)}
              alt={service.imageAlt}
              fill
              className="object-cover"
              priority
              onError={() => setImageError(true)}
              unoptimized
              suppressHydrationWarning
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/20" />
        )}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl" style={{ fontFamily: 'var(--font-display)' }}>
              {service.name}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {service.shortDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #fafbf9 100%)'
      }}>
        <div className="absolute inset-0 pattern-organic opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">About {service.name}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Professional {service.name.toLowerCase()} is essential when trees pose safety
                  risks, are diseased, or need professional care. Our experienced arborists throughout
                  Southern Tasmania use safe, efficient techniques while protecting your property and
                  surrounding landscape.
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h2 className="text-3xl font-bold mb-4">
                  Why Choose Professional {service.name}?
                </h2>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start"
                    >
                      <CheckCircle2 className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-lg text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-4">{service.process.title}</h2>
                <ol className="space-y-4">
                  {service.process.steps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white font-bold mr-4 flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-lg text-gray-700 pt-1">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </motion.div>

              {/* Pricing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Pricing</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-4">{service.pricing}</p>
                    <Link href="/contact">
                      <Button className="hover:scale-105 transition-transform">
                        <Phone className="mr-2 h-4 w-4" />
                        Get Free Quote
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <Card className="hover:shadow-lg transition-shadow sticky top-24">
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Link href="/contact">
                    <Button className="w-full hover:scale-105 transition-transform">
                      <Phone className="mr-2 h-4 w-4" />
                      Request Quote
                    </Button>
                  </Link>
                  <div className="text-sm text-gray-600">
                    <p className="font-semibold mb-2">Service Areas:</p>
                    <ul className="space-y-1">
                      <li>• Dodges Ferry</li>
                      <li>• Carlton Beach</li>
                      <li>• Eagle Hawk Neck</li>
                      <li>• Midway Point</li>
                      <li>• Sorrell</li>
                      <li>• Hobart</li>
                      <li>• Howrah</li>
                      <li>• West Hobart</li>
                      <li>• And more...</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #f8f9f7 0%, #f0f4ed 50%, #e8ede5 100%)'
      }}>
        <div className="absolute inset-0 pattern-wood opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{item.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

