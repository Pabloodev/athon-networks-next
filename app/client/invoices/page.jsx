"use client";

import Link from "next/link";
import { ArrowLeft, Ellipsis } from "lucide-react";
import { useEffect, useState } from "react";

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
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/invoices", {
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
      <h1 className="text-white text-2xl mt-10">Faturas</h1>
      <p>
        Relatório de pagamentos, emissão de boleto e QR code, tudo de uma forma
        simples.
      </p>

      <div className="p-10 flex gap-4 flex-wrap">
        {data?.invoices.length > 0 ? (
          data.invoices.map((invoice, index) => (
            <Sheet key={index}>
              <SheetTrigger asChild>
                <li
                  onClick={() => setSelectedInvoice(invoice)}
                  className="list-none border-1 border-gray-500 p-5 w-[200px] flex flex-col items-center gap-2 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-white/5 cursor-pointer"
                >
                  <Ellipsis className="self-start" color="#fff" />
                  <p className="text-white">{invoice.ref}</p>
                  <p className="text-purple-500 font-bold">{invoice.total}</p>
                  <p className="text-green-200">{invoice.status}</p>
                </li>
              </SheetTrigger>

              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="mb-5 flex flex-col gap-2">
                    <span className="text-white text-xl">Detalhes da fatura</span>
                    <span className="text-gray-300">Fatura: {selectedInvoice?.ref}</span>
                  </SheetTitle>
                  <SheetDescription className="text-white text-lg flex flex-col gap-2">
                    <span className="text-purple-400 text-xl font-bold">{selectedInvoice?.total}</span>
                    <span>
                      Status:{" "}
                      <span className="text-green-200">
                        {selectedInvoice?.status}
                      </span>
                    </span>
                  </SheetDescription>
                </SheetHeader>

                <div className="p-4 flex items-center gap-2">
                  <button className="w-full hover:bg-purple-900 cursor-pointer bg-purple-800 text-white p-2 rounded-xl">
                    Pagar com Pix
                  </button>
                  <button className="w-full border transition duration-300 ease-out transform transition hover:border-blue-600 cursor-pointer text-white p-2 rounded-xl">
                    Gerar Boleto
                  </button>
                </div>

                <div className="flex items-center gap-2 justify-center">
                  <button className="cursor-pointer transition duration-300 ease-out transform hover:scale-110 hover:text-blue-500 ">2 via fatura</button>
                </div>

                <SheetFooter>
                  <p className="text-xs text-center text-white">
                    Pagamento seguro por Athon Telecom.
                  </p>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          ))
        ) : (
          <p>Carregando...</p>
        )}
      </div>
    </div>
  );
}
