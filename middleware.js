import { NextResponse } from 'next/server'

const PUBLIC_ROUTES = ['/', '/login']

export function middleware(request) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('token')?.value

  const isPublic = PUBLIC_ROUTES.includes(pathname)
  const isClientProtected = pathname.startsWith('/client')

  if (!token && isClientProtected) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (token && isPublic) {
    return NextResponse.redirect(new URL('/client', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/client/:path*', '/login'],
}
