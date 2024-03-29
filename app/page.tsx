"use client";
import Background from "@/components/Background";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main>
      <Background />
      <div className="flex min-h-screen items-center py-20">
        <div className="relative mx-auto w-full max-w-[1440px] p-6 text-white opacity-85">
          <div className="max-w-5xl">
            <motion.h1
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-balance text-4xl leading-none tracking-tight sm:text-7xl lg:text-[160px]"
            >
              Make your travels
            </motion.h1>
            <motion.span
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
              className="inline-block text-4xl font-bold leading-none tracking-tight sm:text-7xl lg:text-[160px]"
            >
              memorable
            </motion.span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
