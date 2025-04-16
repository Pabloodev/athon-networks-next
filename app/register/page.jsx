"use client"

import ThreeParticles from "../ui/components/ThreeParticles"
import { RegisterForm } from "../../components/register-form"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full items-center bg-black">
      {/* Lado Esquerdo - Animação */}
      <div className="w-1/2 flex items-center justify-center">
      <ThreeParticles />
      </div>

      {/* Lado Direito - Formulário */}
      <div className="w-1/3 flex flex-col justify-center gap-4">

        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  )
}
