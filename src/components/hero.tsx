import { useState, useRef } from "react"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight, Users, Percent, Bot } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#050505] pt-16 pb-20 md:pt-24 md:pb-32 group"
    >
      {/* Patrón de Puntos Base (Fade In on mount) */}
      <div 
        className="absolute inset-0 opacity-[0.03] animate-in fade-in duration-[2000ms]"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8FF00 1.5px, transparent 1.5px)',
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Patrón Interactivo Hover (Nodos Iluminados) */}
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #C8FF00 1.5px, transparent 1.5px)',
          backgroundSize: '50px 50px',
          WebkitMaskImage: `radial-gradient(200px circle at ${mousePosition.x}px ${mousePosition.y}px, black, transparent)`
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="relative flex justify-center mb-8">
            <div className="relative flex items-center justify-center w-[84px] h-[84px] md:w-[124px] md:h-[124px] rounded-3xl">
              {/* Blur general */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#C8FF00] rounded-full blur-[30px] opacity-20 pointer-events-none"></div>
              
              {/* Borde animado giratorio */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_270deg,#C8FF00_360deg)] animate-[spin_2s_linear_infinite]" />
              </div>
              
              {/* Fondo interior para tapar el centro del gradiente */}
              <div className="absolute inset-[2px] bg-black rounded-[22px] z-10"></div>
              
              {/* Imagen del logo */}
              <img 
                src="/logo.png" 
                alt="UnKe Logo" 
                className="relative z-20 w-[80px] h-[80px] md:w-[120px] md:h-[120px] object-contain rounded-[22px]"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-full px-4 py-2 mb-8">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#C8FF00] border-2 border-black flex items-center justify-center text-[10px] font-bold text-black">P</div>
              <div className="w-6 h-6 rounded-full bg-neutral-600 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white">V</div>
              <div className="w-6 h-6 rounded-full bg-neutral-500 border-2 border-black flex items-center justify-center text-[10px] font-bold text-white">F</div>
            </div>
            <span className="text-sm text-neutral-300">+100 negocios ya conectados</span>
          </div>

          {/* Título */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1] mb-6">
            La red de negocios que
            <br />
            <span className="text-[#C8FF00]">se recomiendan entre sí.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            UnKe es una red donde los negocios de tu zona colaboran y se ofrecen beneficios B2B reales. No es publicidad, <strong className="text-white font-medium">es una red de clientes</strong>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contacto"
              className={cn(
                buttonVariants({ variant: "default", size: "lg" }),
                "bg-[#C8FF00] text-black hover:bg-[#d4ff1a] font-semibold px-8 py-6 text-base w-full sm:w-auto group transition-all hover:scale-105"
              )}
            >
              Quiero sumar mi negocio
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Stats o mini features (B2B Value propositions) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center sm:justify-start text-neutral-400">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                <Users className="h-5 w-5 text-[#C8FF00]" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Clientes nuevos</p>
                <p className="text-xs text-neutral-500">Adquirí tráfico de la red</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start text-neutral-400">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                <Percent className="h-5 w-5 text-[#C8FF00]" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Beneficios cruzados</p>
                <p className="text-xs text-neutral-500">Sinergia con comercios locales</p>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start text-neutral-400">
              <div className="w-10 h-10 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0">
                <Bot className="h-5 w-5 text-[#C8FF00]" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm">Gestión con IA</p>
                <p className="text-xs text-neutral-500">Automatizá tus estrategias</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
