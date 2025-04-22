"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";


export default function Page() {

  return (
    <div className="flex flex-col gap-10">
      <div>
        <Link className="flex text-lg items-center" href="/client">
          <ArrowLeft />
          <span>Voltar ao menu</span>
        </Link>
        <h1 className="text-2xl text-white mt-10">Abrir ticket</h1>
        <p>Abra um ticket de forma simples</p>
      </div>


      <div className="flex items-start">
        <form className="flex flex-col gap-5 items-center">

          <div className="flex flex-col gap-2">
            <label className="text-white" htmlFor="subject">Assunto</label>
            <input className="w-full border-1 p-2 border-gray-500 rounded-sm" type="text" name="subject" id="subject" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-white" htmlFor="desc">Descrição do problema</label>
            <textarea className="w-full p-5 border-1 border-gray-500 rounded-sm" name="desc" id="desc"></textarea>
          </div>

          <div>
            <span className="text-white">Prioridade</span>
            <div className="flex items-center gap-3 mt-4">
              <button type="button" className="p-2 px-4 border-1 border-gray-500 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer">1</button>
              <button type="button" className="p-2 px-4 border-1 border-gray-500 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer">2</button>
              <button type="button" className="p-2 px-4 border-1 border-gray-500 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer">3</button>
              <button type="button" className="p-2 px-4 border-1 border-gray-500 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer">4</button>
              <button type="button" className="p-2 px-4 border-1 border-gray-500 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer">5</button>
            </div>
          </div>

          <button className="text-white border-1 border-gray-500 p-5 w-full rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
