import { Button, buttonVariants } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const navLinks = [
    { href: "#explorar", label: "Explorar" },
    { href: "#como-funciona", label: "Cómo funciona" },
    { href: "#comercios", label: "Para comercios" },
    { href: "#faq", label: "FAQ" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-neutral-800/50">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-bold tracking-tight text-white transition-colors">
            Un<span className="text-[#C8FF00]">Ke</span>
          </span>
          <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[#C8FF00] after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="#suscribirme"
            className={cn(buttonVariants({ variant: "default" }), "hidden sm:inline-flex bg-[#C8FF00] text-black hover:bg-[#d4ff1a] font-semibold px-5 py-2 text-sm transition-all hover:scale-105")}
          >
            Suscribirme
          </a>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden text-white hover:bg-neutral-900" />}>
              <Menu className="h-5 w-5" />
              <span className="sr-only">Abrir menú</span>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-neutral-800 text-white w-[280px]">
              <nav className="flex flex-col gap-6 mt-12">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-neutral-400 hover:text-[#C8FF00] transition-colors border-b border-neutral-900 pb-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#suscribirme"
                  className={cn(buttonVariants({ variant: "default" }), "bg-[#C8FF00] text-black hover:bg-[#d4ff1a] font-semibold mt-4 w-full")}
                >
                  Suscribirme
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
