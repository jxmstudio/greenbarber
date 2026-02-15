"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Scissors, TreePine, Axe, CircleDot } from "lucide-react";
import Image from "next/image";
import { Service } from "@/data/services";
import { useState } from "react";

const serviceIcons: Record<string, typeof Scissors> = {
  "hedge-trimming": Scissors,
  "tree-pruning": TreePine,
  "tree-removal": Axe,
  "stump-grinding": CircleDot,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Helper to encode file paths with spaces and special characters
  const encodeImagePath = (path: string) => {
    return path.split('/').map(segment => encodeURIComponent(segment)).join('/');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="flex flex-col h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-gray-200 hover:border-primary/30 relative overflow-hidden">
        {/* Service Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          {service.image && !imageError ? (
            <Image
              src={encodeImagePath(service.image)}
              alt={service.imageAlt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={() => setImageError(true)}
              unoptimized
              suppressHydrationWarning
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
              {(() => {
                const Icon = serviceIcons[service.id] || TreePine;
                return <Icon className="h-16 w-16 text-primary/40" />;
              })()}
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="text-xl font-bold text-white drop-shadow-lg">
              {service.name}
            </h3>
          </div>
        </div>
        
        <CardHeader className="relative">
          <CardDescription className="text-base mt-2">
            {service.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          <ul className="space-y-2 mb-4 flex-1">
            {service.benefits.slice(0, 3).map((benefit, idx) => (
              <li
                key={idx}
                className="flex items-start"
              >
                <span className="text-primary mr-2 font-bold">✓</span>
                <span className="text-sm text-gray-600">{benefit}</span>
              </li>
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
  );
}

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
    <section className="py-16 md:py-24 relative overflow-hidden" style={{
      background: 'linear-gradient(135deg, #f8f9f7 0%, #f0f4ed 50%, #e8ede5 100%)'
    }}>
      <div className="absolute inset-0 pattern-wood opacity-15" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            <ServiceCard key={service.id} service={service} index={index} />
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
