
'use client'

import { useRouter } from 'next/navigation'

export default function LogoutButton() {
  const router = useRouter()

  const handleLogout = async () => {
    // Faz a requisição POST para a API de logout
    await fetch('/api/logout', {
      method: 'POST',
    })

    // Redireciona para a página de login
    router.push('/login')
  }

  return <button onClick={handleLogout}>Sair</button>
}
