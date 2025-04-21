'use client'

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import CeoContainer from "../ui/components/CeoContainer";
import { slidesData } from "./../../app/data/slidesData";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
        className="flex flex-col items-center justify-center min-h-screen space-y-6 px-4 sm:px-0 text-center overflow-hidden"
        id="home"
      >
        <div className="relative w-full max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="w-full"
            >
              <h1 className="text-3xl sm:text-5xl font-bold text-white glow mb-4 text-[3.2em] leading-[1.1] drop-shadow-[0_0_20px_rgba(255,255,255,0.384)] drop-shadow-[0_0_40px_rgba(255,255,255,0.281)]">
                {slidesData[currentSlide].title}
              </h1>
              <p className="text-sm sm:text-base max-w-md mx-auto text-gray-300">
                {slidesData[currentSlide].description}
              </p>
              <div className="mt-8 flex justify-center float-icon">
                {React.createElement(slidesData[currentSlide].icon, {
                  className: "w-16 h-16 text-purple-400 glow shadow-purple-500",
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-10 md:mt-20">
          <CeoContainer />
        </div>
      </motion.div>
    </>
  );
}
