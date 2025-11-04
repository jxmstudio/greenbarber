"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Star, Quote, Facebook } from "lucide-react";

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

interface FacebookReviewsProps {
  showPagePlugin?: boolean;
  showReviewsLink?: boolean;
}

export function FacebookReviews({ 
  showPagePlugin = true,
  showReviewsLink = true 
}: FacebookReviewsProps) {
  useEffect(() => {
    // Load Facebook SDK
    if (typeof window !== "undefined" && !window.FB) {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: "v19.0",
        });
      };

      (function(d, s, id) {
        var js: HTMLScriptElement,
          fjs = d.getElementsByTagName(s)[0] as HTMLScriptElement;
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        }
      })(document, "script", "facebook-jssdk");
    } else if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  const facebookPageUrl = "https://www.facebook.com/profile.php?id=61573561687111";
  const facebookReviewsUrl = "https://www.facebook.com/profile.php?id=61573561687111&sk=reviews";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center mb-4">
            <Quote className="h-8 w-8 text-primary mr-2" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <Quote className="h-8 w-8 text-primary ml-2 rotate-180" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real reviews from satisfied customers across Tasmania
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900 ml-2">5.0 Rating</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Facebook Page Plugin */}
          {showPagePlugin && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-green-light/10 border-b">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg">
                      <Facebook className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">Follow Us on Facebook</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="rounded-lg overflow-hidden bg-gray-50">
                    <div
                      className="fb-page"
                      data-href={facebookPageUrl}
                      data-tabs="timeline"
                      data-width="500"
                      data-height="600"
                      data-small-header="false"
                      data-adapt-container-width="true"
                      data-hide-cover="false"
                      data-show-facepile="true"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Reviews Link Card */}
          {showReviewsLink && (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full shadow-xl border-2 border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col bg-gradient-to-br from-white to-gray-50/50">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-green-light/10 border-b">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-400 rounded-lg">
                      <Star className="h-6 w-6 text-white fill-white" />
                    </div>
                    <CardTitle className="text-2xl">Customer Reviews</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-8 w-8 text-yellow-400 fill-yellow-400 animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed text-center">
                      We're proud of the excellent service we provide to our customers. Our team
                      works hard to ensure every job is completed to the highest standards.
                    </p>
                    <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                      <p className="text-sm text-gray-600 text-center">
                        Read authentic reviews and testimonials from our satisfied customers on
                        Facebook. See why homeowners and businesses throughout Tasmania trust The
                        Green Barber for their tree service needs.
                      </p>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                      <Facebook className="h-5 w-5" />
                      <span className="text-sm font-medium">Verified Reviews on Facebook</span>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href={facebookReviewsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        size="lg"
                      >
                        <Facebook className="mr-2 h-5 w-5" />
                        View All Reviews on Facebook
                        <ExternalLink className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    <p className="text-xs text-gray-500 text-center mt-3">
                      Click to read all customer reviews and ratings
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Additional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Have you used our services? We'd love to hear from you!</p>
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Facebook className="mr-2 h-4 w-4" />
              Leave a Review on Facebook
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
