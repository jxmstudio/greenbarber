"use client";

import { motion } from "framer-motion";

interface AnimatedHeroProps {
  title: string;
  description: string;
}

export function AnimatedHero({ title, description }: AnimatedHeroProps) {
  return (
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl">{description}</p>
        </motion.div>
      </div>
    </section>
  );
}

