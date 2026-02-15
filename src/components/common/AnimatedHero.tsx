"use client";

import { motion } from "framer-motion";

interface AnimatedHeroProps {
  title: string;
  description: string;
}

export function AnimatedHero({ title, description }: AnimatedHeroProps) {
  return (
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>{title}</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

