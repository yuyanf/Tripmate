"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import { useRouter } from 'next/navigation';

const HomePage = () => {
  // const router = useRouter();
  // const user = null;

  // if (!user) router.push('/login');

  return (
    <main className="mx-auto max-w-7xl px-6">
      <div className="flex min-h-screen flex-col gap-6 py-10 sm:gap-10">
        <div>
          <motion.span
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 1.5 }}
            className='inline-block w-full bg-[url("/plane_sky.jpg")] bg-clip-text text-center text-lg font-bold tracking-wide text-transparent sm:text-xl lg:text-4xl'
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

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <Image
            src="/plane_sky.jpg"
            alt="plane city"
            width={1216}
            height={832}
            priority
            className="aspect-video w-full rounded-3xl object-cover"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default HomePage;
