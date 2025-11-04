"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">
              Get in touch for a free quote on all your tree service needs throughout Southern Tasmania
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                Fill out the form below and we'll get back to you as soon as possible. For urgent
                inquiries, please call us directly.
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
                    <Phone className="h-5 w-5 text-primary mr-3 mt-1" />
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
                    <Mail className="h-5 w-5 text-primary mr-3 mt-1" />
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
                    <MapPin className="h-5 w-5 text-primary mr-3 mt-1" />
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
                    <Clock className="h-5 w-5 text-primary mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <p className="text-gray-600">Monday - Saturday: 7:00 AM - 6:00 PM</p>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2949.5!2d147.8105!3d-42.9925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDU5JzMzLjAiUyAxNDfCsDQ4JzM3LjgiRQ!5e0!3m2!1sen!2sau!4v1234567890123!5m2!1sen!2sau"
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
                      We service Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart and throughout Southern Tasmania.
                    </p>
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
