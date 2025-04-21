"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

export default function Page() {
  const [data, setData] = useState(null);
  const username = "lucas.net";
  const password = "1Abx3825@@@@";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.28.18.58:7047/api/tickets", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const json = await response.json();
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
      <h1 className="text-2xl text-white mt-10">Ticket Page</h1>
      <p>Relatorio de tickets em aberto</p>

      <div className="p-10">
        <ul className="flex items-center gap-2">
          {data && data.open_tickets && data.open_tickets.length > 0 ? (
            data.open_tickets.map((ticket, index) => (
              <li
                className="border-1 border-gray-500 p-5 w-[200px] flex flex-col items-center gap-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer"
                key={index}
              >
                <p>{ticket.subject}</p>
                <p className="text-orange-500 text-sm">{ticket.date_created}</p>
                <p className="text-green-300 text-sm">{ticket.status}</p>
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
