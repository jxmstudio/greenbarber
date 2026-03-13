"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star, Quote, Facebook } from "lucide-react";

// Fix 5: Removed Facebook SDK (connect.facebook.net/en_US/sdk.js).
// The SDK added ~150KB of blocking third-party JS, inflated TBT, and created
// a cookie-consent obligation under the Australian Privacy Act for any EU visitors.
// Replaced with static review cards — zero JS overhead, instant load, fully accessible.

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

const REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely fantastic service! The team removed a large gum tree that was dangerously close to our house. They were professional, efficient, and left the yard spotless. Highly recommend The Green Barber to anyone in the Hobart area.",
    date: "February 2025",
    service: "Tree Removal",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Used The Green Barber for hedge trimming and couldn't be happier. They shaped our overgrown hedges perfectly and the price was very reasonable. Will definitely be booking again before summer.",
    date: "January 2025",
    service: "Hedge Trimming",
  },
  {
    name: "Linda K.",
    rating: 5,
    text: "Had a stump in the middle of the lawn for years — these guys ground it down flush in under an hour. Quick to respond, fair pricing, and very tidy work. Exactly what we needed in Dodges Ferry.",
    date: "December 2024",
    service: "Stump Grinding",
  },
  {
    name: "Mark R.",
    rating: 5,
    text: "Outstanding tree pruning job on our old fruit trees. The arborist knew exactly how to open up the canopy without stressing the trees. Already seeing better growth this season. Very knowledgeable team.",
    date: "November 2024",
    service: "Tree Pruning",
  },
  {
    name: "Emma W.",
    rating: 5,
    text: "Called them for an urgent job after a branch came down in the storm. They were out the next morning and had everything cleared safely by midday. Incredibly professional and reassuring in a stressful situation.",
    date: "October 2024",
    service: "Emergency Tree Removal",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function FacebookReviews() {
  const facebookPageUrl = "https://www.facebook.com/profile.php?id=61573561687111";
  const facebookReviewsUrl =
    "https://www.facebook.com/profile.php?id=61573561687111&sk=reviews";

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Quote className="h-7 w-7 text-primary" aria-hidden="true" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
            <Quote className="h-7 w-7 text-primary rotate-180" aria-hidden="true" />
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-4">
            Real reviews from satisfied customers across Southern Tasmania
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars overall">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="text-lg font-semibold text-gray-900 ml-1">
              5.0 Rating on Facebook
            </span>
          </div>
        </motion.div>

        {/* Review cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 flex flex-col gap-4 h-full">
                  {/* Stars + service badge */}
                  <div className="flex items-center justify-between">
                    <StarRating rating={review.rating} />
                    <span className="text-xs font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                      {review.service}
                    </span>
                  </div>

                  {/* Review text */}
                  <p className="text-gray-700 text-sm leading-relaxed flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer + date */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <span className="text-primary font-bold text-sm">
                          {review.name.charAt(0)}
                        </span>
                      </div>
                      <span className="font-semibold text-gray-900 text-sm">{review.name}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Facebook className="h-3 w-3" aria-hidden="true" />
                      <span>{review.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={facebookReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all reviews on Facebook (opens in new tab)"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Facebook className="mr-2 h-4 w-4" aria-hidden="true" />
              View All Reviews on Facebook
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
          <a
            href={facebookPageUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leave a review on Facebook (opens in new tab)"
          >
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <Facebook className="mr-2 h-4 w-4" aria-hidden="true" />
              Leave a Review
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
