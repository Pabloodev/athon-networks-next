"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";
import TicketForm from "@/app/ui/components/TicketForm";

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

      <div className="p-5 gap-30">
        <TicketForm />
      </div>
    </div>
  );
}
