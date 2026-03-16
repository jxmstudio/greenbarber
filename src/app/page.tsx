"use client";

import { VideoHero } from "@/components/hero/VideoHero";
import { ServiceSection } from "@/components/services/ServiceSection";
import { ContactStrip } from "@/components/common/ContactStrip";
import { EmergencyCTA } from "@/components/common/EmergencyCTA";
import { ReviewsCarousel } from "@/components/reviews/ReviewsCarousel";
import { services } from "@/data/services";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { CheckCircle2, Award, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

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

  const locationAreas = [
    { name: "Hobart", slug: "hobart", suburbs: "Sandy Bay, Battery Point, North Hobart" },
    { name: "Kingborough", slug: "kingborough", suburbs: "Kingston, Blackmans Bay, Margate" },
    { name: "Huon Valley", slug: "huon-valley", suburbs: "Huonville, Geeveston, Cygnet" },
    { name: "Clarence", slug: "clarence", suburbs: "Howrah, Bellerive, Rokeby" },
    { name: "Glenorchy", slug: "glenorchy", suburbs: "Moonah, New Town, Claremont" },
    { name: "Brighton", slug: "brighton", suburbs: "Old Beach, Pontville, Bagdad" },
    { name: "Sorell", slug: "sorell", suburbs: "Dodges Ferry, Carlton Beach, Midway Point" },
    { name: "Derwent Valley", slug: "derwent-valley", suburbs: "New Norfolk, Bushy Park, Maydena" },
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

      {/* Reviews Carousel */}
      <ReviewsCarousel />

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
              Professional tree services throughout Southern Tasmania — click your area for local information and pricing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locationAreas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <Link
                  href={`/services/${area.slug}`}
                  className="group flex flex-col gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-4 shadow-sm hover:border-primary hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                      {area.name}
                    </span>
                    <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" aria-hidden="true" />
                  </div>
                  <span className="text-xs text-gray-500">{area.suburbs}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            Don&apos;t see your suburb? <Link href="/contact" className="text-primary hover:underline">Contact us</Link> — we likely service your area.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <ContactStrip />
    </>
  );
}
