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

export const businesses = [
  {
    id: "1",
    name: "Veterinaria Patitas",
    category: "Veterinaria",
    icon: Stethoscope,
    zone: "Palermo",
    city: "Buenos Aires",
    discount: "15% OFF",
    description: "Atención 24hs. Emergencias, vacunación y peluquería canina.",
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600&h=400&fit=crop"
  },
  {
    id: "2",
    name: "Peluquería El Corte",
    category: "Peluquería",
    icon: Scissors,
    zone: "Villa Crespo",
    city: "Buenos Aires",
    discount: "20% OFF",
    description: "Cortes modernos, color y tratamientos capilares.",
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop"
  },
  {
    id: "3",
    name: "Farmacia Salud Total",
    category: "Farmacia",
    icon: Pill,
    zone: "Belgrano",
    city: "Buenos Aires",
    discount: "10% OFF",
    description: "Medicamentos, perfumería. Envíos a domicilio.",
    rating: 4.5,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop"
  },
  {
    id: "4",
    name: "Taller Mecánico Rodríguez",
    category: "Mecánico",
    icon: Wrench,
    zone: "Palermo",
    city: "Buenos Aires",
    discount: "15% OFF",
    description: "Service multimarca. Frenos, tren delantero.",
    rating: 4.7,
    reviews: 203,
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=400&fit=crop"
  },
  {
    id: "5",
    name: "Clínica Dental Sonrisa",
    category: "Odontólogo",
    icon: Heart,
    zone: "Recoleta",
    city: "Buenos Aires",
    discount: "25% OFF",
    description: "Limpieza, ortodoncia invisible, implantes.",
    rating: 4.9,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&h=400&fit=crop"
  },
  {
    id: "6",
    name: "Verdulería La Fresca",
    category: "Verdulería",
    icon: Apple,
    zone: "Colegiales",
    city: "Buenos Aires",
    discount: "10% OFF",
    description: "Frutas y verduras frescas. Orgánicos de huerta local.",
    rating: 4.4,
    reviews: 41,
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?w=600&h=400&fit=crop"
  }
];

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
