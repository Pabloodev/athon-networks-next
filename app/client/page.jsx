'use client'

import { BanknoteArrowUp, Headset } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Progress } from "@/components/ui/progress"

const cardsClient = [
  {
    name: "Central de faturas",
    link: "/client/invoices",
    icon: BanknoteArrowUp
  },
  {
    name: "Abrir ticket",
    link: "/client/ticket",
    icon: Headset
  },
]

const placeHolder = [
  {
    thumb: "/dois.png",
    name: "Athon docs",
    status: "Ativo",
    progress: "0.4"
  },
  {
    thumb: "/um.png",
    name: "Athon Captive",
    status: "Ativo",
    progress: "0.2"
  },

]

export default function Page() {
  return (
    <div className="flex flex-col gap-20">

      <div className="flex flex-col">
        <h1 className="text-2xl text-white">Boa noite, Pablo</h1>
        <p>
          Aqui você encontra um menu onde pode acompanhar seus serviçoes, enviar
          um ticket e exibir suas faturas.
        </p>
      </div>

      <ul className="flex items-center gap-5">
        {cardsClient.map((card, index) => (
          <li key={index}>
            <Link className="flex flex-col gap-5 border-1 p-5 px-10 rounded-lg transition duration-700" href={card.link}>
              <card.icon className="text-white" size={35} />
              <p className="text-white">{card.name}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-5">
        <div className="">
          <h1 className="mb-3 text-white text-xl">Serviços contratados</h1>
          <div className="flex items-center border-1 border-gray-500 rounded-lg w-[400px] h-[200px] p-10">
            <ul className="flex gap-5 items-center justify-center">
              {placeHolder.map((card, index) => (
                <li className="flex flex-col items-center gap-2" key={index}>
                  <Image src={card.thumb} width={120} height={120} alt="Thumbnail Service" />
                  <Progress value={33} />
                  <p className="text-white">{card.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="">
          <h1 className="mb-3 text-white text-xl">Serviços em andamento</h1>
          <div className="border-1 border-gray-500 rounded-lg w-[400px] h-[200px]">

          </div>
        </div>
      </div>

    </div>
  );
}
