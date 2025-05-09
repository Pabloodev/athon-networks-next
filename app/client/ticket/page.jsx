"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useState, useEffect } from "react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "./../../ui/components/sheet"; // ajuste o caminho se necessário

export default function Page() {
  const [data, setData] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/tickets", {
          method: "POST",
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
      <p>Relatório de tickets em aberto</p>

      <div className="p-5 flex gap-30">
        <div className="flex flex-col gap-5">
          <h2 className="text-lg text-white">Tickets em aberto</h2>

          <ul className="flex items-center gap-2 flex-wrap">
            {data && data.open_tickets && data.open_tickets.length > 0 ? (
              data.open_tickets.map((ticket, index) => (
                <Sheet key={index}>
                  <SheetTrigger asChild>
                    <li
                      className="flex-wrap border border-gray-500 p-5 w-[200px] flex flex-col items-center justify-between gap-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer h-[180px]"
                      onClick={() => setSelectedTicket(ticket)}
                    >
                      <span className="font-semibold text-center break-words line-clamp-2">
                        {ticket.subject}
                      </span>
                      <span className="text-orange-500 text-sm">{ticket.date_created}</span>
                      <span className="text-green-300 text-sm">{ticket.status}</span>
                    </li>
                  </SheetTrigger>

                  <SheetContent side="right">
                    <SheetHeader>
                      <SheetTitle>Detalhes do Ticket</SheetTitle>
                      <SheetDescription>
                        {selectedTicket ? (
                          <span className="flex flex-col gap-2">
                            <span>
                              <span className="text-white">Assunto: </span>
                              <span className="text-green-300">{selectedTicket.subject}</span>
                            </span>
                            <span>
                              <span className="text-white">Criado em: </span>
                              <span className="text-orange-300">{selectedTicket.date_created}</span>
                            </span>
                            <span>
                              <span className="text-white">Status: </span>
                              <span className="text-purple-300">{selectedTicket.status}</span>
                            </span>
                            <span>
                              <span className="text-white">Status: </span>
                              <span className="text-blue-300">{selectedTicket.id}</span>
                            </span>
                            <span className="flex flex-col gap-2 mt-10">
                              <span className="text-white">Mensagem: </span>
                              <span className="text-white">{selectedTicket.message}</span>
                            </span>
                          </span>
                        ) : (
                          <span>Carregando ticket...</span>
                        )}
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              ))
            ) : (
              <div>Carregando...</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
