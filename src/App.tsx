import { useState } from "react";
import { motion } from "motion/react";
import { QrCode, UserPlus, MessageCircle,
  TrendingUp, Gift, Globe, BarChart3, Star, ChevronDown, Check,
} from "lucide-react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { categories, testimonials } from "./data/mock";

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [contactDialogOpen, setContactDialogOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setContactDialogOpen(false);
      setSubmitted(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
      
      {/* 1. Navbar */}
      <Header />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. ¿Cómo funciona? */}
      <section id="como-funciona" className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Tres pasos y estás adentro.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: QrCode, title: "Escaneá", desc: "Encontrá el QR de UnKe en cualquier comercio adherido de tu zona." },
              { icon: UserPlus, title: "Suscribite", desc: "Unite a la red en segundos y desbloqueá descuentos en todos los rubros." },
              { icon: MessageCircle, title: "Ahorrá", desc: "Canjeá tu beneficio por WhatsApp o directo en el mostrador. Así de simple." }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.1} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center mb-6 group-hover:border-primary group-hover:bg-primary/10 transition-colors duration-500">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Sección Para Comercios */}
      <section id="comercios" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-card border-y border-white/5" />
        <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 blur-[100px] rounded-full" />
        
        <div className="container mx-auto px-6 max-w-7xl relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <FadeIn>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-6">¿Tenés un comercio? <br/>Entrá a la red.</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-xl">
                  Sumate a la red de beneficios B2B que ya está ayudando a cientos de comercios de proximidad como el tuyo a crecer sin comisiones ocultas.
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Dialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
                  <DialogTrigger render={<Button size="lg" className="rounded-full text-background font-semibold h-14 px-8 shadow-xl shadow-primary/20 text-base" />}>
                      Quiero sumar mi comercio
                  </DialogTrigger>
                  <DialogContent className="bg-card border-border sm:max-w-md rounded-3xl">
                    <DialogHeader>
                      <DialogTitle className="text-2xl">Sumá tu comercio a UnKe</DialogTitle>
                      <DialogDescription>Completá unos datos rápidos y te contactamos hoy mismo para darte de alta.</DialogDescription>
                    </DialogHeader>
                    {!submitted ? (
                      <form onSubmit={handleContactSubmit} className="space-y-4 mt-4">
                        <div className="space-y-2">
                          <Label htmlFor="businessName">Nombre del comercio</Label>
                          <Input required id="businessName" className="bg-background border-border h-12 rounded-xl focus-visible:ring-primary/50" placeholder="Ej. Peluquería El Corte" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                            <Label htmlFor="contactName">Tu nombre</Label>
                            <Input required id="contactName" className="bg-background border-border h-12 rounded-xl focus-visible:ring-primary/50" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Teléfono / WhatsApp</Label>
                            <Input required id="phone" type="tel" className="bg-background border-border h-12 rounded-xl focus-visible:ring-primary/50" />
                          </div>
                        </div>
                        <div className="space-y-2">
                           <Label htmlFor="category">Rubro principal</Label>
                           <Select required>
                            <SelectTrigger id="category" className="bg-background border-border h-12 rounded-xl focus:ring-primary/50">
                              <SelectValue placeholder="Seleccioná un rubro" />
                            </SelectTrigger>
                            <SelectContent className="bg-card border-border rounded-xl">
                              <SelectItem value="gastronomia">Gastronomía</SelectItem>
                              <SelectItem value="salud">Salud & Bienestar</SelectItem>
                              <SelectItem value="servicios">Servicios Generales</SelectItem>
                              <SelectItem value="tienda">Tienda / Retail</SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <DialogFooter className="pt-4">
                          <Button type="submit" className="w-full h-12 rounded-xl text-background font-bold text-base">Enviar solicitud</Button>
                        </DialogFooter>
                      </form>
                    ) : (
                      <div className="py-12 flex flex-col items-center justify-center text-center">
                        <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
                          <Check className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">¡Solicitud recibida!</h3>
                        <p className="text-muted-foreground">Te vamos a escribir por WhatsApp muy pronto.</p>
                      </div>
                    )}
                  </DialogContent>
                </Dialog>
              </FadeIn>
            </div>
            
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {[
                { icon: TrendingUp, title: "Nuevos clientes", desc: "Tráfico recurrente sin pagar publicidad ads." },
                { icon: Gift, title: "Beneficios cruzados", desc: "Descuentos en otros rubros para vos y empleados." },
                { icon: Globe, title: "Presencia digital", desc: "Micrositio HD optimizado por nosotros." },
                { icon: BarChart3, title: "Data en tiempo real", desc: "Sabé quién escanea tu QR y cuándo." }
              ].map((benefit, i) => (
                <FadeIn key={i} delay={0.2 + i * 0.1}>
                  <Card className="bg-background/50 border-border/50 border shadow-none">
                    <CardContent className="p-6">
                      <benefit.icon className="w-8 h-8 text-primary mb-4" />
                      <h4 className="font-semibold text-lg mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p>
                    </CardContent>
                  </Card>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Rubros disponibles */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-7xl text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16">Todos los rubros en un solo lugar.</h2>
          </FadeIn>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-12 gap-x-4">
             {categories.map((cat, i) => {
               const Icon = cat.icon;
               return (
                 <FadeIn key={cat.id} delay={i * 0.05} className="flex flex-col items-center group cursor-pointer">
                   <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-border group-hover:border-primary group-hover:bg-primary/5 flex items-center justify-center mb-4 transition-all duration-300">
                     <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                   </div>
                   <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{cat.name}</span>
                 </FadeIn>
               )
             })}
          </div>
        </div>
      </section>

      {/* 6. Testimonios */}
      <section className="py-24 bg-card/30 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-16 text-center">Lo que dicen nuestros comercios.</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.1}>
                <Card className="bg-card border-border h-full flex flex-col rounded-2xl shadow-lg">
                  <CardContent className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <Star className="w-6 h-6 text-primary mb-6 fill-primary" />
                      <p className="text-lg md:text-xl font-medium leading-relaxed italic mb-8">"{t.quote}"</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-primary/20">
                        <AvatarImage src={t.avatar} alt={t.author} />
                        <AvatarFallback className="bg-primary/20 text-primary">{t.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-foreground">{t.author}</p>
                        <p className="text-sm text-muted-foreground">{t.business}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12 text-center">Preguntas frecuentes.</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {[
                { q: "¿Cómo me suscribo a UnKe?", a: "Es súper fácil. Escaneá un código QR en cualquier comercio adherido o tocá 'Suscribirme' en nuestra web. Completás tu número, validamos tu cuenta y ¡listo!" },
                { q: "¿Cómo funcionan los cupones de descuento?", a: "Cada comercio tiene una oferta clara en su perfil. Cuando estés en el local, mostrale al cajero tu perfil activo o enviales el cupón directo por WhatsApp desde nuestra app." },
                { q: "¿Puedo cancelar cuando quiera?", a: "Totalmente. Entrás a tu perfil web y ponés cancelar suscripción. Sin llamadas incómodas, sin retenciones automáticas." },
                { q: "¿Cuánto cuesta para los comercios?", a: "Tenemos un plan base gratuito que te permite formar parte del ecosistema y planes Pro si querés métricas avanzadas y destques. ¡Consultanos completando el form!" },
                { q: "¿En qué zonas está disponible UnKe?", a: "Actualmente concentramos el 90% de nuestros comercios en CABA (Palermo, Belgrano, Recoleta, Colegiales) y creciendo semana a semana." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border bg-card rounded-xl px-6">
                  <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="UnKe Logo" className="w-10 h-10 rounded-full object-contain bg-black" />
                <span className="text-3xl font-bold tracking-tighter">UnKe<span className="text-primary">.</span></span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                La red premium de beneficios cruzados donde todos ganan. Comunidad, ahorro y proximidad.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-card hover:bg-primary/20 hover:text-primary flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-card hover:bg-[rgb(37,211,102)] hover:text-white flex items-center justify-center transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Plataforma</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#suscribirme" className="hover:text-primary transition-colors">Suscribirse</a></li>
                <li><a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a></li>
                <li><a href="#faq" className="hover:text-primary transition-colors">Centro de ayuda</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Para Comercios</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#comercios" className="hover:text-primary transition-colors">Sumar mi negocio</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Beneficios B2B</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Planes y Precios</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Login Admin</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Términos y condiciones</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Defensa al consumidor</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contacto directo</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} UnKe. Todos los derechos reservados.</p>
            <p className="mt-2 md:mt-0">Diseñado con cuidado en Buenos Aires.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

