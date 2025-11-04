"use client";

import { VideoHero } from "@/components/hero/VideoHero";
import { ServiceSection } from "@/components/services/ServiceSection";
import { ContactStrip } from "@/components/common/ContactStrip";
import { FacebookReviews } from "@/components/reviews/FacebookReviews";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, MapPin } from "lucide-react";

export default function HomePage() {
  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "5000+", label: "Happy Customers" },
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
      
      {/* Stats Section */}
      <section className="py-12 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-2" />
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm md:text-base text-gray-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServiceSection services={services} />

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                <Card className="h-full">
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
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
