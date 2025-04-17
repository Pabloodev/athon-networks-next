"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Ellipsis } from 'lucide-react';

export default function Page() {
  const [data, setData] = useState(null);
  const username = "lucas.net";
  const password = "1Abx3825@@@@";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.28.18.58:7047/api/invoices", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const json = await response.json();
        console.log(json);
        setData(json);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Link className="flex text-lg items-center" href="/client">
        <ArrowLeft />
        <span>Voltar ao menu</span>
      </Link>
      <h1 className="text-white text-2xl mt-10">Faturas</h1>
      <p>Relatório de pagamentos, emissão de boleto e QR code, tudo de uma forma simples.</p>

      <div className="p-10">
        <ul>
          {data?.invoices.length > 0 ? (
            data.invoices.map((invoice, index) => (
              <li className="border-1 border-gray-500 p-5 w-[200px] flex flex-col items-center gap-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl
               hover:bg-white/5 cursor-pointer" key={index}>
                <Ellipsis className="self-start hover:text-shite" color="#fff"/>
                <p className="text-white">{invoice.ref}</p> {/* Substitua por campos reais do seu objeto */}
                <p className="text-purple-500 font-bold">{invoice.total}</p>
                <p className="text-green-200">{invoice.status}</p>
              </li>
            ))
          ) : (
            <p>Carregando...</p>
          )}
        </ul>
      </div>
    </div>
  );
}
