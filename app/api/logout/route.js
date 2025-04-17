import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({ message: 'Logout realizado com sucesso' })

  // Deleta o cookie chamado 'token'
  response.cookies.set('token', '', {
    httpOnly: true,
    path: '/',
    expires: new Date(0), // expira imediatamente
  })

  return response
}
