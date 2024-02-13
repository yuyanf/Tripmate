"use client";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main>
      <div className="flex min-h-screen items-center py-20">
        <div className="relative mx-auto max-w-7xl p-6 text-white opacity-85">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="text-balance text-4xl leading-none tracking-tight sm:text-8xl lg:text-[160px]"
          >
            Make your travels <span className="font-bold">memorable</span>
          </motion.h1>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            className="ml-2 mt-4 inline-block w-full text-lg font-bold sm:text-2xl lg:text-4xl"
          >
            Tripmate
          </motion.span>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
