"use client";

import { Metadata } from "next";
import { ServiceSection } from "@/components/services/ServiceSection";
import { services } from "@/data/services";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesPage() {
  const whyChooseUs = [
    {
      title: "Certified Arborists",
      description:
        "Our team includes qualified arborists with extensive training and experience in tree care and maintenance.",
    },
    {
      title: "Fully Insured",
      description:
        "We carry comprehensive insurance coverage to protect your property and our team during all tree service operations.",
    },
    {
      title: "Local Expertise",
      description:
        "As Hobart locals, we understand Tasmania's unique tree species, climate, and local regulations.",
    },
    {
      title: "Modern Equipment",
      description:
        "We use the latest equipment and techniques to ensure safe, efficient, and professional service on every project.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section 
        className="text-white py-16 md:py-24"
        style={{
          background: 'linear-gradient(to bottom right, #2d5016, #4a7c3a, #6b9f5a)'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Tree Services in Hobart
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
              Expert arborists providing comprehensive tree care services throughout Hobart and
              surrounding suburbs. Fully insured and certified professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <ServiceSection services={services} showViewAll={false} />

      {/* Additional Information */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
                Why Choose The Green Barber?
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center mt-8"
            >
              <Link href="/contact">
                <Button size="lg" className="hover:scale-105 transition-transform">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
