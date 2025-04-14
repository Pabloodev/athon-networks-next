'use client'

import { BanknoteArrowUp, Headset  } from "lucide-react";

const cardsClient = [
  {
    name: "Central de faturas",
    link: "/client/faturas",
    icon: BanknoteArrowUp
  },
  {
    name: "Abrir ticket",
    link: "/client/ticket",
    icon: Headset
  },
]

export default function Page() {
  return (
    <div className="p-20 flex flex-col gap-20">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl text-white">Boa noite, Pablo</h1>
        <p>
          Aqui você encontra um menu onde pode acompanhar seus serviçoes, enviar
          um ticket e exibir suas faturas.
        </p>
      </div>

        <ul className="flex items-center gap-5">
          {cardsClient.map((card, index) => (
            <li className="flex flex-col gap-5 border-1 border-gray-500 p-5 rounded-lg" key={index}>
              <card.icon className="w-6 h-6 text-white" />
              <p className="text-white">{card.name}</p>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <div className="">
            <h1 className="mb-3">Serviços contratados</h1>
            <div className="border-1 border-gray-500 rounded-lg p-10">

            </div>
          </div>

          <div className="">
            <h1 className="mb-3">Serviços em andamento</h1>
            <div className="border-1 border-gray-500 rounded-lg p-10">

            </div>
          </div>
        </div>

    </div>
  );
}
