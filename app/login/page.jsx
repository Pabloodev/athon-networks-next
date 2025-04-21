import ThreeParticles from "../ui/components/ThreeParticles"
import { LoginForm } from "../ui/components/Login-form"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center bg-black">
      {/* Lado Esquerdo - Animação */}
      <div className="w-1/2 items-center justify-center hidden md:flex">
        <ThreeParticles />
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-full md:w-1/3 flex flex-col justify-center gap-4">

        <div className="flex justify-center">

          <div className="w-full max-w-xs flex flex-col gap-10">
            <Link className="text-center" href="/">
              <span>Voltar a pagina principal</span>
            </Link>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}
