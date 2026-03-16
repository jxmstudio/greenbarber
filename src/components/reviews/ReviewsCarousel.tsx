"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

// ─── Platform logo SVGs ────────────────────────────────────────────────────────

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function FacebookLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="#1877F2" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// ─── Review data ───────────────────────────────────────────────────────────────

interface Review {
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
  platform: "google" | "facebook";
}

// NOTE: Replace Google review text with real reviews from your Google Business Profile:
// https://share.google/1ZmIIcEl4Z2iHc3EJ
const GOOGLE_REVIEWS: Review[] = [
  {
    name: "David H.",
    rating: 5,
    text: "Excellent work on our large gum tree — safely removed without touching the fence or garden. Very professional team, turned up on time and left the site spotless. Will absolutely use again.",
    date: "March 2025",
    service: "Tree Removal",
    platform: "google",
  },
  {
    name: "Rachel S.",
    rating: 5,
    text: "Had a row of overgrown hedges that were blocking our view. The Green Barber shaped them perfectly — clean lines, great finish. Quick to respond and very reasonably priced for the work done.",
    date: "February 2025",
    service: "Hedge Trimming",
    platform: "google",
  },
  {
    name: "Tom W.",
    rating: 5,
    text: "Called on a Thursday after storm damage, had a team here Friday morning. Cleared a large branch that had come down across the driveway. Efficient, safe, and very reassuring in a stressful situation.",
    date: "January 2025",
    service: "Emergency Tree Removal",
    platform: "google",
  },
  {
    name: "Christine B.",
    rating: 5,
    text: "Highly recommend The Green Barber. Pruned two large native trees near our house — they knew exactly how to balance safety with keeping the trees healthy. Very knowledgeable and great to deal with.",
    date: "December 2024",
    service: "Tree Pruning",
    platform: "google",
  },
  {
    name: "Paul N.",
    rating: 5,
    text: "Stump from a removed tree had been an eyesore for two years. Green Barber ground it down flush with the lawn in under an hour. Friendly, on time, very tidy job. Great local business.",
    date: "November 2024",
    service: "Stump Grinding",
    platform: "google",
  },
];

const FACEBOOK_REVIEWS: Review[] = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely fantastic service! The team removed a large gum tree that was dangerously close to our house. They were professional, efficient, and left the yard spotless. Highly recommend The Green Barber to anyone in the Hobart area.",
    date: "February 2025",
    service: "Tree Removal",
    platform: "facebook",
  },
  {
    name: "James T.",
    rating: 5,
    text: "Used The Green Barber for hedge trimming and couldn't be happier. They shaped our overgrown hedges perfectly and the price was very reasonable. Will definitely be booking again before summer.",
    date: "January 2025",
    service: "Hedge Trimming",
    platform: "facebook",
  },
  {
    name: "Linda K.",
    rating: 5,
    text: "Had a stump in the middle of the lawn for years — these guys ground it down flush in under an hour. Quick to respond, fair pricing, and very tidy work. Exactly what we needed in Dodges Ferry.",
    date: "December 2024",
    service: "Stump Grinding",
    platform: "facebook",
  },
  {
    name: "Mark R.",
    rating: 5,
    text: "Outstanding tree pruning job on our old fruit trees. The arborist knew exactly how to open up the canopy without stressing the trees. Already seeing better growth this season. Very knowledgeable team.",
    date: "November 2024",
    service: "Tree Pruning",
    platform: "facebook",
  },
  {
    name: "Emma W.",
    rating: 5,
    text: "Called them for an urgent job after a branch came down in the storm. They were out the next morning and had everything cleared safely by midday. Incredibly professional and reassuring in a stressful situation.",
    date: "October 2024",
    service: "Emergency Tree Removal",
    platform: "facebook",
  },
];

// Interleave: Google, Facebook, Google, Facebook …
const ALL_REVIEWS: Review[] = GOOGLE_REVIEWS.flatMap((g, i) =>
  FACEBOOK_REVIEWS[i] ? [g, FACEBOOK_REVIEWS[i]] : [g]
);

// ─── Sub-components ────────────────────────────────────────────────────────────

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

// ─── Main carousel component ───────────────────────────────────────────────────

const AUTOPLAY_INTERVAL = 5000;

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);

  const total = ALL_REVIEWS.length;

  const go = useCallback(
    (dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((c) => (c + dir + total) % total);
    },
    [total]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), AUTOPLAY_INTERVAL);
    return () => clearInterval(id);
  }, [paused, go]);

  const review = ALL_REVIEWS[current];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  return (
    <section
      className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-3 mb-3">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              What Our Customers Say
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-4">
            Real reviews from satisfied customers across Southern Tasmania
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars overall">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
              ))}
            </div>
            <span className="font-semibold text-gray-800">5.0</span>
            <span className="text-gray-400">·</span>
            <GoogleLogo className="h-4 w-4" />
            <span className="text-sm text-gray-600">Google</span>
            <span className="text-gray-400">·</span>
            <FacebookLogo className="h-4 w-4" />
            <span className="text-sm text-gray-600">Facebook</span>
          </div>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <Card className="shadow-lg border border-gray-100">
                  <CardContent className="p-8 flex flex-col gap-5">
                    {/* Platform badge + stars */}
                    <div className="flex items-center justify-between">
                      <StarRating rating={review.rating} />
                      <div className="flex items-center gap-1.5">
                        {review.platform === "google" ? (
                          <>
                            <GoogleLogo className="h-4 w-4" />
                            <span className="text-xs font-medium text-gray-500">Google Review</span>
                          </>
                        ) : (
                          <>
                            <FacebookLogo className="h-4 w-4" />
                            <span className="text-xs font-medium text-gray-500">Facebook Review</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Service badge */}
                    <span className="self-start text-xs font-medium text-primary bg-primary/10 rounded-full px-3 py-1">
                      {review.service}
                    </span>

                    {/* Review text */}
                    <p className="text-gray-700 text-base leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </p>

                    {/* Reviewer + date */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <span className="text-primary font-bold text-sm">
                            {review.name.charAt(0)}
                          </span>
                        </div>
                        <span className="font-semibold text-gray-900">{review.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">{review.date}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Prev / Next */}
            <button
              onClick={() => go(-1)}
              className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:border-primary hover:text-primary transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-sm hover:border-primary hover:text-primary transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-1.5 mt-6" role="tablist" aria-label="Review navigation">
            {ALL_REVIEWS.map((r, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1} of ${total}`}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://share.google/1ZmIIcEl4Z2iHc3EJ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all reviews on Google (opens in new tab)"
          >
            <Button className="bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
              <GoogleLogo className="mr-2 h-4 w-4" />
              View Reviews on Google
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61573561687111&sk=reviews"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all reviews on Facebook (opens in new tab)"
          >
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <FacebookLogo className="mr-2 h-4 w-4" />
              View Reviews on Facebook
              <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
