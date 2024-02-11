"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Background = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 isolate -z-10"
    >
      <div className="fixed inset-0 top-20 z-20 bg-gradient-to-t from-black to-transparent opacity-80" />
      <Image
        src="/fuji_pink_tint.jpg"
        alt="Fuji"
        width={1920}
        height={1249}
        priority
        className="z-10 h-full w-full rounded-3xl "
      />
    </motion.div>
  );
};

export default Background;
