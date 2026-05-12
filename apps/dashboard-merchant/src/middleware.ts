import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Mock de Supabase Auth
// TODO: Reemplazar con cliente real de Supabase
const isAuthenticated = (request: NextRequest) => {
  const token = request.cookies.get('unke_auth_token')?.value
  return token === 'mock-admin-token'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  const isLoginPage = pathname === '/login'

  const authenticated = isAuthenticated(request)

  if (!authenticated && !isLoginPage) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (authenticated && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
