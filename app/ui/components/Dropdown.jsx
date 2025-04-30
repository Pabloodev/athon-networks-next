'use client'

import { useRouter } from 'next/navigation'

export default function Dropdown() {

  const router = useRouter()

  const handleLogout = async () => {
    // Faz a requisição POST para a API de logout
    await fetch('/api/logout', {
      method: 'POST',
    })

    // Redireciona para a página de login
    router.push('/login')
  }

  return (
    <div className='absolute flex items-center'>
      <ul className='bg-black mt-5 border-1 border-gray-500 rounded-sm'>
        <li className='p-1 px-3'>
          <button className='flex text-center items-center hover:text-white cursor-pointer' onClick={handleLogout}>
            <span>logout</span>
          </button>
        </li>
      </ul>
    </div>
  )
}