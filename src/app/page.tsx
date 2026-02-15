"use client";

import { VideoHero } from "@/components/hero/VideoHero";
import { ServiceSection } from "@/components/services/ServiceSection";
import { ContactStrip } from "@/components/common/ContactStrip";
import { EmergencyCTA } from "@/components/common/EmergencyCTA";
import { FacebookReviews } from "@/components/reviews/FacebookReviews";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, MapPin } from "lucide-react";

export default function HomePage() {
  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: CheckCircle2, value: "100%", label: "Insured & Licensed" },
    { icon: MapPin, value: "50+", label: "Service Areas" },
  ];

  const whyChooseUs = [
    {
      title: "Experienced Professionals",
      description:
        "Our team of certified arborists brings years of experience serving Southern Tasmania and surrounding areas.",
    },
    {
      title: "Fully Insured",
      description:
        "We're fully insured with public liability insurance, giving you peace of mind during every project.",
    },
    {
      title: "Modern Equipment",
      description:
        "We use the latest equipment and techniques to ensure safe, efficient, and professional service.",
    },
    {
      title: "Local Expertise",
      description:
        "As Southern Tasmania locals, we understand the unique tree species and local regulations in the region.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      location: "Dodges Ferry, Tasmania",
      text: "Excellent service! The team removed a large tree safely and efficiently. Very professional and cleaned up perfectly.",
      rating: 5,
    },
    {
      name: "John Thompson",
      location: "Carlton Beach, Tasmania",
      text: "Great experience from quote to completion. The stump grinding was done quickly and the yard looks fantastic.",
      rating: 5,
    },
    {
      name: "Emma Davis",
      location: "Hobart, Tasmania",
      text: "Professional, reliable, and reasonably priced. They did a fantastic job pruning our trees. Highly recommend!",
      rating: 5,
    },
  ];

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

  return (
    <>
      <VideoHero />
      
      {/* Emergency CTA */}
      <EmergencyCTA />
      
      {/* Stats Section */}
      <section className="py-16 bg-layered-gradient text-white relative overflow-hidden pattern-organic">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-3 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                  <div className="relative bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
                    <stat.icon className="h-8 w-8 md:h-10 md:w-10 mx-auto text-white" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-b from-white to-gray-200 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-200 font-medium">{stat.label}</div>
                {index < stats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-px h-16 bg-white/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection services={services} />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9f7 50%, #f0f4ed 100%)'
      }}>
        <div className="absolute inset-0 pattern-organic opacity-30" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose The Green Barber?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional tree services you can trust throughout Southern Tasmania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border border-gray-200">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facebook Reviews Section */}
      <FacebookReviews />

      {/* Service Areas Section */}
      <section className="py-16 md:py-24 relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f8f9f7 30%, #f0f4ed 100%)'
      }}>
        <div className="absolute inset-0 pattern-wood opacity-20" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Areas</h2>
            <p className="text-lg text-gray-600">
              We proudly serve Southern Tasmania, with a focus on Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, and West Hobart
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {serviceAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-center text-gray-700"
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                        <span>{area}</span>
                      </motion.div>
                    ))}
                  </div>
                  <p className="mt-6 text-center text-gray-600">
                    And many more surrounding suburbs. Contact us to confirm we service your area!
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactStrip />
    </>
  );
}
