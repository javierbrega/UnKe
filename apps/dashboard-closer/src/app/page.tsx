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
            UnKe <span className="text-unke-closerBlue">Closer</span>
          </h1>
          <p className="text-neutral-400 mt-1">Gestión de cartera y comisiones</p>
        </div>
        <button 
          onClick={handleLogout}
          className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg border border-neutral-800 transition-colors text-sm font-medium"
        >
          Cerrar sesión
        </button>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Metric Cards */}
        <div className="bg-unke-dark p-6 rounded-2xl border border-unke-closerBlue/20">
          <h3 className="text-neutral-400 text-sm font-medium">Comisiones del Mes</h3>
          <p className="text-4xl font-bold text-white mt-2">$450,000</p>
          <p className="text-unke-closerBlue text-sm mt-2">En camino a la meta</p>
        </div>

        <div className="bg-unke-dark p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium">Comercios Activos</h3>
          <p className="text-4xl font-bold text-white mt-2">42</p>
          <p className="text-green-500 text-sm mt-2">+3 esta semana</p>
        </div>

        <div className="bg-unke-dark p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium">En Riesgo (Churn)</h3>
          <p className="text-4xl font-bold text-white mt-2">5</p>
          <p className="text-red-500 text-sm mt-2">Requieren tu atención hoy</p>
        </div>

        <div className="bg-unke-dark p-6 rounded-2xl border border-neutral-800">
          <h3 className="text-neutral-400 text-sm font-medium">Proyección Mensual</h3>
          <p className="text-4xl font-bold text-white mt-2">$620,000</p>
        </div>
      </main>
      
      <section className="mt-12">
         <h2 className="text-xl font-semibold mb-6">Alertas de Cartera</h2>
         
         <div className="space-y-4">
            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h4 className="text-red-400 font-semibold">El comercio "Peluquería El Corte" no actualizó sus descuentos hace 15 días.</h4>
                <p className="text-sm text-neutral-400 mt-1">Riesgo de churn alto. Contáctalos para ofrecerles ayuda.</p>
              </div>
              <button className="bg-red-500/20 text-red-500 hover:bg-red-500/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Contactar por WhatsApp
              </button>
            </div>

            <div className="bg-yellow-500/10 border border-yellow-500/20 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h4 className="text-yellow-400 font-semibold">Suscripción pendiente de "Veterinaria Patitas".</h4>
                <p className="text-sm text-neutral-400 mt-1">El cobro falló hace 2 días.</p>
              </div>
              <button className="bg-yellow-500/20 text-yellow-500 hover:bg-yellow-500/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Revisar facturación
              </button>
            </div>
         </div>
      </section>
    </div>
  )
}
