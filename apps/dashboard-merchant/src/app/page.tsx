"use client"
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = "unke_auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    router.push('/login')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-unke-darker p-8">
      <header className="flex justify-between items-center mb-12 border-b border-neutral-800 pb-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            UnKe <span className="text-unke-lime">Merchant</span>
          </h1>
          <p className="text-neutral-400 mt-1">Panel de control de tu comercio</p>
        </div>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg border border-neutral-800 transition-colors text-sm font-medium"
        >
          Cerrar sesión
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Metric Cards */}
        <div className="bg-unke-dark p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium">Escaneos QR este mes</h3>
          <p className="text-4xl font-bold text-white mt-2">128</p>
          <p className="text-unke-lime text-sm mt-2">↑ 12% vs mes anterior</p>
        </div>

        <div className="bg-unke-dark p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium">Cupones Redimidos</h3>
          <p className="text-4xl font-bold text-white mt-2">45</p>
          <p className="text-unke-lime text-sm mt-2">↑ 5% vs mes anterior</p>
        </div>

        <div className="bg-unke-dark p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium">Visitas a tu Micrositio</h3>
          <p className="text-4xl font-bold text-white mt-2">312</p>
          <p className="text-neutral-500 text-sm mt-2">Igual que el mes anterior</p>
        </div>
      </main>
      
      <section className="mt-12 bg-unke-dark border border-neutral-800 rounded-2xl p-8">
         <h2 className="text-xl font-semibold mb-6">Gestión de Micrositio</h2>
         <p className="text-neutral-400 mb-6">Administra cómo te ven otros negocios y profesionales en la red UnKe.</p>
         <button className="bg-unke-lime text-black px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90">
            Editar información comercial
         </button>
      </section>
    </div>
  )
}
