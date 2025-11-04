"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Service } from "@/data/services";

interface ServiceSectionProps {
  services: Service[];
  title?: string;
  description?: string;
  showViewAll?: boolean;
}

export function ServiceSection({
  services,
  title = "Our Services",
  description = "Professional tree services throughout Southern Tasmania",
  showViewAll = true,
}: ServiceSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="flex flex-col h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-4 flex-1">
                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                        className="flex items-start"
                      >
                        <span className="text-primary mr-2 font-bold">✓</span>
                        <span className="text-sm text-gray-600">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link href={`/services/${service.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {showViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-8"
          >
            <Link href="/services">
              <Button variant="default" size="lg" className="hover:scale-105 transition-transform">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
