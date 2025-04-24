'use client'

import { services } from "../data/services";
import { ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from 'lucide-react';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'; // desativa scroll
    } else {
      document.body.style.overflow = ''; // reativa scroll
    }

    return () => {
      document.body.style.overflow = ''; // garante reset ao desmontar
    };
  }, [selectedService]);


  return (
    <div className="min-h-screen bg-black text-white relative" id="services">
      <section className="container mx-auto px-6 sm:px-4 py-12 sm:py-24">
        <div className="text-center sm:mb-16">
          <p className="text-purple-500 font-medium mb-2 sm:mb-4">Services</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            De onde vem tudo isso?
          </h2>
          <p className="text-gray-400 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base">
            Uma coleção abrangente de nossos serviços e recursos.
          </p>
        </div>

        <div>
          <ul className="flex items-center gap-3 flex-wrap justify-center">
            {services.map((service, index) => (
              <li key={index}>
                <button
                  onClick={() => setSelectedService(service)}
                  className="p-5 border border-gray-500 w-[300px] h-[150px] rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/10 cursor-pointer flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-white font-bold text-xl">{service.title}</h2>
                    <ArrowUpRight />
                  </div>
                  <p className="text-gray-400">{service.description}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal + Backdrop com animação */}
        <AnimatePresence>
          {selectedService && (
            <>
              {/* Backdrop animado */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-70 z-40"
                onClick={() => setSelectedService(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                exit={{ opacity: 0 }}
              />

              {/* Modal animado */}
              <motion.div
                className="fixed top-1/2 left-1/2 z-50 transform -translate-x-1/2 -translate-y-1/2 bg-black border border-gray-500 rounded-lg flex flex-col gap-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col gap-4 p-3 rounded-lg">
                  <div className="flex items-center justify-between w-full">
                    <h1 className="text-xl font-bold">{selectedService.title}</h1>
                    <button onClick={() => setSelectedService(null)} className="cursor-pointer duration-300 ease-out">
                      <X />
                    </button>
                  </div>

                  <div className="text-gray-300 text-sm">
                    {selectedService.description}
                  </div>
                  
                  <ul className="flex flex-col gap-1">
                    <p>Serviços</p>
                    {selectedService.services.map((service, index) => (
                      <li className="" key={index}> - {service}</li>
                    ))}
                  </ul>

                  <ul className="flex flex-col gap-1">
                    <p>Beneficios</p>
                    {selectedService.beneficios.map((service, index) => (
                      <li className="" key={index}> - {service}</li>
                    ))}
                  </ul>

                </div>


              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
