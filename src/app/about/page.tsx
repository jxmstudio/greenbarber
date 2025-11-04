"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactStrip } from "@/components/common/ContactStrip";
import { motion } from "framer-motion";
import { Award, Users, Shield, MapPin, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  const serviceAreas = [
    "Dodges Ferry",
    "Carlton Beach",
    "Eagle Hawk Neck",
    "Midway Point",
    "Sorrell",
    "Hobart",
    "Howrah",
    "West Hobart",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Green Barber</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
              Professional tree services throughout Southern Tasmania. Trusted by homeowners and businesses
              throughout the region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  The Green Barber has been serving Southern Tasmania with professional
                  tree services for over 15 years. Founded by Conrad, a certified arborist with
                  extensive experience in tree care and removal, our company has built a reputation
                  for excellence, safety, and customer satisfaction.
                </p>
                <p>
                  What started as a small local business has grown into one of Southern Tasmania's most trusted
                  tree service providers. We've completed thousands of projects across Dodges Ferry, Carlton Beach,
                  Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart, and many other areas, helping
                  homeowners and businesses maintain safe, healthy, and beautiful landscapes.
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Meet Conrad</h2>
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
                      who truly cares about trees, safety, and providing the best possible service
                      to Southern Tasmania residents and businesses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
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
                    <item.icon className="h-8 w-8 text-primary mb-2" />
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

      {/* Service Areas */}
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
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Service Areas</h2>
            </motion.div>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>We Serve Southern Tasmania</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {serviceAreas.map((area, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-center"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary mr-2" />
                      <span className="text-gray-700">{area}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-center text-gray-600">
                  Don't see your suburb? Contact us to confirm we service your area!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactStrip />
    </>
  );
}
