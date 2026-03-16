"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function ContactPageClient() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
              Get in touch for a free quote on all your tree service needs throughout Southern Tasmania
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{ background: "linear-gradient(to bottom, #ffffff 0%, #fafbf9 100%)" }}
      >
        <div className="absolute inset-0 pattern-organic opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible. For
                urgent inquiries, please call us directly.
              </p>
              <ContactForm />
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex items-start"
                  >
                    <Phone className="h-5 w-5 text-primary mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href="tel:0433804284" className="text-primary hover:underline">
                        0433 804 284
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-start"
                  >
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a
                        href="mailto:thegreenbarbertas@gmail.com"
                        className="text-primary hover:underline"
                      >
                        thegreenbarbertas@gmail.com
                      </a>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex items-start"
                  >
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-gray-600">70 Carlton Beach Rd, Dodges Ferry, TAS, Australia</p>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-start"
                  >
                    <Clock className="h-5 w-5 text-primary mr-3 mt-1" aria-hidden="true" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-gray-600">Monday – Saturday: 7:00 AM – 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                      <p className="text-sm text-gray-500 mt-2">
                        Emergency services available outside business hours
                      </p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.312371943386!2d147.6124663769327!3d-42.859024138870424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xaa6de934c39948d1%3A0x8c379fe8b9e3a9b1!2sThe%20Green%20Barber%20Tree%20Service!5e1!3m2!1sen!2sau!4v1773624772066!5m2!1sen!2sau"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="The Green Barber Location - Dodges Ferry, Tasmania"
                      />
                    </div>
                    <p className="text-sm text-gray-600 mt-4">
                      We service Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorell,
                      Hobart, Howrah, West Hobart and throughout Southern Tasmania.
                    </p>
                    <a
                      href="https://share.google/1ZmIIcEl4Z2iHc3EJ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      <svg viewBox="0 0 24 24" className="h-4 w-4 flex-shrink-0" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      View us on Google Maps &amp; leave a review
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
