"use client";
import Background from "@/components/Background";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <main>
      <Background />
      <div className="max-w-9xl relative mx-auto flex h-screen flex-col items-center justify-center py-20">
        <div className="mt-40 p-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut", delay: 2 }}
            className='inline-block w-full bg-[url("/plane_sky.jpg")] bg-clip-text text-center text-lg font-bold text-transparent sm:text-2xl lg:text-4xl'
          >
            Tripmate
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className='text-balance bg-[url("/plane_sky.jpg")] bg-clip-text text-center text-4xl font-extrabold leading-none tracking-tight text-transparent sm:text-8xl lg:text-[160px]'
          >
            Make your travels memorable
          </motion.h1>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
