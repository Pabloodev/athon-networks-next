import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div>
      <Link className="flex text-lg items-center" href="/client">
        <ArrowLeft />
        <span>Voltar ao menu</span>
      </Link>
      <h1 className="text-white text-2xl mt-10">Faturas</h1>
      <p>Relatorio de pagamentos, emissão de boleto e QR code, tudo de uma forma simples.</p>
    </div>
  )
}