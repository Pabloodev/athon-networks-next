import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";
import { employeeSlides } from "../../data/employeeSlides";
import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";

export default function CeoContainer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % employeeSlides.length);
    },6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ x: 1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="w-full"
        >
          <div className="flex items-center gap-5">
            <div>
              <Avatar>
                <AvatarImage src="./gunters.jpg" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>

            <div>
              <p className="text-white text-start">
                {employeeSlides[currentSlide].name}
              </p>
              <p className="font-bold text-start">
                {employeeSlides[currentSlide].position}
              </p>
              <p className="text-start">
                {employeeSlides[currentSlide].comment}
              </p>
            </div>
          </div>

        </motion.div>
      </AnimatePresence>
    </div>
  );
}
