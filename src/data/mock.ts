import { Stethoscope, Scissors, Pill, Wrench, Heart, Scale, Apple, Film, Coffee, Dumbbell } from "lucide-react";

export const categories = [
  { id: "veterinaria", name: "Veterinaria", icon: Stethoscope },
  { id: "peluqueria", name: "Peluquería", icon: Scissors },
  { id: "farmacia", name: "Farmacia", icon: Pill },
  { id: "mecanico", name: "Mecánico", icon: Wrench },
  { id: "odontologo", name: "Odontólogo", icon: Heart },
  { id: "abogado", name: "Abogado", icon: Scale },
  { id: "verduleria", name: "Verdulería", icon: Apple },
  { id: "cine", name: "Cine", icon: Film },
  { id: "cafeteria", name: "Cafetería", icon: Coffee },
  { id: "gimnasio", name: "Gimnasio", icon: Dumbbell },
];

export const businesses = [];

export const testimonials = [
  {
    id: "1",
    quote: "Desde que estoy en UnKe, el 30% de mis clientes nuevos vienen de la red.",
    author: "Martín",
    business: "Peluquería El Corte",
    avatar: "https://i.pravatar.cc/150?u=martin"
  },
  {
    id: "2",
    quote: "Nos ayudó a conectar con otros comercios de Recoleta y hacer compras en conjunto.",
    author: "Laura",
    business: "Clínica Dental Sonrisa",
    avatar: "https://i.pravatar.cc/150?u=laura"
  },
  {
    id: "3",
    quote: "Escanean el QR, ven el descuento y vuelven. Es simple y no pago comisiones abusivas.",
    author: "Carlos",
    business: "Taller Mecánico Rodríguez",
    avatar: "https://i.pravatar.cc/150?u=carlos"
  }
];
