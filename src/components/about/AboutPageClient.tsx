"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactStrip } from "@/components/common/ContactStrip";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Award,
  Users,
  Shield,
  MapPin,
  CheckCircle2,
  FileCheck,
  BadgeCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

const serviceAreas = [
  { name: "Hobart", slug: "hobart" },
  { name: "Kingborough", slug: "kingborough" },
  { name: "Huon Valley", slug: "huon-valley" },
  { name: "Clarence", slug: "clarence" },
  { name: "Glenorchy", slug: "glenorchy" },
  { name: "Brighton", slug: "brighton" },
  { name: "Sorell", slug: "sorell" },
  { name: "Derwent Valley", slug: "derwent-valley" },
];

const whyChooseUs = [
  {
    icon: Award,
    title: "Certified & Licensed",
    description:
      "Our team includes certified arborists with proper licensing and training. We stay current with industry best practices and safety standards.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description:
      "We carry comprehensive public liability insurance to protect your property and our team during all operations.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description:
      "With over 15 years of experience serving Southern Tasmania, we've completed thousands of successful projects across the region.",
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description:
      "As Southern Tasmania locals, we understand the region's unique tree species, climate, and local council requirements.",
  },
];

export function AboutPageClient() {
  return (
    <>
      {/* Hero Section */}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Green Barber</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
              Professional tree services throughout Southern Tasmania. Trusted by homeowners and
              businesses throughout the region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <div className="prose prose-lg max-w-none space-y-4 text-gray-700">
                <p>
                  The Green Barber has been serving Southern Tasmania with professional tree services
                  for over 15 years. Founded by Conrad, a certified arborist with extensive experience
                  in tree care and removal, our company has built a reputation for excellence, safety,
                  and customer satisfaction.
                </p>
                <p>
                  What started as a small local business has grown into one of Southern Tasmania's most
                  trusted tree service providers. We've completed thousands of projects across Dodges
                  Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorell, Hobart, Howrah, West
                  Hobart, and many other areas, helping homeowners and businesses maintain safe,
                  healthy, and beautiful landscapes.
                </p>
                <p>
                  Our commitment to quality, safety, and customer service has earned us a loyal
                  customer base and numerous referrals throughout Tasmania. We're proud to be your
                  local tree service experts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conrad's Background */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f8f9f7 0%, #f0f4ed 50%, #e8ede5 100%)" }}
      >
        <div className="absolute inset-0 pattern-wood opacity-15" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <div className="inline-block mb-4">
                  <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet Conrad</h2>
              </div>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Conrad, the founder and lead arborist at The Green Barber, brings years of
                      experience and expertise to every project. With formal training in arboriculture
                      and a passion for tree care, Conrad has built a reputation for delivering
                      exceptional service and results.
                    </p>
                    <p>
                      His deep understanding of Tasmania's unique tree species, local climate
                      conditions, and council regulations ensures that every job is completed to the
                      highest standards. Conrad's hands-on approach means he's often on-site,
                      overseeing operations and ensuring customer satisfaction.
                    </p>
                    <p>
                      When you work with The Green Barber, you're working with a team led by someone
                      who truly cares about trees, safety, and providing the best possible service to
                      Southern Tasmania residents and businesses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #ffffff 0%, #f8f9f7 100%)" }}
      >
        <div className="absolute inset-0 pattern-organic opacity-25" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Why Choose The Green Barber?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <item.icon className="h-8 w-8 text-primary mb-2" aria-hidden="true" />
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Credentials */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f0f4ed 0%, #e8ede5 50%, #f8f9f7 100%)" }}
      >
        <div className="absolute inset-0 pattern-wood opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-block mb-4">
                <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Certifications & Credentials
              </h2>
              <p className="text-lg text-gray-600">
                We maintain the highest standards of professionalism and safety
              </p>
            </motion.div>
            {/* Trust signal strip: ABN + insurance */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              <div className="flex items-center gap-2 bg-white rounded-lg px-5 py-3 shadow-sm border border-gray-100">
                <Building2 className="h-5 w-5 text-primary" aria-hidden="true" />
                {/* TODO: Replace with real ABN once confirmed */}
                <span className="text-sm font-medium text-gray-700">ABN: 00 000 000 000</span>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-lg px-5 py-3 shadow-sm border border-gray-100">
                <Shield className="h-5 w-5 text-primary" aria-hidden="true" />
                <span className="text-sm font-medium text-gray-700">$20M Public Liability Insurance</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: BadgeCheck,
                  title: "Certified Arborists",
                  body: "Our team includes qualified arborists with formal certification and training in arboriculture. We stay current with industry best practices, safety standards, and continuing education requirements.",
                },
                {
                  icon: Shield,
                  title: "Fully Insured",
                  body: "We carry $20M public liability insurance to protect your property and our team during all operations. Our insurance coverage meets industry standards and provides peace of mind for every project.",
                },
                {
                  icon: FileCheck,
                  title: "Licensed & Compliant",
                  body: "All our operations comply with local council regulations and Tasmanian state requirements. We understand permit processes and can assist with applications when needed for protected or heritage trees.",
                },
                {
                  icon: Award,
                  title: "Industry Memberships",
                  body: "We maintain active involvement in the arboriculture industry, staying connected with professional associations and keeping up-to-date with the latest techniques, equipment, and safety protocols.",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary rounded-lg">
                          <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        <CardTitle>{item.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.body}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #f8f9f7 0%, #f0f4ed 100%)" }}
      >
        <div className="absolute inset-0 pattern-organic opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-block mb-4">
                <div className="h-1 w-16 bg-primary mx-auto rounded-full" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Service Areas</h2>
              <p className="text-lg text-gray-600">
                Professional tree services throughout Southern Tasmania — click your area for local information.
              </p>
            </motion.div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link
                    href={`/services/${area.slug}`}
                    className="group flex items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:border-primary hover:text-primary transition-all duration-200"
                  >
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" aria-hidden="true" />
                      {area.name}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-gray-400 group-hover:text-primary transition-colors" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactStrip />
    </>
  );
}
