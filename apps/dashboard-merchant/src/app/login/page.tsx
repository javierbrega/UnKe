"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Hardcoded dev authentication
    if (email === 'admin' && password === 'admin') {
      // Mock setting cookie for middleware
      document.cookie = "unke_auth_token=mock-admin-token; path=/;"
      router.push('/')
      router.refresh()
    } else {
      setError('Credenciales incorrectas (tip: usa admin / admin)')
    }
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center p-6 sm:p-24 bg-unke-darker text-white">
      <div className="w-full max-w-md space-y-8 bg-unke-dark p-8 rounded-2xl border border-neutral-800 shadow-xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white">
            UnKe <span className="text-unke-lime">Merchant</span>
          </h2>
          <p className="mt-2 text-sm text-neutral-400">
            Ingresa a tu panel de comercio
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email" className="sr-only">Usuario / Email</label>
              <input
                id="email"
                name="email"
                type="text"
                required
                className="relative block w-full rounded-t-md border-0 bg-neutral-900 py-3 px-4 text-white ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-unke-lime sm:text-sm sm:leading-6"
                placeholder="Email o usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-b-md border-0 bg-neutral-900 py-3 px-4 text-white ring-1 ring-inset ring-neutral-800 placeholder:text-neutral-500 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-unke-lime sm:text-sm sm:leading-6"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center font-medium">{error}</p>}

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-lg bg-unke-lime px-3 py-3 text-sm font-semibold text-black hover:bg-[#d4ff1a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-unke-lime transition-all"
            >
              Ingresar al Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
