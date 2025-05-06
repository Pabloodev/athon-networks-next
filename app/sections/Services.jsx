"use client";

import { services } from "../data/services";
import { ArrowUpRight, CheckCheck, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  return (
    <div className="min-h-screen bg-black text-white relative" id="services">
      <section className="container mx-auto px-6 sm:px-4 py-12 sm:py-24">
        <div className="text-center sm:mb-20 mb-10">
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
                    <h2 className="text-white font-bold text-xl">
                      {service.title}
                    </h2>
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
                className="fixed inset-0 z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-black border border-gray-500 rounded-lg w-full max-w-md mx-auto flex flex-col gap-2 p-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between w-full">
                      <h1 className="text-lg sm:text-xl font-bold">
                        {selectedService.title}
                      </h1>
                      <button
                        onClick={() => setSelectedService(null)}
                        className="cursor-pointer duration-300 ease-out transform hover:scale-110 hover:text-red-500"
                      >
                        <X />
                      </button>
                    </div>

                    <div className="text-gray-300 text-sm">
                      {selectedService.description}
                    </div>

                    <ul className="flex flex-col gap-1">
                      <p className="text-blue-500 font-semibold">Serviços</p>
                      {selectedService.services.map((service, index) => (
                        <li className="flex items-center gap-2" key={index}>
                          <CheckCheck size={20}/>
                          <p className="text-gray-300">{service}</p>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex flex-col gap-1">
                      <p className="text-green-500 font-semibold">Benefícios</p>
                      {selectedService.beneficios.map((service, index) => (
                        <li className="flex items-center gap-2" key={index}>
                          <CheckCheck size={20}/>
                          <p className="text-gray-300">{service}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-gray-500 pt-4">
                      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-center sm:text-left text-sm">
                          Entre em contato para saber mais sobre este serviço!
                        </p>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setSelectedService(null)}
                            className="border border-red-400 p-2 rounded-sm cursor-pointer duration-300 ease-out transform hover:scale-110 hover:bg-red-700 text-sm"
                          >
                            Fechar
                          </button>
                          <a
                            href="https://wa.me/5511932123875?text=Olá%20gostaria%20de%20saber%20sobre%20os%20serviços%20da%20Athon%20Networks!"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <button className="p-2 border border-blue-400 rounded-sm cursor-pointer duration-300 ease-out transform hover:scale-110 hover:bg-blue-700 text-sm">
                              Contatar
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
