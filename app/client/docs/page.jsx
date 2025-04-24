import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function Page() {
  return (
    <div>
      <Link className="flex text-lg items-center" href="/client">
        <ArrowLeft />
        <span>Voltar ao menu</span>
      </Link>
      <h1 className="text-2xl text-white mt-10">Docs Page</h1>
      <p>Documentação de utilização</p>
    </div>
  )
}