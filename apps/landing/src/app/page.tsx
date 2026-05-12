export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold mb-4">
        UnKe <span className="text-[#C8FF00]">Network</span>
      </h1>
      <p className="text-neutral-400 max-w-2xl text-lg mb-8">
        Sitio Institucional (unke.ar) - Venta del modelo B2B. (En desarrollo).
      </p>
      <div className="flex gap-4">
        <a href="http://localhost:3000" className="px-6 py-3 bg-[#C8FF00] text-black rounded-lg font-semibold hover:scale-105 transition-transform">
          Dashboard Comercios
        </a>
        <a href="http://localhost:3001" className="px-6 py-3 border border-[#3B82F6] text-[#3B82F6] rounded-lg font-semibold hover:bg-[#3B82F6]/10 transition-colors">
          Dashboard Closers
        </a>
      </div>
    </div>
  )
}
