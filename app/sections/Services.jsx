'use client'

import { useState } from "react";
import CardServices from "../ui/components/CardServices";
import { CheckCircle } from "lucide-react";
// data
import services from "../data/services";

export default function Services() {
  const [activeModal, setActiveModal] = useState(null);

  const handleClick = (index) => {
    setActiveModal(index);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="min-h-screen bg-black text-white" id="services">
      <section className="container mx-auto px-6 sm:px-4 py-12 sm:py-24">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-purple-500 font-medium mb-2 sm:mb-4">Services</p>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 sm:mb-6">
            De onde vem tudo isso?
          </h2>
          <p className="text-gray-400 max-w-lg sm:max-w-2xl mx-auto text-sm sm:text-base">
            Uma coleção abrangente de nossos serviços e recursos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => (
            <div key={index}>
              <button onClick={() => handleClick(index)}>
                <CardServices {...service} />
              </button>

              {activeModal === index && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4">
                  <div className="bg-black p-6 sm:p-8 rounded-lg relative max-w-[90%] sm:max-w-lg md:max-w-2xl overflow-y-auto max-h-[90vh]">
                    <h3 className="text-2xl sm:text-3xl font-bold">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm sm:text-base text-gray-300 mb-6">
                      {service.description}
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-xl sm:text-2xl mb-3">Serviços</h4>
                        <ul className="space-y-2 flex flex-col">
                          {service.services.map((item, index) => (
                            <li
                              className="flex gap-3 items-center text-sm sm:text-base cursor-grab"
                              key={index}
                            >
                              <CheckCircle className="text-sky-600 w-6 h-6 flex-shrink-0" />

                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl mb-3">Benefícios</h4>
                        <ul className="space-y-2 flex flex-col">
                          {service.beneficios.map((item, index) => (
                            <li
                              className="flex gap-3 items-center text-sm sm:text-base"
                              key={index}
                            >
                              <CheckCircle className="text-sky-600 w-6 h-6 flex-shrink-0" />

                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        className="text-green-400 text-sm sm:text-base"
                        href="#"
                      >
                        <a target="_blank" rel="noreferrer" href="https://wa.me/11946543738?text=$Olá gostaria de conversar sobre um serviço da Athon Networks!" className="cursor-pointer">
                          Estou interessado, gostaria de conversar com algum
                          representante.
                        </a>
                      </a>
                    </div>

                    <button
                      onClick={closeModal}
                      className="mt-6 bg-white text-black px-4 py-2 rounded w-full sm:w-auto hover:bg-black hover:text-white border border-white duration-700 cursor-pointer"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
