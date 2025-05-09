"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import TicketForm from "@/app/ui/components/TicketForm";

export default function Page() {

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
