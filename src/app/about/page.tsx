"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContactStrip } from "@/components/common/ContactStrip";
import { motion } from "framer-motion";
import { Award, Users, Shield, MapPin, CheckCircle2, FileCheck, BadgeCheck } from "lucide-react";

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
        className="text-white py-16 md:py-24 relative overflow-hidden bg-layered-gradient"
      >
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
              Professional tree services throughout Southern Tasmania. Trusted by homeowners and businesses
              throughout the region.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #fafbf9 100%)'
      }}>
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
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #f8f9f7 0%, #f0f4ed 50%, #e8ede5 100%)'
      }}>
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
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9f7 100%)'
      }}>
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

      {/* Certifications & Credentials */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #f0f4ed 0%, #e8ede5 50%, #f8f9f7 100%)'
      }}>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <BadgeCheck className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Certified Arborists</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Our team includes qualified arborists with formal certification and training in arboriculture. We stay current with industry best practices, safety standards, and continuing education requirements.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Fully Insured</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We carry comprehensive public liability insurance to protect your property and our team during all operations. Our insurance coverage meets industry standards and provides peace of mind for every project.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <FileCheck className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Licensed & Compliant</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      All our operations comply with local council regulations and Tasmanian state requirements. We understand permit processes and can assist with applications when needed for protected or heritage trees.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary rounded-lg">
                        <Award className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle>Industry Memberships</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      We maintain active involvement in the arboriculture industry, staying connected with professional associations and keeping up-to-date with the latest techniques, equipment, and safety protocols.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #f8f9f7 0%, #f0f4ed 100%)'
      }}>
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
